import { content } from "@/content";
import Link from "next/link";

export default function Footer() {
  const { company, contact, footer, dossiers } = content;
  return (
    <footer data-section="footer" className="border-t border-hairline bg-background">
      <div className="mx-auto grid max-w-5xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[1.4fr_1fr_1fr] lg:px-10">
        <div>
          <p className="font-serif text-2xl">{company.name}</p>
          <p className="mt-2 text-base text-soft">{contact.address}</p>
          <p className="mt-3">
            <a className="text-link inline-flex min-h-11 items-center" href={contact.phoneHref} data-cta="bellen">
              {contact.phoneDisplay}
            </a>
          </p>
          <p>
            <a className="text-link inline-flex min-h-11 items-center" href={contact.emailHref} data-cta="offerte">
              {contact.email}
            </a>
          </p>
        </div>
        <div>
          <p className="font-label text-sm uppercase tracking-[0.16em] text-soft">Diensten</p>
          <ul className="mt-3">
            {dossiers.map((item) => (
              <li key={item.id}>
                <Link href={item.href} className="inline-flex min-h-11 items-center text-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-label text-sm uppercase tracking-[0.16em] text-soft">Pagina&apos;s</p>
          <ul className="mt-3">
            <li>
              <Link href="/contact" className="inline-flex min-h-11 items-center text-link">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="inline-flex min-h-11 items-center text-link">
                Privacy
              </Link>
            </li>
            <li>
              <a href="https://sleads.nl" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center text-link">
                {footer.concept}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-hairline">
        <p className="mx-auto max-w-5xl px-4 py-4 text-base text-soft sm:px-6 lg:px-10">{footer.noindex}</p>
      </div>
    </footer>
  );
}
