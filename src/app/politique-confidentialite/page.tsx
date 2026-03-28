import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politique de Confidentialité",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="py-20 bg-light-blue min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-3xl md:text-4xl font-extrabold text-navy mb-8">Politique de Confidentialité</h1>
        <div className="bg-white rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] space-y-6 text-sm text-dark/70 leading-relaxed">
          <div>
            <h2 className="text-lg font-bold text-navy mb-2">Conformité PIPEDA</h2>
            <p>guide-hypotheque.ca est conforme à la Loi sur la protection des renseignements personnels et les documents électroniques (PIPEDA) du Canada.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy mb-2">Collecte des données</h2>
            <p>Nous collectons les données que vous fournissez volontairement via notre wizard et formulaires : prénom, nom, email, téléphone, statut d&apos;immigration, province, revenu approximatif, et historique de crédit. Des données de navigation anonymisées sont également collectées.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy mb-2">Utilisation des données</h2>
            <p>Vos données sont utilisées pour : vous mettre en relation avec des courtiers et banques partenaires (avec votre consentement explicite), vous envoyer des communications liées à votre demande, et améliorer nos services.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy mb-2">Partage des données</h2>
            <p>Vos données personnelles sont partagées uniquement avec les courtiers et banques partenaires que vous avez autorisés via la case de consentement dans notre wizard. Nous ne vendons jamais vos données à des tiers non autorisés.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy mb-2">Conservation des données</h2>
            <p>Vos données sont conservées pendant une durée maximale de 12 mois après votre dernière interaction. Passé ce délai, elles sont automatiquement supprimées de nos systèmes.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy mb-2">Cookies</h2>
            <p>Ce site utilise des cookies pour améliorer votre expérience, analyser le trafic (Google Analytics), et suivre les conversions (Google Ads, Facebook Pixel).</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy mb-2">Vos droits</h2>
            <p>Vous avez le droit d&apos;accéder, modifier ou supprimer vos données personnelles à tout moment. Vous pouvez vous désinscrire de toute communication en un clic. Contactez-nous à info@guide-hypotheque.ca pour toute demande.</p>
          </div>
          <div>
            <h2 className="text-lg font-bold text-navy mb-2">Contact</h2>
            <p>Pour toute question relative à la confidentialité : info@guide-hypotheque.ca</p>
          </div>
        </div>
      </div>
    </section>
  );
}
