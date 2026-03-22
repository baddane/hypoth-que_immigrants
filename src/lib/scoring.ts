import type { LeadQuality } from "@/types/lead";

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
  // Scoring inversé intentionnellement: les leads sans apport ont besoin
  // d'assurance SCHL obligatoire, ce qui génère plus de commissions partenaires.
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
}): { score: number; quality: LeadQuality } {
  let score = 0;
  score += scoringRules.statut[data.statut] ?? 0;
  score += scoringRules.duree[data.duree] ?? 0;
  score += scoringRules.credit[data.credit] ?? 0;
  score += getRevenueScore(data.revenu);
  score += scoringRules.apport[data.apport] ?? 0;
  score += getMomentScore(data.meilleurMoment);

  let quality: LeadQuality;
  if (score >= 200) quality = "EXCELLENT";
  else if (score >= 120) quality = "GOOD";
  else if (score >= 50) quality = "OK";
  else quality = "WEAK";

  return { score, quality };
}
