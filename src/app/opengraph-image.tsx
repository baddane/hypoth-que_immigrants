import { ImageResponse } from "next/og";

// Image de partage social générée (og:image + fallback twitter:image),
// appliquée à tout le site. Palette « papier premium / or ».
export const alt = "guide-hypotheque.ca — Hypothèque pour immigrants au Canada";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f5f0e8",
          padding: "72px",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "999px",
              background: "#14120d",
              color: "#c9a84c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "44px",
              fontWeight: 900,
            }}
          >
            G
          </div>
          <div style={{ display: "flex", fontSize: "34px", color: "#14120d", fontWeight: 800 }}>
            Guide&nbsp;<span style={{ color: "#c9a84c", fontStyle: "italic" }}>Hypothèque</span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: "26px",
              letterSpacing: "6px",
              color: "#a5842a",
              textTransform: "uppercase",
              marginBottom: "16px",
              fontFamily: "monospace",
            }}
          >
            Hypothèque Canada · Nouveaux arrivants
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", fontSize: "74px", lineHeight: 1.05, color: "#14120d", fontWeight: 900 }}>
            L&apos;Accès à la&nbsp;<span style={{ color: "#c9a84c", fontStyle: "italic" }}>Propriété</span>&nbsp;sans Frontières.
          </div>
          <div style={{ fontSize: "30px", color: "#4a453c", marginTop: "24px", display: "flex" }}>
            Guides, outils gratuits et courtiers partenaires.
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: "26px", color: "#6b6560" }}>guide-hypotheque.ca</div>
          <div
            style={{
              display: "flex",
              background: "#c9a84c",
              color: "#14120d",
              fontSize: "24px",
              fontWeight: 700,
              padding: "14px 28px",
              borderRadius: "8px",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            Préapprobation gratuite
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
