"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { wizardSteps, calculateLeadScore } from "@/data/banks";

export default function WizardPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [sliderValue, setSliderValue] = useState(80000);

  // Step 7: Lead form state
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

  const totalSteps = wizardSteps.length + 1; // +1 for lead form
  const isLeadForm = step === wizardSteps.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const handleSelect = (value: string) => {
    const current = wizardSteps[step];
    const newAnswers = { ...answers, [current.id]: value };
    setAnswers(newAnswers);
    setStep(step + 1);
  };

  const handleSliderSubmit = () => {
    const current = wizardSteps[step];
    const newAnswers = { ...answers, [current.id]: sliderValue.toString() };
    setAnswers(newAnswers);
    setStep(step + 1);
  };

  const validateForm = () => {
    const errors: Record<string, string> = {};
    if (!formData.prenom.trim()) errors.prenom = "Requis";
    if (!formData.nom.trim()) errors.nom = "Requis";
    if (!formData.email.trim()) errors.email = "Requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errors.email = "Email invalide";
    if (!formData.telephone.trim()) errors.telephone = "Requis";
    else if (!/^[\d\s\-+()]{10,}$/.test(formData.telephone.replace(/\s/g, "")))
      errors.telephone = "Numéro invalide (min 10 chiffres)";
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
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
          revenu: Number(answers.revenu) || sliderValue,
          ...formData,
          score,
          quality,
        }),
      });
    } catch {
      // Still redirect even if API fails
    }

    const params = new URLSearchParams({
      quality,
      score: score.toString(),
      prenom: formData.prenom,
    });
    router.push(`/merci?${params.toString()}`);
  };

  // Render lead form (step 7)
  if (isLeadForm) {
    return (
      <section className="min-h-[85vh] bg-cream flex items-center">
        <div className="max-w-lg mx-auto px-6 py-20 w-full">
          {/* Progress */}
          <div className="mb-10">
            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>Étape {totalSteps} / {totalSteps} — Dernière étape !</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5">
              <div className="bg-gold rounded-full h-1.5 transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <h1 className="font-serif text-2xl md:text-3xl mb-2">Vos coordonnées</h1>
          <p className="text-sm text-gray-400 mb-8">
            Pour recevoir vos options hypothécaires personnalisées, entrez vos coordonnées ci-dessous.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">Prénom *</label>
                <input
                  type="text"
                  value={formData.prenom}
                  onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-gold ${formErrors.prenom ? "border-red-400" : "border-gray-200"}`}
                  placeholder="Prénom"
                />
                {formErrors.prenom && <p className="text-xs text-red-500 mt-1">{formErrors.prenom}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Nom *</label>
                <input
                  type="text"
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-gold ${formErrors.nom ? "border-red-400" : "border-gray-200"}`}
                  placeholder="Nom"
                />
                {formErrors.nom && <p className="text-xs text-red-500 mt-1">{formErrors.nom}</p>}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email *</label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-gold ${formErrors.email ? "border-red-400" : "border-gray-200"}`}
                placeholder="votre@email.com"
              />
              {formErrors.email && <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Téléphone *</label>
              <input
                type="tel"
                value={formData.telephone}
                onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-gold ${formErrors.telephone ? "border-red-400" : "border-gray-200"}`}
                placeholder="+1 (xxx) xxx-xxxx"
              />
              {formErrors.telephone && <p className="text-xs text-red-500 mt-1">{formErrors.telephone}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Meilleur moment pour vous contacter</label>
              <select
                value={formData.meilleurMoment}
                onChange={(e) => setFormData({ ...formData, meilleurMoment: e.target.value })}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold"
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
                className="mt-0.5 accent-gold"
              />
              <span className="text-xs text-gray-500">
                J&apos;accepte d&apos;être contacté par les courtiers et banques partenaires de guide-hypotheque.ca pour recevoir des offres hypothécaires.
              </span>
            </label>

            <button
              onClick={handleSubmit}
              disabled={submitting}
              className="w-full bg-gold text-white py-4 rounded-xl font-bold text-lg hover:bg-gold-dark transition uppercase tracking-wider disabled:opacity-50 shadow-lg shadow-gold/25"
            >
              {submitting ? "Envoi en cours..." : "VOIR MES OPTIONS"}
            </button>
          </div>

          {/* Reassurance */}
          <div className="mt-6 space-y-2">
            {[
              "Aucune donnée ne sera partagée sans votre consentement",
              "Entièrement confidentiel et sécurisé",
              "Vous pouvez vous désinscrire à tout moment",
            ].map((text) => (
              <p key={text} className="flex items-center gap-2 text-xs text-gray-400">
                <span className="text-green-500">&#10003;</span> {text}
              </p>
            ))}
          </div>

          <button
            onClick={() => setStep(step - 1)}
            className="mt-6 text-sm text-gray-400 hover:text-gray-600 transition flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour
          </button>
        </div>
      </section>
    );
  }

  // Render wizard steps (1-6)
  const current = wizardSteps[step];

  return (
    <section className="min-h-[85vh] bg-cream flex items-center">
      <div className="max-w-2xl mx-auto px-6 py-20 w-full">
        {/* Progress */}
        <div className="mb-10">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>Étape {step + 1} / {totalSteps}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-1.5">
            <div
              className="bg-gold rounded-full h-1.5 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <h1 className="font-serif text-2xl md:text-3xl mb-8">{current.question}</h1>

        {/* Options or Slider */}
        {"type" in current && current.type === "slider" ? (
          <div className="space-y-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-center mb-6">
                <span className="text-4xl font-serif font-bold text-gold">
                  {sliderValue.toLocaleString("fr-CA")} $
                </span>
              </div>
              <input
                type="range"
                min={current.min}
                max={current.max}
                step={current.step}
                value={sliderValue}
                onChange={(e) => setSliderValue(Number(e.target.value))}
                className="w-full accent-gold"
              />
              <div className="flex justify-between text-xs text-gray-400 mt-2">
                <span>{current.min?.toLocaleString("fr-CA")} $</span>
                <span>{current.max?.toLocaleString("fr-CA")} $+</span>
              </div>
              {current.help && (
                <p className="text-xs text-gray-400 mt-4 text-center">{current.help}</p>
              )}
            </div>
            <button
              onClick={handleSliderSubmit}
              className="w-full bg-gold text-white py-4 rounded-xl font-medium hover:bg-gold-dark transition uppercase text-sm tracking-wider"
            >
              Continuer
            </button>
          </div>
        ) : (
          <div className="space-y-3">
            {"options" in current &&
              current.options?.map((option) => (
                <button
                  key={option}
                  onClick={() => handleSelect(option)}
                  className="w-full text-left bg-white rounded-xl px-6 py-4 hover:bg-gold hover:text-white transition group border border-gray-100 hover:border-gold"
                >
                  <span className="flex items-center justify-between">
                    <span>{option}</span>
                    <svg
                      className="w-4 h-4 text-gray-300 group-hover:text-white transition"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              ))}
          </div>
        )}

        {/* Back button */}
        {step > 0 && (
          <button
            onClick={() => setStep(step - 1)}
            className="mt-6 text-sm text-gray-400 hover:text-gray-600 transition flex items-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour
          </button>
        )}

        {/* Reassurance */}
        <div className="mt-10 space-y-2">
          {[
            "Aucune donnée ne sera partagée sans votre consentement",
            "Entièrement confidentiel",
            "Vous pouvez arrêter à tout moment",
          ].map((text) => (
            <p key={text} className="flex items-center gap-2 text-xs text-gray-400">
              <span className="text-green-500">&#10003;</span> {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
