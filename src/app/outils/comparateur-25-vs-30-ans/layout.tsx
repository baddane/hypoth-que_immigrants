import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Amortissement 25 vs 30 ans : Comparateur Hypothèque 2026",
  description:
    "Comparez votre hypothèque sur 25 ou 30 ans : paiement mensuel, intérêts totaux, économies. Outil gratuit pour premiers acheteurs au Canada. Règles 2026.",
  keywords: [
    "amortissement 25 vs 30 ans",
    "hypothèque 30 ans canada",
    "comparateur amortissement",
    "25 ou 30 ans hypothèque",
    "amortissement 30 ans premier acheteur",
    "calculateur amortissement hypothèque",
  ],
  alternates: {
    canonical: `${SITE_URL}/outils/comparateur-25-vs-30-ans`,
  },
  openGraph: {
    title: "Amortissement 25 vs 30 ans — Comparateur Hypothèque",
    description:
      "Combien coûte une hypothèque 30 ans vs 25 ans ? Paiement mensuel, intérêts, économies. Gratuit.",
    url: `${SITE_URL}/outils/comparateur-25-vs-30-ans`,
    type: "website",
    locale: "fr_CA",
  },
  robots: "index, follow",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
