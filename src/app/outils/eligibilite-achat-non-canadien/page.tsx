"use client";

import Link from "next/link";
import { useState } from "react";

type Step = "status" | "permit" | "location" | "result";

interface QuizState {
  status: string;
  permitType: string;
  location: string;
}

export default function EligibiliteAchat() {
  const [step, setStep] = useState<Step>("status");
  const [state, setState] = useState<QuizState>({ status: "", permitType: "", location: "" });

  function selectStatus(value: string) {
    setState({ ...state, status: value });
    if (value === "citizen" || value === "pr") {
      setStep("result");
    } else if (value === "refugee") {
      setStep("result");
    } else {
      setStep("permit");
    }
  }

  function selectPermit(value: string) {
    setState({ ...state, permitType: value });
    setStep("location");
  }

  function selectLocation(value: string) {
    setState({ ...state, location: value });
    setStep("result");
  }

  function restart() {
    setState({ status: "", permitType: "", location: "" });
    setStep("status");
  }

  function getResult() {
    const { status, permitType, location } = state;

    if (status === "citizen" || status === "pr") {
      return {
        eligible: true,
        icon: "✅",
        title: "Vous pouvez acheter librement !",
        explanation: status === "citizen"
          ? "En tant que citoyen canadien, la Loi sur l'interdiction d'achat ne vous affecte pas. Aucune restriction."
          : "En tant que résident permanent, vous avez les mêmes droits d'achat qu'un citoyen canadien. La loi d'interdiction ne s'applique pas à vous.",
        nextStep: "Commencez votre préapprobation pour découvrir combien vous pouvez emprunter.",
      };
    }

    if (status === "refugee") {
      return {
        eligible: true,
        icon: "✅",
        title: "Vous êtes exempté de l'interdiction",
        explanation: "Les personnes protégées (réfugiés) sont exemptées de la Loi sur l'interdiction d'achat d'immeubles résidentiels par des non-Canadiens.",
        nextStep: "Vous pouvez acheter avec certaines conditions. Consultez un courtier spécialisé.",
      };
    }

    if (status === "worker") {
      if (permitType === "work-183") {
        if (location === "outside-cma") {
          return {
            eligible: true,
            icon: "✅",
            title: "Vous pouvez acheter !",
            explanation: "Avec un permis de travail valide 183+ jours ET une propriété hors des grandes agglomérations (CMA/CA), vous êtes doublement exempté. Vous pouvez acheter 1 propriété résidentielle.",
            nextStep: "Bonne nouvelle ! Passez à la préapprobation.",
          };
        }
        return {
          eligible: true,
          icon: "✅",
          title: "Vous pouvez acheter (1 propriété)",
          explanation: "Avec un permis de travail valide 183 jours ou plus, vous pouvez acheter UNE propriété résidentielle au Canada, même dans une grande ville. Condition : vous ne devez pas déjà posséder de propriété résidentielle au Canada.",
          nextStep: "Lancez votre préapprobation pour connaître vos options.",
        };
      }
      if (location === "outside-cma") {
        return {
          eligible: true,
          icon: "⚠️",
          title: "Possible hors grandes villes",
          explanation: "Votre permis de travail est de moins de 183 jours, mais les propriétés situées hors des régions métropolitaines de recensement (RMR) et agglomérations de recensement (AR) sont exemptées de l'interdiction.",
          nextStep: "Cherchez une propriété hors des grandes agglomérations ou attendez un permis plus long.",
        };
      }
      return {
        eligible: false,
        icon: "❌",
        title: "Achat interdit pour le moment",
        explanation: "Avec un permis de travail de moins de 183 jours dans une grande agglomération, vous êtes visé par la Loi sur l'interdiction d'achat. Cette loi est en vigueur jusqu'au 1er janvier 2027.",
        nextStep: "Options : attendez un permis plus long, visez hors des grandes villes, ou obtenez votre RP.",
      };
    }

    if (status === "student") {
      if (location === "outside-cma") {
        return {
          eligible: true,
          icon: "⚠️",
          title: "Possible hors grandes villes",
          explanation: "En tant qu'étudiant international, vous pouvez acheter hors des grandes agglomérations (RMR/AR). Dans une grande ville, la propriété ne doit pas dépasser 500 000 $.",
          nextStep: "Cherchez dans les régions hors RMR ou respectez le plafond de 500 000 $.",
        };
      }
      return {
        eligible: true,
        icon: "⚠️",
        title: "Possible avec conditions",
        explanation: "Les étudiants internationaux inscrits dans un programme autorisé peuvent acheter une propriété dont le prix ne dépasse pas 500 000 $. Au-delà, l'interdiction s'applique.",
        nextStep: "Vérifiez que le prix ne dépasse pas 500 000 $ et lancez votre demande.",
      };
    }

    return {
      eligible: false,
      icon: "❌",
      title: "Achat interdit",
      explanation: "En tant que non-résident sans permis de travail ou d'études valide, vous êtes visé par la Loi sur l'interdiction d'achat d'immeubles résidentiels (en vigueur jusqu'au 1er janvier 2027).",
      nextStep: "Obtenez un permis de travail, un statut d'étudiant ou la résidence permanente pour pouvoir acheter.",
    };
  }

  const result = getResult();

  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 font-semibold">
          <Link href="/" className="hover:text-gold transition">Accueil</Link>
          <span>/</span>
          <Link href="/outils/eligibilite-achat-non-canadien" className="text-gray-600">Éligibilité achat</Link>
        </nav>

        <span className="inline-block text-sm bg-gold-light text-gold px-4 py-1.5 rounded-lg uppercase tracking-wider font-semibold mb-4">
          Quiz gratuit
        </span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-midnight mb-4">
          Pouvez-vous acheter une propriété <span className="text-gold">au Canada</span> ?
        </h1>
        <p className="text-lg text-gray-500 mb-10">
          La loi interdit certains non-Canadiens d&apos;acheter jusqu&apos;en 2027, mais il existe des exemptions. Répondez à 3 questions pour savoir.
        </p>

        {step === "status" && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-extrabold text-midnight mb-6">Quel est votre statut au Canada ?</h2>
            <div className="space-y-3">
              {[
                { value: "citizen", label: "Citoyen canadien", emoji: "🇨🇦" },
                { value: "pr", label: "Résident permanent", emoji: "✅" },
                { value: "worker", label: "Travailleur avec permis", emoji: "🛂" },
                { value: "student", label: "Étudiant international", emoji: "🎓" },
                { value: "refugee", label: "Réfugié / Personne protégée", emoji: "🛡️" },
                { value: "other", label: "Autre / Non-résident", emoji: "🌍" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => selectStatus(opt.value)}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-gold hover:bg-gold-light transition text-left"
                >
                  <span className="text-2xl">{opt.emoji}</span>
                  <span className="text-base font-semibold text-midnight">{opt.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {step === "permit" && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-extrabold text-midnight mb-6">Votre permis de travail est valide combien de temps ?</h2>
            <div className="space-y-3">
              {[
                { value: "work-183", label: "183 jours ou plus", emoji: "📅" },
                { value: "work-short", label: "Moins de 183 jours", emoji: "⏳" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => selectPermit(opt.value)}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-gold hover:bg-gold-light transition text-left"
                >
                  <span className="text-2xl">{opt.emoji}</span>
                  <span className="text-base font-semibold text-midnight">{opt.label}</span>
                </button>
              ))}
            </div>
            <button onClick={() => setStep("status")} className="mt-4 text-sm text-gold hover:underline">&larr; Retour</button>
          </div>
        )}

        {step === "location" && (
          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <h2 className="text-xl font-extrabold text-midnight mb-6">Où souhaitez-vous acheter ?</h2>
            <div className="space-y-3">
              {[
                { value: "inside-cma", label: "Grande ville (Montréal, Toronto, Vancouver, Ottawa, Calgary...)", emoji: "🏙️" },
                { value: "outside-cma", label: "Petite ville ou région rurale", emoji: "🏡" },
              ].map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => selectLocation(opt.value)}
                  className="w-full flex items-center gap-4 p-4 rounded-xl border border-gray-200 hover:border-gold hover:bg-gold-light transition text-left"
                >
                  <span className="text-2xl">{opt.emoji}</span>
                  <span className="text-base font-semibold text-midnight">{opt.label}</span>
                </button>
              ))}
            </div>
            <button onClick={() => setStep("permit")} className="mt-4 text-sm text-gold hover:underline">&larr; Retour</button>
          </div>
        )}

        {step === "result" && (
          <div className={`bg-white rounded-2xl p-8 shadow-sm border-2 ${result.eligible ? "border-gold" : "border-red-400"}`}>
            <div className="text-center mb-6">
              <span className="text-5xl">{result.icon}</span>
              <h2 className="text-2xl font-extrabold text-midnight mt-4 mb-2">{result.title}</h2>
              <p className="text-base text-gray-600 max-w-lg mx-auto">{result.explanation}</p>
            </div>
            <div className="bg-cream rounded-xl p-4 mb-6">
              <p className="text-base text-midnight font-semibold">Prochaine étape :</p>
              <p className="text-base text-gray-600">{result.nextStep}</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {result.eligible && (
                <Link
                  href="/wizard"
                  className="inline-block bg-gold text-white px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-white hover:text-gold border-2 border-gold transition uppercase tracking-wider text-center"
                >
                  Commencer la préapprobation
                </Link>
              )}
              <button
                onClick={restart}
                className="inline-block bg-cream text-midnight px-8 py-3.5 rounded-lg font-bold text-lg hover:bg-gray-200 transition text-center"
              >
                Recommencer le quiz
              </button>
            </div>
            <p className="text-sm text-gray-400 text-center mt-4">
              Source : <a href="https://laws-lois.justice.gc.ca/fra/lois/p-25.2/page-1.html" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">Loi P-25.2 — Justice Canada</a>
            </p>
          </div>
        )}

        <div className="bg-white rounded-2xl p-8 shadow-sm mt-8">
          <h2 className="text-xl font-extrabold text-midnight mb-4">La Loi sur l&apos;interdiction d&apos;achat expliquée simplement</h2>
          <p className="text-base text-gray-600 mb-4">
            Depuis le 1er janvier 2023, la <strong>Loi sur l&apos;interdiction d&apos;achat d&apos;immeubles résidentiels par des non-Canadiens</strong> empêche certaines personnes d&apos;acheter des propriétés résidentielles au Canada. Cette loi a été prolongée jusqu&apos;au <strong>1er janvier 2027</strong>.
          </p>
          <p className="text-base text-gray-600 mb-4">
            Cependant, de nombreuses <strong>exemptions</strong> existent : résidents permanents, réfugiés, travailleurs avec permis de 183+ jours, achats hors des grandes agglomérations, etc.
          </p>
          <p className="text-base text-gray-600">
            Article complet :{" "}
            <Link href="/blog/interdiction-achat-non-canadien-exemptions-2027" className="text-gold hover:underline font-semibold">
              Interdiction d&apos;achat non-canadien : toutes les exemptions 2027
            </Link>.
          </p>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "Quiz Éligibilité Achat Propriété Canada — guide-hypotheque.ca",
              description: "Vérifiez si vous pouvez acheter une propriété au Canada malgré la loi d'interdiction. Quiz gratuit basé sur la Loi P-25.2 et ses exemptions.",
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
