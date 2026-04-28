import { useTranslation } from "react-i18next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const { t } = useTranslation();

  // Create an array by getting the items from translations. We know there are 8 items.
  const faqs = Array.from({ length: 8 }).map((_, i) => ({
    q: t(`faq.items.${i}.q`),
    a: t(`faq.items.${i}.a`),
  }));
  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-24 bg-section-alt py-20 md:py-24">
      <div className="container mx-auto max-w-3xl px-6">
        <header className="mb-10 text-center md:mb-12">
          <h2 id="faq-heading" className="text-3xl font-bold text-foreground md:text-4xl">
            {t("faq.title")}
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            {t("faq.subtitle")}
          </p>
        </header>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="overflow-hidden rounded-xl border border-border bg-background px-1 shadow-sm"
            >
              <AccordionTrigger className="px-5 text-left text-foreground hover:no-underline">{faq.q}</AccordionTrigger>
              <AccordionContent className="px-5 pb-5 text-muted-foreground">{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
