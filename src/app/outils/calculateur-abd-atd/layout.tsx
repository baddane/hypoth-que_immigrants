import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Calculateur Ratios ABD / ATD Hypothèque 2026 : GDS TDS Canada",
  description:
    "Calculez vos ratios ABD (39 %) et ATD (44 %) pour une hypothèque canadienne. Outil gratuit avec barres visuelles selon les normes SCHL et BSIF 2026.",
  keywords: [
    "calculateur abd atd",
    "ratio abd atd",
    "ratio gds tds",
    "calcul gds tds hypothèque",
    "ratio endettement hypothèque canada",
    "amortissement brut dette",
    "amortissement total dette",
    "ratio endettement schl",
  ],
  alternates: {
    canonical: `${SITE_URL}/outils/calculateur-abd-atd`,
  },
  openGraph: {
    title: "Calculateur Ratios ABD / ATD Hypothèque Canada 2026",
    description:
      "Vérifiez vos ratios d'endettement vs limites 39 % / 44 %. Outil gratuit, normes SCHL 2026.",
    url: `${SITE_URL}/outils/calculateur-abd-atd`,
    type: "website",
    locale: "fr_CA",
  },
  robots: "index, follow",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
