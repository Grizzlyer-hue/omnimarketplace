import { ArrowUpRight, Gauge, Search, ShieldCheck } from "lucide-react";

/**
 * EDITE ESTA LISTA com seus projetos reais (nome, URL e descrição).
 * Se `href` ficar vazio, o card é exibido sem link.
 */
const projects: {
  name: string;
  type: string;
  desc: string;
  stack: string[];
  href?: string;
}[] = [
  {
    name: "Portal de análise técnica",
    type: "Conteúdo + SEO",
    desc: "Portal com muitas páginas de análise, organizado por URLs limpas, dados estruturados e metadados por página para indexação.",
    stack: ["Next.js", "SEO técnico", "JSON-LD"],
    // href: "https://seu-projeto.com.br",
  },
  {
    name: "Aplicações web rápidas",
    type: "Performance",
    desc: "Aplicações e páginas construídas com renderização no servidor, imagens otimizadas e pouco JavaScript no navegador.",
    stack: ["Next.js", "Vercel", "Tailwind"],
  },
];

export default function Projects() {
  return (
    <section className="bg-mist py-20 sm:py-24">
      <div className="container-x grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="eyebrow">Capacidade técnica</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-[2.25rem]">
            A mesma estrutura que usamos nos nossos projetos vai para o seu.
          </h2>
          <p className="mt-4 text-base leading-relaxed">
            Antes de atender clientes, construímos e mantemos nossos próprios
            portais e aplicações. É dali que vêm as práticas de velocidade e
            indexação que aplicamos no seu site.
          </p>
          <ul className="mt-6 space-y-3 text-[15px] text-ink">
            <li className="flex items-center gap-3"><Gauge size={18} className="text-brand" aria-hidden="true" /> Foco em Core Web Vitals</li>
            <li className="flex items-center gap-3"><Search size={18} className="text-brand" aria-hidden="true" /> SEO técnico desde a primeira linha</li>
            <li className="flex items-center gap-3"><ShieldCheck size={18} className="text-brand" aria-hidden="true" /> HTTPS e boas práticas de segurança</li>
          </ul>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((p) => {
            const body = (
              <>
                <div className="flex items-center justify-between">
                  <span className="text-[12px] font-semibold uppercase tracking-wider text-brand">{p.type}</span>
                  {p.href && <ArrowUpRight size={16} className="text-brand" aria-hidden="true" />}
                </div>
                <h3 className="mt-3 font-display text-lg font-extrabold">{p.name}</h3>
                <p className="mt-2 text-[15px] leading-relaxed">{p.desc}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <li key={s} className="rounded-md bg-mist px-2.5 py-1 text-xs font-semibold text-ink">{s}</li>
                  ))}
                </ul>
              </>
            );
            const cls = "block rounded-xl bg-white p-6 ring-1 ring-slate-200";
            return p.href ? (
              <a key={p.name} href={p.href} target="_blank" rel="noopener noreferrer" className={`${cls} transition hover:ring-brand`}>
                {body}
              </a>
            ) : (
              <div key={p.name} className={cls}>{body}</div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
