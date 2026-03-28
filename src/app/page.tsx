import Link from "next/link";

const trustSignals = [
  { text: "5 000+ immigrants approuvés", icon: "check" },
  { text: "Complètement gratuit", icon: "check" },
  { text: "5 minutes seulement", icon: "check" },
  { text: "Aucune carte de crédit requise", icon: "check" },
];

const testimonials = [
  {
    name: "Ahmad K.",
    role: "Immigrant depuis 2 ans",
    text: "J'ai obtenu mon hypothèque en 3 semaines ! Le wizard m'a connecté avec le bon courtier et tout s'est fait naturellement.",
    stars: 5,
  },
  {
    name: "Maria S.",
    role: "Travailleur Temporaire",
    text: "Process super facile, j'ai pensé que ça prendrait plus longtemps. En 5 minutes j'avais mes options et un courtier m'a appelé le lendemain.",
    stars: 5,
  },
  {
    name: "Jean-Pierre M.",
    role: "Résident Permanent",
    text: "Grâce à guide-hypotheque.ca, j'ai trouvé un taux incroyable. Le courtier connaissait parfaitement la situation des immigrants.",
    stars: 5,
  },
];

const steps = [
  {
    num: "01",
    title: "Répondez au Wizard",
    desc: "7 questions simples sur votre situation en 5 minutes.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Découvrez vos options",
    desc: "Nous analysons votre profil et identifions les meilleures offres.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Recevez des offres",
    desc: "2-3 courtiers spécialisés vous contactent dans les 24h.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Obtenez votre hypothèque",
    desc: "Choisissez la meilleure offre et devenez propriétaire.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
];

const miniFaq = [
  {
    q: "C'est vraiment gratuit ?",
    a: "Oui, 100% gratuit. Nous sommes rémunérés par nos partenaires bancaires.",
  },
  {
    q: "Combien de temps ça prend ?",
    a: "5 minutes pour le wizard. Vous recevez des offres dans les 24-48h.",
  },
  {
    q: "Serai-je approuvé ?",
    a: "Chaque situation est unique, mais la grande majorité reçoit au moins une offre.",
  },
];

export default function Home() {
  return (
    <>
      {/* HERO - ABOVE THE FOLD */}
      <section className="bg-light-blue min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase text-xs tracking-[0.3em] text-primary font-semibold mb-6">
              Guide-Hypotheque.ca
            </p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6 text-navy">
              Obtenez Votre
              <br />
              Préapprobation
              <br />
              <span className="text-primary">en 5 Minutes</span>
            </h1>
            <p className="text-dark/70 max-w-lg mb-8 text-lg">
              Wizard gratuit pour immigrants au Canada. Découvrez combien vous pouvez emprunter et recevez des offres de courtiers spécialisés.
            </p>

            <Link
              href="/wizard"
              className="inline-block bg-primary text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-primary border-2 border-primary transition uppercase tracking-wider mb-8"
            >
              Commencer le Wizard
            </Link>

            <ul className="space-y-2">
              {trustSignals.map((signal) => (
                <li key={signal.text} className="flex items-center gap-3 text-sm text-dark/70">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {signal.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <div className="bg-white rounded-xl p-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-light-blue rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">Wizard Hypothèque</h3>
                <p className="text-sm text-dark/50">7 étapes simples vers votre hypothèque</p>
              </div>
              <div className="space-y-3 mb-6">
                {["Statut Immigration", "Durée au Canada", "Historique Crédit", "Revenu Annuel", "Apport Initial", "Province", "Vos Coordonnées"].map((step, i) => (
                  <div key={step} className="flex items-center gap-3 text-sm">
                    <span className="w-7 h-7 bg-light-blue rounded-lg flex items-center justify-center text-xs font-semibold text-navy">{i + 1}</span>
                    <span className="text-dark/70">{step}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/wizard"
                className="block w-full bg-primary text-white text-center py-3 rounded-md font-semibold hover:bg-primary-dark transition"
              >
                Commencer maintenant
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF - Bank Partners */}
      <section className="border-y border-gray-200 bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-xs text-dark/40 uppercase tracking-wider font-medium mb-8">Nos partenaires bancaires</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["RBC", "TD", "CIBC", "BMO", "Scotiabank", "Nesto"].map((bank) => (
              <div key={bank} className="bg-light-blue px-6 py-3 rounded-lg font-bold text-navy/40 text-lg hover:text-primary transition">
                {bank}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase text-xs tracking-[0.3em] text-primary font-semibold mb-4 text-center">Témoignages</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-navy">
            Ce qu&apos;ils <span className="text-primary">disent</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-light-blue rounded-xl p-8">
                <div className="flex gap-0.5 text-accent-yellow mb-4">
                  {Array.from({ length: t.stars }, (_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
                </div>
                <p className="text-dark/70 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-sm text-navy">{t.name}</p>
                  <p className="text-xs text-dark/40">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase text-xs tracking-[0.3em] text-primary font-semibold mb-4 text-center">Processus</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-4">
            Comment ça <span className="text-primary">fonctionne ?</span>
          </h2>
          <p className="text-white/50 text-center mb-12 max-w-lg mx-auto">
            Un processus simple et gratuit pour obtenir votre hypothèque en tant qu&apos;immigrant au Canada.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="w-16 h-16 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                  {step.icon}
                </div>
                <div className="text-xs text-primary font-bold mb-2">{step.num}</div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-white/50">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/wizard"
              className="inline-block bg-primary text-white px-10 py-4 rounded-md font-bold hover:bg-white hover:text-primary border-2 border-primary transition uppercase tracking-wider"
            >
              Commencez Maintenant
            </Link>
          </div>
        </div>
      </section>

      {/* MINI FAQ */}
      <section className="py-20 bg-light-blue">
        <div className="max-w-3xl mx-auto px-6">
          <p className="uppercase text-xs tracking-[0.3em] text-primary font-semibold mb-4 text-center">Questions Rapides</p>
          <h2 className="text-3xl font-extrabold text-center mb-12 text-navy">
            Vos questions <span className="text-primary">fréquentes</span>
          </h2>
          <div className="space-y-4 mb-10">
            {miniFaq.map((item) => (
              <div key={item.q} className="bg-white rounded-lg p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
                <h3 className="font-semibold text-sm text-navy mb-2">{item.q}</h3>
                <p className="text-sm text-dark/60">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/faq" className="text-sm text-primary hover:underline font-medium">
              Voir plus de questions &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-navy">
            Prêt à devenir <span className="text-primary">propriétaire ?</span>
          </h2>
          <p className="text-dark/60 mb-10 max-w-lg mx-auto">
            Rejoignez les milliers d&apos;immigrants qui ont obtenu leur hypothèque grâce à notre wizard gratuit.
          </p>
          <Link
            href="/wizard"
            className="inline-block bg-primary text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-primary border-2 border-primary transition uppercase tracking-wider"
          >
            Commencer le Wizard Gratuit
          </Link>
          <p className="text-xs text-dark/40 mt-4">Gratuit &bull; 5 minutes &bull; Sans engagement</p>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "guide-hypotheque.ca",
            url: "https://guide-hypotheque.ca",
            description: "Service gratuit de préapprobation hypothécaire pour immigrants au Canada",
          }),
        }}
      />
    </>
  );
}
