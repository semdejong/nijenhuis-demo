import { content } from "@/content";
import { ctaType } from "@/lib/cta";

export default function CtaButtons() {
  const { contact } = content;
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
      <a href={contact.phoneHref} data-cta={ctaType(contact.phoneHref)} className="btn btn-accent">
        Bel {contact.phoneDisplay}
      </a>
      <a href={contact.offerteHref} data-cta="offerte" className="btn btn-ghost">
        Mail voor een offerte
      </a>
    </div>
  );
}
