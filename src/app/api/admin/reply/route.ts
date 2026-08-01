import { NextRequest, NextResponse } from "next/server";
import { verifyAdminPassword } from "@/lib/adminAuth";
import { supabase } from "@/lib/supabase";
import { sendBrevoEmail } from "@/lib/email";
import { renderEmailBody, wrapHtml } from "@/lib/email-render";
import { CONTACT_EMAIL } from "@/lib/mail";
import { SITE_URL } from "@/lib/constants";
import { isValidEmail, isNonEmpty } from "@/lib/validation";

export async function POST(request: NextRequest) {
  try {
    const { password, to, subject, body, messageId, leadId } = await request.json();

    if (!(await verifyAdminPassword(password))) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }
    if (typeof to !== "string" || !isValidEmail(to)) {
      return NextResponse.json({ error: "Destinataire invalide" }, { status: 400 });
    }
    if (!isNonEmpty(body)) {
      return NextResponse.json({ error: "Corps requis" }, { status: 400 });
    }

    const html = wrapHtml(await renderEmailBody(body), SITE_URL);
    const mail = await sendBrevoEmail({
      to: [{ email: to }],
      subject: typeof subject === "string" && subject ? subject : "Réponse — Guide Hypothèque",
      htmlContent: html,
      replyTo: { email: CONTACT_EMAIL },
      tags: ["admin-reply"],
    });

    // Enregistre le fil de conversation quel que soit le statut d'envoi.
    const { error } = await supabase.rpc("gh_admin_add_reply", {
      p_password: password,
      p_message_id: messageId ?? null,
      p_lead_id: leadId ?? null,
      p_to: to,
      p_subject: typeof subject === "string" ? subject : null,
      p_body: body,
    });
    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, emailSkipped: mail.skipped ?? false });
  } catch (e) {
    console.error("admin/reply error:", e);
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}
