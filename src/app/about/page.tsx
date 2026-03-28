import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos",
  description: "À propos de guide-hypotheque.ca. Notre mission, expertise, partenaires.",
};

export default function AboutPage() {
  return (
    <section className="py-20 bg-light-blue min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <p className="uppercase text-xs tracking-[0.3em] text-primary font-semibold mb-4">À Propos</p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-navy mb-6">
          Notre <span className="text-primary">Mission</span>
        </h1>

        <div className="bg-white rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] mb-8 space-y-6 text-dark/70 leading-relaxed">
          <p className="text-lg">
            guide-hypotheque.ca est né d&apos;un constat simple : les immigrants au Canada
            manquent d&apos;un accompagnement personnalisé pour obtenir leur hypothèque.
          </p>
          <p>
            Notre mission est de connecter chaque immigrant avec les meilleurs courtiers et banques
            spécialisés, gratuitement. Notre wizard analyse votre profil en 5 minutes et vous met
            en relation avec des experts qui comprennent votre situation unique.
          </p>
          <p>
            Plus de 5 000 immigrants ont déjà utilisé notre service pour obtenir leur préapprobation
            hypothécaire et devenir propriétaires au Canada.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            {
              title: "Gratuit à 100%",
              desc: "Notre service est entièrement gratuit pour vous. Nous sommes rémunérés par nos partenaires bancaires.",
            },
            {
              title: "Courtiers Spécialisés",
              desc: "Nous travaillons exclusivement avec des courtiers qui comprennent la réalité des immigrants.",
            },
            {
              title: "Confidentiel",
              desc: "Conforme PIPEDA. Vos données ne sont partagées qu'avec les partenaires que vous autorisez.",
            },
          ].map((item) => (
            <div key={item.title} className="bg-white rounded-lg p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-4">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-navy mb-2">{item.title}</h3>
              <p className="text-sm text-dark/50">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-navy text-white rounded-xl p-10 text-center mb-12">
          <h2 className="text-2xl font-extrabold mb-4">Nos Partenaires</h2>
          <p className="text-white/50 text-sm mb-6">Les plus grandes institutions financières du Canada</p>
          <div className="flex flex-wrap justify-center gap-6 text-white font-bold text-lg">
            {["RBC", "TD", "CIBC", "BMO", "Scotia", "Nesto", "Ratehub"].map((bank) => (
              <span key={bank} className="bg-white/10 px-5 py-3 rounded-lg">{bank}</span>
            ))}
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/wizard"
            className="inline-block bg-primary text-white px-8 py-3.5 rounded-md font-bold hover:bg-primary-dark transition uppercase tracking-wider"
          >
            Commencer le Wizard Gratuit
          </Link>
        </div>
      </div>
    </section>
  );
}
