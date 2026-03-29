"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { wizardSteps, calculateLeadScore } from "@/data/banks";
import { validateLeadForm } from "@/lib/validation";

interface WizardCoreProps {
  variantId?: string;
  defaultAnswers?: Record<string, string>;
  ctaText?: string;
}

// Circular progress indicator (like nesto)
function StepIndicator({ current, total }: { current: number; total: number }) {
  const progress = (current / total) * 100;
  const radius = 18;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold text-midnight">
        {current} <span className="text-gray-300">/ {total}</span>
      </span>
      <svg width="44" height="44" className="-rotate-90">
        <circle cx="22" cy="22" r={radius} fill="none" stroke="#E5E7EB" strokeWidth="3" />
        <circle
          cx="22"
          cy="22"
          r={radius}
          fill="none"
          stroke="#489D90"
          strokeWidth="3"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          strokeLinecap="round"
          className="transition-all duration-500"
        />
      </svg>
    </div>
  );
}

// Emoji map for options to make them more visual
const optionEmojis: Record<string, string> = {
  "Résident Permanent (RP)": "🍁",
  "Travailleur Temporaire - Permis Fermé": "📋",
  "Travailleur International - Permis Ouvert": "🌍",
  "Préparation Immigration (en attente)": "⏳",
  "Citoyen Canadien": "🇨🇦",
  "Moins de 6 mois": "🆕",
  "6 mois à 1 an": "📅",
  "1 à 2 ans": "📆",
  "2 à 5 ans": "✅",
  "Plus de 5 ans": "🏠",
  "Non (nouveau au Canada)": "🔄",
  "Oui, crédit excellent (750+)": "⭐",
  "Oui, crédit bon (700-749)": "👍",
  "Oui, crédit moyen (650-699)": "👌",
  "Oui, crédit faible (moins de 650)": "📊",
  "Aucun (0%)": "0%",
  "5% du prix d'achat": "5%",
  "10-15%": "10%",
  "20%+": "20%",
  "Ontario": "🏙️",
  "Québec": "⚜️",
  "Colombie-Britannique": "🏔️",
  "Alberta": "🛢️",
  "Manitoba": "🌾",
  "Saskatchewan": "🌻",
  "Nouvelle-Écosse": "🌊",
  "Nouveau-Brunswick": "🦞",
  "Île-du-Prince-Édouard": "🏝️",
  "Terre-Neuve-Labrador": "🐋",
  "Yukon": "🐻",
  "Territoires du Nord-Ouest": "❄️",
  "Nunavut": "🌌",
};

export default function WizardCore({
  variantId,
  defaultAnswers = {},
  ctaText = "VOIR MES OPTIONS",
}: WizardCoreProps) {
  const router = useRouter();

  const stepsToShow = wizardSteps.filter((s) => !(s.id in defaultAnswers));

  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({ ...defaultAnswers });
  const [revenueInput, setRevenueInput] = useState("80000");

  const [formData, setFormData] = useState({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    meilleurMoment: "Cette semaine",
    accepteContact: true,
  });
  const [submitting, setSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const totalSteps = stepsToShow.length + 1;
  const isLeadForm = step === stepsToShow.length;

  const handleSelect = (value: string) => {
    const current = stepsToShow[step];
    setAnswers({ ...answers, [current.id]: value });
    setStep(step + 1);
  };

  const handleRevenueSubmit = () => {
    const current = stepsToShow[step];
    const val = parseInt(revenueInput.replace(/\D/g, ""), 10) || 80000;
    setAnswers({ ...answers, [current.id]: val.toString() });
    setStep(step + 1);
  };

  const handleSubmit = async () => {
    const errors = validateLeadForm(formData);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSubmitting(true);

    const { score, quality } = calculateLeadScore({
      statut: answers.statut || "",
      duree: answers.duree || "",
      credit: answers.credit || "",
      revenu: Number(answers.revenu) || 80000,
      apport: answers.apport || "",
      meilleurMoment: formData.meilleurMoment,
    });

    try {
      await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...answers,
          revenu: Number(answers.revenu) || parseInt(revenueInput.replace(/\D/g, ""), 10),
          ...formData,
          score,
          quality,
          ...(variantId ? { wizardVariant: variantId } : {}),
        }),
      });
    } catch {
      // Still redirect even if API fails
    }

    const params = new URLSearchParams({
      quality,
      score: score.toString(),
      prenom: formData.prenom,
      ...(variantId ? { variant: variantId } : {}),
    });
    router.push(`/merci?${params.toString()}`);
  };

  const backButton = step > 0 && (
    <button
      onClick={() => setStep(step - 1)}
      className="mt-6 text-sm text-gray-400 hover:text-midnight transition flex items-center gap-2 mx-auto"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Retour
    </button>
  );

  // Lead form (last step)
  if (isLeadForm) {
    return (
      <section className="min-h-[85vh] bg-gray-50 flex items-center justify-center">
        <div className="w-full max-w-[640px] mx-auto px-6 py-16">
          {/* Card */}
          <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl md:text-2xl font-extrabold text-midnight">Vos coordonnées</h2>
              <StepIndicator current={totalSteps} total={totalSteps} />
            </div>

            <p className="text-sm text-gray-500 mb-8">
              Pour recevoir vos options hypothécaires personnalisées, entrez vos coordonnées ci-dessous.
            </p>

            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="prenom" className="block text-sm font-semibold text-midnight mb-1.5">Prénom *</label>
                  <input
                    id="prenom"
                    type="text"
                    value={formData.prenom}
                    onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                    className={`w-full border-2 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold transition ${formErrors.prenom ? "border-red-400" : "border-gray-200"}`}
                    placeholder="Prénom"
                  />
                  {formErrors.prenom && <p className="text-xs text-red-500 mt-1">{formErrors.prenom}</p>}
                </div>
                <div>
                  <label htmlFor="nom" className="block text-sm font-semibold text-midnight mb-1.5">Nom *</label>
                  <input
                    id="nom"
                    type="text"
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    className={`w-full border-2 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold transition ${formErrors.nom ? "border-red-400" : "border-gray-200"}`}
                    placeholder="Nom"
                  />
                  {formErrors.nom && <p className="text-xs text-red-500 mt-1">{formErrors.nom}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-midnight mb-1.5">Courriel *</label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className={`w-full border-2 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold transition ${formErrors.email ? "border-red-400" : "border-gray-200"}`}
                  placeholder="votre@courriel.com"
                />
                {formErrors.email && <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>}
              </div>

              <div>
                <label htmlFor="telephone" className="block text-sm font-semibold text-midnight mb-1.5">Téléphone *</label>
                <input
                  id="telephone"
                  type="tel"
                  value={formData.telephone}
                  onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                  className={`w-full border-2 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold transition ${formErrors.telephone ? "border-red-400" : "border-gray-200"}`}
                  placeholder="+1 (xxx) xxx-xxxx"
                />
                {formErrors.telephone && <p className="text-xs text-red-500 mt-1">{formErrors.telephone}</p>}
              </div>

              <div>
                <label htmlFor="meilleurMoment" className="block text-sm font-semibold text-midnight mb-1.5">Meilleur moment pour vous contacter</label>
                <select
                  id="meilleurMoment"
                  value={formData.meilleurMoment}
                  onChange={(e) => setFormData({ ...formData, meilleurMoment: e.target.value })}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3.5 focus:outline-none focus:border-gold transition"
                >
                  <option>Aujourd&apos;hui</option>
                  <option>Demain</option>
                  <option>Cette semaine</option>
                  <option>Pas de rush</option>
                </select>
              </div>

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.accepteContact}
                  onChange={(e) => setFormData({ ...formData, accepteContact: e.target.checked })}
                  className="mt-0.5 accent-gold w-5 h-5"
                />
                <span className="text-xs text-gray-500 leading-relaxed">
                  J&apos;accepte d&apos;être contacté par les courtiers et banques partenaires de guide-hypotheque.ca pour recevoir des offres hypothécaires.
                </span>
              </label>

              <button
                onClick={handleSubmit}
                disabled={submitting}
                className="w-full bg-gold text-white py-4 rounded-xl font-bold text-lg hover:bg-gold-dark transition disabled:opacity-50"
              >
                {submitting ? "Envoi en cours..." : ctaText}
              </button>
            </div>

            {/* Reassurance */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center">
              {["Confidentiel", "Gratuit", "Sans engagement"].map((text) => (
                <span key={text} className="flex items-center gap-1.5 text-xs text-gray-400">
                  <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  {text}
                </span>
              ))}
            </div>
          </div>

          {backButton}
        </div>
      </section>
    );
  }

  // Wizard steps
  const current = stepsToShow[step];
  const isSlider = "type" in current && current.type === "slider";
  const hasOptions = "options" in current && current.options;
  // Use grid layout for 6 or fewer options, list for more (like provinces)
  const useGrid = hasOptions && current.options!.length <= 6;

  return (
    <section className="min-h-[85vh] bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-[640px] mx-auto px-6 py-16">

        {/* Welcome banner on first step */}
        {step === 0 && (
          <div className="bg-gold-light rounded-2xl p-6 mb-6 border border-gold/20">
            <div className="flex items-center gap-2 mb-2">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-xs font-bold text-gold uppercase tracking-wider">En moins de 5 minutes</span>
            </div>
            <p className="text-sm font-bold text-midnight leading-snug">
              Découvrez vos options hypothécaires ! Répondez à quelques questions sur votre situation et le tour est joué.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Accédez aux meilleures offres en moins de temps qu&apos;il ne faut pour faire votre café.
            </p>
          </div>
        )}

        {/* Question card */}
        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-gray-100">
          {/* Header with question + step indicator */}
          <div className="flex items-start justify-between gap-4 mb-2">
            <h2 className="text-xl md:text-2xl font-extrabold text-midnight leading-tight">
              {current.question}
            </h2>
            <StepIndicator current={step + 1} total={totalSteps} />
          </div>

          {current.help && (
            <p className="text-sm text-gray-500 mb-6 leading-relaxed">{current.help}</p>
          )}

          {/* Revenue input (nesto style: input with $ prefix) */}
          {isSlider && (
            <div className="space-y-4">
              <div className="flex items-center border-2 border-gray-200 rounded-xl overflow-hidden focus-within:border-gold transition">
                <span className="px-4 py-3.5 bg-gray-50 text-gray-500 font-semibold border-r border-gray-200">$</span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={revenueInput}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/\D/g, "");
                    setRevenueInput(raw);
                  }}
                  className="flex-1 px-4 py-3.5 focus:outline-none text-lg font-semibold text-midnight"
                  placeholder="Revenu annuel brut"
                />
              </div>
              <p className="text-xs text-gray-400">
                Montant affiché : {(parseInt(revenueInput.replace(/\D/g, ""), 10) || 0).toLocaleString("fr-CA")} $
              </p>
              <button
                onClick={handleRevenueSubmit}
                className="w-full bg-gold text-white py-4 rounded-xl font-bold text-lg hover:bg-gold-dark transition"
              >
                Continuer
              </button>
            </div>
          )}

          {/* Grid options (for 6 or fewer choices) */}
          {hasOptions && useGrid && (
            <div className="grid grid-cols-2 gap-3">
              {current.options!.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="bg-white border-2 border-gray-200 rounded-2xl p-5 text-center hover:border-gold hover:bg-gold-light transition group"
                >
                  <span className="block text-2xl mb-2">{optionEmojis[option] || "📌"}</span>
                  <span className="block text-sm font-semibold text-midnight group-hover:text-gold transition leading-snug">
                    {option}
                  </span>
                </button>
              ))}
            </div>
          )}

          {/* List options (for many choices like provinces) */}
          {hasOptions && !useGrid && (
            <div className="space-y-2.5">
              {current.options!.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="w-full text-left bg-white border-2 border-gray-200 rounded-xl px-5 py-4 hover:border-gold hover:bg-gold-light transition group flex items-center gap-3"
                >
                  <span className="text-xl flex-shrink-0">{optionEmojis[option] || "📌"}</span>
                  <span className="text-sm font-semibold text-midnight group-hover:text-gold transition">{option}</span>
                  <svg className="w-4 h-4 text-gray-300 group-hover:text-gold transition ml-auto flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              ))}
            </div>
          )}
        </div>

        {backButton}
      </div>
    </section>
  );
}
