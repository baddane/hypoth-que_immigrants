import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-3xl md:text-4xl mb-8">Politique de Confidentialité</h1>
        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-6 text-sm text-gray-600 leading-relaxed">
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">Collecte des données</h2>
            <p>Nous collectons les données que vous fournissez volontairement via nos formulaires (nom, email, téléphone, statut d&apos;immigration) ainsi que des données de navigation anonymisées.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">Utilisation des données</h2>
            <p>Vos données sont utilisées pour : vous fournir des résultats personnalisés via notre wizard, vous contacter si vous en faites la demande, améliorer nos services, et vous envoyer notre newsletter (avec votre consentement).</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">Partage des données</h2>
            <p>Nous ne vendons jamais vos données personnelles. Nous pouvons partager des données anonymisées avec nos partenaires bancaires pour améliorer nos recommandations.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">Cookies</h2>
            <p>Ce site utilise des cookies pour améliorer votre expérience, analyser le trafic (Google Analytics) et personnaliser les contenus.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">Vos droits</h2>
            <p>Conformément à la loi canadienne sur la protection des renseignements personnels, vous avez le droit d&apos;accéder, modifier ou supprimer vos données personnelles. Contactez-nous pour toute demande.</p>
          </div>
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">Contact</h2>
            <p>Pour toute question relative à la confidentialité : info@hypotheque-immigrants-canada.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
