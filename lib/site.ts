// Número único do WhatsApp comercial (formato internacional, só dígitos).
// Defina NEXT_PUBLIC_WHATSAPP_NUMBER na Vercel para trocar sem mexer no código.
const WHATSAPP_NUMBER =
  (process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5524920004665").replace(/\D/g, "");

export const SITE = {
  name: "Omnimarketplace",
  tagline: "Webservices",
  domain: "omnimarketplace.net",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://omnimarketplace.net",
  phoneDisplay: "+55 (24) 92000-4665",
  phoneE164: `+${WHATSAPP_NUMBER}`,
  whatsappNumber: WHATSAPP_NUMBER,
} as const;

export type ServiceId = "gmn" | "landing" | "dominio";

export const SERVICES: Record<
  ServiceId,
  { label: string; waMessage: string }
> = {
  gmn: {
    label: "Google Meu Negócio & SEO Local",
    waMessage:
      "Olá! Tenho interesse no serviço de Google Meu Negócio da Omnimarketplace.",
  },
  landing: {
    label: "Criação de Landing Page",
    waMessage:
      "Olá! Tenho interesse no serviço de Criação de Landing Page da Omnimarketplace.",
  },
  dominio: {
    label: "Registro de Domínio e Hospedagem",
    waMessage:
      "Olá! Tenho interesse no serviço de Domínio e Hospedagem da Omnimarketplace.",
  },
};
