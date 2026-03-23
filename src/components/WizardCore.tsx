"use client";

import { useState, useEffect, useCallback } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { wizardSteps, calculateLeadScore } from "@/data/banks";
import { validateLeadForm } from "@/lib/validation";

interface WizardCoreProps {
  variantId?: string;
  defaultAnswers?: Record<string, string>;
  ctaText?: string;
}

export default function WizardCore({
  variantId,
  defaultAnswers = {},
  ctaText = "VOIR MES OPTIONS",
}: WizardCoreProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const stepsToShow = wizardSteps.filter((s) => !(s.id in defaultAnswers));

  const getInitialStep = () => {
    const stepParam = searchParams.get("step");
    if (stepParam) {
      const parsed = parseInt(stepParam, 10);
      if (!isNaN(parsed) && parsed >= 0 && parsed <= stepsToShow.length) {
        return parsed;
      }
    }
    return 0;
  };

  const [step, setStep] = useState(getInitialStep);
  const [answers, setAnswers] = useState<Record<string, string>>({ ...defaultAnswers });
  const [sliderValue, setSliderValue] = useState(80000);

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

  // Sync step changes to browser history
  const updateUrl = useCallback((newStep: number) => {
    const url = new URL(window.location.href);
    if (newStep === 0) {
      url.searchParams.delete("step");
    } else {
      url.searchParams.set("step", newStep.toString());
    }
    window.history.pushState({ wizardStep: newStep }, "", url.toString());
  }, []);

  // Listen for browser back/forward navigation
  useEffect(() => {
    const handlePopState = (event: PopStateEvent) => {
      if (event.state && typeof event.state.wizardStep === "number") {
        setStep(event.state.wizardStep);
      } else {
        setStep(0);
      }
    };

    // Set initial history state
    window.history.replaceState({ wizardStep: step }, "", window.location.href);

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const totalSteps = stepsToShow.length + 1;
  const isLeadForm = step === stepsToShow.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const goToStep = useCallback((newStep: number) => {
    setStep(newStep);
    updateUrl(newStep);
  }, [updateUrl]);

  const handleSelect = (value: string) => {
    const current = stepsToShow[step];
    setAnswers({ ...answers, [current.id]: value });
    goToStep(step + 1);
  };

  const handleSliderSubmit = () => {
    const current = stepsToShow[step];
    setAnswers({ ...answers, [current.id]: sliderValue.toString() });
    goToStep(step + 1);
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
          revenu: Number(answers.revenu) || sliderValue,
          ...formData,
          score,
          quality,
          ...(variantId ? { wizardVariant: variantId } : {}),
        }),
      });
    } catch {
      // Still redirect even if API fails — lead is also scored server-side
    }

    const params = new URLSearchParams({
      quality,
      score: score.toString(),
      prenom: formData.prenom,
      ...(variantId ? { variant: variantId } : {}),
    });
    router.push(`/merci?${params.toString()}`);
  };

  // Progress bar component
  const progressBar = (label: string) => (
    <div className="mb-10">
      <div className="flex justify-between text-xs text-gray-400 mb-2">
        <span>{label}</span>
        <span>{Math.round(progress)}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5">
        <div
          className="bg-gold rounded-full h-1.5 transition-all duration-500"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );

  const backButton = (
    <button
      onClick={() => goToStep(step - 1)}
      className="mt-6 text-sm text-gray-400 hover:text-gray-600 transition flex items-center gap-2"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Retour
    </button>
  );

  const reassurance = (texts: string[]) => (
    <div className="mt-6 space-y-2">
      {texts.map((text) => (
        <p key={text} className="flex items-center gap-2 text-xs text-gray-400">
          <span className="text-green-500">&#10003;</span> {text}
        </p>
      ))}
    </div>
  );

  // Lead form (last step)
  if (isLeadForm) {
    return (
      <section className="min-h-[85vh] bg-cream flex items-center">
        <div className="max-w-lg mx-auto px-6 py-20 w-full">
          {progressBar("Dernière étape !")}

          <h2 className="font-serif text-2xl md:text-3xl mb-2">Vos coordonnées</h2>
          <p className="text-sm text-gray-400 mb-8">
            Pour recevoir vos options hypothécaires personnalisées, entrez vos coordonnées ci-dessous.
          </p>

          <div className="bg-white rounded-2xl p-8 shadow-sm space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="prenom" className="block text-sm font-medium mb-1">Prénom *</label>
                <input
                  id="prenom"
                  type="text"
                  value={formData.prenom}
                  onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                  className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-gold ${formErrors.prenom ? "border-red-400" : "border-gray-200"}`}
                  placeholder="Prénom"
                />
                {formErrors.prenom && <p className="text-xs text-red-500 mt-1">{formErrors.prenom}</p>}
              </div>
              <div>
                <label htmlFor="nom" className="block text-sm font-medium mb-1">Nom *</label>
                <input
                  id="nom"
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
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email *</label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-gold ${formErrors.email ? "border-red-400" : "border-gray-200"}`}
                placeholder="votre@email.com"
              />
              {formErrors.email && <p className="text-xs text-red-500 mt-1">{formErrors.email}</p>}
            </div>

            <div>
              <label htmlFor="telephone" className="block text-sm font-medium mb-1">Téléphone *</label>
              <input
                id="telephone"
                type="tel"
                value={formData.telephone}
                onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                className={`w-full border rounded-lg px-4 py-3 focus:outline-none focus:border-gold ${formErrors.telephone ? "border-red-400" : "border-gray-200"}`}
                placeholder="+1 (xxx) xxx-xxxx"
              />
              {formErrors.telephone && <p className="text-xs text-red-500 mt-1">{formErrors.telephone}</p>}
            </div>

            <div>
              <label htmlFor="meilleurMoment" className="block text-sm font-medium mb-1">Meilleur moment pour vous contacter</label>
              <select
                id="meilleurMoment"
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
              {submitting ? "Envoi en cours..." : ctaText}
            </button>
          </div>

          {reassurance([
            "Aucune donnée ne sera partagée sans votre consentement",
            "Entièrement confidentiel et sécurisé",
            "Vous pouvez vous désinscrire à tout moment",
          ])}

          {backButton}
        </div>
      </section>
    );
  }

  // Wizard steps
  const current = stepsToShow[step];

  return (
    <section className="min-h-[85vh] bg-cream flex items-center">
      <div className="max-w-2xl mx-auto px-6 py-20 w-full">
        {progressBar(`Étape ${step + 1} / ${totalSteps}`)}

        <h2 className="font-serif text-2xl md:text-3xl mb-3">{current.question}</h2>
        {current.help && (
          <p className="text-sm text-gray-400 mb-6">{current.help}</p>
        )}

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
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-white transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </button>
              ))}
          </div>
        )}

        {step > 0 && backButton}

        {reassurance([
          "Aucune donnée ne sera partagée sans votre consentement",
          "Entièrement confidentiel",
          "Vous pouvez arrêter à tout moment",
        ])}
      </div>
    </section>
  );
}
