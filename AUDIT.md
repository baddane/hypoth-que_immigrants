# Audit Complet du Projet guide-hypotheque.ca

**Date** : 2026-03-22
**Scope** : Tous les fichiers source (21 fichiers TS/TSX, 6 configs, 4 data, 1 API route)

---

## 1. SECURITE (Critique)

### 1.1 API route `submit-lead` — Score/Quality envoyé par le client

**Fichier** : `src/app/api/submit-lead/route.ts:56-57`

Le score et la qualite du lead sont calcules cote client (dans `WizardClient.tsx:70-77`) puis envoyes tels quels a l'API qui les accepte sans recalcul :

```ts
score: lead.score || 0,
quality: lead.quality || "OK",
```

**Risque** : Un utilisateur peut envoyer `{ score: 999, quality: "EXCELLENT" }` pour etre route vers les partenaires premium.

**Correction** : Recalculer le score cote serveur avec `calculateLeadScore()` dans la route API. Ne jamais faire confiance aux donnees client pour le scoring.

### 1.2 Pas de rate limiting sur l'API

**Fichier** : `src/app/api/submit-lead/route.ts`

Aucune protection contre le spam ou les attaques par force brute. Un script peut soumettre des milliers de leads fake.

**Correction** : Ajouter un rate limiter (ex: `@upstash/ratelimit` ou un middleware custom) + un honeypot field ou reCAPTCHA.

### 1.3 Donnees PII loguees en clair dans la console

**Fichier** : `src/app/api/submit-lead/route.ts:66-73`

```ts
console.log(`Name: ${processedLead.prenom} ${processedLead.nom}`);
console.log(`Email: ${processedLead.email}`);
console.log(`Phone: ${processedLead.telephone}`);
```

**Risque** : En production (Vercel, AWS), ces logs contiennent des donnees personnelles en clair. Non conforme PIPEDA (mentionne pourtant dans le footer et la FAQ).

**Correction** : Supprimer les logs PII ou les masquer (`j***@email.com`, `514-***-**89`). Utiliser un service de logging structure (Axiom, Datadog) avec redaction.

### 1.4 Formulaire de contact sans backend

**Fichier** : `src/app/contact/page.tsx:23`

Le `<form>` n'a pas d'`action` ni de `onSubmit`. Le bouton "Envoyer" ne fait rien — les donnees sont perdues.

**Correction** : Creer une route API `/api/contact` ou integrer un service (Formspree, Resend).

### 1.5 IP collectee sans mention dans la politique

**Fichier** : `src/app/api/submit-lead/route.ts:61`

```ts
ip: request.headers.get("x-forwarded-for") || "unknown",
```

L'IP est collectee mais la page politique de confidentialite devrait explicitement mentionner cette collecte.

---

## 2. DUPLICATION DE CODE (Majeur)

### 2.1 Wizard duplique a ~95% entre 2 fichiers

**Fichiers** :
- `src/app/wizard/page.tsx` (336 lignes)
- `src/app/wizard/[variant]/WizardClient.tsx` (332 lignes)

Ces deux fichiers contiennent le meme wizard avec le meme formulaire de lead, la meme validation, le meme slider, les memes boutons. La seule difference est que `WizardClient` accepte des `defaultAnswers`.

**Correction** : Extraire un composant unique `WizardCore` qui accepte des props optionnelles (`defaultAnswers`, `ctaText`, `variantId`). Le reutiliser dans les deux pages.

### 2.2 Validation email dupliquee 3 fois

La meme regex email (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`) est presente dans :
- `src/app/api/submit-lead/route.ts:19`
- `src/app/wizard/page.tsx:48`
- `src/app/wizard/[variant]/WizardClient.tsx:58`

**Correction** : Creer un fichier `src/lib/validation.ts` avec les fonctions de validation partagees.

### 2.3 Validation telephone dupliquee avec logiques differentes

- **API** (`route.ts:28`) : `phoneDigits.replace(/\D/g, "").length < 10` — compte les chiffres
- **Wizard** (`page.tsx:50`) : `/^[\d\s\-+()]{10,}$/` — verifie le format

Les deux approches sont differentes et pourraient donner des resultats contradictoires.

**Correction** : Unifier la logique de validation telephone dans `src/lib/validation.ts`.

---

## 3. ARCHITECTURE & STRUCTURE

### 3.1 Fichier `banks.ts` est un "God file"

**Fichier** : `src/data/banks.ts` (434 lignes)

Ce fichier melange :
- Les interfaces TypeScript (`LeadData`)
- Les regles CMHC (`cmhcRules`)
- Les primes d'assurance (`cmhcInsurancePremiums`)
- Les programmes bancaires (`bankPrograms`)
- Les documents requis (`requiredDocuments`)
- Le scoring des leads (`scoringRules`, `calculateLeadScore`)
- Les etapes du wizard (`wizardSteps`)
- Les FAQ (`faqItems`)

**Correction** : Separer en modules distincts :
- `src/data/cmhc.ts` — regles, primes, credit alternatif
- `src/data/banks.ts` — programmes bancaires uniquement
- `src/data/documents.ts` — documents requis
- `src/lib/scoring.ts` — logique de scoring
- `src/data/wizardSteps.ts` — etapes du wizard
- `src/data/faq.ts` — questions FAQ

### 3.2 Pas de types partages

L'interface `LeadData` dans `banks.ts` n'est pas utilisee dans l'API route ni dans les composants wizard. Chaque fichier reconstruit sa propre structure de donnees.

**Correction** : Creer `src/types/lead.ts` et l'utiliser partout.

### 3.3 Aucun test

Il n'y a aucun test unitaire, d'integration, ni E2E. Pas de dossier `__tests__`, pas de configuration Jest/Vitest/Playwright.

**Correction** : Ajouter au minimum :
- Tests unitaires pour `calculateLeadScore()` (logique metier critique)
- Tests d'integration pour l'API route `submit-lead`
- Tests E2E pour le parcours wizard (Playwright)

### 3.4 Pas de CI/CD

Aucun fichier `.github/workflows/`, pas de Vercel config, pas de Dockerfile.

**Correction** : Ajouter un workflow GitHub Actions avec lint + build + tests.

---

## 4. PERFORMANCE & SEO

### 4.1 Page FAQ marque "use client" alors qu'elle pourrait etre server

**Fichier** : `src/app/faq/page.tsx:1`

La FAQ utilise `useState` uniquement pour l'accordeon. Cela rend toute la page client-side, ce qui est mauvais pour le SEO (le contenu FAQ est invisible au crawler au premier rendu).

**Correction** : Utiliser un composant `<details>/<summary>` natif HTML (zero JS) ou extraire l'accordeon dans un petit composant client et garder la page server.

### 4.2 Wizard principal est "use client" sans metadata

**Fichier** : `src/app/wizard/page.tsx`

La page wizard principale n'exporte pas de `metadata`. Elle est entierement client-side, donc pas de title/description pour le SEO.

**Correction** : Creer un layout `src/app/wizard/layout.tsx` avec les metadata, ou restructurer pour que la page soit server avec un composant client imbrique.

### 4.3 Pas de `sitemap.xml` ni `robots.txt`

Avec 22 articles de blog + 7 variantes wizard + pages statiques, il manque un sitemap pour aider Google a indexer.

**Correction** : Ajouter `src/app/sitemap.ts` et `src/app/robots.ts` (API Next.js native).

### 4.4 Images absentes

Le site n'utilise aucune image reelle — seulement des SVG par defaut de Next.js dans `/public/`. Pas d'Open Graph images, pas d'illustrations.

**Correction** : Ajouter des OG images pour le partage social (au minimum via `next/og` pour la generation dynamique).

### 4.5 Pas de `canonical` URL sur les pages

Les metadonnees n'incluent pas de `canonical` URL, ce qui peut causer des problemes de contenu duplique.

---

## 5. UX & ACCESSIBILITE

### 5.1 Sticky bottom bar couvre du contenu

**Fichier** : `src/components/Header.tsx:130-142`

La barre CTA fixe en bas (`fixed bottom-0`) couvre potentiellement du contenu. Le layout ajoute `pb-14` mais certaines pages peuvent avoir des elements interactifs en bas.

### 5.2 Le wizard ne gere pas la navigation browser

Si l'utilisateur clique "Retour" dans le navigateur au milieu du wizard, il quitte completement le wizard au lieu de revenir a l'etape precedente.

**Correction** : Utiliser `window.history.pushState` ou un query param `?step=3` pour synchroniser l'etat du wizard avec l'historique browser.

### 5.3 Pas de gestion d'erreur visible pour l'API

**Fichier** : `src/app/wizard/page.tsx:81-83` et `WizardClient.tsx:92-94`

```ts
} catch {
  // Still redirect even if API fails
}
```

Si l'API echoue, l'utilisateur est redirige vers `/merci` sans qu'aucun lead n'ait ete enregistre. Le lead est perdu silencieusement.

**Correction** : Stocker le lead en `localStorage` comme backup, puis retenter via un service worker ou afficher un message d'avertissement.

### 5.4 Formulaire lead: labels sans `htmlFor`

Les `<label>` dans les formulaires wizard n'ont pas d'attribut `htmlFor` lie a un `id` sur les `<input>`. Mauvais pour l'accessibilite.

### 5.5 Liens morts dans la page Merci

**Fichier** : `src/app/merci/page.tsx:92`

```tsx
<Link href="/blog/documents-hypotheque" ...>
```

Le slug `documents-hypotheque` n'existe pas dans `blogPosts.ts`. Ce lien mene vers une 404.

---

## 6. DONNEES & LOGIQUE METIER

### 6.1 Scoring inversement proportionnel pour l'apport

**Fichier** : `src/data/banks.ts:238-242`

```ts
apport: {
  "Aucun (0%)": 20,
  "5% du prix d'achat": 15,
  "10-15%": 10,
  "20%+": 5,
},
```

Un lead qui n'a AUCUN apport (0%) recoit le meilleur score (20 points), tandis qu'un lead avec 20%+ de mise de fonds recoit le pire (5 points). C'est contre-intuitif — un lead avec plus d'apport est normalement meilleur.

**Explication possible** : Ce scoring semble optimise pour les leads qui ONT BESOIN du service (assurance SCHL obligatoire < 20%), donc les leads sans apport representent un meilleur potentiel de commission. Si c'est intentionnel, ajouter un commentaire explicatif.

### 6.2 Le scoring max theorique ne peut pas atteindre "EXCELLENT"

Le score maximum possible est :
- statut: Citoyen Canadien = 100
- duree: Plus de 5 ans = 60
- credit: Excellent = 40
- revenu: 100k+ = 50
- apport: 0% = 20
- moment: Aujourd'hui = 20

**Total max = 290** (atteint EXCELLENT >= 200)

Mais pour un immigrant typique (RP, 1-2 ans, pas de credit) :
- statut: RP = 50
- duree: 1-2 ans = 25
- credit: Non = 10
- revenu: 75k = 35
- apport: 5% = 15
- moment: Cette semaine = 5

**Total = 140** (GOOD seulement)

Le seuil EXCELLENT (200) est quasi-impossible pour un immigrant recent, qui est pourtant la cible du site.

### 6.3 Donnees `bankPrograms` et `requiredDocuments` non utilisees

Ces exports dans `banks.ts` ne sont importes dans aucun composant ou page. Ce sont des donnees mortes.

**Correction** : Les integrer dans les pages (ex: page "About", blog, FAQ detaillee) ou les supprimer.

---

## 7. MANQUES FONCTIONNELS (TODOs)

D'apres les TODOs dans le code :

| TODO | Fichier | Priorite |
|------|---------|----------|
| Integration API Nesto | route.ts:101 | Haute |
| Integration API Ratehub | route.ts:110 | Haute |
| Email automation (ConvertKit/MailerLite) | route.ts:115 | Haute |
| Sauvegarde en base de donnees | route.ts:118 | Critique |
| Formulaire contact fonctionnel | contact/page.tsx | Moyenne |

Sans base de donnees, **aucun lead n'est persiste**. En production, tous les leads sont perdus au restart du serveur.

---

## 8. CONFIG & TOOLING

### 8.1 `next.config.ts` est vide

**Fichier** : `next.config.ts`

Aucune configuration. Ajouter au minimum :
- `images.domains` si des images externes sont ajoutees
- `headers()` pour les headers de securite (CSP, HSTS, X-Frame-Options)
- `redirects()` pour les URLs de migration SEO

### 8.2 Pas de `.env.example`

Le projet n'a pas de fichier `.env.example` pour documenter les variables d'environnement necessaires (cles API Nesto, Ratehub, DB, etc.).

### 8.3 Pas de Prettier

Seul ESLint est configure. Ajouter Prettier pour le formatage automatique.

---

## RESUME DES PRIORITES

| Priorite | Item | Impact |
|----------|------|--------|
| P0 | Recalculer le score cote serveur | Securite |
| P0 | Ajouter une base de donnees (leads perdus) | Business |
| P0 | Supprimer les logs PII | Conformite PIPEDA |
| P1 | Rate limiting API | Securite |
| P1 | Dedupliquer le wizard (WizardCore) | Maintenabilite |
| P1 | Corriger le lien mort `/blog/documents-hypotheque` | UX |
| P1 | Rendre le formulaire contact fonctionnel | UX |
| P2 | Ajouter sitemap.xml + robots.txt | SEO |
| P2 | Rendre la page FAQ server-side | SEO |
| P2 | Ajouter metadata au wizard principal | SEO |
| P2 | Ajouter des tests (scoring + API + E2E) | Qualite |
| P3 | Splitter banks.ts en modules | Architecture |
| P3 | Gestion historique browser dans le wizard | UX |
| P3 | Ajouter OG images | Social/SEO |
| P3 | CI/CD pipeline | DevOps |
