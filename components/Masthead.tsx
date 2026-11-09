"use client";

import { content } from "@/content";
import { ctaType } from "@/lib/cta";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useId, useRef, useState } from "react";

function isCurrent(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Masthead() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [menuPath, setMenuPath] = useState(pathname);
  const menuId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const { company, nav, contact } = content;

  if (menuPath !== pathname) {
    setMenuPath(pathname);
    setOpen(false);
  }

  const close = useCallback(() => {
    setOpen(false);
    buttonRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!open) return;
    const root = dialogRef.current;
    const focusable = root?.querySelectorAll<HTMLElement>("a, button");
    focusable?.[0]?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        close();
        return;
      }
      if (event.key !== "Tab" || !focusable?.length) return;
      const list = Array.from(focusable);
      const first = list[0];
      const last = list[list.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [open, close]);

  return (
    <header
      data-section="header"
      className={`sticky top-0 h-[4.5rem] border-b border-white/10 bg-foreground text-white ${open ? "z-[80]" : "z-40"}`}
    >
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between gap-3 px-4 lg:px-6">
        <Link href="/" className="inline-flex shrink-0 items-center bg-white px-2.5 py-1.5">
          {/* Transparante bron; plaat met wit vlak zodat het blauwe woordmerk leesbaar blijft. */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={company.logo}
            alt={company.name}
            width={company.logoWidth}
            height={company.logoHeight}
            className="h-10 w-auto sm:h-11"
          />
        </Link>
        <nav aria-label="Hoofdmenu" className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const current = isCurrent(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={current ? "page" : undefined}
                className={`inline-flex min-h-11 items-center px-3 text-base text-white ${current ? "font-semibold underline decoration-[#F86C00] decoration-2 underline-offset-8" : "font-medium"}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={contact.phoneHref}
            data-cta={ctaType(contact.phoneHref)}
            className="btn btn-accent hidden lg:inline-flex"
          >
            Bel {contact.phoneDisplay}
          </a>
          <button
            ref={buttonRef}
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center border-2 border-white px-3 text-base font-semibold text-white lg:hidden"
            aria-expanded={open}
            aria-controls={menuId}
            onClick={() => setOpen(true)}
          >
            Menu
          </button>
        </div>
      </div>
      {open ? (
        <div
          ref={dialogRef}
          id={menuId}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[70] flex flex-col bg-background text-foreground"
        >
          <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
            <p className="font-label text-base uppercase tracking-[0.16em]">Menu</p>
            <button
              type="button"
              onClick={close}
              className="inline-flex min-h-11 min-w-11 items-center justify-center border-2 border-foreground px-3 font-semibold"
            >
              Sluiten
            </button>
          </div>
          <nav aria-label="Mobiel menu" className="flex flex-1 flex-col px-4 py-4">
            {nav.map((item) => {
              const current = isCurrent(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={current ? "page" : undefined}
                  className="inline-flex min-h-12 items-center border-b border-hairline font-serif text-3xl"
                  onClick={close}
                >
                  {item.label}
                </Link>
              );
            })}
            <div className="mt-8 flex flex-col gap-3">
              <a href={contact.phoneHref} data-cta="bellen" className="btn btn-accent">
                Bel {contact.phoneDisplay}
              </a>
              <a href={contact.offerteHref} data-cta="offerte" className="btn btn-ghost">
                Mail voor een offerte
              </a>
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
