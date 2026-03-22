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
