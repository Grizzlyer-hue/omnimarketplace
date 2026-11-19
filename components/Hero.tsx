import { WA_GENERIC } from "@/lib/whatsapp";
import { MessageCircle } from "lucide-react";
import MapsMockup from "./MapsMockup";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden text-white"
      style={{ background: "linear-gradient(180deg, #0B4F8A 0%, #062E54 100%)" }}
    >
      <div className="container-x grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-10 lg:py-28">
        <div>
          <p className="mb-5 inline-block border-l-2 border-gold pl-3 font-display text-[13px] font-bold uppercase tracking-[0.14em] text-white/80">
            Google Meu Negócio · Landing Pages · Domínio e Hospedagem
          </p>
          <h1 className="font-display text-[2.35rem] font-extrabold leading-[1.06] !text-white sm:text-5xl lg:text-[3.5rem]">
            Google Meu Negócio e site rápido para a sua empresa aparecer primeiro no Google.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/85">
            Configuramos seu perfil no Google Maps para ranquear na sua região e
            colocamos no ar um site rápido, seguro e com o seu domínio. Você
            recebe contatos pelo WhatsApp, e a parte técnica fica com a gente.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href={WA_GENERIC} target="_blank" rel="noopener noreferrer" className="btn-gold">
              <MessageCircle size={18} aria-hidden="true" /> Falar no WhatsApp
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-white/10"
            >
              Ver Serviços
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3 pr-16 text-sm text-white/80 sm:pr-0">
            <span className="inline-flex gap-0.5" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#F5B400">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
                </svg>
              ))}
            </span>
            <span>Diagnóstico gratuito e atendimento direto, sem call center.</span>
          </div>
        </div>

        <MapsMockup />
      </div>
    </section>
  );
}
