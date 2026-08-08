import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Checklist des documents hypothécaires — Immigrants Canada",
  description:
    "Cochez les 15 documents requis pour votre demande d'hypothèque au Canada : identité, statut, revenus, finances et crédit alternatif. Outil interactif gratuit.",
  alternates: { canonical: "/outils/checklist-documents" },
  openGraph: {
    title: "Checklist des documents hypothécaires — Immigrants Canada",
    description:
      "Cochez les 15 documents requis pour votre demande d'hypothèque au Canada : identité, statut, revenus, finances et crédit alternatif. Outil interactif gratuit.",
    url: "/outils/checklist-documents",
    type: "website",
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
