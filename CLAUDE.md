@AGENTS.md

# Projet : guide-hypotheque.ca

Site web de guide hypothécaire pour immigrants au Canada. Génération de leads via un wizard de préapprobation gratuit + blog SEO.

## Stack technique

- **Framework** : Next.js 16.2.1 (App Router, SSG)
- **React** : 19.2.4
- **CSS** : Tailwind CSS v4 avec thème custom (voir `globals.css`)
- **Polices** : Montserrat (Google Fonts)
- **Déploiement** : Vercel
- **Domaine** : guide-hypotheque.ca
- **URL constante** : `src/lib/constants.ts` → `SITE_URL`

## Palette de couleurs

| Token        | Hex       | Usage                  |
|------------- |---------- |----------------------- |
| `gold`       | `#489D90` | CTA, accents, liens    |
| `gold-dark`  | `#328376` | Hover sur gold         |
| `gold-light` | `#EDF7F5` | Backgrounds légers     |
| `cream`      | `#F8F8F8` | Backgrounds sections   |
| `midnight`   | `#212243` | Texte titres, header   |

## Architecture des fichiers

```
src/
├── app/
│   ├── layout.tsx          # Layout racine (Header, Footer, CookieConsent)
│   ├── page.tsx            # Homepage
│   ├── globals.css         # Tailwind v4 + thème custom
│   ├── favicon.ico         # Favicon (généré depuis icon.png)
│   ├── icon.png            # Icône site 512x512 (auto-servie par Next.js)
│   ├── sitemap.ts          # Sitemap dynamique (auto-inclut blogPosts + wizardVariants + outils)
│   ├── robots.ts           # robots.txt
│   ├── blog/
│   │   ├── page.tsx        # Liste des articles (40 articles, groupés par catégorie)
│   │   └── [slug]/page.tsx # Article dynamique (JSON-LD, OpenGraph, BreadcrumbList)
│   ├── wizard/
│   │   ├── page.tsx        # Wizard principal de préapprobation
│   │   └── [variant]/page.tsx # Wizard par profil (7 variantes)
│   ├── outils/
│   │   ├── calculateur-prime-schl/page.tsx    # Calculateur prime SCHL interactif
│   │   ├── simulateur-stress-test/page.tsx    # Simulateur stress test hypothécaire
│   │   ├── checklist-documents/page.tsx       # Checklist documents hypothèque
│   │   └── eligibilite-achat-non-canadien/page.tsx # Quiz éligibilité Loi P-25.2
│   ├── faq/page.tsx
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── merci/page.tsx      # Page de remerciement post-wizard
│   ├── politique-confidentialite/page.tsx  # RGPD/Loi 25/PIPEDA
│   ├── mentions-legales/page.tsx
│   └── api/                # API routes (soumission wizard, etc.)
├── components/
│   ├── Header.tsx          # Nav fixe + dropdown wizard + CTA sticky bottom
│   ├── Footer.tsx          # Pied de page
│   ├── CookieConsent.tsx   # Bandeau cookies (3 catégories, localStorage, RGPD compliant)
│   ├── WizardCore.tsx      # Logique du wizard multi-étapes
│   ├── WizardCta.tsx       # Composant CTA réutilisable dans les articles
│   ├── InternalLink.tsx    # Lien interne SEO (utilisé dans blogContent)
│   ├── RelatedArticles.tsx # Articles reliés en bas de chaque article
│   └── FaqAccordion.tsx    # Accordéon FAQ
├── data/
│   ├── blogPosts.ts        # Métadonnées des 40 articles (slug, title, category, relatedSlugs)
│   ├── blogContent.tsx     # Contenu JSX des articles (Record<string, ReactNode>)
│   ├── wizardVariants.ts   # 9 variantes de wizard (travailleur-temporaire, étudiant, etc.)
│   ├── wizardSteps.ts      # Étapes du wizard
│   ├── bankPrograms.ts     # Programmes bancaires
│   ├── banks.ts            # Liste des banques
│   ├── cmhc.ts             # Données SCHL/CMHC
│   ├── documents.ts        # Documents requis
│   └── faq.ts              # Questions/réponses FAQ
└── lib/
    ├── constants.ts        # SITE_URL, SITE_NAME
    ├── scoring.ts          # Algorithme de scoring du wizard
    ├── validation.ts       # Validation des formulaires
    └── rateLimit.ts        # Rate limiting API
```

## Blog SEO

### Structure d'un article
- Métadonnées dans `blogPosts.ts` (slug, title, subtitle, description, category, readTime, wizardVariant, relatedSlugs)
- Contenu JSX dans `blogContent.tsx` (map `blogContentMap[slug]`)
- Chaque article a : JSON-LD (Article + BreadcrumbList), OpenGraph, 4-5 sections H2, 2+ liens internes (`InternalLink`), 2+ liens externes, 2 `WizardCta`
- Page dynamique : `src/app/blog/[slug]/page.tsx`

### Catégories (40 articles)
- Guide Principal (1) — article pilier
- Statut Immigration (3) — permis travail, étudiant, RP
- Province (5) — Québec, Ontario, C-B, Alberta, Manitoba
- Crédit (6) — construire crédit, sans historique, après faillite, rapport Equifax/TransUnion
- Situation Spéciale (4) — réfugié, travailleur autonome, conjoint
- Processus (4) — préapprobation, documents, étapes, stress test
- Financement (7) — mise de fonds, RAP/CELIAPP, transfert fonds, prime SCHL, programme nouveaux arrivants SCHL
- Achat (6) — duplex/triplex, frais cachés, assurance habitation, droits mutation, immeuble locatif
- Taux (1) — fixe vs variable
- Gestion (1) — renouvellement
- Légal (2) — interdiction achat non-canadien, courtier vs banque

### Sitemap
Dynamique (`src/app/sitemap.ts`), auto-inclut tous les `blogPosts`, `wizardVariants` et `toolPages`. Pas besoin de mise à jour manuelle quand on ajoute des articles ou outils.

## Wizard de préapprobation

9 variantes dans `wizardVariants.ts` :
- Principal, Travailleur Temporaire, Étudiant International, Résident Permanent
- Professionnel Réglementé, Travailleur Autonome, Québec, Express, Réfugié

Multi-étapes : statut immigration → province → revenu → crédit → mise de fonds → résultat + mise en relation courtier.

## Outils interactifs

4 outils sous `/outils/` (composants client avec `"use client"`, JSON-LD WebApplication) :
- **Calculateur prime SCHL** : calcul prime assurance hypothécaire selon prix et mise de fonds
- **Simulateur stress test** : qualification hypothécaire (taux majoré, ratios ABD/ATD, montant max)
- **Checklist documents** : 15 documents en 5 catégories, barre de progression, état via `Set<string>`
- **Éligibilité achat non-canadien** : quiz multi-étapes basé sur Loi P-25.2, exemptions par statut

## Conformité données personnelles

- **CookieConsent** (`src/components/CookieConsent.tsx`) : 3 catégories (essentiels toujours actifs, analytiques, marketing), localStorage avec versioning, UI accept all/reject all/personnaliser
- **Politique de confidentialité** (`src/app/politique-confidentialite/page.tsx`) : 14 sections, conforme RGPD + Loi 25 (Québec) + PIPEDA (Canada)
- Contact privacy : privacy@guide-hypotheque.ca

## Conventions de code

- Composants : PascalCase, fichiers `.tsx`
- Données : camelCase, fichiers `.ts` dans `src/data/`
- Pas de `"use client"` sauf si nécessaire (useState, useEffect, etc.)
- Liens internes dans articles : composant `<InternalLink slug="slug-de-article">texte du lien</InternalLink>`
- CTA dans articles : `<WizardCta />` ou `<WizardCta variant="dark" />`
- HTML entities pour accents français dans JSX (ex: `&eacute;` pour é) — utilisé dans certains composants mais pas systématique

## SEO

- `robots.txt` via `src/app/robots.ts`
- Sitemap dynamique via `src/app/sitemap.ts`
- JSON-LD sur chaque article (Article + BreadcrumbList)
- OpenGraph + meta description sur toutes les pages
- Liens externes avec `target="_blank" rel="noopener noreferrer"`
- Maillage interne via `relatedSlugs` + `InternalLink` dans le contenu
- Polices : `text-base` minimum sur tout le site (pas de `text-sm` sauf exceptions mineures)
- Curseur : `cursor: pointer` global sur tous les éléments interactifs (voir `globals.css`)
