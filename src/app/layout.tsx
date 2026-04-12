import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { SITE_URL, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Hypothèque Immigrants Canada | Obtenir Préapprobation Gratuite | guide-hypotheque.ca",
    template: "%s | guide-hypotheque.ca",
  },
  description:
    "Obtenez votre préapprobation hypothécaire en 5 minutes. Wizard gratuit pour immigrants au Canada. Découvrez combien vous pouvez emprunter.",
  keywords: [
    "hypothèque immigrants",
    "hypothèque nouveaux arrivants",
    "hypothèque canada immigrants",
    "préapprobation hypothèque",
    "guide hypothèque",
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    title: "Hypothèque Immigrants Canada | Préapprobation Gratuite",
    description:
      "Obtenez votre préapprobation hypothécaire en 5 minutes. Wizard gratuit pour immigrants au Canada.",
    url: `${SITE_URL}/`,
    siteName: SITE_NAME,
    type: "website",
    locale: "fr_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hypothèque Immigrants Canada | Préapprobation Gratuite",
    description:
      "Obtenez votre préapprobation hypothécaire en 5 minutes. Wizard gratuit pour immigrants au Canada.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "fr-CA",
  publisher: {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${SITE_URL}/blog?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/icon.png`,
  description:
    "Plateforme d'information et de préapprobation hypothécaire pour immigrants et nouveaux arrivants au Canada.",
  areaServed: {
    "@type": "Country",
    name: "Canada",
  },
  knowsLanguage: ["fr-CA", "en-CA"],
  contactPoint: {
    "@type": "ContactPoint",
    email: "privacy@guide-hypotheque.ca",
    contactType: "customer support",
    areaServed: "CA",
    availableLanguage: ["French", "English"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr-CA" className="antialiased">
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 pb-14">{children}</main>
        <Footer />
        <CookieConsent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </body>
    </html>
  );
}
