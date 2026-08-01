// Identité d'expéditeur unifiée (domaine à authentifier DKIM chez Brevo / vérifié chez Resend).
export const MAIL_FROM_NAME = "Guide Hypothèque";
export const MAIL_FROM_EMAIL =
  process.env.MAIL_FROM_EMAIL ?? "contact@guide-hypotheque.ca";
export const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? MAIL_FROM_EMAIL;

// Brevo attend { name, email } ; Resend attend "Nom <email>".
export const BREVO_SENDER = { name: MAIL_FROM_NAME, email: MAIL_FROM_EMAIL };
export const RESEND_FROM = `${MAIL_FROM_NAME} <${MAIL_FROM_EMAIL}>`;
