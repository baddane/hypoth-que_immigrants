// ============================================
// DONNÉES OFFICIELLES SCHL/CMHC 2025-2026
// Sources: cmhc-schl.gc.ca, wowa.ca
// ============================================

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

// ============================================
// DONNÉES SCHL / CMHC OFFICIELLES
// ============================================

export const cmhcRules = {
  // Ratios d'endettement (Décembre 2024 update)
  gdsMax: 39, // Amortissement Brut de la Dette (ABD)
  tdsMax: 44, // Amortissement Total de la Dette (ATD)
  // Ratios spécifiques Nouveaux Arrivants SCHL
  gdsNewcomer: 35,
  tdsNewcomer: 42,

  // Stress test
  stressTestFloor: 5.25, // ou taux contractuel + 2%, le plus élevé
  stressTestAddon: 2.0,

  // Mise de fonds
  downPaymentMinPercent: 5,
  downPaymentThreshold: 500_000, // 5% sur les premiers 500k
  downPaymentAboveThreshold: 10, // 10% au-dessus de 500k
  maxPurchasePriceInsured: 1_500_000, // Hausse déc. 2024 (était 1M)

  // Amortissement
  amortissementStandard: 25,
  amortissementFirstTimeBuyer: 30, // Nouveau déc. 2024

  // Crédit
  creditScoreMinimum: 600, // Baissé de 680 en juillet 2021

  // Nouveaux arrivants
  newcomerMaxYears: 5, // Max 5 ans depuis immigration
  newcomerMinEmployment: 3, // Mois minimum d'emploi canadien

  // Propriétés
  maxUnitsInsured: 4, // 1 à 4 logements, occupant-propriétaire
};

export const cmhcInsurancePremiums = [
  // Prime d'assurance SCHL selon ratio prêt-valeur (LTV)
  { ltvRange: "65% et moins", premium: 0.60 },
  { ltvRange: "65.01% - 75%", premium: 1.70 },
  { ltvRange: "75.01% - 80%", premium: 2.40 },
  { ltvRange: "80.01% - 85%", premium: 2.80 },
  { ltvRange: "85.01% - 90%", premium: 3.10 },
  { ltvRange: "90.01% - 95%", premium: 4.00 },
];

export const cmhcAlternativeCredit = [
  "Confirmation de paiement de loyer sur 12 mois",
  "Relevé de paiement de chambre et pension sur 12 mois",
  "Historique de paiement de factures (téléphone, internet, services)",
  "Relevés bancaires montrant une épargne régulière sur 12 mois",
  "Rapport de crédit international du pays d'origine",
  "Références bancaires d'institutions financières étrangères",
];

// ============================================
// PROGRAMMES PAR BANQUE (NEWCOMERS)
// ============================================

export const bankPrograms = [
  {
    name: "RBC",
    fullName: "Banque Royale du Canada",
    program: "Programme Nouveaux Arrivants RBC",
    highlights: [
      "Mise de fonds minimum 5% avec RP",
      "35% minimum si moins de 2 ans d'emploi canadien",
      "Accepte références bancaires du pays d'origine",
      "Pas d'historique crédit canadien requis (RP)",
    ],
    eligibility: "Résidents permanents et certains travailleurs temporaires",
    downPayment: "5% à 35% selon situation",
    specialFeature: "Programme Welcome to Canada",
  },
  {
    name: "TD",
    fullName: "Banque Toronto-Dominion",
    program: "Programme Nouveaux Arrivants TD",
    highlights: [
      "Pas d'historique crédit canadien requis (RP)",
      "Disponible aux RP de 5 ans et moins",
      "Preuve de résidence au Canada requise",
      "Options de taux fixe et variable compétitifs",
    ],
    eligibility: "Résidents permanents (max 5 ans au Canada)",
    downPayment: "5% minimum avec assurance SCHL",
    specialFeature: "TD Welcome Account pour bâtir le crédit",
  },
  {
    name: "Scotiabank",
    fullName: "Banque Scotia",
    program: "Scotiabank StartRight",
    highlights: [
      "Mise de fonds minimum 5%",
      "Disponible aux résidents temporaires",
      "Peut exiger mise de fonds plus élevée selon profil",
      "Programme complet pour newcomers",
    ],
    eligibility: "Résidents permanents et résidents temporaires",
    downPayment: "5% minimum (peut varier)",
    specialFeature: "Programme StartRight avec accompagnement complet",
  },
  {
    name: "BMO",
    fullName: "Banque de Montréal",
    program: "Programme Nouveaux Arrivants BMO",
    highlights: [
      "Programme NewStart pour bâtir le crédit",
      "Garantie de taux 130 jours",
      "Carte de crédit NewStart pour débuter",
      "Options flexibles pour immigrants",
    ],
    eligibility: "Résidents permanents et travailleurs autorisés",
    downPayment: "5% minimum",
    specialFeature: "Garantie de taux 130 jours (vs 120 standard)",
  },
  {
    name: "CIBC",
    fullName: "Banque CIBC",
    program: "Programme Nouveaux Arrivants CIBC",
    highlights: [
      "3 programmes : Standard, PLUS (retour), et Travailleurs Étrangers",
      "Pas d'historique crédit canadien requis",
      "Options pour différents statuts d'immigration",
      "Accompagnement en plusieurs langues",
    ],
    eligibility: "RP, retournants, et travailleurs étrangers",
    downPayment: "5% minimum selon programme",
    specialFeature: "3 programmes distincts selon votre profil",
  },
  {
    name: "Desjardins",
    fullName: "Mouvement Desjardins",
    program: "Programme Nouveaux Arrivants Desjardins",
    highlights: [
      "Carte de crédit gratuite pour bâtir le score",
      "Taux compétitifs pour résidents du Québec",
      "Service en français garanti",
      "Connaissance du marché québécois",
    ],
    eligibility: "Résidents permanents et travailleurs temporaires",
    downPayment: "5% minimum",
    specialFeature: "Expertise Québec + carte crédit gratuite",
  },
];

// ============================================
// DOCUMENTS REQUIS (DONNÉES OFFICIELLES)
// ============================================

export const requiredDocuments = {
  identite: [
    "Passeport valide",
    "Carte de résidence permanente (RP)",
    "Permis de travail valide (travailleurs temporaires)",
    "Visa de travail avec date d'expiration",
  ],
  revenus: [
    "Lettre d'emploi (date d'embauche, salaire, poste)",
    "2 derniers talons de paie",
    "Avis de cotisation T4 (si disponible)",
    "Déclaration de revenus (si au Canada > 1 an)",
    "Contrat de travail",
  ],
  financier: [
    "Relevés bancaires des 3 derniers mois (Canada)",
    "Relevés bancaires du pays d'origine (si applicable)",
    "Preuve de mise de fonds (source des fonds)",
    "Lettre de don (si apport est un cadeau familial)",
    "Relevé des dettes existantes",
  ],
  creditAlternatif: [
    "12 mois de paiements de loyer (reçus/relevés)",
    "Historique paiement factures (téléphone, internet)",
    "Rapport de crédit international",
    "Relevés d'épargne régulière sur 12 mois",
    "Références bancaires du pays d'origine",
  ],
  propriete: [
    "Offre d'achat signée",
    "Évaluation de la propriété (si requise)",
    "Certificat de localisation",
    "Inspection préachat (recommandé)",
  ],
};

// ============================================
// LEAD SCORING
// ============================================

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

// ============================================
// WIZARD STEPS (enrichi avec données SCHL)
// ============================================

export const wizardSteps = [
  {
    id: "statut",
    question: "Quel est votre statut d'immigration au Canada ?",
    help: "Le programme SCHL Nouveaux Arrivants s'applique aux résidents permanents et aux personnes légalement autorisées à travailler au Canada.",
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
    help: "La SCHL considère comme « nouvel arrivant » toute personne immigrée au Canada depuis 5 ans ou moins. Minimum 3 mois d'emploi canadien requis.",
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
    help: "Le score minimum SCHL est 600. Sans historique canadien, la SCHL accepte des preuves alternatives : loyer payé sur 12 mois, factures régulières, ou crédit international.",
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
    help: "Incluez votre revenu d'emploi canadien. Note : le revenu locatif étranger n'est PAS inclus dans les calculs SCHL. Le stress test utilise le taux contractuel + 2% ou 5,25%, le plus élevé.",
  },
  {
    id: "apport",
    question: "Combien pouvez-vous verser d'apport initial ?",
    help: "Minimum SCHL : 5% sur les premiers 500 000$ et 10% au-delà. Maximum prix achat assuré : 1,5M$. L'apport doit provenir de vos fonds propres ou d'un don non remboursable.",
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
    help: "Les programmes varient par province. Le Québec offre des options spécifiques via Desjardins et les courtiers locaux.",
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

// ============================================
// BLOG POSTS
// ============================================

export const blogPosts = [
  {
    slug: "hypotheque-immigrants-canada-guide",
    title: "Guide Complet : Comment Obtenir une Hypothèque en tant qu'Immigrant au Canada",
    description: "Guide complet et à jour sur comment obtenir une hypothèque en tant qu'immigrant au Canada. Programme SCHL Nouveaux Arrivants, banques, documents, délais.",
    category: "Guide Principal",
    readTime: "15 min",
    estimatedTraffic: "200-300/mois",
  },
  {
    slug: "hypotheque-permis-travail",
    title: "Hypothèque avec Permis de Travail au Canada",
    description: "Guide complet pour obtenir une hypothèque avec un permis de travail temporaire au Canada. Programmes Scotiabank StartRight, CIBC, et plus.",
    category: "Statut Immigration",
    readTime: "8 min",
    estimatedTraffic: "50-100/mois",
  },
  {
    slug: "hypotheque-residence-permanente",
    title: "Hypothèque pour Résidents Permanents du Canada",
    description: "Avantages du statut RP pour votre hypothèque. Programme SCHL Nouveaux Arrivants, mise de fonds 5%, crédit alternatif.",
    category: "Statut Immigration",
    readTime: "8 min",
    estimatedTraffic: "50-100/mois",
  },
  {
    slug: "hypotheque-quebec",
    title: "Guide Hypothèque pour Immigrants au Québec",
    description: "Guide complet hypothèque pour immigrants au Québec. Desjardins, règles provinciales, particularités du marché québécois.",
    category: "Province",
    readTime: "9 min",
    estimatedTraffic: "75-100/mois",
  },
  {
    slug: "combien-emprunter",
    title: "Combien Pouvez-Vous Emprunter ? Calcul Capacité Hypothèque",
    description: "Calcul capacité d'emprunt : ratios GDS 39% / TDS 44%, stress test à 5,25%, mise de fonds et amortissement expliqués.",
    category: "Calcul",
    readTime: "7 min",
    estimatedTraffic: "100-150/mois",
  },
  {
    slug: "documents-hypotheque",
    title: "Documents Requis pour Hypothèque Immigrants — Checklist Complète",
    description: "Checklist complète des documents : identité, revenus, financier, crédit alternatif SCHL, et documents propriété.",
    category: "Documents",
    readTime: "6 min",
    estimatedTraffic: "75-100/mois",
  },
  {
    slug: "banques-hypotheque",
    title: "Quelles Banques Canadiennes Acceptent les Immigrants ?",
    description: "RBC, TD, Scotiabank, BMO, CIBC, Desjardins : comparaison complète des programmes hypothécaires pour nouveaux arrivants.",
    category: "Banques",
    readTime: "10 min",
    estimatedTraffic: "100-150/mois",
  },
  {
    slug: "mauvais-credit",
    title: "Hypothèque avec Mauvais Crédit pour Immigrants",
    description: "Score minimum SCHL : 600. Options avec crédit faible, prêteurs alternatifs, et stratégies pour améliorer votre score.",
    category: "Crédit",
    readTime: "7 min",
    estimatedTraffic: "50-75/mois",
  },
  {
    slug: "sans-historique-credit",
    title: "Hypothèque Sans Historique Crédit au Canada",
    description: "La SCHL accepte le crédit alternatif : loyer 12 mois, factures, crédit international. Guide complet des preuves alternatives.",
    category: "Crédit",
    readTime: "8 min",
    estimatedTraffic: "50-75/mois",
  },
];

// ============================================
// FAQ (enrichie avec données SCHL officielles)
// ============================================

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
    answer: "Chaque situation est unique. Le programme SCHL Nouveaux Arrivants est spécifiquement conçu pour les immigrants récents (5 ans et moins). Même sans historique de crédit canadien, la SCHL accepte des preuves alternatives de solvabilité (loyer payé sur 12 mois, factures régulières). La grande majorité de nos utilisateurs reçoivent au moins une offre.",
  },
  {
    question: "Puis-je obtenir une hypothèque en tant que travailleur temporaire ?",
    answer: "Oui ! Le programme SCHL Nouveaux Arrivants accepte les résidents non permanents légalement autorisés à travailler au Canada. Des banques comme Scotiabank (programme StartRight) et CIBC (programme Travailleurs Étrangers) ont des offres spécifiques. Il faut minimum 3 mois d'emploi canadien.",
  },
  {
    question: "Quel est le score de crédit minimum requis ?",
    answer: "Le score minimum SCHL est de 600 (abaissé de 680 en 2021). Cependant, si vous n'avez pas d'historique de crédit canadien, la SCHL accepte des méthodes alternatives : confirmation de paiement de loyer sur 12 mois, historique de factures, ou rapport de crédit international.",
  },
  {
    question: "Que faire si je n'ai pas d'historique de crédit canadien ?",
    answer: "C'est l'un des avantages du programme SCHL Nouveaux Arrivants. La SCHL accepte des preuves alternatives : 12 mois de paiement de loyer, historique de factures (téléphone, internet), relevés d'épargne régulière, ou rapport de crédit de votre pays d'origine. RBC, TD, CIBC et BMO ont tous des programmes dédiés aux nouveaux arrivants sans crédit canadien.",
  },
  {
    question: "Quelle mise de fonds minimum est requise ?",
    answer: "Le minimum est 5% du prix d'achat sur les premiers 500 000$, et 10% sur la portion au-dessus de 500 000$. Exemple : pour un achat de 600 000$, il faut 5% × 500 000$ + 10% × 100 000$ = 35 000$. L'assurance SCHL est obligatoire si la mise de fonds est inférieure à 20%. Le prix maximum pour une propriété assurée est de 1,5 million $ (hausse de déc. 2024).",
  },
  {
    question: "Qu'est-ce que l'assurance SCHL (CMHC) ?",
    answer: "L'assurance prêt hypothécaire SCHL protège le prêteur (pas vous) en cas de défaut de paiement. Elle est obligatoire si votre mise de fonds est inférieure à 20%. La prime varie de 0,60% à 4,00% du montant emprunté selon votre ratio prêt-valeur, et est ajoutée à votre hypothèque. Pour le programme Nouveaux Arrivants, les ratios d'endettement maximaux sont ABD 35% et ATD 42%.",
  },
  {
    question: "Qu'est-ce que le stress test hypothécaire ?",
    answer: "Le stress test vérifie que vous pouvez supporter des taux plus élevés. Vous devez vous qualifier au taux contractuel + 2% ou à 5,25%, le plus élevé des deux. Par exemple, si votre taux contractuel est 4,5%, vous devez vous qualifier à 6,5%. C'est obligatoire pour toutes les hypothèques assurées SCHL.",
  },
  {
    question: "Quels documents dois-je préparer ?",
    answer: "Documents essentiels : passeport valide, carte RP ou permis de travail, lettre d'emploi avec salaire et date d'embauche, 2 derniers talons de paie, relevés bancaires des 3 derniers mois, et preuve de mise de fonds. Si pas de crédit canadien : 12 mois de reçus de loyer, factures payées, ou rapport de crédit international.",
  },
  {
    question: "Mon revenu étranger est-il pris en compte ?",
    answer: "Important : selon les règles SCHL, le revenu locatif étranger n'est PAS inclus dans le calcul des ratios d'endettement. Votre revenu d'emploi canadien est la base principale. Cependant, certaines banques peuvent considérer d'autres revenus étrangers comme revenu secondaire — nos courtiers spécialisés savent optimiser votre dossier.",
  },
  {
    question: "Quelle est la période d'amortissement maximum ?",
    answer: "L'amortissement standard maximum est de 25 ans. Depuis décembre 2024, les acheteurs d'une première propriété et les acheteurs de propriétés neuves peuvent bénéficier d'un amortissement de 30 ans. Un amortissement plus long réduit vos paiements mensuels mais augmente le coût total d'intérêts.",
  },
  {
    question: "Quelles banques ont des programmes pour immigrants ?",
    answer: "Les 6 grandes banques canadiennes ont des programmes spécifiques : RBC (Welcome to Canada), TD (Nouveaux Arrivants), Scotiabank (StartRight), BMO (NewStart), CIBC (3 programmes : Standard, PLUS, Travailleurs Étrangers), et Desjardins (spécialiste Québec). Notre wizard analyse votre profil pour identifier les meilleures options.",
  },
  {
    question: "Mes données sont-elles sécurisées ?",
    answer: "Absolument. Nous sommes conformes à la loi PIPEDA (Loi canadienne sur la protection des renseignements personnels). Vos données ne sont partagées qu'avec les courtiers que vous avez autorisés via la case de consentement, et vous pouvez demander la suppression de vos données à tout moment. Politique de conservation : 12 mois maximum.",
  },
];
