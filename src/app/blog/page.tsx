import Link from "next/link";
import { blogPosts } from "@/data/blogPosts";
import { wizardVariants } from "@/data/wizardVariants";
import { SITE_URL } from "@/lib/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides Hypothèque Immigrants Canada — 25 Articles",
  description:
    "Articles et guides complets sur l'hypothèque pour immigrants au Canada. Travailleurs temporaires, étudiants, résidents permanents.",
  openGraph: {
    title: "Guides Hypothèque Immigrants Canada",
    description: "24 guides complets pour obtenir votre hypothèque au Canada en tant qu'immigrant.",
    url: `${SITE_URL}/blog`,
    type: "website",
  },
};

function groupByCategory(posts: typeof blogPosts) {
  const groups: Record<string, typeof blogPosts> = {};
  for (const post of posts) {
    if (!groups[post.category]) groups[post.category] = [];
    groups[post.category].push(post);
  }
  return groups;
}

const categoryOrder = [
  "Guide Principal", "Statut Immigration", "Province", "Crédit",
  "Situation Spéciale", "Processus", "Financement", "Achat", "Taux", "Gestion", "Légal",
];

export default function BlogPage() {
  const pillar = blogPosts[0];
  const otherPosts = blogPosts.slice(1);
  const grouped = groupByCategory(otherPosts);

  return (
    <section className="py-20 bg-white min-h-screen">
      <div className="max-w-[1240px] mx-auto px-6">
        <p className="uppercase text-xs tracking-[0.3em] text-gold font-semibold mb-4">Blog & Guides</p>
        <h1 className="text-3xl md:text-5xl mb-4 font-extrabold text-midnight">
          Guides <span className="text-gold">Hypothèque</span> pour Immigrants
        </h1>
        <p className="text-gray-500 mb-12 max-w-xl">
          {blogPosts.length} guides complets pour obtenir votre hypothèque au Canada en tant qu&apos;immigrant.
        </p>

        {/* Pillar Article */}
        <Link
          href={`/blog/${pillar.slug}`}
          className="block bg-midnight text-white rounded-[30px] p-10 mb-12 hover:opacity-95 transition group"
        >
          <span className="text-xs bg-gold text-white px-4 py-1.5 rounded-lg uppercase tracking-wider font-semibold">
            {pillar.category}
          </span>
          <h2 className="text-2xl md:text-3xl mt-4 mb-3 font-extrabold group-hover:text-gold transition">
            {pillar.title}
          </h2>
          <p className="text-gray-400 mb-4 max-w-xl">{pillar.subtitle}</p>
          <span className="text-xs text-gray-500">{pillar.readTime} de lecture</span>
        </Link>

        {/* Wizard Variants */}
        <div className="mb-12">
          <h2 className="text-xl mb-6 font-extrabold text-midnight">
            Wizards <span className="text-gold">spécialisés</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {wizardVariants.map((v) => (
              <Link
                key={v.slug}
                href={`/wizard/${v.slug}`}
                className="bg-cream rounded-2xl p-4 border border-gray-100 hover:border-gold/30 transition group text-center"
              >
                <span className="text-2xl block mb-2">{v.badgeEmoji}</span>
                <span className="text-sm font-semibold text-midnight group-hover:text-gold transition">{v.badge}</span>
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
              <h2 className="text-xl mb-6 font-extrabold text-midnight">{cat}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {posts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="bg-cream rounded-[30px] p-6 border border-gray-100 hover:border-gold/30 transition group card-hover"
                  >
                    <span className="text-[10px] bg-gold-light text-gold px-3 py-1 rounded-lg uppercase tracking-wider font-semibold">
                      {post.category}
                    </span>
                    <h3 className="text-lg mt-3 mb-2 font-extrabold text-midnight group-hover:text-gold transition">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-400 mb-3 line-clamp-2">{post.subtitle}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400 font-semibold">
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
        <div className="bg-gold-light rounded-[30px] p-10 text-center border border-gold/20">
          <h2 className="text-2xl mb-4 font-extrabold text-midnight">Prêt à passer à l&apos;action ?</h2>
          <p className="text-sm text-gray-500 mb-6">
            Découvrez combien vous pouvez emprunter en 5 minutes avec notre wizard gratuit.
          </p>
          <Link
            href="/wizard"
            className="inline-block bg-gold text-white px-8 py-3.5 rounded-lg font-bold hover:bg-white hover:text-gold border border-gold transition uppercase tracking-wider"
          >
            Commencer le Wizard
          </Link>
        </div>
      </div>
    </section>
  );
}
