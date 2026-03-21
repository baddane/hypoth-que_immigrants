"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-white font-bold text-sm">H</span>
            <span className="font-serif text-lg">
              Hypothèque <span className="font-bold">Immigrants</span>
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-8 text-sm">
            <Link href="/wizard" className="text-gray-600 hover:text-gray-900 transition">Wizard</Link>
            <Link href="/comparateur" className="text-gray-600 hover:text-gray-900 transition">Comparateur</Link>
            <Link href="/calculatrice" className="text-gray-600 hover:text-gray-900 transition">Calculatrice</Link>
            <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition">Guides</Link>
            <Link href="/faq" className="text-gray-600 hover:text-gray-900 transition">FAQ</Link>
            <Link href="/about" className="text-gray-600 hover:text-gray-900 transition">À propos</Link>
          </nav>

          <div className="hidden md:block">
            <Link
              href="/wizard"
              className="bg-gold text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-gold-dark transition"
            >
              Bilan gratuit
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 space-y-3">
            <Link href="/wizard" className="block text-gray-700 py-2" onClick={() => setMenuOpen(false)}>Wizard</Link>
            <Link href="/comparateur" className="block text-gray-700 py-2" onClick={() => setMenuOpen(false)}>Comparateur</Link>
            <Link href="/calculatrice" className="block text-gray-700 py-2" onClick={() => setMenuOpen(false)}>Calculatrice</Link>
            <Link href="/blog" className="block text-gray-700 py-2" onClick={() => setMenuOpen(false)}>Guides</Link>
            <Link href="/faq" className="block text-gray-700 py-2" onClick={() => setMenuOpen(false)}>FAQ</Link>
            <Link href="/about" className="block text-gray-700 py-2" onClick={() => setMenuOpen(false)}>À propos</Link>
            <Link
              href="/wizard"
              className="block bg-gold text-white px-5 py-2.5 rounded-full text-sm font-medium text-center mt-3"
              onClick={() => setMenuOpen(false)}
            >
              Bilan gratuit
            </Link>
          </div>
        )}
      </header>

      {/* Sticky bottom bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 text-white px-6 py-3 flex items-center justify-between text-sm">
        <span>
          <span className="text-gold font-medium">Bilan Hypothécaire Gratuit</span>
          {" — "}
          <span className="hidden sm:inline">Découvrez votre capacité d&apos;emprunt en 5 minutes.</span>
        </span>
        <Link
          href="/wizard"
          className="bg-gold text-white px-4 py-2 rounded text-xs font-medium hover:bg-gold-dark transition uppercase tracking-wide"
        >
          Commencer
        </Link>
      </div>
    </>
  );
}
