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
  },
  {
    num: "02",
    title: "Découvrez vos options",
    desc: "Nous analysons votre profil et identifions les meilleures offres.",
  },
  {
    num: "03",
    title: "Recevez des offres",
    desc: "2-3 courtiers spécialisés vous contactent dans les 24h.",
  },
  {
    num: "04",
    title: "Obtenez votre hypothèque",
    desc: "Choisissez la meilleure offre et devenez propriétaire.",
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
      <section className="bg-cream min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase text-xs tracking-[0.3em] text-gold mb-6">
              Guide-Hypotheque.ca
            </p>
            <h1 className="font-serif text-4xl md:text-6xl leading-tight mb-6">
              Obtenez Votre
              <br />
              Préapprobation
              <br />
              <em className="text-gold">en 5 Minutes</em>
            </h1>
            <p className="text-gray-500 max-w-lg mb-8 text-lg">
              Wizard gratuit pour immigrants au Canada. Découvrez combien vous pouvez emprunter et recevez des offres de courtiers spécialisés.
            </p>

            <Link
              href="/wizard"
              className="inline-block bg-gold text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gold-dark transition uppercase tracking-wider shadow-lg shadow-gold/25 mb-8"
            >
              Commencer le Wizard
            </Link>

            <ul className="space-y-2">
              {trustSignals.map((signal) => (
                <li key={signal.text} className="flex items-center gap-3 text-sm text-gray-600">
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
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                  </svg>
                </div>
                <h3 className="font-serif text-xl mb-2">Wizard Hypothèque</h3>
                <p className="text-sm text-gray-400">7 étapes simples vers votre hypothèque</p>
              </div>
              <div className="space-y-3 mb-6">
                {["Statut Immigration", "Durée au Canada", "Historique Crédit", "Revenu Annuel", "Apport Initial", "Province", "Vos Coordonnées"].map((step, i) => (
                  <div key={step} className="flex items-center gap-3 text-sm">
                    <span className="w-7 h-7 bg-cream rounded-full flex items-center justify-center text-xs font-medium text-gold">{i + 1}</span>
                    <span className="text-gray-600">{step}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/wizard"
                className="block w-full bg-gold text-white text-center py-3 rounded-xl font-medium hover:bg-gold-dark transition"
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
          <p className="text-center text-xs text-gray-400 uppercase tracking-wider mb-8">Nos partenaires bancaires</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["RBC", "TD", "CIBC", "BMO", "Scotiabank", "Nesto"].map((bank) => (
              <div key={bank} className="bg-gray-50 px-6 py-3 rounded-lg font-serif font-bold text-gray-400 text-lg hover:text-gold transition">
                {bank}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase text-xs tracking-[0.3em] text-gold mb-4 text-center">Témoignages</p>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-12">
            Ce qu&apos;ils <em className="text-gold">disent</em>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-cream rounded-2xl p-8">
                <div className="flex gap-0.5 text-gold mb-4">
                  {Array.from({ length: t.stars }, (_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-medium text-sm">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase text-xs tracking-[0.3em] text-gold mb-4 text-center">Processus</p>
          <h2 className="font-serif text-3xl md:text-4xl text-center mb-4">
            Comment ça <em className="text-gold">fonctionne ?</em>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-lg mx-auto">
            Un processus simple et gratuit pour obtenir votre hypothèque en tant qu&apos;immigrant au Canada.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="text-4xl font-serif font-bold text-gold mb-4">{step.num}</div>
                <h3 className="font-medium mb-2">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/wizard"
              className="inline-block bg-gold text-white px-10 py-4 rounded-full font-bold hover:bg-gold-dark transition uppercase tracking-wider"
            >
              Commencez Maintenant
            </Link>
          </div>
        </div>
      </section>

      {/* MINI FAQ */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="uppercase text-xs tracking-[0.3em] text-gold mb-4 text-center">Questions Rapides</p>
          <h2 className="font-serif text-3xl text-center mb-12">
            Vos questions <em className="text-gold">fréquentes</em>
          </h2>
          <div className="space-y-4 mb-10">
            {miniFaq.map((item) => (
              <div key={item.q} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="font-medium text-sm mb-2">{item.q}</h3>
                <p className="text-sm text-gray-500">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/faq" className="text-sm text-gold hover:underline">
              Voir plus de questions &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-6">
            Prêt à devenir <em className="text-gold">propriétaire ?</em>
          </h2>
          <p className="text-gray-500 mb-10 max-w-lg mx-auto">
            Rejoignez les milliers d&apos;immigrants qui ont obtenu leur hypothèque grâce à notre wizard gratuit.
          </p>
          <Link
            href="/wizard"
            className="inline-block bg-gold text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gold-dark transition uppercase tracking-wider shadow-lg shadow-gold/25"
          >
            Commencer le Wizard Gratuit
          </Link>
          <p className="text-xs text-gray-400 mt-4">Gratuit &bull; 5 minutes &bull; Sans engagement</p>
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
