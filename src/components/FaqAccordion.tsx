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
    <div className="space-y-3 mb-12">
      {items.map((faq, i) => (
        <div key={i} className="bg-white rounded-lg shadow-[0_2px_8px_rgba(0,0,0,0.06)] overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
          >
            <span className="font-semibold text-sm text-navy">{faq.question}</span>
            <svg
              className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${openIndex === i ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {openIndex === i && (
            <div className="px-6 pb-5 text-sm text-dark/60 leading-relaxed border-t border-gray-100 pt-4">
              <p className="mb-3">{faq.answer}</p>
              <Link href="/wizard" className="text-primary text-xs hover:underline font-medium">
                Découvrir mes options avec le wizard &rarr;
              </Link>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
