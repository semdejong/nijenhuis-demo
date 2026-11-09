import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import Dossier from "@/components/Dossier";
import PhotoPlate from "@/components/PhotoPlate";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Nijenhuis Schilders, Europapark 6-P, 7102 AM Winterswijk. Bel 0543-521161 of mail info@nijenhuis-schilders.nl voor een vrijblijvende offerte.",
};

export default function ContactPage() {
  const { contact, spines, offerte, premises, about } = content;
  return (
    <>
      <Dossier label="Contact" spine={spines.winterswijk}>
        <h1 className="text-4xl sm:text-5xl">Contact</h1>
        <p className="mt-5 max-w-2xl text-pretty text-soft">
          Voor een vrijblijvende offerte belt of mailt u ons. Het formulier op deze pagina verstuurt niets.
        </p>
        <address className="mt-6">
          <span className="block font-serif text-2xl">{contact.street}</span>
          <span className="block font-serif text-2xl">{contact.postalCity}</span>
        </address>
        <p className="mt-4">
          <a className="text-link inline-flex min-h-11 items-center" href={contact.phoneHref} data-cta="bellen">
            {contact.phoneDisplay}
          </a>
        </p>
        <p>
          <a className="text-link inline-flex min-h-11 items-center" href={contact.emailHref} data-cta="offerte">
            {contact.email}
          </a>
        </p>
        <p className="mt-1">
          <a className="text-link inline-flex min-h-11 items-center" href={contact.mapHref} target="_blank" rel="noopener noreferrer">
            {contact.mapLabel}
          </a>
        </p>
        <p className="mt-6 max-w-2xl text-soft">{about.place}</p>
      </Dossier>

      <section aria-labelledby="meenemen" className="grid items-start gap-8 lg:grid-cols-2">
        <div>
          <h2 id="meenemen" className="text-3xl">
            {offerte.notesTitle}
          </h2>
          <ul className="mt-4 border-t border-hairline">
            {offerte.notes.map((note) => (
              <li key={note} className="border-b border-hairline py-3">
                {note}
              </li>
            ))}
          </ul>
        </div>
        <PhotoPlate photo={premises} />
      </section>

      <section id="formulier" data-section="contact" className="scroll-mt-32" aria-labelledby="formulier-title">
        <h2 id="formulier-title" className="sr-only">
          Formulier
        </h2>
        <ContactForm />
      </section>
    </>
  );
}
