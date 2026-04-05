"use client";

import Link from "next/link";
import { useState } from "react";

function formatCurrency(n: number) {
  return n.toLocaleString("fr-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
}

export default function CalculateurAbdAtd() {
  const [income, setIncome] = useState("");
  const [mortgagePayment, setMortgagePayment] = useState("");
  const [propertyTax, setPropertyTax] = useState("");
  const [homeInsurance, setHomeInsurance] = useState("");
  const [condoFees, setCondoFees] = useState("");
  const [heatingCosts, setHeatingCosts] = useState("");
  const [carPayment, setCarPayment] = useState("");
  const [creditCards, setCreditCards] = useState("");
  const [studentLoans, setStudentLoans] = useState("");
  const [otherDebts, setOtherDebts] = useState("");

  const [result, setResult] = useState<null | {
    monthlyIncome: number;
    housingCosts: number;
    totalDebts: number;
    abd: number;
    atd: number;
    abdOk: boolean;
    atdOk: boolean;
    maxHousingBudget: number;
    roomLeft: number;
  }>(null);

  function parse(v: string) {
    return parseFloat(v.replace(/\s/g, "")) || 0;
  }

  function calculate() {
    const grossIncome = parse(income);
    if (!grossIncome || grossIncome <= 0) return;

    const monthlyIncome = grossIncome / 12;

    const housingCosts =
      parse(mortgagePayment) +
      parse(propertyTax) +
      parse(homeInsurance) +
      parse(condoFees) +
      parse(heatingCosts);

    const nonHousingDebts =
      parse(carPayment) +
      parse(creditCards) +
      parse(studentLoans) +
      parse(otherDebts);

    const totalDebts = housingCosts + nonHousingDebts;

    const abd = Math.round((housingCosts / monthlyIncome) * 1000) / 10;
    const atd = Math.round((totalDebts / monthlyIncome) * 1000) / 10;

    const maxHousingBudget = Math.round(monthlyIncome * 0.39);
    const roomLeft = maxHousingBudget - housingCosts;

    setResult({
      monthlyIncome: Math.round(monthlyIncome),
      housingCosts: Math.round(housingCosts),
      totalDebts: Math.round(totalDebts),
      abd,
      atd,
      abdOk: abd <= 39,
      atdOk: atd <= 44,
      maxHousingBudget,
      roomLeft: Math.round(roomLeft),
    });
  }

  function RatioBar({ label, value, max, ok }: { label: string; value: number; max: number; ok: boolean }) {
    const pct = Math.min(value / 50 * 100, 100);
    return (
      <div className="mb-4">
        <div className="flex justify-between mb-1">
          <span className="font-semibold text-midnight">{label}</span>
          <span className={`font-extrabold ${ok ? "text-gold" : "text-red-500"}`}>
            {value} % <span className="text-sm font-normal text-gray-400">/ max {max} %</span>
          </span>
        </div>
        <div className="w-full bg-gray-100 rounded-full h-4 relative overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${ok ? "bg-gold" : "bg-red-400"}`}
            style={{ width: `${pct}%` }}
          />
          <div
            className="absolute top-0 h-full w-0.5 bg-gray-400"
            style={{ left: `${max / 50 * 100}%` }}
          />
        </div>
      </div>
    );
  }

  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 font-semibold">
          <Link href="/" className="hover:text-gold transition">Accueil</Link>
          <span>/</span>
          <Link href="/outils/calculateur-abd-atd" className="text-gray-600">Calculateur ABD/ATD</Link>
        </nav>

        <span className="inline-block text-sm bg-gold-light text-gold px-4 py-1.5 rounded-lg uppercase tracking-wider font-semibold mb-4">
          Outil gratuit
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-midnight mb-4">
          Calculateur <span className="text-gold">ABD / ATD</span>
        </h1>
        <p className="text-lg text-gray-500 mb-10">
          V&eacute;rifiez si vos ratios d&rsquo;endettement respectent les limites des banques canadiennes (39 % ABD, 44 % ATD). Outil essentiel avant votre demande hypoth&eacute;caire.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-lg font-bold text-midnight mb-4">Revenu</h2>
          <div className="mb-6">
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

          <h2 className="text-lg font-bold text-midnight mb-4">Frais de logement (pour le calcul ABD)</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="mortgagePayment" className="block text-base font-medium mb-2 text-midnight">Paiement hypoth&eacute;caire ($/mois)</label>
              <input id="mortgagePayment" type="text" inputMode="numeric" value={mortgagePayment}
                onChange={(e) => setMortgagePayment(e.target.value.replace(/[^0-9]/g, ""))} placeholder="1800"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold" />
            </div>
            <div>
              <label htmlFor="propertyTax" className="block text-base font-medium mb-2 text-midnight">Taxes fonci&egrave;res ($/mois)</label>
              <input id="propertyTax" type="text" inputMode="numeric" value={propertyTax}
                onChange={(e) => setPropertyTax(e.target.value.replace(/[^0-9]/g, ""))} placeholder="250"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold" />
            </div>
            <div>
              <label htmlFor="homeInsurance" className="block text-base font-medium mb-2 text-midnight">Assurance habitation ($/mois)</label>
              <input id="homeInsurance" type="text" inputMode="numeric" value={homeInsurance}
                onChange={(e) => setHomeInsurance(e.target.value.replace(/[^0-9]/g, ""))} placeholder="100"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold" />
            </div>
            <div>
              <label htmlFor="heatingCosts" className="block text-base font-medium mb-2 text-midnight">Chauffage ($/mois)</label>
              <input id="heatingCosts" type="text" inputMode="numeric" value={heatingCosts}
                onChange={(e) => setHeatingCosts(e.target.value.replace(/[^0-9]/g, ""))} placeholder="150"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold" />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="condoFees" className="block text-base font-medium mb-2 text-midnight">Frais de condo ($/mois, si applicable)</label>
              <input id="condoFees" type="text" inputMode="numeric" value={condoFees}
                onChange={(e) => setCondoFees(e.target.value.replace(/[^0-9]/g, ""))} placeholder="0"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold" />
              <p className="text-sm text-gray-400 mt-1">Les banques comptent g&eacute;n&eacute;ralement 50 % des frais de condo</p>
            </div>
          </div>

          <h2 className="text-lg font-bold text-midnight mb-4">Autres dettes (pour le calcul ATD)</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="carPayment" className="block text-base font-medium mb-2 text-midnight">Paiement auto ($/mois)</label>
              <input id="carPayment" type="text" inputMode="numeric" value={carPayment}
                onChange={(e) => setCarPayment(e.target.value.replace(/[^0-9]/g, ""))} placeholder="400"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold" />
            </div>
            <div>
              <label htmlFor="creditCards" className="block text-base font-medium mb-2 text-midnight">Cartes de cr&eacute;dit ($/mois)</label>
              <input id="creditCards" type="text" inputMode="numeric" value={creditCards}
                onChange={(e) => setCreditCards(e.target.value.replace(/[^0-9]/g, ""))} placeholder="100"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold" />
              <p className="text-sm text-gray-400 mt-1">3 % du solde ou paiement minimum</p>
            </div>
            <div>
              <label htmlFor="studentLoans" className="block text-base font-medium mb-2 text-midnight">Pr&ecirc;t &eacute;tudiant ($/mois)</label>
              <input id="studentLoans" type="text" inputMode="numeric" value={studentLoans}
                onChange={(e) => setStudentLoans(e.target.value.replace(/[^0-9]/g, ""))} placeholder="200"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold" />
            </div>
            <div>
              <label htmlFor="otherDebts" className="block text-base font-medium mb-2 text-midnight">Autres dettes ($/mois)</label>
              <input id="otherDebts" type="text" inputMode="numeric" value={otherDebts}
                onChange={(e) => setOtherDebts(e.target.value.replace(/[^0-9]/g, ""))} placeholder="0"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold" />
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full bg-gold text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-gold-dark transition uppercase tracking-wider"
          >
            Calculer mes ratios ABD / ATD
          </button>
        </div>

        {result && (
          <div className={`bg-white rounded-2xl p-8 shadow-sm mb-8 border-2 ${result.abdOk && result.atdOk ? "border-gold" : "border-red-400"}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${result.abdOk && result.atdOk ? "bg-gold-light" : "bg-red-50"}`}>
                {result.abdOk && result.atdOk ? (
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v4m0 4h.01" />
                  </svg>
                )}
              </div>
              <h2 className="text-xl font-extrabold text-midnight">
                {result.abdOk && result.atdOk ? "Vos ratios sont conformes" : "Attention : un ou plusieurs ratios d\u00e9passent la limite"}
              </h2>
            </div>

            <RatioBar label="ABD (Amortissement Brut)" value={result.abd} max={39} ok={result.abdOk} />
            <RatioBar label="ATD (Amortissement Total)" value={result.atd} max={44} ok={result.atdOk} />

            <div className="grid grid-cols-2 gap-4 mt-6 mb-6">
              <div className="bg-cream rounded-xl p-4 text-center">
                <p className="text-sm text-gray-500 mb-1">Revenu mensuel brut</p>
                <p className="text-xl font-extrabold text-midnight">{formatCurrency(result.monthlyIncome)}</p>
              </div>
              <div className="bg-cream rounded-xl p-4 text-center">
                <p className="text-sm text-gray-500 mb-1">Frais de logement</p>
                <p className="text-xl font-extrabold text-midnight">{formatCurrency(result.housingCosts)}</p>
              </div>
              <div className="bg-cream rounded-xl p-4 text-center">
                <p className="text-sm text-gray-500 mb-1">Budget logement max (39 %)</p>
                <p className="text-xl font-extrabold text-gold">{formatCurrency(result.maxHousingBudget)}</p>
              </div>
              <div className="bg-cream rounded-xl p-4 text-center">
                <p className="text-sm text-gray-500 mb-1">Marge restante ABD</p>
                <p className={`text-xl font-extrabold ${result.roomLeft >= 0 ? "text-gold" : "text-red-500"}`}>
                  {result.roomLeft >= 0 ? "+" : ""}{formatCurrency(result.roomLeft)}
                </p>
              </div>
            </div>

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
          <h2 className="text-xl font-extrabold text-midnight mb-4">Qu&rsquo;est-ce que l&rsquo;ABD et l&rsquo;ATD ?</h2>
          <p className="text-base text-gray-600 mb-4">
            L&rsquo;<strong>ABD (Amortissement Brut de la Dette)</strong> mesure la part de votre revenu brut consacr&eacute;e aux frais de logement (hypoth&egrave;que, taxes, assurance, chauffage). La limite est de <strong>39 %</strong>.
          </p>
          <p className="text-base text-gray-600 mb-4">
            L&rsquo;<strong>ATD (Amortissement Total de la Dette)</strong> inclut le logement <strong>plus</strong> toutes vos autres dettes (auto, cartes, pr&ecirc;ts). La limite est de <strong>44 %</strong>.
          </p>
          <p className="text-base text-gray-600">
            Ces ratios sont d&eacute;finis par le <a href="https://www.osfi-bsif.gc.ca/fr/consignes/repertoire-consignes/pratiques-procedures-souscription-prets-hypothecaires-residentiels-ligne-directrice-2017" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline font-semibold">BSIF (Bureau du surintendant des institutions financi&egrave;res)</a> et appliqu&eacute;s par toutes les banques canadiennes.
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
              name: "Calculateur ABD/ATD — guide-hypotheque.ca",
              description: "Calculez vos ratios d'endettement ABD et ATD pour vérifier votre admissibilité hypothécaire. Basé sur les normes BSIF canadiennes.",
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
