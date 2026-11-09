import DossierNav from "@/components/DossierNav";
import Footer from "@/components/Footer";
import Masthead from "@/components/Masthead";
import MobileBar from "@/components/MobileBar";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#inhoud"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[80] focus:inline-flex focus:min-h-11 focus:items-center focus:bg-card focus:px-4 focus:text-foreground"
      >
        Ga naar inhoud
      </a>
      <Masthead />
      <div className="lg:grid lg:grid-cols-[15.75rem_minmax(0,1fr)]">
        <DossierNav />
        <div className="min-w-0">
          <main id="inhoud" className="px-4 py-8 sm:px-6 lg:px-10 lg:py-12">
            <div className="mx-auto flex max-w-5xl flex-col gap-16 sm:gap-20">{children}</div>
          </main>
          <Footer />
        </div>
      </div>
      <MobileBar />
    </>
  );
}
