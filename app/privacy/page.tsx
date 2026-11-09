import type { Metadata } from "next";
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
    <Dossier label="Privacy" spine={spines.opleiding}>
      <h1 className="text-4xl sm:text-5xl">{privacy.title}</h1>
      <p className="mt-5 max-w-2xl text-pretty text-soft">{privacy.lede}</p>
      <ul className="mt-6 max-w-2xl space-y-4">
        {privacy.points.map((point) => (
          <li key={point} className="border-l-[7px] border-brand pl-4">
            {point}
          </li>
        ))}
      </ul>
      <p className="mt-6">
        <a className="text-link inline-flex min-h-11 items-center" href={contact.phoneHref} data-cta="bellen">
          {contact.phoneDisplay}
        </a>
      </p>
      <p>
        <a className="text-link inline-flex min-h-11 items-center" href={contact.emailHref} data-cta="offerte">
          {contact.email}
        </a>
      </p>
    </Dossier>
  );
}
