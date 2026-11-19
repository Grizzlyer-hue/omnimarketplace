import { Plus } from "lucide-react";
import type { FaqItem } from "@/lib/faq";

export default function Faq({
  items,
  title = "O que pequenos empresários mais perguntam.",
  id = "duvidas",
}: {
  items: FaqItem[];
  title?: string;
  id?: string;
}) {
  return (
    <section id={id} className="bg-white py-20 sm:py-28">
      <div className="container-x grid gap-10 lg:grid-cols-[0.7fr_1.3fr] lg:gap-16">
        <div>
          <p className="eyebrow">Dúvidas</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight sm:text-[2.5rem]">
            {title}
          </h2>
        </div>

        <div className="divide-y divide-slate-200 border-y border-slate-200">
          {items.map((f, i) => (
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
