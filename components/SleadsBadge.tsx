/** Subtiele badge: markeert de site als concept van Sleads. Niet verwijderen in demo's. */
export default function SleadsBadge() {
  return (
    <a
      href="https://sleads.nl"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Concept door Sleads – bekijk sleads.nl"
      className="relative z-50 mx-4 mb-3 inline-flex min-h-11 items-center gap-1.5 self-start rounded-full border border-black/10 bg-white/95 px-3 py-1.5 text-xs font-medium text-neutral-700 shadow-sm transition hover:bg-white hover:text-black lg:fixed lg:bottom-4 lg:left-4 lg:mx-0 lg:mb-0 print:hidden"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden />
      Concept door <span className="font-semibold">Sleads</span>
    </a>
  );
}
