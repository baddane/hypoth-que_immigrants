import Link from "next/link";

export default function NotFound() {
  return (
    <section className="py-20 bg-cream min-h-screen flex items-center">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h1 className="font-serif text-5xl mb-4">404</h1>
        <p className="text-gray-500 mb-8">Cette page n&apos;existe pas ou a été déplacée.</p>
        <Link
          href="/"
          className="inline-block bg-gold text-white px-8 py-3.5 rounded-full font-bold hover:bg-gold-dark transition uppercase tracking-wider"
        >
          Retour à l&apos;accueil
        </Link>
      </div>
    </section>
  );
}
