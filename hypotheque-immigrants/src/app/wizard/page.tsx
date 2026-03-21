"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { wizardSteps } from "@/data/banks";

export default function WizardPage() {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [sliderValue, setSliderValue] = useState(80000);

  const current = wizardSteps[step];
  const progress = ((step + 1) / wizardSteps.length) * 100;

  const handleSelect = (value: string) => {
    const newAnswers = { ...answers, [current.id]: value };
    setAnswers(newAnswers);

    if (step < wizardSteps.length - 1) {
      setStep(step + 1);
    } else {
      const params = new URLSearchParams(newAnswers);
      router.push(`/resultats?${params.toString()}`);
    }
  };

  const handleSliderSubmit = () => {
    const newAnswers = { ...answers, [current.id]: sliderValue.toString() };
    setAnswers(newAnswers);

    if (step < wizardSteps.length - 1) {
      setStep(step + 1);
    } else {
      const params = new URLSearchParams(newAnswers);
      router.push(`/resultats?${params.toString()}`);
    }
  };

  return (
    <section className="min-h-[85vh] bg-cream flex items-center">
      <div className="max-w-2xl mx-auto px-6 py-20 w-full">
        {/* Progress */}
        <div className="mb-10">
          <div className="flex justify-between text-xs text-gray-400 mb-2">
            <span>Étape {step + 1} / {wizardSteps.length}</span>
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
      </div>
    </section>
  );
}
