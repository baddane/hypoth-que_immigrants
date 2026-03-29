import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE_URL } from "@/lib/constants";

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
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-16 pb-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
