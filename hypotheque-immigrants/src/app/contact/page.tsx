import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contactez-nous pour questions ou partenariats.",
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
          Une question sur votre hypothèque ? Un partenariat ? Remplissez le formulaire ci-dessous.
        </p>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
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

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Téléphone</label>
                <input
                  type="tel"
                  className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold"
                  placeholder="+1 (xxx) xxx-xxxx"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Statut immigration</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold">
                  <option value="">Sélectionnez...</option>
                  <option>Résident Permanent</option>
                  <option>Travailleur Temporaire</option>
                  <option>Citoyen Canadien</option>
                  <option>En attente d&apos;immigration</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Province</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold">
                  <option value="">Sélectionnez...</option>
                  <option>Ontario</option>
                  <option>Québec</option>
                  <option>Colombie-Britannique</option>
                  <option>Alberta</option>
                  <option>Autre</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Montant recherché</label>
                <select className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold">
                  <option value="">Sélectionnez...</option>
                  <option>Moins de 200 000 $</option>
                  <option>200 000 $ - 400 000 $</option>
                  <option>400 000 $ - 600 000 $</option>
                  <option>Plus de 600 000 $</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Message (optionnel)</label>
              <textarea
                rows={4}
                className="w-full border border-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:border-gold resize-none"
                placeholder="Décrivez votre situation..."
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
      </div>
    </section>
  );
}
