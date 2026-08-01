import { NextRequest, NextResponse } from "next/server";
import { verifyAdminPassword } from "@/lib/adminAuth";
import { sendBrevoEmail } from "@/lib/email";
import { renderEmailBody, wrapHtml } from "@/lib/email-render";
import { CONTACT_EMAIL } from "@/lib/mail";
import { SITE_URL } from "@/lib/constants";
import { isValidEmail, isNonEmpty } from "@/lib/validation";

const MAX_ATTACHMENTS = 5;
const MAX_TOTAL_BASE64 = 4 * 1024 * 1024; // ~4 Mo

export async function POST(request: NextRequest) {
  try {
    const { password, to, subject, body, attachments } = await request.json();

    if (!(await verifyAdminPassword(password))) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
    if (typeof to !== "string" || !isValidEmail(to)) {
      return NextResponse.json({ error: "Destinataire invalide" }, { status: 400 });
    }
    if (!isNonEmpty(body)) {
      return NextResponse.json({ error: "Corps requis" }, { status: 400 });
    }

    let attachment: { name: string; content: string }[] | undefined;
    if (Array.isArray(attachments) && attachments.length > 0) {
      if (attachments.length > MAX_ATTACHMENTS) {
        return NextResponse.json({ error: "Trop de pièces jointes (max 5)" }, { status: 400 });
      }
      let total = 0;
      attachment = [];
      for (const a of attachments) {
        if (typeof a?.name !== "string" || typeof a?.content !== "string") {
          return NextResponse.json({ error: "Pièce jointe invalide" }, { status: 400 });
        }
        total += a.content.length;
        attachment.push({ name: a.name, content: a.content });
      }
      if (total > MAX_TOTAL_BASE64) {
        return NextResponse.json({ error: "Pièces jointes trop volumineuses (max ~4 Mo)" }, { status: 400 });
      }
    }

    const html = wrapHtml(await renderEmailBody(body), SITE_URL);
    const mail = await sendBrevoEmail({
      to: [{ email: to }],
      subject: typeof subject === "string" && subject ? subject : "Message — Guide Hypothèque",
      htmlContent: html,
      replyTo: { email: CONTACT_EMAIL },
      tags: ["admin-compose"],
      attachment,
    });

    if (mail.skipped) {
      return NextResponse.json({ error: "Envoi e-mail non configuré (BREVO_API_KEY manquante)" }, { status: 503 });
    }
    if (!mail.ok) {
      return NextResponse.json({ error: mail.error ?? "Échec de l'envoi" }, { status: 502 });
    }
    return NextResponse.json({ success: true });
  } catch (e) {
    console.error("admin/send error:", e);
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}
