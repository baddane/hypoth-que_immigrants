import Link from "next/link";

const stats = [
  { value: "10K+", label: "Immigrants Aidés" },
  { value: "7", label: "Grandes Banques" },
  { value: "5 min", label: "Pour Votre Bilan" },
  { value: "100%", label: "Gratuit" },
];

const features = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
      </svg>
    ),
    title: "Analyse Personnalisée",
    description:
      "Notre wizard analyse votre situation unique : statut d'immigration, crédit, revenus et province pour des recommandations sur mesure.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21" />
      </svg>
    ),
    title: "Comparaison Banques Réelles",
    description:
      "Comparez les taux, délais et programmes spéciaux pour immigrants des 7 plus grandes banques canadiennes.",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Conseils Pratiques",
    description:
      "Recevez des conseils adaptés à votre profil : documents à préparer, erreurs à éviter et étapes concrètes.",
  },
];

const provinces = [
  { code: "ON", name: "Ontario", tag: "Marché Principal" },
  { code: "QC", name: "Québec", tag: "Règles Spécifiques" },
  { code: "BC", name: "Colombie-Brit.", tag: "Marché Actif" },
  { code: "AB", name: "Alberta", tag: "Abordable" },
  { code: "MB", name: "Manitoba", tag: "En Croissance" },
  { code: "SK", name: "Saskatchewan", tag: "Opportunités" },
  { code: "NS", name: "Nouvelle-Écosse", tag: "Immigration" },
  { code: "NB", name: "Nouveau-Bruns.", tag: "Francophone" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-cream min-h-[80vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20 text-center">
          <p className="uppercase text-xs tracking-[0.3em] text-gold mb-6">
            Hypothèque &bull; Immigration &bull; Canada
          </p>
          <h1 className="font-serif text-5xl md:text-7xl leading-tight mb-6">
            Obtenez une Hypothèque
            <br />
            <em className="text-gold">au Canada</em> en tant qu&apos;Immigrant.
          </h1>
          <p className="text-gray-500 max-w-2xl mx-auto mb-10 text-lg">
            La référence francophone de l&apos;hypothèque pour immigrants au Canada.
            Guides complets, outils interactifs et recommandations gratuites pour optimiser votre situation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/wizard"
              className="bg-gold text-white px-8 py-3.5 rounded-full font-medium hover:bg-gold-dark transition uppercase text-sm tracking-wider"
            >
              Commencer le Wizard
            </Link>
            <Link
              href="/blog"
              className="border border-gray-900 text-gray-900 px-8 py-3.5 rounded-full font-medium hover:bg-gray-900 hover:text-white transition uppercase text-sm tracking-wider"
            >
              Découvrir les Guides
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl font-serif font-bold mb-1">{stat.value}</div>
              <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <p className="uppercase text-xs tracking-[0.3em] text-gold mb-4">Nos Avantages</p>
          <h2 className="font-serif text-3xl md:text-5xl leading-tight mb-12 max-w-xl">
            Une approche rigoureuse pour des{" "}
            <em className="text-gold">résultats concrets.</em>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-cream rounded-2xl p-8 hover:shadow-lg transition"
              >
                <div className="w-12 h-12 bg-gold/10 rounded-xl flex items-center justify-center text-gold mb-5">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-xl mb-3">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Provinces Grid */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl mb-4">
            Provinces <em className="text-gold">Couvertes</em>
          </h2>
          <p className="text-gray-400 mb-12 max-w-xl mx-auto">
            Explorez nos guides par province. Chaque province a ses spécificités en matière d&apos;hypothèque, de taxes et de programmes pour immigrants.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {provinces.map((prov) => (
              <Link
                key={prov.code}
                href="/wizard"
                className="bg-gray-800 rounded-xl p-6 text-left hover:bg-gray-700 transition group"
              >
                <div className="text-2xl font-serif font-bold text-gold mb-1">{prov.code}</div>
                <div className="font-medium mb-2">{prov.name}</div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">{prov.tag}</div>
              </Link>
            ))}
          </div>

          <Link
            href="/wizard"
            className="inline-block mt-10 border border-gold text-gold px-6 py-3 rounded-full text-sm font-medium hover:bg-gold hover:text-white transition uppercase tracking-wider"
          >
            Voir toutes les provinces
          </Link>
        </div>
      </section>

      {/* Split Section */}
      <section className="py-20 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="uppercase text-xs tracking-[0.3em] text-gold mb-4">Service Gratuit</p>
            <h2 className="font-serif text-3xl md:text-4xl leading-tight mb-6">
              Votre Bilan Hypothécaire{" "}
              <em className="text-gold">Personnalisé.</em>
            </h2>
            <p className="text-gray-500 mb-8 leading-relaxed">
              Découvrez votre situation en 5 minutes. Nos experts analysent votre profil
              et vous envoient des recommandations concrètes, gratuitement.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Analyse personnalisée selon vos critères",
                "Taux optimal identifié pour votre profil",
                "Banques les plus adaptées recommandées",
                "Sans engagement · 100% gratuit",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="text-gold mt-0.5">&#10003;</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/wizard"
              className="inline-block bg-gray-900 text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-800 transition uppercase text-sm tracking-wider"
            >
              Démarrer mon bilan gratuit
            </Link>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm">
            <p className="uppercase text-xs tracking-[0.3em] text-gold mb-6">Ce que vous recevez</p>
            <div className="space-y-6">
              {[
                { title: "Analyse de votre capacité d'emprunt", desc: "Calcul basé sur vos revenus et votre situation." },
                { title: "Comparatif banques personnalisé", desc: "Les 3-5 banques les plus adaptées à votre profil." },
                { title: "Plan d'action prioritaire", desc: "Étapes concrètes et timeline réaliste de 1 à 3 mois." },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-4">
                  <span className="w-8 h-8 bg-gold/10 rounded-lg flex items-center justify-center text-gold flex-shrink-0">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <div>
                    <h4 className="font-medium text-sm mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="text-gold text-4xl mb-6">&ldquo;</div>
          <blockquote className="font-serif text-2xl md:text-3xl leading-relaxed italic text-gray-700 mb-8">
            Devenir la référence francophone de l&apos;hypothèque pour immigrants — le seul site qui répond précisément à chaque question d&apos;un immigrant qui cherche à acheter sa maison au Canada.
          </blockquote>
          <div className="flex items-center justify-center gap-6 text-xs text-gray-400 uppercase tracking-wider">
            <span>Accompagnement</span>
            <span>&bull;</span>
            <span>Expertise</span>
            <span>&bull;</span>
            <span>Confiance</span>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gray-900 rounded-2xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-10">
            <div className="flex-1">
              <p className="uppercase text-xs tracking-[0.3em] text-gold mb-4">Newsletter Gratuite</p>
              <h2 className="font-serif text-2xl md:text-3xl text-white leading-tight mb-4">
                Restez informé des évolutions{" "}
                <em className="text-gold">hypothécaires.</em>
              </h2>
              <p className="text-gray-400 text-sm mb-6">
                Rejoignez des milliers d&apos;immigrants et recevez nos analyses exclusives directement dans votre boîte mail.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="votre@email.com"
                  className="flex-1 bg-gray-800 border border-gray-700 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-500 focus:outline-none focus:border-gold"
                />
                <button className="bg-gold text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-gold-dark transition flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                  S&apos;abonner
                </button>
              </div>
            </div>
            <div className="hidden md:flex w-32 h-32 bg-gray-800 rounded-full items-center justify-center">
              <svg className="w-16 h-16 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Guide Hypothèque Immigrants Canada",
            url: "https://hypotheque-immigrants-canada.com",
            description: "Guide complet sur hypothèque pour immigrants au Canada",
          }),
        }}
      />
    </>
  );
}
