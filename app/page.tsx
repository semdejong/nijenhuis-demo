import type { Metadata } from "next";
import Link from "next/link";
import CtaButtons from "@/components/CtaButtons";
import Dossier from "@/components/Dossier";
import FaqList from "@/components/FaqList";
import OffertePanel from "@/components/OffertePanel";
import PhotoPlate from "@/components/PhotoPlate";
import { content } from "@/content";

const tabOffsets = ["", "lg:ml-32", "lg:ml-64"];

export const metadata: Metadata = {
  title: { absolute: content.seo.title },
  description: content.seo.description,
};

export default function Home() {
  const { hero, services, leerlijn, references, photos, particulier, contact, sides } = content;
  const [leadPhoto, ...restPhotos] = photos;

  return (
    <>
      <section data-section="hero">
        <Dossier label={hero.tab} spine={content.spines.winterswijk} animate>
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            <div>
              <h1 className="max-w-xl text-4xl text-balance sm:text-5xl">{hero.title}</h1>
              <p className="mt-5 max-w-xl text-pretty text-soft">{hero.lede}</p>
              <div className="mt-6">
                <CtaButtons />
              </div>
            </div>
            <PhotoPlate photo={hero.photo} priority />
          </div>
        </Dossier>
      </section>

      <section data-section="diensten" aria-labelledby="diensten-title">
        <h2 id="diensten-title" className="text-3xl sm:text-4xl">
          {services.title}
        </h2>
        <p className="mt-4 max-w-2xl text-soft">{services.intro}</p>
        <div className="mt-8 flex flex-col gap-6">
          {services.items.map((item, index) => (
            <Dossier
              key={item.id}
              id={item.id}
              label={item.label}
              spine={item.spine}
              href={item.href}
              tabClassName={tabOffsets[index]}
            >
              <p className="max-w-2xl">{item.text}</p>
              <p className="mt-3 max-w-2xl text-soft">{item.detail}</p>
              <Link href={item.href} className="text-link mt-4 inline-flex min-h-11 items-center">
                {item.link}
              </Link>
            </Dossier>
          ))}
        </div>
      </section>

      <section data-section="binnen-buiten" aria-labelledby="kanten-title">
        <h2 id="kanten-title" className="text-3xl sm:text-4xl">
          {sides.title}
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-soft">{sides.lede}</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {sides.items.map((item) => (
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

      <section data-section="leerlijn" id="leerlijn" aria-labelledby="leerlijn-title">
        <div className="flex items-center gap-5">
          <h2 id="leerlijn-title" className="shrink-0 text-3xl sm:text-4xl">
            {leerlijn.title}
          </h2>
          <span aria-hidden className="h-px min-w-8 flex-1 bg-brand" />
        </div>
        <p className="mt-5 max-w-2xl text-pretty text-soft">{leerlijn.lede}</p>
        <ol className="mt-8 grid gap-6 border-t border-brand sm:grid-cols-3">
          {leerlijn.stations.map((station) => (
            <li key={station.title} className="border-t-2 border-brand pt-4 sm:-mt-px">
              <h3 className="text-xl">{station.title}</h3>
              <p className="mt-2 text-base text-soft">{station.text}</p>
            </li>
          ))}
        </ol>
        <Link href="/over-ons#opleiding" className="text-link mt-6 inline-flex min-h-11 items-center">
          Naar de opleiding
        </Link>
      </section>

      <section data-section="referenties" aria-labelledby="referenties-title">
        <h2 id="referenties-title" className="text-3xl sm:text-4xl">
          {references.title}
        </h2>
        <p className="mt-4 max-w-2xl text-soft">{references.intro}</p>
        <ul className="mt-6 border-t border-hairline">
          {references.business.map((item) => (
            <li key={item.id} className="border-b border-hairline">
              <Link
                href={`/referenties#${item.id}`}
                className="flex min-h-12 flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3"
              >
                <span>
                  <span className="block font-serif text-2xl">{item.name}</span>
                  <span className="mt-1 block text-base text-soft">{item.line}</span>
                </span>
                <span className="font-label text-sm uppercase tracking-[0.12em] text-soft">{item.note}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section data-section="fotos" aria-labelledby="fotos-title">
        <h2 id="fotos-title" className="text-3xl sm:text-4xl">
          Beeldmateriaal
        </h2>
        <p className="mt-4 max-w-2xl text-soft">
          Buitenzijden uit ons beeldmateriaal. Waar de gevel de naam niet zelf draagt, koppelen wij de foto niet aan een opdrachtgever.
        </p>
        <div className="mt-6 grid gap-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
          <PhotoPlate photo={leadPhoto} />
          <p className="max-w-md text-soft lg:pt-2">
            De eerste plaat is een hoekpand. De andere platen hieronder zijn woonhuizen en, waar de gevel het zelf zegt, Sociëteit Het Pakhuys. Geen van deze foto&apos;s krijgt een verzonnen opdrachtgever.
          </p>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {restPhotos.map((photo) => (
            <PhotoPlate key={photo.src} photo={photo} />
          ))}
        </div>
      </section>

      <section data-section="particulier" aria-labelledby="particulier-title">
        <h2 id="particulier-title" className="text-3xl sm:text-4xl">
          {particulier.title}
        </h2>
        <p className="mt-4 max-w-2xl text-pretty">{particulier.text}</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {particulier.markets.map((market) => (
            <article key={market.title} className="border-t-2 border-brand pt-4">
              <h3 className="text-2xl">{market.title}</h3>
              <p className="mt-2 text-soft">{market.text}</p>
            </article>
          ))}
        </div>
        <Link href={`/referenties#${references.vve.id}`} className="text-link mt-4 inline-flex min-h-11 items-center">
          {references.vve.name}
        </Link>
      </section>

      <OffertePanel />
      <FaqList />

      <section data-section="contact" aria-labelledby="contact-title">
        <h2 id="contact-title" className="text-3xl sm:text-4xl">
          Contact
        </h2>
        <address className="mt-4 text-pretty">
          <span className="block">{contact.street}</span>
          <span className="block">{contact.postalCity}</span>
        </address>
        <p className="mt-3">
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
        <Link href="/contact#formulier" data-cta="offerte" className="btn btn-accent mt-6">
          Naar het formulier
        </Link>
      </section>
    </>
  );
}
