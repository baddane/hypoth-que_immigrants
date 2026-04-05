"use client";

import Link from "next/link";
import { useState } from "react";

function formatCurrency(n: number) {
  return n.toLocaleString("fr-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
}

export default function CalculateurMontantEmpruntable() {
  const [income, setIncome] = useState("");
  const [debts, setDebts] = useState("");
  const [downpayment, setDownpayment] = useState("");
  const [rate, setRate] = useState("4.5");
  const [amort, setAmort] = useState("25");
  const [result, setResult] = useState<null | {
    qualRate: number;
    maxMortgage: number;
    maxPropertyPrice: number;
    monthlyPayment: number;
    gds: number;
    tds: number;
    cmhcPremium: number;
    totalMortgage: number;
  }>(null);

  function calculate() {
    const grossIncome = parseFloat(income.replace(/\s/g, ""));
    const monthlyDebts = parseFloat(debts.replace(/\s/g, "")) || 0;
    const dp = parseFloat(downpayment.replace(/\s/g, "")) || 0;
    const contractRate = parseFloat(rate);
    const amortYears = parseInt(amort);

    if (!grossIncome || grossIncome <= 0 || !contractRate) return;

    const qualRate = Math.max(contractRate + 2, 5.25);
    const monthlyIncome = grossIncome / 12;
    const fixedHousingCosts = 400; // taxes + heat estimate

    const maxHousingBudget = monthlyIncome * 0.39;
    const maxMortgagePayment = maxHousingBudget - fixedHousingCosts;
    const maxTotalBudget = monthlyIncome * 0.44;
    const maxMortgagePaymentTDS = maxTotalBudget - fixedHousingCosts - monthlyDebts;
    const effectiveMaxPayment = Math.min(maxMortgagePayment, maxMortgagePaymentTDS);

    if (effectiveMaxPayment <= 0) {
      setResult(null);
      return;
    }

    const monthlyQualRate = qualRate / 100 / 12;
    const months = amortYears * 12;
    const maxMortgage = Math.round(
      effectiveMaxPayment * (Math.pow(1 + monthlyQualRate, months) - 1) /
      (monthlyQualRate * Math.pow(1 + monthlyQualRate, months))
    );

    const maxPropertyPrice = maxMortgage + dp;

    // CMHC premium calculation
    let premiumRate = 0;
    if (dp > 0 && maxPropertyPrice > 0) {
      const ltv = maxMortgage / maxPropertyPrice;
      if (ltv > 0.95) premiumRate = 0;
      else if (ltv > 0.90) premiumRate = 0.04;
      else if (ltv > 0.85) premiumRate = 0.031;
      else if (ltv > 0.80) premiumRate = 0.028;
      else premiumRate = 0;
    }
    const cmhcPremium = Math.round(maxMortgage * premiumRate);
    const totalMortgage = maxMortgage + cmhcPremium;

    // Monthly payment at contract rate
    const monthlyContractRate = contractRate / 100 / 12;
    const monthlyPayment = Math.round(
      totalMortgage * (monthlyContractRate * Math.pow(1 + monthlyContractRate, months)) /
      (Math.pow(1 + monthlyContractRate, months) - 1)
    );

    const gds = Math.round(((monthlyPayment + fixedHousingCosts) / monthlyIncome) * 100);
    const tds = Math.round(((monthlyPayment + fixedHousingCosts + monthlyDebts) / monthlyIncome) * 100);

    setResult({ qualRate, maxMortgage, maxPropertyPrice, monthlyPayment, gds, tds, cmhcPremium, totalMortgage });
  }

  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 font-semibold">
          <Link href="/" className="hover:text-gold transition">Accueil</Link>
          <span>/</span>
          <Link href="/outils/calculateur-montant-empruntable" className="text-gray-600">Calculateur Montant Empruntable</Link>
        </nav>

        <span className="inline-block text-sm bg-gold-light text-gold px-4 py-1.5 rounded-lg uppercase tracking-wider font-semibold mb-4">
          Outil gratuit
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-midnight mb-4">
          Combien puis-je <span className="text-gold">emprunter</span> ?
        </h1>
        <p className="text-lg text-gray-500 mb-10">
          Calculez votre capacit&eacute; d&rsquo;emprunt hypoth&eacute;caire en fonction de vos revenus, dettes et mise de fonds. Bas&eacute; sur les r&egrave;gles BSIF et SCHL 2026.
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
              <p className="text-sm text-gray-400 mt-1">Revenu combin&eacute; si couple</p>
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
              <p className="text-sm text-gray-400 mt-1">Auto, cartes, pr&ecirc;ts (&eacute;tudiants inclus)</p>
            </div>
            <div>
              <label htmlFor="downpayment" className="block text-base font-medium mb-2 text-midnight">Mise de fonds ($)</label>
              <input
                id="downpayment"
                type="text"
                inputMode="numeric"
                value={downpayment}
                onChange={(e) => setDownpayment(e.target.value.replace(/[^0-9]/g, ""))}
                placeholder="30000"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold"
              />
              <p className="text-sm text-gray-400 mt-1">&Eacute;pargne disponible pour l&rsquo;achat</p>
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

          <div className="mb-6">
            <label htmlFor="amort" className="block text-base font-medium mb-2 text-midnight">Amortissement</label>
            <select
              id="amort"
              value={amort}
              onChange={(e) => setAmort(e.target.value)}
              className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold"
            >
              <option value="25">25 ans</option>
              <option value="30">30 ans (Premier Chez-Soi)</option>
            </select>
          </div>

          <button
            onClick={calculate}
            className="w-full bg-gold text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-gold-dark transition uppercase tracking-wider"
          >
            Calculer mon montant empruntable
          </button>
        </div>

        {result && (
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8 border-2 border-gold">
            <h2 className="text-xl font-extrabold text-midnight mb-6">Votre capacit&eacute; d&rsquo;emprunt estim&eacute;e</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-gold-light rounded-xl p-4 text-center">
                <p className="text-sm text-gold mb-1">Prix maximum de propri&eacute;t&eacute;</p>
                <p className="text-2xl font-extrabold text-gold">{formatCurrency(result.maxPropertyPrice)}</p>
              </div>
              <div className="bg-gold-light rounded-xl p-4 text-center">
                <p className="text-sm text-gold mb-1">Hypoth&egrave;que maximale</p>
                <p className="text-2xl font-extrabold text-gold">{formatCurrency(result.maxMortgage)}</p>
              </div>
              <div className="bg-cream rounded-xl p-4 text-center">
                <p className="text-sm text-gray-500 mb-1">Paiement mensuel</p>
                <p className="text-2xl font-extrabold text-midnight">{formatCurrency(result.monthlyPayment)}</p>
              </div>
              <div className="bg-cream rounded-xl p-4 text-center">
                <p className="text-sm text-gray-500 mb-1">Prime SCHL</p>
                <p className="text-2xl font-extrabold text-midnight">
                  {result.cmhcPremium > 0 ? formatCurrency(result.cmhcPremium) : "Aucune"}
                </p>
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

            <p className="text-sm text-gray-400 mb-4">Taux de qualification : {result.qualRate.toFixed(2)} % (stress test BSIF)</p>

            <div className="text-center">
              <Link
                href="/wizard"
                className="inline-block bg-gold text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-white hover:text-gold border-2 border-gold transition uppercase tracking-wider"
              >
                Obtenir des offres personnalis&eacute;es
              </Link>
              <p className="text-sm text-gray-400 mt-3">Estimation indicative — consultez un courtier pour un calcul pr&eacute;cis</p>
            </div>
          </div>
        )}

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-extrabold text-midnight mb-4">Comment est calcul&eacute; le montant empruntable ?</h2>
          <p className="text-base text-gray-600 mb-4">
            Les banques canadiennes utilisent deux ratios pour d&eacute;terminer votre capacit&eacute; d&rsquo;emprunt :
          </p>
          <ul className="list-disc pl-6 text-base text-gray-600 space-y-2 mb-4">
            <li><strong>ABD (Amortissement Brut de la Dette)</strong> : vos frais de logement ne doivent pas d&eacute;passer 39 % de votre revenu brut</li>
            <li><strong>ATD (Amortissement Total de la Dette)</strong> : logement + toutes vos dettes ne doivent pas d&eacute;passer 44 %</li>
          </ul>
          <p className="text-base text-gray-600">
            De plus, vous devez passer le <Link href="/outils/simulateur-stress-test" className="text-gold hover:underline font-semibold">stress test</Link> au taux de qualification du BSIF (votre taux + 2 % ou 5,25 %, le plus &eacute;lev&eacute;).
          </p>
        </div>

        <div className="text-center space-x-6">
          <Link href="/outils/simulateur-stress-test" className="text-base text-gold font-semibold hover:underline">
            Simulateur stress test &rarr;
          </Link>
          <Link href="/outils/calculateur-prime-schl" className="text-base text-gold font-semibold hover:underline">
            Calculateur prime SCHL &rarr;
          </Link>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Calculateur Montant Empruntable — guide-hypotheque.ca",
              description: "Calculez combien vous pouvez emprunter pour votre hypothèque. Basé sur les règles BSIF et SCHL 2026 avec stress test intégré.",
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
