"use client";

import { useState } from "react";
import { faqItems } from "@/data/banks";
import type { Metadata } from "next";

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
          Réponses aux questions les plus fréquentes sur l&apos;hypothèque pour immigrants au Canada.
        </p>

        <div className="space-y-3">
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
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
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
