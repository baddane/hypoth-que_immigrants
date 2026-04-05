// ============================================
// BLOG POSTS METADATA — 34 articles
// Data-driven: each post has metadata + markdown-like content sections
// ============================================

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: string;
  readTime: string;
  wizardVariant?: string; // query param for contextual CTA
  relatedSlugs?: string[];
}

export const blogPosts: BlogPost[] = [
  // ====== ARTICLE #1 — PILIER PRINCIPAL ======
  {
    slug: "hypotheque-travailleur-temporaire-5pourcent",
    title: "Guide Complet : Hypothèque pour Travailleur Temporaire au Canada - 5% Apport",
    subtitle: "Obtenez une hypothèque avec permis de travail temporaire, même avec peu de crédit. Guide étape par étape.",
    description: "Guide complet pour obtenir une hypothèque avec un permis de travail temporaire au Canada. Mise de fonds 5%, programme SCHL, banques acceptant les travailleurs temporaires.",
    category: "Guide Principal",
    readTime: "15 min",
    wizardVariant: "travailleur-temporaire",
    relatedSlugs: ["hypotheque-permis-travail-ouvert", "hypotheque-sans-historique-credit", "preapprobation-hypotheque-immigrant"],
  },
  // ====== ARTICLE #2 ======
  {
    slug: "hypotheque-sans-historique-credit",
    title: "Hypothèque Sans Historique Crédit Canada : Comment Obtenir l'Approbation",
    subtitle: "Nouveau au Canada ? Découvrez comment obtenir une hypothèque sans crédit canadien établi.",
    description: "Comment obtenir une hypothèque au Canada sans historique de crédit canadien. Crédit alternatif SCHL, preuves acceptées, banques sans exigence de crédit.",
    category: "Crédit",
    readTime: "10 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-credit-international-alternative-data", "hypotheque-score-credit-minimum-immigrant", "hypotheque-travailleur-temporaire-5pourcent"],
  },
  // ====== ARTICLE #3 ======
  {
    slug: "hypotheque-permis-travail-ouvert",
    title: "Hypothèque avec Permis de Travail Ouvert : Guide Complet pour Immigrants",
    subtitle: "Différences entre permis fermé et ouvert. Exigences bancaires et stratégies d'approbation.",
    description: "Guide hypothèque pour détenteurs de permis de travail ouvert au Canada. Différences avec permis fermé, exigences bancaires, stratégies d'approbation.",
    category: "Statut Immigration",
    readTime: "9 min",
    wizardVariant: "travailleur-temporaire",
    relatedSlugs: ["hypotheque-travailleur-temporaire-5pourcent", "hypotheque-etudiant-permis-postdiplome", "preapprobation-hypotheque-immigrant"],
  },
  // ====== ARTICLE #4 ======
  {
    slug: "hypotheque-etudiant-permis-postdiplome",
    title: "Hypothèque Étudiant International : Comment Acheter Après le Permis Postdiplôme",
    subtitle: "Guide pour étudiants PGWP cherchant à acheter une propriété. Exigences et options de financement.",
    description: "Guide hypothèque pour étudiants internationaux avec permis postdiplôme (PGWP) au Canada. Exigences, options de financement, programmes bancaires.",
    category: "Statut Immigration",
    readTime: "9 min",
    wizardVariant: "etudiant",
    relatedSlugs: ["hypotheque-permis-travail-ouvert", "hypotheque-sans-historique-credit", "hypotheque-travailleur-temporaire-5pourcent"],
  },
  // ====== ARTICLE #5 ======
  {
    slug: "hypotheque-francophone-quebec",
    title: "Hypothèque Immigrant Québec : Guide Spécifique pour Francophones",
    subtitle: "Règles Québec, banques locales et programmes d'aide. Tout ce qu'un francophone doit savoir.",
    description: "Guide hypothèque spécifique pour immigrants francophones au Québec. Desjardins, notaire, taxe de bienvenue, programmes d'aide provinciaux.",
    category: "Province",
    readTime: "10 min",
    wizardVariant: "quebec",
    relatedSlugs: ["hypotheque-alberta-immigrants-calgary-edmonton", "hypotheque-ontario-immigrants-toronto", "hypotheque-bc-immigrants-vancouver-victoria"],
  },
  // ====== ARTICLE #6 ======
  {
    slug: "preapprobation-hypotheque-immigrant",
    title: "Préapprobation Hypothèque Immigrant : Comment Obtenir et Combien de Temps",
    subtitle: "Étapes pour obtenir une préapprobation rapidement. Ce que les banques vérifient vraiment.",
    description: "Guide préapprobation hypothécaire pour immigrants au Canada. Étapes, délais, documents requis, ce que les banques vérifient.",
    category: "Processus",
    readTime: "8 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-timeline-fermeture-immigrant", "hypotheque-travailleur-temporaire-5pourcent", "hypotheque-sans-historique-credit"],
  },
  // ====== ARTICLE #7 ======
  {
    slug: "hypotheque-conjoint-chomeur-revenu",
    title: "Hypothèque Conjoint Chômeur : Comment Acheter avec Un Seul Revenu Immigrant",
    subtitle: "Stratégies quand un conjoint n'a pas d'emploi. Ratios d'endettement et solutions bancaires.",
    description: "Comment obtenir une hypothèque quand un conjoint est sans emploi. Stratégies avec un seul revenu, ratios d'endettement, solutions pour immigrants.",
    category: "Situation Spéciale",
    readTime: "8 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-cosignataire-parent-immigrant", "hypotheque-travailleur-autonome-freelance", "preapprobation-hypotheque-immigrant"],
  },
  // ====== ARTICLE #8 ======
  {
    slug: "hypotheque-revenu-etranger-convert",
    title: "Hypothèque Revenu Étranger : Comment Convertir et l'Inclure dans la Demande",
    subtitle: "Gagnez encore de l'étranger ? Découvrez comment les banques acceptent ce revenu.",
    description: "Comment inclure un revenu étranger dans une demande d'hypothèque au Canada. Conversion, règles SCHL, ce que les banques acceptent.",
    category: "Situation Spéciale",
    readTime: "8 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-travailleur-autonome-freelance", "hypotheque-conjoint-chomeur-revenu", "preapprobation-hypotheque-immigrant"],
  },
  // ====== ARTICLE #9A ======
  {
    slug: "hypotheque-alberta-immigrants-calgary-edmonton",
    title: "Hypothèque Alberta Immigrants : Guide Calgary, Edmonton et Autres Villes",
    subtitle: "Particularités marché Alberta. Banques acceptant immigrants et délais d'approbation.",
    description: "Guide hypothèque pour immigrants en Alberta. Marché Calgary et Edmonton, banques, taux, programmes provinciaux pour nouveaux arrivants.",
    category: "Province",
    readTime: "9 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-francophone-quebec", "hypotheque-bc-immigrants-vancouver-victoria", "hypotheque-ontario-immigrants-toronto"],
  },
  // ====== ARTICLE #9B ======
  {
    slug: "hypotheque-bc-immigrants-vancouver-victoria",
    title: "Hypothèque Colombie-Britannique Immigrants : Vancouver, Victoria et BC",
    subtitle: "Marché immobilier BC pour immigrants. Taux, exigences et processus accélérés.",
    description: "Guide hypothèque pour immigrants en Colombie-Britannique. Marché Vancouver et Victoria, taux, exigences spécifiques BC.",
    category: "Province",
    readTime: "9 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-alberta-immigrants-calgary-edmonton", "hypotheque-ontario-immigrants-toronto", "hypotheque-francophone-quebec"],
  },
  // ====== ARTICLE #9C ======
  {
    slug: "hypotheque-manitoba-immigrants-winnipeg",
    title: "Hypothèque Manitoba Immigrants : Guide Winnipeg et Autres Provinces",
    subtitle: "Opportunités Manitoba pour immigrants. Exigences réduites et programmes provinciaux.",
    description: "Guide hypothèque pour immigrants au Manitoba. Marché Winnipeg, programmes provinciaux, exigences et opportunités pour nouveaux arrivants.",
    category: "Province",
    readTime: "8 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-alberta-immigrants-calgary-edmonton", "hypotheque-francophone-quebec", "hypotheque-ontario-immigrants-toronto"],
  },
  // ====== ARTICLE #10 ======
  {
    slug: "hypotheque-maison-vs-condo-immigrant",
    title: "Maison ou Condo Immigrant : Quel Type de Propriété Choisir et Financer",
    subtitle: "Différences financement maison vs condo. Avantages/inconvénients pour immigrants.",
    description: "Maison ou condo pour un immigrant au Canada ? Comparaison financement, avantages, inconvénients, frais de copropriété et assurances.",
    category: "Achat",
    readTime: "8 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-amortissement-duree-choix", "hypotheque-taux-fixe-variable-immigrant", "preapprobation-hypotheque-immigrant"],
  },
  // ====== ARTICLE #11 ======
  {
    slug: "hypotheque-travailleur-autonome-freelance",
    title: "Hypothèque Travailleur Autonome Immigrant : Freelance et Entrepreneur",
    subtitle: "Exigences spéciales pour travailleurs autonomes. Documents bancaires et critères d'approbation.",
    description: "Guide hypothèque pour travailleurs autonomes et freelancers immigrants au Canada. Documents spécifiques, critères bancaires, stratégies d'approbation.",
    category: "Situation Spéciale",
    readTime: "9 min",
    wizardVariant: "travailleur-autonome",
    relatedSlugs: ["hypotheque-revenu-etranger-convert", "hypotheque-conjoint-chomeur-revenu", "preapprobation-hypotheque-immigrant"],
  },
  // ====== ARTICLE #12 ======
  {
    slug: "hypotheque-credit-international-alternative-data",
    title: "Hypothèque Crédit International Alternative : Solution pour Nouveaux Arrivants",
    subtitle: "Alternative credit data expliqué. Comment les banques acceptent crédit étranger.",
    description: "Comment utiliser votre crédit international et les données alternatives pour obtenir une hypothèque au Canada. Preuves acceptées par la SCHL.",
    category: "Crédit",
    readTime: "8 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-sans-historique-credit", "hypotheque-score-credit-minimum-immigrant", "hypotheque-travailleur-temporaire-5pourcent"],
  },
  // ====== ARTICLE #13 ======
  {
    slug: "hypotheque-cosignataire-parent-immigrant",
    title: "Hypothèque Co-Signataire Parent : Comment Faire Signer Vos Parents",
    subtitle: "Étapes pour co-signataire parent. Risques, responsabilités et alternatives.",
    description: "Guide co-signataire hypothèque pour immigrants. Comment faire signer un parent, risques, responsabilités légales et alternatives.",
    category: "Situation Spéciale",
    readTime: "7 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-conjoint-chomeur-revenu", "hypotheque-sans-historique-credit", "preapprobation-hypotheque-immigrant"],
  },
  // ====== ARTICLE #14 ======
  {
    slug: "hypotheque-reer-rap-immigrant-premier-achat",
    title: "Hypothèque REER et RAP Immigrant : Utiliser Votre REER pour Mise de Fonds",
    subtitle: "Comment retirer REER sans pénalités. Maximiser RAP en tant qu'immigrant.",
    description: "Comment utiliser le Régime d'accession à la propriété (RAP) et votre REER pour la mise de fonds hypothécaire en tant qu'immigrant au Canada.",
    category: "Financement",
    readTime: "8 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-assurance-schl-sagen-cmhc", "hypotheque-maison-vs-condo-immigrant", "preapprobation-hypotheque-immigrant"],
  },
  // ====== ARTICLE #15 ======
  {
    slug: "hypotheque-assurance-schl-sagen-cmhc",
    title: "Assurance Prêt Hypothécaire SCHL Sagen : Tout Ce Que Vous Devez Savoir",
    subtitle: "Comprendre assurance hypothécaire. Coûts, couverture et alternatives.",
    description: "Guide assurance prêt hypothécaire SCHL, Sagen et Canada Guaranty. Primes, couverture, quand c'est obligatoire et alternatives pour immigrants.",
    category: "Financement",
    readTime: "9 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-reer-rap-immigrant-premier-achat", "hypotheque-amortissement-duree-choix", "hypotheque-travailleur-temporaire-5pourcent"],
  },
  // ====== ARTICLE #16 ======
  {
    slug: "hypotheque-refinancement-renouvellement-immigrant",
    title: "Hypothèque Refinancement Renouvellement : Comment Changer de Taux et Lender",
    subtitle: "Quand refinancer votre hypothèque. Économies possibles et processus.",
    description: "Guide refinancement et renouvellement hypothécaire pour immigrants. Quand changer de prêteur, économies possibles, processus étape par étape.",
    category: "Gestion",
    readTime: "8 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-taux-fixe-variable-immigrant", "hypotheque-amortissement-duree-choix", "hypotheque-assurance-schl-sagen-cmhc"],
  },
  // ====== ARTICLE #17 ======
  {
    slug: "hypotheque-taux-fixe-variable-immigrant",
    title: "Hypothèque Taux Fixe ou Variable : Quel Taux Choisir pour un Immigrant",
    subtitle: "Avantages/risques taux fixe vs variable. Comparaison pour immigrants au Canada.",
    description: "Taux fixe ou variable pour votre hypothèque immigrant ? Avantages, risques, comparaison et stratégie optimale pour nouveaux arrivants au Canada.",
    category: "Taux",
    readTime: "8 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-refinancement-renouvellement-immigrant", "hypotheque-amortissement-duree-choix", "hypotheque-assurance-schl-sagen-cmhc"],
  },
  // ====== ARTICLE #18 ======
  {
    slug: "hypotheque-timeline-fermeture-immigrant",
    title: "Hypothèque Timeline Fermeture : Combien de Temps du Début à la Fin",
    subtitle: "Processus complet expliqué. Chaque étape du préapprobation à fermeture.",
    description: "Timeline complète du processus hypothécaire pour immigrants. De la préapprobation à la fermeture, chaque étape expliquée avec délais.",
    category: "Processus",
    readTime: "9 min",
    wizardVariant: undefined,
    relatedSlugs: ["preapprobation-hypotheque-immigrant", "hypotheque-travailleur-temporaire-5pourcent", "hypotheque-maison-vs-condo-immigrant"],
  },
  // ====== ARTICLE #19 ======
  {
    slug: "hypotheque-score-credit-minimum-immigrant",
    title: "Score Crédit Minimum 600 650 700 : Puis-Je Être Approuvé Immigrant",
    subtitle: "Scores crédit requis par banque. Stratégies d'approbation avec crédit faible.",
    description: "Scores de crédit minimums par banque pour immigrants au Canada. Stratégies avec score 600, 650 ou 700. Comment améliorer rapidement.",
    category: "Crédit",
    readTime: "8 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-sans-historique-credit", "hypotheque-credit-international-alternative-data", "hypotheque-travailleur-temporaire-5pourcent"],
  },
  // ====== ARTICLE #20 ======
  {
    slug: "hypotheque-amortissement-duree-choix",
    title: "Hypothèque Amortissement 25 ou 30 Ans : Quel Est le Meilleur Choix",
    subtitle: "Comparaison paiements mensuels vs intérêt total. Impact sur votre budget immigrant.",
    description: "Amortissement 25 ou 30 ans pour votre hypothèque ? Comparaison paiements mensuels, intérêt total, nouvelles règles 2024 pour premiers acheteurs.",
    category: "Financement",
    readTime: "7 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-taux-fixe-variable-immigrant", "hypotheque-assurance-schl-sagen-cmhc", "hypotheque-refinancement-renouvellement-immigrant"],
  },
  // ====== ARTICLE BONUS #21 — Ontario (suggestion) ======
  {
    slug: "hypotheque-ontario-immigrants-toronto",
    title: "Hypothèque Ontario Immigrants : Guide Toronto, Ottawa et GTA",
    subtitle: "Le plus gros marché immigrant du Canada. Taux, exigences et programmes spécifiques Ontario.",
    description: "Guide hypothèque pour immigrants en Ontario. Marché Toronto et GTA, taux, programmes bancaires et exigences pour nouveaux arrivants.",
    category: "Province",
    readTime: "10 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-francophone-quebec", "hypotheque-bc-immigrants-vancouver-victoria", "hypotheque-alberta-immigrants-calgary-edmonton"],
  },
  // ====== ARTICLE BONUS #22 — Taxe acheteur étranger (suggestion) ======
  {
    slug: "hypotheque-taxe-acheteur-etranger-exemption",
    title: "Taxe Acheteur Étranger Canada : Exemptions et Règles pour Immigrants",
    subtitle: "Qui est exempté ? RP, travailleurs temporaires, étudiants. Tout sur la loi et ses exceptions.",
    description: "Guide complet sur la taxe sur les acheteurs étrangers au Canada. Exemptions pour résidents permanents, travailleurs temporaires et étudiants.",
    category: "Légal",
    readTime: "9 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-travailleur-temporaire-5pourcent", "hypotheque-permis-travail-ouvert", "hypotheque-etudiant-permis-postdiplome"],
  },
  // ====== ARTICLE #23 — CELIAPP ======
  {
    slug: "celiapp-rap-immigrant-premier-acheteur-2026",
    title: "CELIAPP et RAP pour Immigrants : Guide Complet Premiers Acheteurs 2026",
    subtitle: "8 000$/an déductibles d'impôt. Mais attention : posséder un bien à l'étranger peut vous disqualifier.",
    description: "Guide CELIAPP et RAP pour immigrants premiers acheteurs au Canada. Admissibilité, piège du bien à l'étranger, stratégie combinée CELIAPP + RAP + REER.",
    category: "Financement",
    readTime: "10 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-reer-rap-immigrant-premier-achat", "hypotheque-amortissement-duree-choix", "hypotheque-travailleur-temporaire-5pourcent"],
  },
  // ====== ARTICLE #24 — INTERDICTION ACHAT NON-CANADIENS ======
  {
    slug: "interdiction-achat-non-canadien-exemptions-2027",
    title: "Interdiction d'Achat pour Non-Canadiens : Exemptions et Fin Prévue 2027",
    subtitle: "La loi expire le 1er janvier 2027. RP, permis de travail 183+ jours et réfugiés sont exemptés.",
    description: "Guide sur la Loi sur l'interdiction d'achat de propriété par les non-Canadiens. Exemptions pour RP, travailleurs temporaires, réfugiés. Fin prévue janvier 2027.",
    category: "Légal",
    readTime: "9 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-taxe-acheteur-etranger-exemption", "hypotheque-permis-travail-ouvert", "hypotheque-etudiant-permis-postdiplome"],
  },
  // ====== ARTICLE #25 — FRAIS CACHÉS ======
  {
    slug: "frais-caches-achat-maison-immigrant-checklist",
    title: "Tous les Frais Cachés de l'Achat Immobilier pour Immigrants (Checklist)",
    subtitle: "Taxe de bienvenue, notaire, inspection, assurance titre : 2 à 3% du prix en frais souvent oubliés.",
    description: "Checklist complète des frais cachés lors de l'achat d'une maison au Canada pour immigrants. Taxe de bienvenue, notaire, inspection, assurance titre et plus.",
    category: "Achat",
    readTime: "10 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-timeline-fermeture-immigrant", "hypotheque-maison-vs-condo-immigrant", "preapprobation-hypotheque-immigrant"],
  },
  // ====== ARTICLE #26 — DUPLEX / TRIPLEX ======
  {
    slug: "acheter-duplex-triplex-immigrant-mise-de-fonds",
    title: "Acheter un Duplex ou Triplex comme Immigrant : Mise de Fonds et Financement",
    subtitle: "Duplex occupé = 5% de mise de fonds. Triplex = 10%. Revenus locatifs comptés à 80%.",
    description: "Guide achat duplex et triplex pour immigrants au Canada. Mise de fonds minimale, revenus locatifs, financement SCHL et restrictions pour non-RP.",
    category: "Achat",
    readTime: "10 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-maison-vs-condo-immigrant", "hypotheque-travailleur-temporaire-5pourcent", "interdiction-achat-non-canadien-exemptions-2027"],
  },
  // ====== ARTICLE #27 — CONSTRUIRE SON CRÉDIT ======
  {
    slug: "construire-credit-canadien-6-mois-immigrant",
    title: "Construire son Crédit Canadien en 6 Mois : Plan d'Action pour Immigrants",
    subtitle: "De 0 à 680+ en 6 mois. Plan mois par mois avec carte sécurisée, factures et stratégies.",
    description: "Plan d'action mois par mois pour construire votre crédit canadien en tant qu'immigrant. De la carte sécurisée au score 680+ en 6 mois.",
    category: "Crédit",
    readTime: "9 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-sans-historique-credit", "hypotheque-score-credit-minimum-immigrant", "hypotheque-credit-international-alternative-data"],
  },
  // ====== ARTICLE #28 — TRANSFÉRER MISE DE FONDS ======
  {
    slug: "transferer-mise-de-fonds-etranger-canada",
    title: "Transférer sa Mise de Fonds de l'Étranger : Guide Anti-Blanchiment et Preuves",
    subtitle: "90 jours d'historique, preuve d'origine des fonds, conversion de devises. Tout ce qu'il faut savoir.",
    description: "Comment transférer votre mise de fonds de l'étranger vers le Canada. Règles anti-blanchiment, preuves exigées par les banques, conversion de devises.",
    category: "Financement",
    readTime: "9 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-revenu-etranger-convert", "preapprobation-hypotheque-immigrant", "hypotheque-travailleur-temporaire-5pourcent"],
  },
  // ====== ARTICLE #29 — COURTIER VS BANQUE ======
  {
    slug: "courtier-hypothecaire-vs-banque-immigrant",
    title: "Courtier Hypothécaire vs Banque : Quel Choix pour un Immigrant au Canada",
    subtitle: "Un courtier accède à 30+ prêteurs et comprend mieux les dossiers atypiques d'immigrants.",
    description: "Comparaison courtier hypothécaire vs banque pour immigrants. Avantages, coûts, accès aux prêteurs et pourquoi un courtier spécialisé change tout.",
    category: "Processus",
    readTime: "8 min",
    wizardVariant: undefined,
    relatedSlugs: ["preapprobation-hypotheque-immigrant", "hypotheque-taux-fixe-variable-immigrant", "hypotheque-travailleur-temporaire-5pourcent"],
  },
  // ====== ARTICLE #30 — APRÈS FAILLITE ======
  {
    slug: "hypotheque-apres-faillite-mauvais-credit-immigrant",
    title: "Hypothèque Après Faillite ou Mauvais Crédit : Options pour Immigrants",
    subtitle: "2 ans après libération de faillite, vous pouvez obtenir une hypothèque. Voici comment.",
    description: "Guide hypothèque après faillite ou mauvais crédit pour immigrants au Canada. Délais, prêteurs B, prêteurs privés et stratégie de reconstruction.",
    category: "Crédit",
    readTime: "9 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-score-credit-minimum-immigrant", "construire-credit-canadien-6-mois-immigrant", "hypotheque-sans-historique-credit"],
  },
  // ====== ARTICLE #31 — ASSURANCE HABITATION ======
  {
    slug: "assurance-habitation-immigrant-guide",
    title: "Assurance Habitation pour Immigrants : Ce Que Vous Devez Savoir Avant la Fermeture",
    subtitle: "Obligatoire pour la fermeture hypothécaire. Sans historique canadien, les primes sont plus élevées.",
    description: "Guide assurance habitation pour immigrants au Canada. Obligatoire pour la fermeture, comment réduire les primes sans historique canadien.",
    category: "Achat",
    readTime: "7 min",
    wizardVariant: undefined,
    relatedSlugs: ["hypotheque-timeline-fermeture-immigrant", "frais-caches-achat-maison-immigrant-checklist", "hypotheque-maison-vs-condo-immigrant"],
  },
  // ====== ARTICLE #32 — RÉFUGIÉS ======
  {
    slug: "hypotheque-refugie-personne-protegee-canada",
    title: "Hypothèque pour Réfugiés et Personnes Protégées au Canada : Guide Complet",
    subtitle: "Exemptés de la loi sur les acheteurs étrangers et éligibles au programme SCHL Nouveaux Arrivants.",
    description: "Guide hypothèque pour réfugiés et personnes protégées au Canada. Admissibilité SCHL, exemptions légales, programmes bancaires et aide gouvernementale.",
    category: "Statut Immigration",
    readTime: "8 min",
    wizardVariant: undefined,
    relatedSlugs: ["interdiction-achat-non-canadien-exemptions-2027", "hypotheque-sans-historique-credit", "hypotheque-travailleur-temporaire-5pourcent"],
  },
  // ====== ARTICLE #35 — ASSURANCE SCHL ======
  {
    slug: "assurance-hypothecaire-schl-primes-guide-2026",
    title: "Assurance hypothécaire SCHL : guide simplifié des primes 2026",
    subtitle: "Tableau des primes, calcul, exemptions et tout ce que la SCHL ne vous explique pas clairement.",
    description: "Guide simplifié de l'assurance hypothécaire SCHL 2026. Tableau des primes par mise de fonds, calcul, exemptions et programmes pour immigrants au Canada.",
    category: "Financement",
    readTime: "10 min",
    wizardVariant: "resident-permanent",
    relatedSlugs: ["hypotheque-travailleur-temporaire-5pourcent", "acheter-duplex-triplex-immigrant-mise-de-fonds", "frais-caches-achat-maison-immigrant-checklist"],
  },
  // ====== ARTICLE #36 — STRESS TEST ======
  {
    slug: "stress-test-hypothecaire-canada-immigrant-guide",
    title: "Test de résistance hypothécaire (stress test) : comment le réussir en tant qu'immigrant",
    subtitle: "Comprendre le taux de qualification, les ratios ABD/ATD et maximiser votre capacité d'emprunt.",
    description: "Guide complet du stress test hypothécaire au Canada pour immigrants. Taux de qualification 2026, ratios ABD/ATD, stratégies pour maximiser votre capacité d'emprunt.",
    category: "Processus",
    readTime: "9 min",
    wizardVariant: "express",
    relatedSlugs: ["preapprobation-hypotheque-immigrant", "assurance-hypothecaire-schl-primes-guide-2026", "hypotheque-taux-fixe-vs-variable"],
  },
  // ====== ARTICLE #37 — DROITS DE MUTATION ======
  {
    slug: "droits-mutation-immobiliere-province-rabais-premier-acheteur",
    title: "Droits de mutation immobilière par province : rabais pour premier acheteur immigrant",
    subtitle: "Taxe de bienvenue Québec, land transfer tax Ontario, C-B : combien payer et comment économiser.",
    description: "Guide des droits de mutation immobilière (taxe de bienvenue) par province au Canada. Rabais premier acheteur pour immigrants en Ontario, Québec, C-B et plus.",
    category: "Achat",
    readTime: "8 min",
    relatedSlugs: ["frais-caches-achat-maison-immigrant-checklist", "hypotheque-francophone-quebec", "hypotheque-ontario-immigrant"],
  },
  // ====== ARTICLE #38 — PROGRAMME SCHL NOUVEAUX ARRIVANTS ======
  {
    slug: "programme-schl-nouveaux-arrivants-guide-complet",
    title: "Programme SCHL pour nouveaux arrivants : tout ce que les banques ne vous disent pas",
    subtitle: "Mise de fonds 5%, sans historique de crédit, conditions réelles et pièges à éviter.",
    description: "Guide complet du programme SCHL Nouveaux Arrivants. Mise de fonds 5%, critères d'éligibilité réels, documents requis et ce que les banques ne vous expliquent pas.",
    category: "Financement",
    readTime: "11 min",
    wizardVariant: "travailleur-temporaire",
    relatedSlugs: ["assurance-hypothecaire-schl-primes-guide-2026", "hypotheque-travailleur-temporaire-5pourcent", "hypotheque-sans-historique-credit"],
  },
  // ====== ARTICLE #39 — RAPPORT DE CRÉDIT ======
  {
    slug: "rapport-credit-equifax-transunion-immigrant-canada",
    title: "Rapport de crédit Equifax et TransUnion : guide pour immigrant au Canada",
    subtitle: "Comment obtenir, lire et améliorer votre rapport de crédit quand vous arrivez au Canada.",
    description: "Guide complet du rapport de crédit Equifax et TransUnion pour immigrants au Canada. Comment obtenir votre rapport, comprendre votre cote et l'améliorer rapidement.",
    category: "Crédit",
    readTime: "9 min",
    relatedSlugs: ["construire-credit-canadien-6-mois-immigrant", "hypotheque-sans-historique-credit", "hypotheque-apres-faillite-mauvais-credit-immigrant"],
  },
  // ====== ARTICLE #40 — IMMEUBLE LOCATIF ======
  {
    slug: "immeuble-locatif-2-4-logements-schl-income-property-immigrant",
    title: "Acheter un immeuble locatif (2-4 logements) comme immigrant : programme SCHL Income Property",
    subtitle: "Duplex, triplex, quadruplex : comment la SCHL finance votre investissement locatif.",
    description: "Guide du programme SCHL Income Property pour immigrants. Acheter un duplex, triplex ou quadruplex locatif au Canada : mise de fonds, revenus locatifs et qualification.",
    category: "Achat",
    readTime: "10 min",
    wizardVariant: "resident-permanent",
    relatedSlugs: ["acheter-duplex-triplex-immigrant-mise-de-fonds", "assurance-hypothecaire-schl-primes-guide-2026", "hypotheque-travailleur-autonome-freelance"],
  },
  // ====== ARTICLE #41 — PREMIER CHEZ-SOI ======
  {
    slug: "premier-chez-soi-schl-amortissement-30-ans-guide",
    title: "Premier Chez-Soi SCHL : guide complet du programme d'amortissement 30 ans",
    subtitle: "Tout savoir sur le programme Premier Chez-Soi de la SCHL pour les premiers acheteurs.",
    description: "Guide complet du programme Premier Chez-Soi de la SCHL : amortissement 30 ans, critères d'admissibilité, économies mensuelles et comparaison 25 vs 30 ans pour les premiers acheteurs au Canada.",
    category: "Financement",
    readTime: "10 min",
    relatedSlugs: ["programme-schl-nouveaux-arrivants-guide-complet", "assurance-hypothecaire-schl-primes-guide-2026", "celiapp-rap-immigrant-premier-acheteur-2026"],
  },
  // ====== ARTICLE #42 — ACCESSIBILITÉ / PUIS-JE ME PERMETTRE ======
  {
    slug: "puis-je-me-permettre-maison-canada-guide-realiste",
    title: "Puis-je me permettre une maison au Canada ? Guide réaliste pour immigrants",
    subtitle: "Évaluation honnête de votre capacité d'achat immobilier au Canada.",
    description: "Guide réaliste pour évaluer si vous pouvez acheter une maison au Canada comme immigrant. Ratios ABD/ATD, stratégies d'accessibilité, co-emprunt et alternatives en période de crise du logement.",
    category: "Processus",
    readTime: "11 min",
    relatedSlugs: ["stress-test-hypothecaire-canada-immigrant-guide", "preapprobation-hypotheque-immigrant", "hypotheque-conjoint-chomeur-revenu"],
  },
  // ====== ARTICLE #43 — RENOUVELLEMENT ======
  {
    slug: "renouvellement-hypothecaire-guide-eviter-choc-paiement",
    title: "Renouvellement hypothécaire : guide pour éviter le choc de paiement",
    subtitle: "Préparez votre renouvellement et minimisez l'impact sur votre budget.",
    description: "Guide complet du renouvellement hypothécaire au Canada. Comment se préparer, négocier un meilleur taux, éviter le choc de paiement et les options si vous ne pouvez plus payer.",
    category: "Gestion",
    readTime: "10 min",
    relatedSlugs: ["hypotheque-refinancement-renouvellement-immigrant", "hypotheque-taux-fixe-variable-immigrant", "courtier-hypothecaire-vs-banque-immigrant"],
  },
  // ====== ARTICLE #44 — TAUX HYPOTHÉCAIRES COMPRENDRE ET CHOISIR ======
  {
    slug: "taux-hypothecaires-comprendre-choisir-guide",
    title: "Taux hypothécaires au Canada : comprendre et choisir le bon taux",
    subtitle: "Fixe, variable, court terme : comment choisir le meilleur taux pour votre situation.",
    description: "Guide complet des taux hypothécaires au Canada. Différences entre taux fixe et variable, impact du taux directeur de la Banque du Canada, et stratégies pour obtenir le meilleur taux comme immigrant.",
    category: "Taux",
    readTime: "10 min",
    relatedSlugs: ["hypotheque-taux-fixe-variable-immigrant", "stress-test-hypothecaire-canada-immigrant-guide", "hypotheque-refinancement-renouvellement-immigrant"],
  },
];

// Helper: get post by slug
export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

// Helper: get related posts
export function getRelatedPosts(slug: string, limit = 4): BlogPost[] {
  const post = getPostBySlug(slug);
  if (!post?.relatedSlugs) {
    return blogPosts.filter((p) => p.slug !== slug).slice(0, limit);
  }
  const related = post.relatedSlugs
    .map((s) => getPostBySlug(s))
    .filter((p): p is BlogPost => !!p);
  // Fill with other posts if not enough
  if (related.length < limit) {
    const slugs = new Set([slug, ...post.relatedSlugs]);
    for (const p of blogPosts) {
      if (related.length >= limit) break;
      if (!slugs.has(p.slug)) related.push(p);
    }
  }
  return related.slice(0, limit);
}
