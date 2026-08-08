import type { Metadata } from "next";
import Link from "next/link";
import LeadMagnetForm from "@/components/LeadMagnetForm";
import { requiredDocuments } from "@/data/documents";

export const metadata: Metadata = {
  title: "Checklist PDF des documents hypothécaires pour immigrants — Gratuit",
  description:
    "Téléchargez gratuitement la checklist PDF complète des documents requis pour votre demande d'hypothèque au Canada en tant qu'immigrant : identité, revenus, finances, crédit alternatif et propriété.",
  alternates: { canonical: "/ressources/checklist-documents" },
  openGraph: {
    title: "Checklist PDF des documents hypothécaires pour immigrants",
    description:
      "La liste complète des documents pour votre préapprobation hypothécaire au Canada. Téléchargement gratuit.",
    url: "/ressources/checklist-documents",
    type: "website",
  },
};

const categoryLabels: Record<string, string> = {
  identite: "Identité & statut",
  revenus: "Revenus & emploi",
  financier: "Situation financière",
  creditAlternatif: "Crédit alternatif (sans historique canadien)",
  propriete: "Propriété",
};

export default function ChecklistLeadMagnetPage() {
  const totalDocs = Object.values(requiredDocuments).reduce(
    (n, list) => n + list.length,
    0
  );

  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-[980px] mx-auto px-6">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 font-semibold" aria-label="Fil d'Ariane">
          <Link href="/" className="hover:text-gold transition">Accueil</Link>
          <span>/</span>
          <span className="text-gray-600">Ressources</span>
          <span>/</span>
          <span className="text-gray-600">Checklist documents</span>
        </nav>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Argumentaire */}
          <div>
            <span className="inline-block text-sm bg-gold-light text-gold px-4 py-1.5 rounded-lg uppercase tracking-wider font-semibold">
              Ressource gratuite
            </span>
            <h1 className="text-3xl md:text-4xl mt-4 mb-4 leading-tight font-extrabold text-midnight">
              La checklist complète des documents pour votre hypothèque
            </h1>
            <p className="text-lg text-gray-500 mb-6">
              {totalDocs} documents classés en {Object.keys(requiredDocuments).length} catégories,
              dans un PDF prêt à imprimer. Rassemblez un dossier complet et accélérez votre
              préapprobation — sans allers-retours avec le prêteur.
            </p>
            <ul className="space-y-2 mb-6">
              {Object.keys(requiredDocuments).map((cat) => (
                <li key={cat} className="flex items-start gap-3 text-base text-gray-600">
                  <span className="text-gold font-bold mt-0.5">✓</span>
                  <span>{categoryLabels[cat] ?? cat}</span>
                </li>
              ))}
            </ul>
            <p className="text-base text-gray-500">
              Besoin d&apos;une version interactive ?{" "}
              <Link href="/outils/checklist-documents" className="text-gold font-semibold hover:underline">
                Utilisez notre checklist en ligne
              </Link>{" "}
              avec barre de progression.
            </p>
          </div>

          {/* Formulaire de capture */}
          <div>
            <LeadMagnetForm />
          </div>
        </div>
      </div>
    </section>
  );
}
