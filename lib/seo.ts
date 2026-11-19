import type { Metadata } from "next";
import { SITE } from "./site";

export const OG_IMAGE = {
  url: "/og-image-v2.jpg",
  width: 1200,
  height: 896,
  type: "image/jpeg",
  alt: "Omnimarketplace: colocamos sua empresa no mapa do Google. Configuração e otimização do Google Meu Negócio.",
};

/** Metadados de uma página interna (o `title` recebe o sufixo " | Omnimarketplace" do layout). */
export function pageMetadata(opts: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const fullTitle = `${opts.title} | ${SITE.name}`;
  return {
    title: opts.title,
    description: opts.description,
    alternates: { canonical: opts.path },
    openGraph: {
      type: "website",
      locale: "pt_BR",
      url: `${SITE.url}${opts.path}`,
      siteName: SITE.name,
      title: fullTitle,
      description: opts.description,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: opts.description,
      images: [OG_IMAGE.url],
    },
  };
}
