# Guide de Gestion des Articles — guide-hypotheque.ca

## Architecture des articles

Le blog repose sur **2 fichiers centraux** qui doivent rester synchronisés :

| Fichier | Rôle |
|---|---|
| `src/data/blogPosts.ts` | Métadonnées (slug, titre, description, catégorie, readTime, relatedSlugs) |
| `src/data/blogContent.tsx` | Contenu JSX de chaque article (texte, tableaux, CTAs, liens) |

La page `src/app/blog/[slug]/page.tsx` fait le lien entre les deux via le `slug`.

---

## Ajouter un nouvel article — Checklist

### 1. Ajouter les métadonnées dans `blogPosts.ts`

Ajouter une entrée dans le tableau `blogPosts` :

```typescript
// ====== ARTICLE #XX ======
{
  slug: "mon-nouveau-slug",                          // URL : /blog/mon-nouveau-slug
  title: "Titre SEO Long et Descriptif",
  subtitle: "Phrase courte visible sous le titre.",
  description: "Meta description pour Google (max ~160 car.).",
  category: "Catégorie",                              // ex: Taux, Crédit, Province, Processus, etc.
  readTime: "X min",
  wizardVariant: undefined,                           // ou "travailleur-temporaire", "etudiant", etc.
  relatedSlugs: ["slug-1", "slug-2", "slug-3"],      // 3-4 articles liés (maillage interne)
},
```

### 2. Ajouter le contenu JSX dans `blogContent.tsx`

Ajouter une entrée dans `blogContentMap` avec **exactement le même slug** :

```tsx
"mon-nouveau-slug": (
  <>
    <p>Introduction de l'article...</p>

    <h2 className="text-xl font-extrabold text-midnight">Titre Section</h2>
    <p>Contenu...</p>

    <WizardCta />

    <h2 className="text-xl font-extrabold text-midnight">Autre Section</h2>
    <p>Contenu avec <InternalLink slug="slug-existant">texte du lien</InternalLink>...</p>

    <WizardCta variant="dark" />
  </>
),
```

### 3. Mettre à jour le compteur d'articles

Dans `src/app/blog/page.tsx`, mettre à jour le nombre dans le titre metadata :

```typescript
title: "Guides Hypothèque Immigrants Canada — XX Articles",
```

### 4. Vérifier le build

```bash
npx next build
```

Le build **doit passer sans erreur** avant tout commit/push.

### 5. Commit et push

```bash
git add src/data/blogPosts.ts src/data/blogContent.tsx src/app/blog/page.tsx
git commit -m "Add article: titre-court-de-l-article"
git push -u origin <nom-de-branche>
```

---

## Règles critiques (ne pas casser le site)

### Le slug est la clé de voûte

- Le `slug` dans `blogPosts.ts` et la clé dans `blogContentMap` de `blogContent.tsx` **DOIVENT être identiques**.
- Si un slug existe dans `blogPosts.ts` mais pas dans `blogContent.tsx`, la page affichera un article vide.
- Si un slug existe dans `blogContent.tsx` mais pas dans `blogPosts.ts`, le contenu ne sera jamais accessible (404).

### Ne jamais renommer un slug publié

- Les slugs sont des URLs indexées par Google. Renommer = perte de SEO.
- Si un renommage est nécessaire, ajouter une redirection dans `next.config.ts` ou `vercel.json`.

### Toujours vérifier le build avant de push

```bash
npx next build
```

Si le build échoue, **ne pas push**. Corriger d'abord.

### Ne pas modifier `blogPosts.ts` sans mettre à jour `blogContent.tsx` (et vice versa)

Les deux fichiers doivent toujours avoir le même nombre d'entrées avec les mêmes slugs.

### Fichiers à ne JAMAIS supprimer

| Fichier | Raison |
|---|---|
| `vercel.json` | Configuration Vercel (routes, headers). Sans lui = 404 en prod |
| `src/app/not-found.tsx` | Page 404 custom. Sans elle = erreur Next.js |
| `src/app/error.tsx` | Error boundary. Empêche les crashs blancs |
| `src/lib/constants.ts` | Constantes SITE_URL/SITE_NAME utilisées partout |

---

## Sitemap

La sitemap est **automatique**. Le fichier `src/app/sitemap.ts` génère le XML à partir de :

- Pages statiques (accueil, wizard, blog, faq, etc.)
- Variantes wizard (`src/data/wizardVariants.ts`)
- **Tous les articles** de `blogPosts.ts`

Il n'y a **rien à faire manuellement** pour la sitemap. Ajouter un article dans `blogPosts.ts` l'ajoute automatiquement à `/sitemap.xml`.

---

## Conventions de contenu des articles

### Structure type d'un article

1. **Paragraphe d'introduction** (2-3 phrases, mot-clé principal en gras)
2. **Sections h2** (5-8 par article) avec `className="text-xl font-extrabold text-midnight"`
3. **WizardCta** : 2-3 par article (alterner `light` et `dark`)
4. **InternalLink** : 2-4 par article (maillage interne vers articles existants)
5. **Liens externes** : 2-3 vers sources officielles (CMHC, Banque du Canada, banques)
6. **Tableaux** : si données comparatives (taux, primes, ratios)
7. **FAQ** (optionnel) : section h2 + paires h3/p en fin d'article

### Composants disponibles

```tsx
// CTA vers le wizard (2 variantes)
<WizardCta />                    // fond clair (gold-light)
<WizardCta variant="dark" />     // fond sombre (midnight)

// Lien interne vers un autre article (maillage SEO)
<InternalLink slug="slug-existant">texte optionnel</InternalLink>
// Si pas de texte, affiche automatiquement le titre de l'article

// Lien externe
<a href="https://..." target="_blank" rel="noopener noreferrer">texte</a>
```

### Formatage des liens dans les articles

Le CSS `.blog-article a` applique automatiquement la couleur teal et le underline aux liens texte.

Les liens avec les classes `bg-*` ou `rounded-lg` (boutons CTA) sont **exclus** de cette règle pour garder leur propre style. Ne pas ajouter ces classes à des liens texte normaux.

---

## CSS — Points d'attention

| Règle | Fichier | Impact |
|---|---|---|
| `.blog-article a:not([class*="bg-"]):not([class*="rounded-lg"])` | `globals.css` | Style les liens texte dans les articles. Ne pas toucher sans vérifier les boutons CTA |
| Couleur `--color-gold` (#489D90 ou #C9A84C selon la branche) | `globals.css` | Couleur accent globale. Changer = impact sur tout le site |
| `.font-serif` | `globals.css` | Police Georgia pour les titres. Utilisée dans les pages article |

---

## Structure des branches

- `main` : branche de production (déployée sur Vercel)
- Les branches feature doivent être mergées via PR dans `main`
- Ne jamais push directement sur `main` sans vérifier le build
- Les preview deployments Vercel se font sur les branches feature

---

## Résumé rapide — Ajouter un article en 5 étapes

1. Ajouter métadonnées dans `blogPosts.ts` (slug, title, description, relatedSlugs)
2. Ajouter contenu JSX dans `blogContent.tsx` (même slug, h2, WizardCta, InternalLink, liens externes)
3. Mettre à jour le compteur dans `blog/page.tsx`
4. `npx next build` — doit passer
5. Commit + push
