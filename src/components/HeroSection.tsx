import bookCover from "@/assets/book-cover.png";
import { AMAZON_PRODUCT_URL, externalLinkProps } from "@/lib/constants";

const HeroSection = () => {
  return (
    <section
      className="relative flex min-h-[88vh] items-center overflow-hidden bg-hero pt-[5.25rem] md:min-h-[90vh]"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        aria-hidden
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, hsl(var(--primary) / 0.15), transparent), radial-gradient(ellipse 60% 40% at 100% 50%, hsl(var(--sage) / 0.35), transparent)",
        }}
      />

      <div className="container relative mx-auto max-w-6xl px-6 py-12 md:grid md:grid-cols-2 md:items-center md:gap-12 md:py-16">
        <div className="animate-fade-up space-y-6">
          <p className="inline-block rounded-full border border-primary/15 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
            Relato real + 20 perguntas sobre adoção
          </p>
          <h1 id="hero-heading" className="text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
            Além da Adoção
          </h1>
          <p className="max-w-lg text-lg leading-relaxed text-muted-foreground">
            O relato de quem foi <strong className="font-semibold text-foreground">adotada aos 10 meses de vida</strong>, com
            perguntas que ajudam a <strong className="font-semibold text-foreground">desmistificar a adoção</strong>. Um
            convite honesto: adotar não é garantia de &quot;felizes para sempre&quot; — é o{" "}
            <strong className="font-semibold text-foreground">início de uma jornada</strong> de desafios, descobertas e
            aprendizados diários.
          </p>
          <div className="flex flex-wrap gap-3 pt-2 sm:gap-4">
            <a
              href={AMAZON_PRODUCT_URL}
              {...externalLinkProps}
              aria-label="Comprar o eBook na Amazon Brasil. Abre numa nova aba."
              className="focus-ring inline-flex min-h-[44px] items-center justify-center rounded-lg bg-primary px-7 py-3 font-semibold text-primary-foreground transition-opacity hover:opacity-95"
            >
              Comprar na Amazon
            </a>
            <a
              href="#livro"
              className="focus-ring inline-flex min-h-[44px] items-center justify-center rounded-lg border border-foreground/20 px-7 py-3 font-semibold text-foreground transition-colors hover:bg-foreground/5"
            >
              Por dentro do livro
            </a>
          </div>
        </div>

        <div className="mt-12 flex justify-center md:mt-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
          <figure className="relative mx-auto max-w-[400px]">
            <img
              src={bookCover}
              alt="Capa do ebook Além da Adoção: relato sobre adoção e 20 perguntas, editora BELS FONTS"
              width={400}
              height={500}
              className="relative z-10 mx-auto max-w-[min(100%,320px)] drop-shadow-2xl md:max-w-[400px]"
              decoding="async"
            />
            <figcaption className="absolute -bottom-2 right-0 z-20 max-w-[min(100%,240px)] rounded-xl border border-border bg-card p-4 shadow-lg sm:-bottom-4 sm:-right-4 sm:max-w-[220px]">
              <blockquote className="text-sm italic leading-snug text-muted-foreground">
                <p>&quot;Adotar é começar uma história nova — com verdades que merecem ser ditas em voz alta.&quot;</p>
              </blockquote>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
