"use client";

import Link from "next/link";
import { useState } from "react";

const premiumRates = [
  { minDown: 5, maxDown: 9.99, rate: 4.0 },
  { minDown: 10, maxDown: 14.99, rate: 3.1 },
  { minDown: 15, maxDown: 19.99, rate: 2.8 },
];

function formatCurrency(n: number) {
  return n.toLocaleString("fr-CA", { style: "currency", currency: "CAD", maximumFractionDigits: 0 });
}

export default function CalculateurPrimeSCHL() {
  const [price, setPrice] = useState("");
  const [downPercent, setDownPercent] = useState("5");
  const [result, setResult] = useState<null | {
    downPayment: number;
    mortgage: number;
    premiumRate: number;
    premiumAmount: number;
    totalMortgage: number;
    monthlyCost: number;
  }>(null);

  function calculate() {
    const p = parseFloat(price.replace(/\s/g, ""));
    const dp = parseFloat(downPercent);
    if (!p || !dp || p <= 0 || dp < 5 || dp >= 20) {
      setResult(null);
      return;
    }

    const downPayment = Math.round(p * dp / 100);
    const mortgage = p - downPayment;
    const tier = premiumRates.find((t) => dp >= t.minDown && dp <= t.maxDown);
    const premiumRate = tier?.rate ?? 0;
    const premiumAmount = Math.round(mortgage * premiumRate / 100);
    const totalMortgage = mortgage + premiumAmount;
    // Rough monthly estimate at 5% over 25 years
    const monthlyRate = 0.05 / 12;
    const months = 25 * 12;
    const monthlyCost = Math.round(totalMortgage * (monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1));

    setResult({ downPayment, mortgage, premiumRate, premiumAmount, totalMortgage, monthlyCost });
  }

  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 font-semibold">
          <Link href="/" className="hover:text-gold transition">Accueil</Link>
          <span>/</span>
          <Link href="/outils/calculateur-prime-schl" className="text-gray-600">Calculateur Prime SCHL</Link>
        </nav>

        <span className="inline-block text-sm bg-gold-light text-gold px-4 py-1.5 rounded-lg uppercase tracking-wider font-semibold mb-4">
          Outil gratuit
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-midnight mb-4">
          Calculateur de prime <span className="text-gold">SCHL</span>
        </h1>
        <p className="text-lg text-gray-500 mb-10">
          Estimez le coût de votre assurance hypothécaire SCHL en quelques secondes. Basé sur les taux officiels 2026.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label htmlFor="price" className="block text-base font-medium mb-2 text-midnight">Prix de la propriété ($)</label>
              <input
                id="price"
                type="text"
                inputMode="numeric"
                value={price}
                onChange={(e) => setPrice(e.target.value.replace(/[^0-9]/g, ""))}
                placeholder="400000"
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold"
              />
            </div>
            <div>
              <label htmlFor="down" className="block text-base font-medium mb-2 text-midnight">Mise de fonds (%)</label>
              <select
                id="down"
                value={downPercent}
                onChange={(e) => setDownPercent(e.target.value)}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold"
              >
                <option value="5">5 % — Prime 4,00 %</option>
                <option value="10">10 % — Prime 3,10 %</option>
                <option value="15">15 % — Prime 2,80 %</option>
              </select>
            </div>
          </div>

          <button
            onClick={calculate}
            className="w-full bg-gold text-white py-3.5 rounded-xl font-semibold text-lg hover:bg-gold-dark transition uppercase tracking-wider"
          >
            Calculer ma prime SCHL
          </button>
        </div>

        {result && (
          <div className="bg-white rounded-2xl p-8 shadow-sm mb-8 border-2 border-gold">
            <h2 className="text-xl font-extrabold text-midnight mb-6">Résultat de votre calcul</h2>
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="bg-cream rounded-xl p-4 text-center">
                <p className="text-sm text-gray-500 mb-1">Mise de fonds</p>
                <p className="text-2xl font-extrabold text-midnight">{formatCurrency(result.downPayment)}</p>
              </div>
              <div className="bg-cream rounded-xl p-4 text-center">
                <p className="text-sm text-gray-500 mb-1">Hypothèque (avant prime)</p>
                <p className="text-2xl font-extrabold text-midnight">{formatCurrency(result.mortgage)}</p>
              </div>
              <div className="bg-gold-light rounded-xl p-4 text-center">
                <p className="text-sm text-gold mb-1">Prime SCHL ({result.premiumRate} %)</p>
                <p className="text-2xl font-extrabold text-gold">{formatCurrency(result.premiumAmount)}</p>
              </div>
              <div className="bg-midnight rounded-xl p-4 text-center">
                <p className="text-sm text-gray-400 mb-1">Hypothèque totale</p>
                <p className="text-2xl font-extrabold text-white">{formatCurrency(result.totalMortgage)}</p>
              </div>
            </div>
            <div className="bg-cream rounded-xl p-4 text-center mb-6">
              <p className="text-sm text-gray-500 mb-1">Paiement mensuel estimé (taux 5 %, 25 ans)</p>
              <p className="text-3xl font-extrabold text-gold">{formatCurrency(result.monthlyCost)} / mois</p>
            </div>
            <div className="text-center">
              <Link
                href="/wizard"
                className="inline-block bg-gold text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-white hover:text-gold border-2 border-gold transition uppercase tracking-wider"
              >
                Obtenir ma préapprobation gratuite
              </Link>
              <p className="text-sm text-gray-400 mt-3">Résultat indicatif — un courtier vous donnera le calcul exact</p>
            </div>
          </div>
        )}

        {/* Info section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-extrabold text-midnight mb-4">Comment fonctionne la prime SCHL ?</h2>
          <p className="text-base text-gray-600 mb-4">
            L&apos;assurance SCHL (CMHC) est obligatoire quand votre mise de fonds est inférieure à 20 %. Elle protège le prêteur en cas de défaut de paiement. Le coût est ajouté à votre hypothèque et réparti sur vos paiements mensuels.
          </p>
          <table className="w-full text-base mb-4">
            <thead>
              <tr>
                <th className="text-left py-2 px-3 bg-cream font-semibold text-midnight">Mise de fonds</th>
                <th className="text-left py-2 px-3 bg-cream font-semibold text-midnight">Taux de prime</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="py-2 px-3 border-b border-gray-100">5 % à 9,99 %</td><td className="py-2 px-3 border-b border-gray-100">4,00 %</td></tr>
              <tr><td className="py-2 px-3 border-b border-gray-100">10 % à 14,99 %</td><td className="py-2 px-3 border-b border-gray-100">3,10 %</td></tr>
              <tr><td className="py-2 px-3">15 % à 19,99 %</td><td className="py-2 px-3">2,80 %</td></tr>
            </tbody>
          </table>
          <p className="text-base text-gray-600">
            Pour en savoir plus, lisez notre{" "}
            <Link href="/blog/assurance-hypothecaire-schl-primes-guide-2026" className="text-gold hover:underline font-semibold">
              guide complet de l&apos;assurance SCHL
            </Link>.
          </p>
        </div>

        {/* FAQ section */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="text-xl font-extrabold text-midnight mb-6">Questions fréquentes sur la prime SCHL</h2>
          <div className="space-y-5">
            <div>
              <h3 className="font-semibold text-midnight mb-1">Quand la prime SCHL est-elle obligatoire&nbsp;?</h3>
              <p className="text-base text-gray-600">Dès que votre mise de fonds est inférieure à 20&nbsp;% du prix d&apos;achat, l&apos;assurance SCHL (CMHC) ou un assureur privé (Sagen, Canada Guaranty) est obligatoire. Sans elle, aucune banque canadienne ne vous prêtera.</p>
            </div>
            <div>
              <h3 className="font-semibold text-midnight mb-1">Comment est calculée la prime SCHL&nbsp;?</h3>
              <p className="text-base text-gray-600">La prime est un pourcentage du montant emprunté (prix – mise de fonds). Plus votre mise de fonds est petite, plus le taux est élevé&nbsp;: 4,00&nbsp;% à 5&nbsp;% de mise de fonds, 3,10&nbsp;% à 10&nbsp;%, 2,80&nbsp;% à 15&nbsp;%.</p>
            </div>
            <div>
              <h3 className="font-semibold text-midnight mb-1">Peut-on payer la prime SCHL comptant&nbsp;?</h3>
              <p className="text-base text-gray-600">Oui, mais la majorité des acheteurs l&apos;ajoutent au prêt hypothécaire. Elle est alors répartie sur toute la durée d&apos;amortissement (25 ou 30 ans), ce qui augmente légèrement vos paiements mensuels.</p>
            </div>
            <div>
              <h3 className="font-semibold text-midnight mb-1">La prime SCHL est-elle taxable&nbsp;?</h3>
              <p className="text-base text-gray-600">Au Québec, la prime est assujettie à la taxe de vente (TVQ 9,975&nbsp;%), payable comptant à la signature. Dans les autres provinces, la taxe varie selon la juridiction.</p>
            </div>
            <div>
              <h3 className="font-semibold text-midnight mb-1">Quelles sont les primes SCHL en 2026&nbsp;?</h3>
              <p className="text-base text-gray-600">Les taux officiels SCHL 2026 sont&nbsp;: 4,00&nbsp;% (mise de fonds 5-9,99&nbsp;%), 3,10&nbsp;% (10-14,99&nbsp;%), 2,80&nbsp;% (15-19,99&nbsp;%). Une surcharge de 0,20&nbsp;% s&apos;applique pour un amortissement de 30 ans.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link href="/blog" className="text-base text-gold font-semibold hover:underline">
            Voir tous nos guides &rarr;
          </Link>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Calculateur de prime SCHL — guide-hypotheque.ca",
              description: "Calculez le coût de votre assurance hypothécaire SCHL selon votre mise de fonds. Outil gratuit basé sur les taux officiels 2026.",
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
                  name: "Quand la prime SCHL est-elle obligatoire ?",
                  acceptedAnswer: { "@type": "Answer", text: "Dès que votre mise de fonds est inférieure à 20 % du prix d'achat, l'assurance SCHL (CMHC) ou un assureur privé (Sagen, Canada Guaranty) est obligatoire." },
                },
                {
                  "@type": "Question",
                  name: "Comment est calculée la prime SCHL ?",
                  acceptedAnswer: { "@type": "Answer", text: "La prime est un pourcentage du montant emprunté. Plus votre mise de fonds est petite, plus le taux est élevé : 4,00 % à 5 % de mise de fonds, 3,10 % à 10 %, 2,80 % à 15 %." },
                },
                {
                  "@type": "Question",
                  name: "Peut-on payer la prime SCHL comptant ?",
                  acceptedAnswer: { "@type": "Answer", text: "Oui, mais la majorité des acheteurs l'ajoutent au prêt hypothécaire. Elle est alors répartie sur la durée d'amortissement." },
                },
                {
                  "@type": "Question",
                  name: "La prime SCHL est-elle taxable ?",
                  acceptedAnswer: { "@type": "Answer", text: "Au Québec, la prime est assujettie à la TVQ 9,975 %, payable comptant à la signature." },
                },
                {
                  "@type": "Question",
                  name: "Quelles sont les primes SCHL en 2026 ?",
                  acceptedAnswer: { "@type": "Answer", text: "Les taux officiels SCHL 2026 sont : 4,00 % (mise de fonds 5-9,99 %), 3,10 % (10-14,99 %), 2,80 % (15-19,99 %). Surcharge 0,20 % pour 30 ans d'amortissement." },
                },
              ],
            }),
          }}
        />
      </div>
    </section>
  );
}
