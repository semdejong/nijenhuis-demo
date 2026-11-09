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
      <ol className="mt-6 max-w-2xl list-decimal space-y-3 pl-6">
        {offerte.steps.map((step) => (
          <li key={step}>{step}</li>
        ))}
      </ol>
      <div className="mt-6">
        <CtaButtons />
      </div>
    </section>
  );
}
