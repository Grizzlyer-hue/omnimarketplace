import { WA_GENERIC } from "@/lib/whatsapp";

const links = [
  { href: "#servicos", label: "Serviços" },
  { href: "#como-funciona", label: "Como Funciona" },
  { href: "#duvidas", label: "Dúvidas" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <a href="#" className="flex items-baseline gap-2" aria-label="Omnimarketplace Webservices">
          <span className="font-display text-xl font-extrabold text-ink" style={{ letterSpacing: "-0.02em" }}>
            Omni<span className="text-navy">marketplace</span>
          </span>
          <span className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-body sm:inline">
            Webservices
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[15px] font-medium text-body transition hover:text-brand">
              {l.label}
            </a>
          ))}
        </nav>

        <a href={WA_GENERIC} target="_blank" rel="noopener noreferrer" className="btn-gold !px-4 !py-2.5 text-sm">
          Solicitar Orçamento
        </a>
      </div>
    </header>
  );
}
