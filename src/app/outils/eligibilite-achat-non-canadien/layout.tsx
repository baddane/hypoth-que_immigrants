import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Quiz d'éligibilité à l'achat immobilier pour non-Canadiens (Loi P-25.2)",
  description:
    "Découvrez en 2 minutes si vous pouvez acheter une propriété au Canada malgré l'interdiction fédérale. Exemptions par statut d'immigration — Loi P-25.2.",
  alternates: { canonical: "/outils/eligibilite-achat-non-canadien" },
  openGraph: {
    title: "Quiz d'éligibilité à l'achat immobilier pour non-Canadiens (Loi P-25.2)",
    description:
      "Découvrez en 2 minutes si vous pouvez acheter une propriété au Canada malgré l'interdiction fédérale. Exemptions par statut d'immigration — Loi P-25.2.",
    url: "/outils/eligibilite-achat-non-canadien",
    type: "website",
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
