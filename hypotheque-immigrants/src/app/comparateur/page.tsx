"use client";

import { useState } from "react";
import Link from "next/link";
import { banks } from "@/data/banks";

export default function ComparateurPage() {
  const [filterCredit, setFilterCredit] = useState("all");
  const [filterTemporary, setFilterTemporary] = useState("all");

  const filteredBanks = banks.filter((bank) => {
    if (filterCredit === "no" && !bank.acceptsNoCreditHistory) return false;
    if (filterTemporary === "temporary" && !bank.acceptsTemporary) return false;
    return true;
  });

  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <p className="uppercase text-xs tracking-[0.3em] text-gold mb-4">Outil Comparatif</p>
        <h1 className="font-serif text-3xl md:text-5xl mb-4">
          Comparateur <em className="text-gold">Banques</em>
        </h1>
        <p className="text-gray-500 mb-10 max-w-xl">
          Comparez les meilleures banques canadiennes pour votre hypothèque d&apos;immigrant. Filtrez selon votre profil.
        </p>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-10">
          <select
            value={filterCredit}
            onChange={(e) => setFilterCredit(e.target.value)}
            className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
          >
            <option value="all">Tous les profils crédit</option>
            <option value="no">Sans historique crédit</option>
          </select>
          <select
            value={filterTemporary}
            onChange={(e) => setFilterTemporary(e.target.value)}
            className="bg-white border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-gold"
          >
            <option value="all">Tous les statuts</option>
            <option value="temporary">Travailleur temporaire</option>
          </select>
        </div>

        {/* Table for desktop */}
        <div className="hidden md:block bg-white rounded-2xl shadow-sm overflow-hidden mb-10">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-900 text-white text-xs uppercase tracking-wider">
                <th className="px-6 py-4 text-left">Banque</th>
                <th className="px-6 py-4 text-left">Taux Min</th>
                <th className="px-6 py-4 text-left">Documents</th>
                <th className="px-6 py-4 text-left">Délai</th>
                <th className="px-6 py-4 text-left">Immigrant-Friendly</th>
                <th className="px-6 py-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredBanks.map((bank, i) => (
                <tr key={bank.shortName} className={i % 2 === 0 ? "bg-white" : "bg-cream"}>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center font-serif font-bold text-gold text-sm">
                        {bank.shortName.slice(0, 2)}
                      </span>
                      <div>
                        <div className="font-medium text-sm">{bank.name}</div>
                        <div className="flex gap-1 mt-1">
                          {bank.specialites.slice(0, 2).map((s) => (
                            <span key={s} className="text-[10px] bg-gold/10 text-gold px-1.5 py-0.5 rounded">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 font-medium text-sm">{bank.tauxMin}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{bank.documents}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{bank.delai}</td>
                  <td className="px-6 py-4">
                    <div className="flex gap-0.5 text-gold">
                      {Array.from({ length: 5 }, (_, j) => (
                        <span key={j} className={j < bank.rating ? "opacity-100" : "opacity-20"}>&#9733;</span>
                      ))}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <Link
                      href="/wizard"
                      className="text-xs bg-gold text-white px-4 py-2 rounded-full hover:bg-gold-dark transition"
                    >
                      Demander Devis
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Cards for mobile */}
        <div className="md:hidden space-y-4 mb-10">
          {filteredBanks.map((bank) => (
            <div key={bank.shortName} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center font-serif font-bold text-gold">
                  {bank.shortName.slice(0, 2)}
                </span>
                <div>
                  <div className="font-medium">{bank.name}</div>
                  <div className="flex gap-0.5 text-gold text-sm">
                    {Array.from({ length: 5 }, (_, j) => (
                      <span key={j} className={j < bank.rating ? "opacity-100" : "opacity-20"}>&#9733;</span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 text-sm mb-4">
                <div>
                  <p className="text-xs text-gray-400">Taux</p>
                  <p className="font-medium">{bank.tauxMin}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Délai</p>
                  <p className="font-medium">{bank.delai}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400">Docs</p>
                  <p className="font-medium">{bank.documents}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1 mb-4">
                {bank.specialites.map((s) => (
                  <span key={s} className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full">{s}</span>
                ))}
              </div>
              <Link
                href="/wizard"
                className="block text-center bg-gold text-white py-2.5 rounded-lg text-sm font-medium hover:bg-gold-dark transition"
              >
                Demander Devis
              </Link>
            </div>
          ))}
        </div>

        {filteredBanks.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p>Aucune banque ne correspond à vos critères.</p>
          </div>
        )}
      </div>
    </section>
  );
}
