import Link from "next/link";
import { ArrowRight, Check, MessageCircle } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import Faq from "./Faq";
import FinalCta from "./FinalCta";
import JsonLd from "./JsonLd";
import WhatsAppFloat from "./WhatsAppFloat";
import { SERVICE_PAGES, type ServicePageData } from "@/lib/servicePages";
import { faqSchema } from "@/lib/faq";
import { SERVICES, SERVICE_PATHS, SITE, type ServiceId } from "@/lib/site";
import { whatsappForService } from "@/lib/whatsapp";

function schemaFor(d: ServicePageData) {
  const url = `${SITE.url}${d.path}`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: d.schemaName,
        description: d.metaDescription,
        url,
        serviceType: d.badge,
        areaServed: { "@type": "Country", name: "Brasil" },
        provider: { "@id": `${SITE.url}/#organization` },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: SITE.url },
          { "@type": "ListItem", position: 2, name: d.badge, item: url },
        ],
      },
    ],
  };
}

export default function ServicePage({ data }: { data: ServicePageData }) {
  const others = (Object.keys(SERVICE_PAGES) as ServiceId[]).filter(
    (id) => id !== data.serviceId,
  );

  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section
          className="text-white"
          style={{ background: "linear-gradient(180deg, #0B4F8A 0%, #062E54 100%)" }}
        >
          <div className="container-x py-14 sm:py-20 lg:py-24">
            <nav aria-label="Trilha" className="mb-6 text-sm text-white/70">
              <Link href="/" className="hover:text-white hover:underline">Início</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <span className="text-white">{data.badge}</span>
            </nav>
            <p className="mb-5 inline-block border-l-2 border-gold pl-3 font-display text-[13px] font-bold uppercase tracking-[0.14em] text-white/80">
              {data.badge}
            </p>
            <h1 className="max-w-3xl font-display text-[2.1rem] font-extrabold leading-[1.1] !text-white sm:text-5xl">
              {data.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">{data.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappForService(data.serviceId)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
              >
                <MessageCircle size={18} aria-hidden="true" /> Pedir orçamento no WhatsApp
              </a>
              <Link
                href="/#servicos"
                className="inline-flex items-center justify-center rounded-lg border border-white/40 px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-white/10"
              >
                Ver todos os serviços
              </Link>
            </div>
          </div>
        </section>

        {/* Entregáveis */}
        <section className="bg-mist py-16 sm:py-20">
          <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
            <div>
              <p className="eyebrow">O que está incluído</p>
              <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-[2.25rem]">
                Entregáveis que você pode conferir.
              </h2>
            </div>
            <ul className="space-y-3 rounded-xl bg-white p-6 ring-1 ring-slate-200 sm:p-8">
              {data.deliverables.map((t) => (
                <li key={t} className="flex gap-3 text-[15px] leading-snug text-ink">
                  <Check size={18} strokeWidth={3} className="mt-0.5 shrink-0 text-wa" aria-hidden="true" />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Conteúdo */}
        <section className="bg-white py-16 sm:py-24">
          <div className="container-x max-w-3xl space-y-12">
            {data.sections.map((s) => (
              <article key={s.h2}>
                <h2 className="font-display text-2xl font-extrabold leading-tight sm:text-[1.75rem]">
                  {s.h2}
                </h2>
                {s.paragraphs.map((p) => (
                  <p key={p} className="mt-4 text-[17px] leading-relaxed">{p}</p>
                ))}
              </article>
            ))}
          </div>
        </section>

        <Faq items={data.faqs} title={data.faqTitle} id="duvidas" />

        {/* Outros serviços */}
        <section className="bg-mist py-14">
          <div className="container-x">
            <h2 className="font-display text-xl font-extrabold">Outros serviços</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {others.map((id) => (
                <li key={id}>
                  <Link
                    href={SERVICE_PATHS[id]}
                    className="flex items-center justify-between rounded-xl bg-white p-5 ring-1 ring-slate-200 transition hover:ring-brand"
                  >
                    <span className="font-display font-bold text-ink">{SERVICES[id].label}</span>
                    <ArrowRight size={18} className="text-brand" aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
      <JsonLd data={schemaFor(data)} />
      <JsonLd data={faqSchema(data.faqs)} />
    </>
  );
}
