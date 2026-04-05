"use client";

import Link from "next/link";
import { useState } from "react";

interface DocItem {
  id: string;
  label: string;
  detail: string;
}

const categories: { title: string; emoji: string; docs: DocItem[] }[] = [
  {
    title: "Identité et statut",
    emoji: "🛂",
    docs: [
      { id: "passport", label: "Passeport valide", detail: "Copie des pages d'identification" },
      { id: "status", label: "Preuve de statut au Canada", detail: "Carte de RP, permis de travail ou confirmation IRCC" },
      { id: "id2", label: "2e pièce d'identité avec photo", detail: "Permis de conduire, carte santé provinciale, etc." },
      { id: "sin", label: "Numéro d'assurance sociale (NAS)", detail: "Document ou carte NAS" },
    ],
  },
  {
    title: "Emploi et revenus",
    emoji: "💼",
    docs: [
      { id: "employer-letter", label: "Lettre d'employeur", detail: "Poste, salaire, date d'embauche, statut (permanent/contrat)" },
      { id: "paystubs", label: "3 derniers talons de paie", detail: "Montrant le salaire brut et les déductions" },
      { id: "t4", label: "T4 / Avis de cotisation (si disponible)", detail: "1-2 dernières années. Pas obligatoire si nouveau au Canada" },
      { id: "job-contract", label: "Contrat de travail", detail: "Surtout si vous êtes en période probatoire ou avec permis temporaire" },
    ],
  },
  {
    title: "Mise de fonds",
    emoji: "🏦",
    docs: [
      { id: "bank-90", label: "90 jours de relevés bancaires", detail: "Tous les comptes montrant l'épargne pour la mise de fonds" },
      { id: "gift-letter", label: "Lettre de don (si applicable)", detail: "Lettre signée du donateur + relevé bancaire du donateur" },
      { id: "fhsa", label: "Relevé CELIAPP / RAP (si applicable)", detail: "Preuve de retrait du CELIAPP ou du REER pour le RAP" },
      { id: "wire", label: "Preuve de transfert international (si applicable)", detail: "Swift, confirmation bancaire, preuve de la source des fonds" },
    ],
  },
  {
    title: "Crédit",
    emoji: "📊",
    docs: [
      { id: "credit-report", label: "Rapport de crédit (la banque le tire)", detail: "Equifax ou TransUnion — le prêteur le fait automatiquement" },
      { id: "alt-credit", label: "Crédit alternatif (si pas d'historique)", detail: "12 mois de preuves : loyer, téléphone, électricité, assurance auto" },
      { id: "rent-proof", label: "Preuve de paiement de loyer", detail: "Chèques annulés, relevés ou lettre du propriétaire" },
    ],
  },
  {
    title: "Propriété",
    emoji: "🏠",
    docs: [
      { id: "offer", label: "Offre d'achat signée", detail: "Promesse d'achat avec conditions (financement, inspection)" },
      { id: "listing", label: "Fiche MLS de la propriété", detail: "Description, photos, évaluation municipale" },
      { id: "insurance", label: "Preuve d'assurance habitation", detail: "Soumission ou police d'assurance habitation" },
    ],
  },
];

export default function ChecklistDocuments() {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  const totalDocs = categories.reduce((sum, cat) => sum + cat.docs.length, 0);
  const progress = Math.round((checked.size / totalDocs) * 100);

  function toggle(id: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 font-semibold">
          <Link href="/" className="hover:text-gold transition">Accueil</Link>
          <span>/</span>
          <Link href="/outils/checklist-documents" className="text-gray-600">Checklist Documents</Link>
        </nav>

        <span className="inline-block text-sm bg-gold-light text-gold px-4 py-1.5 rounded-lg uppercase tracking-wider font-semibold mb-4">
          Outil gratuit
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-midnight mb-4">
          Checklist documents <span className="text-gold">hypothèque immigrant</span>
        </h1>
        <p className="text-lg text-gray-500 mb-6">
          Cochez chaque document au fur et à mesure que vous le préparez. Basé sur les exigences SCHL Nouveaux Arrivants.
        </p>

        {/* Progress bar */}
        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-base font-semibold text-midnight">{checked.size} / {totalDocs} documents prêts</span>
            <span className="text-base font-extrabold text-gold">{progress} %</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gold rounded-full h-3 transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          {progress === 100 && (
            <div className="mt-4 text-center">
              <p className="text-lg font-extrabold text-gold mb-2">Dossier complet !</p>
              <Link
                href="/wizard"
                className="inline-block bg-gold text-white px-6 py-3 rounded-lg font-bold hover:bg-gold-dark transition uppercase tracking-wider"
              >
                Lancer ma préapprobation
              </Link>
            </div>
          )}
        </div>

        {/* Categories */}
        {categories.map((cat) => (
          <div key={cat.title} className="bg-white rounded-2xl p-6 shadow-sm mb-4">
            <h2 className="text-lg font-extrabold text-midnight mb-4">
              <span className="mr-2">{cat.emoji}</span>{cat.title}
            </h2>
            <div className="space-y-3">
              {cat.docs.map((doc) => (
                <label
                  key={doc.id}
                  className={`flex items-start gap-3 p-3 rounded-xl cursor-pointer transition ${
                    checked.has(doc.id) ? "bg-gold-light" : "bg-cream hover:bg-gray-50"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked.has(doc.id)}
                    onChange={() => toggle(doc.id)}
                    className="mt-1 w-5 h-5 rounded accent-[#489D90] flex-shrink-0"
                  />
                  <div>
                    <span className={`text-base font-semibold ${checked.has(doc.id) ? "text-gold line-through" : "text-midnight"}`}>
                      {doc.label}
                    </span>
                    <p className="text-sm text-gray-500 mt-0.5">{doc.detail}</p>
                  </div>
                </label>
              ))}
            </div>
          </div>
        ))}

        <div className="bg-midnight text-white rounded-2xl p-8 text-center mt-8">
          <h2 className="text-xl font-extrabold mb-3">Dossier prêt ?</h2>
          <p className="text-base text-gray-400 mb-6">Notre wizard gratuit analyse votre profil et vous connecte aux meilleurs courtiers en 5 minutes.</p>
          <Link
            href="/wizard"
            className="inline-block bg-gold text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-white hover:text-gold border-2 border-gold transition uppercase tracking-wider"
          >
            Commencer le Wizard
          </Link>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Checklist Documents Hypothèque Immigrant — guide-hypotheque.ca",
              description: "Liste interactive de tous les documents nécessaires pour une demande d'hypothèque en tant qu'immigrant au Canada. Programme SCHL Nouveaux Arrivants.",
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
