import Link from "next/link";
import { wizardVariants, getVariantBySlug } from "@/data/wizardVariants";
import { blogPosts } from "@/data/blogPosts";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import WizardClient from "./WizardClient";

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
      url: `https://guide-hypotheque.ca/wizard/${v.slug}`,
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
      <section className="bg-light-blue min-h-[70vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-flex items-center gap-2 text-sm bg-white rounded-lg px-4 py-1.5 shadow-sm mb-6 font-medium">
              <span>{v.badgeEmoji}</span>
              <span>{v.badge}</span>
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-navy whitespace-pre-line">
              {v.heroTitle.split("\n").map((line, i) => (
                <span key={i}>
                  {i === v.heroTitle.split("\n").length - 1 ? (
                    <span className="text-primary">{line}</span>
                  ) : (
                    <>
                      {line}
                      <br />
                    </>
                  )}
                </span>
              ))}
            </h1>

            <p className="text-dark/60 max-w-lg mb-8 text-lg">{v.heroDescription}</p>

            <a
              href="#wizard-form"
              className="inline-block bg-primary text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-primary border-2 border-primary transition uppercase tracking-wider mb-8"
            >
              {v.ctaText}
            </a>

            <ul className="space-y-2">
              {v.trustSignals.map((signal) => (
                <li key={signal} className="flex items-center gap-3 text-sm text-dark/70">
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
            <div className="bg-white rounded-xl p-8 shadow-[0_4px_16px_rgba(0,0,0,0.08)] border border-gray-100">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">{v.badgeEmoji}</div>
                <h3 className="text-xl font-bold text-navy mb-2">{v.badge}</h3>
                <p className="text-sm text-dark/40">{v.subtitle}</p>
              </div>
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-sm text-dark/50">Mise de fonds min.</span>
                  <span className="font-bold text-primary">5%</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-sm text-dark/50">Durée du wizard</span>
                  <span className="font-bold text-primary">5 min</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="text-sm text-dark/50">Offres reçues</span>
                  <span className="font-bold text-primary">24-48h</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="text-sm text-dark/50">Coût</span>
                  <span className="font-bold text-green-600">Gratuit</span>
                </div>
              </div>
              <a
                href="#wizard-form"
                className="block w-full bg-primary text-white text-center py-3 rounded-md font-semibold hover:bg-primary-dark transition"
              >
                {v.ctaText}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Wizard Form Section */}
      <section id="wizard-form" className="scroll-mt-20">
        <WizardClient variantId={v.id} defaultAnswers={v.defaultAnswers} ctaText={v.ctaText} />
      </section>

      {/* Related Articles - Maillage interne */}
      {relatedArticles.length > 0 && (
        <section className="py-16 bg-light-blue">
          <div className="max-w-6xl mx-auto px-6">
            <p className="uppercase text-xs tracking-[0.3em] text-primary font-semibold mb-4 text-center">Guides utiles</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-center text-navy mb-8">
              Articles pour <span className="text-primary">{v.badge}</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedArticles.map((post) =>
                post ? (
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
                    <span className="text-xs text-dark/40">{post.readTime} de lecture</span>
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
          <h2 className="text-3xl font-extrabold text-navy mb-6">
            Prêt à devenir <span className="text-primary">propriétaire ?</span>
          </h2>
          <p className="text-dark/60 mb-8 max-w-lg mx-auto">
            Rejoignez les milliers d&apos;immigrants qui ont obtenu leur hypothèque grâce à notre wizard gratuit.
          </p>
          <a
            href="#wizard-form"
            className="inline-block bg-primary text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-white hover:text-primary border-2 border-primary transition uppercase tracking-wider"
          >
            {v.ctaText}
          </a>
          <p className="text-xs text-dark/40 mt-4">Gratuit &bull; 5 minutes &bull; Sans engagement</p>
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
            url: `https://guide-hypotheque.ca/wizard/${v.slug}`,
            publisher: {
              "@type": "Organization",
              name: "guide-hypotheque.ca",
              url: "https://guide-hypotheque.ca",
            },
          }),
        }}
      />
    </>
  );
}
