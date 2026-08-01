import { NextRequest, NextResponse } from "next/server";
import { verifyAdminPassword } from "@/lib/adminAuth";
import { sendBrevoEmail, isBrevoConfigured } from "@/lib/email";
import { wrapHtml } from "@/lib/email-render";
import { BREVO_SENDER, CONTACT_EMAIL } from "@/lib/mail";
import { SITE_URL } from "@/lib/constants";
import { isValidEmail } from "@/lib/validation";
import { blogPosts, getPostBySlug } from "@/data/blogPosts";

const BREVO_API_KEY = process.env.BREVO_API_KEY ?? "";
const NEWSLETTER_LIST_ID = Number(process.env.BREVO_NEWSLETTER_LIST_ID ?? "0");

function buildNewsletterHtml(slugs: string[]): string {
  const items = slugs
    .map((s) => getPostBySlug(s))
    .filter((p): p is NonNullable<ReturnType<typeof getPostBySlug>> => !!p);

  const articles = items
    .map(
      (p) => `<div style="margin:0 0 22px;">
        <a href="${SITE_URL}/blog/${p.slug}" style="font-family:Georgia,serif;font-size:18px;font-weight:700;color:#212243;text-decoration:none;">${p.title}</a>
        <p style="margin:6px 0 0;line-height:1.6;color:#555;">${p.subtitle}</p>
        <a href="${SITE_URL}/blog/${p.slug}" style="color:#489D90;font-size:14px;">Lire l'article &rarr;</a>
      </div>`
    )
    .join("");

  const body = `<h2 style="font-family:Georgia,serif;color:#212243;">Nos derniers guides hypothécaires</h2>
    ${articles || "<p>Aucun article sélectionné.</p>"}
    <hr style="border:none;border-top:1px solid #e5e0d8;margin:24px 0;">
    <p style="line-height:1.7;">Besoin d'une préapprobation ? <a href="${SITE_URL}/wizard" style="color:#489D90;">Faites votre bilan gratuit en 5 minutes &rarr;</a></p>`;

  return wrapHtml(body, SITE_URL);
}

export async function POST(request: NextRequest) {
  try {
    const { password, action, slugs, testEmail } = await request.json();

    if (!(await verifyAdminPassword(password))) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    // Liste des articles disponibles pour la sélection.
    if (action === "list") {
      return NextResponse.json({
        posts: blogPosts.map((p) => ({
          slug: p.slug,
          title: p.title,
          category: p.category,
        })),
      });
    }

    const selected: string[] = Array.isArray(slugs)
      ? slugs.filter((s: unknown): s is string => typeof s === "string")
      : [];
    if (selected.length === 0) {
      return NextResponse.json({ error: "Sélectionnez au moins un article" }, { status: 400 });
    }
    const html = buildNewsletterHtml(selected);
    const subject = "Guide Hypothèque — vos derniers guides";

    // Test : envoi transactionnel simple.
    if (action === "test") {
      if (typeof testEmail !== "string" || !isValidEmail(testEmail)) {
        return NextResponse.json({ error: "E-mail de test invalide" }, { status: 400 });
      }
      const mail = await sendBrevoEmail({
        to: [{ email: testEmail }],
        subject,
        htmlContent: html,
        replyTo: { email: CONTACT_EMAIL },
        tags: ["newsletter-test"],
      });
      if (mail.skipped) {
        return NextResponse.json({ error: "Envoi non configuré (BREVO_API_KEY manquante)" }, { status: 503 });
      }
      return NextResponse.json({ success: mail.ok });
    }

    // Envoi réel : campagne Brevo vers la liste newsletter.
    if (action === "send") {
      if (!isBrevoConfigured || !NEWSLETTER_LIST_ID) {
        return NextResponse.json(
          { error: "Campagne non configurée (BREVO_API_KEY / BREVO_NEWSLETTER_LIST_ID)" },
          { status: 503 }
        );
      }
      const createRes = await fetch("https://api.brevo.com/v3/emailCampaigns", {
        method: "POST",
        headers: { "api-key": BREVO_API_KEY, "Content-Type": "application/json", accept: "application/json" },
        body: JSON.stringify({
          name: `Newsletter ${new Date().toISOString().slice(0, 10)}`,
          subject,
          sender: BREVO_SENDER,
          htmlContent: html,
          recipients: { listIds: [NEWSLETTER_LIST_ID] },
        }),
      });
      if (!createRes.ok) {
        return NextResponse.json({ error: `brevo_campaign_${createRes.status}` }, { status: 502 });
      }
      const created = await createRes.json();
      const sendRes = await fetch(`https://api.brevo.com/v3/emailCampaigns/${created.id}/sendNow`, {
        method: "POST",
        headers: { "api-key": BREVO_API_KEY, accept: "application/json" },
      });
      if (!sendRes.ok) {
        return NextResponse.json({ error: `brevo_send_${sendRes.status}` }, { status: 502 });
      }
      return NextResponse.json({ success: true, campaignId: created.id });
    }

    return NextResponse.json({ error: "Action inconnue" }, { status: 400 });
  } catch (e) {
    console.error("admin/newsletter error:", e);
    return NextResponse.json({ error: "Erreur interne" }, { status: 500 });
  }
}
