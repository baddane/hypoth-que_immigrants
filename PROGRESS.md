# Progression — Articles Blog

## Problème identifié
`blogContent.tsx` a 9 articles avec des **clés qui ne matchent PAS** les 22 slugs de `blogPosts.ts`.
Résultat : toutes les pages `/blog/[slug]` affichent du contenu vide.

Le rendu se fait via `blogContentMap[slug]` dans `src/app/blog/[slug]/page.tsx` (ligne 36).

## Fichiers clés
- `src/data/blogPosts.ts` — 22 métadonnées d'articles (slugs, titres, catégories)
- `src/data/blogContent.tsx` — contenu JSX de chaque article, clé = slug
- `src/app/blog/[slug]/page.tsx` — page de rendu

## Contenu existant dans blogContent.tsx (9 articles, MAUVAIS slugs)
Ces clés existent mais ne matchent aucun slug de blogPosts.ts :
1. `hypotheque-immigrants-canada-guide` — Guide général (réutilisable pour article #1)
2. `hypotheque-permis-travail` — Permis de travail (réutilisable pour #3)
3. `hypotheque-residence-permanente` — RP (pas de slug correspondant direct)
4. `hypotheque-quebec` — Québec (réutilisable pour #5)
5. `combien-emprunter` — Capacité d'emprunt (pas de slug correspondant)
6. `documents-hypotheque` — Documents (pas de slug correspondant)
7. `banques-hypotheque` — Banques (pas de slug correspondant)
8. `mauvais-credit` — Mauvais crédit (réutilisable pour #19)
9. `sans-historique-credit` — Sans crédit (réutilisable pour #2)

## Les 22 slugs à écrire (de blogPosts.ts)

| # | Slug | Catégorie | Statut |
|---|------|-----------|--------|
| 1 | `hypotheque-travailleur-temporaire-5pourcent` | Guide Principal | ❌ À écrire |
| 2 | `hypotheque-sans-historique-credit` | Crédit | ❌ À écrire (adapter depuis `sans-historique-credit`) |
| 3 | `hypotheque-permis-travail-ouvert` | Statut Immigration | ❌ À écrire (adapter depuis `hypotheque-permis-travail`) |
| 4 | `hypotheque-etudiant-permis-postdiplome` | Statut Immigration | ❌ À écrire |
| 5 | `hypotheque-francophone-quebec` | Province | ❌ À écrire (adapter depuis `hypotheque-quebec`) |
| 6 | `preapprobation-hypotheque-immigrant` | Processus | ❌ À écrire |
| 7 | `hypotheque-conjoint-chomeur-revenu` | Situation Spéciale | ❌ À écrire |
| 8 | `hypotheque-revenu-etranger-convert` | Situation Spéciale | ❌ À écrire |
| 9a | `hypotheque-alberta-immigrants-calgary-edmonton` | Province | ❌ À écrire |
| 9b | `hypotheque-bc-immigrants-vancouver-victoria` | Province | ❌ À écrire |
| 9c | `hypotheque-manitoba-immigrants-winnipeg` | Province | ❌ À écrire |
| 10 | `hypotheque-maison-vs-condo-immigrant` | Achat | ❌ À écrire |
| 11 | `hypotheque-travailleur-autonome-freelance` | Situation Spéciale | ❌ À écrire |
| 12 | `hypotheque-credit-international-alternative-data` | Crédit | ❌ À écrire |
| 13 | `hypotheque-cosignataire-parent-immigrant` | Situation Spéciale | ❌ À écrire |
| 14 | `hypotheque-reer-rap-immigrant-premier-achat` | Financement | ❌ À écrire |
| 15 | `hypotheque-assurance-schl-sagen-cmhc` | Financement | ❌ À écrire |
| 16 | `hypotheque-refinancement-renouvellement-immigrant` | Gestion | ❌ À écrire |
| 17 | `hypotheque-taux-fixe-variable-immigrant` | Taux | ❌ À écrire |
| 18 | `hypotheque-timeline-fermeture-immigrant` | Processus | ❌ À écrire |
| 19 | `hypotheque-score-credit-minimum-immigrant` | Crédit | ❌ À écrire (adapter depuis `mauvais-credit`) |
| 20 | `hypotheque-amortissement-duree-choix` | Financement | ❌ À écrire |
| 21 | `hypotheque-ontario-immigrants-toronto` | Province | ❌ À écrire |
| 22 | `hypotheque-taxe-acheteur-etranger-exemption` | Légal | ❌ À écrire |

## Pattern de chaque article (JSX)
Chaque article suit ce pattern dans blogContent.tsx :
```tsx
"slug-ici": (
  <>
    <p>Intro paragraphe...</p>
    <h2 className="font-serif text-xl text-gray-900">Section titre</h2>
    <p>Contenu...</p>
    <ul className="space-y-2">
      <li><strong>Point :</strong> Détail</li>
    </ul>
    <WizardCta />
    {/* ... plus de sections ... */}
    <WizardCta variant="dark" />
  </>
),
```

## Composant CTA réutilisable (déjà dans le fichier)
```tsx
const WizardCta = ({ variant = "light" }: { variant?: "light" | "dark" }) => (...)
```
Placer 2 CTAs par article : un `<WizardCta />` au milieu, un `<WizardCta variant="dark" />` à la fin.

## Données de référence disponibles
- `src/data/cmhc.ts` — Règles SCHL officielles (ratios, stress test, primes)
- `src/data/bankPrograms.ts` — Programmes par banque (RBC, TD, Scotia, BMO, CIBC, Desjardins)

## Stratégie
1. Réécrire `blogContent.tsx` avec les 22 bons slugs
2. Supprimer les 9 anciens articles aux mauvais slugs
3. Garder le composant `WizardCta` tel quel
4. Build + vérifier
5. Commit + push sur `claude/add-french-greeting-wTFFr`
