"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { banks } from "@/data/banks";

function ResultsContent() {
  const searchParams = useSearchParams();
  const statut = searchParams.get("statut") || "";
  const revenu = Number(searchParams.get("revenu")) || 80000;
  const credit = searchParams.get("credit") || "";
  const apport = searchParams.get("apport") || "";
  const province = searchParams.get("province") || "";
  const emploi = searchParams.get("emploi") || "";

  // Calculate borrowing capacity (simplified GDS/TDS)
  const monthlyIncome = revenu / 12;
  const gdsRatio = 0.32;
  const maxMonthlyPayment = monthlyIncome * gdsRatio;
  const estimatedRate = 0.05;
  const amortizationMonths = 300; // 25 years
  const factor = (estimatedRate / 12 * Math.pow(1 + estimatedRate / 12, amortizationMonths)) / (Math.pow(1 + estimatedRate / 12, amortizationMonths) - 1);
  const maxMortgage = Math.round(maxMonthlyPayment / factor);

  // Determine apport multiplier
  let apportPercent = 0.05;
  if (apport.includes("20")) apportPercent = 0.20;
  else if (apport.includes("10")) apportPercent = 0.10;
  else if (apport.includes("5")) apportPercent = 0.05;
  const maxPropertyValue = Math.round(maxMortgage / (1 - apportPercent));

  // Filter banks based on profile
  const isTemporary = statut.includes("Temporaire") || statut.includes("International");
  const hasNoCredit = credit.includes("Non");

  const recommendedBanks = banks.filter((bank) => {
    if (isTemporary && !bank.acceptsTemporary) return false;
    if (hasNoCredit && !bank.acceptsNoCreditHistory) return false;
    return true;
  });

  // Warnings
  const warnings: string[] = [];
  if (hasNoCredit) warnings.push("Sans historique de crédit canadien, certaines banques exigeront un apport plus élevé.");
  if (isTemporary) warnings.push("Avec un statut temporaire, assurez-vous que votre permis est valide pour au moins 12 mois.");
  if (apport.includes("Aucun")) warnings.push("Un apport de 0% est très difficile à obtenir. Visez au minimum 5%.");
  if (emploi.includes("Sans emploi")) warnings.push("Sans emploi, l'obtention d'une hypothèque sera très difficile. Trouvez un emploi stable d'abord.");
  if (credit.includes("faible")) warnings.push("Un crédit faible limitera vos options. Travaillez à améliorer votre score avant de demander.");

  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <p className="uppercase text-xs tracking-[0.3em] text-gold mb-4">Résultats Personnalisés</p>
        <h1 className="font-serif text-3xl md:text-4xl mb-10">
          Votre Capacité d&apos;Emprunt <em className="text-gold">Estimée</em>
        </h1>

        {/* Capacity Card */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Hypothèque Maximale</p>
              <p className="text-3xl font-serif font-bold text-gold">{maxMortgage.toLocaleString("fr-CA")} $</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Valeur Propriété Max</p>
              <p className="text-3xl font-serif font-bold">{maxPropertyValue.toLocaleString("fr-CA")} $</p>
            </div>
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-2">Paiement Mensuel Est.</p>
              <p className="text-3xl font-serif font-bold">{Math.round(maxMonthlyPayment).toLocaleString("fr-CA")} $</p>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-6 text-center">
            Basé sur un revenu de {revenu.toLocaleString("fr-CA")} $/an, taux de {(estimatedRate * 100).toFixed(1)}%, amortissement 25 ans, ratio GDS {(gdsRatio * 100)}%
          </p>
        </div>

        {/* Warnings */}
        {warnings.length > 0 && (
          <div className="bg-gold-light border border-gold/20 rounded-xl p-6 mb-8">
            <h3 className="font-medium text-sm mb-3 flex items-center gap-2">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126z" />
              </svg>
              Points d&apos;attention
            </h3>
            <ul className="space-y-2">
              {warnings.map((w, i) => (
                <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                  <span className="text-gold mt-0.5">&bull;</span> {w}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Recommended Banks */}
        <h2 className="font-serif text-2xl mb-6">Meilleures Banques <em className="text-gold">Pour Vous</em></h2>
        <div className="space-y-4 mb-10">
          {recommendedBanks.map((bank) => (
            <div key={bank.shortName} className="bg-white rounded-xl p-6 shadow-sm flex flex-col md:flex-row md:items-center gap-6">
              <div className="w-16 h-16 bg-cream rounded-xl flex items-center justify-center font-serif font-bold text-gold text-xl flex-shrink-0">
                {bank.shortName.slice(0, 2)}
              </div>
              <div className="flex-1">
                <h3 className="font-medium mb-1">{bank.name}</h3>
                <div className="flex flex-wrap gap-2 mb-2">
                  {bank.specialites.map((s) => (
                    <span key={s} className="text-xs bg-gold/10 text-gold px-2 py-1 rounded-full">{s}</span>
                  ))}
                </div>
                <div className="flex gap-6 text-xs text-gray-400">
                  <span>Taux: {bank.tauxMin} - {bank.tauxMax}</span>
                  <span>Délai: {bank.delai}</span>
                  <span>Docs: {bank.documents}</span>
                </div>
              </div>
              <div className="flex items-center gap-1 text-gold">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={i < bank.rating ? "opacity-100" : "opacity-20"}>&#9733;</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Documents Checklist */}
        <h2 className="font-serif text-2xl mb-6">Documents <em className="text-gold">à Préparer</em></h2>
        <div className="bg-white rounded-xl p-6 shadow-sm mb-10">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Passeport valide",
              "Carte de résidence permanente / Permis de travail",
              "Lettre d'emploi récente",
              "Talons de paie (3 derniers mois)",
              "Relevés bancaires (3 derniers mois)",
              "Déclarations de revenus (2 dernières années)",
              "Preuve d'apport initial",
              "Rapport de crédit (si disponible)",
            ].map((doc) => (
              <label key={doc} className="flex items-start gap-3 text-sm text-gray-600 cursor-pointer">
                <input type="checkbox" className="mt-0.5 accent-gold" />
                {doc}
              </label>
            ))}
          </div>
        </div>

        {/* Next Steps */}
        <h2 className="font-serif text-2xl mb-6">Prochaines <em className="text-gold">Étapes</em></h2>
        <div className="bg-white rounded-xl p-6 shadow-sm mb-10">
          <div className="space-y-4">
            {[
              { step: "Semaines 1-2", action: "Rassemblez tous les documents et commencez à construire votre crédit." },
              { step: "Semaines 3-4", action: "Demandez une préapprobation auprès de 2-3 banques recommandées." },
              { step: "Semaines 5-8", action: "Comparez les offres, choisissez une propriété et finalisez l'approbation." },
            ].map((item) => (
              <div key={item.step} className="flex items-start gap-4">
                <span className="bg-gold text-white text-xs px-3 py-1 rounded-full font-medium flex-shrink-0">{item.step}</span>
                <p className="text-sm text-gray-600">{item.action}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guides */}
        <div className="text-center">
          <h2 className="font-serif text-2xl mb-6">Guides <em className="text-gold">Recommandés</em></h2>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/blog/hypotheque-immigrants-canada-guide-complet" className="text-sm bg-cream border border-gray-200 px-4 py-2 rounded-full hover:border-gold transition">Guide Complet</Link>
            {isTemporary && <Link href="/blog/hypotheque-permis-travail" className="text-sm bg-cream border border-gray-200 px-4 py-2 rounded-full hover:border-gold transition">Permis de Travail</Link>}
            {province === "Québec" && <Link href="/blog/hypotheque-quebec" className="text-sm bg-cream border border-gray-200 px-4 py-2 rounded-full hover:border-gold transition">Hypothèque Québec</Link>}
            {hasNoCredit && <Link href="/blog/hypotheque-sans-historique-credit" className="text-sm bg-cream border border-gray-200 px-4 py-2 rounded-full hover:border-gold transition">Sans Historique Crédit</Link>}
            <Link href="/comparateur" className="text-sm bg-cream border border-gray-200 px-4 py-2 rounded-full hover:border-gold transition">Comparateur Banques</Link>
            <Link href="/calculatrice" className="text-sm bg-cream border border-gray-200 px-4 py-2 rounded-full hover:border-gold transition">Calculatrice</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function ResultatsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream flex items-center justify-center"><p className="text-gray-400">Chargement...</p></div>}>
      <ResultsContent />
    </Suspense>
  );
}
