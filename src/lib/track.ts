// Suivi de conversion — appelé à chaque capture de lead (best-effort, no-op si
// les scripts ne sont pas chargés / pas de consentement).

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    uetq?: { push: (...args: unknown[]) => void };
  }
}

export function trackLead(source: string): void {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", "generate_lead", { lead_source: source });
    window.fbq?.("track", "Lead", { content_name: source });
    window.uetq?.push("event", "generate_lead", { event_category: source });
  } catch {
    // silencieux — le tracking ne doit jamais casser l'expérience
  }
}
