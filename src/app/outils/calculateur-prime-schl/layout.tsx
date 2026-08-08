import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Calculateur de prime d'assurance SCHL 2026 — Gratuit",
  description:
    "Calculez gratuitement votre prime d'assurance prêt hypothécaire SCHL selon le prix de la propriété et votre mise de fonds. Barème officiel 2026 pour immigrants au Canada.",
  alternates: { canonical: "/outils/calculateur-prime-schl" },
  openGraph: {
    title: "Calculateur de prime d'assurance SCHL 2026 — Gratuit",
    description:
      "Calculez gratuitement votre prime d'assurance prêt hypothécaire SCHL selon le prix de la propriété et votre mise de fonds. Barème officiel 2026 pour immigrants au Canada.",
    url: "/outils/calculateur-prime-schl",
    type: "website",
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
