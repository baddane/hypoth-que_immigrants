// ============================================
// WIZARD VARIANTS — 7 profils spécialisés
// Chaque variante pré-configure le wizard avec des valeurs par défaut
// et personnalise le messaging pour la conversion
// ============================================

export interface WizardVariant {
  id: string;
  slug: string; // URL: /wizard/[slug]
  title: string;
  subtitle: string;
  badge: string;
  badgeEmoji: string;
  color: string; // tailwind color class
  colorHex: string;
  defaultAnswers: Record<string, string>; // pre-fill wizard answers
  heroTitle: string;
  heroDescription: string;
  trustSignals: string[];
  ctaText: string;
  relatedArticles: string[]; // blog slugs
}

export const wizardVariants: WizardVariant[] = [
  {
    id: "travailleur-temporaire",
    slug: "travailleur-temporaire",
    title: "Wizard Hypothèque — Travailleur Temporaire",
    subtitle: "Découvrez combien vous pouvez emprunter avec votre permis de travail temporaire",
    badge: "Permis Temporaire",
    badgeEmoji: "🛂",
    color: "blue",
    colorHex: "#3B82F6",
    defaultAnswers: {
      statut: "Travailleur Temporaire - Permis Fermé",
    },
    heroTitle: "Hypothèque pour\nTravailleur Temporaire",
    heroDescription: "Permis de travail fermé ou ouvert ? Découvrez vos options hypothécaires en 5 minutes. Programme SCHL Nouveaux Arrivants + Scotiabank StartRight + CIBC.",
    trustSignals: [
      "Mise de fonds dès 5% avec assurance SCHL",
      "Scotiabank StartRight accepte les permis temporaires",
      "Pas besoin de crédit canadien établi",
      "Résultat en 5 minutes, offres sous 24h",
    ],
    ctaText: "Découvrir Mes Options",
    relatedArticles: ["hypotheque-travailleur-temporaire-5pourcent", "hypotheque-permis-travail-ouvert", "hypotheque-sans-historique-credit"],
  },
  {
    id: "etudiant",
    slug: "etudiant-international",
    title: "Wizard Hypothèque — Étudiant International",
    subtitle: "Obtenez votre préapprobation hypothécaire après vos études (Permis Postdiplôme)",
    badge: "Étudiant PGWP",
    badgeEmoji: "🎓",
    color: "green",
    colorHex: "#22C55E",
    defaultAnswers: {
      statut: "Travailleur International - Permis Ouvert",
    },
    heroTitle: "Hypothèque pour\nÉtudiant International",
    heroDescription: "Permis postdiplôme (PGWP) ? Découvrez comment devenir propriétaire dès maintenant. Options spécifiques pour étudiants internationaux.",
    trustSignals: [
      "PGWP accepté par plusieurs banques",
      "Crédit alternatif si nouveau au Canada",
      "Mise de fonds 5% possible avec SCHL",
      "Courtiers spécialisés en profils étudiants",
    ],
    ctaText: "Vérifier Mon Éligibilité",
    relatedArticles: ["hypotheque-etudiant-permis-postdiplome", "hypotheque-sans-historique-credit", "hypotheque-permis-travail-ouvert"],
  },
  {
    id: "resident-permanent",
    slug: "resident-permanent",
    title: "Wizard Hypothèque — Résident Permanent Nouveau",
    subtitle: "Vous venez d'obtenir votre RP ? Découvrez vos options hypothécaires",
    badge: "Résident Permanent",
    badgeEmoji: "✅",
    color: "amber",
    colorHex: "#F59E0B",
    defaultAnswers: {
      statut: "Résident Permanent (RP)",
    },
    heroTitle: "Hypothèque pour\nRésident Permanent",
    heroDescription: "Félicitations pour votre RP ! Vous avez accès à tous les programmes SCHL. Découvrez combien vous pouvez emprunter et les meilleures offres.",
    trustSignals: [
      "Accès complet aux programmes SCHL",
      "Mise de fonds 5% comme tout Canadien",
      "6 grandes banques avec programmes dédiés RP",
      "Amortissement 30 ans si premier achat",
    ],
    ctaText: "Calculer Ma Capacité",
    relatedArticles: ["hypotheque-travailleur-temporaire-5pourcent", "hypotheque-sans-historique-credit", "preapprobation-hypotheque-immigrant"],
  },
  {
    id: "professionnel",
    slug: "professionnel-reglemente",
    title: "Wizard Hypothèque — Professionnel Réglementé",
    subtitle: "Médecin, ingénieur, avocat ? Obtenez préapprobation spécialisée",
    badge: "Professionnel",
    badgeEmoji: "👨‍⚕️",
    color: "purple",
    colorHex: "#8B5CF6",
    defaultAnswers: {},
    heroTitle: "Hypothèque pour\nProfessionnel Réglementé",
    heroDescription: "Médecin, ingénieur, avocat, pharmacien ? Les banques ont des programmes spéciaux pour vous. Taux préférentiels et conditions avantageuses.",
    trustSignals: [
      "Programmes spéciaux médecins et ingénieurs",
      "Taux préférentiels pour professionnels",
      "Revenu potentiel futur considéré",
      "Approbation accélérée pour professions réglementées",
    ],
    ctaText: "Accéder Aux Offres Pro",
    relatedArticles: ["preapprobation-hypotheque-immigrant", "hypotheque-travailleur-temporaire-5pourcent", "hypotheque-sans-historique-credit"],
  },
  {
    id: "travailleur-autonome",
    slug: "travailleur-autonome",
    title: "Wizard Hypothèque — Travailleur Autonome",
    subtitle: "Freelancer ? Entrepreneur ? Découvrez votre capacité d'emprunt",
    badge: "Autonome",
    badgeEmoji: "💼",
    color: "orange",
    colorHex: "#F97316",
    defaultAnswers: {},
    heroTitle: "Hypothèque pour\nTravailleur Autonome",
    heroDescription: "Freelancer ou entrepreneur immigrant ? Les exigences sont différentes mais l'accès est possible. Découvrez les options adaptées à votre profil.",
    trustSignals: [
      "2 ans de revenus d'entreprise suffisent",
      "Avis de cotisation T1 accepté comme preuve",
      "Courtiers spécialisés en travailleurs autonomes",
      "Prêteurs alternatifs disponibles si banque refuse",
    ],
    ctaText: "Vérifier Mon Éligibilité",
    relatedArticles: ["hypotheque-travailleur-autonome-freelance", "hypotheque-revenu-etranger-convert", "preapprobation-hypotheque-immigrant"],
  },
  {
    id: "quebec",
    slug: "quebec",
    title: "Wizard Hypothèque Québec — Version Française",
    subtitle: "Guide hypothèque spécifique Québec en français",
    badge: "Québec",
    badgeEmoji: "⚜️",
    color: "blue",
    colorHex: "#1E40AF",
    defaultAnswers: {
      province: "Québec",
    },
    heroTitle: "Hypothèque\nau Québec",
    heroDescription: "Service 100% en français. Desjardins, caisses populaires et banques. Découvrez les options spécifiques au marché québécois.",
    trustSignals: [
      "Service entièrement en français",
      "Desjardins et caisses populaires inclus",
      "Connaissance du marché québécois",
      "Notaire, taxe de bienvenue : tout expliqué",
    ],
    ctaText: "Commencer en Français",
    relatedArticles: ["hypotheque-francophone-quebec", "hypotheque-travailleur-temporaire-5pourcent", "preapprobation-hypotheque-immigrant"],
  },
  {
    id: "express",
    slug: "express",
    title: "Wizard Hypothèque Express — 3 Minutes",
    subtitle: "Vérification rapide : êtes-vous prêt en 3 minutes ?",
    badge: "Express",
    badgeEmoji: "⚡",
    color: "red",
    colorHex: "#EF4444",
    defaultAnswers: {},
    heroTitle: "Vérification\nExpress",
    heroDescription: "Pas le temps ? En 3 minutes, découvrez si vous êtes éligible à une hypothèque au Canada et recevez un premier diagnostic.",
    trustSignals: [
      "Seulement 3 minutes",
      "Résultat instantané",
      "Aucun engagement",
      "Offres dans les 24h si éligible",
    ],
    ctaText: "Test Express",
    relatedArticles: ["preapprobation-hypotheque-immigrant", "hypotheque-travailleur-temporaire-5pourcent", "hypotheque-sans-historique-credit"],
  },
];

export function getVariantBySlug(slug: string): WizardVariant | undefined {
  return wizardVariants.find((v) => v.slug === slug);
}

export function getVariantById(id: string): WizardVariant | undefined {
  return wizardVariants.find((v) => v.id === id);
}
