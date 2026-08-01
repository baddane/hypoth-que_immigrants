// Liste de prospection partenaires (courtiers / prêteurs / partenaires d'affiliation).
// PLACEHOLDER : à remplacer par les vrais partenaires. L'outreach n'envoie qu'aux
// e-mails de cette allowlist statique (anti-relais ouvert).

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
  // Exemple de format — remplacez par vos partenaires réels :
  // {
  //   id: "courtier-exemple",
  //   partner: "Cabinet de courtage Exemple",
  //   email: "partenariats@exemple.com",
  //   location: "Montréal, QC",
  //   note: "Spécialiste nouveaux arrivants",
  //   tags: ["courtier", "quebec"],
  // },
];

export const OUTREACH_DEFAULT_SUBJECT =
  "Partenariat — leads hypothécaires qualifiés (immigrants au Canada)";

export const OUTREACH_DEFAULT_BODY = `Bonjour {{partner}},

Nous exploitons **guide-hypotheque.ca**, un guide de référence pour les immigrants qui cherchent une hypothèque au Canada. Nous générons des leads qualifiés (préapprobation, profil, province) et cherchons des partenaires courtiers pour la mise en relation.

Seriez-vous ouvert à un échange sur un partenariat (commission par lead ou par dossier financé) ?

Au plaisir,
L'équipe Guide Hypothèque`;
