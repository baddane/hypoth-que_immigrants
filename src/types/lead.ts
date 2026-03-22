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
  quality: LeadQuality;
}

export type LeadQuality = "EXCELLENT" | "GOOD" | "OK" | "WEAK";
