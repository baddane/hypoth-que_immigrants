"use client";

import Link from "next/link";
import { useState } from "react";

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3 mb-12" role="list">
      {items.map((faq, i) => {
        const isOpen = openIndex === i;
        const panelId = `faq-panel-${i}`;
        const buttonId = `faq-button-${i}`;

        return (
          <div key={i} className="bg-white rounded-xl shadow-sm overflow-hidden" role="listitem">
            <button
              id={buttonId}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <span className="font-medium text-base">{faq.question}</span>
              <svg
                className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${isOpen ? "rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {isOpen && (
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                className="px-6 pb-5 text-base text-gray-500 leading-relaxed border-t border-gray-100 pt-4"
              >
                <p className="mb-3">{faq.answer}</p>
                <Link href="/wizard" className="text-gold text-sm hover:underline font-medium">
                  Découvrir mes options avec le wizard &rarr;
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
