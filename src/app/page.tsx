import Link from "next/link";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

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
      <section className="bg-paper min-h-[88vh] flex items-center relative overflow-hidden">
        <div className="max-w-3xl mx-auto px-6 py-24 text-center relative z-10">
          <span className="inline-block eyebrow border border-sand bg-cream px-4 py-2 rounded-md mb-8">
            Hypothèque Canada &middot; Guides gratuits &middot; Courtiers partenaires
          </span>
          <h1 className="text-5xl md:text-7xl leading-[1.05] mb-8 text-ink">
            L&apos;Accès à la{" "}
            <span className="italic text-gold">Propriété</span>
            <br className="hidden md:block" /> sans Frontières.
          </h1>
          <p className="text-grey max-w-xl mx-auto mb-10 text-lg md:text-xl leading-relaxed">
            La référence francophone de l&apos;hypothèque pour nouveaux arrivants au Canada. Guides complets, outils gratuits et courtiers partenaires pour concrétiser votre projet.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/wizard"
              className="inline-flex items-center justify-center gap-2 bg-gold text-ink px-8 py-4 rounded-md font-semibold text-base uppercase tracking-wide hover:bg-ink hover:text-gold border border-gold transition"
            >
              Préapprobation Gratuite <span aria-hidden="true">&rarr;</span>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center bg-transparent text-ink px-8 py-4 rounded-md font-semibold text-base uppercase tracking-wide border border-sand hover:border-ink transition"
            >
              Découvrir les guides
            </Link>
          </div>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
            {trustSignals.map((signal) => (
              <li key={signal.text} className="flex items-center gap-2 text-sm text-grey">
                <span className="w-5 h-5 bg-gold-light rounded-full flex items-center justify-center flex-shrink-0">
                  <svg className="w-3 h-3 text-gold-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {signal.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-sand bg-cream py-12">
        <div className="max-w-[1240px] mx-auto px-6">
          <p className="text-center text-sm text-gray-400 uppercase tracking-wider font-semibold mb-8">Nos partenaires bancaires</p>
          <div className="flex flex-wrap justify-center gap-8">
            {["RBC", "TD", "CIBC", "BMO", "Scotiabank", "Nesto"].map((bank) => (
              <div key={bank} className="bg-white px-6 py-3 rounded-xl font-bold text-grey text-lg hover:text-gold transition border border-sand">
                {bank}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-paper">
        <div className="max-w-[1240px] mx-auto px-6">
          <p className="eyebrow mb-4 block text-center">Témoignages</p>
          <h2 className="text-3xl md:text-4xl text-center mb-12 text-ink">
            Ce qu&apos;ils <span className="italic text-gold">disent</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-cream rounded-2xl p-8 border border-sand">
                <div className="flex gap-0.5 text-gold mb-4">
                  {Array.from({ length: t.stars }, (_, i) => (
                    <span key={i}>&#9733;</span>
                  ))}
                </div>
                <p className="text-gray-600 text-base leading-relaxed mb-6">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="font-semibold text-base text-midnight">{t.name}</p>
                  <p className="text-sm text-gray-400">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-midnight text-white">
        <div className="max-w-[1240px] mx-auto px-6">
          <p className="eyebrow mb-4 block text-center">Processus</p>
          <h2 className="text-3xl md:text-4xl text-center mb-4 font-extrabold">
            Comment ça <span className="text-gold">fonctionne ?</span>
          </h2>
          <p className="text-gray-400 text-center mb-12 max-w-lg mx-auto text-lg">
            Un processus simple et gratuit pour obtenir votre hypothèque en tant qu&apos;immigrant au Canada.
          </p>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.num} className="text-center">
                <div className="text-5xl font-extrabold text-gold mb-4">{step.num}</div>
                <h3 className="text-lg font-semibold mb-2 text-white">{step.title}</h3>
                <p className="text-base text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/wizard"
              className="inline-block bg-gold text-ink px-10 py-4 rounded-lg font-bold hover:bg-white hover:text-gold border-2 border-gold transition uppercase tracking-wider"
            >
              Commencez Maintenant
            </Link>
          </div>
        </div>
      </section>

      {/* MINI FAQ */}
      <section className="py-20 bg-cream">
        <div className="max-w-3xl mx-auto px-6">
          <p className="eyebrow mb-4 block text-center">Questions Rapides</p>
          <h2 className="text-3xl text-center mb-12 font-extrabold text-midnight">
            Vos questions <span className="text-gold">fréquentes</span>
          </h2>
          <div className="space-y-4 mb-10">
            {miniFaq.map((item) => (
              <div key={item.q} className="bg-white rounded-2xl p-6 border border-sand">
                <h3 className="font-semibold text-base mb-2 text-midnight">{item.q}</h3>
                <p className="text-base text-gray-500">{item.a}</p>
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

      {/* FINAL CTA */}
      <section className="py-20 bg-paper">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl mb-6 text-ink">
            Prêt à devenir <span className="italic text-gold">propriétaire ?</span>
          </h2>
          <p className="text-gray-500 mb-10 max-w-lg mx-auto text-lg">
            Rejoignez les milliers d&apos;immigrants qui ont obtenu leur hypothèque grâce à notre wizard gratuit.
          </p>
          <Link
            href="/wizard"
            className="inline-block bg-gold text-ink px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-gold border-2 border-gold transition uppercase tracking-wider"
          >
            Commencer le Wizard Gratuit
          </Link>
          <p className="text-sm text-gray-400 mt-4">Gratuit &bull; 5 minutes &bull; Sans engagement</p>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: SITE_NAME,
            url: SITE_URL,
            description: "Service gratuit de préapprobation hypothécaire pour immigrants au Canada",
          }),
        }}
      />
    </>
  );
}
