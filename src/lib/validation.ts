const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email);
}

export function isValidPhone(phone: string): boolean {
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10;
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
