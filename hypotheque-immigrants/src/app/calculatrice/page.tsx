"use client";

import { useState } from "react";
import type { Metadata } from "next";

export default function CalculatricePage() {
  const [revenu, setRevenu] = useState(80000);
  const [dettes, setDettes] = useState(500);
  const [apport, setApport] = useState(50000);
  const [taux, setTaux] = useState(5.0);
  const [amortissement, setAmortissement] = useState(25);

  const monthlyIncome = revenu / 12;
  const gdsRatio = 0.32;
  const tdsRatio = 0.40;

  const monthlyRate = taux / 100 / 12;
  const totalMonths = amortissement * 12;
  const factor = (monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1);

  const maxPaymentGDS = monthlyIncome * gdsRatio;
  const maxPaymentTDS = monthlyIncome * tdsRatio - dettes;
  const maxMonthlyPayment = Math.min(maxPaymentGDS, maxPaymentTDS);

  const maxMortgage = Math.max(0, Math.round(maxMonthlyPayment / factor));
  const maxProperty = maxMortgage + apport;

  const actualGDS = maxMonthlyPayment / monthlyIncome;
  const actualTDS = (maxMonthlyPayment + dettes) / monthlyIncome;

  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <p className="uppercase text-xs tracking-[0.3em] text-gold mb-4">Outil Interactif</p>
        <h1 className="font-serif text-3xl md:text-5xl mb-4">
          Calculatrice <em className="text-gold">Hypothèque</em>
        </h1>
        <p className="text-gray-500 mb-12 max-w-xl">
          Calculez votre capacité d&apos;emprunt hypothécaire basée sur les formules bancaires réelles (GDS/TDS).
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Inputs */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <label className="block text-sm font-medium mb-2">Revenu annuel brut</label>
              <div className="relative">
                <input
                  type="number"
                  value={revenu}
                  onChange={(e) => setRevenu(Number(e.target.value))}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">$/an</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <label className="block text-sm font-medium mb-2">Dettes mensuelles (auto, cartes, etc.)</label>
              <div className="relative">
                <input
                  type="number"
                  value={dettes}
                  onChange={(e) => setDettes(Number(e.target.value))}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">$/mois</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <label className="block text-sm font-medium mb-2">Apport initial (mise de fonds)</label>
              <div className="relative">
                <input
                  type="number"
                  value={apport}
                  onChange={(e) => setApport(Number(e.target.value))}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 text-lg focus:outline-none focus:border-gold"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">$</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <label className="block text-sm font-medium mb-2">
                Taux hypothécaire estimé: {taux.toFixed(1)}%
              </label>
              <input
                type="range"
                min={2}
                max={8}
                step={0.1}
                value={taux}
                onChange={(e) => setTaux(Number(e.target.value))}
                className="w-full accent-gold"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>2%</span>
                <span>8%</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <label className="block text-sm font-medium mb-2">
                Amortissement: {amortissement} ans
              </label>
              <input
                type="range"
                min={15}
                max={30}
                step={5}
                value={amortissement}
                onChange={(e) => setAmortissement(Number(e.target.value))}
                className="w-full accent-gold"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-1">
                <span>15 ans</span>
                <span>30 ans</span>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-6">
            <div className="bg-gray-900 text-white rounded-2xl p-8">
              <p className="uppercase text-xs tracking-[0.3em] text-gold mb-6">Résultats</p>

              <div className="space-y-6">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Montant Maximum Empruntable</p>
                  <p className="text-4xl font-serif font-bold text-gold">{maxMortgage.toLocaleString("fr-CA")} $</p>
                </div>

                <div>
                  <p className="text-xs text-gray-400 mb-1">Valeur Maximale de la Propriété</p>
                  <p className="text-2xl font-serif font-bold">{maxProperty.toLocaleString("fr-CA")} $</p>
                </div>

                <div className="border-t border-gray-800 pt-4">
                  <p className="text-xs text-gray-400 mb-1">Paiement Mensuel Estimé</p>
                  <p className="text-2xl font-serif font-bold">{Math.round(maxMonthlyPayment).toLocaleString("fr-CA")} $/mois</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <p className="text-sm font-medium mb-4">Ratios d&apos;endettement</p>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>GDS (Gross Debt Service)</span>
                    <span className={actualGDS <= 0.32 ? "text-green-600" : "text-red-500"}>
                      {(actualGDS * 100).toFixed(1)}% / 32%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${actualGDS <= 0.32 ? "bg-green-500" : "bg-red-500"}`}
                      style={{ width: `${Math.min(actualGDS / 0.32 * 100, 100)}%` }}
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span>TDS (Total Debt Service)</span>
                    <span className={actualTDS <= 0.40 ? "text-green-600" : "text-red-500"}>
                      {(actualTDS * 100).toFixed(1)}% / 40%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${actualTDS <= 0.40 ? "bg-green-500" : "bg-red-500"}`}
                      style={{ width: `${Math.min(actualTDS / 0.40 * 100, 100)}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gold-light rounded-xl p-6 text-sm text-gray-600">
              <p className="font-medium mb-2">Note importante</p>
              <p>Ces résultats sont des estimations basées sur les formules standard. Votre capacité réelle peut varier selon votre statut d&apos;immigration, historique de crédit et la banque choisie.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
