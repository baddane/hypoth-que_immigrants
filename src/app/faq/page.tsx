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
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <p className="uppercase text-sm tracking-[0.3em] text-gold mb-4">Questions Fréquentes</p>
        <h1 className="font-serif text-3xl md:text-5xl mb-4">
          FAQ Hypothèque <em className="text-gold">Immigrants</em>
        </h1>
        <p className="text-gray-500 mb-12 max-w-xl text-lg">
          Réponses aux questions les plus fréquentes. Chaque réponse vous rapproche de votre hypothèque.
        </p>

        <FaqAccordion items={faqItems} />

        {/* CTA */}
        <div className="bg-gray-900 text-white rounded-2xl p-10 text-center">
          <h2 className="font-serif text-2xl mb-4">Vous avez d&apos;autres questions ?</h2>
          <p className="text-gray-400 text-base mb-6">Notre wizard analyse votre situation unique et vous connecte avec des experts.</p>
          <Link
            href="/wizard"
            className="inline-block bg-gold text-white px-8 py-3.5 rounded-full font-bold hover:bg-gold-dark transition uppercase tracking-wider"
          >
            Commencer le Wizard Gratuit
          </Link>
          <p className="text-sm text-gray-500 mt-3">5 minutes &bull; Gratuit &bull; Sans engagement</p>
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
