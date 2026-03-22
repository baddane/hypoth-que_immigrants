"use client";

import Link from "next/link";
import { useState } from "react";
import { faqItems } from "@/data/banks";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <p className="uppercase text-xs tracking-[0.3em] text-gold mb-4">Questions Fréquentes</p>
        <h1 className="font-serif text-3xl md:text-5xl mb-4">
          FAQ Hypothèque <em className="text-gold">Immigrants</em>
        </h1>
        <p className="text-gray-500 mb-12 max-w-xl">
          Réponses aux questions les plus fréquentes. Chaque réponse vous rapproche de votre hypothèque.
        </p>

        <div className="space-y-3 mb-12">
          {faqItems.map((faq, i) => (
            <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
              >
                <span className="font-medium text-sm">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5 text-sm text-gray-500 leading-relaxed border-t border-gray-100 pt-4">
                  <p className="mb-3">{faq.answer}</p>
                  <Link href="/wizard" className="text-gold text-xs hover:underline font-medium">
                    Découvrir mes options avec le wizard &rarr;
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="bg-gray-900 text-white rounded-2xl p-10 text-center">
          <h2 className="font-serif text-2xl mb-4">Vous avez d&apos;autres questions ?</h2>
          <p className="text-gray-400 text-sm mb-6">Notre wizard analyse votre situation unique et vous connecte avec des experts.</p>
          <Link
            href="/wizard"
            className="inline-block bg-gold text-white px-8 py-3.5 rounded-full font-bold hover:bg-gold-dark transition uppercase tracking-wider"
          >
            Commencer le Wizard Gratuit
          </Link>
          <p className="text-xs text-gray-500 mt-3">5 minutes &bull; Gratuit &bull; Sans engagement</p>
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
