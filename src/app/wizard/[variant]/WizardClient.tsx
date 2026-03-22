"use client";

import WizardCore from "@/components/WizardCore";

interface WizardClientProps {
  variantId: string;
  defaultAnswers: Record<string, string>;
  ctaText: string;
}

export default function WizardClient({ variantId, defaultAnswers, ctaText }: WizardClientProps) {
  return (
    <WizardCore
      variantId={variantId}
      defaultAnswers={defaultAnswers}
      ctaText={ctaText}
    />
  );
}
