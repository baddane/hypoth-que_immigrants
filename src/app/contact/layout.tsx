import type { Metadata } from "next";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact : Questions Hypothèque Immigrants Canada",
  description:
    "Contactez notre équipe pour toute question sur votre préapprobation hypothécaire au Canada. Réponse sous 24 h. Service gratuit pour immigrants et nouveaux arrivants.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
  openGraph: {
    title: "Contact — guide-hypotheque.ca",
    description:
      "Questions sur votre hypothèque au Canada ? Contactez-nous. Réponse sous 24 h.",
    url: `${SITE_URL}/contact`,
    type: "website",
    locale: "fr_CA",
  },
  robots: "index, follow",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
