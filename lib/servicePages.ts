import type { FaqItem } from "./faq";
import type { ServiceId } from "./site";

export type ServicePageData = {
  serviceId: ServiceId;
  path: string;
  metaTitle: string; // sem o sufixo da marca (o layout acrescenta)
  metaDescription: string;
  schemaName: string;
  badge: string;
  h1: string;
  intro: string;
  deliverables: string[];
  sections: { h2: string; paragraphs: string[] }[];
  faqTitle: string;
  faqs: FaqItem[];
};

export const SERVICE_PAGES: Record<ServiceId, ServicePageData> = {
  gmn: {
    serviceId: "gmn",
    path: "/google-meu-negocio",
    metaTitle: "Criar e Otimizar Google Meu Negócio",
    metaDescription:
      "Criação, verificação e otimização do perfil no Google Meu Negócio: categorias, fotos, catálogo e SEO local para aparecer no Maps. Diagnóstico gratuito.",
    schemaName: "Criação e otimização do Google Meu Negócio e SEO Local",
    badge: "Google Meu Negócio & SEO Local",
    h1: "Criação e otimização do Google Meu Negócio para sua empresa aparecer no Maps",
    intro:
      "O Google Meu Negócio, hoje também chamado de Perfil da Empresa no Google, é o cartão que aparece quando alguém busca o seu tipo de serviço na região. Criamos ou reivindicamos o perfil, conduzimos a verificação oficial e deixamos tudo preenchido do jeito que o Google e o cliente esperam.",
    deliverables: [
      "Criação ou reivindicação do perfil existente",
      "Verificação oficial junto ao Google",
      "Categorias principais e secundárias, com palavras-chave",
      "Padronização visual: fotos do local, equipe, produtos e criativos",
      "Catálogo de serviços e produtos preenchido",
      "Estratégia para subir no Maps e nas buscas locais",
    ],
    sections: [
      {
        h2: "O que decide a posição no Google Maps",
        paragraphs: [
          "O Google descreve três fatores para o ranking local: relevância (o quanto o perfil corresponde à busca), distância (a proximidade do cliente) e destaque (o quanto o negócio é conhecido e bem avaliado). A distância você não controla. A relevância e boa parte do destaque, sim.",
          "É nisso que o trabalho se concentra: categoria certa, informações completas e consistentes, fotos, catálogo e avaliações.",
        ],
      },
      {
        h2: "Verificação oficial do perfil",
        paragraphs: [
          "Para aparecer com força, o perfil precisa ser verificado pelo Google. O método (vídeo, ligação, código por mensagem ou cartão postal, entre outros) depende do tipo de negócio e é definido pelo próprio Google. Conduzimos o processo e acompanhamos até o perfil ficar ativo.",
          "O prazo depende do método liberado para o seu negócio. Informamos a expectativa no diagnóstico.",
        ],
      },
      {
        h2: "Categorias, palavras-chave e catálogo de serviços",
        paragraphs: [
          "A categoria principal pesa muito na relevância. Escolhemos a principal e as secundárias a partir do que os seus clientes realmente buscam, e escrevemos a descrição e o catálogo usando esses termos de forma natural, sem encher o texto de palavras-chave.",
        ],
      },
      {
        h2: "Fotos e padrão visual",
        paragraphs: [
          "Perfis com fotos reais do local, da equipe e dos produtos passam mais confiança. Organizamos o padrão visual (logo, capa, fotos e criativos) e a ordem em que aparecem no perfil.",
        ],
      },
      {
        h2: "Avaliações e contato por WhatsApp",
        paragraphs: [
          "Orientamos como pedir avaliações dentro das regras do Google e deixamos o contato por WhatsApp fácil de achar, no perfil e no site.",
        ],
      },
    ],
    faqTitle: "Dúvidas sobre o Google Meu Negócio.",
    faqs: [
      {
        q: "O Google Meu Negócio precisa de CNPJ?",
        a: "Não necessariamente. Profissionais autônomos e MEIs também podem ter perfil, desde que o negócio exista de fato e atenda as diretrizes do Google, com endereço ou área de atendimento real. No diagnóstico vemos o seu caso.",
      },
      {
        q: "O Google Meu Negócio é pago?",
        a: "Criar e manter o perfil no Google é gratuito. O que você contrata conosco é o trabalho de criação, verificação e otimização.",
      },
      {
        q: "Quanto tempo leva a verificação do perfil?",
        a: "Depende do método de verificação que o Google liberar para o seu negócio e pode levar de alguns dias a algumas semanas. Informamos o prazo esperado no diagnóstico.",
      },
      {
        q: "Vocês garantem o 1º lugar no Google Maps?",
        a: "Ninguém pode prometer isso, porque o Google decide o ranking e a concorrência muda. Configuramos tudo o que está ao seu alcance para subir e mostramos onde você está hoje e o que mudou depois.",
      },
      {
        q: "O perfil fica na minha conta?",
        a: "Sim. Você é o proprietário do perfil e recebe todos os acessos.",
      },
    ],
  },

  landing: {
    serviceId: "landing",
    path: "/criacao-de-landing-page",
    metaTitle: "Criação de Landing Page de Alta Conversão",
    metaDescription:
      "Criação de landing page rápida, mobile-first e com texto direto, integrada ao WhatsApp e a formulário, para transformar cliques em contatos.",
    schemaName: "Criação de Landing Pages de Alta Conversão",
    badge: "Landing Pages de Alta Conversão",
    h1: "Criação de landing page de alta conversão, integrada ao seu WhatsApp",
    intro:
      "Landing page é uma página com um único objetivo: levar o visitante a falar com você. Fazemos a página, o texto e a integração com WhatsApp e formulário, pronta para receber cliques de anúncios ou de busca orgânica.",
    deliverables: [
      "Desenvolvimento rápido e responsivo (mobile-first)",
      "Copywriting persuasivo, direto e sem enrolação",
      "Botão de WhatsApp com mensagem pré-preenchida",
      "Formulário de contato integrado",
      "Estrutura pronta para SEO e para anúncios",
    ],
    sections: [
      {
        h2: "Landing page ou site institucional?",
        paragraphs: [
          "Um site institucional apresenta a empresa inteira, em várias páginas. A landing page é enxuta e focada em uma oferta e em uma ação. Para quem quer receber contatos, ela costuma ser o ponto de partida mais direto.",
        ],
      },
      {
        h2: "O que faz uma landing page converter",
        paragraphs: [
          "Um título que diz o que você faz e para quem, prova de credibilidade que você realmente tem, uma ação clara (WhatsApp ou formulário) e carregamento rápido no celular. Cortamos o que distrai.",
        ],
      },
      {
        h2: "Velocidade e mobile-first",
        paragraphs: [
          "Grande parte das buscas locais acontece no celular. Construímos pensando primeiro na tela pequena e cuidamos da velocidade desde o início, porque página lenta perde o visitante antes de ele ler.",
        ],
      },
      {
        h2: "Integração com WhatsApp e formulário",
        paragraphs: [
          "O botão abre o WhatsApp com uma mensagem pré-preenchida, e o formulário monta o pedido com o nome e o serviço escolhido. Você recebe o contato já com contexto.",
        ],
      },
      {
        h2: "Preparada para SEO e para anúncios",
        paragraphs: [
          "Metadados, hierarquia de títulos, dados estruturados e endereços limpos, para que a página possa ser indexada pelo Google e usada como destino de campanhas.",
        ],
      },
    ],
    faqTitle: "Dúvidas sobre landing pages.",
    faqs: [
      {
        q: "Qual a diferença entre site e landing page?",
        a: "O site apresenta a empresa em várias páginas. A landing page tem uma só oferta e uma só ação, como chamar no WhatsApp, e por isso costuma converter melhor visitas vindas de anúncios e de busca.",
      },
      {
        q: "Quanto custa uma landing page?",
        a: "O valor depende do que a página precisa ter. Você recebe um orçamento fechado, com o que está incluído descrito, antes de contratar.",
      },
      {
        q: "Quanto tempo leva para ficar pronta?",
        a: "Costuma levar poucos dias úteis depois que recebemos textos e imagens. Informamos o prazo exato no orçamento.",
      },
      {
        q: "A landing page serve para anunciar no Google Ads?",
        a: "Sim, ela pode ser usada como página de destino de campanhas. A gestão das campanhas e do orçamento de anúncios fica com você ou com o seu gestor de tráfego; nós entregamos a página.",
      },
      {
        q: "O domínio da landing page fica no meu nome?",
        a: "Sim. O domínio é registrado em nome do seu negócio e você recebe todos os acessos.",
      },
    ],
  },

  dominio: {
    serviceId: "dominio",
    path: "/registro-de-dominio-e-hospedagem",
    metaTitle: "Registro de Domínio .com.br e Hospedagem",
    metaDescription:
      "Registro de domínio (.com.br, .com, .net), DNS, certificado SSL e hospedagem de alta velocidade, configurados por nós. Domínio no seu nome. Peça orçamento.",
    schemaName: "Registro de Domínios e Hospedagem Web",
    badge: "Domínio e Hospedagem",
    h1: "Registro de domínio e hospedagem de site, configurados para você",
    intro:
      "Registramos o domínio no seu nome, configuramos o DNS e o certificado SSL e colocamos o site em uma hospedagem rápida e estável. Você não precisa abrir painel técnico.",
    deliverables: [
      "Registro de domínios .com.br, .com e .net",
      "Apontamento de DNS e e-mail do domínio",
      "Certificado SSL de segurança (https)",
      "Hospedagem de alta velocidade e estabilidade",
      "Suporte técnico direto, sem fila",
    ],
    sections: [
      {
        h2: "Escolha e registro do domínio",
        paragraphs: [
          "O .com.br é o mais associado a empresas brasileiras. O .com e o .net atendem quem quer um endereço mais amplo ou já usa a marca nessas extensões. Ajudamos a escolher um nome curto, fácil de falar ao telefone e de digitar, e conferimos a disponibilidade.",
          "Domínios .br exigem CPF ou CNPJ do titular. Confirmamos qual extensão se aplica ao seu caso antes de registrar.",
        ],
      },
      {
        h2: "DNS e e-mail do domínio",
        paragraphs: [
          "O DNS é o que liga o seu endereço ao servidor onde o site está. Configuramos os apontamentos do site e, se você quiser, do e-mail profissional no seu domínio.",
        ],
      },
      {
        h2: "Certificado SSL (https)",
        paragraphs: [
          "O SSL criptografa a conexão e aparece como cadeado no navegador. Sem ele, o navegador avisa que o site não é seguro. Deixamos o certificado ativo e cuidamos da renovação.",
        ],
      },
      {
        h2: "Hospedagem rápida e estável",
        paragraphs: [
          "Hospedagem é o lugar onde o site fica no ar. Escolhemos uma infraestrutura adequada ao tamanho do projeto e conferimos velocidade e disponibilidade depois de publicar.",
        ],
      },
      {
        h2: "Domínio no seu nome",
        paragraphs: [
          "O domínio é registrado em nome do seu negócio e você recebe os acessos. Se um dia quiser trocar de fornecedor, o domínio vai junto.",
        ],
      },
    ],
    faqTitle: "Dúvidas sobre domínio e hospedagem.",
    faqs: [
      {
        q: "Preciso de CNPJ para registrar um domínio .com.br?",
        a: "Domínios .br exigem CPF ou CNPJ do titular, e algumas extensões .br são restritas a pessoas jurídicas. Confirmamos qual se aplica ao seu caso antes de registrar.",
      },
      {
        q: "O domínio fica no meu nome?",
        a: "Sim. O domínio é registrado em nome do seu negócio e você recebe todos os acessos.",
      },
      {
        q: "Domínio e hospedagem são mensalidade ou pagamento único?",
        a: "O registro do domínio costuma ser anual, e a hospedagem, anual ou mensal, porque são custos recorrentes de infraestrutura. Tudo aparece no orçamento antes de contratar.",
      },
      {
        q: "O que é DNS?",
        a: "É o sistema que liga o seu endereço (por exemplo, suaempresa.com.br) ao servidor onde o site está hospedado. Configuramos isso por você.",
      },
      {
        q: "Vocês configuram o e-mail com o meu domínio?",
        a: "Sim, se for do seu interesse. Confirmamos no orçamento como o e-mail do domínio será feito.",
      },
    ],
  },
};
