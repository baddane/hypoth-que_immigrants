import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: {
    default: "Guide Hypothèque Immigrants Canada | Calculatrice & Wizard",
    template: "%s | Hypothèque Immigrants Canada",
  },
  description:
    "Découvrez combien vous pouvez emprunter, quelles banques acceptent les immigrants, et comment obtenir votre hypothèque au Canada. Wizard interactif gratuit.",
  keywords: [
    "hypothèque immigrants",
    "hypothèque nouveaux arrivants",
    "hypothèque canada immigrants",
    "guide hypothèque",
  ],
  openGraph: {
    title: "Guide Hypothèque Immigrants Canada - Wizard Interactif",
    description:
      "Trouvez votre taux hypothécaire optimal et les meilleures banques pour immigrants.",
    url: "https://hypotheque-immigrants-canada.com/",
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
        <Header />
        <main className="flex-1 pt-16 pb-14">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
