import Link from "next/link";
import { blogPosts, getPostBySlug, getRelatedPosts } from "@/data/blogPosts";
import { blogContentMap } from "@/data/blogContent";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

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
    alternates: {
      canonical: `/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url: `/blog/${post.slug}`,
      siteName: SITE_NAME,
      type: "article",
      locale: "fr_CA",
      publishedTime: "2026-01-15T00:00:00.000Z",
      modifiedTime: "2026-03-28T00:00:00.000Z",
      section: post.category,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
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
    <section className="py-20 bg-paper min-h-screen">
      <div className="max-w-[760px] mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-grey mb-8 font-medium" aria-label="Fil d'Ariane">
          <Link href="/" className="hover:text-gold transition">Accueil</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-gold transition">Guides</Link>
          <span>/</span>
          <span className="text-ink">{post.category}</span>
        </nav>

        {/* Header */}
        <span className="inline-block eyebrow bg-cream border border-sand px-4 py-1.5 rounded-md">
          {post.category}
        </span>
        <h1 className="text-3xl md:text-5xl mt-5 mb-4 leading-[1.1] text-ink">{post.title}</h1>
        <p className="text-grey mb-4 text-xl leading-relaxed">{post.subtitle}</p>
        <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-widest text-grey mb-10 pb-8 border-b border-sand">
          <span>{post.readTime} de lecture</span>
          <span className="text-sand">&bull;</span>
          <span>Mis à jour mars 2026</span>
          <span className="text-sand">&bull;</span>
          <span>guide-hypotheque.ca</span>
        </div>

        {/* Table of contents */}
        <div className="bg-cream rounded-2xl p-6 mb-10 border border-sand">
          <p className="eyebrow mb-3 block">Dans cet article</p>
          <ul className="space-y-1 text-base text-gold-dark font-semibold">
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
          <div className="space-y-6 leading-relaxed">
            {content || (
              <div className="bg-cream rounded-2xl p-8 text-center border border-gray-100">
                <p className="text-lg font-extrabold text-midnight mb-4">{post.description}</p>
                <p className="text-sm text-gray-400 mb-6">
                  Le contenu détaillé de cet article est en cours de rédaction. En attendant, utilisez notre wizard gratuit pour obtenir des recommandations personnalisées.
                </p>
                <Link
                  href={wizardHref}
                  className="inline-block bg-gold text-ink px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-gold border border-gold transition uppercase tracking-wider"
                >
                  Commencer le Wizard
                </Link>
              </div>
            )}
          </div>
        </article>

        {/* CTA final */}
        <div className="bg-ink text-cream rounded-3xl p-10 text-center my-12 border border-gold/20">
          <h2 className="text-2xl md:text-3xl mb-4 text-cream">
            Recevez vos <span className="italic text-gold">options hypothécaires</span>
          </h2>
          <p className="text-cream/70 text-base mb-6 max-w-md mx-auto">
            Notre wizard gratuit analyse votre profil en 5 minutes et vous connecte avec les meilleurs courtiers spécialisés en hypothèques pour immigrants.
          </p>
          <Link
            href={wizardHref}
            className="inline-block bg-gold text-ink px-8 py-3.5 rounded-lg font-bold hover:bg-white hover:text-gold border border-gold transition uppercase tracking-wider"
          >
            {post.wizardVariant ? `Wizard ${post.wizardVariant.replace("-", " ")}` : "Commencer le Wizard Gratuit"}
          </Link>
          <p className="text-sm text-cream/50 mt-3">Gratuit &bull; 5 minutes &bull; Sans engagement</p>
        </div>

        {/* Related articles */}
        <div id="related" className="mb-12">
          <h3 className="text-2xl mb-6 text-ink">
            Guides <span className="italic text-gold">connexes</span>
          </h3>
          <div className="space-y-3">
            {relatedPosts.map((p) => (
              <Link
                key={p.slug}
                href={`/blog/${p.slug}`}
                className="flex items-start gap-4 bg-cream rounded-2xl p-5 border border-sand hover:border-gold/50 transition group"
              >
                <div className="w-10 h-10 bg-gold-light rounded-xl flex items-center justify-center text-gold-dark flex-shrink-0 mt-0.5">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-base font-semibold text-midnight group-hover:text-gold transition">{p.title}</h4>
                  <p className="text-sm text-gray-400 mt-1 line-clamp-1">{p.subtitle}</p>
                  <span className="text-xs text-gray-400 mt-1 inline-block">{p.readTime} de lecture</span>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* All guides */}
        <div className="text-center mb-12">
          <Link href="/blog" className="text-base text-gold font-semibold hover:underline">
            Voir tous nos guides &rarr;
          </Link>
        </div>

        {/* Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Article",
                headline: post.title,
                description: post.description,
                inLanguage: "fr-CA",
                url: `${SITE_URL}/blog/${post.slug}`,
                mainEntityOfPage: { "@type": "WebPage", "@id": `${SITE_URL}/blog/${post.slug}` },
                datePublished: "2026-01-15",
                dateModified: "2026-03-28",
                image: `${SITE_URL}/opengraph-image`,
                articleSection: post.category,
                author: { "@type": "Organization", name: SITE_NAME, url: SITE_URL },
                publisher: {
                  "@type": "Organization",
                  name: SITE_NAME,
                  logo: { "@type": "ImageObject", url: `${SITE_URL}/icon.png` },
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Accueil", item: SITE_URL },
                  { "@type": "ListItem", position: 2, name: "Guides", item: `${SITE_URL}/blog` },
                  { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
                ],
              },
            ]),
          }}
        />
      </div>
    </section>
  );
}
