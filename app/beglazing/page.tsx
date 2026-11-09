import type { Metadata } from "next";
import Link from "next/link";
import CtaButtons from "@/components/CtaButtons";
import Dossier from "@/components/Dossier";
import OffertePanel from "@/components/OffertePanel";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Beglazingswerk",
  description:
    "Beglazingswerk in Winterswijk: isolerende beglazing, enkelvoudig glas, monumentaal glas, brandwerend glas en gelaagd glas. Vrijblijvende offerte.",
};

export default function BeglazingPage() {
  const { beglazing, spines } = content;
  return (
    <>
      <Dossier label="Beglazing" spine={spines.beglazing}>
        <h1 className="text-4xl text-balance sm:text-5xl">{beglazing.title}</h1>
        <p className="mt-5 max-w-2xl text-pretty text-soft">{beglazing.lede}</p>
        <div className="mt-6">
          <CtaButtons />
        </div>
      </Dossier>

      <section aria-labelledby="glas-title">
        <h2 id="glas-title" className="text-3xl">
          Glassoorten
        </h2>
        <ul className="mt-6 border-t border-hairline">
          {beglazing.types.map((type) => (
            <li key={type} className="flex items-center gap-4 border-b border-hairline py-5">
              <span aria-hidden className="h-8 w-2 shrink-0" style={{ background: spines.beglazing }} />
              <span className="font-serif text-3xl">{type}</span>
            </li>
          ))}
        </ul>
        <p className="mt-4 max-w-2xl text-soft">De maat en de uitvoering stemmen wij af op het project.</p>
        <Link href="/diensten" className="text-link mt-4 inline-flex min-h-11 items-center">
          Terug naar schilderwerk
        </Link>
      </section>

      <OffertePanel />
    </>
  );
}
