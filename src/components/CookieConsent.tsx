"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

type ConsentState = {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
};

const COOKIE_KEY = "cookie_consent";
const CONSENT_VERSION = "1"; // Bump to re-ask consent after policy changes

function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(COOKIE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.version !== CONSENT_VERSION) return null;
    return parsed.consent;
  } catch {
    return null;
  }
}

function storeConsent(consent: ConsentState) {
  localStorage.setItem(
    COOKIE_KEY,
    JSON.stringify({ consent, version: CONSENT_VERSION, date: new Date().toISOString() })
  );
}

export function getConsent(): ConsentState {
  return getStoredConsent() ?? { necessary: true, analytics: false, marketing: false };
}

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = getStoredConsent();
    if (!stored) {
      setVisible(true);
    } else {
      setConsent(stored);
    }
  }, []);

  const handleAcceptAll = useCallback(() => {
    const all = { necessary: true, analytics: true, marketing: true };
    setConsent(all);
    storeConsent(all);
    setVisible(false);
  }, []);

  const handleRejectAll = useCallback(() => {
    const minimal = { necessary: true, analytics: false, marketing: false };
    setConsent(minimal);
    storeConsent(minimal);
    setVisible(false);
  }, []);

  const handleSavePreferences = useCallback(() => {
    storeConsent(consent);
    setVisible(false);
  }, [consent]);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Gestion des cookies"
      aria-modal="true"
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
    >
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 md:p-8">
        {/* Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 bg-gold-light rounded-xl flex items-center justify-center flex-shrink-0">
            <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div>
            <h2 className="text-base font-extrabold text-midnight">Protection de vos donn&eacute;es</h2>
            <p className="text-sm text-gray-500 mt-1">
              Conform&eacute;ment au <strong>RGPD</strong> (Europe), &agrave; la <strong>Loi 25</strong> (Qu&eacute;bec) et &agrave; la <strong>PIPEDA</strong> (Canada),
              nous utilisons des cookies pour am&eacute;liorer votre exp&eacute;rience et analyser le trafic.
              Vous pouvez personnaliser vos choix.{" "}
              <Link href="/politique-confidentialite" className="text-gold underline hover:text-gold-dark">
                Politique de confidentialit&eacute;
              </Link>
            </p>
          </div>
        </div>

        {/* Details toggle */}
        {showDetails && (
          <div className="mb-4 space-y-3 bg-cream rounded-xl p-4 text-base">
            {/* Necessary */}
            <label className="flex items-center justify-between">
              <div>
                <span className="font-semibold text-midnight">Cookies essentiels</span>
                <p className="text-sm text-gray-400">N&eacute;cessaires au fonctionnement du site. Toujours actifs.</p>
              </div>
              <input type="checkbox" checked disabled className="accent-gold w-4 h-4" />
            </label>

            {/* Analytics */}
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <span className="font-semibold text-midnight">Cookies analytiques</span>
                <p className="text-sm text-gray-400">Nous aident &agrave; comprendre comment vous utilisez le site (Google Analytics).</p>
              </div>
              <input
                type="checkbox"
                checked={consent.analytics}
                onChange={(e) => setConsent((c) => ({ ...c, analytics: e.target.checked }))}
                className="accent-gold w-4 h-4"
              />
            </label>

            {/* Marketing */}
            <label className="flex items-center justify-between cursor-pointer">
              <div>
                <span className="font-semibold text-midnight">Cookies marketing</span>
                <p className="text-sm text-gray-400">Permettent le suivi publicitaire (Google Ads, Meta Pixel).</p>
              </div>
              <input
                type="checkbox"
                checked={consent.marketing}
                onChange={(e) => setConsent((c) => ({ ...c, marketing: e.target.checked }))}
                className="accent-gold w-4 h-4"
              />
            </label>
          </div>
        )}

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="text-xs text-gold font-semibold hover:underline"
          >
            {showDetails ? "Masquer les d\u00e9tails" : "Personnaliser mes choix"}
          </button>
          <div className="flex gap-2">
            <button
              onClick={handleRejectAll}
              className="px-5 py-2 text-sm font-semibold text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition"
            >
              Refuser tout
            </button>
            {showDetails ? (
              <button
                onClick={handleSavePreferences}
                className="px-5 py-2 text-sm font-semibold text-white bg-gold rounded-lg hover:bg-gold-dark transition"
              >
                Sauvegarder
              </button>
            ) : (
              <button
                onClick={handleAcceptAll}
                className="px-5 py-2 text-sm font-semibold text-white bg-gold rounded-lg hover:bg-gold-dark transition"
              >
                Tout accepter
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
