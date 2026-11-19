create table if not exists public.leads (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  whatsapp text not null,
  servico text not null check (servico in ('gmn', 'landing', 'dominio')),
  origem text,
  created_at timestamptz not null default now()
);

-- Inserções acontecem só pelo servidor (service role). Nenhuma policy pública.
alter table public.leads enable row level security;
