import Link from "next/link";
import { blogPosts } from "@/data/banks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog & Guides Hypothèque Immigrants",
  description: "Articles et guides complets sur l'hypothèque pour immigrants au Canada.",
};

export default function BlogPage() {
  const pillar = blogPosts[0];
  const clusters = blogPosts.slice(1);

  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <p className="uppercase text-xs tracking-[0.3em] text-gold mb-4">Blog & Guides</p>
        <h1 className="font-serif text-3xl md:text-5xl mb-4">
          Guides <em className="text-gold">Hypothèque</em> pour Immigrants
        </h1>
        <p className="text-gray-500 mb-12 max-w-xl">
          Articles détaillés et guides pratiques pour naviguer le processus hypothécaire au Canada en tant qu&apos;immigrant.
        </p>

        {/* Pillar Article */}
        <Link
          href={`/blog/${pillar.slug}`}
          className="block bg-gray-900 text-white rounded-2xl p-10 mb-10 hover:bg-gray-800 transition group"
        >
          <span className="text-xs bg-gold text-white px-3 py-1 rounded-full uppercase tracking-wider">{pillar.category}</span>
          <h2 className="font-serif text-2xl md:text-3xl mt-4 mb-3 group-hover:text-gold transition">{pillar.title}</h2>
          <p className="text-gray-400 mb-4 max-w-xl">{pillar.description}</p>
          <span className="text-xs text-gray-500">{pillar.readTime} de lecture</span>
        </Link>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {clusters.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition group"
            >
              <span className="text-[10px] bg-gold/10 text-gold px-2 py-1 rounded-full uppercase tracking-wider">{post.category}</span>
              <h3 className="font-serif text-lg mt-3 mb-2 group-hover:text-gold transition">{post.title}</h3>
              <p className="text-sm text-gray-400 mb-3 line-clamp-2">{post.description}</p>
              <span className="text-xs text-gray-400">{post.readTime} de lecture</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
