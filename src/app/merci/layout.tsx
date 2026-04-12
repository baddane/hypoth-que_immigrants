import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Merci — Demande de préapprobation reçue",
  description: "Votre demande a bien été reçue. Un courtier hypothécaire vous contactera sous peu.",
  robots: "noindex, nofollow",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
