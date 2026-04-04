"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const wizardLinks = [
  { slug: "travailleur-temporaire", label: "Travailleur Temporaire", emoji: "🛂" },
  { slug: "etudiant-international", label: "Étudiant International", emoji: "🎓" },
  { slug: "resident-permanent", label: "Résident Permanent", emoji: "✅" },
  { slug: "professionnel-reglemente", label: "Professionnel Réglementé", emoji: "👨‍⚕️" },
  { slug: "travailleur-autonome", label: "Travailleur Autonome", emoji: "💼" },
  { slug: "quebec", label: "Québec", emoji: "⚜️" },
  { slug: "express", label: "Express 3 min", emoji: "⚡" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [wizardDropdown, setWizardDropdown] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200" style={{ height: 68 }}>
        <div className="max-w-[1240px] mx-auto px-4 flex items-center justify-between h-full">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/icon.png" alt="guide-hypotheque.ca" width={36} height={36} className="rounded-lg" />
            <span className="text-lg font-extrabold text-midnight">
              guide-hypotheque<span className="text-gold">.ca</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-semibold" aria-label="Navigation principale">
            <div
              className="relative"
              onMouseEnter={() => setWizardDropdown(true)}
              onMouseLeave={() => setWizardDropdown(false)}
            >
              <Link href="/wizard" className="text-midnight hover:text-gold transition flex items-center gap-1 py-2" aria-expanded={wizardDropdown} aria-haspopup="true">
                Wizard
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              {wizardDropdown && (
                <div className="absolute top-full left-0 mt-0 bg-white rounded-2xl shadow-lg border border-gray-200 py-3 w-64 z-50" role="menu">
                  <Link
                    href="/wizard"
                    className="block px-5 py-2.5 text-sm font-semibold text-midnight hover:bg-gold-light hover:text-gold transition"
                  >
                    Wizard Principal
                  </Link>
                  <div className="border-t border-gray-100 my-1" />
                  {wizardLinks.map((w) => (
                    <Link
                      key={w.slug}
                      href={`/wizard/${w.slug}`}
                      className="flex items-center gap-2 px-5 py-2 text-sm font-normal text-gray-600 hover:bg-gold-light hover:text-gold transition"
                    >
                      <span>{w.emoji}</span>
                      <span>{w.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/blog" className="text-midnight hover:text-gold transition py-2">Guides</Link>
            <Link href="/faq" className="text-midnight hover:text-gold transition py-2">FAQ</Link>
            <Link href="/about" className="text-midnight hover:text-gold transition py-2">À propos</Link>
          </nav>

          <div className="hidden md:block">
            <Link
              href="/wizard"
              className="bg-gold text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white hover:text-gold border border-gold transition"
            >
              Préapprobation Gratuite
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6 text-midnight" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 px-6 py-4 space-y-1 max-h-[80vh] overflow-y-auto shadow-lg">
            <Link href="/wizard" className="block text-midnight py-2 font-semibold" onClick={() => setMenuOpen(false)}>
              Wizard Principal
            </Link>
            <div className="pl-4 space-y-1 border-l-2 border-gold/30 ml-2">
              {wizardLinks.map((w) => (
                <Link
                  key={w.slug}
                  href={`/wizard/${w.slug}`}
                  className="flex items-center gap-2 text-gray-600 py-1.5 text-sm"
                  onClick={() => setMenuOpen(false)}
                >
                  <span>{w.emoji}</span>
                  <span>{w.label}</span>
                </Link>
              ))}
            </div>
            <Link href="/blog" className="block text-midnight py-2 font-semibold" onClick={() => setMenuOpen(false)}>Guides</Link>
            <Link href="/faq" className="block text-midnight py-2 font-semibold" onClick={() => setMenuOpen(false)}>FAQ</Link>
            <Link href="/about" className="block text-midnight py-2 font-semibold" onClick={() => setMenuOpen(false)}>À propos</Link>
            <Link
              href="/wizard"
              className="block bg-gold text-white px-5 py-2.5 rounded-lg text-sm font-semibold text-center mt-3 border border-gold hover:bg-white hover:text-gold transition"
              onClick={() => setMenuOpen(false)}
            >
              Préapprobation Gratuite
            </Link>
          </div>
        )}
      </header>

      {/* Sticky bottom CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-midnight text-white px-6 py-3 flex items-center justify-between text-sm">
        <span>
          <span className="text-gold font-semibold">Préapprobation Gratuite</span>
          {" — "}
          <span className="hidden sm:inline">Découvrez combien vous pouvez emprunter en 5 minutes.</span>
        </span>
        <Link
          href="/wizard"
          className="bg-gold text-white px-5 py-2 rounded-lg text-xs font-semibold hover:bg-white hover:text-gold border border-gold transition uppercase tracking-wide"
        >
          Commencer
        </Link>
      </div>
    </>
  );
}
