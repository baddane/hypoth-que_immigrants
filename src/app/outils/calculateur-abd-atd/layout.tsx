import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculateur des ratios ABD / ATD — Qualification hypothécaire",
  description:
    "Calculez vos ratios d'amortissement brut (ABD) et total (ATD) de la dette et comparez-les aux limites de 39 % / 44 % exigées par les prêteurs canadiens.",
  alternates: { canonical: "/outils/calculateur-abd-atd" },
  openGraph: {
    title: "Calculateur des ratios ABD / ATD — Qualification hypothécaire",
    description:
      "Calculez vos ratios d'amortissement brut (ABD) et total (ATD) de la dette et comparez-les aux limites de 39 % / 44 % exigées par les prêteurs canadiens.",
    url: "/outils/calculateur-abd-atd",
    type: "website",
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
