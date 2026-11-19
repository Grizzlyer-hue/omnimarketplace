"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";
import { SERVICES, type ServiceId } from "@/lib/site";
import { whatsappFromLead } from "@/lib/whatsapp";

export default function LeadForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  /** Envia o lead ao backend (Supabase em app/api/leads/route.ts). Nunca bloqueia o WhatsApp. */
  async function saveLead(payload: { nome: string; whatsapp: string; servico: ServiceId }) {
    try {
      await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        keepalive: true,
      });
    } catch {
      /* falha silenciosa: o contato segue pelo WhatsApp */
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const nome = String(fd.get("nome") ?? "").trim();
    const whatsapp = String(fd.get("whatsapp") ?? "").trim();
    const servico = String(fd.get("servico") ?? "") as ServiceId;

    const next: Record<string, string> = {};
    if (nome.length < 2) next.nome = "Informe seu nome.";
    if (whatsapp.replace(/\D/g, "").length < 10) next.whatsapp = "Informe um WhatsApp com DDD.";
    if (!(servico in SERVICES)) next.servico = "Escolha um serviço.";
    setErrors(next);
    if (Object.keys(next).length) return;

    const data = { nome, whatsapp, servico };
    // Abre o WhatsApp de forma síncrona (evita bloqueio de pop-up) e salva o lead em paralelo.
    window.open(whatsappFromLead(data), "_blank", "noopener,noreferrer");
    void saveLead(data);
  }

  const field =
    "mt-1.5 w-full rounded-lg border border-slate-300 bg-white px-3.5 py-3 text-[15px] text-ink outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/30";

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl bg-white p-6 shadow-card sm:p-8">
      <div className="space-y-5">
        <div>
          <label htmlFor="nome" className="text-sm font-semibold text-ink">Nome</label>
          <input id="nome" name="nome" type="text" autoComplete="name" placeholder="Seu nome" className={field} aria-invalid={!!errors.nome} />
          {errors.nome && <p className="mt-1 text-sm text-[#DC2626]">{errors.nome}</p>}
        </div>
        <div>
          <label htmlFor="whatsapp" className="text-sm font-semibold text-ink">WhatsApp</label>
          <input id="whatsapp" name="whatsapp" type="tel" inputMode="tel" autoComplete="tel" placeholder="(21) 99999-9999" className={field} aria-invalid={!!errors.whatsapp} />
          {errors.whatsapp && <p className="mt-1 text-sm text-[#DC2626]">{errors.whatsapp}</p>}
        </div>
        <div>
          <label htmlFor="servico" className="text-sm font-semibold text-ink">Serviço de interesse</label>
          <select id="servico" name="servico" defaultValue="" className={field} aria-invalid={!!errors.servico}>
            <option value="" disabled>Selecione…</option>
            {(Object.keys(SERVICES) as ServiceId[]).map((id) => (
              <option key={id} value={id}>{SERVICES[id].label}</option>
            ))}
          </select>
          {errors.servico && <p className="mt-1 text-sm text-[#DC2626]">{errors.servico}</p>}
        </div>
        <button type="submit" className="btn-wa w-full">
          <MessageCircle size={18} aria-hidden="true" /> Enviar e continuar no WhatsApp
        </button>
        <p className="text-center text-xs text-body">
          Ao enviar, abrimos o WhatsApp com seus dados já preenchidos. Usamos o contato só para responder ao seu pedido.
        </p>
      </div>
    </form>
  );
}
