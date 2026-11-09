"use client";

import { content } from "@/content";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function DossierNav() {
  const pathname = usePathname();
  const [hash, setHash] = useState("");

  useEffect(() => {
    const read = () => setHash(window.location.hash);
    read();
    window.addEventListener("hashchange", read);
    return () => window.removeEventListener("hashchange", read);
  }, [pathname]);

  return (
    <nav
      aria-label="Dossiers"
      data-section="dossiers"
      className="sticky top-[4.5rem] z-30 border-b border-hairline bg-background lg:h-[calc(100vh-4.5rem)] lg:overflow-y-auto lg:border-b-0 lg:border-r"
    >
      <div className="flex items-stretch gap-2 overflow-x-auto px-3 py-2 [mask-image:linear-gradient(to_right,black_calc(100%-1.75rem),transparent)] lg:flex-col lg:gap-2 lg:overflow-visible lg:px-4 lg:py-8 lg:pb-20 lg:[mask-image:none]">
        <p className="hidden font-label text-sm uppercase tracking-[0.18em] text-soft lg:mb-3 lg:block">
          Dossier
        </p>
        {content.dossiers.map((item) => {
          const path = item.href.split("#")[0];
          const itemHash = item.href.includes("#") ? `#${item.href.split("#")[1]}` : "";
          const active = itemHash
            ? pathname === path && hash === itemHash
            : pathname === path;
          return (
            <Link
              key={item.id}
              href={item.href}
              aria-current={active ? "page" : undefined}
              onClick={() => {
                if (itemHash) setHash(itemHash);
              }}
              className={`inline-flex min-h-11 shrink-0 items-center gap-3 border border-hairline px-3 lg:w-full ${active ? "bg-foreground text-white" : "bg-card text-foreground"}`}
            >
              <span aria-hidden className="h-6 w-1.5 shrink-0" style={{ background: item.spine }} />
              <span className="font-label text-base uppercase tracking-[0.12em]">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
