import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyGoogle from "@/components/WhyGoogle";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Faq from "@/components/Faq";
import FinalCta from "@/components/FinalCta";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import JsonLd from "@/components/JsonLd";
import { HOME_FAQS, faqSchema } from "@/lib/faq";

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyGoogle />
        <Services />
        <Process />
        <Projects />
        <Faq items={HOME_FAQS} />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFloat />
      <JsonLd data={faqSchema(HOME_FAQS)} />
    </>
  );
}
