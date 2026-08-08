import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import Analytics from "@/components/Analytics";
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
    canonical: "/",
  },
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  openGraph: {
    title: "Hypothèque Immigrants Canada | Préapprobation Gratuite",
    description:
      "Obtenez votre préapprobation hypothécaire en 5 minutes. Wizard gratuit pour immigrants au Canada.",
    url: "/",
    siteName: SITE_NAME,
    type: "website",
    locale: "fr_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hypothèque Immigrants Canada | Préapprobation Gratuite",
    description:
      "Wizard gratuit pour immigrants au Canada. Découvrez combien vous pouvez emprunter en 5 minutes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/icon.png`,
        width: 512,
        height: 512,
      },
      description:
        "Portail francophone de l'hypothèque pour immigrants et nouveaux arrivants au Canada : guides, outils gratuits et mise en relation avec des courtiers partenaires.",
      areaServed: { "@type": "Country", name: "Canada" },
      knowsLanguage: ["fr-CA", "en-CA"],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "fr-CA",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ],
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
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
