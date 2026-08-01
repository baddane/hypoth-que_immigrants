// Convertit le Markdown d'un composeur en HTML e-mail de marque, sûr, stylé inline
// (les clients mail ignorent le CSS externe). Utilisé côté serveur uniquement.
import { remark } from "remark";
import remarkGfm from "remark-gfm";
import remarkHtml from "remark-html";
import sanitizeHtml from "sanitize-html";

const GOLD = "#489D90";
const MIDNIGHT = "#212243";
const MAIL_BRAND = "Guide Hypothèque";

const TAG_STYLES: Record<string, string> = {
  h2: `font-family:Georgia,serif;font-size:20px;font-weight:700;color:${MIDNIGHT};margin:28px 0 12px;`,
  h3: `font-family:Georgia,serif;font-size:17px;font-weight:700;color:${MIDNIGHT};margin:22px 0 10px;`,
  p: "margin:0 0 16px;line-height:1.7;",
  ul: "margin:0 0 16px;padding-left:22px;line-height:1.7;",
  ol: "margin:0 0 16px;padding-left:22px;line-height:1.7;",
  li: "margin:4px 0;",
  blockquote: `margin:0 0 16px;padding:2px 0 2px 14px;border-left:3px solid ${GOLD};color:#555;`,
  table: "border-collapse:collapse;margin:0 0 16px;font-size:14px;",
  th: "border:1px solid #e5e0d8;background:#EDF7F5;padding:8px;text-align:left;",
  td: "border:1px solid #e5e0d8;padding:8px;",
  hr: "border:none;border-top:1px solid #e5e0d8;margin:24px 0;",
  a: `color:${GOLD};`,
};

export async function renderEmailBody(text: string): Promise<string> {
  // Conserve les retours à la ligne simples (Markdown les ignore sinon).
  const withBreaks = text.replace(/(?<!\n)\n(?!\n)/g, "  \n");
  const raw = String(
    await remark().use(remarkGfm).use(remarkHtml, { sanitize: false }).process(withBreaks)
  );

  const transformTags: sanitizeHtml.IOptions["transformTags"] = {
    h1: () => ({ tagName: "h2", attribs: { style: TAG_STYLES.h2 } }),
    h4: () => ({ tagName: "h3", attribs: { style: TAG_STYLES.h3 } }),
  };
  for (const [tag, style] of Object.entries(TAG_STYLES)) {
    transformTags[tag] = (t, a) => ({ tagName: t, attribs: { ...a, style } });
  }

  return sanitizeHtml(raw, {
    allowedTags: [
      "h2", "h3", "p", "br", "strong", "em", "del", "ul", "ol", "li", "a",
      "blockquote", "table", "thead", "tbody", "tr", "th", "td", "hr", "code", "pre",
    ],
    allowedAttributes: { a: ["href", "style"], "*": ["style"] },
    allowedSchemes: ["https", "http", "mailto"],
    transformTags,
  });
}

export function wrapHtml(bodyHtml: string, siteUrl: string): string {
  return `<!DOCTYPE html><html lang="fr"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="margin:0;padding:0;background:#F8F8F8;font-family:Georgia,serif;">
  <div style="max-width:600px;margin:0 auto;background:#ffffff;">
    <div style="background:${MIDNIGHT};padding:24px 40px;"><span style="color:#ffffff;font-size:16px;font-weight:700;">${MAIL_BRAND}</span></div>
    <div style="height:4px;background:${GOLD};"></div>
    <div style="padding:36px 40px;font-family:Arial,sans-serif;font-size:15px;color:#222;line-height:1.7;">${bodyHtml}</div>
    <div style="padding:18px 40px;border-top:1px solid #e5e0d8;"><a href="${siteUrl}" style="font-family:monospace;font-size:11px;color:#999;text-transform:uppercase;letter-spacing:0.1em;text-decoration:none;">guide-hypotheque.ca</a></div>
  </div></body></html>`;
}
