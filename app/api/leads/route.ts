import { NextResponse } from "next/server";
import { SERVICES, type ServiceId } from "@/lib/site";

export const runtime = "nodejs";

type LeadPayload = { nome?: string; whatsapp?: string; servico?: string };

export async function POST(req: Request) {
  let body: LeadPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "JSON inválido" }, { status: 400 });
  }

  const nome = String(body.nome ?? "").trim().slice(0, 120);
  const whatsapp = String(body.whatsapp ?? "").replace(/[^\d+()\-\s]/g, "").slice(0, 25);
  const servico = body.servico as ServiceId;

  if (nome.length < 2 || whatsapp.replace(/\D/g, "").length < 10 || !(servico in SERVICES)) {
    return NextResponse.json({ ok: false, error: "Dados inválidos" }, { status: 422 });
  }

  // ─────────────────────────────────────────────────────────────
  // SUPABASE: descomente após `npm i @supabase/supabase-js`,
  // criar a tabela (supabase/schema.sql) e definir as variáveis
  // NEXT_PUBLIC_SUPABASE_URL e SUPABASE_SERVICE_ROLE_KEY na Vercel.
  //
  // import { createClient } from "@supabase/supabase-js";
  // const supabase = createClient(
  //   process.env.NEXT_PUBLIC_SUPABASE_URL!,
  //   process.env.SUPABASE_SERVICE_ROLE_KEY!,
  // );
  // const { error } = await supabase
  //   .from("leads")
  //   .insert({ nome, whatsapp, servico, origem: "landing-omnimarketplace" });
  // if (error) return NextResponse.json({ ok: false }, { status: 500 });
  // ─────────────────────────────────────────────────────────────

  console.log("[lead]", { nome, whatsapp, servico });
  return NextResponse.json({ ok: true });
}
