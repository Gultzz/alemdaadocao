import { BookOpen, HelpCircle, Calendar, Sparkles, Library } from "lucide-react";

const stats = [
  {
    icon: HelpCircle,
    value: "20",
    label: "perguntas",
    hint: "respondidas no livro",
  },
  {
    icon: BookOpen,
    value: "20",
    label: "páginas",
    hint: "leitura objetiva · eBook Kindle",
  },
  {
    icon: Calendar,
    value: "2026",
    label: "lançamento",
    hint: "editora BELS FONTS",
  },
] as const;

const NarrativeSection = () => {
  return (
    <section
      id="livro"
      aria-labelledby="livro-heading"
      className="scroll-mt-24 relative overflow-hidden bg-section-alt py-20 md:py-28"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.35]"
        aria-hidden
        style={{
          backgroundImage: `radial-gradient(circle at 20% 30%, hsl(var(--primary) / 0.12) 0%, transparent 45%),
            radial-gradient(circle at 80% 70%, hsl(var(--sage) / 0.4) 0%, transparent 50%)`,
        }}
      />

      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5 lg:pt-1">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden />
              Sobre o livro
            </p>
            <h2
              id="livro-heading"
              className="mt-5 text-3xl font-bold leading-[1.15] text-foreground md:text-4xl lg:text-[2.35rem]"
            >
              Desmistificando a adoção com um relato verdadeiro
            </h2>
            <div className="mt-6 h-px w-16 bg-gradient-to-r from-primary to-transparent" aria-hidden />
            <p className="mt-6 text-[1.02rem] leading-relaxed text-muted-foreground">
              Este não é um manual frio: é um <strong className="font-semibold text-foreground">relato pessoal</strong>{" "}
              atravessado por <strong className="font-semibold text-foreground">20 perguntas</strong> que esclarecem
              dúvidas reais sobre o processo de adoção — para quem pensa em adotar, para famílias que já vivem essa
              escolha e para quem quer entender sem romantizar.
            </p>
          </div>

          <div className="space-y-8 lg:col-span-7">
            <div className="rounded-2xl border border-border/80 bg-background/80 p-6 shadow-sm backdrop-blur-sm md:p-8">
              <p className="leading-relaxed text-muted-foreground">
                O livro mostra que{" "}
                <strong className="font-semibold text-foreground">
                  adotar não significa, automaticamente, um &quot;felizes para sempre&quot;
                </strong>{" "}
                — e que isso não diminui o amor. Significa reconhecer o{" "}
                <strong className="font-semibold text-foreground">início de uma jornada</strong> marcada por desafios,
                descobertas e aprendizados que se renovam no dia a dia.
              </p>
              <p className="mt-5 border-l-2 border-primary/45 pl-4 leading-relaxed text-muted-foreground">
                Em português, em formato ágil para leitura direta: ideal para quem busca{" "}
                <strong className="font-semibold text-foreground">clareza, acolhimento e informação</strong> sem filtros de
                conto de fadas.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-3" role="list">
              {stats.map((item) => (
                <li
                  key={item.label}
                  className="group flex flex-col rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-[box-shadow,border-color] hover:border-primary/25 hover:shadow-md"
                >
                  <span className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                    <item.icon className="h-5 w-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <span className="font-display text-3xl font-bold tabular-nums text-foreground">{item.value}</span>
                  <span className="mt-1 text-xs font-semibold uppercase tracking-wide text-primary">{item.label}</span>
                  <span className="mt-2 text-xs leading-snug text-muted-foreground">{item.hint}</span>
                </li>
              ))}
            </ul>

            <div className="rounded-2xl border border-border bg-muted/50 p-6 md:p-7">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-background text-primary shadow-sm">
                  <Library className="h-5 w-5" aria-hidden />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display text-base font-semibold text-foreground">Detalhes da edição (eBook)</h3>
                  <p className="mt-1 text-xs text-muted-foreground">Informações úteis para compra e leitura na Amazon.</p>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground" role="list">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" aria-hidden />
                      <span>
                        <span className="font-medium text-foreground">ASIN B0GTTR8138</span> · Português · Compatível com
                        leitor de tela · Page Flip habilitado
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" aria-hidden />
                      <span>
                        Categorias na Amazon:{" "}
                        <span className="text-foreground">Paternidade e relacionamentos</span> ·{" "}
                        <span className="text-foreground">Família e relacionamentos</span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NarrativeSection;
