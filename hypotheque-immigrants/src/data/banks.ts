export interface LeadData {
  statut: string;
  duree: string;
  credit: string;
  revenu: number;
  apport: string;
  province: string;
  emploi: string;
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  meilleurMoment: string;
  accepteContact: boolean;
  score: number;
  quality: "EXCELLENT" | "GOOD" | "OK" | "WEAK";
}

// Lead scoring per step
export const scoringRules: Record<string, Record<string, number>> = {
  statut: {
    "Résident Permanent (RP)": 50,
    "Travailleur Temporaire - Permis Fermé": 25,
    "Travailleur International - Permis Ouvert": 25,
    "Préparation Immigration (en attente)": -50,
    "Citoyen Canadien": 100,
  },
  duree: {
    "Moins de 6 mois": 0,
    "6 mois à 1 an": 10,
    "1 à 2 ans": 25,
    "2 à 5 ans": 50,
    "Plus de 5 ans": 60,
  },
  credit: {
    "Non (nouveau au Canada)": 10,
    "Oui, crédit excellent (750+)": 40,
    "Oui, crédit bon (700-749)": 35,
    "Oui, crédit moyen (650-699)": 20,
    "Oui, crédit faible (moins de 650)": 5,
  },
  apport: {
    "Aucun (0%)": 20,
    "5% du prix d'achat": 15,
    "10-15%": 10,
    "20%+": 5,
  },
};

export function getRevenueScore(revenu: number): number {
  if (revenu >= 100000) return 50;
  if (revenu >= 75000) return 35;
  if (revenu >= 50000) return 25;
  if (revenu >= 30000) return 15;
  return 5;
}

export function getMomentScore(moment: string): number {
  if (moment === "Aujourd'hui") return 20;
  if (moment === "Demain") return 10;
  if (moment === "Cette semaine") return 5;
  return 0;
}

export function calculateLeadScore(data: {
  statut: string;
  duree: string;
  credit: string;
  revenu: number;
  apport: string;
  meilleurMoment: string;
}): { score: number; quality: "EXCELLENT" | "GOOD" | "OK" | "WEAK" } {
  let score = 0;
  score += scoringRules.statut[data.statut] ?? 0;
  score += scoringRules.duree[data.duree] ?? 0;
  score += scoringRules.credit[data.credit] ?? 0;
  score += getRevenueScore(data.revenu);
  score += scoringRules.apport[data.apport] ?? 0;
  score += getMomentScore(data.meilleurMoment);

  let quality: "EXCELLENT" | "GOOD" | "OK" | "WEAK";
  if (score >= 200) quality = "EXCELLENT";
  else if (score >= 120) quality = "GOOD";
  else if (score >= 50) quality = "OK";
  else quality = "WEAK";

  return { score, quality };
}

export const wizardSteps = [
  {
    id: "statut",
    question: "Quel est votre statut d'immigration au Canada ?",
    options: [
      "Résident Permanent (RP)",
      "Travailleur Temporaire - Permis Fermé",
      "Travailleur International - Permis Ouvert",
      "Préparation Immigration (en attente)",
      "Citoyen Canadien",
    ],
  },
  {
    id: "duree",
    question: "Depuis combien de temps êtes-vous au Canada ?",
    options: [
      "Moins de 6 mois",
      "6 mois à 1 an",
      "1 à 2 ans",
      "2 à 5 ans",
      "Plus de 5 ans",
    ],
  },
  {
    id: "credit",
    question: "Avez-vous un historique de crédit canadien ?",
    options: [
      "Non (nouveau au Canada)",
      "Oui, crédit excellent (750+)",
      "Oui, crédit bon (700-749)",
      "Oui, crédit moyen (650-699)",
      "Oui, crédit faible (moins de 650)",
    ],
  },
  {
    id: "revenu",
    question: "Quel est votre revenu annuel brut (en CAD) ?",
    type: "slider" as const,
    min: 20000,
    max: 500000,
    step: 5000,
    help: "Incluez tous les revenus (emploi, conjoint, etc.)",
  },
  {
    id: "apport",
    question: "Combien pouvez-vous verser d'apport initial ?",
    options: [
      "Aucun (0%)",
      "5% du prix d'achat",
      "10-15%",
      "20%+",
    ],
  },
  {
    id: "province",
    question: "Dans quelle province cherchez-vous ?",
    options: [
      "Ontario",
      "Québec",
      "Colombie-Britannique",
      "Alberta",
      "Manitoba",
      "Saskatchewan",
      "Nouvelle-Écosse",
      "Nouveau-Brunswick",
      "Île-du-Prince-Édouard",
      "Terre-Neuve-Labrador",
      "Yukon",
      "Territoires du Nord-Ouest",
      "Nunavut",
    ],
  },
];

// Step 7 is the lead form, handled separately in the wizard component

export const blogPosts = [
  {
    slug: "hypotheque-immigrants-canada-guide",
    title: "Guide Complet : Comment Obtenir une Hypothèque en tant qu'Immigrant au Canada",
    description: "Guide complet et à jour sur comment obtenir une hypothèque en tant qu'immigrant au Canada. Exigences, banques, taux, documents, délais.",
    category: "Guide Principal",
    readTime: "15 min",
    estimatedTraffic: "200-300/mois",
  },
  {
    slug: "hypotheque-permis-travail",
    title: "Hypothèque avec Permis de Travail au Canada",
    description: "Guide complet pour obtenir une hypothèque avec un permis de travail temporaire au Canada.",
    category: "Statut Immigration",
    readTime: "8 min",
    estimatedTraffic: "50-100/mois",
  },
  {
    slug: "hypotheque-residence-permanente",
    title: "Hypothèque pour Résidents Permanents du Canada",
    description: "Guide pour résidents permanents cherchant une hypothèque. Avantages en tant que RP.",
    category: "Statut Immigration",
    readTime: "8 min",
    estimatedTraffic: "50-100/mois",
  },
  {
    slug: "hypotheque-quebec",
    title: "Guide Hypothèque pour Immigrants au Québec",
    description: "Guide complet hypothèque pour immigrants au Québec. Règles provinciales, particularités.",
    category: "Province",
    readTime: "9 min",
    estimatedTraffic: "75-100/mois",
  },
  {
    slug: "combien-emprunter",
    title: "Combien Pouvez-Vous Emprunter ? Calcul Capacité Hypothèque",
    description: "Comment calculer combien vous pouvez emprunter pour hypothèque en tant qu'immigrant.",
    category: "Calcul",
    readTime: "7 min",
    estimatedTraffic: "100-150/mois",
  },
  {
    slug: "documents-hypotheque",
    title: "Documents Requis pour Hypothèque Immigrants",
    description: "Checklist complète des documents requis pour hypothèque en tant qu'immigrant au Canada.",
    category: "Documents",
    readTime: "6 min",
    estimatedTraffic: "75-100/mois",
  },
  {
    slug: "banques-hypotheque",
    title: "Quelles Banques Canadiennes Acceptent les Immigrants ?",
    description: "Liste complète des banques canadiennes acceptant immigrants pour hypothèque.",
    category: "Banques",
    readTime: "10 min",
    estimatedTraffic: "100-150/mois",
  },
  {
    slug: "mauvais-credit",
    title: "Hypothèque avec Mauvais Crédit pour Immigrants",
    description: "Guide pour obtenir hypothèque avec mauvais score crédit en tant qu'immigrant.",
    category: "Crédit",
    readTime: "7 min",
    estimatedTraffic: "50-75/mois",
  },
  {
    slug: "sans-historique-credit",
    title: "Hypothèque Sans Historique Crédit au Canada",
    description: "Guide pour obtenir hypothèque sans historique crédit canadien.",
    category: "Crédit",
    readTime: "8 min",
    estimatedTraffic: "50-75/mois",
  },
];

export const faqItems = [
  {
    question: "C'est vraiment gratuit ?",
    answer: "Oui, notre service est 100% gratuit pour vous. Nous sommes rémunérés par nos partenaires bancaires et courtiers hypothécaires lorsqu'ils vous offrent un service. Vous ne payez absolument rien pour utiliser notre wizard et recevoir des recommandations personnalisées.",
  },
  {
    question: "Combien de temps ça prend ?",
    answer: "Le wizard prend environ 5 minutes à compléter. Ensuite, nos courtiers partenaires vous contacteront dans les 24 heures suivant votre soumission. Vous pourriez avoir 2-3 offres hypothécaires en main dans les 48 à 72 heures.",
  },
  {
    question: "Serai-je approuvé pour une hypothèque ?",
    answer: "Chaque situation est unique, mais la grande majorité des immigrants qui utilisent notre wizard reçoivent au moins une offre de nos partenaires. Même si votre crédit est limité ou si vous êtes récemment arrivé au Canada, nos courtiers spécialisés ont des solutions adaptées à votre profil.",
  },
  {
    question: "Puis-je obtenir une hypothèque en tant que travailleur temporaire ?",
    answer: "Oui ! Plusieurs de nos partenaires bancaires (RBC, TD, Scotiabank, BMO) ont des programmes spéciaux pour les travailleurs temporaires. Les conditions varient selon la banque, mais avec un permis de travail valide pour au moins 12 mois et un emploi stable, vos chances sont excellentes.",
  },
  {
    question: "Quel score de crédit minimum est requis ?",
    answer: "Le minimum typique est de 600 à 650, mais certaines banques offrent des programmes pour nouveaux arrivants sans historique de crédit canadien. Utilisez notre wizard pour découvrir les options adaptées à votre situation spécifique.",
  },
  {
    question: "Que faire si je n'ai pas d'historique de crédit canadien ?",
    answer: "Plusieurs banques offrent des programmes spéciaux pour les nouveaux arrivants. Elles peuvent utiliser votre historique de crédit international ou des preuves alternatives de solvabilité. Notre wizard identifie automatiquement les meilleurs partenaires pour votre situation.",
  },
  {
    question: "Quels documents dois-je préparer ?",
    answer: "Les documents essentiels incluent : passeport valide, carte de résidence permanente ou permis de travail, preuve de revenus, relevés bancaires des 3 derniers mois, et preuve d'apport initial. Après avoir complété le wizard, vous recevrez une checklist personnalisée par email.",
  },
  {
    question: "Combien de courtiers vont me contacter ?",
    answer: "En général, 2 à 3 courtiers spécialisés en hypothèques pour immigrants vous contacteront. Vous pouvez ensuite comparer leurs offres et choisir celle qui vous convient le mieux, sans aucune obligation.",
  },
  {
    question: "Est-ce que mon revenu étranger compte ?",
    answer: "Certaines banques acceptent les revenus étrangers comme revenu secondaire. Le revenu canadien est toujours prioritaire, mais nos courtiers savent comment maximiser votre dossier en incluant toutes les sources de revenus pertinentes.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "Absolument. Nous sommes conformes à la loi PIPEDA (Loi canadienne sur la protection des renseignements personnels). Vos données ne sont partagées qu'avec les courtiers que vous avez autorisés, et vous pouvez demander la suppression de vos données à tout moment.",
  },
];
