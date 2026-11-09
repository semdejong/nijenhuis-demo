import { content } from "@/content";
import Link from "next/link";

export default function MobileBar() {
  const { contact } = content;
  return (
    <div
      data-section="mobile-cta"
      className="fixed inset-x-0 bottom-0 z-40 border-t-2 border-foreground bg-foreground lg:hidden"
    >
      <div className="grid grid-cols-2">
        <a
          href={contact.phoneHref}
          data-cta="bellen"
          className="inline-flex min-h-12 items-center justify-center border-r border-white/25 px-2 text-center text-[15px] font-semibold text-white sm:text-base"
        >
          Bel {contact.phoneDisplay}
        </a>
        <Link
          href="/contact#formulier"
          data-cta="offerte"
          className="inline-flex min-h-12 items-center justify-center bg-accent px-2 text-center text-base font-semibold text-accent-fg"
        >
          Offerte
        </Link>
      </div>
    </div>
  );
}
