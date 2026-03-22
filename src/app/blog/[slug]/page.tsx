import Link from "next/link";
import { blogPosts } from "@/data/banks";
import { blogContentMap } from "@/data/blogContent";
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

  const content = blogContentMap[slug];
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 4);

  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-gray-400 mb-8">
          <Link href="/" className="hover:text-gold transition">Accueil</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gold transition">Guides</Link>
          <span>/</span>
          <span className="text-gray-600">{post.category}</span>
        </nav>

        {/* Header */}
        <span className="text-xs bg-gold/10 text-gold px-3 py-1 rounded-full uppercase tracking-wider">
          {post.category}
        </span>
        <h1 className="font-serif text-3xl md:text-4xl mt-4 mb-4 leading-tight">{post.title}</h1>
        <p className="text-gray-500 mb-4 text-lg">{post.description}</p>
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-10 pb-8 border-b border-gray-200">
          <span>{post.readTime} de lecture</span>
          <span>&bull;</span>
          <span>Mis à jour mars 2026</span>
          <span>&bull;</span>
          <span>guide-hypotheque.ca</span>
        </div>

        {/* Article body — rendered from blogContent.tsx */}
        <article className="blog-article">
          <div className="space-y-6 text-gray-600 leading-relaxed">
            {content}
          </div>
        </article>

        {/* CTA final */}
        <div className="bg-gray-900 text-white rounded-2xl p-10 text-center my-12">
          <h2 className="font-serif text-2xl mb-4">
            Recevez aussi vos <em className="text-gold">options hypothécaires</em>
          </h2>
          <p className="text-gray-400 text-sm mb-6 max-w-md mx-auto">
            Notre wizard gratuit analyse votre profil en 5 minutes et vous connecte avec les meilleurs courtiers spécialisés en hypothèques pour immigrants.
          </p>
          <Link
            href="/wizard"
            className="inline-block bg-gold text-white px-8 py-3.5 rounded-full font-bold hover:bg-gold-dark transition uppercase tracking-wider"
          >
            Commencer le Wizard Gratuit
          </Link>
          <p className="text-xs text-gray-500 mt-3">Gratuit &bull; 5 minutes &bull; Sans engagement</p>
        </div>

        {/* Autres guides */}
        <div className="mb-12">
          <h3 className="font-serif text-xl mb-6">Autres guides <em className="text-gold">Suisse</em></h3>
          <div className="space-y-3">
            {otherPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition group"
              >
                <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center text-gold flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-serif text-sm group-hover:text-gold transition">{p.title}</h4>
                  <p className="text-xs text-gray-400 mt-1 line-clamp-1">{p.description}</p>
                </div>
              </Link>
            ))}
          </div>
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
              dateModified: "2026-03-22",
              author: {
                "@type": "Organization",
                name: "guide-hypotheque.ca",
                url: "https://guide-hypotheque.ca",
              },
              publisher: {
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
