import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merci — Votre demande est envoyée",
  description:
    "Merci pour votre demande. Un courtier hypothécaire partenaire vous contactera prochainement.",
  alternates: { canonical: "/merci" },
  robots: { index: false, follow: true },
  openGraph: {
    title: "Merci — Votre demande est envoyée",
    description:
      "Merci pour votre demande. Un courtier hypothécaire partenaire vous contactera prochainement.",
    url: "/merci",
    type: "website",
  },
};

export default function ToolLayout({ children }: { children: React.ReactNode }) {
  return children;
}
