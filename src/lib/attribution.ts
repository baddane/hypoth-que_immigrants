import { sanitizeText } from "./validation";

export type Attribution = {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  referrer?: string;
  landing_page?: string;
};

// Client : lit les paramètres utm_*, le referrer et la landing page.
export function getAttribution(): Attribution {
  if (typeof window === "undefined") return {};
  const p = new URLSearchParams(window.location.search);
  const attr: Attribution = {
    utm_source: p.get("utm_source") ?? undefined,
    utm_medium: p.get("utm_medium") ?? undefined,
    utm_campaign: p.get("utm_campaign") ?? undefined,
    utm_content: p.get("utm_content") ?? undefined,
    referrer: document.referrer || undefined,
    landing_page: window.location.pathname || undefined,
  };
  // Retire les clés vides.
  (Object.keys(attr) as (keyof Attribution)[]).forEach((k) => {
    if (!attr[k]) delete attr[k];
  });
  return attr;
}

// Serveur : extrait et nettoie l'attribution depuis le corps de la requête.
export function pickAttribution(body: Record<string, unknown>): Attribution {
  const out: Attribution = {};
  const keys: (keyof Attribution)[] = [
    "utm_source", "utm_medium", "utm_campaign", "utm_content", "referrer", "landing_page",
  ];
  for (const k of keys) {
    const v = body[k];
    if (typeof v === "string" && v.trim()) out[k] = sanitizeText(v, 500);
  }
  return out;
}
