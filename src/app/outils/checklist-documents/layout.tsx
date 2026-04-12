import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Checklist Documents Hypothèque Canada 2026 : 15 Documents Requis",
  description:
    "Liste complète des 15 documents requis pour une demande d'hypothèque au Canada. Checklist interactive gratuite pour immigrants, travailleurs temporaires et résidents permanents.",
  keywords: [
    "documents hypothèque canada",
    "documents demande hypothèque",
    "documents requis hypothèque",
    "checklist hypothèque",
    "documents préapprobation hypothèque",
    "papier hypothèque immigrant",
    "liste documents hypothèque canada",
  ],
  alternates: {
    canonical: `${SITE_URL}/outils/checklist-documents`,
  },
  openGraph: {
    title: "Checklist Documents Hypothèque Canada 2026",
    description:
      "15 documents requis pour obtenir une hypothèque au Canada. Checklist interactive gratuite.",
    url: `${SITE_URL}/outils/checklist-documents`,
    type: "website",
    locale: "fr_CA",
  },
  robots: "index, follow",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
