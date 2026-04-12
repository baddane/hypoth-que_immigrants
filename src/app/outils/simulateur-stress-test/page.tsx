"use client";

import Link from "next/link";
import { useState } from "react";

function formatCurrency(n: number) {
  return n.toLocaleString("fr-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
}

export default function SimulateurStressTest() {
  const [income, setIncome] = useState("");
  const [debts, setDebts] = useState("");
  const [rate, setRate] = useState("4.5");
  const [amort, setAmort] = useState("25");
  const [result, setResult] = useState<null | {
    qualRate: number;
    maxMortgage: number;
    maxMortgageActual: number;
    monthlyPayment: number;
    gds: number;
    tds: number;
    passed: boolean;
  }>(null);

  function calculate() {
    const grossIncome = parseFloat(income.replace(/\s/g, ""));
    const monthlyDebts = parseFloat(debts.replace(/\s/g, "")) || 0;
    const contractRate = parseFloat(rate);
    const amortYears = parseInt(amort);

    if (!grossIncome || grossIncome <= 0 || !contractRate) {
      setResult(null);
      return;
    }

    const qualRate = Math.max(contractRate + 2, 5.25);
    const monthlyIncome = grossIncome / 12;

    // Estimate property tax + heat = ~400$/month for a typical home
    const fixedHousingCosts = 400;

    // Max monthly payment at qual rate (GDS <= 39%)
    const maxHousingBudget = monthlyIncome * 0.39;
    const maxMortgagePayment = maxHousingBudget - fixedHousingCosts;

    // Also check TDS (housing + debts <= 44%)
    const maxTotalBudget = monthlyIncome * 0.44;
    const maxMortgagePaymentTDS = maxTotalBudget - fixedHousingCosts - monthlyDebts;

    const effectiveMaxPayment = Math.min(maxMortgagePayment, maxMortgagePaymentTDS);

    if (effectiveMaxPayment <= 0) {
      setResult({
        qualRate,
        maxMortgage: 0,
        maxMortgageActual: 0,
        monthlyPayment: 0,
        gds: 0,
        tds: 0,
        passed: false,
      });
      return;
    }

    // Calculate max mortgage from payment at qual rate
    const monthlyQualRate = qualRate / 100 / 12;
    const months = amortYears * 12;
    const maxMortgage = Math.round(
      effectiveMaxPayment * (Math.pow(1 + monthlyQualRate, months) - 1) /
      (monthlyQualRate * Math.pow(1 + monthlyQualRate, months))
    );

    // Calculate actual payment at contract rate
    const monthlyContractRate = contractRate / 100 / 12;
    const monthlyPayment = Math.round(
      maxMortgage * (monthlyContractRate * Math.pow(1 + monthlyContractRate, months)) /
      (Math.pow(1 + monthlyContractRate, months) - 1)
    );

    // Calculate ratios
    const gds = Math.round(((monthlyPayment + fixedHousingCosts) / monthlyIncome) * 100);
    const tds = Math.round(((monthlyPayment + fixedHousingCosts + monthlyDebts) / monthlyIncome) * 100);

    setResult({
      qualRate,
      maxMortgage,
      maxMortgageActual: maxMortgage,
      monthlyPayment,
      gds,
      tds,
      passed: gds <= 39 && tds <= 44,
    });
  }

  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 font-semibold">
          <Link href="/" className="hover:text-gold transition">Accueil</Link>
          <span>/</span>
          <Link href="/outils/simulateur-stress-test" className="text-gray-600">Simulateur Stress Test</Link>
        </nav>

        <span className="inline-block text-sm bg-gold-light text-gold px-4 py-1.5 rounded-lg uppercase tracking-wider font-semibold mb-4">
          Outil gratuit
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-midnight mb-4">
          Simulateur <span className="text-gold">stress test</span> hypothécaire
        </h1>
        <p className="text-lg text-gray-500 mb-10">
          Découvrez combien vous pouvez emprunter après le test de résistance obligatoire du BSIF. Basé sur les règles 2026.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="income" className="block text-base font-medium mb-2 text-midnight">Revenu brut annuel ($)</label>
              <input
                id="income"
                type="text"
                inputMode="numeric"
                value={income}
                onChange={(e) => setIncome(e.target.value.replace(/[^0-9]/g, ""))}
                placeholder="80000"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold"
              />
              <p className="text-sm text-gray-400 mt-1">Revenu combiné si couple</p>
            </div>
            <div>
              <label htmlFor="debts" className="block text-base font-medium mb-2 text-midnight">Dettes mensuelles ($)</label>
              <input
                id="debts"
                type="text"
                inputMode="numeric"
                value={debts}
                onChange={(e) => setDebts(e.target.value.replace(/[^0-9]/g, ""))}
                placeholder="500"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold"
              />
              <p className="text-sm text-gray-400 mt-1">Auto, cartes, prêts (paiements mensuels)</p>
            </div>
            <div>
              <label htmlFor="rate" className="block text-base font-medium mb-2 text-midnight">Taux hypothécaire (%)</label>
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
            <div>
              <label htmlFor="amort" className="block text-base font-medium mb-2 text-midnight">Amortissement</label>
              <select
                id="amort"
                value={amort}
                onChange={(e) => setAmort(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold"
              >
                <option value="25">25 ans</option>
                <option value="30">30 ans (1er achat)</option>
              </select>
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full bg-gold text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-gold-dark transition uppercase tracking-wider"
          >
            Simuler le stress test
          </button>
        </div>

        {result && (
          <div className={`bg-white rounded-2xl p-8 shadow-sm mb-8 border-2 ${result.passed ? "border-gold" : "border-red-400"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${result.passed ? "bg-gold-light" : "bg-red-50"}`}>
                {result.passed ? (
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
              <div>
                <h2 className="text-xl font-extrabold text-midnight">
                  {result.maxMortgage > 0 ? "Votre capacité d'emprunt estimée" : "Capacité insuffisante"}
                </h2>
                <p className="text-sm text-gray-500">Taux de qualification : {result.qualRate.toFixed(2)} %</p>
              </div>
            </div>

            {result.maxMortgage > 0 ? (
              <>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gold-light rounded-xl p-4 text-center">
                    <p className="text-sm text-gold mb-1">Hypothèque maximale</p>
                    <p className="text-2xl font-extrabold text-gold">{formatCurrency(result.maxMortgage)}</p>
                  </div>
                  <div className="bg-cream rounded-xl p-4 text-center">
                    <p className="text-sm text-gray-500 mb-1">Paiement mensuel réel</p>
                    <p className="text-2xl font-extrabold text-midnight">{formatCurrency(result.monthlyPayment)}</p>
                  </div>
                  <div className="bg-cream rounded-xl p-4 text-center">
                    <p className="text-sm text-gray-500 mb-1">Ratio ABD</p>
                    <p className="text-2xl font-extrabold text-midnight">{result.gds} % <span className="text-sm font-normal text-gray-400">/ max 39 %</span></p>
                  </div>
                  <div className="bg-cream rounded-xl p-4 text-center">
                    <p className="text-sm text-gray-500 mb-1">Ratio ATD</p>
                    <p className="text-2xl font-extrabold text-midnight">{result.tds} % <span className="text-sm font-normal text-gray-400">/ max 44 %</span></p>
                  </div>
                </div>
                <div className="text-center">
                  <Link
                    href="/wizard"
                    className="inline-block bg-gold text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-white hover:text-gold border-2 border-gold transition uppercase tracking-wider"
                  >
                    Obtenir des offres personnalisées
                  </Link>
                  <p className="text-sm text-gray-400 mt-3">Estimation indicative — consultez un courtier pour un calcul précis</p>
                </div>
              </>
            ) : (
              <div className="text-center">
                <p className="text-base text-gray-600 mb-4">Vos dettes mensuelles sont trop élevées par rapport à votre revenu. Réduisez vos dettes ou augmentez votre revenu pour améliorer votre qualification.</p>
                <Link
                  href="/blog/stress-test-hypothecaire-canada-immigrant-guide"
                  className="text-gold font-semibold hover:underline"
                >
                  Lire nos stratégies pour réussir le stress test &rarr;
                </Link>
              </div>
            )}
          </div>
        )}

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-extrabold text-midnight mb-4">Comment fonctionne le stress test ?</h2>
          <p className="text-base text-gray-600 mb-4">
            Depuis 2018, toutes les banques canadiennes doivent qualifier les emprunteurs à un taux supérieur au taux contractuel. Le taux de qualification est le plus élevé entre votre taux + 2 % et le taux plancher du BSIF.
          </p>
          <p className="text-base text-gray-600">
            En savoir plus :{" "}
            <Link href="/blog/stress-test-hypothecaire-canada-immigrant-guide" className="text-gold hover:underline font-semibold">
              Guide complet du stress test pour immigrants
            </Link>.
          </p>
        </div>

        {/* FAQ section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-extrabold text-midnight mb-6">Questions fréquentes sur le stress test hypothécaire</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-midnight mb-1">Qu&apos;est-ce que le test de résistance hypothécaire&nbsp;?</h3>
              <p className="text-base text-gray-600">Le stress test (ou test de résistance) est une règle du BSIF imposant aux banques canadiennes de qualifier l&apos;emprunteur à un taux supérieur au taux contractuel, afin de vérifier qu&apos;il pourrait absorber une hausse des taux.</p>
            </div>
            <div>
              <h3 className="font-semibold text-midnight mb-1">Quel est le taux du stress test en 2026&nbsp;?</h3>
              <p className="text-base text-gray-600">Le taux de qualification est le plus élevé entre&nbsp;: (1) votre taux contractuel + 2&nbsp;%, ou (2) le taux plancher du BSIF fixé à 5,25&nbsp;%. Exemple&nbsp;: taux négocié à 4,5&nbsp;% → qualification à 6,5&nbsp;%.</p>
            </div>
            <div>
              <h3 className="font-semibold text-midnight mb-1">Le stress test s&apos;applique-t-il aux immigrants&nbsp;?</h3>
              <p className="text-base text-gray-600">Oui, tous les emprunteurs — citoyens, résidents permanents, travailleurs temporaires, étudiants — doivent passer le test de résistance, qu&apos;ils achètent avec ou sans assurance SCHL.</p>
            </div>
            <div>
              <h3 className="font-semibold text-midnight mb-1">Comment réussir le stress test hypothécaire&nbsp;?</h3>
              <p className="text-base text-gray-600">Trois leviers&nbsp;: augmenter votre mise de fonds pour réduire le montant emprunté, réduire vos dettes mensuelles (auto, cartes), ou augmenter votre revenu déclaré. Les ratios ABD doivent rester sous 39&nbsp;% et ATD sous 44&nbsp;%.</p>
            </div>
            <div>
              <h3 className="font-semibold text-midnight mb-1">Peut-on éviter le stress test&nbsp;?</h3>
              <p className="text-base text-gray-600">Non pour une banque à charte fédérale. Certains prêteurs alternatifs (coopératives provinciales, prêteurs B) ne sont pas soumis au stress test BSIF mais exigent des taux et conditions moins avantageux.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/outils/calculateur-prime-schl" className="text-base text-gold font-semibold hover:underline">
            Calculateur de prime SCHL &rarr;
          </Link>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Simulateur Stress Test Hypothécaire — guide-hypotheque.ca",
              description: "Simulez le test de résistance hypothécaire canadien et découvrez votre capacité d'emprunt maximale. Outil gratuit basé sur les règles BSIF 2026.",
              applicationCategory: "FinanceApplication",
              operatingSystem: "Web",
              offers: { "@type": "Offer", price: "0", priceCurrency: "CAD" },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "Qu'est-ce que le test de résistance hypothécaire ?",
                  acceptedAnswer: { "@type": "Answer", text: "Le stress test est une règle du BSIF imposant aux banques canadiennes de qualifier l'emprunteur à un taux supérieur au taux contractuel, afin de vérifier qu'il pourrait absorber une hausse des taux." },
                },
                {
                  "@type": "Question",
                  name: "Quel est le taux du stress test en 2026 ?",
                  acceptedAnswer: { "@type": "Answer", text: "Le taux de qualification est le plus élevé entre votre taux contractuel + 2 % ou le taux plancher BSIF de 5,25 %." },
                },
                {
                  "@type": "Question",
                  name: "Le stress test s'applique-t-il aux immigrants ?",
                  acceptedAnswer: { "@type": "Answer", text: "Oui, tous les emprunteurs — citoyens, résidents permanents, travailleurs temporaires, étudiants — doivent passer le test de résistance." },
                },
                {
                  "@type": "Question",
                  name: "Comment réussir le stress test hypothécaire ?",
                  acceptedAnswer: { "@type": "Answer", text: "Augmenter la mise de fonds, réduire les dettes mensuelles ou augmenter le revenu. Les ratios ABD doivent rester sous 39 % et ATD sous 44 %." },
                },
                {
                  "@type": "Question",
                  name: "Peut-on éviter le stress test ?",
                  acceptedAnswer: { "@type": "Answer", text: "Non pour une banque à charte fédérale. Certains prêteurs alternatifs ne sont pas soumis au stress test BSIF mais offrent des conditions moins avantageuses." },
                },
              ],
            }),
          }}
        />
      </div>
    </section>
  );
}
