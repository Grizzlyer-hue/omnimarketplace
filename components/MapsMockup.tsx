import { BadgeCheck, Gauge, Globe, Lock, MapPin, Navigation, Phone, Search, Smartphone, Check } from "lucide-react";

function Stars({ size = 14 }: { size?: number }) {
  return (
    <span className="inline-flex gap-0.5" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" fill="#F5B400" aria-hidden="true">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 21 12 17.77 5.82 21 7 14.14l-5-4.87 6.91-1.01L12 2z" />
        </svg>
      ))}
    </span>
  );
}

/** Mockup em HTML/CSS de um perfil otimizado no Google Maps. Dados ilustrativos. */
export default function MapsMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[440px] pb-[120px]" aria-label="Exemplo ilustrativo de perfil no Google Maps" role="img">
      {/* Janela de busca */}
      <div className="overflow-hidden rounded-2xl bg-white shadow-card ring-1 ring-black/5">
        <div className="flex items-center gap-3 border-b border-slate-200 px-4 py-3">
          <span className="font-display text-base font-extrabold tracking-tight">
            <span className="text-[#4285F4]">G</span><span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span><span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span><span className="text-[#EA4335]">e</span>
          </span>
          <div className="flex flex-1 items-center gap-2 rounded-full border border-slate-300 px-3 py-1.5 text-[13px] text-ink">
            <span className="truncate">dentista perto de mim</span>
            <Search size={15} className="ml-auto shrink-0 text-brand" aria-hidden="true" />
          </div>
        </div>

        {/* Mapa em SVG */}
        <div className="relative h-36 bg-[#E8EEF3]">
          <svg viewBox="0 0 440 144" className="absolute inset-0 h-full w-full" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <rect width="440" height="144" fill="#E8EEF3" />
            <path d="M0 100 C80 80 150 130 260 96 S400 70 440 84 V144 H0Z" fill="#CFE3F5" />
            <rect x="300" y="14" width="90" height="46" rx="6" fill="#D5E8D0" />
            <g stroke="#fff" strokeWidth="9" fill="none" strokeLinecap="round">
              <path d="M-10 52 L450 40" />
              <path d="M150 -10 L170 160" />
              <path d="M270 -10 L250 160" />
            </g>
            <g stroke="#F9DC8C" strokeWidth="4" fill="none" strokeLinecap="round">
              <path d="M-10 52 L450 40" opacity=".0" />
            </g>
          </svg>
          <div className="absolute left-[46%] top-[26%] -translate-x-1/2">
            <MapPin size={36} className="fill-[#EA4335] text-white drop-shadow" aria-hidden="true" />
          </div>
          <span className="absolute left-3 top-3 rounded bg-white/95 px-2 py-0.5 text-[11px] font-semibold text-ink shadow-sm">
            1º no Maps
          </span>
        </div>

        {/* Card do perfil */}
        <div className="p-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-display text-[17px] font-bold text-ink">Studio Aurora Odontologia</p>
              <div className="mt-1 flex items-center gap-1.5 text-[13px]">
                <span className="font-semibold text-ink">5,0</span>
                <Stars />
                <span className="text-body">(127)</span>
              </div>
              <p className="mt-1 text-[13px] text-body">Dentista · Aberto · Fecha às 19:00</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-[#DCFCE7] px-2 py-1 text-[11px] font-semibold text-wa">
              <BadgeCheck size={13} aria-hidden="true" /> Verificado
            </span>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 text-[13px] font-semibold">
            <span className="flex items-center justify-center gap-1.5 rounded-full bg-brand py-2 text-white">
              <Navigation size={14} aria-hidden="true" /> Rotas
            </span>
            <span className="flex items-center justify-center gap-1.5 rounded-full border border-slate-300 py-2 text-brand">
              <Phone size={14} aria-hidden="true" /> Ligar
            </span>
            <span className="flex items-center justify-center gap-1.5 rounded-full border border-slate-300 py-2 text-brand">
              <Globe size={14} aria-hidden="true" /> Site
            </span>
          </div>

          <div className="mt-4 grid grid-cols-4 gap-1.5" aria-hidden="true">
            {["#B6D3EE", "#9DC3E6", "#CFE3F5", "#8DB8E0"].map((c) => (
              <div key={c} className="h-12 rounded-md" style={{ background: c }} />
            ))}
          </div>
        </div>
      </div>

      {/* Selo de site rápido */}
      <div className="absolute bottom-0 right-0 w-[78%] rounded-xl bg-white p-4 shadow-card ring-1 ring-black/5 sm:-right-4">
        <div className="mb-2.5 flex items-center justify-between">
          <p className="font-display text-[13px] font-bold text-ink">Checklist técnico</p>
          <span className="font-display text-lg font-extrabold text-wa">98</span>
        </div>
        <ul className="space-y-1.5 text-[12.5px] text-ink">
          {[
            { i: Lock, t: "SSL ativo (https)" },
            { i: Gauge, t: "Carrega em menos de 2 s" },
            { i: Smartphone, t: "Mobile-first" },
            { i: Check, t: "DNS apontado" },
          ].map(({ i: Icon, t }) => (
            <li key={t} className="flex items-center gap-2">
              <span className="grid h-4 w-4 place-items-center rounded-full bg-wa text-white">
                <Check size={11} strokeWidth={3} aria-hidden="true" />
              </span>
              <Icon size={13} className="text-brand" aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
