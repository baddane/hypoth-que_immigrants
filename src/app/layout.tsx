import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieConsent from "@/components/CookieConsent";
import { SITE_URL } from "@/lib/constants";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
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
  openGraph: {
    title: "Hypothèque Immigrants Canada | Préapprobation Gratuite",
    description:
      "Obtenez votre préapprobation hypothécaire en 5 minutes. Wizard gratuit pour immigrants au Canada.",
    url: `${SITE_URL}/`,
    type: "website",
    locale: "fr_CA",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="antialiased">
      <body className="min-h-screen flex flex-col">
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${GA_ID}',{page_path:window.location.pathname});`}
            </Script>
          </>
        )}
        <Header />
        <main className="flex-1 pt-16 pb-14">{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
