import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simulateur de test de résistance hypothécaire (stress test) 2026",
  description:
    "Vérifiez si vous passez le test de résistance hypothécaire (ligne directrice B-20). Taux admissible majoré, ratios ABD/ATD et montant maximal — calcul gratuit.",
  alternates: { canonical: "/outils/simulateur-stress-test" },
  openGraph: {
    title: "Simulateur de test de résistance hypothécaire (stress test) 2026",
    description:
      "Vérifiez si vous passez le test de résistance hypothécaire (ligne directrice B-20). Taux admissible majoré, ratios ABD/ATD et montant maximal — calcul gratuit.",
    url: "/outils/simulateur-stress-test",
    type: "website",
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
