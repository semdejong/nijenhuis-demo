import type { Metadata } from "next";
import Link from "next/link";
import Dossier from "@/components/Dossier";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Privacy bij dit concept voor Nijenhuis Schilders. Het formulier verstuurt niets. Telefoon en e-mail zijn de route voor een offerte.",
};

export default function PrivacyPage() {
  const { privacy, contact, spines } = content;
  return (
    <>
      <Dossier label="Privacy" spine={spines.opleiding}>
        <h1 className="text-4xl sm:text-5xl">{privacy.title}</h1>
        <p className="mt-5 max-w-2xl text-pretty text-soft">{privacy.lede}</p>
      </Dossier>
      {privacy.sections.map((section) => (
        <section key={section.title} aria-labelledby={section.title} className="border-t border-hairline pt-8">
          <h2 id={section.title} className="text-3xl">
            {section.title}
          </h2>
          <p className="mt-4 max-w-2xl text-pretty text-soft">{section.text}</p>
        </section>
      ))}
      <div>
        <p>
          <a className="text-link inline-flex min-h-11 items-center" href={contact.phoneHref} data-cta="bellen">
            {contact.phoneDisplay}
          </a>
        </p>
        <p>
          <a className="text-link inline-flex min-h-11 items-center" href={contact.emailHref} data-cta="offerte">
            {contact.email}
          </a>
        </p>
        <Link href="/contact#formulier" data-cta="offerte" className="btn btn-ghost mt-4">
          Naar het formulier
        </Link>
      </div>
    </>
  );
}
