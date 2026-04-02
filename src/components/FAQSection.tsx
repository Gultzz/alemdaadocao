import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "O livro Além da Adoção é ficção ou relato real?",
    a: "É um relato pessoal de quem foi adotada aos 10 meses de vida, combinado com 20 perguntas que ajudam a desmistificar o processo de adoção — informação e vivência, sem romantização vazia.",
  },
  {
    q: "Quantas perguntas sobre adoção o livro responde?",
    a: "São 20 perguntas, pensadas para esclarecer dúvidas frequentes e aproximar leitores da realidade da adoção, com linguagem acessível.",
  },
  {
    q: "O ebook diz que adoção é sempre 'felizes para sempre'?",
    a: "Não. O livro deixa claro que adotar não garante automaticamente um final de conto de fadas — e apresenta a adoção como início de uma jornada com desafios, descobertas e aprendizados no dia a dia.",
  },
  {
    q: "Onde compro o livro Além da Adoção (Kindle)?",
    a: "Na Amazon, pelo ASIN B0GTTR8138 — eBook em português, com Page Flip e compatível com leitor de tela. Use o botão 'Comprar na Amazon' nesta página para ir direto à página do produto.",
  },
  {
    q: "Qual o preço do ebook?",
    a: "O valor é definido na Amazon e pode variar por promoções. Consulte sempre a página do produto (ASIN B0GTTR8138) para o preço atual em reais.",
  },
  {
    q: "Quando sai a versão física?",
    a: "A ideia é disponibilizar a versão física em até um ano após o lançamento do ebook. A edição física deve trazer extras e, em alguns casos, opção de compra com autógrafo — acompanhe as novidades da autora.",
  },
  {
    q: "Há diferença entre o ebook e a versão física futura?",
    a: "Sim: a versão física está planejada com materiais extras e possibilidade de kit autografado em canais indicados pela autora.",
  },
  {
    q: "O livro é indicado para quem?",
    a: "Para casais e famílias que consideram adoção, quem já adotou, profissionais que acompanham famílias e qualquer pessoa que queira entender a adoção com mais profundidade e menos mito — em especial no contexto de paternidade e relacionamentos.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" aria-labelledby="faq-heading" className="scroll-mt-24 bg-section-alt py-20 md:py-24">
      <div className="container mx-auto max-w-3xl px-6">
        <header className="mb-10 text-center md:mb-12">
          <h2 id="faq-heading" className="text-3xl font-bold text-foreground md:text-4xl">
            Perguntas frequentes
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
            Dúvidas sobre o conteúdo, a mensagem do livro e a compra. As 20 perguntas completas estão no ebook.
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
