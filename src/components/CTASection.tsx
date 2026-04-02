import { AMAZON_PRODUCT_URL, externalLinkProps } from "@/lib/constants";

const CTASection = () => {
  return (
    <section
      id="comprar"
      aria-labelledby="cta-heading"
      className="scroll-mt-24 relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 80% at 0% 100%, hsl(0 0% 100% / 0.12), transparent), radial-gradient(ellipse 50% 60% at 100% 0%, hsl(0 0% 0% / 0.08), transparent)",
        }}
      />
      <div className="container relative mx-auto max-w-2xl px-6 text-center">
        <h2
          id="cta-heading"
          className="text-3xl font-bold leading-tight md:text-4xl"
        >
          Leve o relato e as 20 perguntas para o seu Kindle
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-primary-foreground/95">
          eBook em português, publicação BELS FONTS, 20 páginas de leitura
          direta — ideal para quem quer{" "}
          <strong className="font-semibold text-primary-foreground">
            desmistificar a adoção
          </strong>{" "}
          com honestidade e ir além do discurso pronto de &quot;felizes para
          sempre&quot;.
        </p>
        <p className="mt-4 text-sm text-primary-foreground/85">
          Encontrado nas categorias Paternidade e Família na Amazon — confira
          avaliações, preço e posição na loja na página oficial do livro.
        </p>
        <a
          href={AMAZON_PRODUCT_URL}
          {...externalLinkProps}
          aria-label="Comprar o eBook na Amazon Brasil — ASIN B0GTTR8138. Abre numa nova aba."
          className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-background px-8 py-4 text-base font-semibold text-foreground shadow-md transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          Comprar na Amazon
        </a>
      </div>
    </section>
  );
};

export default CTASection;
