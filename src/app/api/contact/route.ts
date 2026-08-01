import { NextRequest, NextResponse } from "next/server";
import { isValidEmail } from "@/lib/validation";
import { isRateLimited } from "@/lib/rateLimit";
import { supabase, isSupabaseConfigured } from "@/lib/supabase";
import { sendResendEmail, upsertBrevoContact } from "@/lib/email";
import { CONTACT_EMAIL } from "@/lib/mail";
import { pickAttribution } from "@/lib/attribution";

const LEADS_LIST_ID = Number(process.env.BREVO_LEADS_LIST_ID ?? "0");

export async function POST(request: NextRequest) {
  try {
    const ip = request.headers.get("x-forwarded-for") || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const data = await request.json();

    if (!data.nom || typeof data.nom !== "string" || !data.nom.trim()) {
      return NextResponse.json({ error: "Nom requis" }, { status: 400 });
    }
    if (!data.email || !isValidEmail(data.email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }
    if (!data.message || typeof data.message !== "string" || !data.message.trim()) {
      return NextResponse.json({ error: "Message requis" }, { status: 400 });
    }

    // Structured log without PII details
    console.log("=== NEW CONTACT ===", {
      sujet: data.sujet || "N/A",
      submittedAt: new Date().toISOString(),
    });

    // Double-write best-effort : Supabase + (TODO) notification e-mail.
    // La requête réussit si au moins un canal aboutit.
    let persisted = false;

    const name = data.nom.trim();
    const email = data.email.trim().toLowerCase();
    const subject = data.sujet?.trim() || null;
    const message = data.message.trim();
    const attribution = pickAttribution(data);

    if (isSupabaseConfigured) {
      const { error } = await supabase.from("gh_contact_messages").insert({
        name,
        email,
        subject,
        message,
      });
      if (error) {
        console.error("Supabase contact insert error:", error.message);
      } else {
        persisted = true;
      }
      // L'auteur d'un message devient aussi un lead (annuaire des adresses captées).
      await supabase.from("gh_leads").insert({
        name,
        email,
        message,
        source: "contact",
        ...attribution,
      });
    }

    // Notification interne (Resend) + nurturing (Brevo) — best-effort, gated.
    const notif = await sendResendEmail({
      to: CONTACT_EMAIL,
      subject: `Nouveau message de contact — ${name}`,
      html: `<p><strong>${name}</strong> — ${email}</p><p>Sujet : ${subject || "(aucun)"}</p><p>${message.replace(/\n/g, "<br>")}</p>`,
      replyTo: email,
    });
    const emailSent = notif.ok;
    await upsertBrevoContact({
      email,
      attributes: { NOM: name, SOURCE: "contact" },
      listIds: LEADS_LIST_ID ? [LEADS_LIST_ID] : undefined,
    });

    // On ne renvoie une erreur que si aucun canal n'aboutit.
    if (isSupabaseConfigured && !persisted && !emailSent) {
      return NextResponse.json(
        { error: "Impossible d'enregistrer votre message. Réessayez." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
