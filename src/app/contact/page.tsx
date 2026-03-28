"use client";

import Link from "next/link";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    sujet: "Question sur mon dossier",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({ nom: "", email: "", sujet: "Question sur mon dossier", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-20 bg-light-blue min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <p className="uppercase text-xs tracking-[0.3em] text-primary font-semibold mb-4">Contact</p>
        <h1 className="text-3xl md:text-5xl font-extrabold text-navy mb-4">
          Nous <span className="text-primary">Contacter</span>
        </h1>
        <p className="text-dark/60 mb-12">
          Une question ? Un partenariat ? Remplissez le formulaire ci-dessous ou utilisez directement notre{" "}
          <Link href="/wizard" className="text-primary hover:underline font-medium">wizard gratuit</Link>.
        </p>

        {status === "sent" ? (
          <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center mb-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold text-navy mb-2">Message envoyé !</h2>
            <p className="text-sm text-dark/50">Nous vous répondrons dans les 24 à 48 heures.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl p-8 shadow-[0_2px_8px_rgba(0,0,0,0.06)] mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-nom" className="block text-sm font-medium text-navy mb-2">Nom complet *</label>
                  <input
                    id="contact-nom"
                    type="text"
                    required
                    value={formData.nom}
                    onChange={(e) => setFormData({ ...formData, nom: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-navy mb-2">Email *</label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                    placeholder="jean@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-sujet" className="block text-sm font-medium text-navy mb-2">Sujet</label>
                <select
                  id="contact-sujet"
                  value={formData.sujet}
                  onChange={(e) => setFormData({ ...formData, sujet: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary"
                >
                  <option>Question sur mon dossier</option>
                  <option>Partenariat courtier/banque</option>
                  <option>Support technique</option>
                  <option>Autre</option>
                </select>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-navy mb-2">Message *</label>
                <textarea
                  id="contact-message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-primary resize-none"
                  placeholder="Décrivez votre question..."
                />
              </div>

              {status === "error" && (
                <p className="text-sm text-red-500">Une erreur est survenue. Veuillez réessayer.</p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="w-full bg-primary text-white py-3.5 rounded-md font-semibold hover:bg-primary-dark transition uppercase text-sm tracking-wider disabled:opacity-50"
              >
                {status === "sending" ? "Envoi en cours..." : "Envoyer"}
              </button>
            </form>
          </div>
        )}

        <div className="bg-white rounded-lg p-8 text-center shadow-[0_2px_8px_rgba(0,0,0,0.06)]">
          <h3 className="text-xl font-bold text-navy mb-3">Besoin d&apos;aide pour votre hypothèque ?</h3>
          <p className="text-sm text-dark/50 mb-6">Le moyen le plus rapide est notre wizard. En 5 minutes, vous recevrez des offres personnalisées.</p>
          <Link
            href="/wizard"
            className="inline-block bg-primary text-white px-6 py-3 rounded-md text-sm font-bold hover:bg-primary-dark transition uppercase tracking-wider"
          >
            Commencer le Wizard
          </Link>
        </div>
      </div>
    </section>
  );
}
