import type { Metadata } from "next";
import WizardCore from "@/components/WizardCore";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Préapprobation Hypothécaire Gratuite 2026 : Wizard 5 Minutes",
  description:
    "Obtenez votre préapprobation hypothécaire en 5 minutes. Wizard gratuit pour immigrants au Canada. Répondez à 7 questions et recevez des offres personnalisées de courtiers.",
  keywords: [
    "préapprobation hypothèque",
    "préapprobation hypothécaire gratuite",
    "préapprobation en ligne",
    "hypothèque immigrants canada",
    "wizard hypothèque",
  ],
  alternates: {
    canonical: `${SITE_URL}/wizard`,
  },
  openGraph: {
    title: "Préapprobation Hypothécaire Gratuite — 5 Minutes",
    description:
      "7 questions, des offres personnalisées de courtiers. Pour immigrants au Canada.",
    url: `${SITE_URL}/wizard`,
    type: "website",
    locale: "fr_CA",
  },
  robots: "index, follow",
};

export default function WizardPage() {
  return <WizardCore />;
}
