import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez guide-hypotheque.ca pour questions ou partenariats.",
};

export default function ContactPage() {
  return (
    <section className="py-20 bg-cream min-h-screen">
      <div className="max-w-3xl mx-auto px-6">
        <p className="uppercase text-xs tracking-[0.3em] text-gold mb-4">Contact</p>
        <h1 className="font-serif text-3xl md:text-5xl mb-4">
          Nous <em className="text-gold">Contacter</em>
        </h1>
        <p className="text-gray-500 mb-12">
          Une question ? Un partenariat ? Remplissez le formulaire ci-dessous ou utilisez directement notre{" "}
          <Link href="/wizard" className="text-gold hover:underline">wizard gratuit</Link>.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-sm mb-8">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Nom complet</label>
                <input
                  type="text"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold"
                  placeholder="Jean Dupont"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold"
                  placeholder="jean@email.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Sujet</label>
              <select className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold">
                <option>Question sur mon dossier</option>
                <option>Partenariat courtier/banque</option>
                <option>Support technique</option>
                <option>Autre</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message</label>
              <textarea
                rows={4}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold resize-none"
                placeholder="Décrivez votre question..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gold text-white py-3.5 rounded-xl font-medium hover:bg-gold-dark transition uppercase text-sm tracking-wider"
            >
              Envoyer
            </button>
          </form>
        </div>

        {/* Quick redirect */}
        <div className="bg-gold-light rounded-xl p-8 text-center">
          <h3 className="font-serif text-xl mb-3">Besoin d&apos;aide pour votre hypothèque ?</h3>
          <p className="text-sm text-gray-500 mb-6">Le moyen le plus rapide est notre wizard. En 5 minutes, vous recevrez des offres personnalisées.</p>
          <Link
            href="/wizard"
            className="inline-block bg-gold text-white px-6 py-3 rounded-full text-sm font-bold hover:bg-gold-dark transition uppercase tracking-wider"
          >
            Commencer le Wizard
          </Link>
        </div>
      </div>
    </section>
  );
}
