// ============================================
// BLOG POSTS METADATA — 22 articles
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
