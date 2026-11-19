import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { SITE } from "@/lib/site";
import "./globals.css";

// Fontes auto-hospedadas (sem requisição externa em runtime → melhor PageSpeed)
const jakarta = localFont({
  src: [
    { path: "./fonts/plus-jakarta-sans-latin-700-normal.woff2", weight: "700", style: "normal" },
    { path: "./fonts/plus-jakarta-sans-latin-800-normal.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = localFont({
  src: [
    { path: "./fonts/inter-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/inter-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "./fonts/inter-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-inter",
  display: "swap",
});

const title =
  "Google Meu Negócio, Landing Pages e Hospedagem | Omnimarketplace";
const description =
  "Coloque sua empresa no topo do Google Maps e tenha um site rápido, com domínio e SSL. Google Meu Negócio & SEO Local, Landing Pages e hospedagem. Diagnóstico gratuito.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title,
  description,
  keywords: [
    "Google Meu Negócio",
    "SEO local",
    "Google Maps",
    "criação de landing page",
    "registro de domínio",
    "hospedagem de sites",
    "domínio .com.br",
    "certificado SSL",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SITE.url,
    siteName: SITE.name,
    title,
    description,
  },
  twitter: { card: "summary_large_image", title, description },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  authors: [{ name: SITE.name }],
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#0B4F8A",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  telephone: SITE.phoneE164,
  description,
  areaServed: { "@type": "Country", name: "Brasil" },
  availableLanguage: "pt-BR",
  priceRange: "$$",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: SITE.phoneE164,
    contactType: "sales",
    availableLanguage: "Portuguese",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Serviços Omnimarketplace",
    itemListElement: [
      "Google Meu Negócio & SEO Local",
      "Criação de Landing Pages de Alta Conversão",
      "Registro de Domínios e Hospedagem Web",
    ].map((name) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name },
    })),
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${inter.variable}`}>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
