import Link from "next/link";

// Rich blog content for each article, using official CMHC/SCHL data
// Each article has multiple CTAs back to /wizard

const WizardCta = ({ variant = "light" }: { variant?: "light" | "dark" }) => (
  <div className={`rounded-xl p-6 not-prose ${variant === "dark" ? "bg-gray-900 text-white" : "bg-gold-light"}`}>
    <p className="font-medium text-sm mb-2">
      {variant === "dark" ? "Prêt à passer à l'action ?" : "Découvrez vos options personnalisées"}
    </p>
    <p className={`text-xs mb-3 ${variant === "dark" ? "text-gray-400" : "text-gray-500"}`}>
      Notre wizard gratuit analyse votre situation en 5 minutes et vous connecte aux meilleurs courtiers.
    </p>
    <Link href="/wizard" className="inline-block bg-gold text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-gold-dark transition">
      Commencer le Wizard &rarr;
    </Link>
  </div>
);

export const blogContentMap: Record<string, React.ReactNode> = {
  // ====================================================
  // ARTICLE 1: GUIDE PRINCIPAL (PILIER SEO)
  // ====================================================
  "hypotheque-immigrants-canada-guide": (
    <>
      <p>
        Obtenir une hypothèque en tant qu&apos;immigrant au Canada est non seulement possible, mais de plus en plus
        accessible grâce au <strong>programme SCHL Nouveaux Arrivants</strong> et aux programmes bancaires dédiés.
        Ce guide complet couvre tout ce que vous devez savoir.
      </p>

      <h2 className="font-serif text-xl text-gray-900">Le programme SCHL Nouveaux Arrivants</h2>
      <p>
        La <strong>Société canadienne d&apos;hypothèques et de logement (SCHL/CMHC)</strong> offre un programme
        spécifique pour les nouveaux arrivants, que vous soyez résident permanent ou travailleur temporaire autorisé.
      </p>
      <ul className="space-y-2">
        <li><strong>Admissibilité :</strong> Immigré au Canada depuis 5 ans ou moins</li>
        <li><strong>Statuts acceptés :</strong> Résidents permanents et résidents non permanents avec permis de travail</li>
        <li><strong>Mise de fonds minimum :</strong> 5% sur les premiers 500 000$ + 10% au-dessus</li>
        <li><strong>Score de crédit minimum :</strong> 600 (ou crédit alternatif accepté)</li>
        <li><strong>Ratios d&apos;endettement :</strong> ABD max 35% / ATD max 42% (programme Nouveaux Arrivants)</li>
        <li><strong>Amortissement max :</strong> 25 ans (30 ans pour premiers acheteurs, depuis déc. 2024)</li>
        <li><strong>Prix max propriété assurée :</strong> 1 500 000$ (hausse de déc. 2024, était 1M$)</li>
      </ul>

      <WizardCta />

      <h2 className="font-serif text-xl text-gray-900">Le crédit alternatif : pas besoin d&apos;historique canadien</h2>
      <p>
        L&apos;un des plus grands avantages du programme SCHL Nouveaux Arrivants est l&apos;acceptation de
        <strong> preuves alternatives de solvabilité</strong> si vous n&apos;avez pas d&apos;historique de crédit canadien :
      </p>
      <ul className="space-y-2">
        <li>Confirmation de paiement de loyer sur 12 mois</li>
        <li>Historique de paiement de factures (téléphone, internet, services)</li>
        <li>Relevés bancaires montrant une épargne régulière sur 12 mois</li>
        <li>Rapport de crédit international du pays d&apos;origine</li>
        <li>Références bancaires d&apos;institutions financières étrangères</li>
      </ul>

      <h2 className="font-serif text-xl text-gray-900">Les 6 grandes banques et leurs programmes</h2>
      <p>Chaque grande banque canadienne a son propre programme pour les immigrants :</p>
      <ul className="space-y-2">
        <li><strong>RBC :</strong> Programme Welcome to Canada — mise de fonds 5% à 35% selon situation, accepte références bancaires étrangères</li>
        <li><strong>TD :</strong> Programme Nouveaux Arrivants — pas de crédit canadien requis pour RP</li>
        <li><strong>Scotiabank :</strong> Programme StartRight — disponible aux résidents temporaires</li>
        <li><strong>BMO :</strong> NewStart — garantie de taux 130 jours + carte crédit pour bâtir le score</li>
        <li><strong>CIBC :</strong> 3 programmes distincts (Standard, PLUS, Travailleurs Étrangers)</li>
        <li><strong>Desjardins :</strong> Spécialiste Québec, carte crédit gratuite pour newcomers</li>
      </ul>

      <WizardCta variant="dark" />

      <h2 className="font-serif text-xl text-gray-900">Le stress test hypothécaire</h2>
      <p>
        Toutes les hypothèques assurées SCHL doivent passer le <strong>stress test</strong> : vous devez vous qualifier
        au <strong>taux contractuel + 2% ou à 5,25%</strong>, le plus élevé des deux. Par exemple, si votre taux
        contractuel est de 4,5%, vous devez démontrer pouvoir supporter un taux de 6,5%.
      </p>

      <h2 className="font-serif text-xl text-gray-900">L&apos;assurance SCHL : primes par ratio prêt-valeur</h2>
      <p>Si votre mise de fonds est inférieure à 20%, l&apos;assurance SCHL est obligatoire :</p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4">Ratio prêt-valeur</th>
              <th className="text-left py-2">Prime (% du prêt)</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">65% et moins</td><td>0,60%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">65,01% - 75%</td><td>1,70%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">75,01% - 80%</td><td>2,40%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">80,01% - 85%</td><td>2,80%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">85,01% - 90%</td><td>3,10%</td></tr>
            <tr><td className="py-2 pr-4">90,01% - 95%</td><td>4,00%</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="font-serif text-xl text-gray-900">Points importants à savoir</h2>
      <ul className="space-y-2">
        <li>Votre mise de fonds doit provenir de vos fonds propres ou d&apos;un don non remboursable — les fonds empruntés ne sont plus acceptés</li>
        <li>Le revenu locatif étranger n&apos;est PAS inclus dans les calculs SCHL</li>
        <li>Les dettes étrangères SONT incluses dans le calcul de votre ratio d&apos;endettement</li>
        <li>La propriété doit être occupée par le propriétaire (1 à 4 logements)</li>
        <li>La Loi sur l&apos;interdiction d&apos;achat de propriétés résidentielles par des non-Canadiens peut s&apos;appliquer aux résidents non permanents</li>
      </ul>

      <WizardCta />
    </>
  ),

  // ====================================================
  // ARTICLE 2: PERMIS DE TRAVAIL
  // ====================================================
  "hypotheque-permis-travail": (
    <>
      <p>
        Bonne nouvelle : vous <strong>pouvez</strong> obtenir une hypothèque avec un permis de travail temporaire au Canada.
        Le programme SCHL Nouveaux Arrivants accepte les résidents non permanents légalement autorisés à travailler au Canada.
      </p>

      <h2 className="font-serif text-xl text-gray-900">Conditions spécifiques pour les travailleurs temporaires</h2>
      <ul className="space-y-2">
        <li><strong>Permis de travail valide</strong> (fermé ou ouvert)</li>
        <li><strong>Minimum 3 mois d&apos;emploi canadien</strong> (sauf relocalisation par l&apos;employeur)</li>
        <li><strong>Score de crédit :</strong> 600 minimum ou crédit alternatif (12 mois de loyer payé)</li>
        <li><strong>Mise de fonds :</strong> 5% minimum (certaines banques demandent plus, jusqu&apos;à 35%)</li>
      </ul>

      <WizardCta />

      <h2 className="font-serif text-xl text-gray-900">Programmes bancaires pour travailleurs temporaires</h2>
      <ul className="space-y-2">
        <li><strong>Scotiabank StartRight :</strong> Spécifiquement disponible aux résidents temporaires, mise de fonds 5%</li>
        <li><strong>CIBC Travailleurs Étrangers :</strong> Programme dédié, pas de crédit canadien requis</li>
        <li><strong>RBC :</strong> Accepte certains travailleurs temporaires, mise de fonds 35% si &lt; 2 ans d&apos;emploi</li>
      </ul>

      <h2 className="font-serif text-xl text-gray-900">Restriction importante</h2>
      <p>
        La <strong>Loi sur l&apos;interdiction d&apos;achat de propriétés résidentielles par des non-Canadiens</strong> peut
        affecter votre admissibilité. Des exemptions existent pour certains travailleurs temporaires.
        Nos courtiers spécialisés connaissent les nuances de cette loi.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 3: RÉSIDENCE PERMANENTE
  // ====================================================
  "hypotheque-residence-permanente": (
    <>
      <p>
        En tant que résident permanent (RP), vous avez accès à <strong>tous les produits d&apos;assurance prêt hypothécaire SCHL</strong>,
        pas seulement le programme Nouveaux Arrivants. C&apos;est le statut le plus avantageux pour obtenir une hypothèque au Canada après la citoyenneté.
      </p>

      <h2 className="font-serif text-xl text-gray-900">Avantages du statut RP</h2>
      <ul className="space-y-2">
        <li><strong>Accès complet :</strong> Tous les produits SCHL disponibles</li>
        <li><strong>Mise de fonds 5% :</strong> Minimum standard comme tout Canadien</li>
        <li><strong>Crédit alternatif :</strong> Accepté si au Canada depuis 5 ans ou moins</li>
        <li><strong>Toutes les banques :</strong> RBC, TD, Scotiabank, BMO, CIBC, Desjardins ont des programmes RP</li>
        <li><strong>Aucune restriction :</strong> La loi sur les non-Canadiens ne s&apos;applique PAS aux RP</li>
      </ul>

      <WizardCta />

      <h2 className="font-serif text-xl text-gray-900">Ce que les banques offrent aux RP</h2>
      <ul className="space-y-2">
        <li><strong>TD :</strong> Pas de crédit canadien requis pour RP de 5 ans et moins</li>
        <li><strong>CIBC Programme PLUS :</strong> Pour les Canadiens de retour et RP établis</li>
        <li><strong>BMO NewStart :</strong> Carte crédit gratuite pour bâtir le score + garantie taux 130 jours</li>
      </ul>

      <h2 className="font-serif text-xl text-gray-900">Amortissement 30 ans (nouveau 2024)</h2>
      <p>
        Si c&apos;est votre <strong>première propriété</strong>, vous pouvez maintenant bénéficier d&apos;un amortissement de 30 ans
        (au lieu de 25 ans standard). Cela réduit vos paiements mensuels et augmente votre capacité d&apos;emprunt.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 4: QUÉBEC
  // ====================================================
  "hypotheque-quebec": (
    <>
      <p>
        Le marché hypothécaire québécois a ses particularités. Si vous êtes immigrant au Québec, voici ce que
        vous devez savoir pour obtenir votre hypothèque.
      </p>

      <h2 className="font-serif text-xl text-gray-900">Desjardins : votre allié au Québec</h2>
      <p>
        <strong>Mouvement Desjardins</strong> est le plus grand groupe coopératif financier du Québec et offre des avantages
        uniques pour les immigrants :
      </p>
      <ul className="space-y-2">
        <li>Service en français garanti dans toutes les caisses</li>
        <li>Carte de crédit gratuite pour bâtir votre historique</li>
        <li>Taux compétitifs spécifiques au marché québécois</li>
        <li>Connaissance approfondie des particularités immobilières du Québec</li>
        <li>Programme Nouveaux Arrivants avec accompagnement personnalisé</li>
      </ul>

      <WizardCta />

      <h2 className="font-serif text-xl text-gray-900">Particularités du Québec</h2>
      <ul className="space-y-2">
        <li><strong>Notaire obligatoire :</strong> Au Québec, c&apos;est un notaire (pas un avocat) qui complète la transaction</li>
        <li><strong>Taxe de bienvenue :</strong> Droits de mutation immobilière (taxe de bienvenue) à prévoir à l&apos;achat</li>
        <li><strong>Inspection préachat :</strong> Fortement recommandée et courante au Québec</li>
        <li><strong>Certificat de localisation :</strong> Document obligatoire pour toute transaction</li>
      </ul>

      <h2 className="font-serif text-xl text-gray-900">Marché immobilier québécois</h2>
      <p>
        Le Québec offre généralement des prix plus accessibles que l&apos;Ontario et la Colombie-Britannique, avec
        un marché dynamique à Montréal, Québec, Gatineau et les régions. Le prix maximum pour une propriété
        assurée SCHL est de 1,5 million $ — largement suffisant pour la majorité des marchés québécois.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 5: COMBIEN EMPRUNTER
  // ====================================================
  "combien-emprunter": (
    <>
      <p>
        Calculer votre capacité d&apos;emprunt dépend de plusieurs facteurs officiels définis par la SCHL.
        Voici comment estimer combien vous pouvez emprunter.
      </p>

      <h2 className="font-serif text-xl text-gray-900">Les ratios d&apos;endettement SCHL</h2>
      <p>La SCHL utilise deux ratios pour déterminer votre capacité d&apos;emprunt :</p>
      <ul className="space-y-2">
        <li><strong>ABD (Amortissement Brut de la Dette) / GDS :</strong> Maximum 39% (35% pour le programme Nouveaux Arrivants). C&apos;est le ratio entre vos coûts de logement et votre revenu brut.</li>
        <li><strong>ATD (Amortissement Total de la Dette) / TDS :</strong> Maximum 44% (42% pour Nouveaux Arrivants). C&apos;est le ratio entre TOUTES vos dettes et votre revenu brut.</li>
      </ul>

      <h2 className="font-serif text-xl text-gray-900">Exemple concret</h2>
      <p>
        Avec un revenu annuel de <strong>100 000$</strong> et aucune autre dette, le ratio ABD de 39% vous permet
        des paiements hypothécaires mensuels d&apos;environ <strong>3 250$</strong>. Cela représente environ
        <strong> 71 000$</strong> de capacité d&apos;emprunt additionnelle par rapport aux anciennes règles.
      </p>

      <WizardCta />

      <h2 className="font-serif text-xl text-gray-900">Le stress test</h2>
      <p>
        Attention : vos ratios sont calculés au <strong>taux du stress test</strong>, pas au taux contractuel.
        Le stress test utilise le plus élevé entre votre taux contractuel + 2% et 5,25%.
      </p>

      <h2 className="font-serif text-xl text-gray-900">Ce qui est inclus / exclu</h2>
      <ul className="space-y-2">
        <li><strong>Inclus :</strong> Revenu d&apos;emploi canadien, dettes canadiennes et étrangères</li>
        <li><strong>Exclu :</strong> Revenu locatif étranger (ne compte PAS dans le calcul SCHL)</li>
        <li><strong>Mise de fonds :</strong> Fonds propres ou don non remboursable uniquement</li>
      </ul>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 6: DOCUMENTS
  // ====================================================
  "documents-hypotheque": (
    <>
      <p>
        Voici la <strong>checklist complète</strong> des documents requis pour votre demande d&apos;hypothèque
        en tant qu&apos;immigrant au Canada.
      </p>

      <h2 className="font-serif text-xl text-gray-900">1. Documents d&apos;identité</h2>
      <ul className="space-y-1">
        <li>Passeport valide</li>
        <li>Carte de résidence permanente (RP)</li>
        <li>Permis de travail valide (travailleurs temporaires)</li>
        <li>Visa de travail avec date d&apos;expiration</li>
      </ul>

      <h2 className="font-serif text-xl text-gray-900">2. Preuves de revenus</h2>
      <ul className="space-y-1">
        <li>Lettre d&apos;emploi (date d&apos;embauche, salaire, poste)</li>
        <li>2 derniers talons de paie</li>
        <li>Avis de cotisation T4 (si disponible)</li>
        <li>Déclaration de revenus (si au Canada &gt; 1 an)</li>
        <li>Contrat de travail</li>
      </ul>

      <WizardCta />

      <h2 className="font-serif text-xl text-gray-900">3. Documents financiers</h2>
      <ul className="space-y-1">
        <li>Relevés bancaires des 3 derniers mois (Canada)</li>
        <li>Relevés bancaires du pays d&apos;origine (si applicable)</li>
        <li>Preuve de mise de fonds (source des fonds)</li>
        <li>Lettre de don (si apport est un cadeau familial)</li>
        <li>Relevé des dettes existantes</li>
      </ul>

      <h2 className="font-serif text-xl text-gray-900">4. Crédit alternatif (si pas de crédit canadien)</h2>
      <p>La SCHL accepte ces preuves alternatives :</p>
      <ul className="space-y-1">
        <li>12 mois de paiements de loyer (reçus ou relevés)</li>
        <li>Historique de paiement de factures (téléphone, internet)</li>
        <li>Rapport de crédit international</li>
        <li>Relevés d&apos;épargne régulière sur 12 mois</li>
        <li>Références bancaires du pays d&apos;origine</li>
      </ul>

      <h2 className="font-serif text-xl text-gray-900">5. Documents pour la propriété</h2>
      <ul className="space-y-1">
        <li>Offre d&apos;achat signée</li>
        <li>Évaluation de la propriété (si requise)</li>
        <li>Certificat de localisation</li>
        <li>Rapport d&apos;inspection préachat (recommandé)</li>
      </ul>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 7: BANQUES
  // ====================================================
  "banques-hypotheque": (
    <>
      <p>
        Voici une comparaison détaillée des programmes hypothécaires pour immigrants offerts par les 6 grandes
        banques canadiennes.
      </p>

      <h2 className="font-serif text-xl text-gray-900">RBC — Programme Welcome to Canada</h2>
      <ul className="space-y-1">
        <li>Mise de fonds : 5% avec RP, 35% si moins de 2 ans d&apos;emploi</li>
        <li>Accepte références bancaires du pays d&apos;origine</li>
        <li>Résidents permanents et certains travailleurs temporaires</li>
      </ul>

      <h2 className="font-serif text-xl text-gray-900">TD — Programme Nouveaux Arrivants</h2>
      <ul className="space-y-1">
        <li>Pas d&apos;historique crédit canadien requis pour RP</li>
        <li>Disponible aux RP de 5 ans et moins</li>
        <li>Taux fixe et variable compétitifs</li>
      </ul>

      <h2 className="font-serif text-xl text-gray-900">Scotiabank — StartRight</h2>
      <ul className="space-y-1">
        <li>Disponible aux résidents temporaires (un avantage rare)</li>
        <li>Mise de fonds 5% minimum</li>
        <li>Accompagnement complet pour newcomers</li>
      </ul>

      <WizardCta />

      <h2 className="font-serif text-xl text-gray-900">BMO — Programme NewStart</h2>
      <ul className="space-y-1">
        <li>Carte de crédit NewStart pour bâtir le score rapidement</li>
        <li>Garantie de taux 130 jours (vs 120 jours standard)</li>
        <li>Options flexibles d&apos;amortissement</li>
      </ul>

      <h2 className="font-serif text-xl text-gray-900">CIBC — 3 programmes distincts</h2>
      <ul className="space-y-1">
        <li><strong>Standard :</strong> Pour les nouveaux arrivants au Canada</li>
        <li><strong>PLUS :</strong> Pour les résidents de retour au Canada</li>
        <li><strong>Travailleurs Étrangers :</strong> Pour les détenteurs de permis de travail</li>
        <li>Pas de crédit canadien requis, accompagnement multilingue</li>
      </ul>

      <h2 className="font-serif text-xl text-gray-900">Desjardins — Spécialiste Québec</h2>
      <ul className="space-y-1">
        <li>Carte de crédit gratuite pour bâtir le score</li>
        <li>Service en français garanti</li>
        <li>Taux très compétitifs au Québec</li>
        <li>Connaissance unique du marché québécois</li>
      </ul>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 8: MAUVAIS CRÉDIT
  // ====================================================
  "mauvais-credit": (
    <>
      <p>
        Un score de crédit faible ne signifie pas que l&apos;accession à la propriété est impossible.
        Le score minimum SCHL est de <strong>600</strong> (abaissé de 680 en juillet 2021).
      </p>

      <h2 className="font-serif text-xl text-gray-900">Score minimum : 600</h2>
      <p>
        Depuis 2021, la SCHL a abaissé le score de crédit minimum de 680 à <strong>600</strong>.
        Si votre score est entre 600 et 650, vous pouvez toujours obtenir une hypothèque assurée SCHL,
        bien que les conditions puissent être plus strictes.
      </p>

      <WizardCta />

      <h2 className="font-serif text-xl text-gray-900">Options avec crédit faible</h2>
      <ul className="space-y-2">
        <li><strong>Assurance SCHL :</strong> Accepte score 600+ — pas besoin d&apos;un score parfait</li>
        <li><strong>Mise de fonds plus élevée :</strong> Offrir 10-20% peut compenser un score faible</li>
        <li><strong>Co-emprunteur :</strong> Un conjoint ou garant avec meilleur crédit peut renforcer le dossier</li>
        <li><strong>Prêteurs alternatifs :</strong> Des prêteurs B acceptent des scores plus bas (mais taux plus élevés)</li>
      </ul>

      <h2 className="font-serif text-xl text-gray-900">Améliorer votre score rapidement</h2>
      <ul className="space-y-2">
        <li>Obtenez une carte de crédit sécurisée (BMO NewStart, Desjardins)</li>
        <li>Payez toutes vos factures à temps, sans exception</li>
        <li>Gardez votre utilisation du crédit sous 30% de la limite</li>
        <li>Ne faites pas trop de demandes de crédit en peu de temps</li>
        <li>Visez 12 mois d&apos;historique de paiement parfait</li>
      </ul>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 9: SANS HISTORIQUE CRÉDIT
  // ====================================================
  "sans-historique-credit": (
    <>
      <p>
        Pas d&apos;historique de crédit canadien ? Ce n&apos;est <strong>pas un obstacle</strong>. Le programme SCHL
        Nouveaux Arrivants accepte spécifiquement des preuves alternatives de solvabilité.
      </p>

      <h2 className="font-serif text-xl text-gray-900">Crédit alternatif accepté par la SCHL</h2>
      <p>
        La SCHL permet aux prêteurs d&apos;utiliser des <strong>méthodes alternatives</strong> pour évaluer votre
        solvabilité. Vous devez fournir au moins <strong>2 types de preuves</strong> sur les 12 derniers mois :
      </p>
      <ul className="space-y-2">
        <li><strong>Paiements de loyer :</strong> Reçus de loyer ou relevés bancaires montrant des paiements réguliers sur 12 mois</li>
        <li><strong>Factures récurrentes :</strong> Téléphone, internet, électricité, assurance — payées à temps sur 12 mois</li>
        <li><strong>Épargne régulière :</strong> Relevés montrant des dépôts constants sur 12 mois</li>
        <li><strong>Crédit international :</strong> Rapport de crédit de votre pays d&apos;origine (Equifax, TransUnion international)</li>
        <li><strong>Références bancaires :</strong> Lettres de votre banque à l&apos;étranger confirmant votre bon historique</li>
      </ul>

      <WizardCta />

      <h2 className="font-serif text-xl text-gray-900">Banques qui n&apos;exigent PAS de crédit canadien</h2>
      <ul className="space-y-2">
        <li><strong>TD :</strong> Pas de crédit canadien requis pour RP de 5 ans et moins</li>
        <li><strong>CIBC :</strong> Aucun historique requis pour les 3 programmes Nouveaux Arrivants</li>
        <li><strong>BMO :</strong> Programme NewStart avec carte crédit gratuite pour démarrer</li>
        <li><strong>Desjardins :</strong> Carte crédit gratuite dès l&apos;ouverture de compte</li>
      </ul>

      <h2 className="font-serif text-xl text-gray-900">Bâtir votre crédit en parallèle</h2>
      <p>
        Pendant que vous préparez votre dossier hypothécaire, commencez à bâtir votre crédit canadien.
        En 6 à 12 mois d&apos;utilisation responsable d&apos;une carte de crédit, vous pouvez atteindre un score
        de 650+ — ce qui ouvre encore plus d&apos;options.
      </p>

      <WizardCta variant="dark" />
    </>
  ),
};
