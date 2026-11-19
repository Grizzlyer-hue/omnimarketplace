import LeadForm from "./LeadForm";

export default function FinalCta() {
  return (
    <section id="orcamento" className="bg-navy-deep py-20 sm:py-28">
      <div className="container-x grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-20">
        <div>
          <p className="font-display text-[13px] font-bold uppercase tracking-[0.14em] text-gold">Orçamento</p>
          <h2 className="mt-3 font-display text-3xl font-extrabold leading-tight !text-white sm:text-[2.6rem]">
            Descubra o que falta para sua empresa aparecer no Google.
          </h2>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-white/80">
            Preencha os três campos. Respondemos pelo WhatsApp com um
            diagnóstico do seu caso e um valor claro, sem compromisso.
          </p>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
