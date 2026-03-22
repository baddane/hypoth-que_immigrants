"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="py-20 bg-cream min-h-screen flex items-center">
      <div className="max-w-xl mx-auto px-6 text-center">
        <h1 className="font-serif text-4xl mb-4">Une erreur est survenue</h1>
        <p className="text-gray-500 mb-8">
          Nous nous excusons pour ce désagrément. Veuillez réessayer.
        </p>
        <button
          onClick={reset}
          className="inline-block bg-gold text-white px-8 py-3.5 rounded-full font-bold hover:bg-gold-dark transition uppercase tracking-wider"
        >
          Réessayer
        </button>
      </div>
    </section>
  );
}
