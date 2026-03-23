import { Suspense } from "react";
import type { Metadata } from "next";
import WizardCore from "@/components/WizardCore";

export const metadata: Metadata = {
  title: "Wizard Hypothèque — Préapprobation Gratuite en 5 Minutes",
  description:
    "Répondez à 7 questions simples et recevez des offres hypothécaires personnalisées de courtiers spécialisés pour immigrants au Canada.",
};

export default function WizardPage() {
  return (
    <Suspense>
      <WizardCore />
    </Suspense>
  );
}
