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
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
            <div className="order-2 lg:order-1">
              <h1 className="max-w-xl text-4xl text-balance sm:text-5xl">{hero.title}</h1>
              <p className="mt-5 max-w-xl text-pretty text-soft">{hero.lede}</p>
              <div className="mt-6">
                <CtaButtons />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <PhotoPlate photo={hero.photo} priority />
            </div>
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
        <ol className="mt-8 grid border-t-2 border-brand sm:grid-cols-3">
          {leerlijn.stations.map((station) => (
            <li key={station.title} className="border-b border-hairline py-5 sm:border-b-0 sm:border-l sm:px-5 sm:first:border-l-0 sm:first:pl-0">
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
                className="flex min-h-12 flex-col gap-1 py-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
              >
                <span>
                  <span className="text-link block font-serif text-2xl">{item.name}</span>
                  <span className="mt-1 block text-base text-soft">{item.line}</span>
                </span>
                <span className="font-label shrink-0 text-sm uppercase tracking-[0.12em] text-soft">{item.note}</span>
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
          Buitenzijden uit ons beeldmateriaal. Alleen Sociëteit Het Pakhuys koppelen wij aan een naam, omdat die naam op de gevel staat.
        </p>
        <div className="mt-6 grid items-center gap-6 lg:grid-cols-[minmax(0,1.35fr)_minmax(16rem,0.8fr)]">
          <PhotoPlate photo={leadPhoto} />
          <p className="max-w-md border-l-[7px] border-brand pl-4 text-soft">
            Dit hoekpand. Daaronder woonhuizen, en de gevel die zichzelf Sociëteit Het Pakhuys noemt.
          </p>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          {restPhotos.map((photo, index) => (
            <div key={photo.src} className={index === restPhotos.length - 1 ? "sm:col-span-2" : undefined}>
              <PhotoPlate photo={photo} frame />
            </div>
          ))}
        </div>
      </section>

      <section data-section="particulier" aria-labelledby="particulier-title">
        <h2 id="particulier-title" className="text-3xl sm:text-4xl">
          {particulier.title}
        </h2>
        <p className="mt-4 max-w-2xl text-pretty">{particulier.text}</p>
        <div className="mt-8 grid border-t-2 border-brand lg:grid-cols-3">
          {particulier.markets.map((market) => (
            <article key={market.title} className="border-b border-hairline py-5 last:border-b-0 lg:border-b-0 lg:border-l lg:px-5 lg:first:border-l-0 lg:first:pl-0">
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

      <section data-section="contact" aria-labelledby="contact-title" className="border border-foreground bg-foreground px-5 py-8 text-white sm:px-8">
        <h2 id="contact-title" className="text-3xl text-white sm:text-4xl">
          Contact
        </h2>
        <address className="mt-4 text-pretty text-white">
          <span className="block">{contact.street}</span>
          <span className="block">{contact.postalCity}</span>
        </address>
        <p className="mt-3">
          <a className="inline-flex min-h-11 items-center text-white underline decoration-white/70 underline-offset-4" href={contact.phoneHref} data-cta="bellen">
            {contact.phoneDisplay}
          </a>
        </p>
        <p>
          <a className="inline-flex min-h-11 items-center text-white underline decoration-white/70 underline-offset-4" href={contact.emailHref} data-cta="offerte">
            {contact.email}
          </a>
        </p>
        <p className="mt-1">
          <a
            className="inline-flex min-h-11 items-center text-white underline decoration-white/70 underline-offset-4"
            href={contact.mapHref}
            target="_blank"
            rel="noopener noreferrer"
          >
            {contact.mapLabel}
          </a>
        </p>
        <Link href="/contact#formulier" data-cta="offerte" className="btn btn-accent mt-6 border-white hover:border-white hover:bg-white hover:text-foreground">
          Naar het formulier
        </Link>
      </section>
    </>
  );
}
