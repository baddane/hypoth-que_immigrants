import { NextRequest, NextResponse } from "next/server";
import { verifyAdminPassword } from "@/lib/adminAuth";
import { sendBrevoEmail } from "@/lib/email";
import { renderEmailBody, wrapHtml } from "@/lib/email-render";
import { CONTACT_EMAIL } from "@/lib/mail";
import { SITE_URL } from "@/lib/constants";
import { isValidEmail, isNonEmpty } from "@/lib/validation";
import { outreachContacts } from "@/lib/outreach-contacts";

// Allowlist : n'envoie qu'aux e-mails connus de la liste de prospection.
const ALLOWED = new Map(
  outreachContacts
    .filter((c) => c.email)
    .map((c) => [c.email as string, c.partner])
);

export async function POST(request: NextRequest) {
  try {
    const { password, action, emails, subject, body, testEmail } = await request.json();

    if (!(await verifyAdminPassword(password))) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
    if (!isNonEmpty(body) || !isNonEmpty(subject)) {
      return NextResponse.json({ error: "Objet et corps requis" }, { status: 400 });
    }

    const renderFor = async (partnerName: string) => {
      const personalized = body.replace(/\{\{partner\}\}/g, partnerName);
      return wrapHtml(await renderEmailBody(personalized), SITE_URL);
    };

    // Test : envoi unique vers testEmail.
    if (action === "test") {
      if (typeof testEmail !== "string" || !isValidEmail(testEmail)) {
        return NextResponse.json({ error: "E-mail de test invalide" }, { status: 400 });
      }
      const mail = await sendBrevoEmail({
        to: [{ email: testEmail }],
        subject,
        htmlContent: await renderFor("Partenaire"),
        replyTo: { email: CONTACT_EMAIL },
        tags: ["outreach-test"],
      });
      if (mail.skipped) {
        return NextResponse.json({ error: "Envoi non configuré (BREVO_API_KEY manquante)" }, { status: 503 });
      }
      return NextResponse.json({ success: mail.ok, sent: mail.ok ? 1 : 0 });
    }

    // Envoi : uniquement vers les e-mails de l'allowlist.
    if (action === "send") {
      const targets: string[] = Array.isArray(emails)
        ? emails.filter((e: unknown): e is string => typeof e === "string" && ALLOWED.has(e))
        : [...ALLOWED.keys()];

      if (targets.length === 0) {
        return NextResponse.json({ error: "Aucun destinataire valide dans l'allowlist" }, { status: 400 });
      }

      let sent = 0;
      let skipped = false;
      for (const email of targets) {
        const partnerName = ALLOWED.get(email) ?? "Partenaire";
        const mail = await sendBrevoEmail({
          to: [{ email }],
          subject,
          htmlContent: await renderFor(partnerName),
          replyTo: { email: CONTACT_EMAIL },
          tags: ["outreach"],
        });
        if (mail.skipped) { skipped = true; break; }
        if (mail.ok) sent++;
      }
      if (skipped) {
        return NextResponse.json({ error: "Envoi non configuré (BREVO_API_KEY manquante)" }, { status: 503 });
      }
      return NextResponse.json({ success: true, sent, total: targets.length });
    }

    return NextResponse.json({ error: "Action inconnue" }, { status: 400 });
  } catch (e) {
    console.error("admin/outreach error:", e);
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}
