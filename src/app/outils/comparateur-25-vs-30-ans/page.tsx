"use client";

import Link from "next/link";
import { useState } from "react";

function formatCurrency(n: number) {
  return n.toLocaleString("fr-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
}

export default function Comparateur25vs30() {
  const [mortgage, setMortgage] = useState("");
  const [rate, setRate] = useState("4.5");
  const [result, setResult] = useState<null | {
    monthly25: number;
    monthly30: number;
    total25: number;
    total30: number;
    interest25: number;
    interest30: number;
    monthlySavings: number;
    extraInterest: number;
  }>(null);

  function calculate() {
    const principal = parseFloat(mortgage.replace(/\s/g, ""));
    const annualRate = parseFloat(rate);

    if (!principal || principal <= 0 || !annualRate || annualRate <= 0) return;

    const monthlyRate = annualRate / 100 / 12;

    // 25 years
    const months25 = 25 * 12;
    const monthly25 = Math.round(
      principal * (monthlyRate * Math.pow(1 + monthlyRate, months25)) /
      (Math.pow(1 + monthlyRate, months25) - 1)
    );
    const total25 = monthly25 * months25;
    const interest25 = total25 - principal;

    // 30 years
    const months30 = 30 * 12;
    const monthly30 = Math.round(
      principal * (monthlyRate * Math.pow(1 + monthlyRate, months30)) /
      (Math.pow(1 + monthlyRate, months30) - 1)
    );
    const total30 = monthly30 * months30;
    const interest30 = total30 - principal;

    setResult({
      monthly25,
      monthly30,
      total25,
      total30,
      interest25,
      interest30,
      monthlySavings: monthly25 - monthly30,
      extraInterest: interest30 - interest25,
    });
  }

  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 font-semibold">
          <Link href="/" className="hover:text-gold transition">Accueil</Link>
          <span>/</span>
          <Link href="/outils/comparateur-25-vs-30-ans" className="text-gray-600">Comparateur 25 vs 30 ans</Link>
        </nav>

        <span className="inline-block text-sm bg-gold-light text-gold px-4 py-1.5 rounded-lg uppercase tracking-wider font-semibold mb-4">
          Outil gratuit
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-midnight mb-4">
          Comparateur <span className="text-gold">25 vs 30 ans</span>
        </h1>
        <p className="text-lg text-gray-500 mb-10">
          Comparez l&rsquo;impact d&rsquo;un amortissement de 25 ou 30 ans sur vos paiements mensuels et le co&ucirc;t total de votre hypoth&egrave;que. Le programme Premier Chez-Soi permet un amortissement de 30 ans pour les premiers acheteurs.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="mortgage" className="block text-base font-medium mb-2 text-midnight">Montant de l&rsquo;hypoth&egrave;que ($)</label>
              <input
                id="mortgage"
                type="text"
                inputMode="numeric"
                value={mortgage}
                onChange={(e) => setMortgage(e.target.value.replace(/[^0-9]/g, ""))}
                placeholder="400000"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="rate" className="block text-base font-medium mb-2 text-midnight">Taux hypoth&eacute;caire (%)</label>
              <input
                id="rate"
                type="text"
                inputMode="decimal"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
                placeholder="4.5"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold"
              />
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full bg-gold text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-gold-dark transition uppercase tracking-wider"
          >
            Comparer 25 vs 30 ans
          </button>
        </div>

        {result && (
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8 border-2 border-gold">
            <h2 className="text-xl font-extrabold text-midnight mb-6">R&eacute;sultats comparatifs</h2>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-base">
                <thead>
                  <tr className="border-b-2 border-gray-200">
                    <th className="text-left py-3 font-semibold text-midnight"></th>
                    <th className="text-center py-3 font-semibold text-midnight">25 ans</th>
                    <th className="text-center py-3 font-semibold text-midnight">30 ans</th>
                    <th className="text-center py-3 font-semibold text-gold">Diff&eacute;rence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 font-medium text-midnight">Paiement mensuel</td>
                    <td className="py-3 text-center font-bold">{formatCurrency(result.monthly25)}</td>
                    <td className="py-3 text-center font-bold">{formatCurrency(result.monthly30)}</td>
                    <td className="py-3 text-center font-bold text-gold">-{formatCurrency(result.monthlySavings)}/mois</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 font-medium text-midnight">Total pay&eacute;</td>
                    <td className="py-3 text-center">{formatCurrency(result.total25)}</td>
                    <td className="py-3 text-center">{formatCurrency(result.total30)}</td>
                    <td className="py-3 text-center text-red-500 font-semibold">+{formatCurrency(result.extraInterest)}</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 font-medium text-midnight">Int&eacute;r&ecirc;ts totaux</td>
                    <td className="py-3 text-center">{formatCurrency(result.interest25)}</td>
                    <td className="py-3 text-center">{formatCurrency(result.interest30)}</td>
                    <td className="py-3 text-center text-red-500 font-semibold">+{formatCurrency(result.extraInterest)}</td>
                  </tr>
                  <tr>
                    <td className="py-3 font-medium text-midnight">% d&rsquo;int&eacute;r&ecirc;t / capital</td>
                    <td className="py-3 text-center">{Math.round(result.interest25 / parseInt(mortgage.replace(/\s/g, "")) * 100)} %</td>
                    <td className="py-3 text-center">{Math.round(result.interest30 / parseInt(mortgage.replace(/\s/g, "")) * 100)} %</td>
                    <td className="py-3 text-center text-red-500 font-semibold">+{Math.round((result.interest30 - result.interest25) / parseInt(mortgage.replace(/\s/g, "")) * 100)} %</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="bg-gold-light rounded-xl p-5">
                <h3 className="font-bold text-midnight mb-2">Avantage 30 ans</h3>
                <p className="text-base text-gray-600">Vous &eacute;conomisez <strong className="text-gold">{formatCurrency(result.monthlySavings)}/mois</strong> en paiements, ce qui am&eacute;liore votre budget mensuel et facilite votre qualification.</p>
              </div>
              <div className="bg-cream rounded-xl p-5">
                <h3 className="font-bold text-midnight mb-2">Avantage 25 ans</h3>
                <p className="text-base text-gray-600">Vous &eacute;conomisez <strong className="text-midnight">{formatCurrency(result.extraInterest)}</strong> en int&eacute;r&ecirc;ts sur la dur&eacute;e totale et vous &ecirc;tes libre plus t&ocirc;t.</p>
              </div>
            </div>

            <div className="text-center">
              <Link
                href="/wizard"
                className="inline-block bg-gold text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-white hover:text-gold border-2 border-gold transition uppercase tracking-wider"
              >
                Obtenir des offres personnalis&eacute;es
              </Link>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-extrabold text-midnight mb-4">25 ou 30 ans : lequel choisir ?</h2>
          <p className="text-base text-gray-600 mb-4">
            Depuis le programme <strong>Premier Chez-Soi</strong> de la SCHL, les premiers acheteurs et les acheteurs de propri&eacute;t&eacute;s neuves peuvent opter pour un amortissement de 30 ans (au lieu du maximum habituel de 25 ans avec assurance SCHL).
          </p>
          <ul className="list-disc pl-6 text-base text-gray-600 space-y-2 mb-4">
            <li><strong>30 ans</strong> : paiements plus bas, meilleure qualification, mais plus d&rsquo;int&eacute;r&ecirc;ts au total</li>
            <li><strong>25 ans</strong> : propri&eacute;taire libre plus vite, moins d&rsquo;int&eacute;r&ecirc;ts, mais paiements plus &eacute;lev&eacute;s</li>
          </ul>
          <p className="text-base text-gray-600">
            Consultez notre <Link href="/outils/calculateur-montant-empruntable" className="text-gold hover:underline font-semibold">calculateur de montant empruntable</Link> pour voir l&rsquo;impact sur votre capacit&eacute; d&rsquo;emprunt.
          </p>
        </div>

        <div className="text-center space-x-6">
          <Link href="/outils/calculateur-montant-empruntable" className="text-base text-gold font-semibold hover:underline">
            Calculateur montant empruntable &rarr;
          </Link>
          <Link href="/outils/simulateur-stress-test" className="text-base text-gold font-semibold hover:underline">
            Simulateur stress test &rarr;
          </Link>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Comparateur Amortissement 25 vs 30 ans — guide-hypotheque.ca",
              description: "Comparez un amortissement hypothécaire de 25 et 30 ans : paiements mensuels, intérêts totaux et coût global. Outil gratuit.",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
            }),
          }}
        />
      </div>
    </section>
  );
}
