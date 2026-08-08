import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — guide-hypotheque.ca",
  description:
    "Une question sur votre projet hypothécaire au Canada ? Contactez l'équipe de guide-hypotheque.ca. Réponse rapide et sans engagement.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — guide-hypotheque.ca",
    description:
      "Une question sur votre projet hypothécaire au Canada ? Contactez l'équipe de guide-hypotheque.ca. Réponse rapide et sans engagement.",
    url: "/contact",
    type: "website",
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
