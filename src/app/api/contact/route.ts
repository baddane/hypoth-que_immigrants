import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { isValidEmail } from "@/lib/validation";
import { isRateLimited } from "@/lib/rateLimit";

const resend = new Resend(process.env.RESEND_API_KEY);

const OWNER_EMAIL = "r.baddane@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "onboarding@resend.dev";

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

    console.log("=== NEW CONTACT ===", {
      sujet: data.sujet || "N/A",
      submittedAt: new Date().toISOString(),
    });

    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: FROM_EMAIL,
        to: OWNER_EMAIL,
        replyTo: data.email,
        subject: `📩 Contact — ${data.sujet || "Sans sujet"} (${data.nom})`,
        html: `
<!DOCTYPE html>
<html lang="fr">
<head><meta charset="UTF-8" /></head>
<body style="font-family:sans-serif;background:#f4f4f4;margin:0;padding:20px;">
  <div style="max-width:560px;margin:0 auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,.08);">
    <div style="background:#212243;padding:24px 32px;">
      <h1 style="color:#fff;margin:0;font-size:18px;">Message de contact — guide-hypotheque.ca</h1>
    </div>
    <div style="padding:32px;font-size:14px;">
      <p><strong>Nom :</strong> ${data.nom}</p>
      <p><strong>Email :</strong> <a href="mailto:${data.email}" style="color:#489D90;">${data.email}</a></p>
      ${data.sujet ? `<p><strong>Sujet :</strong> ${data.sujet}</p>` : ""}
      <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
      <p style="white-space:pre-wrap;color:#333;">${data.message}</p>
      <hr style="border:none;border-top:1px solid #eee;margin:20px 0;" />
      <p style="font-size:12px;color:#aaa;margin:0;">Reçu le ${new Date().toLocaleString("fr-CA", { timeZone: "America/Toronto" })} (heure de Toronto)</p>
    </div>
  </div>
</body>
</html>`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
