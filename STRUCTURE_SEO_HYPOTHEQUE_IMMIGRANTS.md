# 📐 STRUCTURE SEO-FRIENDLY COMPLÈTE
## Site : "Guide Hypothèque Immigrants Canada"
### Prêt pour Claude Code Implementation

---

## 🏗️ ARCHITECTURE DU SITE

```
hypotheque-immigrants-canada.com/
│
├── / (Home)
├── /wizard (Wizard Principal - Page Clé)
├── /resultats (Résultats Personnalisés)
│
├── /blog/ (Hub SEO)
│   ├── /hypotheque-immigrants-canada-guide-complet
│   ├── /hypotheque-permis-travail
│   ├── /hypotheque-residence-permanente
│   ├── /hypotheque-quebec
│   ├── /hypotheque-mauvais-credit
│   ├── /hypotheque-sans-historique-credit
│   ├── /combien-emprunter-immigrants
│   ├── /banques-acceptent-immigrants
│   ├── /documents-hypotheque-immigrants
│   ├── /taux-hypotheque-immigrants-2024
│   └── /faq-hypotheque-immigrants
│
├── /comparateur (Comparateur Banques)
├── /calculatrice (Calculatrice Hypothèque)
├── /faq (Foire Aux Questions)
├── /contact (Contact & Lead Capture)
├── /about (À Propos + Credibilité)
│
├── /mentions-legales
├── /politique-confidentialite
├── /conditions-utilisation
│
└── /sitemap.xml
```

---

## 📄 PAGES & MÉTADONNÉES SEO DÉTAILLÉES

### 1️⃣ HOME PAGE ( / )
**Type** : Landing Page + Hub

**URL Structure** : `hypotheque-immigrants-canada.com/`

**Meta Data** :
```html
<title>Guide Hypothèque Immigrants Canada 2024 | Calculatrice & Wizard</title>
<meta name="description" content="Découvrez combien vous pouvez emprunter, quelles banques acceptent les immigrants, et comment obtenir votre hypothèque au Canada. Wizard interactif gratuit." />
<meta name="keywords" content="hypothèque immigrants, hypothèque nouveaux arrivants, hypothèque canada immigrants, guides hypothèque" />
<meta property="og:title" content="Guide Hypothèque Immigrants Canada - Wizard Interactif" />
<meta property="og:description" content="Trouvez votre taux hypothécaire optimal et les meilleures banques pour immigrants." />
<meta property="og:url" content="https://hypotheque-immigrants-canada.com/" />
<meta property="og:type" content="website" />
<meta name="robots" content="index, follow" />
<meta name="language" content="fr" />
```

**Structure H1-H3** :
```
H1: "Obtenez une Hypothèque au Canada en tant qu'Immigrant"
H2: "Découvrez Votre Capacité d'Emprunt en 5 Minutes"
H2: "Pourquoi Utiliser Notre Wizard ?"
H3: "Analyse Personnalisée"
H3: "Comparaison Banques Réelles"
H3: "Conseils Pratiques"
H2: "Plus de 10,000 Immigrants Ont Trouvé Leur Hypothèque"
```

**Contenu Principal** :
- Hero section avec CTA "Commencer le Wizard"
- Valeur prop principale (3-4 phrases)
- 3 étapes clés du processus (visuel)
- Témoignages/stats (social proof)
- CTA secondaire "Lire nos guides"
- Section FAQ réduite

**Mots-clés cibles** :
- hypothèque immigrants canada
- hypothèque nouveaux arrivants
- guide hypothèque immigrants
- comment obtenir hypothèque immigrant

---

### 2️⃣ PAGE WIZARD ( /wizard )
**Type** : Interactive Tool (Page Revenue Clé)
**URL Structure** : `hypotheque-immigrants-canada.com/wizard`

**Meta Data** :
```html
<title>Wizard Hypothèque Immigrants | Calculatrice Personnalisée</title>
<meta name="description" content="Wizard interactif gratuit pour calculer votre capacité d'emprunt hypothécaire au Canada en tant qu'immigrant. Personnalisé selon votre situation." />
<meta name="robots" content="index, follow" />
<meta property="og:title" content="Wizard Hypothèque - Découvrez Votre Capacité d'Emprunt" />
```

**Architecture du Wizard** (à implémenter en React/Vue) :

```javascript
// ÉTAPE 1: Statut Immigration
QUESTION: "Quel est votre statut d'immigration au Canada ?"
OPTIONS:
  - Résident Permanent (RP)
  - Travailleur Temporaire - Permis Fermé
  - Travailleur International - Permis Ouvert
  - Préparation Immigration (en attente)
  - Citoyen Canadien

// ÉTAPE 2: Durée au Canada
QUESTION: "Depuis combien de temps êtes-vous au Canada ?"
OPTIONS:
  - Moins de 6 mois
  - 6 mois à 1 an
  - 1 à 2 ans
  - 2 à 5 ans
  - Plus de 5 ans

// ÉTAPE 3: Historique Crédit
QUESTION: "Avez-vous un historique de crédit canadien ?"
OPTIONS:
  - Non (nouveau au Canada)
  - Oui, crédit excellent (750+)
  - Oui, crédit bon (700-749)
  - Oui, crédit moyen (650-699)
  - Oui, crédit faible (moins de 650)

// ÉTAPE 4: Revenu Annuel (CAD)
QUESTION: "Quel est votre revenu annuel brut (en CAD) ?"
INPUT: Slider $20,000 - $500,000+
AIDE: "Incluez tous les revenus (emploi, conjoint, etc.)"

// ÉTAPE 5: Apport Initial
QUESTION: "Combien pouvez-vous verser d'apport initial ?"
OPTIONS:
  - Aucun (0%)
  - 5% du prix d'achat
  - 10-15%
  - 20%+

// ÉTAPE 6: Province
QUESTION: "Dans quelle province cherchez-vous ?"
OPTIONS:
  - Colombie-Britannique
  - Alberta
  - Saskatchewan
  - Manitoba
  - Ontario
  - Québec
  - Nouveau-Brunswick
  - Nouvelle-Écosse
  - Île-du-Prince-Édouard
  - Terre-Neuve-Labrador
  - Yukon
  - Territoires du Nord-Ouest
  - Nunavut

// ÉTAPE 7: Type Emploi
QUESTION: "Quel est votre type d'emploi ?"
OPTIONS:
  - Salarié (CDI/Permanent)
  - Salarié (Contrat Temporaire)
  - Travailleur Autonome/Freelance
  - Professionnel Réglementé (médecin, ingénieur, etc.)
  - Sans emploi (en recherche)
```

**PAGE DE RÉSULTATS** ( /resultats?params=... )

```
RÉSULTATS PERSONNALISÉS (basé sur réponses):

SECTION 1: "Votre Capacité d'Emprunt"
├─ Montant estimé (calculateur basé sur ratio d'endettement)
├─ Raison de ce montant
├─ Avertissements (si crédit faible, durée Canada faible, etc.)

SECTION 2: "Meilleures Banques Pour Vous"
├─ Comparateur 3-5 banques avec:
│  ├─ Logo banque
│  ├─ Taux estimé (range)
│  ├─ Documents requis
│  ├─ Délai d'approbation
│  ├─ Specialités (immigrant-friendly)
│  └─ CTA "Demander Devis" (lien affilié NESTO/RATEHUB)
│

SECTION 3: "Documents à Préparer"
├─ Checklist personnalisée selon statut:
│  ├─ Permis de résidence/travail
│  ├─ Passeport
│  ├─ Lettre d'emploi
│  ├─ Dernières 2 années de déclarations fiscales
│  ├─ Preuve de résidence canadienne
│  ├─ Dépôt initial (preuve de fonds)
│  ├─ Rapport crédit (si historique)
│  └─ Lettre d'explication (si situation complexe)
│

SECTION 4: "Prochaines Étapes"
├─ Timeline réaliste (1-3 mois)
├─ Actions à faire immédiatement
├─ Pièges à éviter

SECTION 5: "Guides Personnalisés"
├─ Articles de blog recommandés basé sur profil
├─ Liens internes SEO
```

**Mots-clés cibles** :
- wizard hypothèque immigrants
- calculatrice hypothèque canada
- combien emprunter immigrants
- capacité d'emprunt hypothèque

---

### 3️⃣ ARTICLE BLOG #1 - PILIER PRINCIPAL ( /blog/hypotheque-immigrants-canada-guide-complet )

**Type** : Pilier SEO Principal (2,500-3,500 mots)
**URL** : `hypotheque-immigrants-canada.com/blog/hypotheque-immigrants-canada-guide-complet`

**Meta Data** :
```html
<title>Guide Complet Hypothèque Immigrants Canada 2024 | Tout Ce Que Vous Devez Savoir</title>
<meta name="description" content="Guide complet et à jour 2024 sur comment obtenir une hypothèque en tant qu'immigrant au Canada. Exigences, banques, taux, documents, délais." />
<meta property="og:title" content="Guide Complet Hypothèque Immigrants Canada 2024" />
<meta name="article:published_time" content="2024-01-15T10:00:00Z" />
<meta name="article:modified_time" content="2024-03-21T10:00:00Z" />
<meta name="author" content="Guide Hypothèque Immigrants" />
```

**Structure H1-H6** :
```
H1: "Guide Complet : Comment Obtenir une Hypothèque en tant qu'Immigrant au Canada en 2024"

H2: "1. Comprendre les Exigences de Base pour Immigrants"
H3: "Statuts d'immigration acceptés"
H3: "Exigences de résidence"
H3: "Exigences de revenus"

H2: "2. Comment Fonctionne le Crédit au Canada"
H3: "Pourquoi le score de crédit est important"
H3: "Comment construire un historique de crédit"
H3: "Score de crédit minimum requis"

H2: "3. Calcul de Votre Capacité d'Emprunt"
H3: "Le ratio d'endettement brut (GDS)"
H3: "Le ratio d'endettement total (TDS)"
H3: "Exemples de calculs réels"

H2: "4. Documents Essentiels à Préparer"
H3: "Documents d'immigration"
H3: "Documents financiers"
H3: "Documents de revenus"

H2: "5. Meilleures Banques pour Immigrants"
H3: "RBC (Royal Bank of Canada)"
H3: "TD (Toronto Dominion)"
H3: "CIBC"
H3: "BMO (Bank of Montreal)"
H3: "Scotiabank"
H3: "Banques en ligne (Tangerine, EQ Bank)"

H2: "6. Types d'Hypothèques Disponibles"
H3: "Hypothèque à taux fixe"
H3: "Hypothèque à taux variable"
H3: "Hypothèque avec assurance prêt hypothécaire"

H2: "7. Taux et Frais Hypothécaires"
H3: "Comprendre les taux hypothécaires"
H3: "Frais d'assurance prêt hypothécaire (SCHL, Sagen, Canada Guaranty)"
H3: "Autres frais à considérer"

H2: "8. Timeline Réaliste de 1 à 3 Mois"
H3: "Semaines 1-2: Préparation"
H3: "Semaines 3-4: Demande et Préapprobation"
H3: "Semaines 5-8: Approbation et Fermeture"

H2: "9. Erreurs Courantes à Éviter"
H3: "Changer d'emploi avant la fermeture"
H3: "Faire de gros achats à crédit"
H3: "Ne pas vérifier son rapport de crédit"

H2: "10. Ressources et Outils Supplémentaires"
H3: "Calculatrice hypothécaire interactive"
H3: "Comparateur banques"
H3: "Guide des documents requis"
```

**Mots-clés internes** :
- hypothèque immigrants
- hypothèque Canada
- guide hypothèque
- comment obtenir hypothèque
- taux hypothèque
- banques hypothèque immigrants

**Internal Links (Clusterisation)** :
- Lien vers /wizard
- Lien vers /blog/hypotheque-permis-travail
- Lien vers /blog/hypotheque-residence-permanente
- Lien vers /comparateur
- Lien vers /calculatrice

---

### 4️⃣ ARTICLE BLOG #2 ( /blog/hypotheque-permis-travail )

**Type** : Cluster Topic (1,500-2,000 mots)
**URL** : `hypotheque-immigrants-canada.com/blog/hypotheque-permis-travail`

**Meta Data** :
```html
<title>Hypothèque avec Permis de Travail au Canada | Guide 2024</title>
<meta name="description" content="Guide complet pour obtenir une hypothèque avec un permis de travail temporaire au Canada. Exigences spécifiques, banques acceptant les travailleurs temporaires." />
```

**H1** : "Comment Obtenir une Hypothèque en tant que Travailleur Temporaire au Canada"

**Structure** :
- Différences : permis fermé vs permis ouvert
- Exigences spécifiques travailleur temporaire
- Banques acceptant permis temporaires
- Documents additionnels requis
- Stratégies pour augmenter chances d'approbation
- Alternatives si refus

**Internal Links** :
- "Lire le guide complet" → /blog/hypotheque-immigrants-canada-guide-complet
- "Vérifier votre capacité" → /wizard
- "Comparer les banques" → /comparateur

---

### 5️⃣ ARTICLE BLOG #3 ( /blog/hypotheque-residence-permanente )

**Type** : Cluster Topic (1,500-2,000 mots)
**URL** : `hypotheque-immigrants-canada.com/blog/hypotheque-residence-permanente`

**Meta Data** :
```html
<title>Hypothèque Résidence Permanente Canada | Avantages & Guide</title>
<meta name="description" content="Guide pour résidents permanents cherchant une hypothèque. Avantages en tant que RP, exigences réduites, meilleures approbations." />
```

**H1** : "Hypothèque pour Résidents Permanents du Canada : Avantages et Processus"

**Structure** :
- Avantages en tant que résident permanent
- Exigences réduites vs travailleur temporaire
- Taux disponibles pour RP
- Délais d'approbation
- Stratégies pour meilleur taux

---

### 6️⃣ ARTICLE BLOG #4 ( /blog/hypotheque-quebec )

**Type** : Cluster Topic - Géolocalisation (1,500-2,000 mots)
**URL** : `hypotheque-immigrants-canada.com/blog/hypotheque-quebec`

**Meta Data** :
```html
<title>Hypothèque Immigrants Québec | Guide Spécifique Province</title>
<meta name="description" content="Guide complet hypothèque pour immigrants au Québec. Règles provinciales, banques, programme provincial, particularités." />
```

**H1** : "Guide Hypothèque pour Immigrants au Québec : Spécificités Provinciales"

**Structure** :
- Particularités du marché immobilier québécois
- Lois hypothécaires du Québec
- Institutions spécifiques Québec
- Impact de la langue (français)
- Programme d'aide gouvernementale Québec
- Banques meilleures pour Québec

---

### 7️⃣ ARTICLE BLOG #5 ( /blog/combien-emprunter-immigrants )

**Type** : Cluster Topic - Intent Calcul (1,200-1,500 mots)
**URL** : `hypotheque-immigrants-canada.com/blog/combien-emprunter-immigrants`

**Meta Data** :
```html
<title>Combien Emprunter : Guide Calcul Capacité Hypothèque Immigrants</title>
<meta name="description" content="Comment calculer combien vous pouvez emprunter pour hypothèque en tant qu'immigrant. Formules, exemples réels, outils." />
```

**H1** : "Combien Pouvez-Vous Emprunter ? Calcul Capacité Hypothèque pour Immigrants"

**Structure** :
- Formule GDS (Gross Debt Service Ratio)
- Formule TDS (Total Debt Service Ratio)
- Variables qui affectent montant
- Exemples avec chiffres réels
- Outils interactifs
- Limitations par statut immigration

---

### 8️⃣ ARTICLE BLOG #6 ( /blog/banques-acceptent-immigrants )

**Type** : Cluster Topic - Comparaison (2,000-2,500 mots)
**URL** : `hypotheque-immigrants-canada.com/blog/banques-acceptent-immigrants`

**Meta Data** :
```html
<title>Quelles Banques Acceptent les Immigrants pour Hypothèque ?</title>
<meta name="description" content="Liste complète des banques canadiennes acceptant immigrants. Taux, documents requis, délais, programmes spécialisés." />
```

**H1** : "Quelles Banques Canadiennes Acceptent les Immigrants pour Hypothèque ?"

**Structure par Banque** :
- RBC (exigences, taux, spécialités)
- TD (exigences, taux, spécialités)
- CIBC (exigences, taux, spécialités)
- BMO (exigences, taux, spécialités)
- Scotiabank (exigences, taux, spécialités)
- Tangerine (exigences, taux, spécialités)
- EQ Bank (exigences, taux, spécialités)
- Courtiers hypothécaires (Nesto, Ratehub, etc.)

**Tableau Comparatif** :
```
| Banque | Taux Min | Documents | Délai | Immigrant-Friendly |
|--------|----------|-----------|-------|-------------------|
| RBC    | 4.5%     | Standard  | 3-4w  | ⭐⭐⭐⭐⭐        |
| TD     | 4.5%     | Standard  | 3-4w  | ⭐⭐⭐⭐          |
| CIBC   | 4.6%     | Étendu    | 4-5w  | ⭐⭐⭐             |
```

---

### 9️⃣ ARTICLE BLOG #7 ( /blog/documents-hypotheque-immigrants )

**Type** : Cluster Topic - How-to (1,500-2,000 mots)
**URL** : `hypotheque-immigrants-canada.com/blog/documents-hypotheque-immigrants`

**Meta Data** :
```html
<title>Documents Requis Hypothèque Immigrants | Checklist Complète</title>
<meta name="description" content="Checklist complète des documents requis pour hypothèque en tant qu'immigrant au Canada. Parle par statut d'immigration." />
```

**H1** : "Documents Requis pour Hypothèque Immigrants : Checklist Complète"

**Structure par Catégorie** :
- Documents d'immigration
- Documents d'identité
- Documents financiers
- Documents de revenus
- Documents résidentiels
- Documents d'explication (si applicable)

**Checklist Téléchargeable** : PDF gratuit

---

### 🔟 ARTICLE BLOG #8 ( /blog/hypotheque-mauvais-credit )

**Type** : Cluster Topic - Spécifique (1,200-1,500 mots)
**URL** : `hypotheque-immigrants-canada.com/blog/hypotheque-mauvais-credit`

**Meta Data** :
```html
<title>Hypothèque avec Mauvais Crédit pour Immigrants | Solutions</title>
<meta name="description" content="Guide pour obtenir hypothèque avec mauvais score crédit en tant qu'immigrant. Alternatives, stratégies, lenders spécialisés." />
```

**H1** : "Comment Obtenir une Hypothèque avec Mauvais Crédit en tant qu'Immigrant"

**Structure** :
- Score crédit minimum requis
- Impact du mauvais crédit
- Alternatives (co-signature, apport plus élevé)
- Lenders spécialisés
- Stratégies d'amélioration crédit court-terme
- Délais réalistes

---

### 1️⃣1️⃣ ARTICLE BLOG #9 ( /blog/hypotheque-sans-historique-credit )

**Type** : Cluster Topic - New to Canada (1,500-2,000 mots)
**URL** : `hypotheque-immigrants-canada.com/blog/hypotheque-sans-historique-credit`

**Meta Data** :
```html
<title>Hypothèque Sans Historique Crédit Canada | Guide Immigrants Nouveaux</title>
<meta name="description" content="Guide pour obtenir hypothèque sans historique crédit canadien. Stratégies, alternative credit data, construction crédit rapide." />
```

**H1** : "Obtenir une Hypothèque Sans Historique Crédit au Canada : Guide pour Immigrants"

**Structure** :
- Pourquoi pas d'historique = problème
- Alternative Credit Data (international credit)
- Construire crédit rapidement (3-6 mois)
- Lenders acceptant pas d'historique
- Co-signature strategy
- Credit-builder products

---

### 1️⃣2️⃣ ARTICLE BLOG #10 ( /blog/taux-hypotheque-immigrants-2024 )

**Type** : Cluster Topic - News/Actuel (1,000-1,200 mots)
**URL** : `hypotheque-immigrants-canada.com/blog/taux-hypotheque-immigrants-2024`

**Meta Data** :
```html
<title>Taux Hypothèque Immigrants 2024 | Données Actualisées</title>
<meta name="description" content="Taux hypothécaires actuels 2024 pour immigrants au Canada. Comparaison banques, tendances, facteurs affectant taux." />
<meta name="article:published_time" content="2024-03-21T10:00:00Z" />
<meta name="article:modified_time" content="2024-03-21T10:00:00Z" />
```

**H1** : "Taux Hypothécaires pour Immigrants Canada 2024 : Analyse & Tendances"

**Structure** :
- Taux actuels par banque
- Écart immigrant vs citoyen
- Facteurs affectant taux
- Tendances 2024
- Prévisions 6-12 mois
- Comment négocier meilleur taux

---

### 1️⃣3️⃣ FAQ PAGE ( /faq )

**Type** : FAQ Schema Markup (Google Featured Snippets)
**URL** : `hypotheque-immigrants-canada.com/faq`

**Meta Data** :
```html
<title>FAQ Hypothèque Immigrants Canada | Questions Fréquentes</title>
<meta name="description" content="FAQ complète sur hypothèque pour immigrants au Canada. Réponses à vos questions courantes." />
```

**FAQ Structure (20-30 questions)** :

```
Q1: Puis-je obtenir une hypothèque en tant que travailleur temporaire ?
A: Oui, avec certaines conditions... [200 mots]

Q2: Quel score de crédit minimum est requis ?
A: Le minimum typique est 600-650, mais... [150 mots]

Q3: Combien de temps après arriver au Canada puis-je demander ?
A: Généralement 6 mois, mais certaines banques... [150 mots]

Q4: Que faire si je n'ai pas d'historique de crédit ?
A: Plusieurs options existent... [180 mots]

Q5: Quels documents dois-je préparer ?
A: Liste complète avec liens téléchargeables... [120 mots]

Q6: Combien de temps prend le processus ?
A: Typiquement 4-8 semaines... [150 mots]

Q7: Est-ce que mon revenu étranger compte ?
A: Oui, avec restrictions... [140 mots]

Q8: Quelle est la différence entre préapprobation et approbation ?
A: Préapprobation est non-engageante... [160 mots]

Q9: Puis-je avoir hypothèque avec conjoint qui n'a pas d'emploi ?
A: Oui, mais impacts calculable... [170 mots]

Q10: Quels frais dois-je payer en plus du taux ?
A: SCHL, frais légaux, inspection... [180 mots]

[+ 20 questions supplémentaires couvrant tous les scénarios]
```

**Schema Markup** :
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Puis-je obtenir une hypothèque en tant que travailleur temporaire ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Oui, vous pouvez obtenir une hypothèque avec un permis de travail temporaire, mais..."
      }
    }
  ]
}
</script>
```

---

### 1️⃣4️⃣ COMPARATEUR BANQUES ( /comparateur )

**Type** : Interactive Tool
**URL** : `hypotheque-immigrants-canada.com/comparateur`

**Meta Data** :
```html
<title>Comparateur Hypothèque Banques Canada | Meilleurs Taux</title>
<meta name="description" content="Comparateur interactif des meilleures banques pour hypothèque immigrants. Comparez taux, délais, documents par banque." />
```

**Tableau Interactif** :
```
Colonnes:
- Banque (logo)
- Taux Min/Max
- Documents Requis
- Délai Approbation
- Spécialité Immigrants
- CTA "Demander Devis"

Filtres:
- Par statut immigration
- Par province
- Par score crédit
```

---

### 1️⃣5️⃣ CALCULATRICE ( /calculatrice )

**Type** : Interactive Calculator
**URL** : `hypotheque-immigrants-canada.com/calculatrice`

**Meta Data** :
```html
<title>Calculatrice Hypothèque Immigrants | Calcul Capacité</title>
<meta name="description" content="Calculatrice interactive pour calculer votre capacité d'emprunt hypothécaire. Basée sur formules bancaires réelles." />
```

**Inputs Interactifs** :
- Revenu annuel brut
- Autres dettes mensuelles
- Apport initial
- Prix estimé propriété
- Taux hypothécaire estimé
- Durée amortissement (15-30 ans)

**Outputs** :
- Montant maximum empruntable
- Paiement mensuel estimé
- Ratio GDS/TDS
- Affirmation conformité

---

### 1️⃣6️⃣ PAGE À PROPOS ( /about )

**Type** : Trust/Authority Page
**URL** : `hypotheque-immigrants-canada.com/about`

**Meta Data** :
```html
<title>À Propos | Guide Hypothèque Immigrants Canada</title>
<meta name="description" content="À propos de Guide Hypothèque Immigrants. Notre mission, expertise, partenaires." />
```

**Sections** :
- Mission & Vision
- Équipe (credibilité)
- Expertise & Certifications
- Partenaires (logos banques/courtiers)
- Pourquoi nous faire confiance

---

### 1️⃣7️⃣ PAGE CONTACT ( /contact )

**Type** : Lead Capture
**URL** : `hypotheque-immigrants-canada.com/contact`

**Meta Data** :
```html
<title>Nous Contacter | Guide Hypothèque Immigrants</title>
<meta name="description" content="Contactez-nous pour questions ou partenariats." />
```

**Formulaire Lead Capture** :
```
Fields:
- Nom complet
- Email
- Numéro téléphone
- Statut immigration (select)
- Province (select)
- Montant cherché (range)
- Meilleur moment contact
- Message optionnel

Submit → Email + CRM integration + SMS opt-in
```

---

## 🔗 SITEMAP.XML

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0">
  
  <!-- HOME (Priorité 1.0) -->
  <url>
    <loc>https://hypotheque-immigrants-canada.com/</loc>
    <lastmod>2024-03-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  
  <!-- WIZARD (Priorité 0.95) -->
  <url>
    <loc>https://hypotheque-immigrants-canada.com/wizard</loc>
    <lastmod>2024-03-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.95</priority>
  </url>
  
  <!-- BLOG ARTICLES (Priorité 0.9) -->
  <url>
    <loc>https://hypotheque-immigrants-canada.com/blog/hypotheque-immigrants-canada-guide-complet</loc>
    <lastmod>2024-03-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://hypotheque-immigrants-canada.com/blog/hypotheque-permis-travail</loc>
    <lastmod>2024-03-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  
  <url>
    <loc>https://hypotheque-immigrants-canada.com/blog/hypotheque-residence-permanente</loc>
    <lastmod>2024-03-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  
  <url>
    <loc>https://hypotheque-immigrants-canada.com/blog/hypotheque-quebec</loc>
    <lastmod>2024-03-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  
  <url>
    <loc>https://hypotheque-immigrants-canada.com/blog/combien-emprunter-immigrants</loc>
    <lastmod>2024-03-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  
  <url>
    <loc>https://hypotheque-immigrants-canada.com/blog/banques-acceptent-immigrants</loc>
    <lastmod>2024-03-21</lastmod>
    <changefreq>bi-weekly</changefreq>
    <priority>0.85</priority>
  </url>
  
  <url>
    <loc>https://hypotheque-immigrants-canada.com/blog/documents-hypotheque-immigrants</loc>
    <lastmod>2024-03-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://hypotheque-immigrants-canada.com/blog/hypotheque-mauvais-credit</loc>
    <lastmod>2024-03-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://hypotheque-immigrants-canada.com/blog/hypotheque-sans-historique-credit</loc>
    <lastmod>2024-03-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <url>
    <loc>https://hypotheque-immigrants-canada.com/blog/taux-hypotheque-immigrants-2024</loc>
    <lastmod>2024-03-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
  
  <!-- TOOLS (Priorité 0.9) -->
  <url>
    <loc>https://hypotheque-immigrants-canada.com/comparateur</loc>
    <lastmod>2024-03-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <url>
    <loc>https://hypotheque-immigrants-canada.com/calculatrice</loc>
    <lastmod>2024-03-21</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>
  
  <!-- FAQ (Priorité 0.85) -->
  <url>
    <loc>https://hypotheque-immigrants-canada.com/faq</loc>
    <lastmod>2024-03-21</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.85</priority>
  </url>
  
  <!-- PAGES LÉGALES (Priorité 0.5) -->
  <url>
    <loc>https://hypotheque-immigrants-canada.com/mentions-legales</loc>
    <lastmod>2024-03-21</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  
  <url>
    <loc>https://hypotheque-immigrants-canada.com/politique-confidentialite</loc>
    <lastmod>2024-03-21</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.5</priority>
  </url>
  
</urlset>
```

---

## 📊 KEYWORD CLUSTERING (Internal Linking Strategy)

### Pilier Principal
**"Hypothèque Immigrants Canada"** (Guide Complet)
↓
├── Cluster Topic 1: Statuts Immigration
│   ├─ Hypothèque Permis Travail
│   ├─ Hypothèque Résidence Permanente
│   └─ Hypothèque Sans Historique Crédit
│
├── Cluster Topic 2: Géographie
│   └─ Hypothèque Québec
│
├── Cluster Topic 3: Calcul/Volume
│   ├─ Combien Emprunter
│   └─ Taux 2024
│
└── Cluster Topic 4: Exécution
    ├─ Banques Acceptant Immigrants
    └─ Documents Requis

---

## 🎯 SCHEMA MARKUP À IMPLÉMENTER

### 1. Organization Schema (Home)
```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Guide Hypothèque Immigrants Canada",
  "url": "https://hypotheque-immigrants-canada.com",
  "logo": "https://hypotheque-immigrants-canada.com/logo.png",
  "description": "Guide complet sur hypothèque pour immigrants au Canada",
  "sameAs": ["https://facebook.com/...", "https://twitter.com/..."]
}
```

### 2. BreadcrumbList Schema (Articles)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://hypotheque-immigrants-canada.com/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://hypotheque-immigrants-canada.com/blog/"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Guide Complet",
      "item": "https://hypotheque-immigrants-canada.com/blog/hypotheque-immigrants-canada-guide-complet"
    }
  ]
}
```

### 3. Article Schema (Blog Posts)
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Guide Complet : Comment Obtenir une Hypothèque...",
  "description": "...",
  "image": "...",
  "author": {
    "@type": "Organization",
    "name": "Guide Hypothèque Immigrants Canada"
  },
  "datePublished": "2024-03-21T10:00:00Z",
  "dateModified": "2024-03-21T10:00:00Z"
}
```

### 4. LocalBusiness Schema (Contact)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Guide Hypothèque Immigrants Canada",
  "url": "https://hypotheque-immigrants-canada.com",
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Customer Support",
    "email": "info@hypotheque-immigrants-canada.com"
  }
}
```

### 5. FAQPage Schema
(Voir article FAQ ci-dessus)

---

## 📱 RESPONSIVE DESIGN & MOBILE SEO

**Viewport Meta** :
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

**Mobile-First Approach** :
- Wizard responsive
- Touch-friendly inputs
- Fast loading (Core Web Vitals)
- Mobile schema markup

---

## ⚡ PERFORMANCE TARGETS

**Core Web Vitals** :
- LCP (Largest Contentful Paint): < 2.5s
- FID (First Input Delay): < 100ms
- CLS (Cumulative Layout Shift): < 0.1

**SEO Checkpoints** :
- Pagespeed Desktop: > 85
- Pagespeed Mobile: > 75
- No crawl errors
- Mobile-friendly certified
- HTTPS mandatory

---

## 📈 CONTENT CALENDAR (Première année)

**Mois 1-2** : Launch core content (Home + Wizard + 3 articles piliers)
**Mois 3-4** : Expand blog (5 articles supplémentaires)
**Mois 5-6** : Add tools (Comparateur + Calculatrice)
**Mois 7-12** : Maintain + Update + Add guest posts

---

## 🔄 INTERNAL LINKING STRATEGY

### From Home Page :
- Hero CTA → /wizard
- "Lire nos guides" → /blog/hypotheque-immigrants-canada-guide-complet
- Navigation → /blog, /comparateur, /calculatrice, /faq

### From Blog Articles :
- Chaque article liens vers :
  - Article pilier principal (2-3 fois)
  - Articles cluster connexes (1-2 fois)
  - /wizard (CTA finale)
  - /comparateur ou /calculatrice

### From Wizard :
- Lien "Lire les détails" pour chaque réponse → article blog pertinent
- Final CTA → /comparateur ou lien affilié

---

## 🎯 NEXT STEPS POUR CLAUDE CODE

1. **Structure de dossiers** à créer
2. **Configuration Next.js ou React** (routing, SEO)
3. **Base de données** (banques, taux, documents)
4. **Composants React** (Wizard, Comparateur, Calculatrice)
5. **Content Management** (blog posts, FAQ)
6. **Intégration Analytics** (GA4, events tracking)
7. **Intégration Affiliés** (Nesto API, etc.)
8. **Deployment** (Vercel, AWS, etc.)

---

**FIN DE LA STRUCTURE SEO**

Prêt pour l'implémentation ! 🚀
