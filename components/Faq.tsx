import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Quanto tempo leva para ficar pronto?",
    a: "Uma landing page costuma ficar pronta em poucos dias úteis, depois que recebemos textos e imagens. O perfil no Google Meu Negócio é configurado rápido, mas a verificação depende do Google e pode levar de alguns dias a algumas semanas. Informamos o prazo exato no diagnóstico.",
  },
  {
    q: "Preciso ter CNPJ para ter perfil no Google Meu Negócio?",
    a: "Não necessariamente. Profissionais autônomos e MEIs também podem ter perfil, desde que o negócio exista de fato e atenda as diretrizes do Google (endereço ou área de atendimento real). No diagnóstico vemos o seu caso.",
  },
  {
    q: "O domínio e o perfil ficam no meu nome?",
    a: "Sim. O domínio é registrado em nome do seu negócio e o perfil do Google fica na sua conta, com você como proprietário. Você recebe todos os acessos. Se um dia quiser mudar de fornecedor, nada fica preso.",
  },
  {
    q: "É mensalidade ou pagamento único?",
    a: "Depende do serviço. Criação de landing page e configuração do perfil são projetos com valor fechado. Domínio e hospedagem têm renovação anual ou mensal, pois são custos recorrentes de infraestrutura. Você vê tudo no orçamento, antes de contratar.",
  },
  {
    q: "Vocês garantem o 1º lugar no Google Maps?",
    a: "Ninguém pode prometer isso, porque o Google decide o ranking e a concorrência muda. O que fazemos é configurar tudo o que está ao seu alcance para subir: verificação, categorias, fotos, catálogo, avaliações e site. Mostramos onde você está hoje e o que mudou depois.",
  },
];

export default function Faq() {
  return (
    <section id="duvidas" className="bg-white py-20 sm:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div>
          <p className="eyebrow">Dúvidas</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-[2.5rem]">
            O que pequenos empresários mais perguntam.
          </h2>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((f, i) => (
            <details key={f.q} className="group" {...(i === 0 ? { open: true } : {})}>
              <summary className="flex cursor-pointer items-center justify-between gap-6 py-5 font-display text-[17px] font-bold text-ink">
                {f.q}
                <Plus size={20} className="faq-icon shrink-0 text-brand transition-transform" aria-hidden="true" />
              </summary>
              <p className="pb-6 pr-10 text-base leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
