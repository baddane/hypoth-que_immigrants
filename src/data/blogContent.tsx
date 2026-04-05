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
      <p>
        Selon la <a href="https://www.bcrea.bc.ca/economics/monthly-statistics/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">BC Real Estate Association (BCREA)</a>,
        les prix en Colombie-Britannique restent parmi les plus élevés au pays.
      </p>
      <ul className="space-y-2">
        <li><strong>Vancouver :</strong> Prix médian maison ~1 200 000$ — proche du plafond SCHL 1,5M$</li>
        <li><strong>Victoria :</strong> Prix médian ~850 000$ — plus accessible</li>
        <li><strong>Kelowna, Nanaimo :</strong> Options plus abordables à partir de ~600 000$</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Taxes spécifiques BC</h2>
      <p>
        Le gouvernement de la BC impose plusieurs taxes sur les transactions immobilières. Consultez le
        site officiel de la <a href="https://www2.gov.bc.ca/gov/content/taxes/property-taxes/property-transfer-tax" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Property Transfer Tax</a> pour les détails.
      </p>
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
      <p>
        La <a href="https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">SCHL publie régulièrement des données</a> sur
        les tendances du marché résidentiel, incluant les différences entre condos et maisons unifamiliales.
      </p>
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

      <p>
        Utilisez le <a href="https://itools-ioutils.fcac-acfc.gc.ca/MQ-HQ/MQCalc-EAPHCalc-fra.aspx" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">calculateur hypothécaire de l&apos;ACFC</a> pour
        comparer les paiements mensuels selon le type de propriété.
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
      <p>
        L&apos;<a href="https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/hypotheques/co-signataire.html" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Agence de la consommation en matière financière du Canada (ACFC)</a> détaille
        les responsabilités légales d&apos;un co-signataire hypothécaire.
      </p>
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

      <p>
        Consultez la page <a href="https://www.cmhc-schl.gc.ca/consumers/home-buying/newcomers" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">SCHL pour nouveaux arrivants</a> pour
        vérifier si vous êtes admissible sans co-signataire grâce au programme Nouveaux Arrivants.
      </p>

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

      <p>
        Le <a href="https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/hypotheques/processus-achat-maison.html" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">gouvernement du Canada</a> détaille
        le processus complet d&apos;achat d&apos;une propriété, et la <a href="https://www.cmhc-schl.gc.ca/consumers/home-buying/buying-guides" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">SCHL offre des guides d&apos;achat</a> pour
        les premiers acheteurs.
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

      <p>
        Selon le <a href="https://www.canada.ca/fr/ministere-finances/nouvelles/2024/09/le-gouvernement-du-canada-annonce-de-nouvelles-mesures-hypothecaires.html" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">ministère des Finances du Canada</a>,
        les nouvelles règles d&apos;amortissement de 30 ans sont entrées en vigueur en décembre 2024. La <a href="https://www.cmhc-schl.gc.ca/consumers/home-buying/calculators/mortgage-calculator" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">calculatrice hypothécaire de la SCHL</a> vous
        permet de comparer les scénarios.
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
  // ARTICLE 23: CELIAPP ET RAP POUR IMMIGRANTS
  // ====================================================
  "celiapp-rap-immigrant-premier-acheteur-2026": (
    <>
      <p>
        Le <strong>CELIAPP</strong> (Compte d&apos;épargne libre d&apos;impôt pour l&apos;achat d&apos;une première propriété) est
        l&apos;un des outils les plus puissants pour les immigrants qui veulent acheter. Combiné au <strong>RAP</strong> (Régime
        d&apos;accession à la propriété), vous pouvez accumuler une mise de fonds considérable avec des avantages fiscaux majeurs.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Le CELIAPP : jusqu&apos;à 40 000$ en épargne défiscalisée</h2>
      <p>
        Créé en 2023 par le <a href="https://www.canada.ca/fr/agence-revenu/services/impot/particuliers/sujets/celiapp.html" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">gouvernement du Canada</a>,
        le CELIAPP permet aux premiers acheteurs d&apos;épargner pour leur mise de fonds avec un triple avantage fiscal :
      </p>
      <ul className="space-y-2">
        <li><strong>Cotisations déductibles :</strong> 8 000$/an réduisent votre revenu imposable (comme un REER)</li>
        <li><strong>Croissance libre d&apos;impôt :</strong> Les rendements ne sont jamais imposés (comme un CELI)</li>
        <li><strong>Retrait non imposable :</strong> Aucun impôt au retrait si utilisé pour acheter une première propriété</li>
        <li><strong>Plafond à vie :</strong> 40 000$ (5 ans × 8 000$), avec report possible d&apos;un an</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Le piège pour les immigrants : le bien à l&apos;étranger</h2>
      <p>
        <strong>Attention :</strong> pour être admissible au CELIAPP, vous ne devez pas avoir habité une propriété dont vous
        étiez propriétaire pendant l&apos;année d&apos;ouverture du compte <strong>ni les 4 années précédentes</strong>. Cette
        règle s&apos;applique <strong>même si la propriété était à l&apos;étranger</strong>.
      </p>
      <p>
        Exemple concret : si vous avez vendu votre maison au Maroc en 2023 et immigré au Canada en 2024, vous ne pourrez
        ouvrir un CELIAPP qu&apos;en <strong>2028</strong> (4 ans après avoir cessé d&apos;habiter votre propriété).
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Le RAP : retirer 60 000$ de votre REER sans impôt</h2>
      <p>
        Le <InternalLink slug="hypotheque-reer-rap-immigrant-premier-achat">Régime d&apos;accession à la propriété (RAP)</InternalLink> vous
        permet de retirer jusqu&apos;à 60 000$ de votre REER pour acheter votre première propriété, sans payer d&apos;impôt
        immédiat. Vous devez rembourser le montant sur 15 ans.
      </p>
      <ul className="space-y-2">
        <li><strong>Montant max :</strong> 60 000$ par personne (120 000$ en couple)</li>
        <li><strong>Condition :</strong> L&apos;argent doit être dans le REER depuis au moins 90 jours</li>
        <li><strong>Remboursement :</strong> Sur 15 ans, à partir de la 2e année suivant le retrait</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Stratégie combinée : CELIAPP + RAP + épargne</h2>
      <p>
        Pour un couple immigrant admissible, la stratégie optimale peut générer une mise de fonds impressionnante :
      </p>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4">Source</th>
              <th className="text-left py-2 pr-4">Par personne</th>
              <th className="text-left py-2">En couple</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">CELIAPP (2 ans)</td><td className="pr-4">16 000$</td><td>32 000$</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">RAP (REER)</td><td className="pr-4">60 000$</td><td>120 000$</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Épargne personnelle</td><td className="pr-4">Variable</td><td>Variable</td></tr>
            <tr><td className="py-2 pr-4 font-semibold">Total potentiel</td><td className="pr-4 font-semibold">76 000$+</td><td className="font-semibold">152 000$+</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Avec 152 000$ de mise de fonds, un couple peut acheter une propriété de <strong>760 000$ avec 20% de mise de fonds</strong> —
        évitant même l&apos;assurance SCHL. Consultez aussi nos guides sur
        l&apos;<InternalLink slug="hypotheque-amortissement-duree-choix">amortissement 25 vs 30 ans</InternalLink> pour optimiser vos paiements.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Où ouvrir un CELIAPP ?</h2>
      <p>
        Toutes les grandes banques et caisses offrent le CELIAPP. <a href="https://www.desjardins.com/fr/conseils/admissibilite-celiapp.html" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Desjardins</a>,
        RBC, TD, BMO, Scotiabank et les courtiers en ligne (Wealthsimple, Questrade) le proposent avec différentes options
        de placement (compte épargne, CPG, fonds communs).
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 24: INTERDICTION ACHAT NON-CANADIENS
  // ====================================================
  "interdiction-achat-non-canadien-exemptions-2027": (
    <>
      <p>
        Depuis janvier 2023, la <strong>Loi sur l&apos;interdiction d&apos;achat de propriétés résidentielles par des non-Canadiens</strong> empêche
        certains non-citoyens d&apos;acheter un bien résidentiel au Canada. Mais la loi est <strong>truffée d&apos;exemptions</strong> — et
        elle expire le <strong>1er janvier 2027</strong>.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Ce que dit la loi</h2>
      <p>
        Adoptée pour lutter contre la spéculation immobilière, la <a href="https://laws-lois.justice.gc.ca/eng/acts/P-25.2/page-1.html" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Loi C-19</a> interdit
        aux non-Canadiens d&apos;acheter des propriétés résidentielles (1 à 3 logements) dans les régions métropolitaines de
        recensement (RMR) et les agglomérations de recensement (AR).
      </p>
      <ul className="space-y-2">
        <li><strong>Durée :</strong> Du 1er janvier 2023 au 1er janvier 2027 (prolongée deux fois)</li>
        <li><strong>Pénalités :</strong> Amende jusqu&apos;à 10 000$ et ordonnance de vente forcée possible</li>
        <li><strong>Portée géographique :</strong> Uniquement dans les RMR et AR (pas en zone rurale)</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Qui est EXEMPTÉ ? (la majorité des immigrants)</h2>
      <p>
        La bonne nouvelle : la plupart des immigrants sont exemptés. Selon la <a href="https://www.cmhc-schl.gc.ca/professionals/housing-markets-data-and-research/housing-research/consultations/prohibition-purchase-residential-property-non-canadians-act" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">SCHL</a>,
        les exemptions incluent :
      </p>
      <ul className="space-y-2">
        <li><strong>Résidents permanents :</strong> Totalement exemptés, aucune restriction</li>
        <li><strong>Personnes protégées / réfugiés :</strong> Totalement exemptés</li>
        <li><strong>Travailleurs temporaires :</strong> Exemptés si 183 jours+ restants sur le permis ET déclaration de revenus déposée</li>
        <li><strong>Étudiants internationaux :</strong> Exemptés sous conditions (18 mois+ au Canada, déclaration déposée, prix &lt; 500 000$)</li>
        <li><strong>Conjoints :</strong> Exemptés si le conjoint est citoyen, RP, personne protégée ou travailleur exempté</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Ce qui n&apos;est PAS couvert par l&apos;interdiction</h2>
      <ul className="space-y-2">
        <li><strong>Immeubles de 4+ logements :</strong> Les immeubles à revenus de 4 unités ou plus ne sont pas visés</li>
        <li><strong>Terrains vacants :</strong> L&apos;achat de terrain pour développement est permis</li>
        <li><strong>Zones rurales :</strong> En dehors des RMR/AR, aucune restriction</li>
        <li><strong>Héritage, divorce, don :</strong> Les transferts non commerciaux sont exclus</li>
      </ul>
      <p>
        Pour les <InternalLink slug="hypotheque-taxe-acheteur-etranger-exemption">taxes provinciales sur acheteurs étrangers</InternalLink> (Ontario 25%, BC 20%),
        les exemptions sont différentes — consultez notre guide dédié.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Que faire en attendant janvier 2027 ?</h2>
      <ul className="space-y-2">
        <li>Si vous êtes RP ou personne protégée : achetez dès maintenant, vous n&apos;êtes pas concerné</li>
        <li>Si vous avez un <InternalLink slug="hypotheque-permis-travail-ouvert">permis de travail</InternalLink> : vérifiez qu&apos;il reste 183+ jours de validité</li>
        <li>Si vous êtes étudiant : la limite de 500 000$ est restrictive dans les grandes villes — attendez la RP ou la fin de la loi</li>
        <li>Dans tous les cas : commencez à bâtir votre crédit et votre mise de fonds dès maintenant</li>
      </ul>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 25: FRAIS CACHÉS ACHAT MAISON
  // ====================================================
  "frais-caches-achat-maison-immigrant-checklist": (
    <>
      <p>
        Au-delà de la mise de fonds, l&apos;achat d&apos;une maison au Canada implique des <strong>frais de fermeture de 2 à 3%
        du prix d&apos;achat</strong>. Pour une propriété de 500 000$, prévoyez 10 000 à 15 000$ en frais additionnels.
        Voici la checklist complète pour ne rien oublier.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Checklist des frais de fermeture</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4">Frais</th>
              <th className="text-left py-2 pr-4">Coût estimé</th>
              <th className="text-left py-2">Obligatoire ?</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Taxe de bienvenue (mutation)</td><td className="pr-4">0,5% à 3% du prix</td><td>Oui</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Notaire / avocat</td><td className="pr-4">1 000 à 2 500$</td><td>Oui</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Inspection préachat</td><td className="pr-4">400 à 600$</td><td>Recommandé</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Assurance titre</td><td className="pr-4">200 à 400$</td><td>Recommandé</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Évaluation de la propriété</td><td className="pr-4">300 à 500$</td><td>Parfois inclus</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Assurance habitation</td><td className="pr-4">800 à 2 000$/an</td><td>Oui</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Ajustements (taxes, services)</td><td className="pr-4">500 à 2 000$</td><td>Oui</td></tr>
            <tr><td className="py-2 pr-4">Déménagement</td><td className="pr-4">500 à 3 000$</td><td>Variable</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Consultez le <a href="https://itools-ioutils.fcac-acfc.gc.ca/MQ-HQ/MQCalc-EAPHCalc-fra.aspx" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">calculateur de l&apos;ACFC</a> pour
        estimer vos paiements hypothécaires, puis ajoutez ces frais à votre budget.
      </p>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">La taxe de bienvenue par province</h2>
      <ul className="space-y-2">
        <li><strong>Québec (taxe de mutation) :</strong> 0,5% sur les premiers 55 200$, 1% de 55 200$ à 276 200$, 1,5% au-dessus. Montréal ajoute 0,5% supplémentaire au-delà de 500 000$</li>
        <li><strong>Ontario (land transfer tax) :</strong> 0,5% à 2,5% progressif. Toronto impose une <strong>taxe municipale additionnelle</strong> équivalente</li>
        <li><strong>Colombie-Britannique (PTT) :</strong> 1% sur les premiers 200 000$, 2% de 200 000$ à 2M$, 3% au-dessus</li>
        <li><strong>Alberta, Manitoba, Saskatchewan :</strong> Frais d&apos;enregistrement plus modestes (quelques centaines de dollars)</li>
      </ul>
      <p>
        Les premiers acheteurs bénéficient souvent d&apos;exemptions partielles ou totales. Vérifiez votre admissibilité auprès de votre
        <InternalLink slug="hypotheque-timeline-fermeture-immigrant">notaire lors de la fermeture</InternalLink>.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Frais spécifiques aux immigrants</h2>
      <ul className="space-y-2">
        <li><strong>Conversion de devises :</strong> Les frais de change lors du transfert de votre mise de fonds peuvent représenter 1 à 3% du montant</li>
        <li><strong>Traduction de documents :</strong> 50 à 200$ par document (relevés bancaires, lettres d&apos;emploi étrangères)</li>
        <li><strong>Taxes acheteurs étrangers :</strong> Si applicable, 20 à 25% du prix dans certaines provinces (voir les <InternalLink slug="hypotheque-taxe-acheteur-etranger-exemption">exemptions</InternalLink>)</li>
        <li><strong>Vérification de fonds :</strong> Votre prêteur peut exiger des preuves additionnelles sur l&apos;origine des fonds étrangers</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Exemple de budget complet</h2>
      <p>
        Pour une propriété de 500 000$ à Montréal avec 5% de mise de fonds :
      </p>
      <ul className="space-y-2">
        <li>Mise de fonds : 25 000$</li>
        <li>Assurance SCHL (~4%) : ~19 000$ (ajouté au prêt)</li>
        <li>Taxe de mutation : ~5 500$</li>
        <li>Notaire : ~1 500$</li>
        <li>Inspection + assurance titre : ~900$</li>
        <li>Assurance habitation : ~1 200$ (première année)</li>
        <li>Ajustements + divers : ~1 500$</li>
        <li><strong>Total à prévoir en liquidités : ~35 600$</strong> (mise de fonds + frais)</li>
      </ul>
      <p>
        Source : <a href="https://www.bnc.ca/particuliers/conseils/maison/frais-achat-maison.html" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Banque Nationale — Frais d&apos;achat d&apos;une maison</a>.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 26: DUPLEX / TRIPLEX IMMIGRANT
  // ====================================================
  "acheter-duplex-triplex-immigrant-mise-de-fonds": (
    <>
      <p>
        Acheter un duplex ou un triplex est l&apos;une des stratégies les plus populaires pour les immigrants qui veulent
        <strong> devenir propriétaires tout en générant des revenus locatifs</strong>. La mise de fonds peut être aussi basse
        que <strong>5% pour un duplex occupé</strong>.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Mise de fonds minimale par type</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4">Type</th>
              <th className="text-left py-2 pr-4">Occupé par le proprio</th>
              <th className="text-left py-2">Non occupé (investissement)</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Duplex</td><td className="pr-4">5%</td><td>20%</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Triplex</td><td className="pr-4">10%</td><td>20%</td></tr>
            <tr><td className="py-2 pr-4">Quadruplex</td><td className="pr-4">10%</td><td>20%</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Un duplex occupé à 600 000$ ne nécessite que <strong>30 000$ de mise de fonds</strong> — et les revenus locatifs
        aident à payer l&apos;hypothèque. Consultez la <a href="https://www.cmhc-schl.gc.ca/consumers/home-buying/buying-guides/homebuying-in-canada" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">SCHL</a> pour
        les conditions d&apos;assurance sur les multilogements.
      </p>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Comment les banques calculent les revenus locatifs</h2>
      <p>
        Les prêteurs ajoutent une partie des revenus locatifs à votre revenu pour le calcul des ratios d&apos;endettement :
      </p>
      <ul className="space-y-2">
        <li><strong>Méthode traditionnelle :</strong> 50% des loyers bruts ajoutés au revenu (Big 5 banks)</li>
        <li><strong>Méthode par compensation :</strong> 80% des loyers compensent les paiements hypothécaires (certains prêteurs alternatifs comme MCAP, First National)</li>
        <li><strong>Preuves requises :</strong> Baux signés, ou évaluation du loyer de marché par un évaluateur</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Restriction pour les non-RP</h2>
      <p>
        <strong>Attention :</strong> la <InternalLink slug="interdiction-achat-non-canadien-exemptions-2027">Loi sur l&apos;interdiction d&apos;achat</InternalLink> interdit
        aux non-Canadiens d&apos;acheter des propriétés de <strong>3 logements ou moins</strong>. Cela inclut les duplex et triplex.
        Les résidents permanents sont exemptés, mais les travailleurs temporaires doivent vérifier leur admissibilité.
      </p>
      <p>
        Exception : les immeubles de <strong>4 logements ou plus</strong> ne sont pas visés par cette loi.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Avantages financiers du plex pour un immigrant</h2>
      <ul className="space-y-2">
        <li><strong>Revenus locatifs :</strong> Les loyers couvrent souvent 50 à 80% de l&apos;hypothèque</li>
        <li><strong>Déductions fiscales :</strong> Intérêts hypothécaires, taxes, assurances et entretien de la partie locative sont déductibles</li>
        <li><strong>Appréciation :</strong> Les plex prennent souvent plus de valeur que les unifamiliales dans les quartiers en demande</li>
        <li><strong>Premier achat stratégique :</strong> Achetez un duplex, habitez un logement, louez l&apos;autre, puis achetez votre maison dans quelques années</li>
      </ul>
      <p>
        Pour comparer avec l&apos;achat d&apos;un condo ou d&apos;une maison, consultez notre guide
        <InternalLink slug="hypotheque-maison-vs-condo-immigrant">maison vs condo</InternalLink>. Pour en apprendre plus sur le processus,
        consultez les conseils de la <a href="https://www.corpiq.com/fr/nouvelles/2404-mon-premier-plex-quoi-savoir-avant-dacheter-en-2026.html" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">CORPIQ</a>.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 27: CONSTRUIRE SON CRÉDIT EN 6 MOIS
  // ====================================================
  "construire-credit-canadien-6-mois-immigrant": (
    <>
      <p>
        Vous arrivez au Canada avec un score de crédit de <strong>zéro</strong>. Votre historique de crédit de votre
        pays d&apos;origine ne compte pas ici. La bonne nouvelle : avec la bonne stratégie, vous pouvez atteindre
        un <strong>score de 680+ en seulement 6 mois</strong>.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Mois 1 : Les fondations</h2>
      <ul className="space-y-2">
        <li><strong>Ouvrir un compte bancaire :</strong> Choisissez une banque avec un programme nouveaux arrivants (RBC, TD, Scotiabank)</li>
        <li><strong>Obtenir une carte de crédit sécurisée :</strong> Déposez 500 à 1 000$ comme garantie. Capital One Guaranteed, Home Trust Secured sont les plus accessibles</li>
        <li><strong>Configurer des paiements récurrents :</strong> Téléphone, internet, abonnements — tout sur la carte de crédit</li>
        <li><strong>Règle d&apos;or :</strong> Ne jamais dépasser 30% de la limite de crédit</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Mois 2-3 : Bâtir l&apos;historique</h2>
      <ul className="space-y-2">
        <li>Utilisez la carte pour de petits achats réguliers (épicerie, essence)</li>
        <li><strong>Payez le solde en entier</strong> chaque mois, avant la date d&apos;échéance</li>
        <li>Ne faites PAS de demande pour d&apos;autres produits de crédit — chaque demande réduit temporairement votre score</li>
        <li>Inscrivez-vous à <a href="https://www.consumer.equifax.ca/personal/products/equifax-complete/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Equifax</a> ou <a href="https://www.transunion.ca/product/transunion-credit-monitoring" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">TransUnion</a> pour surveiller votre score gratuitement</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Mois 4 : Accélérer</h2>
      <ul className="space-y-2">
        <li>Demandez une <strong>augmentation de limite</strong> sur votre carte sécurisée (sans nouvelle enquête de crédit)</li>
        <li>Postulez pour une <strong>carte de crédit non sécurisée</strong> — votre historique de 3 mois devrait suffire</li>
        <li>Ajoutez votre loyer à votre rapport de crédit via des services comme Landlord Credit Bureau</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Mois 5-6 : Score hypothécaire</h2>
      <ul className="space-y-2">
        <li>Votre score devrait être entre <strong>650 et 700</strong></li>
        <li>Commencez votre <InternalLink slug="preapprobation-hypotheque-immigrant">demande de préapprobation</InternalLink></li>
        <li>Si votre score est sous 680, continuez le processus — le <InternalLink slug="hypotheque-sans-historique-credit">crédit alternatif</InternalLink> de la SCHL accepte des preuves non traditionnelles</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Les 5 règles d&apos;or du crédit</h2>
      <ul className="space-y-2">
        <li><strong>1. Utilisation &lt; 30% :</strong> Ne dépassez jamais 30% de votre limite de crédit</li>
        <li><strong>2. Paiement à temps :</strong> Un seul retard peut faire chuter votre score de 100+ points</li>
        <li><strong>3. Ancienneté :</strong> Ne fermez pas votre première carte — l&apos;ancienneté du compte compte</li>
        <li><strong>4. Diversité :</strong> Avoir 2 types de crédit (carte + prêt) est mieux qu&apos;un seul</li>
        <li><strong>5. Peu de demandes :</strong> Chaque demande de crédit crée une enquête qui réduit votre score</li>
      </ul>
      <p>
        Pour les scores minimums par banque, consultez notre guide sur le <InternalLink slug="hypotheque-score-credit-minimum-immigrant">score de crédit minimum</InternalLink>.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 28: TRANSFÉRER MISE DE FONDS DE L'ÉTRANGER
  // ====================================================
  "transferer-mise-de-fonds-etranger-canada": (
    <>
      <p>
        Transférer votre mise de fonds depuis votre pays d&apos;origine est un processus que chaque immigrant doit planifier
        soigneusement. Les banques exigent des <strong>preuves rigoureuses de l&apos;origine des fonds</strong> et un
        <strong> historique de 90 jours</strong> dans un compte canadien.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Ce que votre prêteur exige</h2>
      <ul className="space-y-2">
        <li><strong>90 jours de seasoning :</strong> Les fonds doivent être dans votre compte canadien depuis au moins 90 jours avant la fermeture</li>
        <li><strong>Traçabilité complète :</strong> Relevés bancaires du pays d&apos;origine montrant la source + relevés canadiens montrant la réception</li>
        <li><strong>Preuve d&apos;origine :</strong> Contrat de vente immobilière, relevés d&apos;épargne, lettre d&apos;employeur, contrat de travail</li>
        <li><strong>Lettre de don :</strong> Si les fonds proviennent d&apos;un proche, une lettre de don signée confirmant que c&apos;est un cadeau sans remboursement</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Règles anti-blanchiment (FINTRAC)</h2>
      <p>
        Le <a href="https://fintrac-canafe.gc.ca/reporting-declaration/info/rptER-fra" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Centre d&apos;analyse des opérations et déclarations financières du Canada (CANAFE)</a> impose
        des déclarations obligatoires pour les transferts de 10 000$ CAD ou plus :
      </p>
      <ul className="space-y-2">
        <li>Votre banque doit déclarer tout transfert international de 10 000$+</li>
        <li>Fractionner les transferts pour éviter le seuil (« structuration ») est <strong>illégal</strong></li>
        <li>Vous devez déclarer à la douane si vous entrez au Canada avec 10 000$+ en espèces ou instruments monétaires</li>
        <li>Conservez tous les reçus de transfert pendant au moins 5 ans</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Méthodes de transfert comparées</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4">Méthode</th>
              <th className="text-left py-2 pr-4">Frais</th>
              <th className="text-left py-2 pr-4">Délai</th>
              <th className="text-left py-2">Taux de change</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Virement bancaire (SWIFT)</td><td className="pr-4">25-50$ + frais intermédiaires</td><td className="pr-4">2-5 jours</td><td>Taux banque (marge ~2-3%)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4"><a href="https://wise.com/ca/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Wise</a> / Remitly</td><td className="pr-4">0,5-1,5%</td><td className="pr-4">1-3 jours</td><td>Taux mid-market (le meilleur)</td></tr>
            <tr><td className="py-2 pr-4">Traite bancaire</td><td className="pr-4">10-25$</td><td className="pr-4">Immédiat (en personne)</td><td>Taux banque</td></tr>
          </tbody>
        </table>
      </div>

      <h2 className="text-xl font-extrabold text-midnight">Conseils pour minimiser les coûts</h2>
      <ul className="space-y-2">
        <li><strong>Transférez tôt :</strong> Envoyez les fonds au moins 3-4 mois avant la date de fermeture prévue</li>
        <li><strong>Comparez les taux :</strong> Les services en ligne offrent souvent 1-2% de mieux que les banques traditionnelles</li>
        <li><strong>Évitez les conversions multiples :</strong> Transférez directement dans la devise finale (CAD)</li>
        <li><strong>Gardez tout :</strong> Chaque reçu, chaque relevé — votre prêteur et votre <InternalLink slug="preapprobation-hypotheque-immigrant">courtier</InternalLink> les demanderont</li>
      </ul>
      <p>
        Pour inclure des revenus étrangers dans votre demande, consultez notre guide sur les <InternalLink slug="hypotheque-revenu-etranger-convert">revenus étrangers</InternalLink>.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 29: COURTIER HYPOTHÉCAIRE VS BANQUE
  // ====================================================
  "courtier-hypothecaire-vs-banque-immigrant": (
    <>
      <p>
        La plupart des immigrants vont directement à leur banque pour demander une hypothèque. Pourtant, un
        <strong> courtier hypothécaire</strong> accède à 30+ prêteurs et peut souvent obtenir de <strong>meilleurs taux
        et conditions</strong>, surtout pour les dossiers atypiques d&apos;immigrants.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Courtier vs banque : comparaison</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4">Critère</th>
              <th className="text-left py-2 pr-4">Courtier hypothécaire</th>
              <th className="text-left py-2">Banque directe</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Nombre de prêteurs</td><td className="pr-4">30+ prêteurs</td><td>1 seul (la banque)</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Coût pour vous</td><td className="pr-4">Gratuit (payé par le prêteur)</td><td>Gratuit</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Négociation de taux</td><td className="pr-4">Oui, mise en concurrence</td><td>Limitée au barème interne</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Dossiers atypiques</td><td className="pr-4">Spécialisé</td><td>Critères rigides</td></tr>
            <tr><td className="py-2 pr-4">Produits additionnels</td><td className="pr-4">Hypothèque seulement</td><td>Carte, compte, assurances</td></tr>
          </tbody>
        </table>
      </div>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Pourquoi un courtier est souvent meilleur pour un immigrant</h2>
      <ul className="space-y-2">
        <li><strong>Connaissance des programmes :</strong> Un bon courtier connaît les programmes Nouveaux Arrivants de chaque prêteur et sait lequel correspond à votre profil</li>
        <li><strong>Crédit alternatif :</strong> Si votre banque refuse votre dossier, un courtier peut le soumettre à d&apos;autres prêteurs qui acceptent le crédit alternatif</li>
        <li><strong>Revenus atypiques :</strong> Revenus étrangers, travail autonome, contrats — un courtier sait quel prêteur accepte quoi</li>
        <li><strong>Gain de temps :</strong> Une seule demande, soumise à plusieurs prêteurs simultanément</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Quand aller directement à la banque</h2>
      <ul className="space-y-2">
        <li>Vous êtes RP depuis 2+ ans avec un emploi stable et un crédit canadien de 700+</li>
        <li>Vous avez une relation bancaire existante avec des produits groupés avantageux</li>
        <li>Vous voulez un <InternalLink slug="hypotheque-taux-fixe-variable-immigrant">taux promotionnel</InternalLink> exclusif à la banque</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Trouver un courtier spécialisé</h2>
      <p>
        Les courtiers sont réglementés par province. Vérifiez que votre courtier est licencié :
      </p>
      <ul className="space-y-2">
        <li><strong>Québec :</strong> <a href="https://www.oaciq.com/fr/pages/trouver-un-courtier" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">OACIQ — Trouver un courtier</a></li>
        <li><strong>Ontario :</strong> <a href="https://www.fsrao.ca/consumers/mortgage-brokering" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">ARSF (FSRA) — Registre des courtiers</a></li>
        <li><strong>Alberta :</strong> RECA — Real Estate Council of Alberta</li>
        <li><strong>BC :</strong> BCFSA — BC Financial Services Authority</li>
      </ul>
      <p>
        Demandez spécifiquement un courtier qui a de l&apos;expérience avec les dossiers d&apos;immigrants et les programmes
        Nouveaux Arrivants. Pour démarrer, utilisez notre <InternalLink slug="preapprobation-hypotheque-immigrant">guide de préapprobation</InternalLink>.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 30: HYPOTHÈQUE APRÈS FAILLITE / MAUVAIS CRÉDIT
  // ====================================================
  "hypotheque-apres-faillite-mauvais-credit-immigrant": (
    <>
      <p>
        Une faillite ou un mauvais crédit ne signifie pas la fin de votre rêve de propriété. Même en tant qu&apos;immigrant,
        vous pouvez obtenir une hypothèque <strong>2 ans après votre libération de faillite</strong>. Il existe aussi des
        prêteurs alternatifs accessibles immédiatement.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Faillite vs proposition de consommateur</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4">Critère</th>
              <th className="text-left py-2 pr-4">Faillite</th>
              <th className="text-left py-2">Proposition de consommateur</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Durée au dossier</td><td className="pr-4">6-7 ans après libération</td><td>3 ans après complétion</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Accès prêteur A</td><td className="pr-4">2 ans après libération</td><td>Dès la complétion</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Mise de fonds minimum</td><td className="pr-4">5-10% (prêteur A)</td><td>5-10% (prêteur A)</td></tr>
            <tr><td className="py-2 pr-4">Impact sur le crédit</td><td className="pr-4">Score réduit à ~300-400</td><td>Moins sévère</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Consultez le <a href="https://ised-isde.canada.ca/site/bureau-surintendant-faillites-canada/fr" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Bureau du surintendant des faillites</a> pour
        comprendre vos obligations légales.
      </p>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Les 3 niveaux de prêteurs</h2>
      <ul className="space-y-2">
        <li><strong>Prêteurs A (banques) :</strong> Score 680+, 2 ans après faillite, taux 4-6%. Les meilleures conditions mais les plus exigeants</li>
        <li><strong>Prêteurs B (alternatifs) :</strong> Score 500-680, acceptent les faillites récentes, taux 6-10%, mise de fonds 20-25%</li>
        <li><strong>Prêteurs privés :</strong> Aucun minimum de crédit, taux 10-15%, mise de fonds 25-35%. Solution temporaire de 1-2 ans</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Stratégie de reconstruction pour immigrants</h2>
      <p>
        La bonne nouvelle pour les immigrants : votre faillite dans votre pays d&apos;origine n&apos;apparaît <strong>pas</strong> sur
        votre dossier de crédit canadien. Seules les faillites canadiennes sont enregistrées par <a href="https://www.consumer.equifax.ca/personal/" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Equifax</a> et TransUnion.
      </p>
      <ul className="space-y-2">
        <li><strong>Mois 1-6 :</strong> Suivez notre plan pour <InternalLink slug="construire-credit-canadien-6-mois-immigrant">construire votre crédit en 6 mois</InternalLink></li>
        <li><strong>Mois 6-12 :</strong> Ajoutez un prêt de consolidation de crédit pour diversifier votre profil</li>
        <li><strong>Mois 12-24 :</strong> Demandez une préapprobation auprès d&apos;un prêteur B, puis refinancez vers un prêteur A quand votre score atteint 680+</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Conseils clés</h2>
      <ul className="space-y-2">
        <li>Travaillez avec un <InternalLink slug="courtier-hypothecaire-vs-banque-immigrant">courtier hypothécaire</InternalLink> — ils connaissent les prêteurs qui acceptent les dossiers difficiles</li>
        <li>Augmentez votre mise de fonds : plus elle est élevée, plus vous compensez un mauvais crédit</li>
        <li>Ne mentez jamais sur votre historique — les prêteurs vérifieront et le mensonge est un motif de refus immédiat</li>
        <li>Un prêteur privé est une solution <strong>temporaire</strong> (1-2 ans) — planifiez le refinancement dès le départ</li>
      </ul>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 31: ASSURANCE HABITATION IMMIGRANT
  // ====================================================
  "assurance-habitation-immigrant-guide": (
    <>
      <p>
        Votre prêteur hypothécaire exige une <strong>preuve d&apos;assurance habitation avant la fermeture</strong>. Sans elle,
        pas de clés. Pour les immigrants sans historique d&apos;assurance canadien, les primes sont souvent plus élevées —
        mais il existe des stratégies pour réduire les coûts.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Pourquoi c&apos;est obligatoire</h2>
      <ul className="space-y-2">
        <li><strong>Exigence du prêteur :</strong> La banque doit protéger son investissement — votre propriété est la garantie du prêt</li>
        <li><strong>Couverture minimale :</strong> L&apos;assurance doit couvrir au minimum le montant du prêt hypothécaire</li>
        <li><strong>Timing :</strong> La preuve doit être fournie au notaire/avocat <strong>avant le jour de la fermeture</strong></li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Types de couverture</h2>
      <ul className="space-y-2">
        <li><strong>Tous risques (comprehensive) :</strong> Couvre tous les sinistres sauf les exclusions nommées. Recommandé pour les propriétaires</li>
        <li><strong>Risques désignés (named perils) :</strong> Couvre seulement les risques listés (feu, vol, tempête). Moins cher mais moins complet</li>
        <li><strong>Condo :</strong> Couvre votre unité et vos biens — le syndicat couvre les parties communes. Voir notre guide <InternalLink slug="hypotheque-maison-vs-condo-immigrant">maison vs condo</InternalLink></li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Coûts typiques</h2>
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-2 pr-4">Type</th>
              <th className="text-left py-2 pr-4">Coût annuel</th>
              <th className="text-left py-2">Notes</th>
            </tr>
          </thead>
          <tbody className="text-gray-500">
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Maison unifamiliale</td><td className="pr-4">1 200 à 2 500$</td><td>Varie selon province et valeur</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2 pr-4">Condo</td><td className="pr-4">400 à 800$</td><td>Moins cher (parties communes couvertes)</td></tr>
            <tr><td className="py-2 pr-4">Duplex / triplex</td><td className="pr-4">1 500 à 3 000$</td><td>Plus élevé (risque locatif)</td></tr>
          </tbody>
        </table>
      </div>
      <p>
        Le <a href="https://www.ibc.ca/about-home-insurance" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Bureau d&apos;assurance du Canada (BAC)</a> offre des
        ressources pour comprendre vos options.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Réduire vos primes sans historique canadien</h2>
      <ul className="space-y-2">
        <li><strong>Regroupez :</strong> Achetez auto + habitation chez le même assureur pour un rabais de 10-20%</li>
        <li><strong>Augmentez la franchise :</strong> Passer de 500$ à 1 000$ de franchise peut réduire la prime de 15%</li>
        <li><strong>Système de sécurité :</strong> Alarme, détecteurs de fumée connectés, serrures intelligentes = rabais</li>
        <li><strong>Demandez des lettres :</strong> Certains assureurs acceptent un historique d&apos;assurance de votre pays d&apos;origine</li>
        <li><strong>Obtenez 3+ soumissions :</strong> Utilisez un courtier en assurance qui magasine pour vous auprès de <a href="https://www.infoassurance.ca/fr/trouver-un-representant-en-assurance" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">plusieurs assureurs</a></li>
      </ul>
      <p>
        Ajoutez ce coût à votre <InternalLink slug="frais-caches-achat-maison-immigrant-checklist">checklist des frais de fermeture</InternalLink> pour
        ne pas avoir de mauvaise surprise.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====================================================
  // ARTICLE 32: RÉFUGIÉS ET PERSONNES PROTÉGÉES
  // ====================================================
  "hypotheque-refugie-personne-protegee-canada": (
    <>
      <p>
        Les réfugiés reconnus et les personnes protégées au Canada bénéficient de <strong>droits hypothécaires équivalents
        aux résidents permanents</strong>. Vous êtes exemptés de la loi sur les acheteurs étrangers et éligibles au programme
        SCHL Nouveaux Arrivants avec seulement <strong>5% de mise de fonds</strong>.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Votre statut juridique</h2>
      <p>
        Selon la <a href="https://www.canada.ca/fr/immigration-refugies-citoyennete/services/refugies/statut-personne-protegee.html" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">Loi sur l&apos;immigration et la protection des réfugiés (LIPR)</a>,
        une personne protégée inclut :
      </p>
      <ul className="space-y-2">
        <li><strong>Réfugiés au sens de la Convention :</strong> Reconnus par la Commission de l&apos;immigration et du statut de réfugié (CISR)</li>
        <li><strong>Personnes à protéger :</strong> Reconnues comme ayant besoin de protection contre la torture, les traitements cruels ou un risque pour leur vie</li>
        <li><strong>Réfugiés parrainés par le gouvernement (RPG) :</strong> Réinstallés au Canada avec l&apos;aide du Programme d&apos;aide à la réinstallation (PAR)</li>
        <li><strong>Réfugiés parrainés par le secteur privé (RPSP) :</strong> Réinstallés grâce à des groupes de parrainage</li>
      </ul>

      <WizardCta />

      <h2 className="text-xl font-extrabold text-midnight">Vos avantages pour l&apos;accession à la propriété</h2>
      <ul className="space-y-2">
        <li><strong>Exemption de la loi sur les acheteurs étrangers :</strong> Vous pouvez acheter n&apos;importe où au Canada sans restriction</li>
        <li><strong>Programme SCHL Nouveaux Arrivants :</strong> Mise de fonds 5%, crédit alternatif accepté (même sans historique canadien)</li>
        <li><strong>Pas de taxe d&apos;acheteur étranger :</strong> Exemptés des taxes provinciales (Ontario NRST, BC Additional PTT)</li>
        <li><strong>Programmes bancaires :</strong> Admissibles aux programmes Nouveaux Arrivants de toutes les grandes banques</li>
      </ul>
      <p>
        Pour les détails du programme SCHL, consultez la page officielle sur le site de la <a href="https://www.cmhc-schl.gc.ca/consumers/home-buying/newcomers" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-dark underline">SCHL pour les nouveaux arrivants</a>.
      </p>

      <h2 className="text-xl font-extrabold text-midnight">Défis spécifiques et solutions</h2>
      <ul className="space-y-2">
        <li><strong>Pas de crédit canadien :</strong> Utilisez le <InternalLink slug="hypotheque-sans-historique-credit">crédit alternatif</InternalLink> (loyer, factures, épargne régulière)</li>
        <li><strong>Revenus limités au début :</strong> Le PAR offre un soutien financier la première année, mais les prêteurs préfèrent un emploi stable de 3+ mois</li>
        <li><strong>Documents manquants :</strong> Si vous ne pouvez pas obtenir de documents de votre pays d&apos;origine, expliquez la situation à votre courtier — les prêteurs ont des processus d&apos;exception</li>
        <li><strong>Mise de fonds :</strong> Combinez épargne, programmes gouvernementaux et potentiellement le <InternalLink slug="celiapp-rap-immigrant-premier-acheteur-2026">CELIAPP</InternalLink> (si admissible)</li>
      </ul>

      <h2 className="text-xl font-extrabold text-midnight">Étapes recommandées</h2>
      <ul className="space-y-2">
        <li><strong>Mois 1-3 :</strong> Ouvrez un compte bancaire, obtenez une carte sécurisée, commencez à bâtir votre crédit</li>
        <li><strong>Mois 3-6 :</strong> Stabilisez votre emploi, commencez à épargner pour la mise de fonds</li>
        <li><strong>Mois 6-12 :</strong> Ouvrez un CELIAPP si admissible, continuez l&apos;épargne et le crédit</li>
        <li><strong>Mois 12-24 :</strong> Demandez une préapprobation avec le programme SCHL Nouveaux Arrivants</li>
      </ul>

      <WizardCta variant="dark" />
    </>
  ),

  "assurance-hypothecaire-schl-primes-guide-2026": (
    <>
      <h2>Qu&rsquo;est-ce que l&rsquo;assurance hypothécaire SCHL ?</h2>
      <p>
        Au Canada, si votre mise de fonds est inférieure à 20 % du prix d&rsquo;achat, vous devez obligatoirement souscrire une <strong>assurance prêt hypothécaire</strong>. Cette assurance protège le prêteur (pas vous) en cas de défaut de paiement. Elle est fournie par la <strong>SCHL (Société canadienne d&rsquo;hypothèques et de logement)</strong>, aussi connue sous le nom anglais CMHC, ou par des assureurs privés comme Sagen et Canada Guaranty.
      </p>
      <p>
        Pour les immigrants, c&rsquo;est souvent une <strong>bonne nouvelle</strong> : grâce à cette assurance, vous pouvez acheter avec seulement 5 % de mise de fonds au lieu de 20 %. Le coût de la prime est ajouté à votre hypothèque et réparti sur vos paiements mensuels.
      </p>
      <p>
        Source officielle : <a href="https://www.cmhc-schl.gc.ca/consumers/home-buying/mortgage-loan-insurance-for-consumers/cmhc-mortgage-loan-insurance-cost" target="_blank" rel="noopener noreferrer">Coût de l&rsquo;assurance prêt hypothécaire SCHL</a>.
      </p>

      <WizardCta />

      <h2>Tableau des primes SCHL 2026 selon la mise de fonds</h2>
      <p>
        Le taux de prime dépend du <strong>ratio prêt-valeur (RPV)</strong>, c&rsquo;est-à-dire le pourcentage du prix financé par l&rsquo;hypothèque. Voici le tableau officiel simplifié :
      </p>
      <table>
        <thead>
          <tr>
            <th>Mise de fonds</th>
            <th>Ratio prêt-valeur</th>
            <th>Prime SCHL (% du prêt)</th>
            <th>Exemple sur 400 000 $</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>5 %</td><td>95 %</td><td>4,00 %</td><td>15 200 $</td></tr>
          <tr><td>10 %</td><td>90 %</td><td>3,10 %</td><td>11 160 $</td></tr>
          <tr><td>15 %</td><td>85 %</td><td>2,80 %</td><td>9 520 $</td></tr>
          <tr><td>20 % ou plus</td><td>80 % ou moins</td><td>0 % (aucune prime)</td><td>0 $</td></tr>
        </tbody>
      </table>
      <p>
        <strong>Attention</strong> : la prime est calculée sur le <em>montant du prêt</em>, pas sur le prix de la propriété. Elle est ensuite ajoutée au solde de votre hypothèque. Par exemple, pour une maison de 400 000 $ avec 5 % de mise de fonds (20 000 $), le prêt est de 380 000 $ et la prime SCHL de 4 % = 15 200 $. Votre hypothèque totale sera donc de 395 200 $.
      </p>

      <h2>Cas spéciaux pour les immigrants</h2>
      <p>
        Le <strong>programme SCHL Nouveaux Arrivants</strong> permet aux résidents permanents et certains travailleurs temporaires d&rsquo;acheter avec seulement 5 % de mise de fonds, même <strong>sans historique de crédit canadien</strong>. Conditions clés :
      </p>
      <ul>
        <li>Être arrivé au Canada depuis moins de 5 ans (résidents permanents) ou avoir un permis de travail valide</li>
        <li>Avoir un emploi stable au Canada</li>
        <li>La mise de fonds doit provenir de vos propres ressources (épargne, don familial documenté)</li>
        <li>Maximum 25 ans d&rsquo;amortissement (30 ans si premier achat depuis décembre 2024)</li>
      </ul>
      <p>
        Détails complets dans notre article <InternalLink slug="programme-schl-nouveaux-arrivants-guide-complet">Programme SCHL Nouveaux Arrivants</InternalLink>.
      </p>

      <h2>Comment réduire le coût de l&rsquo;assurance SCHL</h2>
      <p>
        La prime SCHL peut représenter des milliers de dollars, mais vous avez des leviers pour la réduire :
      </p>
      <ul>
        <li><strong>Augmentez votre mise de fonds</strong> : passer de 5 % à 10 % réduit la prime de 4,00 % à 3,10 % — une économie de plus de 3 000 $ sur un prêt de 360 000 $</li>
        <li><strong>Utilisez le CELIAPP + RAP</strong> : combinez le Compte d&rsquo;épargne libre d&rsquo;impôt pour l&rsquo;achat d&rsquo;une première propriété (40 000 $) et le Régime d&rsquo;accession à la propriété (60 000 $) pour constituer une mise de fonds plus importante. Voir notre <InternalLink slug="celiapp-rap-immigrant-premier-acheteur-2026">guide CELIAPP + RAP</InternalLink></li>
        <li><strong>Visez la barre des 20 %</strong> : si vous pouvez atteindre 20 % de mise de fonds, aucune prime n&rsquo;est requise</li>
        <li><strong>Comparez les assureurs</strong> : Sagen et Canada Guaranty offrent parfois des primes légèrement différentes de la SCHL</li>
      </ul>
      <p>
        Référence : <a href="https://www.cmhc-schl.gc.ca/consumers/home-buying/mortgage-loan-insurance-for-consumers" target="_blank" rel="noopener noreferrer">Page SCHL - Assurance prêt hypothécaire pour consommateurs</a>.
      </p>

      <h2>Questions fréquentes sur l&rsquo;assurance SCHL</h2>
      <p><strong>La prime est-elle remboursable ?</strong> Non. Une fois payée, la prime n&rsquo;est pas remboursable, même si vous vendez la propriété rapidement.</p>
      <p><strong>Peut-on transférer l&rsquo;assurance ?</strong> Oui, dans certains cas, l&rsquo;assurance SCHL est portable : si vous vendez et achetez une nouvelle propriété, vous pouvez transférer la prime restante.</p>
      <p><strong>L&rsquo;assurance SCHL est-elle la même chose que l&rsquo;assurance habitation ?</strong> Non. L&rsquo;assurance SCHL protège le <em>prêteur</em>. L&rsquo;assurance habitation protège <em>vous et votre propriété</em>. Les deux sont obligatoires. Voir notre <InternalLink slug="assurance-habitation-immigrant-guide">guide assurance habitation</InternalLink>.</p>
      <p><strong>Prix maximum assuré ?</strong> La SCHL assure les propriétés jusqu&rsquo;à 1,5 million de dollars (depuis décembre 2024).</p>

      <WizardCta variant="dark" />
    </>
  ),

  "stress-test-hypothecaire-canada-immigrant-guide": (
    <>
      <h2>Qu&rsquo;est-ce que le stress test hypothécaire ?</h2>
      <p>
        Depuis 2018, <strong>tous les acheteurs au Canada</strong> doivent passer un « test de résistance » (stress test) avant d&rsquo;obtenir une hypothèque. L&rsquo;objectif : vérifier que vous pourriez continuer à payer votre hypothèque même si les taux d&rsquo;intérêt augmentent significativement.
      </p>
      <p>
        Concrètement, votre banque ne vous qualifie <strong>pas au taux réel</strong> de votre hypothèque, mais à un taux plus élevé appelé <strong>taux de qualification</strong>. En 2026, ce taux correspond au plus élevé entre :
      </p>
      <ul>
        <li>Votre taux contractuel + 2 %</li>
        <li>Le taux plancher du BSIF (Bureau du surintendant des institutions financières)</li>
      </ul>
      <p>
        Par exemple, si vous obtenez un taux de 4,50 %, vous devez démontrer que vous pouvez assumer des paiements à 6,50 %. Cette règle est imposée par le <a href="https://www.osfi-bsif.gc.ca/en" target="_blank" rel="noopener noreferrer">BSIF (OSFI)</a> et s&rsquo;applique à toutes les banques réglementées au fédéral.
      </p>

      <WizardCta />

      <h2>Les deux ratios que la banque calcule : ABD et ATD</h2>
      <p>
        Le stress test utilise deux ratios pour évaluer votre capacité d&rsquo;emprunt. Ces ratios sont calculés au <strong>taux de qualification</strong>, pas au taux réel :
      </p>
      <table>
        <thead>
          <tr>
            <th>Ratio</th>
            <th>Formule</th>
            <th>Maximum</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>ABD</strong> (Amortissement Brut de la Dette)</td>
            <td>(Paiement hypothécaire + taxes + chauffage + 50 % frais condo) ÷ Revenu brut</td>
            <td>39 %</td>
          </tr>
          <tr>
            <td><strong>ATD</strong> (Amortissement Total de la Dette)</td>
            <td>(Coûts logement + toutes les dettes) ÷ Revenu brut</td>
            <td>44 %</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Pour les immigrants</strong>, le défi est souvent l&rsquo;ATD : si vous avez un prêt auto, des cartes de crédit ou un prêt étudiant, ces dettes réduisent votre capacité d&rsquo;emprunt hypothécaire. Rembourser ou consolider vos dettes avant de faire une demande est une stratégie efficace.
      </p>

      <h2>Impact concret : combien pouvez-vous emprunter ?</h2>
      <p>
        Voici un exemple simplifié pour un couple immigrant avec un revenu brut combiné de 120 000 $ :
      </p>
      <table>
        <thead>
          <tr>
            <th>Scénario</th>
            <th>Taux réel</th>
            <th>Taux qualification</th>
            <th>Capacité d&rsquo;emprunt approx.</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Sans autres dettes</td><td>4,50 %</td><td>6,50 %</td><td>~480 000 $</td></tr>
          <tr><td>Avec prêt auto 500 $/mois</td><td>4,50 %</td><td>6,50 %</td><td>~390 000 $</td></tr>
          <tr><td>Avec dettes totales 1 000 $/mois</td><td>4,50 %</td><td>6,50 %</td><td>~300 000 $</td></tr>
        </tbody>
      </table>
      <p>
        Le stress test réduit typiquement votre capacité d&rsquo;emprunt de <strong>15 à 20 %</strong> par rapport à une qualification au taux réel. Vous pouvez estimer votre situation avec l&rsquo;<a href="https://itools-ioutils.fcac-acfc.gc.ca/MQ-HQ/MQ-EAPH-fra.aspx" target="_blank" rel="noopener noreferrer">outil de qualification hypothécaire de l&rsquo;ACFC</a>.
      </p>

      <h2>5 stratégies pour maximiser votre qualification</h2>
      <ul>
        <li><strong>Remboursez vos dettes</strong> : chaque 100 $ de paiement mensuel éliminé libère environ 20 000 $ de capacité hypothécaire</li>
        <li><strong>Augmentez la mise de fonds</strong> : plus elle est élevée, moins le prêt est gros, plus facile de passer le test. Voir <InternalLink slug="celiapp-rap-immigrant-premier-acheteur-2026">CELIAPP + RAP pour accumuler plus</InternalLink></li>
        <li><strong>Ajoutez un co-emprunteur</strong> : le revenu combiné augmente votre capacité. Un conjoint qui travaille fait une différence majeure</li>
        <li><strong>Choisissez un amortissement de 30 ans</strong> : disponible pour les premiers acheteurs depuis décembre 2024, ça réduit les paiements mensuels et améliore vos ratios</li>
        <li><strong>Optimisez votre cote de crédit</strong> : une meilleure cote donne accès à de meilleurs taux, donc un stress test moins sévère. Voir <InternalLink slug="construire-credit-canadien-6-mois-immigrant">construire votre crédit en 6 mois</InternalLink></li>
      </ul>

      <h2>Le stress test s&rsquo;applique-t-il au renouvellement ?</h2>
      <p>
        <strong>Bonne nouvelle</strong> : si vous renouvelez chez le <em>même prêteur</em>, le stress test ne s&rsquo;applique pas. Cependant, si vous changez de prêteur pour obtenir un meilleur taux, vous devrez repasser le test. C&rsquo;est pourquoi certains emprunteurs se retrouvent « coincés » avec leur prêteur actuel au renouvellement.
      </p>
      <p>
        Pour les immigrants, la situation s&rsquo;améliore généralement au renouvellement : après 5 ans au Canada, vous avez un historique de crédit établi et possiblement un revenu plus élevé, ce qui facilite la qualification.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  "droits-mutation-immobiliere-province-rabais-premier-acheteur": (
    <>
      <h2>Qu&rsquo;est-ce que les droits de mutation immobilière ?</h2>
      <p>
        Les <strong>droits de mutation immobilière</strong> (aussi appelés « taxe de bienvenue » au Québec ou « land transfer tax » en anglais) sont une taxe provinciale ou municipale que vous payez lors de l&rsquo;achat d&rsquo;une propriété. C&rsquo;est un <strong>frais de clôture majeur</strong> que beaucoup d&rsquo;immigrants sous-estiment.
      </p>
      <p>
        Cette taxe varie considérablement selon la province et le prix d&rsquo;achat. Pour une propriété de 500 000 $, vous pourriez payer entre 0 $ (Alberta) et plus de 12 000 $ (Toronto). Bonne nouvelle : plusieurs provinces offrent des <strong>rabais pour les premiers acheteurs</strong>, y compris les immigrants admissibles.
      </p>

      <WizardCta />

      <h2>Tableau comparatif par province (propriété de 500 000 $)</h2>
      <table>
        <thead>
          <tr>
            <th>Province</th>
            <th>Droits de mutation</th>
            <th>Rabais 1er acheteur</th>
            <th>Coût net pour 1er acheteur</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Québec</strong></td><td>~5 500 $</td><td>Aucun rabais provincial</td><td>~5 500 $</td></tr>
          <tr><td><strong>Ontario</strong></td><td>~6 475 $</td><td>Jusqu&rsquo;à 4 000 $</td><td>~2 475 $</td></tr>
          <tr><td><strong>Toronto</strong> (ON + municipal)</td><td>~12 950 $</td><td>Jusqu&rsquo;à 8 475 $</td><td>~4 475 $</td></tr>
          <tr><td><strong>Colombie-Britannique</strong></td><td>~8 000 $</td><td>Jusqu&rsquo;à 8 000 $ (si &lt; 500 K)</td><td>0 $ (si &lt; 500 K)</td></tr>
          <tr><td><strong>Alberta</strong></td><td>~350 $ (frais seulement)</td><td>N/A</td><td>~350 $</td></tr>
          <tr><td><strong>Manitoba</strong></td><td>~5 250 $</td><td>Aucun rabais</td><td>~5 250 $</td></tr>
          <tr><td><strong>Î.-P.-É.</strong></td><td>~5 000 $</td><td>Jusqu&rsquo;à 2 000 $</td><td>~3 000 $</td></tr>
          <tr><td><strong>Saskatchewan</strong></td><td>~1 500 $ (frais seulement)</td><td>N/A</td><td>~1 500 $</td></tr>
        </tbody>
      </table>
      <p>
        Source : <a href="https://www.ratehub.ca/land-transfer-tax" target="_blank" rel="noopener noreferrer">Ratehub.ca — Land Transfer Tax Calculator</a>. Les montants sont approximatifs et varient selon les municipalités.
      </p>

      <h2>Rabais premier acheteur : êtes-vous éligible en tant qu&rsquo;immigrant ?</h2>
      <p>
        Les critères d&rsquo;éligibilité varient par province, mais en général :
      </p>
      <ul>
        <li><strong>Citoyen canadien ou résident permanent</strong> — les travailleurs temporaires ne sont généralement pas éligibles aux rabais (mais peuvent acheter)</li>
        <li><strong>18 ans ou plus</strong></li>
        <li><strong>N&rsquo;avoir jamais possédé de propriété</strong> — nulle part dans le monde (certaines provinces) ou au Canada seulement (d&rsquo;autres provinces)</li>
        <li><strong>Occuper la propriété comme résidence principale</strong></li>
        <li><strong>Votre conjoint ne doit pas avoir possédé de propriété</strong> pendant votre union</li>
      </ul>
      <p>
        <strong>Conseil pour immigrants</strong> : si vous avez possédé une propriété dans votre pays d&rsquo;origine, vérifiez les règles spécifiques de votre province. L&rsquo;Ontario et la C-B considèrent que vous devez n&rsquo;avoir jamais possédé de propriété <em>dans le monde entier</em>, tandis que d&rsquo;autres provinces ne regardent que le Canada.
      </p>

      <h2>Focus Québec : la « taxe de bienvenue »</h2>
      <p>
        Au Québec, les droits de mutation sont calculés selon des <strong>tranches progressives</strong> basées sur le plus élevé entre le prix d&rsquo;achat et l&rsquo;évaluation municipale :
      </p>
      <ul>
        <li>0,5 % sur les premiers 58 900 $</li>
        <li>1,0 % de 58 900 $ à 294 600 $</li>
        <li>1,5 % de 294 600 $ à 500 000 $</li>
        <li>3,0 % au-delà de 500 000 $ (à Montréal : barèmes spécifiques)</li>
      </ul>
      <p>
        Le Québec ne prévoit <strong>aucun rabais</strong> pour les premiers acheteurs sur les droits de mutation. Cependant, la Ville de Montréal offre occasionnellement des programmes de remboursement partiel. Consultez notre <InternalLink slug="hypotheque-francophone-quebec">guide hypothèque Québec</InternalLink> pour plus de détails.
      </p>

      <h2>Comment budgéter les droits de mutation dans votre plan d&rsquo;achat</h2>
      <p>
        Les droits de mutation sont payés <strong>dans les 30 jours</strong> suivant l&rsquo;achat (au Québec, votre notaire émet la facture). Contrairement à la mise de fonds, vous ne pouvez <strong>pas les financer dans votre hypothèque</strong>. Vous devez avoir cette somme disponible en liquide.
      </p>
      <p>
        Budget à prévoir pour les frais de clôture totaux (incluant les droits de mutation) : <strong>3 à 5 % du prix d&rsquo;achat</strong>. Détails complets dans notre <InternalLink slug="frais-caches-achat-maison-immigrant-checklist">checklist des frais cachés</InternalLink>.
      </p>
      <p>
        Calculateur officiel de l&rsquo;Ontario : <a href="https://www.ontario.ca/document/land-transfer-tax/land-transfer-tax-refunds-first-time-homebuyers" target="_blank" rel="noopener noreferrer">Ontario.ca — Land Transfer Tax Refunds</a>.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  "programme-schl-nouveaux-arrivants-guide-complet": (
    <>
      <h2>Le programme SCHL Nouveaux Arrivants en bref</h2>
      <p>
        Le <strong>programme SCHL Nouveaux Arrivants</strong> (CMHC Newcomers) est un programme d&rsquo;assurance prêt hypothécaire spécialement conçu pour permettre aux immigrants récents d&rsquo;acheter une propriété au Canada avec des conditions assouplies. C&rsquo;est le programme le plus important pour les immigrants qui veulent devenir propriétaires.
      </p>
      <p>
        Contrairement au programme standard qui exige un historique de crédit canadien établi, ce programme offre des <strong>flexibilités</strong> pour ceux qui n&rsquo;ont pas encore eu le temps de construire leur profil financier au Canada.
      </p>
      <p>
        Source officielle : <a href="https://www.cmhc-schl.gc.ca/professionals/industry-innovation-and-leadership/industry-expertise/resources-for-mortgage-professionals/housing-for-newcomers" target="_blank" rel="noopener noreferrer">SCHL — Logement pour les nouveaux arrivants</a>.
      </p>

      <WizardCta />

      <h2>Qui est éligible ? Conditions réelles détaillées</h2>
      <p>
        La fiche technique officielle de la SCHL (<a href="https://assets.cmhc-schl.gc.ca/sf/project/cmhc/pdfs/factsheets/cmhc-newcomers-fact-sheet.pdf" target="_blank" rel="noopener noreferrer">PDF - CMHC Newcomers Fact Sheet</a>) détaille les critères. Voici ce que ça signifie concrètement :
      </p>
      <table>
        <thead>
          <tr>
            <th>Critère</th>
            <th>Exigence</th>
            <th>Ce que ça veut dire</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Statut</strong></td><td>RP ou permis de travail valide</td><td>Les résidents permanents et les travailleurs temporaires avec permis valide sont admissibles</td></tr>
          <tr><td><strong>Ancienneté au Canada</strong></td><td>Moins de 5 ans (RP) / Permis valide (temporaire)</td><td>Après 5 ans de RP, vous passez au programme standard</td></tr>
          <tr><td><strong>Emploi</strong></td><td>Emploi à temps plein au Canada</td><td>Contrat stable, pas nécessairement permanent. Lettre d&rsquo;employeur requise</td></tr>
          <tr><td><strong>Mise de fonds</strong></td><td>Minimum 5 %</td><td>Doit provenir de vos propres fonds (épargne, don documenté, CELIAPP/RAP)</td></tr>
          <tr><td><strong>Crédit</strong></td><td>Pas de minimum obligatoire</td><td>Sources alternatives acceptées : historique de paiement de loyer, factures, relevé bancaire de 12 mois</td></tr>
          <tr><td><strong>Propriété</strong></td><td>Résidence principale uniquement</td><td>Pas d&rsquo;investissement locatif sous ce programme</td></tr>
          <tr><td><strong>Amortissement</strong></td><td>Max 25 ans (30 ans si 1er achat)</td><td>30 ans disponible depuis décembre 2024 pour les premiers acheteurs</td></tr>
        </tbody>
      </table>

      <h2>Ce que les banques ne vous disent pas</h2>
      <p>
        Le programme SCHL Nouveaux Arrivants est un <strong>programme d&rsquo;assurance</strong>, pas un programme bancaire. Cela signifie :
      </p>
      <ul>
        <li><strong>Toutes les banques n&rsquo;y participent pas activement</strong> — certaines succursales ne connaissent même pas le programme. Si on vous refuse, essayez une autre banque ou passez par un courtier</li>
        <li><strong>Les banques ajoutent leurs propres critères</strong> — la SCHL accepte un prêt, mais la banque peut demander plus (par exemple, un historique d&rsquo;emploi plus long)</li>
        <li><strong>Le « crédit alternatif » a des limites</strong> — 12 mois de relevés bancaires montrant des paiements réguliers (loyer, téléphone, électricité) sont acceptés, mais certaines banques préfèrent quand même une cote de crédit</li>
        <li><strong>Le délai d&rsquo;approbation est plus long</strong> — comptez 2-4 semaines de plus qu&rsquo;un dossier standard car la SCHL doit approuver séparément</li>
      </ul>
      <p>
        Notre recommandation : passez par un <InternalLink slug="courtier-hypothecaire-vs-banque-immigrant">courtier hypothécaire</InternalLink> qui connaît le programme et travaille avec plusieurs banques.
      </p>

      <h2>Documents requis pour le programme</h2>
      <p>
        Préparez ces documents <strong>avant</strong> votre demande pour accélérer le processus :
      </p>
      <ul>
        <li><strong>Preuve de statut</strong> : carte de RP, permis de travail ou confirmation de RP (IRCC)</li>
        <li><strong>Preuve d&rsquo;emploi</strong> : lettre d&rsquo;employeur, 2-3 derniers talons de paie, T4 si disponible</li>
        <li><strong>Preuve de mise de fonds</strong> : 90 jours de relevés bancaires montrant l&rsquo;épargne OU lettre de don + relevé du donateur</li>
        <li><strong>Crédit alternatif</strong> : 12 mois de preuves de paiement régulier (loyer, téléphone, assurance auto)</li>
        <li><strong>Pièce d&rsquo;identité</strong> : 2 pièces avec photo (passeport + permis de conduire ou carte santé)</li>
      </ul>
      <p>
        Liste complète dans notre <InternalLink slug="documents-hypotheque-immigrant">guide des documents requis</InternalLink>.
      </p>

      <h2>Programme SCHL vs programmes bancaires spécifiques</h2>
      <p>
        En plus du programme SCHL, certaines banques offrent leurs propres programmes pour nouveaux arrivants :
      </p>
      <table>
        <thead>
          <tr>
            <th>Programme</th>
            <th>Avantage clé</th>
            <th>Limite</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>SCHL Nouveaux Arrivants</strong></td><td>5 % mise de fonds, toutes les banques</td><td>Résidence principale seulement</td></tr>
          <tr><td><strong>Scotiabank StartRight</strong></td><td>Taux préférentiels, accompagnement</td><td>Clients Scotiabank seulement</td></tr>
          <tr><td><strong>RBC Arrivée</strong></td><td>Pré-approbation sans crédit canadien</td><td>Limité aux nouveaux RP</td></tr>
          <tr><td><strong>TD Nouveau au Canada</strong></td><td>Forfait bancaire + hypothèque</td><td>Conditions spécifiques TD</td></tr>
        </tbody>
      </table>
      <p>
        L&rsquo;idéal est souvent de <strong>combiner</strong> le programme SCHL avec un programme bancaire pour obtenir les meilleures conditions.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  "rapport-credit-equifax-transunion-immigrant-canada": (
    <>
      <h2>Les deux bureaux de crédit au Canada : Equifax et TransUnion</h2>
      <p>
        Au Canada, votre vie financière est suivie par <strong>deux bureaux de crédit</strong> : <a href="https://www.equifax.ca" target="_blank" rel="noopener noreferrer">Equifax Canada</a> et <a href="https://www.transunion.ca" target="_blank" rel="noopener noreferrer">TransUnion Canada</a>. Ces organismes collectent des informations sur vos emprunts, vos paiements et vos habitudes financières pour créer votre <strong>rapport de crédit</strong> et calculer votre <strong>cote de crédit</strong> (score).
      </p>
      <p>
        <strong>Problème pour les immigrants</strong> : le Canada ne reconnaît pas votre historique de crédit étranger. Même si vous aviez un excellent dossier dans votre pays d&rsquo;origine, vous repartez à zéro ici. Votre rapport sera vide et votre cote inexistante jusqu&rsquo;à ce que vous commenciez à utiliser du crédit canadien.
      </p>

      <WizardCta />

      <h2>Comment obtenir votre rapport de crédit gratuitement</h2>
      <p>
        Vous avez le droit légal d&rsquo;obtenir votre rapport de crédit <strong>gratuitement</strong> une fois par an (ou à tout moment par courrier). Voici comment :
      </p>
      <table>
        <thead>
          <tr>
            <th>Bureau</th>
            <th>En ligne (gratuit)</th>
            <th>Par courrier (gratuit)</th>
            <th>Cote incluse ?</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Equifax</strong></td>
            <td>equifax.ca/personnel — créer un compte</td>
            <td>Formulaire PDF à poster</td>
            <td>Non (rapport seulement). Cote : ~20 $/mois avec abonnement</td>
          </tr>
          <tr>
            <td><strong>TransUnion</strong></td>
            <td>transunion.ca — créer un compte</td>
            <td>Formulaire PDF à poster</td>
            <td>Non (rapport seulement). Cote : ~20 $/mois avec abonnement</td>
          </tr>
        </tbody>
      </table>
      <p>
        <strong>Astuce gratuite</strong> : plusieurs banques et apps offrent votre cote de crédit gratuitement : Borrowell (Equifax), Credit Karma (TransUnion), ou via votre app bancaire (RBC, TD, BMO).
      </p>
      <p>
        Source officielle : <a href="https://www.canada.ca/en/financial-consumer-agency/services/credit-reports-score/order-credit-report.html" target="_blank" rel="noopener noreferrer">Canada.ca — Obtenir votre rapport de crédit</a>.
      </p>

      <h2>Comment lire votre rapport de crédit</h2>
      <p>
        Votre rapport contient plusieurs sections importantes :
      </p>
      <ul>
        <li><strong>Informations personnelles</strong> : nom, adresse, NAS (partiellement masqué), employeur</li>
        <li><strong>Comptes de crédit</strong> : cartes de crédit, prêts, marges — avec l&rsquo;historique de paiement mois par mois</li>
        <li><strong>Demandes de crédit (enquêtes)</strong> : chaque fois qu&rsquo;un prêteur vérifie votre dossier. Trop d&rsquo;enquêtes en peu de temps peuvent baisser votre cote</li>
        <li><strong>Dossiers publics</strong> : faillites, jugements, recouvrements</li>
        <li><strong>Cote de crédit</strong> : un chiffre de 300 à 900 qui résume votre fiabilité</li>
      </ul>
      <p>
        Pour une hypothèque, les prêteurs regardent principalement votre <strong>cote de crédit</strong> et votre <strong>historique de paiement</strong>. Une cote de 680+ est considérée « bonne » pour une hypothèque. En dessous de 600, ça devient difficile avec les grandes banques.
      </p>

      <h2>Construire votre crédit de zéro en tant qu&rsquo;immigrant</h2>
      <p>
        Voici un plan d&rsquo;action concret pour bâtir votre crédit rapidement :
      </p>
      <ul>
        <li><strong>Mois 1</strong> : ouvrez un compte bancaire et demandez une carte de crédit sécurisée (dépôt de 500-1000 $). Home Trust, Capital One et plusieurs banques en offrent</li>
        <li><strong>Mois 1-6</strong> : utilisez la carte pour des petits achats (essence, épicerie) et payez le solde <strong>complet</strong> chaque mois, jamais en retard</li>
        <li><strong>Mois 3</strong> : ajoutez un petit prêt ou une marge de crédit si possible — avoir 2+ types de crédit améliore votre score</li>
        <li><strong>Mois 6</strong> : vérifiez votre cote — elle devrait être entre 650 et 700 si vous avez tout payé à temps</li>
        <li><strong>Mois 12</strong> : demandez une carte non sécurisée avec de meilleures récompenses. Gardez l&rsquo;ancienne ouverte (l&rsquo;ancienneté du crédit compte)</li>
      </ul>
      <p>
        Guide détaillé : <InternalLink slug="construire-credit-canadien-6-mois-immigrant">Construire son crédit canadien en 6 mois</InternalLink>.
      </p>

      <h2>Erreurs courantes qui détruisent votre crédit</h2>
      <ul>
        <li><strong>Payer en retard</strong> — même 1 jour de retard peut apparaître sur votre rapport et rester 6 ans</li>
        <li><strong>Utiliser plus de 30 % de votre limite</strong> — si votre carte a une limite de 1 000 $, ne dépassez pas 300 $ de solde</li>
        <li><strong>Ouvrir trop de comptes en peu de temps</strong> — chaque demande crée une « enquête » qui baisse temporairement votre cote</li>
        <li><strong>Fermer vos anciennes cartes</strong> — l&rsquo;ancienneté moyenne de vos comptes affecte votre cote</li>
        <li><strong>Ignorer les erreurs</strong> — vérifiez votre rapport au moins 1 fois par an et contestez toute erreur auprès d&rsquo;Equifax ou TransUnion</li>
      </ul>
      <p>
        Prêt pour l&rsquo;hypothèque malgré un crédit difficile ? Voir <InternalLink slug="hypotheque-apres-faillite-mauvais-credit-immigrant">hypothèque après mauvais crédit</InternalLink>.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  "immeuble-locatif-2-4-logements-schl-income-property-immigrant": (
    <>
      <h2>Le programme SCHL Income Property : c&rsquo;est quoi ?</h2>
      <p>
        Le <strong>programme SCHL Income Property</strong> (Immeuble à revenus) est un programme d&rsquo;assurance hypothécaire qui permet d&rsquo;acheter un immeuble de <strong>2 à 4 logements</strong> (duplex, triplex, quadruplex) avec une mise de fonds réduite. C&rsquo;est l&rsquo;un des meilleurs moyens pour un immigrant de devenir propriétaire tout en générant des revenus locatifs.
      </p>
      <p>
        L&rsquo;avantage clé : les <strong>revenus locatifs des autres logements</strong> sont pris en compte pour votre qualification hypothécaire, ce qui augmente considérablement votre capacité d&rsquo;emprunt.
      </p>
      <p>
        Source officielle : <a href="https://assets.cmhc-schl.gc.ca/sf/project/cmhc/pdfs/factsheets/cmhc-income-property-fact-sheet.pdf" target="_blank" rel="noopener noreferrer">PDF — SCHL Income Property Fact Sheet</a>.
      </p>

      <WizardCta />

      <h2>Mise de fonds requise selon le type d&rsquo;immeuble</h2>
      <table>
        <thead>
          <tr>
            <th>Type d&rsquo;immeuble</th>
            <th>Occupé par le propriétaire</th>
            <th>Non occupé (investissement pur)</th>
          </tr>
        </thead>
        <tbody>
          <tr><td><strong>Duplex (2 logements)</strong></td><td>5 % (assurance SCHL)</td><td>20 % (pas d&rsquo;assurance)</td></tr>
          <tr><td><strong>Triplex (3 logements)</strong></td><td>10 %</td><td>20 %</td></tr>
          <tr><td><strong>Quadruplex (4 logements)</strong></td><td>10 %</td><td>20 %</td></tr>
        </tbody>
      </table>
      <p>
        <strong>Stratégie populaire chez les immigrants</strong> : acheter un duplex, habiter un logement et louer l&rsquo;autre. Avec 5 % de mise de fonds, c&rsquo;est le chemin le plus accessible vers la propriété + revenus locatifs. Voir notre <InternalLink slug="acheter-duplex-triplex-immigrant-mise-de-fonds">guide duplex/triplex pour immigrants</InternalLink>.
      </p>

      <h2>Comment les revenus locatifs aident votre qualification</h2>
      <p>
        C&rsquo;est le vrai avantage du programme : la SCHL permet d&rsquo;utiliser jusqu&rsquo;à <strong>50 % des revenus locatifs bruts</strong> (ou les revenus locatifs nets) pour améliorer vos ratios de qualification (ABD et ATD). De plus, les taxes et le chauffage de la propriété locative peuvent être <strong>exclus</strong> de vos ratios.
      </p>
      <p>
        <strong>Exemple concret</strong> : vous achetez un triplex à 600 000 $ et habitez un logement. Les 2 autres logements génèrent 2 400 $/mois de loyers.
      </p>
      <ul>
        <li>Revenu locatif additionnel pour qualification : 2 400 $ × 50 % = <strong>1 200 $/mois</strong></li>
        <li>Sur un revenu brut personnel de 6 000 $/mois, ça équivaut à une hausse de 20 % de votre capacité</li>
        <li>Résultat : vous pourriez vous qualifier pour un prêt de ~450 000 $ au lieu de ~370 000 $ sans revenus locatifs</li>
      </ul>

      <h2>Critères d&rsquo;éligibilité pour immigrants</h2>
      <p>
        Le programme Income Property est accessible aux :
      </p>
      <ul>
        <li><strong>Citoyens canadiens et résidents permanents</strong> — admissibles de plein droit</li>
        <li><strong>Travailleurs autonomes</strong> — avec 2 ans d&rsquo;historique d&rsquo;entreprise (combinable avec <InternalLink slug="hypotheque-travailleur-autonome-freelance">le programme SCHL Self-Employed</InternalLink>)</li>
        <li><strong>Emprunteurs corporatifs</strong> — avec garantie personnelle ou co-emprunteur</li>
      </ul>
      <p>
        <strong>Attention</strong> : les travailleurs temporaires avec permis sont généralement limités à l&rsquo;achat de résidence principale (programme Newcomers). Pour l&rsquo;investissement locatif pur, la résidence permanente est préférable.
      </p>

      <h2>Pièges à éviter pour votre premier immeuble locatif</h2>
      <ul>
        <li><strong>Sous-estimer les dépenses</strong> — prévoyez 5-10 % des loyers pour l&rsquo;entretien, les vacances locatives et les imprévus</li>
        <li><strong>Ne pas vérifier les baux existants</strong> — si les locataires sont déjà en place, leurs baux sont transférés avec la propriété (au Québec, c&rsquo;est la loi)</li>
        <li><strong>Ignorer l&rsquo;inspection</strong> — un immeuble locatif ancien peut cacher des problèmes coûteux (plomberie, toiture, fondations)</li>
        <li><strong>Oublier la taxe sur les revenus locatifs</strong> — les loyers sont imposables mais vous pouvez déduire les intérêts hypothécaires, les taxes, l&rsquo;assurance et les réparations</li>
        <li><strong>Acheter trop loin</strong> — si vous gérez vous-même, choisissez un immeuble proche de chez vous</li>
      </ul>
      <p>
        Pour l&rsquo;assurance de votre immeuble, consultez notre <InternalLink slug="assurance-habitation-immigrant-guide">guide assurance habitation</InternalLink>.
      </p>
      <p>
        Plus d&rsquo;informations sur la page officielle : <a href="https://www.cmhc-schl.gc.ca/professionals/project-funding-and-mortgage-financing/mortgage-loan-insurance/mortgage-loan-insurance-homeownership-programs/income-property" target="_blank" rel="noopener noreferrer">SCHL — Income Property</a>.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====== ARTICLE #41 — PREMIER CHEZ-SOI ======
  "premier-chez-soi-schl-amortissement-30-ans-guide": (
    <>
      <h2>Qu&rsquo;est-ce que le programme Premier Chez-Soi ?</h2>
      <p>
        Le programme <strong>Premier Chez-Soi</strong> de la SCHL, lanc&eacute; en ao&ucirc;t 2024, permet aux premiers acheteurs et aux acheteurs de propri&eacute;t&eacute;s neuves d&rsquo;obtenir un amortissement de <strong>30 ans</strong> au lieu du maximum habituel de 25 ans avec assurance hypoth&eacute;caire. L&rsquo;objectif : r&eacute;duire les paiements mensuels pour faciliter l&rsquo;acc&egrave;s &agrave; la propri&eacute;t&eacute;.
      </p>
      <p>
        D&eacute;tails officiels sur la page <a href="https://www.cmhc-schl.gc.ca/professionnels/financement-de-projets-et-financement-hypothecaire/assurance-pret-hypothecaire/aph-po-et-petits-immeubles-locatifs/premier-chez-soi" target="_blank" rel="noopener noreferrer">SCHL — Premier Chez-Soi</a>.
      </p>

      <WizardCta />

      <h2>Crit&egrave;res d&rsquo;admissibilit&eacute;</h2>
      <p>Pour b&eacute;n&eacute;ficier du programme, vous devez remplir <strong>au moins une</strong> de ces conditions :</p>
      <ul>
        <li><strong>Premier acheteur</strong> : vous n&rsquo;avez jamais &eacute;t&eacute; propri&eacute;taire au Canada (ou pas depuis 4 ans)</li>
        <li><strong>Propri&eacute;t&eacute; neuve</strong> : vous achetez une construction neuve, m&ecirc;me si vous &ecirc;tes d&eacute;j&agrave; propri&eacute;taire</li>
      </ul>
      <p>Conditions suppl&eacute;mentaires :</p>
      <ul>
        <li>Prix d&rsquo;achat maximum : <strong>1 500 000 $</strong></li>
        <li>Mise de fonds minimum : <strong>5 %</strong> (avec assurance SCHL)</li>
        <li>Vous devez passer le <InternalLink slug="stress-test-hypothecaire-canada-immigrant-guide">stress test hypoth&eacute;caire</InternalLink></li>
      </ul>

      <h2>Comparaison 25 ans vs 30 ans : impact concret</h2>
      <p>Prenons un exemple concret avec une hypoth&egrave;que de <strong>400 000 $</strong> &agrave; un taux de 4,5 % :</p>
      <table>
        <thead>
          <tr><th></th><th>25 ans</th><th>30 ans</th><th>Diff&eacute;rence</th></tr>
        </thead>
        <tbody>
          <tr><td>Paiement mensuel</td><td>2 200 $</td><td>2 027 $</td><td>-173 $/mois</td></tr>
          <tr><td>Int&eacute;r&ecirc;ts totaux</td><td>260 000 $</td><td>329 720 $</td><td>+69 720 $</td></tr>
          <tr><td>Total rembours&eacute;</td><td>660 000 $</td><td>729 720 $</td><td>+69 720 $</td></tr>
        </tbody>
      </table>
      <p>
        Utilisez notre <a href="/outils/comparateur-25-vs-30-ans" className="text-gold hover:underline font-semibold">comparateur 25 vs 30 ans</a> pour calculer avec vos propres chiffres.
      </p>

      <h2>Avantages et inconv&eacute;nients pour les immigrants</h2>
      <p><strong>Avantages :</strong></p>
      <ul>
        <li>Paiements mensuels r&eacute;duits de 5 &agrave; 8 % — facilite la qualification au <InternalLink slug="stress-test-hypothecaire-canada-immigrant-guide">stress test</InternalLink></li>
        <li>Plus de marge budg&eacute;taire pour les frais d&rsquo;installation au Canada</li>
        <li>Meilleur ratio ABD/ATD, donc plus de chances d&rsquo;approbation</li>
      </ul>
      <p><strong>Inconv&eacute;nients :</strong></p>
      <ul>
        <li>Co&ucirc;t total en int&eacute;r&ecirc;ts plus &eacute;lev&eacute; (environ 25 % de plus)</li>
        <li>Vous construisez l&rsquo;&eacute;quit&eacute; plus lentement</li>
        <li>5 ans de paiements suppl&eacute;mentaires avant d&rsquo;&ecirc;tre libre d&rsquo;hypoth&egrave;que</li>
      </ul>

      <WizardCta variant="dark" />

      <h2>Strat&eacute;gie recommand&eacute;e</h2>
      <p>
        Pour beaucoup de nouveaux arrivants, le programme Premier Chez-Soi est un excellent levier. Notre recommandation : <strong>prenez l&rsquo;amortissement 30 ans pour la qualification</strong>, puis faites des paiements anticip&eacute;s d&egrave;s que votre situation financi&egrave;re s&rsquo;am&eacute;liore. La plupart des hypoth&egrave;ques permettent 15 &agrave; 20 % de remboursement anticip&eacute; par an sans p&eacute;nalit&eacute;.
      </p>
      <p>
        Consultez aussi le <InternalLink slug="celiapp-rap-immigrant-premier-acheteur-2026">CELIAPP et RAP pour premiers acheteurs</InternalLink> pour maximiser votre mise de fonds. Pour conna&icirc;tre votre prime SCHL, utilisez notre <a href="/outils/calculateur-prime-schl" className="text-gold hover:underline font-semibold">calculateur de prime SCHL</a>.
      </p>
    </>
  ),

  // ====== ARTICLE #42 — PUIS-JE ME PERMETTRE ======
  "puis-je-me-permettre-maison-canada-guide-realiste": (
    <>
      <h2>La r&eacute;alit&eacute; de l&rsquo;achat immobilier au Canada</h2>
      <p>
        Le march&eacute; immobilier canadien reste difficile d&rsquo;acc&egrave;s. Le ratio prix/revenu se situe entre <strong>6 et 9 fois</strong> le revenu annuel selon les villes, bien au-dessus du seuil consid&eacute;r&eacute; comme abordable (3,5 fois). Mais cela ne veut pas dire que c&rsquo;est impossible — surtout avec les bons outils et une planification rigoureuse.
      </p>
      <p>
        Avant tout, utilisez notre <a href="/outils/calculateur-montant-empruntable" className="text-gold hover:underline font-semibold">calculateur de montant empruntable</a> pour conna&icirc;tre votre capacit&eacute; r&eacute;elle.
      </p>

      <WizardCta />

      <h2>&Eacute;tape 1 : Calculez votre capacit&eacute; r&eacute;elle</h2>
      <p>Les banques utilisent deux ratios pour d&eacute;terminer combien vous pouvez emprunter :</p>
      <ul>
        <li><strong>ABD (39 % max)</strong> : frais de logement / revenu brut</li>
        <li><strong>ATD (44 % max)</strong> : tous vos paiements / revenu brut</li>
      </ul>
      <p>
        V&eacute;rifiez vos ratios avec notre <a href="/outils/calculateur-abd-atd" className="text-gold hover:underline font-semibold">calculateur ABD/ATD</a>. Ensuite, vous devez aussi passer le <InternalLink slug="stress-test-hypothecaire-canada-immigrant-guide">stress test hypoth&eacute;caire</InternalLink> (votre taux + 2 % ou 5,25 %, le plus &eacute;lev&eacute;).
      </p>

      <h2>&Eacute;tape 2 : Strat&eacute;gies pour am&eacute;liorer votre accessibilit&eacute;</h2>
      <p>Si votre budget ne vous permet pas d&rsquo;acheter ce que vous souhaitez, voici des strat&eacute;gies concr&egrave;tes :</p>
      <ul>
        <li><strong>Co-emprunt</strong> : empruntez avec votre <InternalLink slug="hypotheque-conjoint-chomeur-revenu">conjoint(e)</InternalLink> ou un membre de la famille pour combiner les revenus</li>
        <li><strong>Programme Premier Chez-Soi</strong> : <InternalLink slug="premier-chez-soi-schl-amortissement-30-ans-guide">amortissement 30 ans</InternalLink> pour r&eacute;duire les paiements</li>
        <li><strong>CELIAPP + RAP</strong> : maximisez votre mise de fonds avec le <InternalLink slug="celiapp-rap-immigrant-premier-acheteur-2026">CELIAPP et le RAP</InternalLink></li>
        <li><strong>R&eacute;duisez vos dettes</strong> : chaque 100 $ de dette mensuelle &eacute;limin&eacute;e augmente votre capacit&eacute; d&rsquo;emprunt d&rsquo;environ 15 000 &agrave; 20 000 $</li>
        <li><strong>Achetez un duplex/triplex</strong> : les revenus locatifs sont partiellement compt&eacute;s dans votre revenu. Consultez notre guide <InternalLink slug="acheter-duplex-triplex-immigrant-mise-de-fonds">achat duplex/triplex</InternalLink></li>
      </ul>

      <h2>&Eacute;tape 3 : Choisir la bonne r&eacute;gion</h2>
      <p>Le prix m&eacute;dian varie &eacute;norm&eacute;ment selon les r&eacute;gions :</p>
      <table>
        <thead>
          <tr><th>R&eacute;gion</th><th>Prix m&eacute;dian</th><th>Revenu requis (approx.)</th></tr>
        </thead>
        <tbody>
          <tr><td>Vancouver</td><td>1 100 000 $</td><td>180 000 $+</td></tr>
          <tr><td>Toronto</td><td>900 000 $</td><td>150 000 $+</td></tr>
          <tr><td>Montr&eacute;al</td><td>550 000 $</td><td>95 000 $+</td></tr>
          <tr><td>Calgary</td><td>500 000 $</td><td>85 000 $+</td></tr>
          <tr><td>Winnipeg</td><td>350 000 $</td><td>65 000 $+</td></tr>
        </tbody>
      </table>
      <p>
        Pour des guides par province, consultez nos articles sur l&rsquo;<InternalLink slug="hypotheque-ontario-immigrants-toronto">Ontario</InternalLink>, le <InternalLink slug="hypotheque-francophone-quebec">Qu&eacute;bec</InternalLink>, la <InternalLink slug="hypotheque-bc-immigrants-vancouver-victoria">Colombie-Britannique</InternalLink> ou l&rsquo;<InternalLink slug="hypotheque-alberta-immigrants-calgary-edmonton">Alberta</InternalLink>.
      </p>

      <h2>Quand attendre ou foncer ?</h2>
      <p>
        <strong>Foncez si :</strong> vous avez une mise de fonds de 5 %+, un emploi stable depuis 3+ mois, un score de cr&eacute;dit de 600+, et des ratios ABD/ATD conformes.
      </p>
      <p>
        <strong>Attendez si :</strong> vous venez d&rsquo;arriver (moins de 3 mois), vous avez des dettes &agrave; rembourser prioritairement, ou votre score de cr&eacute;dit est trop bas. Consultez notre guide <InternalLink slug="construire-credit-canadien-6-mois-immigrant">construire son cr&eacute;dit en 6 mois</InternalLink>.
      </p>
      <p>
        La <InternalLink slug="preapprobation-hypotheque-immigrant">pr&eacute;approbation</InternalLink> est gratuite et sans engagement — c&rsquo;est le meilleur premier pas.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====== ARTICLE #43 — RENOUVELLEMENT ======
  "renouvellement-hypothecaire-guide-eviter-choc-paiement": (
    <>
      <h2>Qu&rsquo;est-ce que le renouvellement hypoth&eacute;caire ?</h2>
      <p>
        Au Canada, le terme hypoth&eacute;caire dure g&eacute;n&eacute;ralement <strong>5 ans</strong>, m&ecirc;me si l&rsquo;amortissement s&rsquo;&eacute;tale sur 25 ou 30 ans. &Agrave; la fin de chaque terme, vous devez <strong>renouveler</strong> votre hypoth&egrave;que — c&rsquo;est-&agrave;-dire n&eacute;gocier un nouveau taux avec votre pr&ecirc;teur actuel ou un autre.
      </p>
      <p>
        Pour les immigrants qui ont obtenu leur hypoth&egrave;que quand les taux &eacute;taient bas, le renouvellement peut entra&icirc;ner un <strong>choc de paiement</strong> important.
      </p>

      <WizardCta />

      <h2>Le choc de paiement : combien de plus ?</h2>
      <p>Voici l&rsquo;impact d&rsquo;un renouvellement pour une hypoth&egrave;que de 400 000 $ (amortissement restant 20 ans) :</p>
      <table>
        <thead>
          <tr><th>Ancien taux</th><th>Nouveau taux</th><th>Augmentation mensuelle</th></tr>
        </thead>
        <tbody>
          <tr><td>2,50 %</td><td>4,50 %</td><td>+430 $/mois</td></tr>
          <tr><td>3,00 %</td><td>4,50 %</td><td>+310 $/mois</td></tr>
          <tr><td>3,50 %</td><td>4,50 %</td><td>+200 $/mois</td></tr>
          <tr><td>4,00 %</td><td>4,50 %</td><td>+100 $/mois</td></tr>
        </tbody>
      </table>
      <p>
        Simulez votre propre situation avec notre <a href="/outils/simulateur-stress-test" className="text-gold hover:underline font-semibold">simulateur de stress test</a>.
      </p>

      <h2>Comment pr&eacute;parer votre renouvellement</h2>
      <ul>
        <li><strong>Commencez 120 jours avant</strong> : la plupart des pr&ecirc;teurs offrent de r&eacute;server un taux 120 jours &agrave; l&rsquo;avance. Si les taux baissent, vous obtiendrez le taux le plus bas</li>
        <li><strong>Magasinez</strong> : ne signez pas l&rsquo;offre automatique de votre banque. Un <InternalLink slug="courtier-hypothecaire-vs-banque-immigrant">courtier hypoth&eacute;caire</InternalLink> peut vous obtenir un meilleur taux</li>
        <li><strong>Am&eacute;liorez votre dossier</strong> : payez des dettes, am&eacute;liorez votre score de cr&eacute;dit avant le renouvellement</li>
        <li><strong>Consid&eacute;rez le transfert</strong> : changer de pr&ecirc;teur co&ucirc;te parfois des frais, mais l&rsquo;&eacute;conomie sur 5 ans peut &ecirc;tre substantielle</li>
      </ul>

      <h2>Fixe ou variable au renouvellement ?</h2>
      <p>
        Le choix entre <InternalLink slug="hypotheque-taux-fixe-variable-immigrant">taux fixe et variable</InternalLink> d&eacute;pend de votre tol&eacute;rance au risque et des pr&eacute;visions de la Banque du Canada :
      </p>
      <ul>
        <li><strong>Fixe</strong> : s&eacute;curit&eacute; totale sur 5 ans, id&eacute;al si les taux sont bas et risquent de monter</li>
        <li><strong>Variable</strong> : g&eacute;n&eacute;ralement un taux de d&eacute;part plus bas, mais qui fluctue avec le taux directeur</li>
        <li><strong>Court terme (1-2 ans)</strong> : si vous anticipez une baisse des taux, vous renouvelez plus rapidement</li>
      </ul>
      <p>
        Pour plus d&rsquo;informations, consultez le site de l&rsquo;<a href="https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/hypotheques/renouveler-hypotheque.html" target="_blank" rel="noopener noreferrer">ACFC — Renouveler votre hypoth&egrave;que</a>.
      </p>

      <h2>Si vous ne pouvez plus payer</h2>
      <p>Si l&rsquo;augmentation de paiement est trop lourde, vous avez des options :</p>
      <ul>
        <li><strong>Prolonger l&rsquo;amortissement</strong> : &eacute;taler le solde sur une plus longue p&eacute;riode pour r&eacute;duire les paiements</li>
        <li><strong>Refinancer</strong> : acc&eacute;der &agrave; l&rsquo;&eacute;quit&eacute; pour consolider des dettes &agrave; int&eacute;r&ecirc;t &eacute;lev&eacute;</li>
        <li><strong>Vendre et r&eacute;duire</strong> : si votre propri&eacute;t&eacute; a pris de la valeur, downsizer peut &ecirc;tre judicieux</li>
        <li><strong>Parler &agrave; votre pr&ecirc;teur</strong> : les banques pr&eacute;f&egrave;rent n&eacute;gocier plut&ocirc;t que saisir</li>
      </ul>
      <p>
        N&rsquo;attendez pas le dernier moment. Consultez notre guide <InternalLink slug="hypotheque-refinancement-renouvellement-immigrant">refinancement et renouvellement</InternalLink> pour toutes les options.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

  // ====== ARTICLE #44 — TAUX HYPOTHÉCAIRES COMPRENDRE ET CHOISIR ======
  "taux-hypothecaires-comprendre-choisir-guide": (
    <>
      <h2>Comment fonctionnent les taux hypoth&eacute;caires au Canada ?</h2>
      <p>
        Les taux hypoth&eacute;caires canadiens sont influenc&eacute;s par deux facteurs principaux : le <strong>taux directeur de la Banque du Canada</strong> (qui affecte les taux variables) et le <strong>rendement des obligations du gouvernement</strong> (qui influence les taux fixes). Comprendre cette dynamique vous aide &agrave; faire de meilleurs choix.
      </p>
      <p>
        Pour en savoir plus sur les taux en g&eacute;n&eacute;ral, consultez la page officielle <a href="https://www.canada.ca/fr/agence-consommation-matiere-financiere/services/hypotheques/taux-hypothecaires.html" target="_blank" rel="noopener noreferrer">ACFC — Taux hypoth&eacute;caires</a>.
      </p>

      <WizardCta />

      <h2>Taux fixe vs variable : avantages et risques</h2>
      <table>
        <thead>
          <tr><th></th><th>Taux fixe</th><th>Taux variable</th></tr>
        </thead>
        <tbody>
          <tr><td>Paiement</td><td>Stable pendant tout le terme</td><td>Fluctue avec le taux directeur</td></tr>
          <tr><td>Taux de d&eacute;part</td><td>Plus &eacute;lev&eacute;</td><td>G&eacute;n&eacute;ralement plus bas</td></tr>
          <tr><td>P&eacute;nalit&eacute; rupture</td><td>&Eacute;lev&eacute;e (diff&eacute;rentiel taux)</td><td>Faible (3 mois int&eacute;r&ecirc;t)</td></tr>
          <tr><td>Id&eacute;al si</td><td>Taux bas, risque de hausse</td><td>Taux &eacute;lev&eacute;s, baisse attendue</td></tr>
          <tr><td>Risque</td><td>Payer trop si les taux baissent</td><td>Hausse impr&eacute;visible des paiements</td></tr>
        </tbody>
      </table>
      <p>
        Pour une analyse d&eacute;taill&eacute;e, lisez notre guide <InternalLink slug="hypotheque-taux-fixe-variable-immigrant">taux fixe vs variable pour immigrants</InternalLink>.
      </p>

      <h2>Le taux de qualification (stress test)</h2>
      <p>
        Quel que soit le taux que vous obtenez, les banques doivent vous qualifier au <strong>taux le plus &eacute;lev&eacute;</strong> entre votre taux + 2 % et 5,25 %. C&rsquo;est le <InternalLink slug="stress-test-hypothecaire-canada-immigrant-guide">stress test du BSIF</InternalLink>.
      </p>
      <p>
        Cela signifie qu&rsquo;un taux variable plus bas ne vous permet pas forc&eacute;ment d&rsquo;emprunter davantage — la qualification se fait au m&ecirc;me taux de r&eacute;sistance. Utilisez notre <a href="/outils/simulateur-stress-test" className="text-gold hover:underline font-semibold">simulateur de stress test</a> pour calculer.
      </p>

      <h2>Strat&eacute;gies pour obtenir le meilleur taux</h2>
      <ul>
        <li><strong>Passez par un courtier</strong> : un <InternalLink slug="courtier-hypothecaire-vs-banque-immigrant">courtier hypoth&eacute;caire</InternalLink> compare les offres de dizaines de pr&ecirc;teurs gratuitement</li>
        <li><strong>Am&eacute;liorez votre score de cr&eacute;dit</strong> : 680+ vous donne acc&egrave;s aux meilleurs taux. Consultez notre guide <InternalLink slug="construire-credit-canadien-6-mois-immigrant">construire son cr&eacute;dit</InternalLink></li>
        <li><strong>Augmentez votre mise de fonds</strong> : 20 %+ &eacute;limine la prime SCHL et peut donner un meilleur taux</li>
        <li><strong>Choisissez le bon terme</strong> : les termes courts (1-3 ans) offrent parfois des taux plus bas, mais vous renouvelez plus souvent</li>
        <li><strong>N&eacute;gociez</strong> : les banques ont une marge de n&eacute;gociation, surtout si vous avez une offre concurrente</li>
      </ul>

      <h2>Impact du taux sur votre paiement</h2>
      <p>Sur une hypoth&egrave;que de 400 000 $ (25 ans), chaque 0,25 % de diff&eacute;rence de taux change votre paiement d&rsquo;environ <strong>50 &agrave; 55 $ par mois</strong>, soit 15 000 &agrave; 16 500 $ sur la dur&eacute;e du terme (5 ans).</p>
      <p>
        Pour voir l&rsquo;impact pr&eacute;cis sur votre situation, utilisez notre <a href="/outils/calculateur-montant-empruntable" className="text-gold hover:underline font-semibold">calculateur de montant empruntable</a> ou notre <a href="/outils/comparateur-25-vs-30-ans" className="text-gold hover:underline font-semibold">comparateur 25 vs 30 ans</a>.
      </p>
      <p>
        Consultez aussi la page officielle de la <a href="https://www.banqueducanada.ca/taux/" target="_blank" rel="noopener noreferrer">Banque du Canada — Taux</a> pour les taux directeurs actuels.
      </p>

      <WizardCta variant="dark" />
    </>
  ),

};
