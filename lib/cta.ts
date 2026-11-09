/** Leidt de data-cta-waarde af van een href (Sleads demo-analytics). */
export function ctaType(href: string): "bellen" | "offerte" {
  if (href.startsWith("tel:")) return "bellen";
  return "offerte";
}
