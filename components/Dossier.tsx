import Link from "next/link";

type DossierProps = {
  label: string;
  spine: string;
  href?: string;
  id?: string;
  animate?: boolean;
  tabClassName?: string;
  children: React.ReactNode;
};

export default function Dossier({ label, spine, href, id, animate, tabClassName = "", children }: DossierProps) {
  const tabClass = `relative -mb-px inline-flex min-h-11 items-center border-r border-b-2 border-b-card border-r-hairline bg-card px-4 font-label text-base uppercase tracking-[0.14em] text-foreground ${tabClassName}`;
  return (
    <article id={id} className="flex scroll-mt-32 border border-hairline bg-card">
      <div
        aria-hidden
        className={`w-2 shrink-0 ${animate ? "spine-enter" : ""}`}
        style={{ background: spine }}
      />
      <div className="min-w-0 flex-1">
        <div className="flex items-end overflow-x-auto border-b border-hairline">
          {href ? (
            <Link href={href} className={tabClass}>
              {label}
            </Link>
          ) : (
            <span className={tabClass}>{label}</span>
          )}
        </div>
        <div className="px-4 py-6 sm:px-8 sm:py-8">{children}</div>
      </div>
    </article>
  );
}
