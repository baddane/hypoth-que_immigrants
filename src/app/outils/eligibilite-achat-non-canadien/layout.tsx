import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Éligibilité Achat Non-Canadien : Quiz Loi P-25.2 (2026)",
  description:
    "Vérifiez en 1 minute si vous pouvez acheter une maison au Canada comme non-Canadien. Quiz gratuit basé sur la Loi sur l'interdiction d'achat (P-25.2) et les exemptions 2026.",
  keywords: [
    "loi interdiction achat non canadien",
    "loi p-25.2",
    "non canadien acheter maison",
    "étranger acheter maison canada",
    "exemption achat étranger",
    "travailleur temporaire acheter maison canada",
    "étudiant international acheter maison",
    "interdiction achat immobilier étranger",
  ],
  alternates: {
    canonical: `${SITE_URL}/outils/eligibilite-achat-non-canadien`,
  },
  openGraph: {
    title: "Puis-je Acheter une Maison au Canada (Non-Canadien) ?",
    description:
      "Quiz gratuit Loi P-25.2 : vérifiez vos exemptions selon votre statut (permis travail, étudiant, résident protégé).",
    url: `${SITE_URL}/outils/eligibilite-achat-non-canadien`,
    type: "website",
    locale: "fr_CA",
  },
  robots: "index, follow",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
