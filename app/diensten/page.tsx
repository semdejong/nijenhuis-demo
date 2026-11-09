import type { Metadata } from "next";
import Link from "next/link";
import CtaButtons from "@/components/CtaButtons";
import Dossier from "@/components/Dossier";
import OffertePanel from "@/components/OffertePanel";
import PhotoPlate from "@/components/PhotoPlate";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Schilderwerk",
  description:
    "Schilderwerk bij verbouw, nieuwbouw, renovatie en restauratie in Winterswijk. Kleuradvies en materiaalkeuze. Uitsluitend met de beste materialen.",
};

export default function DienstenPage() {
  const { schilderwerk, spines, detail, house } = content;
  return (
    <>
      <Dossier label="Schilderwerk" spine={spines.schilderwerk} href="/diensten">
        <h1 className="max-w-3xl text-4xl text-balance sm:text-5xl">{schilderwerk.title}</h1>
        <p className="mt-5 max-w-2xl text-pretty text-soft">{schilderwerk.lede}</p>
        <div className="mt-6">
          <CtaButtons />
        </div>
      </Dossier>

      <section aria-labelledby="soorten-title">
        <h2 id="soorten-title" className="text-3xl">
          Verbouw, nieuwbouw, renovatie, restauratie
        </h2>
        <ul className="mt-6 border-t border-hairline">
          {schilderwerk.kinds.map((kind) => (
            <li key={kind.title} className="flex gap-4 border-b border-hairline py-5">
              <span aria-hidden className="mt-2 h-8 w-2 shrink-0 bg-brand" />
              <div>
                <h3 className="text-2xl">{kind.title}</h3>
                <p className="mt-1 text-soft">{kind.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="kanten-diensten">
        <h2 id="kanten-diensten" className="text-3xl">
          {content.sides.title}
        </h2>
        <p className="mt-4 max-w-2xl text-soft">{content.sides.lede}</p>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {content.sides.items.map((item) => (
            <article key={item.title} className="flex border border-hairline bg-card">
              <div aria-hidden className="w-2 shrink-0" style={{ background: item.spine }} />
              <div className="px-5 py-6">
                <h3 className="text-2xl">{item.title}</h3>
                <p className="mt-3 text-soft">{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="advies-title">
        <h2 id="advies-title" className="text-3xl">
          {schilderwerk.adviceTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-soft">{schilderwerk.advice}</p>
      </section>

      <section aria-labelledby="markten-title">
        <h2 id="markten-title" className="text-3xl">
          {schilderwerk.marketsTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-soft">{schilderwerk.markets}</p>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          {content.particulier.markets.map((market) => (
            <article key={market.title} className="border border-hairline bg-card px-5 py-5">
              <h3 className="text-xl">{market.title}</h3>
              <p className="mt-2 text-base text-soft">{market.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="samen-title">
        <h2 id="samen-title" className="text-3xl">
          Eén partner
        </h2>
        <p className="mt-4 max-w-2xl text-soft">
          Schilderwerk, spuitwerk en meerdere glassoorten lopen via hetzelfde bedrijf.
        </p>
        <ul className="mt-4">
          <li>
            <Link href="/beglazing" className="text-link inline-flex min-h-11 items-center">
              Beglazing: vijf glassoorten
            </Link>
          </li>
          <li>
            <Link href="/spuitwerk" className="text-link inline-flex min-h-11 items-center">
              Spuitwerk
            </Link>
          </li>
        </ul>
      </section>

      <section aria-labelledby="beeld-diensten" data-section="fotos">
        <h2 id="beeld-diensten" className="text-3xl">
          Buitenzijden
        </h2>
        <p className="mt-4 max-w-2xl text-soft">
          Foto&apos;s uit ons beeldmateriaal. Wij koppelen ze hier niet aan een opdrachtgever.
        </p>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <PhotoPlate photo={detail} />
          <PhotoPlate photo={house} />
        </div>
      </section>

      <OffertePanel />
    </>
  );
}
