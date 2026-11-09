import type { Metadata } from "next";
import Link from "next/link";
import Dossier from "@/components/Dossier";
import PhotoPlate from "@/components/PhotoPlate";
import { content } from "@/content";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Frank en Gabi te Brake leiden Nijenhuis Schilders in Winterswijk. Ervaren schilders en een Savantis gecertificeerd opleidingsbedrijf.",
};

export default function OverOnsPage() {
  const { about, spines, premises, references, leerlijn } = content;
  return (
    <>
      <Dossier label="Winterswijk" spine={spines.winterswijk}>
        <h1 className="text-4xl sm:text-5xl">{about.title}</h1>
        <p className="mt-5 max-w-2xl text-pretty text-soft">{about.lede}</p>
      </Dossier>

      <section aria-labelledby="team-title">
        <h2 id="team-title" className="text-3xl">
          {about.teamTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-soft">{about.team}</p>
        <div className="mt-6 max-w-3xl">
          <PhotoPlate photo={premises} />
        </div>
      </section>

      <section id="opleiding" data-section="leerlijn" className="scroll-mt-32" aria-labelledby="opleiding-title">
        <div className="flex items-center gap-5">
          <h2 id="opleiding-title" className="shrink-0 text-3xl sm:text-4xl">
            {leerlijn.title}
          </h2>
          <span aria-hidden className="h-px min-w-8 flex-1 bg-brand" />
        </div>
        <Dossier label="Opleiding" spine={spines.opleiding} href="/over-ons#opleiding">
          <p className="max-w-2xl text-pretty">{leerlijn.lede}</p>
          <ol className="mt-6 grid gap-6 border-t border-brand sm:grid-cols-3">
            {leerlijn.stations.map((station) => (
              <li key={station.title} className="pt-4">
                <h3 className="text-xl">{station.title}</h3>
                <p className="mt-2 text-base text-soft">{station.text}</p>
              </li>
            ))}
          </ol>
        </Dossier>
      </section>

      <section aria-labelledby="zakelijk-title">
        <h2 id="zakelijk-title" className="text-3xl">
          {about.businessTitle}
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-soft">{about.business}</p>
        <h2 className="mt-10 text-3xl">{about.privateTitle}</h2>
        <p className="mt-4 max-w-2xl text-pretty text-soft">{about.private}</p>
        <h2 className="mt-10 text-3xl">{about.vveTitle}</h2>
        <p className="mt-4 max-w-2xl text-pretty text-soft">{about.vve}</p>
        <p className="mt-4 font-serif text-2xl">{references.vve.name}</p>
        <Link href="/referenties" className="text-link mt-4 inline-flex min-h-11 items-center">
          Alle referenties
        </Link>
      </section>
    </>
  );
}
