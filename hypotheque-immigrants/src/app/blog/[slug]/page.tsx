import Link from "next/link";
import { blogPosts } from "@/data/banks";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gold transition">Accueil</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gold transition">Blog</Link>
          <span>/</span>
          <span className="text-gray-600">{post.category}</span>
        </nav>

        <span className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full uppercase tracking-wider">{post.category}</span>
        <h1 className="font-serif text-3xl md:text-4xl mt-4 mb-4">{post.title}</h1>
        <p className="text-gray-500 mb-8">{post.description}</p>
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-12">
          <span>{post.readTime} de lecture</span>
          <span>&bull;</span>
          <span>Mis à jour récemment</span>
        </div>

        {/* Article Content */}
        <article className="prose prose-gray max-w-none">
          <div className="bg-white rounded-xl p-8 shadow-sm mb-8 space-y-6 text-gray-600 leading-relaxed">
            <p>
              Ce guide couvre tout ce que vous devez savoir sur <strong>{post.title.toLowerCase()}</strong>.
              En tant qu&apos;immigrant au Canada, obtenir une hypothèque peut sembler complexe,
              mais avec les bonnes informations et la bonne préparation, c&apos;est tout à fait réalisable.
            </p>

            <h2 className="font-serif text-xl text-gray-900">Comprendre les bases</h2>
            <p>
              Le marché hypothécaire canadien offre plusieurs options pour les immigrants et les nouveaux arrivants.
              Les grandes banques canadiennes ont développé des programmes spécifiques pour faciliter l&apos;accès
              à la propriété pour les immigrants.
            </p>

            {/* Wizard CTA #1 */}
            <div className="bg-gold-light rounded-xl p-6 not-prose">
              <p className="font-medium text-sm mb-2">Découvrez votre capacité d&apos;emprunt</p>
              <p className="text-xs text-gray-500 mb-3">Notre wizard gratuit analyse votre situation en 5 minutes.</p>
              <Link href="/wizard" className="inline-block bg-gold text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gold-dark transition">
                Commencer le Wizard &rarr;
              </Link>
            </div>

            <h2 className="font-serif text-xl text-gray-900">Points clés à retenir</h2>
            <ul className="space-y-2">
              <li>Les grandes banques ont des programmes spéciaux pour les nouveaux arrivants</li>
              <li>L&apos;apport initial minimum est généralement de 5% (avec assurance SCHL)</li>
              <li>Le ratio d&apos;endettement brut (GDS) ne doit pas dépasser 32%</li>
              <li>Le ratio d&apos;endettement total (TDS) ne doit pas dépasser 40%</li>
              <li>Certaines banques acceptent les clients sans historique de crédit canadien</li>
            </ul>

            <h2 className="font-serif text-xl text-gray-900">Ce que vous devez préparer</h2>
            <p>
              Pour maximiser vos chances d&apos;approbation, préparez les documents suivants : passeport valide,
              carte de résidence permanente ou permis de travail, preuve de revenus, relevés bancaires
              des 3 derniers mois, et preuve d&apos;apport initial.
            </p>

            {/* Wizard CTA #2 */}
            <div className="bg-gray-900 rounded-xl p-6 text-white not-prose">
              <p className="font-medium text-sm mb-2">Prêt à passer à l&apos;action ?</p>
              <p className="text-xs text-gray-400 mb-3">Recevez des offres personnalisées de courtiers spécialisés en hypothèques pour immigrants.</p>
              <Link href="/wizard" className="inline-block bg-gold text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gold-dark transition">
                Commencer le Wizard Gratuit &rarr;
              </Link>
            </div>

            <h2 className="font-serif text-xl text-gray-900">Les meilleures options pour vous</h2>
            <p>
              Chaque situation est unique. Votre statut d&apos;immigration, votre historique de crédit, votre revenu
              et votre province affectent tous vos options. C&apos;est pourquoi notre{" "}
              <Link href="/wizard" className="text-gold hover:underline">wizard interactif</Link> analyse
              votre profil spécifique pour vous connecter aux meilleurs courtiers.
            </p>
          </div>
        </article>

        {/* Final CTA */}
        <div className="bg-gold-light rounded-xl p-8 text-center mb-12">
          <h3 className="font-serif text-xl mb-3">Obtenez votre préapprobation en 5 minutes</h3>
          <p className="text-sm text-gray-500 mb-6">Gratuit, confidentiel, sans engagement.</p>
          <Link
            href="/wizard"
            className="inline-block bg-gold text-white px-8 py-3.5 rounded-full font-bold hover:bg-gold-dark transition uppercase tracking-wider"
          >
            Commencer le Wizard
          </Link>
        </div>

        {/* Related Posts */}
        <h3 className="font-serif text-xl mb-6">Articles <em className="text-gold">connexes</em></h3>
        <div className="grid md:grid-cols-3 gap-4">
          {otherPosts.map((p) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition group"
            >
              <span className="text-[10px] bg-gold/10 text-gold px-2 py-0.5 rounded">{p.category}</span>
              <h4 className="font-serif text-sm mt-2 group-hover:text-gold transition line-clamp-2">{p.title}</h4>
            </Link>
          ))}
        </div>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: post.title,
              description: post.description,
              author: {
                "@type": "Organization",
                name: "guide-hypotheque.ca",
              },
            }),
          }}
        />
      </div>
    </section>
  );
}
