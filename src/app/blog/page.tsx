import Link from "next/link";
import { blogPosts } from "@/data/banks";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guides Hypothèque Immigrants Canada",
  description: "Articles et guides complets sur l'hypothèque pour immigrants au Canada. Chaque guide vous rapproche de votre hypothèque.",
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
          Tout ce que vous devez savoir pour obtenir votre hypothèque au Canada en tant qu&apos;immigrant.
        </p>

        {/* Pillar Article */}
        <Link
          href={`/blog/${pillar.slug}`}
          className="block bg-gray-900 text-white rounded-2xl p-10 mb-10 hover:bg-gray-800 transition group"
        >
          <span className="text-xs bg-gold text-white px-3 py-1 rounded-full uppercase tracking-wider">{pillar.category}</span>
          <h2 className="font-serif text-2xl md:text-3xl mt-4 mb-3 group-hover:text-gold transition">{pillar.title}</h2>
          <p className="text-gray-400 mb-4 max-w-xl">{pillar.description}</p>
          <div className="flex gap-4 text-xs text-gray-500">
            <span>{pillar.readTime} de lecture</span>
            <span>&bull;</span>
            <span>Trafic estimé : {pillar.estimatedTraffic}</span>
          </div>
        </Link>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
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

        {/* CTA */}
        <div className="bg-gold-light rounded-2xl p-10 text-center">
          <h2 className="font-serif text-2xl mb-4">Prêt à passer à l&apos;action ?</h2>
          <p className="text-sm text-gray-500 mb-6">Découvrez combien vous pouvez emprunter en 5 minutes avec notre wizard gratuit.</p>
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
