import Link from "next/link";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/data/blogPosts";
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
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://guide-hypotheque.ca/blog/${post.slug}`,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const content = blogContentMap[slug];
  const relatedPosts = getRelatedPosts(slug, 4);
  const wizardHref = post.wizardVariant ? `/wizard/${post.wizardVariant}` : "/wizard";

  return (
    <section className="py-20 bg-light-blue min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        {/* Breadcrumb with Schema */}
        <nav className="flex items-center gap-2 text-xs text-dark/40 mb-8" aria-label="Fil d'Ariane">
          <Link href="/" className="hover:text-primary transition">Accueil</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary transition">Guides</Link>
          <span>/</span>
          <span className="text-dark/60">{post.category}</span>
        </nav>

        {/* Header */}
        <span className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-md uppercase tracking-wider font-semibold">
          {post.category}
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-navy mt-4 mb-4 leading-tight">{post.title}</h1>
        <p className="text-dark/60 mb-2 text-lg">{post.subtitle}</p>
        <div className="flex items-center gap-4 text-xs text-dark/40 mb-10 pb-8 border-b border-gray-200">
          <span>{post.readTime} de lecture</span>
          <span>&bull;</span>
          <span>Mis à jour mars 2026</span>
          <span>&bull;</span>
          <span>guide-hypotheque.ca</span>
        </div>

        {/* Table of contents - Quick nav for user */}
        <div className="bg-white rounded-lg p-6 shadow-[0_2px_8px_rgba(0,0,0,0.06)] mb-10">
          <p className="font-semibold text-sm text-navy mb-3">Dans cet article :</p>
          <ul className="space-y-1 text-sm text-primary">
            <li>
              <a href="#article-content" className="hover:underline">Lire le guide complet</a>
            </li>
            <li>
              <Link href={wizardHref} className="hover:underline">Accéder au wizard personnalisé</Link>
            </li>
            <li>
              <a href="#related" className="hover:underline">Articles connexes</a>
            </li>
          </ul>
        </div>

        {/* Article body */}
        <article id="article-content" className="blog-article">
          <div className="space-y-6 text-dark/70 leading-relaxed">
            {content}
          </div>
        </article>

        {/* CTA final */}
        <div className="bg-navy text-white rounded-xl p-10 text-center my-12">
          <h2 className="text-2xl font-extrabold mb-4">
            Recevez vos <span className="text-primary">options hypothécaires</span>
          </h2>
          <p className="text-white/50 text-sm mb-6 max-w-md mx-auto">
            Notre wizard gratuit analyse votre profil en 5 minutes et vous connecte avec les meilleurs courtiers spécialisés en hypothèques pour immigrants.
          </p>
          <Link
            href={wizardHref}
            className="inline-block bg-primary text-white px-8 py-3.5 rounded-md font-bold hover:bg-primary-dark transition uppercase tracking-wider"
          >
            {post.wizardVariant ? `Wizard ${post.wizardVariant.replace("-", " ")}` : "Commencer le Wizard Gratuit"}
          </Link>
          <p className="text-xs text-white/30 mt-3">Gratuit &bull; 5 minutes &bull; Sans engagement</p>
        </div>

        {/* Related articles - Maillage interne */}
        <div id="related" className="mb-12">
          <h3 className="text-xl font-bold text-navy mb-6">
            Guides <span className="text-primary">connexes</span>
          </h3>
          <div className="space-y-3">
            {relatedPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="flex items-start gap-4 bg-white rounded-lg p-5 shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-md transition group"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-navy group-hover:text-primary transition">{p.title}</h4>
                  <p className="text-xs text-dark/40 mt-1 line-clamp-1">{p.subtitle}</p>
                  <span className="text-[10px] text-dark/40 mt-1 inline-block">{p.readTime} de lecture</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All guides link */}
        <div className="text-center mb-12">
          <Link href="/blog" className="text-sm text-primary hover:underline font-medium">
            Voir tous nos guides &rarr;
          </Link>
        </div>

        {/* Schema - Article + BreadcrumbList */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
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
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Accueil",
                    item: "https://guide-hypotheque.ca",
                  },
                  {
                    "@type": "ListItem",
                    position: 2,
                    name: "Guides",
                    item: "https://guide-hypotheque.ca/blog",
                  },
                  {
                    "@type": "ListItem",
                    position: 3,
                    name: post.title,
                    item: `https://guide-hypotheque.ca/blog/${post.slug}`,
                  },
                ],
              },
            ]),
          }}
        />
      </div>
    </section>
  );
}
