import { ArrowUpRight, Check } from "lucide-react";
import { whatsappForService } from "@/lib/whatsapp";
import type { ServiceId } from "@/lib/site";

const services: {
  id: ServiceId;
  n: string;
  title: string;
  lead: string;
  items: string[];
  cta: string;
}[] = [
  {
    id: "gmn",
    n: "01",
    title: "Google Meu Negócio & SEO Local",
    lead: "Seu perfil criado, verificado e otimizado para aparecer nas primeiras posições do Google Maps e nas buscas da sua região.",
    items: [
      "Criação ou reivindicação do perfil existente",
      "Verificação oficial junto ao Google",
      "Categorias principais e secundárias, com palavras-chave",
      "Padronização visual: fotos do local, equipe, produtos e criativos",
      "Catálogo de serviços e produtos preenchido",
      "Estratégia para subir no Maps e nas buscas locais",
    ],
    cta: "Orçamento de Google Meu Negócio",
  },
  {
    id: "landing",
    n: "02",
    title: "Criação de Landing Pages de Alta Conversão",
    lead: "Uma página objetiva, feita para um único fim: transformar o clique do anúncio ou da busca em conversa com você.",
    items: [
      "Desenvolvimento rápido e responsivo (mobile-first)",
      "Copywriting persuasivo, direto e sem enrolação",
      "Botão de WhatsApp com mensagem pré-preenchida",
      "Formulário de contato integrado",
      "Estrutura pronta para SEO e para anúncios",
    ],
    cta: "Orçamento de Landing Page",
  },
  {
    id: "dominio",
    n: "03",
    title: "Registro de Domínios e Hospedagem Web",
    lead: "Seu endereço na internet registrado no seu nome, com tudo configurado e funcionando, sem você abrir um painel técnico.",
    items: [
      "Registro de domínios .com.br, .com e .net",
      "Apontamento de DNS e e-mail do domínio",
      "Certificado SSL de segurança (https)",
      "Hospedagem de alta velocidade e estabilidade",
      "Suporte técnico direto, sem fila",
    ],
    cta: "Orçamento de Domínio e Hospedagem",
  },
];

export default function Services() {
  return (
    <section id="servicos" className="bg-mist py-20 sm:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <p className="eyebrow">Serviços</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-[2.5rem]">
            Três serviços. Cada um com entregáveis que você pode conferir.
          </h2>
        </div>

        <div className="mt-14 divide-y divide-slate-300/70 border-y border-slate-300/70">
          {services.map((s) => (
            <article key={s.id} className="grid gap-8 py-10 lg:grid-cols-[96px_1fr_1.1fr] lg:gap-14 lg:py-14">
              <span className="font-display text-5xl font-extrabold text-brand/90 lg:text-6xl" aria-hidden="true">
                {s.n}
              </span>
              <div>
                <h3 className="font-display text-2xl font-extrabold leading-tight">{s.title}</h3>
                <p className="mt-3 text-base leading-relaxed">{s.lead}</p>
                <a
                  href={whatsappForService(s.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-6 inline-flex items-center gap-1.5 border-b-2 border-brand pb-0.5 text-[15px] font-semibold text-brand"
                >
                  {s.cta}
                  <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                </a>
              </div>
              <ul className="space-y-3 rounded-xl bg-white p-6 ring-1 ring-slate-200">
                {s.items.map((t) => (
                  <li key={t} className="flex gap-3 text-[15px] leading-snug text-ink">
                    <Check size={18} strokeWidth={3} className="mt-0.5 shrink-0 text-wa" aria-hidden="true" />
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
