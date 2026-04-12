import type { Metadata } from "next";
import Link from "next/link";
import { SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Glossaire Hypothécaire Canada : 26 Termes Expliqués Simplement",
  description:
    "Glossaire complet des termes hypothécaires au Canada : amortissement, ABD, ATD, stress test, SCHL, taux fixe, variable et plus. Explications simples pour immigrants.",
  keywords: [
    "glossaire hypothèque",
    "termes hypothécaires canada",
    "définition abd atd",
    "lexique hypothèque",
    "vocabulaire hypothécaire",
  ],
  alternates: {
    canonical: `${SITE_URL}/glossaire`,
  },
  openGraph: {
    title: "Glossaire Hypothécaire Canada — 26 Termes",
    description:
      "Tous les termes hypothécaires expliqués simplement : ABD, ATD, SCHL, stress test, amortissement...",
    url: `${SITE_URL}/glossaire`,
    type: "website",
    locale: "fr_CA",
  },
  robots: "index, follow",
};

const glossaryTerms = [
  {
    term: "ABD (Amortissement Brut de la Dette)",
    definition:
      "Ratio qui mesure la part de votre revenu brut consacrée aux frais de logement (hypothèque, taxes foncières, chauffage, assurance). Maximum 39 % pour être approuvé.",
    aka: "GDS (Gross Debt Service) en anglais",
  },
  {
    term: "Amortissement",
    definition:
      "Durée totale prévue pour rembourser complètement votre hypothèque. Généralement 25 ans (ou 30 ans avec le programme Premier Chez-Soi). Ne pas confondre avec le terme.",
  },
  {
    term: "ATD (Amortissement Total de la Dette)",
    definition:
      "Ratio qui mesure la part de votre revenu brut consacrée à toutes vos dettes (logement + auto + cartes + prêts). Maximum 44 % pour être approuvé.",
    aka: "TDS (Total Debt Service) en anglais",
  },
  {
    term: "Assurance hypothécaire (SCHL)",
    definition:
      "Assurance obligatoire si votre mise de fonds est inférieure à 20 %. Protège le prêteur (pas vous). Offerte par la SCHL, Sagen ou Canada Guaranty. La prime est ajoutée à votre hypothèque.",
  },
  {
    term: "Banque du Canada — Taux directeur",
    definition:
      "Taux d'intérêt de référence fixé par la Banque du Canada. Influence directement les taux variables hypothécaires et indirectement les taux fixes.",
  },
  {
    term: "CELIAPP",
    definition:
      "Compte d'Épargne Libre d'Impôt pour l'Achat d'une Première Propriété. Permet d'épargner jusqu'à 40 000 $ à l'abri de l'impôt pour acheter votre première maison.",
  },
  {
    term: "Cote de crédit",
    definition:
      "Score numérique (300 à 900) qui reflète votre fiabilité financière. Minimum 600 pour une hypothèque assurée SCHL. 680+ pour les meilleurs taux.",
    aka: "Score de crédit, Credit score",
  },
  {
    term: "Courtier hypothécaire",
    definition:
      "Professionnel qui magasine les taux hypothécaires auprès de dizaines de prêteurs pour vous. Gratuit pour l'emprunteur (rémunéré par le prêteur choisi).",
  },
  {
    term: "Droits de mutation",
    definition:
      "Taxe payée lors de l'achat d'une propriété, calculée sur le prix d'achat. Au Québec : « taxe de bienvenue ». Varie selon la province et le prix.",
  },
  {
    term: "Équité",
    definition:
      "La part de votre propriété que vous possédez réellement (valeur de la propriété moins le solde de votre hypothèque). Augmente avec chaque paiement et l'appréciation du marché.",
  },
  {
    term: "Hypothèque",
    definition:
      "Prêt garanti par un bien immobilier. Si vous ne remboursez pas, le prêteur peut saisir la propriété. Au Canada, les hypothèques sont réglementées par le BSIF.",
  },
  {
    term: "Mise de fonds",
    definition:
      "Montant que vous payez comptant lors de l'achat. Minimum 5 % pour une propriété jusqu'à 500 000 $, 10 % sur la portion entre 500 000 $ et 1 500 000 $. 20 %+ élimine l'assurance SCHL.",
    aka: "Down payment",
  },
  {
    term: "Pénalité de remboursement anticipé",
    definition:
      "Frais chargés si vous brisez votre hypothèque avant la fin du terme. Pour un taux fixe : le plus élevé entre 3 mois d'intérêt et le différentiel de taux. Pour un taux variable : 3 mois d'intérêt.",
  },
  {
    term: "Préapprobation hypothécaire",
    definition:
      "Évaluation préliminaire par un prêteur qui confirme le montant que vous pouvez emprunter et réserve un taux pour 90-120 jours. Gratuite et sans engagement.",
  },
  {
    term: "Premier Chez-Soi",
    definition:
      "Programme SCHL permettant un amortissement de 30 ans pour les premiers acheteurs et les acheteurs de propriétés neuves. Maximum 1 500 000 $.",
  },
  {
    term: "Prime SCHL",
    definition:
      "Montant de l'assurance hypothécaire ajouté à votre prêt. Varie de 2,8 % à 4,0 % du montant emprunté selon votre ratio prêt/valeur (LTV).",
  },
  {
    term: "RAP (Régime d'accession à la propriété)",
    definition:
      "Programme permettant de retirer jusqu'à 60 000 $ de vos REER pour acheter votre première maison, sans impôt. Remboursable sur 15 ans.",
  },
  {
    term: "Ratio prêt/valeur (RPV)",
    definition:
      "Pourcentage du prix de la propriété financé par l'hypothèque. Ex : mise de fonds 10 % = RPV 90 %. Si > 80 %, l'assurance SCHL est obligatoire.",
    aka: "LTV (Loan-to-Value) en anglais",
  },
  {
    term: "Refinancement",
    definition:
      "Remplacement de votre hypothèque actuelle par une nouvelle, souvent pour accéder à votre équité, obtenir un meilleur taux, ou consolider des dettes.",
  },
  {
    term: "Renouvellement",
    definition:
      "À la fin de votre terme (ex : 5 ans), vous devez renouveler votre hypothèque. C'est l'occasion de négocier un nouveau taux ou de changer de prêteur.",
  },
  {
    term: "SCHL (Société canadienne d'hypothèques et de logement)",
    definition:
      "Organisme fédéral qui assure les hypothèques à haut ratio, publie des données sur le marché immobilier et administre des programmes comme Premier Chez-Soi.",
    aka: "CMHC (Canada Mortgage and Housing Corporation) en anglais",
  },
  {
    term: "Stress test (test de résistance)",
    definition:
      "Test obligatoire : les banques doivent vérifier que vous pouvez payer au taux le plus élevé entre votre taux + 2 % et 5,25 %. Réduit votre capacité d'emprunt d'environ 20 %.",
  },
  {
    term: "Taux fixe",
    definition:
      "Taux d'intérêt qui ne change pas pendant toute la durée du terme. Paiements stables et prévisibles. Pénalité de rupture plus élevée qu'un taux variable.",
  },
  {
    term: "Taux variable",
    definition:
      "Taux d'intérêt qui fluctue avec le taux directeur de la Banque du Canada. Paiements qui peuvent augmenter ou diminuer. Pénalité de rupture plus faible.",
  },
  {
    term: "Taxes foncières",
    definition:
      "Taxes annuelles sur votre propriété, payées à la municipalité. Varient selon la ville et la valeur de la propriété. Comptées dans le calcul ABD.",
    aka: "Property taxes",
  },
  {
    term: "Terme hypothécaire",
    definition:
      "Durée du contrat avec votre prêteur (1 à 10 ans, généralement 5 ans). À la fin du terme, vous renouvelez au taux du marché. Ne pas confondre avec l'amortissement.",
  },
];

export default function GlossairePage() {
  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8 font-semibold">
          <Link href="/" className="hover:text-gold transition">Accueil</Link>
          <span>/</span>
          <span className="text-gray-600">Glossaire</span>
        </nav>

        <h1 className="text-3xl md:text-5xl font-extrabold text-midnight mb-4">
          Glossaire <span className="text-gold">hypothécaire</span>
        </h1>
        <p className="text-lg text-gray-500 mb-12">
          Tous les termes hypothécaires canadiens expliqués simplement. {glossaryTerms.length} définitions pour comprendre votre hypothèque.
        </p>

        <div className="space-y-6">
          {glossaryTerms.map((item) => (
            <div key={item.term} id={item.term.toLowerCase().replace(/[^a-z0-9]/g, "-")} className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-lg font-extrabold text-midnight mb-2">{item.term}</h2>
              <p className="text-base text-gray-600 leading-relaxed">{item.definition}</p>
              {item.aka && (
                <p className="text-sm text-gray-400 mt-2 italic">{item.aka}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm text-center">
          <h2 className="text-xl font-extrabold text-midnight mb-4">Prêt à passer à l&rsquo;action ?</h2>
          <p className="text-base text-gray-600 mb-6">
            Utilisez nos outils gratuits pour évaluer votre situation hypothécaire.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/wizard" className="bg-gold text-white px-6 py-3 rounded-lg font-bold hover:bg-gold-dark transition">
              Préapprobation gratuite
            </Link>
            <Link href="/outils/calculateur-montant-empruntable" className="border-2 border-gold text-gold px-6 py-3 rounded-lg font-bold hover:bg-gold hover:text-white transition">
              Calculateur emprunt
            </Link>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "DefinedTermSet",
              name: "Glossaire hypothécaire — guide-hypotheque.ca",
              description: "Glossaire complet des termes hypothécaires canadiens pour immigrants.",
              hasDefinedTerm: glossaryTerms.map((item) => ({
                "@type": "DefinedTerm",
                name: item.term,
                description: item.definition,
              })),
            }),
          }}
        />
      </div>
    </section>
  );
}
