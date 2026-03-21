import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions Légales",
};

export default function MentionsLegalesPage() {
  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-3xl md:text-4xl mb-8">Mentions Légales</h1>
        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6 text-sm text-gray-600 leading-relaxed">
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">Éditeur du site</h2>
            <p>Guide Hypothèque Immigrants Canada<br />Site d&apos;information et d&apos;outils gratuits pour les immigrants au Canada.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">Hébergement</h2>
            <p>Ce site est hébergé par Vercel Inc., San Francisco, CA, USA.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">Propriété intellectuelle</h2>
            <p>Tous les contenus de ce site (textes, outils, structure) sont protégés par le droit d&apos;auteur. Toute reproduction sans autorisation est interdite.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">Avertissement</h2>
            <p>Les informations fournies sur ce site sont à titre indicatif uniquement et ne constituent pas un conseil financier. Consultez un professionnel hypothécaire agréé pour des recommandations personnalisées.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">Liens d&apos;affiliation</h2>
            <p>Ce site peut contenir des liens d&apos;affiliation vers des banques et courtiers hypothécaires. Nous pouvons recevoir une commission si vous utilisez ces services, sans frais supplémentaires pour vous.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
