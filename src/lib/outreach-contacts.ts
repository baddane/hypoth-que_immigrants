// Liste de prospection partenaires (courtiers / réseaux / prêteurs / fintechs)
// pertinents pour un site de génération de leads hypothécaires immigrants au Canada.
//
// RÈGLE : on ne met un `email` QUE s'il est réellement vérifié (page officielle).
// Sinon `email: null` + `formUrl` (page « partenariat/affiliation ») à contacter
// manuellement ou à compléter une fois l'adresse trouvée.
// L'outreach de masse n'envoie qu'aux entrées ayant un `email` non nul (allowlist).

export type OutreachContact = {
  id: string;
  partner: string;
  email: string | null;
  formUrl?: string;
  location: string;
  note: string;
  tags: string[];
};

export const outreachContacts: OutreachContact[] = [
  // ── E-mails partenariat VÉRIFIÉS ──
  {
    id: "nesto",
    partner: "nesto",
    email: "partnerships@nesto.ca",
    formUrl: "https://www.nesto.ca/affiliate-program/",
    location: "Montréal, QC · national",
    note: "Fintech hypothécaire, programme d'affiliation (dashboard, EFT Net 30). Programme New to Canada 5%.",
    tags: ["fintech", "affiliation", "newcomer", "quebec"],
  },
  {
    id: "homewise",
    partner: "Homewise",
    email: "hello@thinkhomewise.com",
    formUrl: "https://homewisepartners.com/",
    location: "Toronto, ON · national",
    note: "Plateforme hypothécaire, programme d'affiliation (via Fintel Connect).",
    tags: ["fintech", "affiliation"],
  },

  // ── Spécialistes nouveaux arrivants / francophones (email à confirmer) ──
  {
    id: "multi-prets",
    partner: "Multi-Prêts Hypothèques",
    email: null,
    formUrl: "https://hypotheque-facile.ca/en/services/newcomers/",
    location: "Québec · national",
    note: "Grand réseau de courtiers francophone, programme Nouveaux Arrivants. Très pertinent (site FR).",
    tags: ["reseau", "courtier", "newcomer", "quebec"],
  },
  {
    id: "true-north",
    partner: "True North Mortgage",
    email: null,
    formUrl: "https://www.truenorthmortgage.ca/mortgage-solutions/newcomers-to-canada",
    location: "National",
    note: "Courtier national, programmes newcomer (RP, permis de travail, réfugiés).",
    tags: ["courtier", "newcomer"],
  },
  {
    id: "mortgage-intelligence",
    partner: "Mortgage Intelligence",
    email: null,
    formUrl: "https://www.mortgageintelligence.ca/en/mortgage-options/newcomers-to-canada/",
    location: "National",
    note: "Réseau de courtiers avec offre dédiée nouveaux arrivants.",
    tags: ["reseau", "newcomer"],
  },
  {
    id: "skip-the-bank",
    partner: "Skip the Bank",
    email: null,
    formUrl: "https://skipthebank.ca/mortgages/new-to-canada/",
    location: "National",
    note: "Courtier, programme New to Canada.",
    tags: ["courtier", "newcomer"],
  },
  {
    id: "fortune-funding",
    partner: "Fortune Funding",
    email: null,
    formUrl: "https://www.fortunefunding.ca/newcomers-to-canada-mortgages-broker-agent-in-toronto-ontario-canada/",
    location: "Toronto, ON",
    note: "Agent hypothécaire spécialisé nouveaux arrivants (GTA).",
    tags: ["courtier", "newcomer"],
  },
  {
    id: "homestead-financial",
    partner: "Homestead Financial",
    email: null,
    formUrl: "https://homesteadfinancial.ca/new-to-canada-mortgage-program",
    location: "National",
    note: "Courtier, programme New to Canada.",
    tags: ["courtier", "newcomer"],
  },

  // ── Fintechs / comparateurs (affiliation) ──
  {
    id: "ratehub-canwise",
    partner: "Ratehub / CanWise",
    email: null,
    formUrl: "https://www.ratehub.ca/",
    location: "Toronto, ON · national",
    note: "Comparateur + courtier interne (CanWise). Trafic hypothécaire massif.",
    tags: ["fintech", "affiliation"],
  },
  {
    id: "pine",
    partner: "Pine",
    email: null,
    formUrl: "https://www.pine.ca/",
    location: "National",
    note: "Prêteur/fintech hypothécaire 100% en ligne (partenariat Wealthsimple).",
    tags: ["fintech"],
  },
  {
    id: "perch",
    partner: "Perch",
    email: null,
    formUrl: "https://myperch.io/realtor/",
    location: "National",
    note: "Plateforme hypothécaire numérique, programmes partenaires (agents/pros).",
    tags: ["fintech", "affiliation"],
  },
  {
    id: "rates-ca",
    partner: "Rates.ca",
    email: null,
    formUrl: "https://rates.ca/sign-up",
    location: "National",
    note: "Comparateur — inscription affilié / courtier / prêteur.",
    tags: ["fintech", "affiliation"],
  },
  {
    id: "butler-mortgage",
    partner: "Butler Mortgage",
    email: null,
    formUrl: "https://www.butlermortgage.ca/referral/",
    location: "Toronto, ON",
    note: "Courtier discount, programme de référencement (10% commission nette).",
    tags: ["courtier", "affiliation"],
  },

  // ── Grands réseaux de courtiers ──
  {
    id: "dlc",
    partner: "Dominion Lending Centres (DLC)",
    email: null,
    formUrl: "https://dominionlending.ca/",
    location: "National",
    note: "Un des plus grands réseaux de courtiers au Canada.",
    tags: ["reseau"],
  },
  {
    id: "mortgage-alliance",
    partner: "Mortgage Alliance",
    email: null,
    formUrl: "https://mortgagealliance.com/",
    location: "National",
    note: "Réseau national de courtiers.",
    tags: ["reseau"],
  },
  {
    id: "tmg",
    partner: "TMG The Mortgage Group",
    email: null,
    formUrl: "https://www.mortgagegroup.com/",
    location: "National",
    note: "Réseau national (partenariat prime avec Banque Nationale).",
    tags: ["reseau"],
  },
  {
    id: "mortgage-centre-canada",
    partner: "Mortgage Centre Canada",
    email: null,
    formUrl: "https://joinmcc.ca/",
    location: "National",
    note: "Plus ancien réseau de courtiers au pays.",
    tags: ["reseau"],
  },
  {
    id: "pineapple",
    partner: "Pineapple Financial",
    email: null,
    formUrl: "https://gopineapple.com/brokerage-partners",
    location: "National",
    note: "Réseau/fintech de courtage, programme partenaires & franchise.",
    tags: ["reseau", "fintech"],
  },

  // ── Prêteurs / banques (canaux courtier) ──
  {
    id: "wealthone",
    partner: "Wealth One Bank of Canada",
    email: null,
    formUrl: "https://www.wealthonebankofcanada.com/Become+a+partner/Mortgage+Brokers",
    location: "National",
    note: "Banque avec programme newcomer, canal courtier partenaire.",
    tags: ["banque", "newcomer", "preteur"],
  },
  {
    id: "optimum-mortgage",
    partner: "Optimum Mortgage",
    email: null,
    formUrl: "https://www.optimummortgage.ca/en/brokers/broker-partner-program",
    location: "National",
    note: "Prêteur alternatif, programme partenaire courtier.",
    tags: ["preteur"],
  },
  {
    id: "cmls",
    partner: "CMLS Financial",
    email: null,
    formUrl: "https://www.cmls.ca/brokers/partnership-program",
    location: "National",
    note: "Prêteur hypothécaire, programme de partenariat courtier 2026.",
    tags: ["preteur"],
  },
];

export const OUTREACH_DEFAULT_SUBJECT =
  "Partenariat — leads hypothécaires qualifiés (immigrants au Canada)";

export const OUTREACH_DEFAULT_BODY = `Bonjour {{partner}},

Nous exploitons **guide-hypotheque.ca**, un guide de référence pour les immigrants qui cherchent une hypothèque au Canada. Nous générons des leads qualifiés (préapprobation, profil, statut d'immigration, province) et cherchons des partenaires pour la mise en relation.

Seriez-vous ouverts à un échange sur un partenariat (commission par lead ou par dossier financé) ?

Au plaisir d'échanger,
L'équipe Guide Hypothèque
guide-hypotheque.ca

---
Vous recevez ce message car votre organisation propose un programme de partenariat/affiliation hypothécaire. Pour ne plus être contacté, répondez simplement « STOP ».`;
