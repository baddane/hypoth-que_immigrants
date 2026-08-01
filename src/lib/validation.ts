const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10;
}

export function isNonEmpty(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0;
}

// Nettoie une chaîne libre : retire les caractères de contrôle (garde \t et \n),
// coupe et borne la longueur.
export function sanitizeText(text: unknown, max = 5000): string {
  if (typeof text !== "string") return "";
  return text
    .replace(/[\x00-\x08\x0B-\x1F\x7F]/g, "")
    .trim()
    .slice(0, max);
}

// Garde-fou taille de corps de requête (anti-abus).
export function isBodyTooLarge(contentLength: string | null, maxBytes: number): boolean {
  if (!contentLength) return false;
  const n = Number(contentLength);
  return Number.isFinite(n) && n > maxBytes;
}

export function validateLeadForm(data: {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
}): Record<string, string> {
  const errors: Record<string, string> = {};
  if (!data.prenom.trim()) errors.prenom = "Requis";
  if (!data.nom.trim()) errors.nom = "Requis";
  if (!data.email.trim()) errors.email = "Requis";
  else if (!isValidEmail(data.email)) errors.email = "Email invalide";
  if (!data.telephone.trim()) errors.telephone = "Requis";
  else if (!isValidPhone(data.telephone))
    errors.telephone = "Numéro invalide (min 10 chiffres)";
  return errors;
}
