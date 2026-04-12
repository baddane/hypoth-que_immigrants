import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Simulateur Stress Test Hypothécaire 2026 : Test de Résistance BSIF",
  description:
    "Simulez le test de résistance hypothécaire canadien (BSIF) en 30 secondes. Calculez votre capacité d'emprunt avec le taux majoré de 2 %. Gratuit, règles officielles 2026.",
  keywords: [
    "stress test hypothèque",
    "test de résistance hypothécaire",
    "simulateur stress test",
    "simulation stress test hypothécaire",
    "stress test canada",
    "taux qualification bsif",
    "test resistance hypothecaire",
    "capacité emprunt hypothèque",
    "calcul stress test",
  ],
  alternates: {
    canonical: `${SITE_URL}/outils/simulateur-stress-test`,
  },
  openGraph: {
    title: "Simulateur Stress Test Hypothécaire 2026 — Capacité d'Emprunt",
    description:
      "Calculez votre capacité d'emprunt selon le test de résistance BSIF. Taux majoré +2 %, ratios ABD/ATD. Gratuit.",
    url: `${SITE_URL}/outils/simulateur-stress-test`,
    type: "website",
    locale: "fr_CA",
  },
  robots: "index, follow",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
