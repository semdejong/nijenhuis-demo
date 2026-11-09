import Link from "next/link";
import { content } from "@/content";

export default function NotFound() {
  const { contact } = content;
  return (
    <section>
      <h1 className="text-4xl sm:text-5xl">Pagina niet gevonden</h1>
      <p className="mt-4 max-w-xl text-soft">Deze pagina bestaat niet in dit concept.</p>
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
