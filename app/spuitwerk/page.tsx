import type { Metadata } from "next";
import Link from "next/link";
import CtaButtons from "@/components/CtaButtons";
import Dossier from "@/components/Dossier";
import OffertePanel from "@/components/OffertePanel";
import PhotoPlate from "@/components/PhotoPlate";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Spuitwerk",
  description:
    "Spuitwerk door Nijenhuis Schilders in Winterswijk, naast schilderwerk en beglazing. Vraag een vrijblijvende offerte aan per telefoon of e-mail.",
};

export default function SpuitwerkPage() {
  const { spuitwerk, spines, premises, services } = content;
  return (
    <>
      <Dossier label="Spuitwerk" spine={spines.spuitwerk}>
        <h1 className="text-4xl sm:text-5xl">{spuitwerk.title}</h1>
        <p className="mt-5 max-w-2xl text-pretty text-soft">{spuitwerk.lede}</p>
        <div className="mt-6">
          <CtaButtons />
        </div>
      </Dossier>

      <section aria-labelledby="spuit-vragen">
        <h2 id="spuit-vragen" className="text-3xl">
          {spuitwerk.asksTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-soft">
          Het gesprek begint bij uw pand. Deze vier punten zijn genoeg om een vrijblijvende offerte te starten.
        </p>
        <ol className="mt-6 border-t-2 border-foreground">
          {spuitwerk.asks.map((ask, index) => (
            <li key={ask} className="flex gap-4 border-b border-hairline py-4">
              <span aria-hidden className="mt-1.5 h-6 w-1.5 shrink-0 bg-accent" />
              <span className="font-label w-6 shrink-0 text-soft">{index + 1}</span>
              <span>{ask}</span>
            </li>
          ))}
        </ol>
      </section>

      <section aria-labelledby="spuit-pand" className="grid items-start gap-8 lg:grid-cols-2">
        <div>
          <h2 id="spuit-pand" className="text-3xl">
            Vanuit Winterswijk
          </h2>
          <p className="mt-4 text-pretty text-soft">{spuitwerk.place}</p>
          <ul className="mt-6">
            {services.items
              .filter((item) => item.id !== "spuitwerk")
              .map((item) => (
                <li key={item.id}>
                  <Link href={item.href} className="text-link inline-flex min-h-11 items-center">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        <PhotoPlate photo={premises} />
      </section>

      <OffertePanel />
    </>
  );
}
