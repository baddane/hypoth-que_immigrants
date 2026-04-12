import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Calculateur Prime SCHL 2026 : Calcul Assurance Hypothécaire CMHC",
  description:
    "Calculatrice SCHL gratuite. Calculez votre prime d'assurance hypothécaire CMHC en 10 secondes selon votre mise de fonds (5 %, 10 %, 15 %). Tableau des primes officielles 2026.",
  keywords: [
    "calculateur schl",
    "calculatrice schl",
    "calcul prime schl",
    "prime schl calcul",
    "tableau prime schl",
    "schl prime",
    "calculatrice cmhc",
    "calcul assurance hypothécaire",
    "prime assurance hypothécaire canada",
  ],
  alternates: {
    canonical: `${SITE_URL}/outils/calculateur-prime-schl`,
  },
  openGraph: {
    title: "Calculateur Prime SCHL 2026 — Calcul en 10 secondes",
    description:
      "Calculez votre prime d'assurance hypothécaire SCHL selon votre mise de fonds. Taux officiels 2026. 100 % gratuit.",
    url: `${SITE_URL}/outils/calculateur-prime-schl`,
    type: "website",
    locale: "fr_CA",
  },
  robots: "index, follow",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
