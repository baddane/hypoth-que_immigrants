import { Suspense } from "react";
import Link from "next/link";
import { wizardVariants, getVariantBySlug } from "@/data/wizardVariants";
import { blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import WizardClient from "./WizardClient";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

type Props = {
  params: Promise<{ variant: string }>;
};

export async function generateStaticParams() {
  return wizardVariants.map((v) => ({ variant: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { variant: slug } = await params;
  const v = getVariantBySlug(slug);
  if (!v) return {};
  return {
    title: v.title,
    description: v.subtitle,
    openGraph: {
      title: v.title,
      description: v.heroDescription,
      url: `${SITE_URL}/wizard/${v.slug}`,
      type: "website",
    },
  };
}

export default async function WizardVariantPage({ params }: Props) {
  const { variant: slug } = await params;
  const v = getVariantBySlug(slug);
  if (!v) notFound();

  const relatedArticles = v.relatedArticles
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <>
      {/* Hero section */}
      <section className="bg-cream min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm bg-white rounded-full px-4 py-1.5 shadow-sm mb-6">
              <span>{v.badgeEmoji}</span>
              <span className="font-medium">{v.badge}</span>
            </span>

            <h1 className="font-serif text-4xl md:text-5xl leading-tight mb-6 whitespace-pre-line">
              {v.heroTitle.split("\n").map((line, i) => (
                <span key={i}>
                  {i === v.heroTitle.split("\n").length - 1 ? (
                    <em className="text-gold">{line}</em>
                  ) : (
                    <>
                      {line}
                      <br />
                    </>
                  )}
                </span>
              ))}
            </h1>

            <p className="text-gray-500 max-w-lg mb-8 text-lg">{v.heroDescription}</p>

            <a
              href="#wizard-form"
              className="inline-block bg-gold text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gold-dark transition uppercase tracking-wider shadow-lg shadow-gold/25 mb-8"
            >
              {v.ctaText}
            </a>

            <ul className="space-y-2">
              {v.trustSignals.map((signal) => (
                <li key={signal} className="flex items-center gap-3 text-sm text-gray-600">
                  <span className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {signal}
                </li>
              ))}
            </ul>
          </div>

          {/* Right side - Stats card */}
          <div className="hidden md:block">
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{v.badgeEmoji}</div>
                <h3 className="font-serif text-xl mb-2">{v.badge}</h3>
                <p className="text-sm text-gray-400">{v.subtitle}</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Mise de fonds min.</span>
                  <span className="font-bold text-gold">5%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Durée du wizard</span>
                  <span className="font-bold text-gold">5 min</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-sm text-gray-500">Offres reçues</span>
                  <span className="font-bold text-gold">24-48h</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-sm text-gray-500">Coût</span>
                  <span className="font-bold text-green-600">Gratuit</span>
                </div>
              </div>
              <a
                href="#wizard-form"
                className="block w-full bg-gold text-white text-center py-3 rounded-xl font-medium hover:bg-gold-dark transition"
              >
                {v.ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wizard Form Section */}
      <section id="wizard-form" className="scroll-mt-20">
        <Suspense>
          <WizardClient variantId={v.id} defaultAnswers={v.defaultAnswers} ctaText={v.ctaText} />
        </Suspense>
      </section>

      {/* Related Articles - Maillage interne */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-cream">
          <div className="max-w-6xl mx-auto px-6">
            <p className="uppercase text-xs tracking-[0.3em] text-gold mb-4 text-center">Guides utiles</p>
            <h2 className="font-serif text-2xl md:text-3xl text-center mb-8">
              Articles pour <em className="text-gold">{v.badge}</em>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((post) =>
                post ? (
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
                    <span className="text-xs text-gray-400">{post.readTime} de lecture</span>
                  </Link>
                ) : null
              )}
            </div>
          </div>
        </section>
      )}

      {/* Final CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl mb-6">
            Prêt à devenir <em className="text-gold">propriétaire ?</em>
          </h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto">
            Rejoignez les milliers d&apos;immigrants qui ont obtenu leur hypothèque grâce à notre wizard gratuit.
          </p>
          <a
            href="#wizard-form"
            className="inline-block bg-gold text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-gold-dark transition uppercase tracking-wider shadow-lg shadow-gold/25"
          >
            {v.ctaText}
          </a>
          <p className="text-xs text-gray-400 mt-4">Gratuit &bull; 5 minutes &bull; Sans engagement</p>
        </div>
      </section>

      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: v.title,
            description: v.heroDescription,
            url: `${SITE_URL}/wizard/${v.slug}`,
            publisher: {
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_URL,
            },
          }),
        }}
      />
    </>
  );
}
