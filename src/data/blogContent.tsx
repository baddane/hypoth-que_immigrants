import Link from "next/link";
import InternalLink from "@/components/InternalLink";

// Rich blog content for each article, using official CMHC/SCHL data
// Each article has multiple CTAs back to /wizard + internal links + external links

const WizardCta = ({ variant = "light" }: { variant?: "light" | "dark" }) => (
  <div className={`rounded-2xl p-6 not-prose ${variant === "dark" ? "bg-midnight text-white" : "bg-gold-light border border-gold/20"}`}>
    <p className={`font-semibold text-sm mb-2 ${variant === "dark" ? "text-white" : "text-midnight"}`}>
      {variant === "dark" ? "Prêt à passer à l\u2019action ?" : "Découvrez vos options personnalisées"}
    </p>
    <p className={`text-xs mb-3 ${variant === "dark" ? "text-gray-400" : "text-gray-500"}`}>
      Notre wizard gratuit analyse votre situation en 5 minutes et vous connecte aux meilleurs courtiers.
    </p>
    <Link href="/wizard" className="inline-block bg-gold text-white px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-white hover:text-gold border border-gold transition">
      Commencer le Wizard &rarr;
    </Link>
  </div>
);

export const blogContentMap: Record<string, React.ReactNode> = {

  // ====================================================
  // ARTICLE 1: GUIDE PRINCIPAL (PILIER SEO)
  // ====================================================
  "hypotheque-travailleur-temporaire-5pourcent": (
    <>
      <p>
        Obtenir une hypothèque en tant que travailleur temporaire au Canada est non seulement possible, mais de plus en plus
        accessible grâce au <strong>programme SCHL Nouveaux Arrivants</strong>. Avec seulement <strong>5% de mise de fonds</strong>,
        vous pouvez devenir propriétaire même sans historique de crédit canadien.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Le programme SCHL Nouveaux Arrivants</h2>
      <p>
        La <a href="https://www.cmhc-schl.gc.ca" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Société canadienne d&apos;hypothèques et de logement (SCHL/CMHC)</a> offre
        un programme spécifique pour les nouveaux arrivants au Canada depuis 5 ans ou moins :
      </p>
      <ul className="space-y-2">
        <li><strong>Statuts acceptés :</strong> Résidents permanents et résidents non permanents avec permis de travail</li>
        <li><strong>Mise de fonds minimum :</strong> 5% sur les premiers 500 000$ + 10% au-dessus</li>
        <li><strong>Score de crédit minimum :</strong> 600 (ou <InternalLink slug="hypotheque-sans-historique-credit">crédit alternatif accepté</InternalLink>)</li>
        <li><strong>Ratios d&apos;endettement :</strong> ABD max 35% / ATD max 42% (programme Nouveaux Arrivants)</li>
        <li><strong>Amortissement max :</strong> 25 ans (30 ans pour premiers acheteurs depuis déc. 2024)</li>
        <li><strong>Prix max propriété assurée :</strong> 1 500 000$ (hausse de déc. 2024)</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Le crédit alternatif : pas besoin d&apos;historique canadien</h2>
      <p>
        L&apos;un des plus grands avantages du programme est l&apos;acceptation de <strong>preuves alternatives de solvabilité</strong>.
        Consultez notre guide détaillé sur le <InternalLink slug="hypotheque-credit-international-alternative-data">crédit international et les données alternatives</InternalLink>.
      </p>
      <ul className="space-y-2">
        <li>Confirmation de paiement de loyer sur 12 mois</li>
        <li>Historique de paiement de factures (téléphone, internet, services)</li>
        <li>Relevés bancaires montrant une épargne régulière sur 12 mois</li>
        <li>Rapport de crédit international du pays d&apos;origine</li>
        <li>Références bancaires d&apos;institutions financières étrangères</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Les 6 grandes banques et leurs programmes</h2>
      <ul className="space-y-2">
        <li><strong>RBC :</strong> <a href="https://www.rbc.com/newcomers/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Programme Welcome to Canada</a> — mise de fonds 5% à 35%</li>
        <li><strong>TD :</strong> <a href="https://www.td.com/ca/en/personal-banking/solutions/newcomers-to-canada" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Programme Nouveaux Arrivants</a> — pas de crédit canadien requis pour RP</li>
        <li><strong>Scotiabank :</strong> <a href="https://www.scotiabank.com/ca/en/personal/programs/start-right.html" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Programme StartRight</a> — disponible aux résidents temporaires</li>
        <li><strong>BMO :</strong> <a href="https://www.bmo.com/main/personal/newcomers-to-canada/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Programme NewStart</a> — garantie de taux 130 jours</li>
        <li><strong>CIBC :</strong> <a href="https://www.cibc.com/en/special-offers/newcomers.html" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">3 programmes distincts</a> (Standard, PLUS, Travailleurs Étrangers)</li>
        <li><strong>Desjardins :</strong> <a href="https://www.desjardins.com/particuliers/nouveaux-arrivants/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Spécialiste Québec</a>, carte crédit gratuite</li>
      </ul>

      <WizardCta variant="dark" />

      <h2 className="text-xl font-extrabold text-midnight">Le stress test hypothécaire</h2>
      <p>
        Toutes les hypothèques assurées doivent passer le <strong>stress test</strong> : qualification au
        <strong> taux contractuel + 2% ou à 5,25%</strong>, le plus élevé des deux.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">L&apos;assurance SCHL : primes par ratio prêt-valeur</h2>
      <p>Si votre mise de fonds est inférieure à 20%, l&apos;<InternalLink slug="hypotheque-assurance-schl-sagen-cmhc">assurance SCHL est obligatoire</InternalLink> :</p>
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
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">65,01% – 75%</td><td>1,70%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">75,01% – 80%</td><td>2,40%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">80,01% – 85%</td><td>2,80%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">85,01% – 90%</td><td>3,10%</td></tr>
            <tr><td className="py-2 pr-4">90,01% – 95%</td><td>4,00%</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-extrabold text-midnight">Conditions spécifiques travailleur temporaire</h2>
      <ul className="space-y-2">
        <li><strong>Permis de travail valide</strong> — fermé ou <InternalLink slug="hypotheque-permis-travail-ouvert">ouvert</InternalLink></li>
        <li><strong>Minimum 3 mois d&apos;emploi canadien</strong> (sauf relocalisation par l&apos;employeur)</li>
        <li>La propriété doit être occupée par le propriétaire (1 à 4 logements)</li>
        <li>Les dettes étrangères SONT incluses dans le calcul du ratio d&apos;endettement</li>
      </ul>

      <p>
        Prêt à connaître vos options ? Commencez par une <InternalLink slug="preapprobation-hypotheque-immigrant">préapprobation hypothécaire</InternalLink> pour
        savoir exactement combien vous pouvez emprunter.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 2: SANS HISTORIQUE CRÉDIT
  // ====================================================
  "hypotheque-sans-historique-credit": (
    <>
      <p>
        Pas d&apos;historique de crédit canadien ? Ce n&apos;est <strong>pas un obstacle</strong>. Le programme
        <a href="https://www.cmhc-schl.gc.ca" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline"> SCHL Nouveaux Arrivants</a> accepte
        spécifiquement des preuves alternatives de solvabilité pour les immigrants arrivés depuis 5 ans ou moins.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Crédit alternatif accepté par la SCHL</h2>
      <p>
        La SCHL permet aux prêteurs d&apos;utiliser des <strong>méthodes alternatives</strong> pour évaluer votre
        solvabilité. Vous devez fournir au moins <strong>2 types de preuves</strong> sur les 12 derniers mois :
      </p>
      <ul className="space-y-2">
        <li><strong>Paiements de loyer :</strong> Reçus ou relevés bancaires montrant des paiements réguliers sur 12 mois</li>
        <li><strong>Factures récurrentes :</strong> Téléphone, internet, électricité, assurance — payées à temps</li>
        <li><strong>Épargne régulière :</strong> Relevés montrant des dépôts constants sur 12 mois</li>
        <li><strong>Crédit international :</strong> Rapport de crédit de votre pays d&apos;origine via <a href="https://www.consumer.equifax.ca" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Equifax</a> ou TransUnion</li>
        <li><strong>Références bancaires :</strong> Lettres de votre banque à l&apos;étranger</li>
      </ul>
      <p>
        Pour en savoir plus sur l&apos;utilisation de votre historique de crédit étranger, consultez notre guide sur le <InternalLink slug="hypotheque-credit-international-alternative-data">crédit international et les données alternatives</InternalLink>.
      </p>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Banques qui n&apos;exigent PAS de crédit canadien</h2>
      <ul className="space-y-2">
        <li><strong>TD :</strong> <a href="https://www.td.com/ca/en/personal-banking/solutions/newcomers-to-canada" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Pas de crédit canadien requis</a> pour RP de 5 ans et moins</li>
        <li><strong>CIBC :</strong> Aucun historique requis pour les 3 programmes Nouveaux Arrivants</li>
        <li><strong>BMO :</strong> <a href="https://www.bmo.com/main/personal/newcomers-to-canada/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Programme NewStart</a> avec carte crédit gratuite pour démarrer</li>
        <li><strong>Desjardins :</strong> Carte crédit gratuite dès l&apos;ouverture de compte</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Bâtir votre crédit en parallèle</h2>
      <p>
        Pendant que vous préparez votre dossier, commencez à bâtir votre crédit canadien.
        En 6 à 12 mois d&apos;utilisation responsable d&apos;une carte de crédit, vous pouvez atteindre un
        <InternalLink slug="hypotheque-score-credit-minimum-immigrant">score de 650+</InternalLink> — ce qui ouvre encore plus d&apos;options.
      </p>
      <ul className="space-y-2">
        <li>Obtenez une carte de crédit sécurisée (BMO NewStart, Desjardins)</li>
        <li>Payez toutes vos factures à temps, sans exception</li>
        <li>Gardez votre utilisation du crédit sous 30% de la limite</li>
        <li>Ne faites pas trop de demandes de crédit en peu de temps</li>
      </ul>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 3: PERMIS DE TRAVAIL OUVERT
  // ====================================================
  "hypotheque-permis-travail-ouvert": (
    <>
      <p>
        Vous détenez un <strong>permis de travail ouvert</strong> au Canada ? Bonne nouvelle : vous pouvez obtenir une hypothèque.
        Cependant, les exigences diffèrent selon que votre permis est ouvert ou fermé. Voici ce que vous devez savoir.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Permis ouvert vs permis fermé : les différences</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4">Critère</th>
              <th className="text-left py-2 pr-4">Permis fermé</th>
              <th className="text-left py-2">Permis ouvert</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Employeur</td><td className="pr-4">Lié à un employeur</td><td>Libre de changer</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Stabilité perçue</td><td className="pr-4">Plus stable (lettre employeur)</td><td>Moins prévisible</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Mise de fonds typique</td><td className="pr-4">5% – 10%</td><td>10% – 35%</td></tr>
            <tr><td className="py-2 pr-4">Banques favorables</td><td className="pr-4">La plupart</td><td>Scotiabank, CIBC, courtiers</td></tr>
          </tbody>
        </table>
      </div>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Programmes bancaires pour permis ouvert</h2>
      <ul className="space-y-2">
        <li><strong>Scotiabank StartRight :</strong> <a href="https://www.scotiabank.com/ca/en/personal/programs/start-right.html" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Spécifiquement ouvert</a> aux résidents temporaires, mise de fonds 5%</li>
        <li><strong>CIBC Travailleurs Étrangers :</strong> Programme dédié, accepte permis ouvert</li>
        <li><strong>Courtiers hypothécaires :</strong> Accès à des prêteurs alternatifs plus flexibles</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Types de permis ouverts acceptés</h2>
      <p>
        Selon <a href="https://www.canada.ca/en/immigration-refugees-citizenship.html" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Immigration Canada</a>, les permis ouverts incluent :
      </p>
      <ul className="space-y-2">
        <li><strong>PGWP :</strong> Permis postdiplôme — voir notre <InternalLink slug="hypotheque-etudiant-permis-postdiplome">guide étudiant PGWP</InternalLink></li>
        <li><strong>Conjoint de travailleur qualifié :</strong> Permis ouvert lié au statut du conjoint</li>
        <li><strong>PVT / IEC :</strong> Programme vacances-travail (durée limitée, plus difficile)</li>
        <li><strong>Demandeur de RP :</strong> Permis ouvert en attente de résidence permanente</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Conseils pour maximiser vos chances</h2>
      <ul className="space-y-2">
        <li>Obtenez une lettre d&apos;emploi confirmant votre poste et salaire</li>
        <li>Montrez au moins 3 mois de talons de paie canadiens</li>
        <li>Préparez vos <InternalLink slug="hypotheque-sans-historique-credit">preuves de crédit alternatif</InternalLink> si vous n&apos;avez pas d&apos;historique canadien</li>
        <li>Envisagez une mise de fonds plus élevée pour renforcer votre dossier</li>
      </ul>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 4: ÉTUDIANT PERMIS POSTDIPLÔME
  // ====================================================
  "hypotheque-etudiant-permis-postdiplome": (
    <>
      <p>
        Vous êtes étudiant international avec un <strong>permis de travail postdiplôme (PGWP)</strong> ? Acheter une propriété
        au Canada est possible, mais les conditions sont spécifiques. Voici votre guide complet.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Admissibilité avec le PGWP</h2>
      <p>
        Le PGWP est un <InternalLink slug="hypotheque-permis-travail-ouvert">permis de travail ouvert</InternalLink> délivré par
        <a href="https://www.canada.ca/en/immigration-refugees-citizenship.html" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline"> Immigration Canada</a> aux diplômés d&apos;établissements canadiens désignés.
      </p>
      <ul className="space-y-2">
        <li><strong>Durée :</strong> 1 à 3 ans selon le programme d&apos;études</li>
        <li><strong>Statut SCHL :</strong> Résident non permanent avec permis de travail — admissible au programme Nouveaux Arrivants</li>
        <li><strong>Défi principal :</strong> Durée limitée du permis et historique d&apos;emploi court</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Ce que les banques exigent</h2>
      <ul className="space-y-2">
        <li><strong>Emploi à temps plein :</strong> Minimum 3 mois avec le même employeur</li>
        <li><strong>Revenu stable :</strong> Lettre d&apos;emploi + talons de paie récents</li>
        <li><strong>Mise de fonds :</strong> 5% minimum (souvent 10-20% recommandé pour compenser la durée du permis)</li>
        <li><strong>Crédit :</strong> Score 600+ ou <InternalLink slug="hypotheque-sans-historique-credit">crédit alternatif</InternalLink></li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Banques les plus favorables aux PGWP</h2>
      <ul className="space-y-2">
        <li><strong>Scotiabank StartRight :</strong> Accepte explicitement les résidents temporaires</li>
        <li><strong>CIBC Travailleurs Étrangers :</strong> Pas de crédit canadien requis</li>
        <li><strong>TD :</strong> Évalue au cas par cas, favorable si demande de RP en cours</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Stratégie optimale</h2>
      <p>
        Si vous avez déposé une demande de résidence permanente, mentionnez-le dans votre dossier. Les banques y voient
        un signal positif de stabilité. Commencez aussi à bâtir votre crédit dès l&apos;obtention du PGWP avec une carte sécurisée.
      </p>
      <p>
        Vérifiez aussi les <InternalLink slug="hypotheque-taxe-acheteur-etranger-exemption">exemptions à la taxe sur les acheteurs étrangers</InternalLink> qui
        peuvent s&apos;appliquer aux détenteurs de PGWP.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 5: FRANCOPHONE QUÉBEC
  // ====================================================
  "hypotheque-francophone-quebec": (
    <>
      <p>
        Le Québec offre un marché immobilier plus accessible que Toronto ou Vancouver, avec des particularités uniques
        pour les immigrants francophones. Voici tout ce que vous devez savoir pour acheter au Québec.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Desjardins : votre allié au Québec</h2>
      <p>
        Le <a href="https://www.desjardins.com/particuliers/nouveaux-arrivants/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Mouvement Desjardins</a> est
        le plus grand groupe coopératif financier du Québec et offre des avantages uniques :
      </p>
      <ul className="space-y-2">
        <li>Service en français garanti dans toutes les caisses</li>
        <li>Carte de crédit gratuite pour bâtir votre historique</li>
        <li>Taux compétitifs spécifiques au marché québécois</li>
        <li>Programme Nouveaux Arrivants avec accompagnement personnalisé</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Particularités du Québec</h2>
      <ul className="space-y-2">
        <li><strong>Notaire obligatoire :</strong> Au Québec, c&apos;est un notaire (pas un avocat) qui complète la transaction — prévoir 1 500$ à 2 500$</li>
        <li><strong>Taxe de bienvenue :</strong> Droits de mutation immobilière calculés sur la valeur de la propriété</li>
        <li><strong>Inspection préachat :</strong> Fortement recommandée et courante</li>
        <li><strong>Certificat de localisation :</strong> Document obligatoire pour toute transaction</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Marché immobilier québécois</h2>
      <p>
        Le Québec offre généralement des prix plus accessibles que l&apos;<InternalLink slug="hypotheque-ontario-immigrants-toronto">Ontario</InternalLink> et
        la <InternalLink slug="hypotheque-bc-immigrants-vancouver-victoria">Colombie-Britannique</InternalLink>.
        Le prix médian à Montréal reste bien en dessous du plafond SCHL de 1 500 000$ pour les propriétés assurées.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Programmes d&apos;aide provinciaux</h2>
      <ul className="space-y-2">
        <li><strong>Programme d&apos;habitation abordable Québec :</strong> Aide au logement pour familles à revenu modeste</li>
        <li><strong>Crédit d&apos;impôt pour l&apos;achat d&apos;une première habitation (Québec) :</strong> Jusqu&apos;à 1 500$ de crédit provincial</li>
        <li><strong><InternalLink slug="hypotheque-reer-rap-immigrant-premier-achat">RAP (REER)</InternalLink> :</strong> Retrait jusqu&apos;à 60 000$ sans impôt pour premier achat</li>
      </ul>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 6: PRÉAPPROBATION
  // ====================================================
  "preapprobation-hypotheque-immigrant": (
    <>
      <p>
        La <strong>préapprobation hypothécaire</strong> est la première étape concrète vers l&apos;achat de votre propriété.
        Elle vous donne un montant maximum d&apos;emprunt et verrouille votre taux pendant 90 à 130 jours.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Qu&apos;est-ce qu&apos;une préapprobation ?</h2>
      <p>
        Contrairement à la préqualification (estimation rapide), la préapprobation implique une <strong>vérification complète</strong> de
        votre dossier par le prêteur selon les normes de la <a href="https://www.cmhc-schl.gc.ca" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">SCHL</a>.
      </p>
      <ul className="space-y-2">
        <li><strong>Vérification du crédit :</strong> Score ou crédit alternatif</li>
        <li><strong>Vérification des revenus :</strong> Lettre d&apos;emploi, talons de paie, T4</li>
        <li><strong>Calcul des ratios :</strong> ABD max 35% / ATD max 42% (Nouveaux Arrivants)</li>
        <li><strong>Verrouillage du taux :</strong> 90 à 130 jours selon la banque</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Documents requis pour la préapprobation</h2>
      <ul className="space-y-2">
        <li>Passeport valide + carte RP ou permis de travail</li>
        <li>Lettre d&apos;emploi (date d&apos;embauche, salaire, poste)</li>
        <li>2 derniers talons de paie</li>
        <li>Relevés bancaires des 3 derniers mois</li>
        <li>Preuve de mise de fonds (source des fonds)</li>
        <li>Si pas de crédit canadien : <InternalLink slug="hypotheque-sans-historique-credit">preuves alternatives</InternalLink> (loyer, factures, épargne)</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Délais typiques</h2>
      <ul className="space-y-2">
        <li><strong>Préapprobation en ligne :</strong> 1 à 3 jours ouvrables</li>
        <li><strong>Préapprobation en succursale :</strong> 3 à 5 jours ouvrables</li>
        <li><strong>Avec courtier :</strong> Souvent plus rapide car le courtier prépare votre dossier</li>
      </ul>
      <p>
        Pour connaître le <InternalLink slug="hypotheque-timeline-fermeture-immigrant">processus complet de la préapprobation à la fermeture</InternalLink>,
        consultez notre guide timeline.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 7: CONJOINT CHÔMEUR
  // ====================================================
  "hypotheque-conjoint-chomeur-revenu": (
    <>
      <p>
        Votre conjoint n&apos;a pas encore trouvé d&apos;emploi au Canada ? Cela ne signifie pas que vous ne pouvez
        pas acheter. Plusieurs stratégies permettent d&apos;obtenir une hypothèque avec <strong>un seul revenu</strong>.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Impact sur les ratios d&apos;endettement</h2>
      <p>
        La <a href="https://www.cmhc-schl.gc.ca" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">SCHL</a> calcule
        vos ratios sur le revenu du ménage. Avec un seul revenu :
      </p>
      <ul className="space-y-2">
        <li><strong>ABD (Amortissement Brut de la Dette) :</strong> Max 35% de VOTRE revenu seul</li>
        <li><strong>ATD (Amortissement Total de la Dette) :</strong> Max 42% de VOTRE revenu seul</li>
        <li>Les dettes du conjoint SONT incluses même s&apos;il ne travaille pas</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Stratégies pour maximiser votre capacité</h2>
      <ul className="space-y-2">
        <li><strong>Demande individuelle :</strong> Faire la demande seul(e) pour exclure les dettes du conjoint</li>
        <li><strong>Mise de fonds élevée :</strong> Réduire le montant emprunté pour respecter les ratios</li>
        <li><strong><InternalLink slug="hypotheque-cosignataire-parent-immigrant">Co-signataire</InternalLink> :</strong> Un parent ou proche avec revenu canadien peut renforcer le dossier</li>
        <li><strong><InternalLink slug="hypotheque-amortissement-duree-choix">Amortissement 30 ans</InternalLink> :</strong> Réduit les paiements mensuels (premiers acheteurs uniquement)</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Exemple concret</h2>
      <p>
        Avec un revenu annuel de <strong>80 000$</strong>, un ratio ABD de 35% permet des paiements mensuels
        de logement d&apos;environ <strong>2 333$</strong>. Selon le taux et l&apos;amortissement, cela peut représenter
        une hypothèque d&apos;environ <strong>350 000$ à 400 000$</strong>.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Quand le conjoint trouve un emploi</h2>
      <p>
        Dès que votre conjoint obtient un emploi, vous pouvez envisager un <InternalLink slug="hypotheque-refinancement-renouvellement-immigrant">refinancement</InternalLink> pour
        augmenter votre capacité d&apos;emprunt ou améliorer vos conditions.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 8: REVENU ÉTRANGER
  // ====================================================
  "hypotheque-revenu-etranger-convert": (
    <>
      <p>
        Vous gagnez encore des revenus de l&apos;étranger ? Certaines banques canadiennes acceptent de les inclure dans
        votre demande d&apos;hypothèque, mais sous <strong>conditions strictes</strong>.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Ce que la SCHL accepte et refuse</h2>
      <ul className="space-y-2">
        <li><strong>Revenu d&apos;emploi étranger :</strong> Accepté par certaines banques (pas toutes), avec preuves</li>
        <li><strong>Revenu locatif étranger :</strong> NON inclus dans les calculs SCHL</li>
        <li><strong>Dettes étrangères :</strong> TOUJOURS incluses dans le calcul du ratio d&apos;endettement</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Comment convertir votre revenu</h2>
      <p>
        La conversion se fait au taux de change de la <a href="https://www.bankofcanada.ca/rates/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Banque du Canada</a> au
        moment de la demande. Les banques appliquent souvent une décote de 10-25% pour tenir compte de la volatilité.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Documents requis pour revenu étranger</h2>
      <ul className="space-y-2">
        <li>Déclarations de revenus du pays d&apos;origine (traduites et notariées)</li>
        <li>Relevés bancaires montrant les dépôts réguliers</li>
        <li>Contrat de travail ou preuves d&apos;activité professionnelle</li>
        <li>Lettre d&apos;un comptable confirmant les revenus</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Alternatives si le revenu étranger est refusé</h2>
      <ul className="space-y-2">
        <li>Utiliser le revenu étranger comme <strong>mise de fonds supplémentaire</strong> plutôt que comme revenu</li>
        <li>Se concentrer sur le revenu canadien et ajouter un <InternalLink slug="hypotheque-cosignataire-parent-immigrant">co-signataire</InternalLink></li>
        <li>Envisager un <InternalLink slug="hypotheque-travailleur-autonome-freelance">dossier travailleur autonome</InternalLink> si vous êtes freelance international</li>
      </ul>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 9: ALBERTA
  // ====================================================
  "hypotheque-alberta-immigrants-calgary-edmonton": (
    <>
      <p>
        L&apos;Alberta offre l&apos;un des marchés immobiliers les plus accessibles au Canada pour les immigrants,
        avec des prix bien inférieurs à Toronto et Vancouver, et <strong>aucune taxe provinciale de vente</strong>.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Pourquoi l&apos;Alberta attire les immigrants</h2>
      <ul className="space-y-2">
        <li><strong>Prix médians abordables :</strong> Calgary ~500 000$, Edmonton ~400 000$ — bien sous le plafond SCHL de 1,5M$</li>
        <li><strong>Pas de taxe provinciale :</strong> L&apos;Alberta n&apos;a pas de PST, ce qui réduit le coût global</li>
        <li><strong>Économie diversifiée :</strong> Pétrole, technologie, agriculture, services</li>
        <li><strong>Programme d&apos;immigration provincial (AINP) :</strong> Voie accélérée vers la RP</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Frais d&apos;achat spécifiques Alberta</h2>
      <ul className="space-y-2">
        <li><strong>Land Title Transfer Fee :</strong> Calculé sur la valeur de la propriété</li>
        <li><strong>Pas de droits de mutation (taxe de bienvenue) :</strong> Contrairement au <InternalLink slug="hypotheque-francophone-quebec">Québec</InternalLink></li>
        <li><strong>Avocat (pas notaire) :</strong> L&apos;Alberta utilise le système de common law</li>
        <li><strong>Home inspection :</strong> Fortement recommandée, surtout pour les maisons plus anciennes</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Banques actives en Alberta</h2>
      <p>
        Toutes les grandes banques sont présentes. <a href="https://www.rbc.com/newcomers/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">RBC</a> et
        <a href="https://www.td.com/ca/en/personal-banking/solutions/newcomers-to-canada" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline"> TD</a> ont
        de fortes présences à Calgary et Edmonton avec des conseillers spécialisés en immigration.
      </p>
      <p>
        Comparez aussi avec les marchés de la <InternalLink slug="hypotheque-bc-immigrants-vancouver-victoria">Colombie-Britannique</InternalLink> et
        de l&apos;<InternalLink slug="hypotheque-ontario-immigrants-toronto">Ontario</InternalLink> pour faire le meilleur choix.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 10: COLOMBIE-BRITANNIQUE
  // ====================================================
  "hypotheque-bc-immigrants-vancouver-victoria": (
    <>
      <p>
        La Colombie-Britannique, et particulièrement Vancouver, offre un marché immobilier dynamique mais parmi
        les plus chers au Canada. Les immigrants doivent connaître les <strong>taxes supplémentaires</strong> et les stratégies pour réussir.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Le défi des prix en BC</h2>
      <ul className="space-y-2">
        <li><strong>Vancouver :</strong> Prix médian maison ~1 200 000$ — proche du plafond SCHL 1,5M$</li>
        <li><strong>Victoria :</strong> Prix médian ~850 000$ — plus accessible</li>
        <li><strong>Kelowna, Nanaimo :</strong> Options plus abordables à partir de ~600 000$</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Taxes spécifiques BC</h2>
      <ul className="space-y-2">
        <li><strong>Property Transfer Tax (PTT) :</strong> 1% sur les premiers 200 000$, 2% sur 200 001$ à 2M$, 3% au-dessus</li>
        <li><strong>Additional Property Transfer Tax :</strong> 20% supplémentaire pour les acheteurs étrangers dans certaines zones</li>
        <li><strong>Speculation and Vacancy Tax :</strong> Taxe annuelle sur les propriétés vacantes</li>
      </ul>
      <p>
        Vérifiez les <InternalLink slug="hypotheque-taxe-acheteur-etranger-exemption">exemptions à la taxe acheteur étranger</InternalLink> —
        les résidents permanents et certains travailleurs temporaires sont exemptés.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Stratégies pour acheter en BC</h2>
      <ul className="space-y-2">
        <li>Considérer un <InternalLink slug="hypotheque-maison-vs-condo-immigrant">condo</InternalLink> comme premier achat pour rester dans les limites d&apos;assurance SCHL</li>
        <li>Explorer les villes secondaires (Surrey, Burnaby, Langley) pour des prix plus bas</li>
        <li>Utiliser le <InternalLink slug="hypotheque-reer-rap-immigrant-premier-achat">RAP et le CELIAPP</InternalLink> pour maximiser votre mise de fonds</li>
      </ul>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 11: MANITOBA
  // ====================================================
  "hypotheque-manitoba-immigrants-winnipeg": (
    <>
      <p>
        Le Manitoba est l&apos;une des provinces les plus accueillantes pour les immigrants, avec un marché immobilier
        très abordable et un programme d&apos;immigration provincial réputé.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Un marché immobilier très accessible</h2>
      <ul className="space-y-2">
        <li><strong>Winnipeg :</strong> Prix médian ~350 000$ — parmi les plus bas des grandes villes canadiennes</li>
        <li><strong>Brandon, Steinbach :</strong> Encore plus abordable, à partir de ~250 000$</li>
        <li><strong>Avec 5% de mise de fonds :</strong> Seulement ~17 500$ pour une propriété de 350 000$</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Programme provincial d&apos;immigration (MPNP)</h2>
      <p>
        Le <a href="https://www.gov.mb.ca" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Manitoba Provincial Nominee Program</a> est
        l&apos;un des plus actifs au Canada. Les nominees ont souvent un chemin accéléré vers la RP, ce qui renforce considérablement leur dossier hypothécaire.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Frais d&apos;achat au Manitoba</h2>
      <ul className="space-y-2">
        <li><strong>Land Transfer Tax :</strong> Progressive, de 0% à 2% selon la valeur</li>
        <li><strong>Avocat :</strong> Obligatoire pour la fermeture (1 000$ à 2 000$)</li>
        <li><strong>PST sur assurance SCHL :</strong> Le Manitoba applique la taxe provinciale sur la prime d&apos;<InternalLink slug="hypotheque-assurance-schl-sagen-cmhc">assurance hypothécaire</InternalLink></li>
      </ul>

      <p>
        Comparez avec l&apos;<InternalLink slug="hypotheque-alberta-immigrants-calgary-edmonton">Alberta</InternalLink> et
        le <InternalLink slug="hypotheque-francophone-quebec">Québec</InternalLink> pour trouver la province qui correspond le mieux à votre budget.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 12: MAISON VS CONDO
  // ====================================================
  "hypotheque-maison-vs-condo-immigrant": (
    <>
      <p>
        Maison ou condo ? C&apos;est l&apos;une des premières décisions à prendre. Pour un immigrant, le choix a des
        implications directes sur le <strong>financement, les ratios d&apos;endettement et le budget mensuel</strong>.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Comparaison financière</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4">Critère</th>
              <th className="text-left py-2 pr-4">Maison</th>
              <th className="text-left py-2">Condo</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Prix d&apos;entrée</td><td className="pr-4">Plus élevé</td><td>Plus accessible</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Frais mensuels</td><td className="pr-4">Taxes + entretien</td><td>Taxes + frais condo (300-800$/mois)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Impact sur ratios</td><td className="pr-4">Taxes foncières seulement</td><td>Taxes + 50% des frais condo dans ABD</td></tr>
            <tr><td className="py-2 pr-4">Appréciation</td><td className="pr-4">Généralement plus forte</td><td>Variable selon le marché</td></tr>
          </tbody>
        </table>
      </div>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Impact sur votre capacité d&apos;emprunt</h2>
      <p>
        Les frais de copropriété sont partiellement inclus dans le calcul du ratio ABD par la SCHL. Cela réduit votre
        capacité d&apos;emprunt comparé à une maison sans frais de condo. Consultez notre guide
        sur l&apos;<InternalLink slug="hypotheque-amortissement-duree-choix">amortissement</InternalLink> pour optimiser vos paiements.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Avantages du condo pour un immigrant</h2>
      <ul className="space-y-2">
        <li><strong>Prix d&apos;entrée plus bas :</strong> Mise de fonds 5% sur un condo à 400 000$ = 20 000$</li>
        <li><strong>Entretien réduit :</strong> Pas besoin de gérer la toiture, le terrain, le déneigement</li>
        <li><strong>Emplacement :</strong> Souvent plus central, près du transport en commun</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Avantages de la maison</h2>
      <ul className="space-y-2">
        <li><strong>Pas de frais de condo :</strong> Plus de capacité d&apos;emprunt pour le même revenu</li>
        <li><strong>Appréciation :</strong> La valeur du terrain augmente généralement plus</li>
        <li><strong>Liberté :</strong> Pas de règlements de copropriété</li>
      </ul>
      <p>
        Quel que soit votre choix, commencez par une <InternalLink slug="preapprobation-hypotheque-immigrant">préapprobation</InternalLink> pour connaître votre budget exact.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 13: TRAVAILLEUR AUTONOME / FREELANCE
  // ====================================================
  "hypotheque-travailleur-autonome-freelance": (
    <>
      <p>
        Obtenir une hypothèque en tant que travailleur autonome immigrant est plus complexe mais tout à fait possible.
        Les banques exigent des <strong>preuves de revenus plus détaillées</strong> et parfois une mise de fonds plus élevée.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Exigences spécifiques</h2>
      <ul className="space-y-2">
        <li><strong>2 ans de déclarations T1 General :</strong> Les banques veulent voir 2 années complètes de revenus au Canada</li>
        <li><strong>Avis de cotisation (NOA) :</strong> Émis par l&apos;<a href="https://www.canada.ca/en/revenue-agency.html" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Agence du revenu du Canada</a></li>
        <li><strong>Mise de fonds :</strong> Souvent 10% à 20% demandé (vs 5% pour les salariés)</li>
        <li><strong>Revenu utilisé :</strong> Moyenne des 2 dernières années de revenu net</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Le programme « Déclaré » vs « Prouvé »</h2>
      <ul className="space-y-2">
        <li><strong>Programme traditionnel :</strong> Basé sur le revenu net des déclarations d&apos;impôts — souvent bas pour les autonomes qui déduisent beaucoup</li>
        <li><strong>Programme revenu déclaré :</strong> Certains prêteurs acceptent un revenu « raisonnable » basé sur l&apos;industrie, avec 10-20% de mise de fonds</li>
        <li><strong>Prêteurs B :</strong> Plus flexibles mais taux plus élevés (1-2% de plus)</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Stratégies pour les freelancers immigrants</h2>
      <ul className="space-y-2">
        <li>Si vous êtes au Canada depuis moins de 2 ans, combinez avec un <InternalLink slug="hypotheque-revenu-etranger-convert">revenu étranger</InternalLink></li>
        <li>Envisagez un <InternalLink slug="hypotheque-cosignataire-parent-immigrant">co-signataire</InternalLink> pour renforcer le dossier</li>
        <li>Incorporez-vous si possible — les revenus d&apos;entreprise sont parfois mieux perçus</li>
      </ul>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 14: CRÉDIT INTERNATIONAL / ALTERNATIVE DATA
  // ====================================================
  "hypotheque-credit-international-alternative-data": (
    <>
      <p>
        Le système de crédit canadien (Equifax, TransUnion) ne reconnaît pas automatiquement votre historique de crédit étranger.
        Mais la <a href="https://www.cmhc-schl.gc.ca" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">SCHL</a> a
        prévu des solutions avec les <strong>données alternatives (alternative credit data)</strong>.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Qu&apos;est-ce que le crédit alternatif ?</h2>
      <p>
        Ce sont des preuves de fiabilité financière qui remplacent le score de crédit canadien traditionnel.
        La SCHL les accepte officiellement dans le cadre du programme Nouveaux Arrivants.
      </p>
      <ul className="space-y-2">
        <li><strong>Historique de loyer :</strong> 12 mois de paiements ponctuels (la preuve la plus forte)</li>
        <li><strong>Factures récurrentes :</strong> Téléphone, internet, hydro payés à temps sur 12 mois</li>
        <li><strong>Épargne régulière :</strong> Dépôts constants démontrant la discipline financière</li>
        <li><strong>Crédit international :</strong> Rapport d&apos;<a href="https://www.consumer.equifax.ca" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Equifax</a> ou TransUnion de votre pays d&apos;origine</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Comment obtenir votre rapport de crédit international</h2>
      <ul className="space-y-2">
        <li><strong>Equifax International :</strong> Disponible dans plusieurs pays — demandez un rapport avant d&apos;immigrer</li>
        <li><strong>TransUnion Global :</strong> Couvre de nombreux marchés asiatiques, européens et latino-américains</li>
        <li><strong>Faire traduire et notarier :</strong> Les documents doivent être en français ou anglais</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Combien de preuves faut-il ?</h2>
      <p>
        La SCHL recommande au minimum <strong>2 types de preuves alternatives</strong> couvrant 12 mois.
        Plus vous en fournissez, plus votre dossier est solide. Voir aussi notre guide sur
        les <InternalLink slug="hypotheque-sans-historique-credit">hypothèques sans historique de crédit</InternalLink> et
        le <InternalLink slug="hypotheque-score-credit-minimum-immigrant">score de crédit minimum requis</InternalLink>.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 15: CO-SIGNATAIRE PARENT
  // ====================================================
  "hypotheque-cosignataire-parent-immigrant": (
    <>
      <p>
        Faire signer un parent comme co-signataire peut transformer votre dossier hypothécaire. Mais c&apos;est une
        décision sérieuse avec des <strong>implications légales et financières</strong> pour les deux parties.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Co-signataire vs co-emprunteur vs garant</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4">Rôle</th>
              <th className="text-left py-2 pr-4">Sur le titre ?</th>
              <th className="text-left py-2">Responsabilité</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Co-emprunteur</td><td className="pr-4">Oui</td><td>100% solidaire</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Co-signataire</td><td className="pr-4">Non</td><td>100% solidaire</td></tr>
            <tr><td className="py-2 pr-4">Garant</td><td className="pr-4">Non</td><td>Activée seulement en cas de défaut</td></tr>
          </tbody>
        </table>
      </div>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Exigences pour le co-signataire</h2>
      <ul className="space-y-2">
        <li><strong>Résident canadien ou RP :</strong> La plupart des banques exigent un co-signataire au Canada</li>
        <li><strong>Revenu suffisant :</strong> Son revenu est ajouté au calcul des ratios</li>
        <li><strong>Bon crédit :</strong> Score 680+ recommandé</li>
        <li><strong>Impact sur sa capacité :</strong> La dette hypothécaire apparaît sur SON rapport de crédit</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Risques à connaître</h2>
      <ul className="space-y-2">
        <li>Le co-signataire est responsable à 100% si vous ne payez pas</li>
        <li>Cela réduit la capacité d&apos;emprunt du co-signataire pour ses propres projets</li>
        <li>Difficile à retirer — il faut refinancer pour enlever le co-signataire</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Alternatives au co-signataire</h2>
      <ul className="space-y-2">
        <li>Augmenter votre mise de fonds pour compenser un revenu insuffisant</li>
        <li>Attendre de bâtir votre <InternalLink slug="hypotheque-sans-historique-credit">crédit canadien</InternalLink></li>
        <li>Acheter avec un <InternalLink slug="hypotheque-conjoint-chomeur-revenu">seul revenu</InternalLink> si les ratios le permettent</li>
      </ul>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 16: REER / RAP
  // ====================================================
  "hypotheque-reer-rap-immigrant-premier-achat": (
    <>
      <p>
        Le <strong>Régime d&apos;accession à la propriété (RAP)</strong> et le <strong>CELIAPP</strong> sont deux outils puissants
        pour les immigrants qui veulent maximiser leur mise de fonds sans payer d&apos;impôts.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Le RAP (Régime d&apos;accession à la propriété)</h2>
      <ul className="space-y-2">
        <li><strong>Montant max :</strong> 60 000$ par personne (120 000$ pour un couple) — augmenté en 2024</li>
        <li><strong>Condition :</strong> Premier achat (pas propriétaire dans les 4 dernières années)</li>
        <li><strong>Source :</strong> Vos REER doivent être déposés depuis au moins 90 jours</li>
        <li><strong>Remboursement :</strong> Sur 15 ans, à partir de la 2e année après le retrait</li>
        <li><strong>Avantage fiscal :</strong> Aucun impôt au retrait si remboursé à temps</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Le CELIAPP (Compte d&apos;épargne libre d&apos;impôt pour l&apos;achat d&apos;une première propriété)</h2>
      <ul className="space-y-2">
        <li><strong>Contribution max :</strong> 8 000$/an, jusqu&apos;à 40 000$ à vie</li>
        <li><strong>Double avantage :</strong> Déduction d&apos;impôt à la cotisation ET retrait libre d&apos;impôt</li>
        <li><strong>Pas de remboursement :</strong> Contrairement au RAP, pas besoin de rembourser</li>
        <li><strong>Cumulable avec le RAP :</strong> Vous pouvez utiliser les DEUX (60 000$ + 40 000$ = 100 000$)</li>
      </ul>
      <p>
        Plus d&apos;informations sur le <a href="https://www.canada.ca/en/revenue-agency.html" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">site de l&apos;ARC</a>.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Stratégie pour immigrants</h2>
      <p>
        Dès votre arrivée au Canada, ouvrez un REER et un CELIAPP. Même de petites cotisations régulières
        s&apos;accumulent. Combinés à l&apos;<InternalLink slug="hypotheque-assurance-schl-sagen-cmhc">assurance SCHL</InternalLink> (qui
        permet d&apos;acheter avec 5% de mise de fonds), ces outils peuvent accélérer votre accès à la propriété.
      </p>
      <p>
        Consultez aussi notre guide sur la <InternalLink slug="preapprobation-hypotheque-immigrant">préapprobation</InternalLink> pour
        préparer votre dossier en parallèle.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 17: ASSURANCE SCHL / SAGEN / CMHC
  // ====================================================
  "hypotheque-assurance-schl-sagen-cmhc": (
    <>
      <p>
        Si votre mise de fonds est inférieure à 20%, l&apos;assurance prêt hypothécaire est <strong>obligatoire</strong> au Canada.
        Trois assureurs se partagent le marché : la <a href="https://www.cmhc-schl.gc.ca" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">SCHL</a>, Sagen et Canada Guaranty.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Qui paie et pourquoi ?</h2>
      <p>
        L&apos;assurance protège le <strong>prêteur</strong> (pas vous) en cas de défaut de paiement. Cependant, c&apos;est
        l&apos;emprunteur qui paie la prime, ajoutée au montant de l&apos;hypothèque.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Barème des primes</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4">Ratio prêt-valeur</th>
              <th className="text-left py-2 pr-4">Prime (% du prêt)</th>
              <th className="text-left py-2">Exemple sur 400 000$</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">65% et moins</td><td className="pr-4">0,60%</td><td>2 400$</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">65,01% – 75%</td><td className="pr-4">1,70%</td><td>6 800$</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">75,01% – 80%</td><td className="pr-4">2,40%</td><td>9 600$</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">80,01% – 85%</td><td className="pr-4">2,80%</td><td>11 200$</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">85,01% – 90%</td><td className="pr-4">3,10%</td><td>12 400$</td></tr>
            <tr><td className="py-2 pr-4">90,01% – 95%</td><td className="pr-4">4,00%</td><td>16 000$</td></tr>
          </tbody>
        </table>
      </div>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Les 3 assureurs comparés</h2>
      <ul className="space-y-2">
        <li><strong>SCHL (CMHC) :</strong> Assureur public, seul à offrir le programme Nouveaux Arrivants — choix privilégié pour les immigrants</li>
        <li><strong>Sagen (ex-Genworth) :</strong> Assureur privé, critères parfois plus flexibles</li>
        <li><strong>Canada Guaranty :</strong> Assureur privé, bonne alternative si refusé par la SCHL</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Quand l&apos;assurance n&apos;est PAS requise</h2>
      <p>
        Avec 20% ou plus de mise de fonds, l&apos;assurance n&apos;est pas obligatoire. Cependant, les ratios d&apos;endettement
        standard s&apos;appliquent (ABD 39%, ATD 44%) au lieu des ratios réduits du programme Nouveaux Arrivants.
        Consultez notre guide sur l&apos;<InternalLink slug="hypotheque-amortissement-duree-choix">amortissement</InternalLink> et
        le <InternalLink slug="hypotheque-reer-rap-immigrant-premier-achat">RAP/CELIAPP</InternalLink> pour optimiser votre mise de fonds.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 18: REFINANCEMENT / RENOUVELLEMENT
  // ====================================================
  "hypotheque-refinancement-renouvellement-immigrant": (
    <>
      <p>
        Votre terme hypothécaire arrive à échéance ? C&apos;est l&apos;occasion de <strong>renouveler ou refinancer</strong> pour
        obtenir de meilleures conditions. En tant qu&apos;immigrant, votre situation s&apos;est probablement améliorée depuis l&apos;achat.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Renouvellement vs refinancement</h2>
      <ul className="space-y-2">
        <li><strong>Renouvellement :</strong> Vous gardez le même montant mais renégociez le taux et le terme</li>
        <li><strong>Refinancement :</strong> Vous modifiez le montant (emprunter plus sur la valeur nette) ou changez de prêteur</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Avantages pour les immigrants</h2>
      <ul className="space-y-2">
        <li><strong>Crédit amélioré :</strong> Après 2-5 ans de paiements ponctuels, votre score est bien meilleur</li>
        <li><strong>Statut amélioré :</strong> Passage de permis temporaire à RP ou citoyenneté</li>
        <li><strong>Plus de choix :</strong> Accès à des prêteurs et taux qui étaient inaccessibles au départ</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Pénalités de remboursement anticipé</h2>
      <p>
        Si vous refinancez avant la fin du terme, des pénalités s&apos;appliquent selon les règles du <a href="https://www.osfi-bsif.gc.ca" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">BSIF (OSFI)</a> :
      </p>
      <ul className="space-y-2">
        <li><strong>Taux variable :</strong> Pénalité de 3 mois d&apos;intérêts</li>
        <li><strong>Taux fixe :</strong> Le plus élevé entre 3 mois d&apos;intérêts et le différentiel de taux (IRD)</li>
      </ul>
      <p>
        Comparez les <InternalLink slug="hypotheque-taux-fixe-variable-immigrant">taux fixes vs variables</InternalLink> et
        l&apos;<InternalLink slug="hypotheque-amortissement-duree-choix">amortissement optimal</InternalLink> avant de décider.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 19: TAUX FIXE VS VARIABLE
  // ====================================================
  "hypotheque-taux-fixe-variable-immigrant": (
    <>
      <p>
        Choisir entre un <strong>taux fixe et un taux variable</strong> est une décision cruciale. Pour un immigrant,
        la stabilité financière est souvent prioritaire, mais le taux variable peut offrir des économies significatives.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Comparaison rapide</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4">Critère</th>
              <th className="text-left py-2 pr-4">Taux fixe</th>
              <th className="text-left py-2">Taux variable</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Paiement</td><td className="pr-4">Stable pendant le terme</td><td>Fluctue avec le taux directeur</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Taux initial</td><td className="pr-4">Généralement plus élevé</td><td>Généralement plus bas</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Pénalité rupture</td><td className="pr-4">IRD (potentiellement élevée)</td><td>3 mois d&apos;intérêts</td></tr>
            <tr><td className="py-2 pr-4">Risque</td><td className="pr-4">Aucun (taux garanti)</td><td>Hausse possible des paiements</td></tr>
          </tbody>
        </table>
      </div>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Le taux directeur de la Banque du Canada</h2>
      <p>
        Le taux variable est directement lié au <a href="https://www.bankofcanada.ca/rates/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">taux directeur de la Banque du Canada</a>.
        Quand la Banque baisse son taux, vos paiements diminuent. Quand elle le hausse, ils augmentent.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Recommandation pour les immigrants</h2>
      <ul className="space-y-2">
        <li><strong>Nouveau au Canada (moins de 2 ans) :</strong> Le taux fixe offre la prévisibilité nécessaire pendant votre installation</li>
        <li><strong>Établi (2+ ans, revenu stable) :</strong> Le variable peut être avantageux si vous tolérez le risque</li>
        <li><strong>Terme recommandé :</strong> 5 ans fixe est le choix le plus populaire au Canada</li>
      </ul>
      <p>
        Peu importe votre choix, le <strong>stress test</strong> s&apos;applique : vous devez qualifier à taux + 2% ou 5,25%.
        Voir aussi notre guide sur le <InternalLink slug="hypotheque-refinancement-renouvellement-immigrant">refinancement</InternalLink> et
        l&apos;<InternalLink slug="hypotheque-amortissement-duree-choix">amortissement</InternalLink>.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 20: TIMELINE FERMETURE
  // ====================================================
  "hypotheque-timeline-fermeture-immigrant": (
    <>
      <p>
        Du premier contact avec un courtier à la remise des clés, le processus hypothécaire prend généralement
        <strong> 60 à 90 jours</strong>. Voici chaque étape détaillée pour un immigrant au Canada.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Étape 1 : Préapprobation (Jours 1-5)</h2>
      <ul className="space-y-2">
        <li>Rassemblez vos documents (identité, emploi, revenus, mise de fonds)</li>
        <li>Soumettez votre demande de <InternalLink slug="preapprobation-hypotheque-immigrant">préapprobation</InternalLink></li>
        <li>Recevez votre montant maximum et verrouillage de taux</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Étape 2 : Recherche de propriété (Jours 5-40)</h2>
      <ul className="space-y-2">
        <li>Travaillez avec un agent immobilier</li>
        <li>Visitez les propriétés dans votre budget</li>
        <li>Décidez entre <InternalLink slug="hypotheque-maison-vs-condo-immigrant">maison et condo</InternalLink></li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Étape 3 : Offre d&apos;achat (Jours 40-45)</h2>
      <ul className="space-y-2">
        <li>Soumettez une offre conditionnelle (financement + inspection)</li>
        <li>Négociez le prix et les conditions</li>
        <li>Signez la promesse d&apos;achat</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Étape 4 : Conditions et financement (Jours 45-65)</h2>
      <ul className="space-y-2">
        <li>Inspection de la propriété</li>
        <li>Évaluation par le prêteur</li>
        <li>Approbation finale de l&apos;hypothèque</li>
        <li>Levée des conditions</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Étape 5 : Fermeture (Jours 65-90)</h2>
      <ul className="space-y-2">
        <li>Rencontre avec le notaire (Québec) ou l&apos;avocat (autres provinces)</li>
        <li>Signature des documents hypothécaires</li>
        <li>Transfert des fonds et de la propriété</li>
        <li>Remise des clés</li>
      </ul>
      <p>
        Consultez notre guide principal sur l&apos;<InternalLink slug="hypotheque-travailleur-temporaire-5pourcent">hypothèque pour travailleur temporaire</InternalLink> pour
        les détails complets du programme SCHL.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 21: SCORE CRÉDIT MINIMUM
  // ====================================================
  "hypotheque-score-credit-minimum-immigrant": (
    <>
      <p>
        Le score de crédit minimum pour une hypothèque assurée SCHL est de <strong>600</strong> (abaissé de 680 en 2021).
        Mais chaque banque a ses propres exigences. Voici ce que vous devez savoir.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Scores requis par institution</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4">Institution</th>
              <th className="text-left py-2 pr-4">Score minimum</th>
              <th className="text-left py-2">Notes</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">SCHL (assurance)</td><td className="pr-4">600</td><td>Ou crédit alternatif</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">RBC</td><td className="pr-4">650+</td><td>Flexible pour newcomers</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">TD</td><td className="pr-4">600</td><td>Pas requis pour RP &lt; 5 ans</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Scotiabank</td><td className="pr-4">600</td><td>Programme StartRight</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">BMO</td><td className="pr-4">600</td><td>Programme NewStart</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">CIBC</td><td className="pr-4">600</td><td>3 programmes newcomers</td></tr>
            <tr><td className="py-2 pr-4">Prêteurs B</td><td className="pr-4">500-550</td><td>Taux plus élevés</td></tr>
          </tbody>
        </table>
      </div>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Comment vérifier votre score</h2>
      <p>
        Consultez votre score gratuitement via <a href="https://www.consumer.equifax.ca" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Equifax Canada</a> ou
        TransUnion. Si vous n&apos;avez pas encore de score canadien, consultez notre guide sur
        les <InternalLink slug="hypotheque-sans-historique-credit">hypothèques sans historique de crédit</InternalLink>.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Améliorer votre score rapidement</h2>
      <ul className="space-y-2">
        <li><strong>Carte sécurisée :</strong> Obtenez une carte de crédit sécurisée et utilisez-la chaque mois</li>
        <li><strong>Paiements à temps :</strong> C&apos;est le facteur #1 — ne manquez jamais une date</li>
        <li><strong>Utilisation &lt; 30% :</strong> Ne dépassez pas 30% de votre limite de crédit</li>
        <li><strong>Pas trop de demandes :</strong> Chaque demande de crédit fait baisser le score temporairement</li>
        <li><strong>Délai :</strong> Comptez 6 à 12 mois pour atteindre 650+ en partant de zéro</li>
      </ul>
      <p>
        Découvrez aussi comment le <InternalLink slug="hypotheque-credit-international-alternative-data">crédit international</InternalLink> peut
        compléter votre dossier.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 22: AMORTISSEMENT
  // ====================================================
  "hypotheque-amortissement-duree-choix": (
    <>
      <p>
        Depuis décembre 2024, les premiers acheteurs peuvent choisir un amortissement de <strong>30 ans</strong> au lieu
        de 25 ans. Ce changement a un impact majeur sur vos paiements mensuels et votre capacité d&apos;emprunt.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">25 ans vs 30 ans : comparaison</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4">Critère</th>
              <th className="text-left py-2 pr-4">25 ans</th>
              <th className="text-left py-2">30 ans</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Paiement mensuel (400k$ à 5%)</td><td className="pr-4">~2 326$</td><td>~2 138$</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Économie mensuelle</td><td className="pr-4">—</td><td>~188$/mois</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Intérêt total</td><td className="pr-4">~297 800$</td><td>~369 700$</td></tr>
            <tr><td className="py-2 pr-4">Coût additionnel</td><td className="pr-4">—</td><td>~71 900$ de plus</td></tr>
          </tbody>
        </table>
      </div>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Qui peut accéder au 30 ans ?</h2>
      <ul className="space-y-2">
        <li><strong>Premiers acheteurs :</strong> Pas propriétaire dans les 4 dernières années</li>
        <li><strong>Hypothèque assurée :</strong> Mise de fonds &lt; 20% avec <InternalLink slug="hypotheque-assurance-schl-sagen-cmhc">assurance SCHL</InternalLink></li>
        <li><strong>Propriété neuve :</strong> Les nouvelles constructions sont aussi admissibles au 30 ans</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Quel choix pour un immigrant ?</h2>
      <ul className="space-y-2">
        <li><strong>Budget serré :</strong> 30 ans réduit les paiements et améliore les ratios ABD/ATD</li>
        <li><strong>Budget confortable :</strong> 25 ans vous fait économiser ~72 000$ d&apos;intérêts sur la durée</li>
        <li><strong>Stratégie hybride :</strong> Choisir 30 ans mais faire des paiements accélérés quand possible</li>
      </ul>
      <p>
        Combinez cette décision avec le choix de <InternalLink slug="hypotheque-taux-fixe-variable-immigrant">taux fixe ou variable</InternalLink> pour
        optimiser votre hypothèque.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 23: ONTARIO / TORONTO
  // ====================================================
  "hypotheque-ontario-immigrants-toronto": (
    <>
      <p>
        L&apos;Ontario accueille le plus grand nombre d&apos;immigrants au Canada. Toronto et le GTA offrent un marché
        immobilier compétitif avec des <strong>taxes spécifiques</strong> à connaître avant d&apos;acheter.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Marché immobilier Ontario</h2>
      <ul className="space-y-2">
        <li><strong>Toronto (GTA) :</strong> Prix médian ~900 000$ à 1 100 000$ — les condos restent plus accessibles (~600 000$)</li>
        <li><strong>Ottawa :</strong> Prix médian ~550 000$ — marché bilingue attractif pour les francophones</li>
        <li><strong>Hamilton, London, Kitchener :</strong> Marchés en croissance, 400 000$ à 650 000$</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Taxes spécifiques Ontario</h2>
      <ul className="space-y-2">
        <li><strong>Land Transfer Tax (LTT) provinciale :</strong> Progressive de 0,5% à 2,5% selon la valeur</li>
        <li><strong>Municipal Land Transfer Tax (Toronto seulement) :</strong> Taxe additionnelle de la ville de Toronto — doublement de la LTT</li>
        <li><strong>Non-Resident Speculation Tax (NRST) :</strong> 25% pour les acheteurs non canadiens (exemptions pour RP et certains travailleurs)</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Programmes d&apos;aide Ontario</h2>
      <ul className="space-y-2">
        <li><strong>Remboursement LTT premiers acheteurs :</strong> Jusqu&apos;à 4 000$ de remboursement provincial</li>
        <li><strong>Remboursement LTT Toronto :</strong> Jusqu&apos;à 4 475$ additionnel pour les premiers acheteurs à Toronto</li>
        <li><strong><InternalLink slug="hypotheque-reer-rap-immigrant-premier-achat">RAP et CELIAPP</InternalLink> :</strong> Programmes fédéraux accessibles partout</li>
      </ul>
      <p>
        Plus d&apos;informations sur <a href="https://www.ontario.ca" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Ontario.ca</a>.
        Comparez aussi avec le <InternalLink slug="hypotheque-francophone-quebec">Québec</InternalLink> et
        la <InternalLink slug="hypotheque-bc-immigrants-vancouver-victoria">Colombie-Britannique</InternalLink>.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 24: TAXE ACHETEUR ÉTRANGER
  // ====================================================
  "hypotheque-taxe-acheteur-etranger-exemption": (
    <>
      <p>
        La <strong>Loi sur l&apos;interdiction d&apos;achat de propriétés résidentielles par des non-Canadiens</strong> et les
        taxes provinciales sur les acheteurs étrangers sont des obstacles potentiels. Mais de nombreuses <strong>exemptions</strong> existent
        pour les immigrants.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">La loi fédérale (interdiction d&apos;achat)</h2>
      <p>
        Entrée en vigueur en janvier 2023, cette loi interdit aux non-Canadiens d&apos;acheter des propriétés résidentielles.
        Consultez les détails sur <a href="https://www.cmhc-schl.gc.ca" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">le site de la SCHL</a>.
      </p>
      <h2 className="text-xl font-extrabold text-midnight">Qui est EXEMPTÉ ?</h2>
      <ul className="space-y-2">
        <li><strong>Résidents permanents :</strong> Totalement exemptés — aucune restriction</li>
        <li><strong>Personnes protégées / réfugiés :</strong> Exemptés</li>
        <li><strong>Travailleurs temporaires :</strong> Exemptés si au Canada depuis 12 mois+ et conditions remplies (déclaration de revenus déposée)</li>
        <li><strong>Étudiants internationaux :</strong> Exemptés sous conditions (18 mois+ au Canada, déclaration déposée, prix &lt; 500 000$)</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Taxes provinciales sur acheteurs étrangers</h2>
      <ul className="space-y-2">
        <li><strong>Ontario (NRST) :</strong> 25% — exemption pour RP et certains <InternalLink slug="hypotheque-permis-travail-ouvert">travailleurs temporaires</InternalLink></li>
        <li><strong>Colombie-Britannique :</strong> 20% Additional PTT — exemption pour RP et nominees provinciaux</li>
        <li><strong>Autres provinces :</strong> Pas de taxe spécifique aux acheteurs étrangers</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Conseils pratiques</h2>
      <ul className="space-y-2">
        <li>Si vous êtes en attente de RP, attendez la confirmation avant d&apos;acheter pour éviter les taxes</li>
        <li>Si vous êtes travailleur temporaire, assurez-vous d&apos;avoir 12 mois+ au Canada et une déclaration de revenus</li>
        <li>Consultez un avocat en immigration ET un courtier hypothécaire spécialisé</li>
      </ul>
      <p>
        Pour le processus complet d&apos;achat, consultez notre <InternalLink slug="hypotheque-travailleur-temporaire-5pourcent">guide principal</InternalLink> et
        notre <InternalLink slug="hypotheque-timeline-fermeture-immigrant">timeline de fermeture</InternalLink>.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 25: PRÉVISIONS TAUX HYPOTHÉCAIRES 2026
  // ====================================================
  "previsions-taux-hypothecaires-canada-2026": (
    <>
      <p>
        Les prévisions des taux hypothécaires au Canada pour 2026 indiquent que les coûts d&apos;emprunt devraient demeurer
        <strong> relativement stables</strong>. La <a href="https://www.bankofcanada.ca/rates/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Banque du Canada</a> devrait
        maintenir son taux directeur autour de <strong>2,25%</strong> pendant la majeure partie de l&apos;année. Si vous êtes
        immigrant et envisagez d&apos;acheter une propriété, c&apos;est le moment de comprendre comment ces prévisions impactent
        votre projet hypothécaire.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Les grandes lignes pour 2026</h2>
      <ul className="space-y-2">
        <li><strong>Taux directeur stable :</strong> La Banque du Canada devrait maintenir son taux près de 2,25% en 2026</li>
        <li><strong>Taux fixes stables :</strong> Les taux fixes devraient rester relativement stables avec un léger potentiel de hausse</li>
        <li><strong>Renouvellements coûteux :</strong> 33% des emprunteurs renouvelant en 2026 feront face à des paiements plus élevés</li>
        <li><strong>Pas de retour aux taux pré-pandémie :</strong> Les taux ultra-bas de 2020-2021 ne reviendront pas</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Pourquoi les renouvellements en 2026 coûtent plus cher</h2>
      <p>
        D&apos;ici la fin de 2026, environ <strong>33% des titulaires d&apos;un prêt hypothécaire</strong> au Canada feront face à
        une hausse de leurs versements mensuels. Près de 75% des personnes touchées détiennent une hypothèque à
        <InternalLink slug="hypotheque-taux-fixe-variable-immigrant">taux fixe sur 5 ans</InternalLink>.
      </p>
      <ul className="space-y-2">
        <li><strong>Taux fixe :</strong> Hausse moyenne des paiements d&apos;environ 20% au renouvellement — passage des taux bas de la pandémie aux taux actuels</li>
        <li><strong>Taux ajustable (ARM) :</strong> La majorité des hausses a déjà été absorbée, un allègement est possible en 2026</li>
        <li><strong>Taux variable (VRM) :</strong> ~10% verront leurs paiements augmenter de plus de 40%, mais ~25% pourraient voir une baisse de 7%</li>
      </ul>
      <p>
        Si vous approchez de votre renouvellement, consultez notre guide sur
        le <InternalLink slug="hypotheque-refinancement-renouvellement-immigrant">refinancement et renouvellement hypothécaire</InternalLink> pour
        connaître vos options.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Prévisions du taux directeur de la Banque du Canada (taux variables)</h2>
      <p>
        Les prévisions des six grandes banques indiquent que le taux directeur devrait rester stable à <strong>2,25%</strong> pendant
        la majeure partie de 2026. Seules la Banque Scotia et la Banque Nationale envisagent une possible hausse à 2,75%.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4">Banque</th>
              <th className="text-left py-2 pr-2">Mar</th>
              <th className="text-left py-2 pr-2">Avr</th>
              <th className="text-left py-2 pr-2">Juin</th>
              <th className="text-left py-2 pr-2">Juil</th>
              <th className="text-left py-2 pr-2">Sept</th>
              <th className="text-left py-2 pr-2">Oct</th>
              <th className="text-left py-2">Déc</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold">BMO</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td>2,25%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold">CIBC</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td>2,25%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold">Nationale</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td>2,25%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold">RBC</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td>2,25%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold">Scotia</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,75%</td><td>2,75%</td></tr>
            <tr><td className="py-2 pr-4 font-semibold">TD</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td className="pr-2">2,25%</td><td>2,25%</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-2">Données en date du 13 mars 2026. Sources : BMO Economics, CIBC Economics, RBC Economics, Scotiabank Economics, TD Economics.</p>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Rendements des obligations à 5 ans (impact sur les taux fixes)</h2>
      <p>
        Les rendements des obligations du gouvernement du Canada à 5 ans sont le <strong>principal indicateur</strong> utilisé par les
        prêteurs pour établir les taux fixes. Les banques ajoutent une marge de 1% à 2% au rendement obligataire.
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4">Banque</th>
              <th className="text-left py-2 pr-4">T1 2026</th>
              <th className="text-left py-2 pr-4">T2 2026</th>
              <th className="text-left py-2 pr-4">T3 2026</th>
              <th className="text-left py-2">T4 2026</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold">BMO</td><td className="pr-4">2,85%</td><td className="pr-4">2,85%</td><td className="pr-4">2,85%</td><td>2,85%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold">CIBC</td><td className="pr-4">2,80%</td><td className="pr-4">2,90%</td><td className="pr-4">3,05%</td><td>3,20%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold">Nationale</td><td className="pr-4">2,90%</td><td className="pr-4">2,80%</td><td className="pr-4">2,85%</td><td>2,90%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold">RBC</td><td className="pr-4">3,00%</td><td className="pr-4">3,00%</td><td className="pr-4">3,05%</td><td>3,10%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4 font-semibold">Scotia</td><td className="pr-4">2,95%</td><td className="pr-4">3,00%</td><td className="pr-4">3,10%</td><td>3,25%</td></tr>
            <tr><td className="py-2 pr-4 font-semibold">TD</td><td className="pr-4">3,00%</td><td className="pr-4">2,90%</td><td className="pr-4">2,90%</td><td>2,90%</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-2">Données en date du 13 mars 2026.</p>

      <h2 className="text-xl font-extrabold text-midnight">Les taux vont-ils baisser en 2026 ?</h2>
      <p>
        Le taux directeur de la Banque du Canada a déjà diminué de <strong>100 points de base en 2025</strong>. Une baisse
        supplémentaire en 2026 reste peu probable, sauf en cas de ralentissement économique marqué.
      </p>
      <ul className="space-y-2">
        <li>Les six grandes banques anticipent un taux stable à 2,25% pour le reste de 2026</li>
        <li>Seules Scotia et Nationale envisagent une possible hausse de 50 points de base</li>
        <li>Le gouverneur Tiff Macklem a déclaré que la Banque reste prête à réagir si les perspectives changent</li>
        <li>Les probabilités d&apos;une hausse de 0,25% en avril sont de seulement 5%</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Pourquoi les taux fixes et variables évoluent différemment</h2>
      <p>
        Comprendre cette différence est crucial pour choisir entre <InternalLink slug="hypotheque-taux-fixe-variable-immigrant">taux fixe et variable</InternalLink>.
      </p>
      <ul className="space-y-2">
        <li><strong>Taux fixes :</strong> Influencés par les rendements des obligations du gouvernement du Canada. Fluctuent selon les conditions des marchés mondiaux, les taux obligataires américains, les perspectives d&apos;inflation et la croissance économique</li>
        <li><strong>Taux variables :</strong> Liés directement au taux directeur de la Banque du Canada. Ajustés lors des 8 annonces annuelles. Les prêteurs ajustent leur taux préférentiel généralement le jour suivant l&apos;annonce</li>
      </ul>

      <WizardCta variant="dark" />

      <h2 className="text-xl font-extrabold text-midnight">Meilleurs taux hypothécaires actuels (mars 2026)</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4">Type</th>
              <th className="text-left py-2 pr-4">Terme</th>
              <th className="text-left py-2">Taux</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Fixe</td><td className="pr-4">3 ans</td><td>4,20%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Fixe</td><td className="pr-4">5 ans</td><td>4,04%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Variable</td><td className="pr-4">3 ans</td><td>3,60%</td></tr>
            <tr><td className="py-2 pr-4">Variable</td><td className="pr-4">5 ans</td><td>3,40%</td></tr>
          </tbody>
        </table>
      </div>
      <p className="text-xs text-gray-400 mt-2">Taux indicatifs en date de mars 2026. Les taux varient selon votre profil et votre prêteur.</p>

      <h2 className="text-xl font-extrabold text-midnight">Calendrier des annonces de la Banque du Canada en 2026</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4">Date</th>
              <th className="text-left py-2 pr-4">Décision</th>
              <th className="text-left py-2">Taux cible</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">28 janvier</td><td className="pr-4">Aucun changement</td><td>2,25%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">18 mars</td><td className="pr-4">Aucun changement</td><td>2,25%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">29 avril</td><td className="pr-4">À déterminer</td><td>—</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">10 juin</td><td className="pr-4">À déterminer</td><td>—</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">15 juillet</td><td className="pr-4">À déterminer</td><td>—</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">2 septembre</td><td className="pr-4">À déterminer</td><td>—</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">28 octobre</td><td className="pr-4">À déterminer</td><td>—</td></tr>
            <tr><td className="py-2 pr-4">9 décembre</td><td className="pr-4">À déterminer</td><td>—</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-extrabold text-midnight">Ce que ces prévisions signifient pour les immigrants</h2>
      <p>
        En tant qu&apos;immigrant au Canada, voici comment ces prévisions impactent votre projet d&apos;achat :
      </p>
      <ul className="space-y-2">
        <li><strong>Stabilité = bonne nouvelle :</strong> Des taux stables signifient que vous pouvez planifier votre achat avec plus de certitude sur vos paiements mensuels</li>
        <li><strong>Le stress test reste à 5,25% :</strong> Vous devez toujours vous qualifier au taux contractuel + 2% ou à 5,25%, le plus élevé des deux</li>
        <li><strong>Le programme SCHL Nouveaux Arrivants reste disponible :</strong> <InternalLink slug="hypotheque-travailleur-temporaire-5pourcent">5% de mise de fonds</InternalLink> avec crédit alternatif accepté</li>
        <li><strong>Taux fixe recommandé pour les nouveaux arrivants :</strong> La prévisibilité des paiements est importante pendant votre installation au Canada</li>
        <li><strong>Amortissement 30 ans :</strong> Si c&apos;est votre premier achat, l&apos;<InternalLink slug="hypotheque-amortissement-duree-choix">amortissement sur 30 ans</InternalLink> réduit vos paiements mensuels d&apos;environ 188$/mois sur un prêt de 400 000$</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Contexte économique canadien en 2026</h2>
      <ul className="space-y-2">
        <li><strong>PIB :</strong> Contraction de 0,6% au T4 2025 — l&apos;économie ralentit</li>
        <li><strong>Emploi :</strong> Perte de 84 000 emplois en février 2026</li>
        <li><strong>Inflation :</strong> Pressions inflationnistes liées à la hausse des prix du pétrole</li>
        <li><strong>Incertitudes :</strong> Politiques commerciales américaines imprévisibles, tensions géopolitiques</li>
      </ul>
      <p>
        Malgré ces incertitudes, le marché immobilier reste actif et les programmes bancaires pour immigrants continuent
        d&apos;être disponibles. Consultez les programmes de <a href="https://www.rbc.com/newcomers/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">RBC</a>,
        <a href="https://www.td.com/ca/en/personal-banking/solutions/newcomers-to-canada" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline"> TD</a>,
        <a href="https://www.scotiabank.com/ca/en/personal/programs/start-right.html" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline"> Scotiabank</a> et
        <a href="https://www.bmo.com/main/personal/newcomers-to-canada/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline"> BMO</a> pour
        les offres spécifiques aux nouveaux arrivants.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Prévisions 2027 à 2030 : à quoi s&apos;attendre</h2>
      <p>
        Les projections à long terme restent incertaines, mais les économistes s&apos;accordent sur quelques tendances :
      </p>
      <ul className="space-y-2">
        <li><strong>2027 :</strong> Stabilisation probable des taux, avec un taux directeur entre 2,00% et 2,75%</li>
        <li><strong>2028-2030 :</strong> Retour progressif vers un taux neutre d&apos;environ 2,50% à 3,00%</li>
        <li><strong>Taux fixes :</strong> Devraient osciller entre 3,50% et 5,00% selon les conditions mondiales</li>
        <li><strong>Un retour aux taux pré-pandémie (1-2%) est très improbable</strong></li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">FAQ : Prévisions des taux hypothécaires</h2>

      <h3 className="text-lg font-semibold text-midnight mt-6">Les taux vont-ils baisser en 2026 ?</h3>
      <p>
        C&apos;est peu probable. La majorité des économistes anticipent un taux directeur stable à 2,25% tout au long de 2026.
        Une baisse n&apos;est envisageable qu&apos;en cas de ralentissement économique significatif.
      </p>

      <h3 className="text-lg font-semibold text-midnight mt-6">Devrais-je choisir un taux fixe ou variable en 2026 ?</h3>
      <p>
        En période de stabilité, le taux variable est actuellement plus bas (3,40% vs 4,04% en fixe 5 ans). Cependant,
        pour un immigrant récemment arrivé, le taux fixe offre la <strong>prévisibilité</strong> nécessaire pendant votre installation.
        Consultez notre <InternalLink slug="hypotheque-taux-fixe-variable-immigrant">comparatif taux fixe vs variable</InternalLink>.
      </p>

      <h3 className="text-lg font-semibold text-midnight mt-6">Quel est le meilleur moment pour acheter en 2026 ?</h3>
      <p>
        Avec des taux stables, il n&apos;y a pas de raison d&apos;attendre une baisse significative. Le meilleur moment
        pour acheter est quand votre situation financière est prête : crédit établi, mise de fonds accumulée,
        emploi stable. Commencez par une <InternalLink slug="preapprobation-hypotheque-immigrant">préapprobation</InternalLink>.
      </p>

      <h3 className="text-lg font-semibold text-midnight mt-6">Comment le stress test affecte-t-il ma capacité d&apos;emprunt ?</h3>
      <p>
        Avec un taux contractuel de 4,04% (fixe 5 ans), le stress test s&apos;applique à 6,04% (taux + 2%, car supérieur à 5,25%).
        Cela réduit votre capacité d&apos;emprunt d&apos;environ 20% par rapport au taux réel. Les ratios d&apos;endettement du
        programme <a href="https://www.cmhc-schl.gc.ca" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">SCHL Nouveaux Arrivants</a> sont
        ABD max 35% / ATD max 42%.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

};
