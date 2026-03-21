import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="w-8 h-8 bg-gold rounded-full flex items-center justify-center text-white font-bold text-sm">H</span>
              <span className="font-serif text-white text-lg">
                Hypothèque <span className="font-bold">Immigrants</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              La référence francophone de l&apos;hypothèque pour immigrants au Canada. Guides complets, outils interactifs et recommandations personnalisées.
            </p>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-wider">Outils</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/wizard" className="hover:text-white transition">Wizard Hypothèque</Link></li>
              <li><Link href="/calculatrice" className="hover:text-white transition">Calculatrice</Link></li>
              <li><Link href="/comparateur" className="hover:text-white transition">Comparateur Banques</Link></li>
              <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-wider">Guides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/blog/hypotheque-immigrants-canada-guide-complet" className="hover:text-white transition">Guide Complet</Link></li>
              <li><Link href="/blog/hypotheque-permis-travail" className="hover:text-white transition">Permis de Travail</Link></li>
              <li><Link href="/blog/hypotheque-residence-permanente" className="hover:text-white transition">Résidence Permanente</Link></li>
              <li><Link href="/blog/hypotheque-quebec" className="hover:text-white transition">Hypothèque Québec</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-medium mb-4 uppercase text-xs tracking-wider">Ressources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-white transition">À propos</Link></li>
              <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="/mentions-legales" className="hover:text-white transition">Mentions Légales</Link></li>
              <li><Link href="/politique-confidentialite" className="hover:text-white transition">Confidentialité</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Guide Hypothèque Immigrants Canada. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
}
