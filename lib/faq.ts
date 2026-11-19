export type FaqItem = { q: string; a: string };

/** Schema.org FAQPage a partir da mesma lista exibida na tela. */
export function faqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export const HOME_FAQS: FaqItem[] = [
  {
    q: "Quanto tempo leva para ficar pronto?",
    a: "Uma landing page costuma ficar pronta em poucos dias úteis, depois que recebemos textos e imagens. O perfil no Google Meu Negócio é configurado rápido, mas a verificação depende do Google e pode levar de alguns dias a algumas semanas. Informamos o prazo exato no diagnóstico.",
  },
  {
    q: "O Google Meu Negócio precisa de CNPJ?",
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
