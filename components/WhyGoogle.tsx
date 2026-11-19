import { Check, X } from "lucide-react";

const bad = [
  "Perfil criado às pressas, sem verificação oficial",
  "Categoria errada e sem palavras-chave da sua região",
  "Fotos de celular, sem padrão, ou nenhuma foto",
  "Sem catálogo de serviços e sem link para WhatsApp",
  "Site lento, sem https, que o cliente abandona em segundos",
  "Domínio no nome de terceiros, sem acesso seu",
];

const good = [
  "Perfil reivindicado e verificado pelo Google",
  "Categorias e palavras-chave escolhidas pela busca real",
  "Fotos do local, equipe e produtos com padrão visual",
  "Catálogo de serviços completo e botão direto de contato",
  "Página mobile-first, com SSL, carregando em menos de 2 s",
  "Domínio registrado no seu nome, com DNS configurado",
];

export default function WhyGoogle() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow">Por que estar no Google do jeito certo</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-[2.5rem]">
            Quem pesquisa já quer comprar. Só liga para quem aparece.
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed">
            Na busca local, o cliente compara três ou quatro perfis e liga para
            o que passa mais confiança. Um perfil incompleto perde o contato
            antes mesmo de ele chegar ao seu site.
          </p>
        </div>

        <div className="grid overflow-hidden rounded-2xl border border-slate-200 sm:grid-cols-2">
          <div className="bg-mist p-6 sm:p-7">
            <p className="font-display text-sm font-bold uppercase tracking-wider text-body">Perfil amador invisível</p>
            <ul className="mt-5 space-y-4">
              {bad.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] leading-snug">
                  <X size={18} className="mt-0.5 shrink-0 text-[#DC2626]" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="border-t-4 border-navy bg-white p-6 sm:border-l sm:border-t-0 sm:p-7">
            <p className="font-display text-sm font-bold uppercase tracking-wider text-navy">Estrutura profissional Omnimarketplace</p>
            <ul className="mt-5 space-y-4">
              {good.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] leading-snug text-ink">
                  <Check size={18} strokeWidth={3} className="mt-0.5 shrink-0 text-wa" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
