import { content } from "@/content";
import CtaButtons from "@/components/CtaButtons";

export default function OffertePanel() {
  const { offerte } = content;
  return (
    <section data-section="offerte" aria-labelledby="offerte-title">
      <h2 id="offerte-title" className="text-3xl sm:text-4xl">
        {offerte.title}
      </h2>
      <p className="mt-4 max-w-2xl text-soft">{offerte.lede}</p>
      <ol className="mt-6 max-w-2xl border-t-2 border-foreground">
        {offerte.steps.map((step, index) => (
          <li key={step} className="flex gap-4 border-b border-hairline py-4">
            <span className="font-label w-8 shrink-0 text-soft">{index + 1}</span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
      <div className="mt-8 border-t border-hairline pt-6">
        <h3 className="text-xl">{offerte.notesTitle}</h3>
        <ul className="mt-3 max-w-2xl">
          {offerte.notes.map((note) => (
            <li key={note} className="border-b border-hairline py-3">
              {note}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-6">
        <CtaButtons />
      </div>
    </section>
  );
}
