import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { wizardVariants } from "@/data/wizardVariants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides Hypothèque Immigrants Canada — 22 Articles",
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
    <section className="py-20 bg-light-blue min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <p className="uppercase text-xs tracking-[0.3em] text-primary font-semibold mb-4">Blog & Guides</p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-navy mb-4">
          Guides <span className="text-primary">Hypothèque</span> pour Immigrants
        </h1>
        <p className="text-dark/60 mb-12 max-w-xl">
          {blogPosts.length} guides complets pour obtenir votre hypothèque au Canada en tant qu&apos;immigrant. Chaque guide vous rapproche de votre propriété.
        </p>

        {/* Pillar Article - Featured */}
        <Link
          href={`/blog/${pillar.slug}`}
          className="block bg-navy text-white rounded-xl p-10 mb-12 hover:bg-navy-light transition group"
        >
          <span className="text-xs bg-primary text-white px-3 py-1 rounded-md uppercase tracking-wider font-semibold">
            {pillar.category}
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold mt-4 mb-3 group-hover:text-primary transition">
            {pillar.title}
          </h2>
          <p className="text-white/50 mb-4 max-w-xl">{pillar.subtitle}</p>
          <span className="text-xs text-white/40">{pillar.readTime} de lecture</span>
        </Link>

        {/* Wizard Variants - Quick access */}
        <div className="mb-12">
          <h2 className="text-xl font-bold text-navy mb-6">
            Wizards <span className="text-primary">spécialisés</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {wizardVariants.map((v) => (
              <Link
                key={v.slug}
                href={`/wizard/${v.slug}`}
                className="bg-white rounded-lg p-4 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition group text-center"
              >
                <span className="text-2xl block mb-2">{v.badgeEmoji}</span>
                <span className="text-sm font-medium text-navy group-hover:text-primary transition">{v.badge}</span>
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
              <h2 className="text-xl font-bold text-navy mb-6">
                {cat}
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="bg-white rounded-lg p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition group"
                  >
                    <span className="text-[10px] bg-primary/10 text-primary px-2 py-1 rounded-md uppercase tracking-wider font-semibold">
                      {post.category}
                    </span>
                    <h3 className="text-lg font-bold text-navy mt-3 mb-2 group-hover:text-primary transition">
                      {post.title}
                    </h3>
                    <p className="text-sm text-dark/40 mb-3 line-clamp-2">{post.subtitle}</p>
                    <div className="flex items-center gap-2 text-xs text-dark/40">
                      <span>{post.readTime} de lecture</span>
                      {post.wizardVariant && (
                        <>
                          <span>&bull;</span>
                          <span className="text-primary font-medium">Wizard dédié</span>
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
        <div className="bg-white rounded-xl p-10 text-center shadow-[0_4px_16px_rgba(0,0,0,0.08)]">
          <h2 className="text-2xl font-extrabold text-navy mb-4">Prêt à passer à l&apos;action ?</h2>
          <p className="text-sm text-dark/50 mb-6">
            Découvrez combien vous pouvez emprunter en 5 minutes avec notre wizard gratuit.
          </p>
          <Link
            href="/wizard"
            className="inline-block bg-primary text-white px-8 py-3.5 rounded-md font-bold hover:bg-primary-dark transition uppercase tracking-wider"
          >
            Commencer le Wizard
          </Link>
        </div>
      </div>
    </section>
  );
}
