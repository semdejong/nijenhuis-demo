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
            <li key={type.title} className="flex gap-4 border-b border-hairline py-5">
              <span aria-hidden className="mt-2 h-10 w-2 shrink-0" style={{ background: spines.beglazing }} />
              <div>
                <h3 className="font-serif text-3xl">{type.title}</h3>
                <p className="mt-1 max-w-2xl text-soft">{type.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="mt-6 max-w-2xl text-pretty">{beglazing.withPaint}</p>
        <div className="mt-4 flex flex-col">
          <Link href="/diensten" className="text-link inline-flex min-h-11 items-center">
            Naar schilderwerk
          </Link>
          <Link href="/spuitwerk" className="text-link inline-flex min-h-11 items-center">
            Naar spuitwerk
          </Link>
        </div>
      </section>

      <OffertePanel />
    </>
  );
}
