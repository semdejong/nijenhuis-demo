import type { Metadata } from "next";
import Dossier from "@/components/Dossier";
import OffertePanel from "@/components/OffertePanel";
import PhotoPlate from "@/components/PhotoPlate";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Referenties",
  description:
    "Referenties van Nijenhuis Schilders: Villa Mondriaan, Streekziekenhuis Koningin Beatrix, Schuurman Schoenen, Oxener Schoenen, Zorgboerderij Hesselink en Sociëteit Pakhuys.",
};

export default function ReferentiesPage() {
  const { references, hero, photos, spines } = content;
  return (
    <>
      <Dossier label="Referenties" spine={spines.schilderwerk}>
        <h1 className="text-4xl sm:text-5xl">Referenties</h1>
        <p className="mt-5 max-w-2xl text-pretty text-soft">{references.intro}</p>
      </Dossier>

      <section aria-labelledby="zakelijk-ref">
        <h2 id="zakelijk-ref" className="text-3xl">
          Zakelijk
        </h2>
        <ul className="mt-6 border-t border-hairline">
          {references.business.map((item) => (
            <li key={item.id} id={item.id} className="scroll-mt-32 border-b border-hairline py-4">
              <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="text-2xl">{item.name}</h3>
                <span className="font-label shrink-0 text-sm uppercase tracking-[0.12em] text-soft">{item.note}</span>
              </div>
              <p className="mt-2 max-w-2xl text-soft">{item.line}</p>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="vve-ref">
        <h2 id="vve-ref" className="text-3xl">
          Vereniging van eigenaren
        </h2>
        <article id={references.vve.id} className="mt-6 scroll-mt-32 border border-hairline bg-card">
          <div className="border-b border-hairline px-4 py-4 sm:px-6">
            <h3 className="text-2xl">{references.vve.name}</h3>
            <p className="mt-1 font-label text-sm uppercase tracking-[0.12em] text-soft">{references.vve.note}</p>
          </div>
          <div className="p-4 sm:p-6">
            <PhotoPlate photo={hero.photo} />
            <p className="mt-4 max-w-2xl text-soft">{references.vve.line}</p>
            <p className="mt-3 max-w-2xl text-soft">
              De foto toont de buitenzijde. De overige platen hieronder laten wij zonder opdrachtgever, omdat die koppeling niet vaststaat. U ziet gevels: een hoekpand, woonhuizen met luiken, een wit huis en een vrijstaand huis met bijgebouw.
            </p>
          </div>
        </article>
      </section>

      <section data-section="fotos" aria-labelledby="platen-title">
        <h2 id="platen-title" className="text-3xl">
          Buitenzijden
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {photos
            .filter((photo) => photo.src !== "/img/fotos/03.png")
            .map((photo, index, list) => (
              <div key={photo.src} className={index === list.length - 1 ? "sm:col-span-2" : undefined}>
                <PhotoPlate photo={photo} frame />
              </div>
            ))}
        </div>
      </section>

      <OffertePanel />
    </>
  );
}
