import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { wizardVariants } from "@/data/wizardVariants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides Hypothèque Immigrants Canada — 25 Articles",
  description:
    "Articles et guides complets sur l'hypothèque pour immigrants au Canada. Travailleurs temporaires, étudiants, résidents permanents. Tout pour devenir propriétaire.",
  openGraph: {
    title: "Guides Hypothèque Immigrants Canada",
    description: "22 guides complets pour obtenir votre hypothèque au Canada en tant qu'immigrant.",
    url: "https://guide-hypotheque.ca/blog",
    type: "website",
  },
};

// Group posts by category
function groupByCategory(posts: typeof blogPosts) {
  const groups: Record<string, typeof blogPosts> = {};
  for (const post of posts) {
    if (!groups[post.category]) groups[post.category] = [];
    groups[post.category].push(post);
  }
  return groups;
}

// Category display order
const categoryOrder = [
  "Guide Principal",
  "Statut Immigration",
  "Province",
  "Crédit",
  "Situation Spéciale",
  "Processus",
  "Financement",
  "Achat",
  "Taux",
  "Gestion",
  "Légal",
];

export default function BlogPage() {
  const pillar = blogPosts[0];
  const otherPosts = blogPosts.slice(1);
  const grouped = groupByCategory(otherPosts);

  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <p className="uppercase text-xs tracking-[0.3em] text-gold mb-4">Blog & Guides</p>
        <h1 className="font-serif text-3xl md:text-5xl mb-4">
          Guides <em className="text-gold">Hypothèque</em> pour Immigrants
        </h1>
        <p className="text-gray-500 mb-12 max-w-xl">
          {blogPosts.length} guides complets pour obtenir votre hypothèque au Canada en tant qu&apos;immigrant. Chaque guide vous rapproche de votre propriété.
        </p>

        {/* Pillar Article - Featured */}
        <Link
          href={`/blog/${pillar.slug}`}
          className="block bg-gray-900 text-white rounded-2xl p-10 mb-12 hover:bg-gray-800 transition group"
        >
          <span className="text-xs bg-gold text-white px-3 py-1 rounded-full uppercase tracking-wider">
            {pillar.category}
          </span>
          <h2 className="font-serif text-2xl md:text-3xl mt-4 mb-3 group-hover:text-gold transition">
            {pillar.title}
          </h2>
          <p className="text-gray-400 mb-4 max-w-xl">{pillar.subtitle}</p>
          <span className="text-xs text-gray-500">{pillar.readTime} de lecture</span>
        </Link>

        {/* Wizard Variants - Quick access */}
        <div className="mb-12">
          <h2 className="font-serif text-xl mb-6">
            Wizards <em className="text-gold">spécialisés</em>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {wizardVariants.map((v) => (
              <Link
                key={v.slug}
                href={`/wizard/${v.slug}`}
                className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition group text-center"
              >
                <span className="text-2xl block mb-2">{v.badgeEmoji}</span>
                <span className="text-sm font-medium group-hover:text-gold transition">{v.badge}</span>
              </Link>
            ))}
          </div>
        </div>

        {/* Articles by category */}
        {categoryOrder.map((cat) => {
          const posts = grouped[cat];
          if (!posts || posts.length === 0) return null;
          return (
            <div key={cat} className="mb-12">
              <h2 className="font-serif text-xl mb-6">
                {cat}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition group"
                  >
                    <span className="text-[10px] bg-gold/10 text-gold px-2 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                    <h3 className="font-serif text-lg mt-3 mb-2 group-hover:text-gold transition">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">{post.subtitle}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <span>{post.readTime} de lecture</span>
                      {post.wizardVariant && (
                        <>
                          <span>&bull;</span>
                          <span className="text-gold">Wizard dédié</span>
                        </>
                      )}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}

        {/* CTA */}
        <div className="bg-gold-light rounded-2xl p-10 text-center">
          <h2 className="font-serif text-2xl mb-4">Prêt à passer à l&apos;action ?</h2>
          <p className="text-sm text-gray-500 mb-6">
            Découvrez combien vous pouvez emprunter en 5 minutes avec notre wizard gratuit.
          </p>
          <Link
            href="/wizard"
            className="inline-block bg-gold text-white px-8 py-3.5 rounded-full font-bold hover:bg-gold-dark transition uppercase tracking-wider"
          >
            Commencer le Wizard
          </Link>
        </div>
      </div>
    </section>
  );
}
