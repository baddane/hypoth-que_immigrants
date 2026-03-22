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
            <p>guide-hypotheque.ca<br />Service gratuit de mise en relation hypothécaire pour immigrants au Canada.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">Hébergement</h2>
            <p>Ce site est hébergé par Vercel Inc., San Francisco, CA, USA.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">Nature du service</h2>
            <p>guide-hypotheque.ca est un service de mise en relation entre les immigrants cherchant une hypothèque et des courtiers hypothécaires et banques partenaires. Nous ne sommes pas un courtier hypothécaire et ne fournissons pas de conseils financiers.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">Rémunération</h2>
            <p>guide-hypotheque.ca reçoit une commission de ses partenaires bancaires et courtiers lorsqu&apos;un utilisateur est mis en relation via notre plateforme. Ce service est entièrement gratuit pour l&apos;utilisateur.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">Avertissement</h2>
            <p>Les informations fournies sur ce site sont à titre indicatif uniquement et ne constituent pas un conseil financier. Consultez un professionnel hypothécaire agréé pour des recommandations personnalisées.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">Propriété intellectuelle</h2>
            <p>Tous les contenus de ce site sont protégés par le droit d&apos;auteur. Toute reproduction sans autorisation est interdite.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
