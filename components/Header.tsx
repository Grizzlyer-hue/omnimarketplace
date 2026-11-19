import Link from "next/link";
import { ChevronDown, Menu } from "lucide-react";
import { SERVICE_PATHS, type ServiceId } from "@/lib/site";
import { WA_GENERIC } from "@/lib/whatsapp";

const SHORT: Record<ServiceId, string> = {
  gmn: "Google Meu Negócio",
  landing: "Landing Pages",
  dominio: "Domínio e Hospedagem",
};

const serviceLinks = (Object.keys(SERVICE_PATHS) as ServiceId[]).map((id) => ({
  href: SERVICE_PATHS[id],
  label: SHORT[id],
}));

const otherLinks = [
  { href: "/#como-funciona", label: "Como Funciona" },
  { href: "/#duvidas", label: "Dúvidas" },
];

const linkCls = "text-[15px] font-medium text-body transition hover:text-brand";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/95 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between gap-3">
        <Link href="/" className="flex items-baseline gap-2" aria-label="Omnimarketplace Webservices">
          <span className="font-display text-xl font-extrabold text-ink" style={{ letterSpacing: "-0.02em" }}>
            Omni<span className="text-navy">marketplace</span>
          </span>
          <span className="hidden text-[11px] font-semibold uppercase tracking-[0.16em] text-body sm:inline">
            Webservices
          </span>
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          <div className="group relative">
            <Link href="/#servicos" className={`${linkCls} inline-flex items-center gap-1 py-5`}>
              Serviços
              <ChevronDown size={15} aria-hidden="true" />
            </Link>
            <ul className="invisible absolute left-0 top-full z-50 w-64 rounded-xl border border-slate-200 bg-white p-2 opacity-0 shadow-card transition group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-mist hover:text-brand"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {otherLinks.map((l) => (
            <Link key={l.href} href={l.href} className={linkCls}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={WA_GENERIC} target="_blank" rel="noopener noreferrer" className="btn-gold !px-4 !py-2.5 text-sm">
            <span className="sm:hidden">Orçamento</span>
            <span className="hidden sm:inline">Solicitar Orçamento</span>
          </a>

          {/* Mobile (sem JavaScript) */}
          <details className="group relative md:hidden">
            <summary
              className="grid h-10 w-10 cursor-pointer place-items-center rounded-lg border border-slate-300 text-ink"
              aria-label="Abrir menu"
            >
              <Menu size={20} aria-hidden="true" />
            </summary>
            <nav
              aria-label="Menu móvel"
              className="absolute right-0 top-12 w-64 rounded-xl border border-slate-200 bg-white p-2 shadow-card"
            >
              <p className="px-3 pb-1 pt-2 text-xs font-semibold uppercase tracking-wider text-body">Serviços</p>
              <ul>
                {serviceLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-mist">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="my-1 border-t border-slate-200" />
              <ul>
                {otherLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="block rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-mist">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
