import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/constants";
import ScrollReveal from "@/components/ScrollReveal";

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
      {/* HERO */}
      <section className="bg-white min-h-[90vh] flex items-center">
        <div className="max-w-[1240px] mx-auto px-6 py-20 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase text-xs tracking-[0.3em] text-gold font-semibold mb-6">
              Guide-Hypotheque.ca
            </p>
            <h1 className="text-4xl md:text-6xl leading-tight mb-6 font-extrabold text-midnight">
              Obtenez Votre
              <br />
              Préapprobation
              <br />
              <span className="text-gold">en 5 Minutes</span>
            </h1>
            <p className="text-gray-500 max-w-lg mb-8 text-lg">
              Wizard gratuit pour immigrants au Canada. Découvrez combien vous pouvez emprunter et recevez des offres de courtiers spécialisés.
            </p>

            <Link
              href="/wizard"
              className="inline-block bg-gold text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gold border-2 border-gold transition uppercase tracking-wider mb-8"
            >
              Commencer le Wizard
            </Link>

            <ul className="space-y-3">
              {trustSignals.map((signal) => (
                <li key={signal.text} className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-6 h-6 bg-gold-light rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {signal.text}
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden md:block">
            <div className="bg-white rounded-[30px] p-8 shadow-[0_4px_16px_rgba(0,0,0,0.1)] border border-gray-200">
              <div className="text-center mb-6">
                <div className="w-20 h-20 bg-gold-light rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
                  </svg>
                </div>
                <h3 className="text-xl mb-2 font-extrabold text-midnight">Wizard Hypothèque</h3>
                <p className="text-sm text-gray-400">7 étapes simples vers votre hypothèque</p>
              </div>
              <div className="space-y-3 mb-6">
                {["Statut Immigration", "Durée au Canada", "Historique Crédit", "Revenu Annuel", "Apport Initial", "Province", "Vos Coordonnées"].map((step, i) => (
                  <div key={step} className="flex items-center gap-3 text-sm">
                    <span className="w-8 h-8 bg-gold-light rounded-lg flex items-center justify-center text-xs font-bold text-gold">{i + 1}</span>
                    <span className="text-gray-600">{step}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/wizard"
                className="block w-full bg-gold text-white text-center py-3.5 rounded-lg font-semibold hover:bg-white hover:text-gold border border-gold transition"
              >
                Commencer maintenant
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-gray-200 bg-cream py-12">
        <div className="max-w-[1240px] mx-auto px-6">
          <p className="text-center text-xs text-gray-400 uppercase tracking-wider font-semibold mb-8">Nos partenaires bancaires</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["RBC", "TD", "CIBC", "BMO", "Scotiabank", "Nesto"].map((bank) => (
              <div key={bank} className="bg-white px-6 py-3 rounded-2xl font-extrabold text-gray-400 text-lg hover:text-gold transition border border-gray-100">
                {bank}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <ScrollReveal>
      <section className="py-20 bg-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <p className="uppercase text-xs tracking-[0.3em] text-gold font-semibold mb-4 text-center">Témoignages</p>
          <h2 className="text-3xl md:text-4xl text-center mb-12 font-extrabold text-midnight">
            Ce qu&apos;ils <span className="text-gold">disent</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-cream rounded-[30px] p-8 border border-gray-100">
                <div className="flex gap-0.5 text-gold mb-4">
                  {Array.from({ length: t.stars }, (_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-sm text-midnight">{t.name}</p>
                  <p className="text-xs text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      </ScrollReveal>

      {/* HOW IT WORKS */}
      <ScrollReveal>
      <section className="py-20 bg-midnight text-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <p className="uppercase text-xs tracking-[0.3em] text-gold font-semibold mb-4 text-center">Processus</p>
          <h2 className="text-3xl md:text-4xl text-center mb-4 font-extrabold">
            Comment ça <span className="text-gold">fonctionne ?</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-lg mx-auto">
            Un processus simple et gratuit pour obtenir votre hypothèque en tant qu&apos;immigrant au Canada.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="text-5xl font-extrabold text-gold mb-4">{step.num}</div>
                <h3 className="font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/wizard"
              className="inline-block bg-gold text-white px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-gold border-2 border-gold transition uppercase tracking-wider"
            >
              Commencez Maintenant
            </Link>
          </div>
        </div>
      </section>

      </ScrollReveal>

      {/* MINI FAQ */}
      <ScrollReveal>
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="uppercase text-xs tracking-[0.3em] text-gold font-semibold mb-4 text-center">Questions Rapides</p>
          <h2 className="text-3xl text-center mb-12 font-extrabold text-midnight">
            Vos questions <span className="text-gold">fréquentes</span>
          </h2>
          <div className="space-y-4 mb-10">
            {miniFaq.map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-6 border border-gray-100">
                <h3 className="font-semibold text-sm mb-2 text-midnight">{item.q}</h3>
                <p className="text-sm text-gray-500">{item.a}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/faq" className="text-sm text-gold font-semibold hover:underline">
              Voir plus de questions &rarr;
            </Link>
          </div>
        </div>
      </section>

      </ScrollReveal>

      {/* FINAL CTA */}
      <ScrollReveal>
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl mb-6 font-extrabold text-midnight">
            Prêt à devenir <span className="text-gold">propriétaire ?</span>
          </h2>
          <p className="text-gray-500 mb-10 max-w-lg mx-auto">
            Rejoignez les milliers d&apos;immigrants qui ont obtenu leur hypothèque grâce à notre wizard gratuit.
          </p>
          <Link
            href="/wizard"
            className="inline-block bg-gold text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gold border-2 border-gold transition uppercase tracking-wider"
          >
            Commencer le Wizard Gratuit
          </Link>
          <p className="text-xs text-gray-400 mt-4">Gratuit &bull; 5 minutes &bull; Sans engagement</p>
        </div>
      </section>

      </ScrollReveal>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_URL,
              description: "Service gratuit de préapprobation hypothécaire pour immigrants au Canada",
              logo: `${SITE_URL}/icon.png`,
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "customer service",
                availableLanguage: ["French", "English"],
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: SITE_NAME,
              url: SITE_URL,
              inLanguage: "fr-CA",
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE_URL}/blog?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: miniFaq.map((item) => ({
                "@type": "Question",
                name: item.q,
                acceptedAnswer: { "@type": "Answer", text: item.a },
              })),
            },
          ]),
        }}
      />
    </>
  );
}
