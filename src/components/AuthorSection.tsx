import authorPortrait from "@/assets/author-portrait.png";

const AuthorSection = () => {
  return (
    <section
      id="autora"
      aria-labelledby="autora-heading"
      className="scroll-mt-24 border-t border-border/60 bg-background py-20 md:py-24"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div
                className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/25 to-sage/40 opacity-80 blur-sm"
                aria-hidden
              />
              <div className="relative w-64 overflow-hidden rounded-2xl bg-sage/30 shadow-lg md:w-80 md:shadow-xl">
                <img
                  src={authorPortrait}
                  alt="Retrato da autora Bels Fonts, autora do livro Além da Adoção"
                  loading="lazy"
                  width={512}
                  height={640}
                  className="h-80 w-full object-cover object-top md:h-96"
                  decoding="async"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">Autora · Editora BELS FONTS</p>
            <h2 id="autora-heading" className="text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Uma voz que nasceu dessa história
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Fui <strong className="font-semibold text-foreground">adotada aos 10 meses de vida</strong> — e essa marca
              atravessa tudo o que escrevo. Não para glamourizar nem para dramatizar: para{" "}
              <strong className="font-semibold text-foreground">nomear o real</strong>, acolher quem está no meio do
              processo e oferecer perguntas e respostas que eu gostaria de ter encontrado antes.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Minha missão com &quot;Além da Adoção&quot; é que a palavra <em>adoção</em> se associe a{" "}
              <strong className="font-semibold text-foreground">verdade, cuidado e esperança realista</strong> — nunca a
              substituição de uma família por outra como se fosse troca de peça, mas sim ao reconhecimento de um vínculo
              que se escolhe e se reconstrói todos os dias.
            </p>
            <div className="flex items-center gap-3 border-t border-border pt-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                B
              </span>
              <span className="font-display text-lg font-medium italic text-foreground">Bels Fonts</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
