import { SERVICES, SITE, type ServiceId } from "./site";

export function whatsappUrl(message: string): string {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function whatsappForService(id: ServiceId): string {
  return whatsappUrl(SERVICES[id].waMessage);
}

export const WA_GENERIC = whatsappUrl(
  "Olá! Vi o site da Omnimarketplace e gostaria de solicitar um orçamento.",
);

export function whatsappFromLead(data: {
  nome: string;
  whatsapp: string;
  servico: ServiceId;
}): string {
  const msg = [
    "Olá! Vi o site da Omnimarketplace e gostaria de solicitar um orçamento.",
    "",
    `*Nome:* ${data.nome}`,
    `*WhatsApp:* ${data.whatsapp}`,
    `*Serviço:* ${SERVICES[data.servico].label}`,
  ].join("\n");
  return whatsappUrl(msg);
}
