import { describe, it, expect } from "vitest";
import { isValidEmail, isValidPhone, validateLeadForm } from "./validation";

describe("isValidEmail", () => {
  it("accepts valid emails", () => {
    expect(isValidEmail("test@example.com")).toBe(true);
    expect(isValidEmail("user.name@domain.ca")).toBe(true);
    expect(isValidEmail("a@b.co")).toBe(true);
  });

  it("rejects invalid emails", () => {
    expect(isValidEmail("")).toBe(false);
    expect(isValidEmail("noat")).toBe(false);
    expect(isValidEmail("@domain.com")).toBe(false);
    expect(isValidEmail("user@")).toBe(false);
    expect(isValidEmail("user @domain.com")).toBe(false);
  });
});

describe("isValidPhone", () => {
  it("accepts phones with 10+ digits", () => {
    expect(isValidPhone("5141234567")).toBe(true);
    expect(isValidPhone("514-123-4567")).toBe(true);
    expect(isValidPhone("+1 (514) 123-4567")).toBe(true);
    expect(isValidPhone("1 514 123 4567")).toBe(true);
  });

  it("rejects phones with fewer than 10 digits", () => {
    expect(isValidPhone("514123456")).toBe(false);
    expect(isValidPhone("123")).toBe(false);
    expect(isValidPhone("")).toBe(false);
  });
});

describe("validateLeadForm", () => {
  const validData = {
    prenom: "Jean",
    nom: "Dupont",
    email: "jean@example.com",
    telephone: "5141234567",
  };

  it("returns empty errors for valid data", () => {
    expect(validateLeadForm(validData)).toEqual({});
  });

  it("returns error for empty prenom", () => {
    const errors = validateLeadForm({ ...validData, prenom: "" });
    expect(errors.prenom).toBe("Requis");
  });

  it("returns error for empty nom", () => {
    const errors = validateLeadForm({ ...validData, nom: "  " });
    expect(errors.nom).toBe("Requis");
  });

  it("returns error for invalid email", () => {
    const errors = validateLeadForm({ ...validData, email: "notanemail" });
    expect(errors.email).toBe("Email invalide");
  });

  it("returns error for empty email", () => {
    const errors = validateLeadForm({ ...validData, email: "" });
    expect(errors.email).toBe("Requis");
  });

  it("returns error for short phone", () => {
    const errors = validateLeadForm({ ...validData, telephone: "514" });
    expect(errors.telephone).toBe("Numéro invalide (min 10 chiffres)");
  });

  it("returns multiple errors at once", () => {
    const errors = validateLeadForm({
      prenom: "",
      nom: "",
      email: "",
      telephone: "",
    });
    expect(Object.keys(errors).length).toBe(4);
  });
});
