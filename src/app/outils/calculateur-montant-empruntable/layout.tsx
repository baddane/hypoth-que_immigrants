import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Combien puis-je emprunter ? Calculateur de capacité hypothécaire",
  description:
    "Estimez gratuitement le montant que vous pouvez emprunter selon vos revenus, vos dettes et votre mise de fonds : prix de propriété maximal et prime SCHL.",
  alternates: { canonical: "/outils/calculateur-montant-empruntable" },
  openGraph: {
    title: "Combien puis-je emprunter ? Calculateur de capacité hypothécaire",
    description:
      "Estimez gratuitement le montant que vous pouvez emprunter selon vos revenus, vos dettes et votre mise de fonds : prix de propriété maximal et prime SCHL.",
    url: "/outils/calculateur-montant-empruntable",
    type: "website",
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
