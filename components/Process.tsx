const steps = [
  {
    n: "01",
    t: "Diagnóstico Gratuito",
    d: "Você chama no WhatsApp, e a gente analisa como sua empresa aparece hoje no Google: perfil, concorrentes da região e situação do site. Você recebe um retorno claro do que falta.",
  },
  {
    n: "02",
    t: "Configuração e Desenvolvimento",
    d: "Fazemos o trabalho: perfil, fotos, categorias, página, domínio, DNS e SSL. Você aprova as peças principais antes de irem ao ar.",
  },
  {
    n: "03",
    t: "Entrega e Indexação no Google",
    d: "Publicamos, enviamos o site para indexação e conferimos se tudo aparece corretamente no Google. Você recebe os acessos e uma explicação simples do que foi feito.",
  },
];

export default function Process() {
  return (
    <section id="como-funciona" className="bg-white py-20 sm:py-28">
      <div className="container-x">
        <p className="eyebrow">Como funciona</p>
        <h2 className="mt-3 max-w-2xl font-display text-3xl font-extrabold leading-tight sm:text-[2.5rem]">
          Do primeiro contato ao seu perfil no ar, em três passos.
        </h2>

        <ol className="mt-14 border-t border-slate-200">
          {steps.map((s) => (
            <li key={s.n} className="grid gap-3 border-b border-slate-200 py-8 sm:grid-cols-[110px_1fr_1.4fr] sm:items-baseline sm:gap-8">
              <span className="font-display text-4xl font-extrabold text-gold">{s.n}</span>
              <h3 className="font-display text-xl font-extrabold">{s.t}</h3>
              <p className="text-base leading-relaxed">{s.d}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
