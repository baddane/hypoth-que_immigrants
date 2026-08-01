// Envois e-mail — Resend (notifications transactionnelles) + Brevo (marque, nurturing).
// GATED : sans clé API, chaque fonction no-op proprement (retourne {skipped:true}),
// pour ne jamais casser une capture de lead (principe best-effort du blueprint).

import { BREVO_SENDER, RESEND_FROM } from "./mail";

const RESEND_API_KEY = process.env.RESEND_API_KEY ?? "";
const BREVO_API_KEY = process.env.BREVO_API_KEY ?? "";

export const isResendConfigured = RESEND_API_KEY.length > 0;
export const isBrevoConfigured = BREVO_API_KEY.length > 0;

export type SendResult = { ok: boolean; skipped?: boolean; error?: string };

type BrevoAttachment = { name: string; content: string }; // content = base64

// ── Resend : notification interne ──
export async function sendResendEmail(opts: {
  to: string | string[];
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<SendResult> {
  if (!isResendConfigured) return { ok: false, skipped: true };
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: RESEND_FROM,
        to: Array.isArray(opts.to) ? opts.to : [opts.to],
        subject: opts.subject,
        html: opts.html,
        ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
      }),
    });
    if (!res.ok) return { ok: false, error: `resend_${res.status}` };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
}

// ── Brevo : e-mail transactionnel (réponses de marque, composeur, outreach) ──
export async function sendBrevoEmail(opts: {
  to: { email: string; name?: string }[];
  subject: string;
  htmlContent: string;
  replyTo?: { email: string; name?: string };
  tags?: string[];
  attachment?: BrevoAttachment[];
  params?: Record<string, string>;
}): Promise<SendResult> {
  if (!isBrevoConfigured) return { ok: false, skipped: true };
  try {
    const res = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        sender: BREVO_SENDER,
        to: opts.to,
        subject: opts.subject,
        htmlContent: opts.htmlContent,
        ...(opts.replyTo ? { replyTo: opts.replyTo } : {}),
        ...(opts.tags ? { tags: opts.tags } : {}),
        ...(opts.attachment ? { attachment: opts.attachment } : {}),
        ...(opts.params ? { params: opts.params } : {}),
      }),
    });
    if (!res.ok) return { ok: false, error: `brevo_${res.status}` };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
}

// ── Brevo : upsert contact (nurturing) ──
export async function upsertBrevoContact(opts: {
  email: string;
  attributes?: Record<string, string | number>;
  listIds?: number[];
}): Promise<SendResult> {
  if (!isBrevoConfigured) return { ok: false, skipped: true };
  try {
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email: opts.email,
        ...(opts.attributes ? { attributes: opts.attributes } : {}),
        ...(opts.listIds && opts.listIds.length ? { listIds: opts.listIds } : {}),
        updateEnabled: true,
      }),
    });
    // 201 (créé) ou 204 (mis à jour) => ok
    if (!res.ok && res.status !== 204) return { ok: false, error: `brevo_${res.status}` };
    return { ok: true };
  } catch (e) {
    return { ok: false, error: (e as Error).message };
  }
}
