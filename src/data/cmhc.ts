// ============================================
// DONNEES OFFICIELLES SCHL/CMHC 2025-2026
// Sources: cmhc-schl.gc.ca, wowa.ca
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
