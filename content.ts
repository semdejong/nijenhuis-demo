/**
 * Alle publieke tekst voor de Nijenhuis Schilders-conceptsite.
 * Alleen gecontroleerde feiten. Geen KvK, btw, openingstijden, prijzen,
 * reviews of keurmerken. Geen oprichtingsjaar — de formulering blijft
 * "meer dan 135 jaar".
 */
export const content = {
  slug: "nijenhuis-demo",

  company: {
    name: "Nijenhuis Schilders",
    tagline: "Schilder- en glaswerk in Winterswijk",
    description:
      "Schilderwerk, beglazing en spuitwerk in Winterswijk. Al meer dan 135 jaar. Savantis gecertificeerd opleidingsbedrijf. Bel of mail voor een vrijblijvende offerte.",
    logo: "/img/logo-mark.png",
    logoWidth: 322,
    logoHeight: 129,
    city: "Winterswijk",
    region: "Achterhoek",
    owners: "Frank en Gabi te Brake",
  },

  colors: {
    primary: "#2B5BA9",
    primaryForeground: "#FFFFFF",
    accent: "#F86C00",
    accentForeground: "#1A1F25",
    background: "#F7F6F2",
    foreground: "#1A1F25",
    muted: "#E7E4DC",
    hairline: "#D9DADE",
    soft: "#3A4149",
    card: "#FFFFFF",
  },

  seo: {
    title: "Nijenhuis Schilders | Schilder- en glaswerk in Winterswijk",
    description:
      "Schilderwerk, beglazing en spuitwerk in Winterswijk. Al meer dan 135 jaar. Savantis gecertificeerd opleidingsbedrijf. Bel of mail voor een vrijblijvende offerte.",
    lang: "nl",
  },

  contact: {
    phoneDisplay: "0543-521161",
    phoneHref: "tel:+31543521161",
    email: "info@nijenhuis-schilders.nl",
    emailHref: "mailto:info@nijenhuis-schilders.nl",
    offerteHref:
      "mailto:info@nijenhuis-schilders.nl?subject=Vrijblijvende%20offerte",
    street: "Europapark 6-P",
    postalCity: "7102 AM Winterswijk",
    address: "Europapark 6-P, 7102 AM Winterswijk",
    mapHref:
      "https://www.google.com/maps/search/?api=1&query=Europapark+6-P%2C+7102+AM+Winterswijk",
    mapLabel: "Zoek Europapark 6-P op de kaart",
  },

  nav: [
    { label: "Home", href: "/" },
    { label: "Over ons", href: "/over-ons" },
    { label: "Diensten", href: "/diensten" },
    { label: "Referenties", href: "/referenties" },
    { label: "Contact", href: "/contact" },
  ],

  spines: {
    schilderwerk: "#2B5BA9",
    beglazing: "#1A1F25",
    spuitwerk: "#F86C00",
    opleiding: "#16366A",
    winterswijk: "#2B5BA9",
  },

  dossiers: [
    {
      id: "schilderwerk",
      label: "Schilderwerk",
      href: "/diensten",
      spine: "#2B5BA9",
    },
    {
      id: "beglazing",
      label: "Beglazing",
      href: "/beglazing",
      spine: "#1A1F25",
    },
    {
      id: "spuitwerk",
      label: "Spuitwerk",
      href: "/spuitwerk",
      spine: "#F86C00",
    },
    {
      id: "opleiding",
      label: "Opleiding",
      href: "/over-ons#opleiding",
      spine: "#16366A",
    },
  ],

  hero: {
    tab: "Winterswijk",
    title: "Meer dan 135 jaar schilder- en glaswerk in Winterswijk",
    lede: "Al meer dan 135 jaar zijn wij in Winterswijk uw partner voor binnen- en buitenschilderwerk en voor glaswerk in allerlei vormen en maten. Voor groot werk en voor klein werk, zakelijk en particulier.",
    photo: {
      src: "/img/foto01.png",
      width: 965,
      height: 511,
      alt: "Witte gevel van Sociëteit Het Pakhuys, met donkere kozijnen en balkons.",
      kind: "Buitenzijde",
      caption:
        "Sociëteit Het Pakhuys in Winterswijk. De naam staat op de gevel.",
    },
  },

  services: {
    title: "Wat wij leveren",
    intro: "Eén partner voor schilderwerk, spuitwerk en meerdere glassoorten.",
    items: [
      {
        id: "schilderwerk",
        label: "Schilderwerk",
        href: "/diensten",
        spine: "#2B5BA9",
        text: "Wij verzorgen schilderwerk bij verbouw, nieuwbouw, renovatie en restauratie, met kleuradvies en een keuze uit de beste materialen.",
        link: "Naar schilderwerk",
      },
      {
        id: "beglazing",
        label: "Beglazing",
        href: "/beglazing",
        spine: "#1A1F25",
        text: "Wij leveren glas in alle soorten en maten: isolerende beglazing, enkelvoudig glas, monumentaal glas, brandwerend glas en gelaagd glas.",
        link: "Naar beglazing",
      },
      {
        id: "spuitwerk",
        label: "Spuitwerk",
        href: "/spuitwerk",
        spine: "#F86C00",
        text: "Spuitwerk staat bij ons naast schilderwerk en beglazing; de aanpak stemmen wij af op het project.",
        link: "Naar spuitwerk",
      },
    ],
  },

  leerlijn: {
    title: "Leerlijn",
    lede: "Naast eigenaren Frank en Gabi te Brake bestaat het team uit ervaren schilders. Leerlingen worden bij Savantis opgeleid tot volwaardig schilders. Wij zijn een Savantis gecertificeerd opleidingsbedrijf.",
    stations: [
      {
        title: "Frank en Gabi te Brake",
        text: "Eigenaren van Nijenhuis Schilders.",
      },
      {
        title: "Ervaren schilders",
        text: "Schilders met jarenlange ervaring in het vak.",
      },
      {
        title: "Savantis",
        text: "Leerlingen worden opgeleid tot volwaardig schilders. Wij zijn een Savantis gecertificeerd opleidingsbedrijf.",
      },
    ],
  },

  references: {
    title: "Zakelijke referenties",
    intro:
      "Deze namen noemen wij zelf als gerealiseerde projecten. Wij voegen er geen jaartallen, oppervlakten of citaten aan toe.",
    business: [
      { id: "villa-mondriaan", name: "Villa Mondriaan", note: "Zakelijk" },
      { id: "schuurman-schoenen", name: "Schuurman Schoenen", note: "Zakelijk" },
      {
        id: "skb",
        name: "Streekziekenhuis Koningin Beatrix (SKB)",
        note: "Zakelijk",
      },
      { id: "hesselink", name: "Zorgboerderij Hesselink", note: "Zakelijk" },
      { id: "oxener-schoenen", name: "Oxener Schoenen", note: "Zakelijk" },
      {
        id: "gemeentelijk",
        name: "Gemeentelijke projecten",
        note: "Zakelijk",
      },
    ],
    vve: {
      id: "pakhuys",
      name: "Sociëteit Pakhuys Winterswijk",
      note: "Vereniging van eigenaren",
    },
  },

  photos: [
    {
      src: "/img/fotos/01.png",
      width: 600,
      height: 374,
      alt: "Hoekpand met donkere baksteengevel, lichte kozijnen en een klein balkon.",
      kind: "Buitenzijde",
      caption: "Hoekpand met baksteengevel en lichte kozijnen.",
    },
    {
      src: "/img/fotos/03.png",
      width: 600,
      height: 399,
      alt: "Witte gevel van Sociëteit Het Pakhuys tussen bomen.",
      kind: "Buitenzijde",
      caption: "Sociëteit Het Pakhuys. De naam staat op de gevel.",
    },
    {
      src: "/img/fotos/04.png",
      width: 600,
      height: 450,
      alt: "Bakstenen woonhuis met luiken, een gele omlijsting rond de deur en een rieten of pannendak.",
      kind: "Buitenzijde",
      caption: "Woonhuis met baksteen, luiken en een omlijste voordeur.",
    },
    {
      src: "/img/fotos/05.png",
      width: 600,
      height: 338,
      alt: "Baksteengevel met groene luiken, witte kozijnen en een donkere voordeur.",
      kind: "Buitenzijde",
      caption: "Baksteengevel met luiken en een voordeur.",
    },
    {
      src: "/img/fotos/06.png",
      width: 700,
      height: 525,
      alt: "Woonhuis met wit metselwerk, een donkere kap en een vlaggenmast in de tuin.",
      kind: "Buitenzijde",
      caption: "Woonhuis met wit metselwerk en een donkere kap.",
    },
    {
      src: "/img/fotos/07.png",
      width: 600,
      height: 390,
      alt: "Vrijstaand bakstenen huis met een lager bijgebouw op een grasveld.",
      kind: "Buitenzijde",
      caption: "Vrijstaand huis met een lager bijgebouw.",
    },
  ],

  premises: {
    src: "/img/foto02.png",
    width: 965,
    height: 724,
    alt: "Twee witte bedrijfsbussen voor de gevel van het pand van Nijenhuis Schilders.",
    kind: "Buitenzijde",
    caption:
      "Ons pand in Winterswijk. De naam Nijenhuis Schilders staat op de gevel en op de bussen.",
  },

  detail: {
    src: "/img/index2.png",
    width: 300,
    height: 480,
    alt: "Detail van een bakstenen hoekpand met lichte kozijnen, een balkon en een glazen deur.",
    kind: "Buitenzijde",
    caption: "Detail van een hoekpand: kozijnen, balkon en metselwerk.",
  },

  house: {
    src: "/img/foto03.png",
    width: 800,
    height: 600,
    alt: "Woonhuis met wit metselwerk en een donkere kap, gezien vanaf de tuin.",
    kind: "Buitenzijde",
    caption: "Woonhuis met wit metselwerk, gezien vanaf de tuin.",
  },

  particulier: {
    title: "Particulier en VvE",
    text: "Ook voor particulieren zijn wij een adres voor glas- en schilderwerk. Daarnaast zijn wij actief bij verenigingen van eigenaren. Sociëteit Pakhuys Winterswijk staat daarbij genoemd.",
  },

  offerte: {
    title: "Vrijblijvende offerte",
    lede: "U belt of mailt. Meer dan dat vragen wij niet om een offerte te starten. Een doorlooptijd noemen wij hier niet.",
    steps: [
      "U belt 0543-521161 of mailt info@nijenhuis-schilders.nl.",
      "U noemt uw plaats en het soort werk: schilderwerk, beglazing, spuitwerk of een combinatie.",
      "Wij maken een vrijblijvende offerte. Het formulier op deze conceptsite verstuurt niets.",
    ],
  },

  faq: [
    {
      q: "Zijn jullie een opleidingsbedrijf?",
      a: "Ja. Wij zijn een Savantis gecertificeerd opleidingsbedrijf. Leerlingen worden bij Savantis opgeleid tot volwaardig schilders.",
    },
    {
      q: "Welke glassoorten leveren jullie?",
      a: "Isolerende beglazing, enkelvoudig glas, monumentaal glas, brandwerend glas en gelaagd glas. Wij leveren glas in alle soorten en maten.",
    },
    {
      q: "Waar werken jullie?",
      a: "Wij zijn gevestigd in Winterswijk, in de Achterhoek, en werken voor zakelijke opdrachtgevers, particulieren en verenigingen van eigenaren.",
    },
    {
      q: "Werken jullie voor een vereniging van eigenaren?",
      a: "Ja. Wij zijn actief bij verschillende verenigingen van eigenaren. Sociëteit Pakhuys Winterswijk is een van de projecten die wij noemen.",
    },
  ],

  schilderwerk: {
    title: "Schilderwerk bij verbouw, nieuwbouw, renovatie en restauratie",
    lede: "Nijenhuis Schilders is specialist in schilderwerk bij verbouw, nieuwbouw, renovatie en restauratie. Voor kleuradvies en materiaalkeuze bent u bij ons aan het juiste adres. Wij werken uitsluitend met de beste materialen.",
    kinds: ["Verbouw", "Nieuwbouw", "Renovatie", "Restauratie"],
    adviceTitle: "Kleuradvies en materiaalkeuze",
    advice:
      "Voor kleuradvies en materiaalkeuze bent u bij ons aan het juiste adres. Wij werken uitsluitend met de beste materialen.",
    marketsTitle: "Zakelijk, particulier en VvE",
    markets:
      "Bedrijven schakelen ons in voor projectmatig schilderwerk bij verbouwingen en voor regulier onderhoud. Particulieren schakelen ons in voor glas- en schilderwerk. Verenigingen van eigenaren eveneens.",
  },

  beglazing: {
    title: "Beglazingswerk",
    lede: "Nijenhuis Schilders levert glas in alle soorten en maten. Vraag vrijblijvend een offerte aan.",
    types: [
      "Isolerende beglazing",
      "Enkelvoudig glas",
      "Monumentaal glas",
      "Brandwerend glas",
      "Gelaagd glas",
    ],
  },

  spuitwerk: {
    title: "Spuitwerk",
    lede: "Spuitwerk staat op onze lijst, naast schilderwerk en beglazingswerk. Een aparte lijst met spuittechnieken of voorbeelden publiceren wij niet. Belt of mailt u, dan bespreken wij of spuitwerk past bij uw project.",
  },

  about: {
    title: "Over ons",
    lede: "Nijenhuis Schilders in Winterswijk. Al meer dan 135 jaar schilder- en glaswerk, geleid door Frank en Gabi te Brake.",
    teamTitle: "Het team",
    team: "Het team bestaat naast eigenaren Frank en Gabi te Brake uit ervaren schilders die allen beschikken over jarenlange ervaring in het schildersvak.",
    businessTitle: "Zakelijk werk",
    business:
      "Vele bedrijven schakelen Nijenhuis Schilders in voor projectmatig schilderwerk bij verbouwingen en voor regulier onderhoud. Vraag gerust een vrijblijvende offerte aan.",
    privateTitle: "Particulier",
    private:
      "Ook in de particuliere markt is Nijenhuis Schilders een begrip als het gaat om glas- en schilderwerk.",
    vveTitle: "Verenigingen van eigenaren",
    vve: "Wij zijn ook actief bij verschillende verenigingen van eigenaren.",
  },

  form: {
    title: "Formulier",
    notice:
      "Dit formulier hoort bij een concept. Er wordt niets verzonden en niets opgeslagen.",
    after:
      "Er is niets verzonden. Bel of mail voor een vrijblijvende offerte.",
    kinds: [
      "Schilderwerk",
      "Beglazingswerk",
      "Spuitwerk",
      "Combinatie",
      "Weet ik nog niet",
    ],
  },

  privacy: {
    title: "Privacy",
    lede: "Deze pagina hoort bij een conceptwebsite voor Nijenhuis Schilders, gemaakt door Sleads. De pagina's zijn niet bedoeld om geïndexeerd te worden.",
    points: [
      "Het formulier op de contactpagina verstuurt niets. Wat u invult, blijft in uw browser. Wij slaan het niet op en sturen het niet door.",
      "Voor een vrijblijvende offerte belt u 0543-521161 of mailt u info@nijenhuis-schilders.nl.",
      "Een cookieloze teller kan een paginaweergave van dit concept registreren. Wij plaatsen geen advertentiecookies en vragen geen account.",
      "Adres: Europapark 6-P, 7102 AM Winterswijk.",
    ],
  },

  footer: {
    concept: "Concept door Sleads",
    noindex: "Concept door Sleads. Deze conceptwebsite wordt niet geïndexeerd.",
  },
} as const;

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  kind: string;
  caption: string;
};
