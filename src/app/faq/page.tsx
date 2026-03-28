import Link from "next/link";
import type { Metadata } from "next";
import { faqItems } from "@/data/banks";
import FaqAccordion from "@/components/FaqAccordion";

export const metadata: Metadata = {
  title: "FAQ Hypothèque Immigrants — Questions Fréquentes",
  description:
    "Réponses aux questions les plus fréquentes sur l'hypothèque pour immigrants au Canada. SCHL, crédit, mise de fonds, programmes bancaires.",
};

export default function FAQPage() {
  return (
    <section className="py-20 bg-light-blue min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <p className="uppercase text-xs tracking-[0.3em] text-primary font-semibold mb-4">Questions Fréquentes</p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-navy mb-4">
          FAQ Hypothèque <span className="text-primary">Immigrants</span>
        </h1>
        <p className="text-dark/60 mb-12 max-w-xl">
          Réponses aux questions les plus fréquentes. Chaque réponse vous rapproche de votre hypothèque.
        </p>

        <FaqAccordion items={faqItems} />

        {/* CTA */}
        <div className="bg-navy text-white rounded-xl p-10 text-center">
          <h2 className="text-2xl font-extrabold mb-4">Vous avez d&apos;autres questions ?</h2>
          <p className="text-white/50 text-sm mb-6">Notre wizard analyse votre situation unique et vous connecte avec des experts.</p>
          <Link
            href="/wizard"
            className="inline-block bg-primary text-white px-8 py-3.5 rounded-md font-bold hover:bg-primary-dark transition uppercase tracking-wider"
          >
            Commencer le Wizard Gratuit
          </Link>
          <p className="text-xs text-white/30 mt-3">5 minutes &bull; Gratuit &bull; Sans engagement</p>
        </div>

        {/* Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqItems.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
