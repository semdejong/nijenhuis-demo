import Link from "next/link";
import { content } from "@/content";

export default function NotFound() {
  const { contact, dossiers } = content;
  return (
    <section>
      <title>Pagina niet gevonden | Nijenhuis Schilders</title>
      <h1 className="text-4xl sm:text-5xl">Pagina niet gevonden</h1>
      <p className="mt-4 max-w-xl text-pretty text-soft">
        Dit adres hoort niet bij een dossier. Kies hieronder een onderdeel, of bel ons direct.
      </p>
      <ul className="mt-8 border-t border-hairline">
        {dossiers.map((item) => (
          <li key={item.id} className="border-b border-hairline">
            <Link href={item.href} className="flex min-h-12 items-center gap-3 py-2">
              <span aria-hidden className="h-6 w-1.5 shrink-0" style={{ background: item.spine }} />
              <span className="font-label text-base uppercase tracking-[0.12em]">{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Link href="/" className="btn btn-solid">
          Naar home
        </Link>
        <a href={contact.phoneHref} data-cta="bellen" className="btn btn-accent">
          Bel {contact.phoneDisplay}
        </a>
      </div>
    </section>
  );
}
