import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politique de Confidentialit\u00e9",
  description: "Politique de confidentialit\u00e9 de guide-hypotheque.ca. Conformit\u00e9 RGPD, Loi 25 (Qu\u00e9bec) et PIPEDA (Canada).",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="font-serif text-3xl md:text-4xl mb-2">Politique de Confidentialit&eacute;</h1>
        <p className="text-sm text-gray-400 mb-8">Derni&egrave;re mise &agrave; jour : 4 avril 2026</p>

        <div className="bg-white rounded-2xl p-8 shadow-sm space-y-8 text-sm text-gray-600 leading-relaxed">

          {/* 1. Introduction */}
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">1. Introduction</h2>
            <p>
              guide-hypotheque.ca (&laquo; nous &raquo;, &laquo; notre &raquo;) s&apos;engage &agrave; prot&eacute;ger vos renseignements personnels conform&eacute;ment
              aux lois applicables, incluant :
            </p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>PIPEDA</strong> &mdash; Loi sur la protection des renseignements personnels et les documents &eacute;lectroniques (Canada)</li>
              <li><strong>Loi 25</strong> &mdash; Loi modernisant des dispositions l&eacute;gislatives en mati&egrave;re de protection des renseignements personnels (Qu&eacute;bec)</li>
              <li><strong>RGPD</strong> &mdash; R&egrave;glement g&eacute;n&eacute;ral sur la protection des donn&eacute;es (Union europ&eacute;enne / EEE)</li>
            </ul>
          </div>

          {/* 2. Responsable */}
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">2. Responsable du traitement</h2>
            <p>
              Le responsable du traitement des donn&eacute;es personnelles est guide-hypotheque.ca.<br />
              Courriel du responsable de la protection des donn&eacute;es : <strong>privacy@guide-hypotheque.ca</strong>
            </p>
          </div>

          {/* 3. Données collectées */}
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">3. Donn&eacute;es collect&eacute;es</h2>
            <p>Nous collectons les donn&eacute;es suivantes :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Donn&eacute;es fournies volontairement :</strong> pr&eacute;nom, nom, courriel, t&eacute;l&eacute;phone, statut d&apos;immigration, province, revenu approximatif, historique de cr&eacute;dit (via le wizard et les formulaires)</li>
              <li><strong>Donn&eacute;es de navigation :</strong> adresse IP (anonymis&eacute;e), type de navigateur, pages visit&eacute;es, dur&eacute;e de la visite</li>
              <li><strong>Cookies :</strong> voir la section &laquo; Cookies &raquo; ci-dessous</li>
            </ul>
          </div>

          {/* 4. Finalités */}
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">4. Finalit&eacute;s du traitement</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Vous mettre en relation avec des courtiers et banques partenaires (avec votre consentement explicite)</li>
              <li>Vous envoyer des communications li&eacute;es &agrave; votre demande</li>
              <li>Am&eacute;liorer nos services et l&apos;exp&eacute;rience utilisateur</li>
              <li>Analyser le trafic et les performances du site (si vous y consentez)</li>
              <li>Se conformer &agrave; nos obligations l&eacute;gales</li>
            </ul>
          </div>

          {/* 5. Base juridique (RGPD) */}
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">5. Base juridique du traitement (RGPD)</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Consentement :</strong> pour l&apos;envoi de communications marketing et le d&eacute;p&ocirc;t de cookies non essentiels</li>
              <li><strong>Int&eacute;r&ecirc;t l&eacute;gitime :</strong> pour l&apos;am&eacute;lioration de nos services et la s&eacute;curit&eacute; du site</li>
              <li><strong>Ex&eacute;cution d&apos;un contrat :</strong> pour le traitement de votre demande de mise en relation</li>
            </ul>
          </div>

          {/* 6. Cookies */}
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">6. Cookies</h2>
            <p>Notre site utilise trois cat&eacute;gories de cookies :</p>
            <div className="overflow-x-auto mt-3">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="border-b border-gray-200 text-left">
                    <th className="py-2 pr-3">Cat&eacute;gorie</th>
                    <th className="py-2 pr-3">Finalit&eacute;</th>
                    <th className="py-2 pr-3">Dur&eacute;e</th>
                    <th className="py-2">Consentement</th>
                  </tr>
                </thead>
                <tbody className="text-gray-500">
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-3 font-semibold">Essentiels</td>
                    <td className="pr-3">Fonctionnement du site, s&eacute;curit&eacute;, pr&eacute;f&eacute;rences de cookies</td>
                    <td className="pr-3">Session / 1 an</td>
                    <td>Toujours actifs</td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-2 pr-3 font-semibold">Analytiques</td>
                    <td className="pr-3">Mesure d&apos;audience, am&eacute;lioration du site (Google Analytics)</td>
                    <td className="pr-3">Jusqu&apos;&agrave; 26 mois</td>
                    <td>Requis</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-3 font-semibold">Marketing</td>
                    <td className="pr-3">Publicit&eacute; cibl&eacute;e, suivi de conversions (Google Ads, Meta Pixel)</td>
                    <td className="pr-3">Jusqu&apos;&agrave; 13 mois</td>
                    <td>Requis</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-3">
              Vous pouvez modifier vos pr&eacute;f&eacute;rences de cookies &agrave; tout moment en supprimant vos donn&eacute;es locales
              ou en utilisant le bandeau de consentement qui appara&icirc;t lors de votre premi&egrave;re visite.
            </p>
          </div>

          {/* 7. Partage */}
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">7. Partage des donn&eacute;es</h2>
            <p>Vos donn&eacute;es personnelles sont partag&eacute;es uniquement avec :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Les courtiers et banques partenaires que vous avez <strong>explicitement autoris&eacute;s</strong> via le wizard</li>
              <li>Nos fournisseurs de services techniques (h&eacute;bergement, analytics) agissant en tant que sous-traitants</li>
            </ul>
            <p className="mt-2"><strong>Nous ne vendons jamais vos donn&eacute;es &agrave; des tiers.</strong></p>
          </div>

          {/* 8. Transferts internationaux */}
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">8. Transferts internationaux de donn&eacute;es</h2>
            <p>
              Certains de nos fournisseurs (h&eacute;bergement, analytics) peuvent traiter vos donn&eacute;es en dehors du Canada
              ou de l&apos;EEE. Dans ce cas, nous nous assurons que des garanties ad&eacute;quates sont en place
              (clauses contractuelles types, d&eacute;cisions d&apos;ad&eacute;quation, ou consentement explicite).
            </p>
          </div>

          {/* 9. Conservation */}
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">9. Conservation des donn&eacute;es</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Donn&eacute;es de formulaire :</strong> 12 mois apr&egrave;s votre derni&egrave;re interaction</li>
              <li><strong>Donn&eacute;es de navigation :</strong> 26 mois maximum (anonymis&eacute;es)</li>
              <li><strong>Cookies :</strong> selon la dur&eacute;e indiqu&eacute;e dans le tableau ci-dessus</li>
            </ul>
            <p className="mt-2">Pass&eacute; ces d&eacute;lais, les donn&eacute;es sont automatiquement supprim&eacute;es ou anonymis&eacute;es.</p>
          </div>

          {/* 10. Vos droits */}
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">10. Vos droits</h2>
            <p>Conform&eacute;ment au RGPD, &agrave; la Loi 25 et &agrave; PIPEDA, vous avez le droit de :</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong>Acc&egrave;s :</strong> obtenir une copie de vos donn&eacute;es personnelles</li>
              <li><strong>Rectification :</strong> corriger des donn&eacute;es inexactes ou incompl&egrave;tes</li>
              <li><strong>Suppression :</strong> demander l&apos;effacement de vos donn&eacute;es (&laquo; droit &agrave; l&apos;oubli &raquo;)</li>
              <li><strong>Portabilit&eacute; :</strong> recevoir vos donn&eacute;es dans un format structur&eacute; et lisible (RGPD)</li>
              <li><strong>Opposition :</strong> vous opposer au traitement de vos donn&eacute;es pour des motifs l&eacute;gitimes</li>
              <li><strong>Retrait du consentement :</strong> retirer votre consentement &agrave; tout moment, sans affecter la lic&eacute;it&eacute; du traitement ant&eacute;rieur</li>
              <li><strong>D&eacute;sindexation :</strong> demander la cessation de la diffusion de vos donn&eacute;es (Loi 25)</li>
            </ul>
            <p className="mt-2">
              Pour exercer ces droits, contactez-nous &agrave; <strong>privacy@guide-hypotheque.ca</strong>.
              Nous r&eacute;pondrons dans un d&eacute;lai de <strong>30 jours</strong> (PIPEDA/Loi 25) ou <strong>1 mois</strong> (RGPD).
            </p>
          </div>

          {/* 11. Incidents */}
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">11. Incidents de confidentialit&eacute;</h2>
            <p>
              En cas d&apos;incident impliquant vos donn&eacute;es personnelles pr&eacute;sentant un risque de pr&eacute;judice, nous vous
              en aviserons dans les meilleurs d&eacute;lais et notifierons la <strong>Commission d&apos;acc&egrave;s &agrave;
              l&apos;information du Qu&eacute;bec (CAI)</strong> et/ou l&apos;autorit&eacute; de protection comp&eacute;tente (CNIL pour l&apos;UE)
              conform&eacute;ment &agrave; la loi.
            </p>
          </div>

          {/* 12. Mineurs */}
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">12. Protection des mineurs</h2>
            <p>
              Notre site n&apos;est pas destin&eacute; aux personnes de moins de 18 ans. Nous ne collectons pas
              sciemment de donn&eacute;es personnelles de mineurs.
            </p>
          </div>

          {/* 13. Modifications */}
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">13. Modifications de cette politique</h2>
            <p>
              Nous pouvons mettre &agrave; jour cette politique. En cas de modification substantielle, nous vous
              en informerons via un nouveau bandeau de consentement sur le site. La date de derni&egrave;re
              mise &agrave; jour est indiqu&eacute;e en haut de cette page.
            </p>
          </div>

          {/* 14. Contact */}
          <div>
            <h2 className="font-serif text-lg text-gray-900 mb-2">14. Contact</h2>
            <p>
              Pour toute question relative &agrave; la confidentialit&eacute; ou pour exercer vos droits :<br />
              Courriel : <strong>privacy@guide-hypotheque.ca</strong><br />
              Vous pouvez &eacute;galement d&eacute;poser une plainte aupr&egrave;s de la{" "}
              <a href="https://www.cai.gouv.qc.ca" target="_blank" rel="noopener noreferrer" className="text-gold underline hover:text-gold-dark">
                Commission d&apos;acc&egrave;s &agrave; l&apos;information du Qu&eacute;bec
              </a>{" "}
              ou du{" "}
              <a href="https://www.priv.gc.ca" target="_blank" rel="noopener noreferrer" className="text-gold underline hover:text-gold-dark">
                Commissariat &agrave; la protection de la vie priv&eacute;e du Canada
              </a>.
            </p>
          </div>

          {/* Back link */}
          <div className="pt-4 border-t border-gray-100">
            <Link href="/" className="text-gold font-semibold text-sm hover:underline">
              &larr; Retour &agrave; l&apos;accueil
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
