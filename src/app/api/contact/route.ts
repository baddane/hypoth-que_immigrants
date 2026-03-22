import { NextRequest, NextResponse } from "next/server";
import { isValidEmail } from "@/lib/validation";
import { isRateLimited } from "@/lib/rateLimit";

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

    // TODO: Send email via Resend / SendGrid / SES
    // TODO: Save to database

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
