export interface Bank {
  name: string;
  shortName: string;
  tauxMin: string;
  tauxMax: string;
  documents: string;
  delai: string;
  rating: number;
  specialites: string[];
  acceptsTemporary: boolean;
  acceptsNoCreditHistory: boolean;
  provinces: string[];
}

export const banks: Bank[] = [
  {
    name: "RBC (Royal Bank of Canada)",
    shortName: "RBC",
    tauxMin: "4.49%",
    tauxMax: "5.89%",
    documents: "Standard",
    delai: "3-4 semaines",
    rating: 5,
    specialites: ["Programme Nouveaux Arrivants", "Pas de crédit requis (RP)", "Apport flexible"],
    acceptsTemporary: true,
    acceptsNoCreditHistory: true,
    provinces: ["all"],
  },
  {
    name: "TD (Toronto Dominion)",
    shortName: "TD",
    tauxMin: "4.49%",
    tauxMax: "5.79%",
    documents: "Standard",
    delai: "3-4 semaines",
    rating: 4,
    specialites: ["Programme Nouveaux Arrivants", "Taux compétitifs", "Large réseau"],
    acceptsTemporary: true,
    acceptsNoCreditHistory: true,
    provinces: ["all"],
  },
  {
    name: "CIBC",
    shortName: "CIBC",
    tauxMin: "4.59%",
    tauxMax: "5.99%",
    documents: "Étendu",
    delai: "4-5 semaines",
    rating: 3,
    specialites: ["Programme immigrants", "Options flexibles"],
    acceptsTemporary: true,
    acceptsNoCreditHistory: false,
    provinces: ["all"],
  },
  {
    name: "BMO (Bank of Montreal)",
    shortName: "BMO",
    tauxMin: "4.54%",
    tauxMax: "5.89%",
    documents: "Standard",
    delai: "3-5 semaines",
    rating: 4,
    specialites: ["Programme Nouveaux Arrivants", "Conseiller dédié"],
    acceptsTemporary: true,
    acceptsNoCreditHistory: true,
    provinces: ["all"],
  },
  {
    name: "Scotiabank",
    shortName: "Scotia",
    tauxMin: "4.49%",
    tauxMax: "5.79%",
    documents: "Standard",
    delai: "3-4 semaines",
    rating: 4,
    specialites: ["StartRight Program", "Pas d'historique requis", "Apport 5% min"],
    acceptsTemporary: true,
    acceptsNoCreditHistory: true,
    provinces: ["all"],
  },
  {
    name: "Tangerine",
    shortName: "Tang.",
    tauxMin: "4.39%",
    tauxMax: "5.49%",
    documents: "Simplifié",
    delai: "2-3 semaines",
    rating: 3,
    specialites: ["100% en ligne", "Taux bas", "Processus rapide"],
    acceptsTemporary: false,
    acceptsNoCreditHistory: false,
    provinces: ["all"],
  },
  {
    name: "Nesto",
    shortName: "Nesto",
    tauxMin: "4.29%",
    tauxMax: "5.39%",
    documents: "Simplifié",
    delai: "2-3 semaines",
    rating: 4,
    specialites: ["Courtier en ligne", "Meilleurs taux garantis", "Comparaison automatique"],
    acceptsTemporary: true,
    acceptsNoCreditHistory: true,
    provinces: ["all"],
  },
];

export const blogPosts = [
  {
    slug: "hypotheque-immigrants-canada-guide-complet",
    title: "Guide Complet : Comment Obtenir une Hypothèque en tant qu'Immigrant au Canada",
    description: "Guide complet et à jour sur comment obtenir une hypothèque en tant qu'immigrant au Canada. Exigences, banques, taux, documents, délais.",
    category: "Guide Principal",
    readTime: "15 min",
  },
  {
    slug: "hypotheque-permis-travail",
    title: "Hypothèque avec Permis de Travail au Canada",
    description: "Guide complet pour obtenir une hypothèque avec un permis de travail temporaire au Canada.",
    category: "Statut Immigration",
    readTime: "8 min",
  },
  {
    slug: "hypotheque-residence-permanente",
    title: "Hypothèque pour Résidents Permanents du Canada",
    description: "Guide pour résidents permanents cherchant une hypothèque. Avantages en tant que RP.",
    category: "Statut Immigration",
    readTime: "8 min",
  },
  {
    slug: "hypotheque-quebec",
    title: "Guide Hypothèque pour Immigrants au Québec",
    description: "Guide complet hypothèque pour immigrants au Québec. Règles provinciales, particularités.",
    category: "Province",
    readTime: "9 min",
  },
  {
    slug: "combien-emprunter-immigrants",
    title: "Combien Pouvez-Vous Emprunter ? Calcul Capacité Hypothèque",
    description: "Comment calculer combien vous pouvez emprunter pour hypothèque en tant qu'immigrant.",
    category: "Calcul",
    readTime: "7 min",
  },
  {
    slug: "banques-acceptent-immigrants",
    title: "Quelles Banques Canadiennes Acceptent les Immigrants ?",
    description: "Liste complète des banques canadiennes acceptant immigrants pour hypothèque.",
    category: "Banques",
    readTime: "10 min",
  },
  {
    slug: "documents-hypotheque-immigrants",
    title: "Documents Requis pour Hypothèque Immigrants",
    description: "Checklist complète des documents requis pour hypothèque en tant qu'immigrant au Canada.",
    category: "Documents",
    readTime: "6 min",
  },
  {
    slug: "hypotheque-mauvais-credit",
    title: "Hypothèque avec Mauvais Crédit pour Immigrants",
    description: "Guide pour obtenir hypothèque avec mauvais score crédit en tant qu'immigrant.",
    category: "Crédit",
    readTime: "7 min",
  },
  {
    slug: "hypotheque-sans-historique-credit",
    title: "Hypothèque Sans Historique Crédit au Canada",
    description: "Guide pour obtenir hypothèque sans historique crédit canadien.",
    category: "Crédit",
    readTime: "8 min",
  },
  {
    slug: "taux-hypotheque-immigrants-2024",
    title: "Taux Hypothécaires pour Immigrants Canada 2024",
    description: "Taux hypothécaires actuels pour immigrants au Canada. Comparaison banques, tendances.",
    category: "Taux",
    readTime: "5 min",
  },
];

export const faqItems = [
  {
    question: "Puis-je obtenir une hypothèque en tant que travailleur temporaire ?",
    answer: "Oui, vous pouvez obtenir une hypothèque avec un permis de travail temporaire au Canada. La plupart des grandes banques canadiennes (RBC, TD, Scotiabank, BMO) ont des programmes spéciaux pour les travailleurs temporaires. Les conditions varient : certaines banques exigent un permis de travail valide pour au moins 12 mois, un apport initial d'au moins 10%, et une preuve d'emploi stable. Votre statut d'immigration, la durée de votre permis et votre historique de crédit canadien seront des facteurs déterminants.",
  },
  {
    question: "Quel score de crédit minimum est requis ?",
    answer: "Le score de crédit minimum typique pour obtenir une hypothèque au Canada est de 600 à 650, mais les immigrants peuvent bénéficier de programmes spéciaux. Certaines banques comme RBC et Scotiabank offrent des programmes pour les nouveaux arrivants qui n'ont pas encore d'historique de crédit canadien. Dans ce cas, elles peuvent utiliser votre historique de crédit international ou des preuves alternatives de solvabilité.",
  },
  {
    question: "Combien de temps après mon arrivée au Canada puis-je demander une hypothèque ?",
    answer: "Techniquement, vous pouvez demander une hypothèque dès votre arrivée au Canada, surtout si vous êtes résident permanent. Cependant, la plupart des experts recommandent d'attendre au moins 6 mois pour construire un minimum d'historique de crédit. Certaines banques ont des programmes \"nouveaux arrivants\" qui s'appliquent jusqu'à 5 ans après votre arrivée.",
  },
  {
    question: "Que faire si je n'ai pas d'historique de crédit canadien ?",
    answer: "Plusieurs options s'offrent à vous : 1) Utiliser les programmes pour nouveaux arrivants des grandes banques qui n'exigent pas d'historique canadien. 2) Fournir un historique de crédit international. 3) Augmenter votre apport initial (20% ou plus). 4) Commencer à construire votre crédit avec une carte de crédit sécurisée. 5) Utiliser un co-signataire avec un bon crédit canadien.",
  },
  {
    question: "Quels documents dois-je préparer ?",
    answer: "Les documents essentiels incluent : passeport valide, carte de résidence permanente ou permis de travail, preuve de revenus (lettres d'emploi, talons de paie des 3 derniers mois), relevés bancaires des 3 derniers mois, déclarations de revenus des 2 dernières années (si applicable), preuve d'apport initial, et rapport de crédit. Selon votre situation, des documents supplémentaires peuvent être demandés.",
  },
  {
    question: "Combien de temps prend le processus d'approbation ?",
    answer: "Le processus complet prend typiquement de 4 à 8 semaines : 1-2 semaines pour la préapprobation, 2-3 semaines pour l'approbation complète, et 1-2 semaines pour la fermeture. Les délais peuvent varier selon la banque, la complexité de votre dossier et la province.",
  },
  {
    question: "Est-ce que mon revenu étranger compte pour l'hypothèque ?",
    answer: "Oui, certaines banques acceptent les revenus étrangers, mais avec des restrictions. Généralement, seul le revenu canadien est pleinement considéré. Le revenu étranger peut être utilisé comme revenu secondaire ou de soutien. Vous devrez fournir des preuves documentées et, dans certains cas, un apport initial plus élevé sera requis.",
  },
  {
    question: "Quelle est la différence entre préapprobation et approbation ?",
    answer: "La préapprobation est une évaluation préliminaire non engageante basée sur vos informations financières. Elle vous donne une idée du montant que vous pourriez emprunter et bloque un taux d'intérêt pour 90-120 jours. L'approbation finale intervient après la vérification complète de vos documents, l'évaluation de la propriété et la confirmation de toutes les conditions.",
  },
  {
    question: "Puis-je obtenir une hypothèque si mon conjoint n'a pas d'emploi ?",
    answer: "Oui, c'est possible. Le calcul de la capacité d'emprunt sera basé uniquement sur votre revenu. Cependant, si votre conjoint a des dettes, elles seront prises en compte dans le ratio d'endettement total (TDS). Il est parfois préférable de demander l'hypothèque individuellement si le conjoint a des dettes significatives.",
  },
  {
    question: "Quels frais dois-je payer en plus du taux hypothécaire ?",
    answer: "Les frais supplémentaires comprennent : l'assurance prêt hypothécaire SCHL (si apport < 20%), les frais juridiques et notariaux (1 000-2 500$), l'inspection de la propriété (300-500$), l'évaluation de la propriété (300-500$), les droits de mutation immobilière (varient par province), l'assurance titre, et les frais de déménagement. Prévoyez environ 1,5% à 4% du prix d'achat en frais supplémentaires.",
  },
];

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
    ],
  },
  {
    id: "emploi",
    question: "Quel est votre type d'emploi ?",
    options: [
      "Salarié (CDI/Permanent)",
      "Salarié (Contrat Temporaire)",
      "Travailleur Autonome/Freelance",
      "Professionnel Réglementé (médecin, ingénieur, etc.)",
      "Sans emploi (en recherche)",
    ],
  },
];
