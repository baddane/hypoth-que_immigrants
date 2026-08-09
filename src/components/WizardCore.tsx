"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { wizardSteps, calculateLeadScore } from "@/data/banks";
import { getAttribution } from "@/lib/attribution";
import { trackLead } from "@/lib/track";
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

  const stepsToShow = wizardSteps.filter((s) => !(s.id in defaultAnswers));

  const [step, setStep] = useState(0);
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

  const totalSteps = stepsToShow.length + 1;
  const isLeadForm = step === stepsToShow.length;
  const progress = ((step + 1) / totalSteps) * 100;

  const handleSelect = (value: string) => {
    const current = stepsToShow[step];
    setAnswers({ ...answers, [current.id]: value });
    setStep(step + 1);
  };

  const handleSliderSubmit = () => {
    const current = stepsToShow[step];
    setAnswers({ ...answers, [current.id]: sliderValue.toString() });
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
          revenu: Number(answers.revenu) || sliderValue,
          ...formData,
          score,
          quality,
          ...(variantId ? { wizardVariant: variantId } : {}),
          ...getAttribution(),
        }),
      });
      trackLead(variantId ? `wizard-${variantId}` : "wizard");
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

  // ── Barre de progression (haut d'écran, façon nesto) ──
  const progressHeader = (label: string) => (
    <div className="mb-8 sm:mb-10">
      <div className="flex items-center justify-between mb-2.5">
        <span className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-grey">
          {label}
        </span>
        <span className="font-mono text-[11px] sm:text-xs text-gold-dark font-semibold">
          {Math.round(progress)}%
        </span>
      </div>
      <div
        className="w-full bg-sand/50 rounded-full h-2 overflow-hidden"
        role="progressbar"
        aria-valuenow={Math.round(progress)}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <div
          className="bg-gold h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );

  const backButton = (
    <button
      type="button"
      onClick={() => setStep(step - 1)}
      className="inline-flex items-center gap-1.5 text-sm font-medium text-grey hover:text-ink transition"
    >
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Retour
    </button>
  );

  const reassurance = (texts: string[]) => (
    <ul className="mt-8 flex flex-col gap-2">
      {texts.map((text) => (
        <li key={text} className="flex items-center gap-2 text-xs sm:text-sm text-grey">
          <svg className="w-4 h-4 shrink-0 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
          {text}
        </li>
      ))}
    </ul>
  );

  // ── Étape « coordonnées » (dernière) ──
  if (isLeadForm) {
    const inputClass = (err?: string) =>
      `w-full rounded-xl border px-4 py-3.5 text-base bg-white transition outline-none focus:border-gold focus:ring-2 focus:ring-gold/25 ${
        err ? "border-red" : "border-sand"
      }`;

    return (
      <section className="min-h-[calc(100dvh-124px)] bg-paper">
        <div className="mx-auto w-full max-w-xl px-4 sm:px-6 py-6 sm:py-10">
          {progressHeader("Dernière étape")}

          <h2 className="font-serif text-[1.7rem] sm:text-4xl leading-tight text-ink mb-2">
            Vos coordonnées
          </h2>
          <p className="text-sm sm:text-base text-grey mb-7 sm:mb-8">
            Pour recevoir vos options hypothécaires personnalisées, entrez vos coordonnées ci-dessous.
          </p>

          <div className="bg-white rounded-3xl p-5 sm:p-8 shadow-sm border border-sand/50 flex flex-col gap-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="prenom" className="block text-sm font-medium text-ink mb-1.5">Prénom *</label>
                <input
                  id="prenom"
                  type="text"
                  autoComplete="given-name"
                  value={formData.prenom}
                  onChange={(e) => setFormData({ ...formData, prenom: e.target.value })}
                  className={inputClass(formErrors.prenom)}
                  placeholder="Prénom"
                />
                {formErrors.prenom && <p className="text-xs text-red mt-1">{formErrors.prenom}</p>}
              </div>
              <div>
                <label htmlFor="nom" className="block text-sm font-medium text-ink mb-1.5">Nom *</label>
                <input
                  id="nom"
                  type="text"
                  autoComplete="family-name"
                  value={formData.nom}
                  onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                  className={inputClass(formErrors.nom)}
                  placeholder="Nom"
                />
                {formErrors.nom && <p className="text-xs text-red mt-1">{formErrors.nom}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-ink mb-1.5">Email *</label>
              <input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className={inputClass(formErrors.email)}
                placeholder="votre@email.com"
              />
              {formErrors.email && <p className="text-xs text-red mt-1">{formErrors.email}</p>}
            </div>

            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-ink mb-1.5">Téléphone *</label>
              <input
                id="telephone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                value={formData.telephone}
                onChange={(e) => setFormData({ ...formData, telephone: e.target.value })}
                className={inputClass(formErrors.telephone)}
                placeholder="+1 (xxx) xxx-xxxx"
              />
              {formErrors.telephone && <p className="text-xs text-red mt-1">{formErrors.telephone}</p>}
            </div>

            <div>
              <label htmlFor="meilleurMoment" className="block text-sm font-medium text-ink mb-1.5">Meilleur moment pour vous contacter</label>
              <select
                id="meilleurMoment"
                value={formData.meilleurMoment}
                onChange={(e) => setFormData({ ...formData, meilleurMoment: e.target.value })}
                className="w-full rounded-xl border border-sand px-4 py-3.5 text-base bg-white outline-none transition focus:border-gold focus:ring-2 focus:ring-gold/25"
              >
                <option>Aujourd&apos;hui</option>
                <option>Demain</option>
                <option>Cette semaine</option>
                <option>Pas de rush</option>
              </select>
            </div>

            <label className="flex items-start gap-3">
              <input
                type="checkbox"
                checked={formData.accepteContact}
                onChange={(e) => setFormData({ ...formData, accepteContact: e.target.checked })}
                className="mt-0.5 w-5 h-5 accent-gold shrink-0"
              />
              <span className="text-xs sm:text-sm text-grey leading-relaxed">
                J&apos;accepte d&apos;être contacté par les courtiers et banques partenaires de guide-hypotheque.ca pour recevoir des offres hypothécaires.
              </span>
            </label>

            <button
              type="button"
              onClick={handleSubmit}
              disabled={submitting}
              className="w-full bg-gold text-ink py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-gold-dark transition uppercase tracking-wider disabled:opacity-50 shadow-lg shadow-gold/20"
            >
              {submitting ? "Envoi en cours..." : ctaText}
            </button>
          </div>

          {reassurance([
            "Aucune donnée ne sera partagée sans votre consentement",
            "Entièrement confidentiel et sécurisé",
            "Vous pouvez vous désinscrire à tout moment",
          ])}

          <div className="mt-6">{backButton}</div>
        </div>
      </section>
    );
  }

  // ── Étapes questions ──
  const current = stepsToShow[step];
  const isSlider = "type" in current && current.type === "slider";
  const options = "options" in current ? current.options ?? [] : [];
  // Grille 2 colonnes pour les listes longues (ex. provinces) afin que tout
  // tienne sur un seul écran sans défilement.
  const twoCol = options.length > 6;

  return (
    <section className="min-h-[calc(100dvh-124px)] bg-paper flex flex-col">
      <div className="mx-auto w-full max-w-xl px-4 sm:px-6 py-5 sm:py-8 flex-1 flex flex-col">
        {progressHeader(`Étape ${step + 1} sur ${totalSteps}`)}

        <h2 className="font-serif text-xl sm:text-3xl leading-tight text-ink mb-1.5 sm:mb-2">
          {current.question}
        </h2>
        {current.help && (
          <p className="text-xs sm:text-sm text-grey mb-4 sm:mb-6 leading-relaxed line-clamp-3 sm:line-clamp-none">
            {current.help}
          </p>
        )}

        {isSlider ? (
          <div className="flex flex-col gap-4">
            <div className="bg-white rounded-2xl p-5 sm:p-8 shadow-sm border border-sand/50">
              <div className="text-center mb-6">
                <span className="font-serif text-4xl sm:text-5xl font-bold text-gold-dark">
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
                className="w-full h-2 accent-gold"
                aria-label={current.question}
              />
              <div className="flex justify-between text-xs text-grey mt-3 font-mono">
                <span>{current.min?.toLocaleString("fr-CA")} $</span>
                <span>{current.max?.toLocaleString("fr-CA")} $+</span>
              </div>
            </div>
            <button
              type="button"
              onClick={handleSliderSubmit}
              className="w-full bg-gold text-ink py-4 rounded-xl font-bold text-base hover:bg-gold-dark transition uppercase tracking-wider shadow-lg shadow-gold/20"
            >
              Continuer
            </button>
          </div>
        ) : (
          <div className={`grid gap-2.5 ${twoCol ? "grid-cols-2" : "grid-cols-1"}`}>
            {options.map((option) => {
              const selected = answers[current.id] === option;
              return (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect(option)}
                  aria-pressed={selected}
                  className={`group text-left rounded-xl px-4 py-3 sm:py-3.5 border-2 transition flex items-center justify-between gap-2 ${
                    selected
                      ? "border-gold bg-gold-light"
                      : "border-sand/70 bg-white hover:border-gold hover:bg-gold-light/40"
                  }`}
                >
                  <span className="text-sm sm:text-base font-medium text-ink leading-snug">{option}</span>
                  {!twoCol && (
                    <span
                      className={`shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition ${
                        selected ? "border-gold bg-gold" : "border-sand group-hover:border-gold"
                      }`}
                    >
                      <span
                        className={`w-2 h-2 rounded-full bg-ink transition ${
                          selected ? "opacity-100" : "opacity-0"
                        }`}
                      />
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}

        <div className="mt-auto pt-6 flex items-center justify-between gap-4">
          {step > 0 ? backButton : <span />}
          <span className="flex items-center gap-1.5 text-xs text-grey">
            <svg className="w-3.5 h-3.5 shrink-0 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            Confidentiel &middot; sans engagement
          </span>
        </div>
      </div>
    </section>
  );
}
