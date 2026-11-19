import { SITE } from "@/lib/site";
import { WA_GENERIC } from "@/lib/whatsapp";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#041F3A] py-10 text-sm text-white/70">
      <div className="container-x flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-lg font-extrabold text-white" style={{ letterSpacing: "-0.02em" }}>
            {SITE.name} <span className="text-xs font-semibold uppercase tracking-[0.16em] text-white/60">Webservices</span>
          </p>
          <p className="mt-1">{SITE.domain}</p>
        </div>
        <div className="sm:text-right">
          <a href={WA_GENERIC} target="_blank" rel="noopener noreferrer" className="font-semibold text-white hover:underline">
            WhatsApp {SITE.phoneDisplay}
          </a>
          <p className="mt-1">© {new Date().getFullYear()} {SITE.name}. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
