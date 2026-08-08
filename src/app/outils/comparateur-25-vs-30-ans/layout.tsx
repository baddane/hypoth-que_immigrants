import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Comparateur d'amortissement 25 vs 30 ans — Hypothèque Canada",
  description:
    "Comparez les paiements mensuels et les intérêts totaux d'une hypothèque sur 25 ans contre 30 ans. Outil gratuit pour choisir votre période d'amortissement.",
  alternates: { canonical: "/outils/comparateur-25-vs-30-ans" },
  openGraph: {
    title: "Comparateur d'amortissement 25 vs 30 ans — Hypothèque Canada",
    description:
      "Comparez les paiements mensuels et les intérêts totaux d'une hypothèque sur 25 ans contre 30 ans. Outil gratuit pour choisir votre période d'amortissement.",
    url: "/outils/comparateur-25-vs-30-ans",
    type: "website",
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
