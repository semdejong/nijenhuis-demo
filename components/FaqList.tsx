import { content } from "@/content";

export default function FaqList() {
  return (
    <section data-section="faq" aria-labelledby="faq-title">
      <h2 id="faq-title" className="text-3xl sm:text-4xl">
        Vragen
      </h2>
      <div className="mt-6 border-t border-hairline">
        {content.faq.map((item) => (
          <details key={item.q} className="border-b border-hairline">
            <summary className="min-h-11 cursor-pointer py-3 font-serif text-xl">
              {item.q}
            </summary>
            <p className="max-w-2xl pb-4 text-soft">{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
