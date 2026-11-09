import type { Metadata } from "next";
import Link from "next/link";
import CtaButtons from "@/components/CtaButtons";
import Dossier from "@/components/Dossier";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Spuitwerk",
  description:
    "Spuitwerk door Nijenhuis Schilders in Winterswijk, naast schilderwerk en beglazing. Vraag een vrijblijvende offerte aan per telefoon of e-mail.",
};

export default function SpuitwerkPage() {
  const { spuitwerk, spines } = content;
  return (
    <>
      <Dossier label="Spuitwerk" spine={spines.spuitwerk}>
        <h1 className="text-4xl sm:text-5xl">{spuitwerk.title}</h1>
        <p className="mt-5 max-w-2xl text-pretty text-soft">{spuitwerk.lede}</p>
        <div className="mt-6">
          <CtaButtons />
        </div>
      </Dossier>

      <section aria-labelledby="spuit-naast">
        <h2 id="spuit-naast" className="text-3xl">
          Naast de andere dossiers
        </h2>
        <p className="mt-4 max-w-2xl text-soft">
          Voor schilderwerk en beglazing staan aparte dossiers. Spuitwerk vraagt u aan via hetzelfde telefoonnummer en hetzelfde e-mailadres.
        </p>
        <ul className="mt-4">
          <li>
            <Link href="/diensten" className="text-link inline-flex min-h-11 items-center">
              Schilderwerk
            </Link>
          </li>
          <li>
            <Link href="/beglazing" className="text-link inline-flex min-h-11 items-center">
              Beglazing
            </Link>
          </li>
        </ul>
      </section>
    </>
  );
}
