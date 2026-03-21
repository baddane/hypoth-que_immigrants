import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos",
  description: "À propos de Guide Hypothèque Immigrants. Notre mission, expertise, partenaires.",
};

export default function AboutPage() {
  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <p className="uppercase text-xs tracking-[0.3em] text-gold mb-4">À Propos</p>
        <h1 className="font-serif text-3xl md:text-5xl mb-6">
          Notre <em className="text-gold">Mission</em>
        </h1>

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8 space-y-6 text-gray-600 leading-relaxed">
          <p className="text-lg">
            Guide Hypothèque Immigrants Canada est né d&apos;un constat simple : les immigrants au Canada
            manquent d&apos;informations claires et accessibles sur le processus hypothécaire.
          </p>
          <p>
            Notre mission est de devenir la référence francophone en matière d&apos;hypothèque pour les
            immigrants au Canada. Nous offrons des outils interactifs, des guides détaillés et des
            recommandations personnalisées pour aider chaque nouvel arrivant à réaliser son rêve de
            devenir propriétaire.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Expertise",
              desc: "Des années d'expérience dans le domaine hypothécaire et l'immigration canadienne.",
            },
            {
              title: "Indépendance",
              desc: "Nous comparons objectivement toutes les banques et courtiers pour votre bénéfice.",
            },
            {
              title: "Accessibilité",
              desc: "Tous nos outils et guides sont 100% gratuits et accessibles en français.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="font-serif text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gray-900 text-white rounded-2xl p-10 text-center">
          <h2 className="font-serif text-2xl mb-4">Nos Partenaires Bancaires</h2>
          <div className="flex flex-wrap justify-center gap-6 text-gold font-serif font-bold text-lg">
            {["RBC", "TD", "CIBC", "BMO", "Scotia", "Nesto"].map((bank) => (
              <span key={bank} className="bg-gray-800 px-5 py-3 rounded-lg">{bank}</span>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/contact"
            className="inline-block bg-gold text-white px-8 py-3.5 rounded-full font-medium hover:bg-gold-dark transition uppercase text-sm tracking-wider"
          >
            Nous Contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
