import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed, IBM_Plex_Serif } from "next/font/google";
import type { CSSProperties } from "react";
import "./globals.css";
import { content } from "@/content";
import SleadsBadge from "@/components/SleadsBadge";
import PageShell from "@/components/PageShell";

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal"],
  display: "swap",
  variable: "--font-plex-sans",
});

const plexCondensed = IBM_Plex_Sans_Condensed({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal"],
  display: "swap",
  variable: "--font-plex-condensed",
});

const plexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "600"],
  style: ["normal"],
  display: "swap",
  variable: "--font-plex-serif",
});

export const metadata: Metadata = {
  title: {
    default: content.seo.title,
    template: `%s | ${content.company.name}`,
  },
  description: content.seo.description,
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: { index: false, follow: false, noimageindex: true },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: content.colors.foreground,
};

const TRACKER_SRC = "https://sleads-demo-analytics.vercel.app/t.js";
const TRACKER_ENDPOINT = "https://basic-tiger-117.convex.site/track";

const c = content.colors;
const themeVars = {
  "--brand": c.primary,
  "--brand-fg": c.primaryForeground,
  "--accent": c.accent,
  "--accent-fg": c.accentForeground,
  "--background": c.background,
  "--foreground": c.foreground,
  "--muted": c.muted,
  "--hairline": c.hairline,
  "--soft": c.soft,
  "--card": c.card,
} as CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={content.seo.lang}
      style={themeVars}
      className={`${plexSans.variable} ${plexCondensed.variable} ${plexSerif.variable} h-full antialiased`}
    >
      <head>
        <script async src={TRACKER_SRC} data-demo={content.slug} data-endpoint={TRACKER_ENDPOINT} />
      </head>
      <body className="min-h-full bg-background pb-24 font-sans text-foreground lg:pb-0">
        <PageShell>{children}</PageShell>
        <SleadsBadge />
      </body>
    </html>
  );
}
