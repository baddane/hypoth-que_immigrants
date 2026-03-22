"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function MerciContent() {
  const searchParams = useSearchParams();
  const prenom = searchParams.get("prenom") || "";
  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-2xl mx-auto px-6">
        {/* Confirmation */}
        <div className="bg-white rounded-2xl p-10 shadow-sm text-center mb-8">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="font-serif text-3xl md:text-4xl mb-4">
            C&apos;est fait{prenom ? `, ${prenom}` : ""} !
          </h1>
          <p className="text-gray-500 mb-6 max-w-md mx-auto">
            Nous avons reçu vos informations. Nos courtiers spécialisés vous contacteront très bientôt avec des offres personnalisées.
          </p>

          <div className="bg-cream rounded-xl p-6 inline-block">
            <p className="text-sm font-medium mb-1">Vérifiez votre email et votre téléphone</p>
            <p className="text-xs text-gray-400">Un courtier vous contactera dans les 24 prochaines heures.</p>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="font-serif text-xl mb-6">Prochaines étapes</h2>
          <div className="space-y-6">
            {[
              {
                status: "done",
                time: "Maintenant",
                title: "Vérification de votre profil",
                desc: "Nous analysons vos réponses et identifions les meilleures options.",
              },
              {
                status: "pending",
                time: "Dans 24h",
                title: "Contact des courtiers",
                desc: "2-3 courtiers spécialisés vous appelleront avec des offres personnalisées.",
              },
              {
                status: "pending",
                time: "Dans 48h",
                title: "Vous aurez 2-3 offres",
                desc: "Comparez les offres et choisissez celle qui vous convient le mieux.",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    item.status === "done" ? "bg-green-100" : "bg-gray-100"
                  }`}>
                    {item.status === "done" ? (
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    )}
                  </div>
                  {i < 2 && <div className="w-px h-8 bg-gray-200 mt-1" />}
                </div>
                <div>
                  <span className="text-xs text-gold font-medium">{item.time}</span>
                  <h3 className="font-medium text-sm">{item.title}</h3>
                  <p className="text-xs text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Nurture / Resources */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <h2 className="font-serif text-xl mb-6">En attendant, <em className="text-gold">préparez-vous</em></h2>
          <div className="space-y-4">
            <Link
              href="/blog/preapprobation-hypotheque-immigrant"
              className="flex items-center gap-4 p-4 bg-cream rounded-xl hover:bg-gold/10 transition group"
            >
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium group-hover:text-gold transition">Préapprobation : Documents et Étapes</h3>
                <p className="text-xs text-gray-400">Checklist complète pour accélérer votre approbation</p>
              </div>
            </Link>

            <Link
              href="/blog/hypotheque-travailleur-temporaire-5pourcent"
              className="flex items-center gap-4 p-4 bg-cream rounded-xl hover:bg-gold/10 transition group"
            >
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <div>
                <h3 className="text-sm font-medium group-hover:text-gold transition">Les Erreurs À Éviter</h3>
                <p className="text-xs text-gray-400">Guide complet pour maximiser vos chances</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Support */}
        <div className="text-center">
          <p className="text-sm text-gray-400 mb-2">Des questions ?</p>
          <Link href="/contact" className="text-gold text-sm hover:underline">
            Contactez notre support &rarr;
          </Link>
          <div className="flex items-center justify-center gap-4 mt-6 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <span className="text-green-500">&#10003;</span> Données sécurisées
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">&#10003;</span> Désinscription facile
            </span>
            <span className="flex items-center gap-1">
              <span className="text-green-500">&#10003;</span> Pas de spam
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function MerciPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-cream flex items-center justify-center"><p className="text-gray-400">Chargement...</p></div>}>
      <MerciContent />
    </Suspense>
  );
}
