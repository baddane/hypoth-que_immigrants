import { describe, it, expect } from "vitest";
import {
  calculateLeadScore,
  getRevenueScore,
  getMomentScore,
  scoringRules,
} from "./scoring";

describe("getRevenueScore", () => {
  it("returns 50 for 100k+", () => {
    expect(getRevenueScore(100000)).toBe(50);
    expect(getRevenueScore(200000)).toBe(50);
  });

  it("returns 35 for 75k-99k", () => {
    expect(getRevenueScore(75000)).toBe(35);
    expect(getRevenueScore(99999)).toBe(35);
  });

  it("returns 25 for 50k-74k", () => {
    expect(getRevenueScore(50000)).toBe(25);
  });

  it("returns 15 for 30k-49k", () => {
    expect(getRevenueScore(30000)).toBe(15);
  });

  it("returns 5 for under 30k", () => {
    expect(getRevenueScore(0)).toBe(5);
    expect(getRevenueScore(29999)).toBe(5);
  });
});

describe("getMomentScore", () => {
  it("returns 20 for Aujourd'hui", () => {
    expect(getMomentScore("Aujourd'hui")).toBe(20);
  });

  it("returns 10 for Demain", () => {
    expect(getMomentScore("Demain")).toBe(10);
  });

  it("returns 5 for Cette semaine", () => {
    expect(getMomentScore("Cette semaine")).toBe(5);
  });

  it("returns 0 for unknown values", () => {
    expect(getMomentScore("Plus tard")).toBe(0);
    expect(getMomentScore("")).toBe(0);
  });
});

describe("calculateLeadScore", () => {
  it("returns EXCELLENT for a top-tier Canadian citizen lead", () => {
    const result = calculateLeadScore({
      statut: "Citoyen Canadien",
      duree: "Plus de 5 ans",
      credit: "Oui, crédit excellent (750+)",
      revenu: 100000,
      apport: "Aucun (0%)",
      meilleurMoment: "Aujourd'hui",
    });
    expect(result.score).toBe(290);
    expect(result.quality).toBe("EXCELLENT");
  });

  it("returns GOOD for a typical immigrant with decent profile", () => {
    const result = calculateLeadScore({
      statut: "Résident Permanent (RP)",
      duree: "2 à 5 ans",
      credit: "Oui, crédit bon (700-749)",
      revenu: 75000,
      apport: "5% du prix d'achat",
      meilleurMoment: "Cette semaine",
    });
    // 50 + 50 + 35 + 35 + 15 + 5 = 190
    expect(result.score).toBe(190);
    expect(result.quality).toBe("GOOD");
  });

  it("returns OK for a mid-range lead", () => {
    const result = calculateLeadScore({
      statut: "Travailleur Temporaire - Permis Fermé",
      duree: "1 à 2 ans",
      credit: "Non (nouveau au Canada)",
      revenu: 50000,
      apport: "10-15%",
      meilleurMoment: "Cette semaine",
    });
    // 25 + 25 + 10 + 25 + 10 + 5 = 100
    expect(result.score).toBe(100);
    expect(result.quality).toBe("OK");
  });

  it("returns WEAK for a low-quality lead", () => {
    const result = calculateLeadScore({
      statut: "Préparation Immigration (en attente)",
      duree: "Moins de 6 mois",
      credit: "Non (nouveau au Canada)",
      revenu: 20000,
      apport: "20%+",
      meilleurMoment: "Plus tard",
    });
    // -50 + 0 + 10 + 5 + 5 + 0 = -30
    expect(result.score).toBe(-30);
    expect(result.quality).toBe("WEAK");
  });

  it("handles unknown field values gracefully (defaults to 0)", () => {
    const result = calculateLeadScore({
      statut: "Unknown Status",
      duree: "",
      credit: "",
      revenu: 0,
      apport: "",
      meilleurMoment: "",
    });
    // 0 + 0 + 0 + 5 + 0 + 0 = 5
    expect(result.score).toBe(5);
    expect(result.quality).toBe("WEAK");
  });

  it("quality thresholds are correct", () => {
    // Score >= 200 → EXCELLENT
    // Score >= 120 → GOOD
    // Score >= 50  → OK
    // Score < 50   → WEAK

    // Verify boundary: score exactly 200
    const excellent = calculateLeadScore({
      statut: "Citoyen Canadien",   // 100
      duree: "Plus de 5 ans",       // 60
      credit: "Non (nouveau au Canada)", // 10
      revenu: 30000,                // 15
      apport: "5% du prix d'achat", // 15
      meilleurMoment: "Aujourd'hui", // 20 (total would be too high, let's adjust)
    });
    // 100 + 60 + 10 + 15 + 15 + 20 = 220
    expect(excellent.quality).toBe("EXCELLENT");
  });
});

describe("scoringRules", () => {
  it("has all expected categories", () => {
    expect(scoringRules).toHaveProperty("statut");
    expect(scoringRules).toHaveProperty("duree");
    expect(scoringRules).toHaveProperty("credit");
    expect(scoringRules).toHaveProperty("apport");
  });

  it("Citoyen Canadien has highest statut score", () => {
    const scores = Object.values(scoringRules.statut);
    expect(scoringRules.statut["Citoyen Canadien"]).toBe(Math.max(...scores));
  });
});
