import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Calculateur Capacité d'Emprunt Hypothèque 2026 : Montant Maximum",
  description:
    "Calculez votre capacité d'emprunt hypothécaire en 30 secondes : montant maximum, prix de propriété accessible et prime SCHL selon vos revenus et dettes. Gratuit, règles 2026.",
  keywords: [
    "calculateur capacité emprunt",
    "capacité emprunt hypothèque",
    "montant empruntable hypothèque",
    "combien je peux emprunter hypothèque",
    "capacité emprunt canada",
    "calculer montant hypothèque maximum",
    "hypothèque selon salaire",
  ],
  alternates: {
    canonical: `${SITE_URL}/outils/calculateur-montant-empruntable`,
  },
  openGraph: {
    title: "Capacité d'Emprunt Hypothèque — Calculateur Gratuit 2026",
    description:
      "Combien pouvez-vous emprunter ? Calcul selon revenus, dettes, mise de fonds. Gratuit, règles BSIF 2026.",
    url: `${SITE_URL}/outils/calculateur-montant-empruntable`,
    type: "website",
    locale: "fr_CA",
  },
  robots: "index, follow",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
