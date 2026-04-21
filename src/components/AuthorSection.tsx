import authorPortraitJpg from "@/assets/author-portrait.jpeg";
import { BookOpen, GraduationCap, Sparkles } from "lucide-react";

const courses = [
  "Introdução à adoção de crianças e adolescentes",
  "Estatuto da Criança e do Adolescente",
  "Introdução aos direitos humanos",
  "Paternidade responsável",
  "Introdução à psicologia organizacional",
  "Introdução ao ato infracional e medidas socioeducativas",
  "Introdução ao direito da família",
  "Conselho Tutelar",
  "Direito da criança e do adolescente",
  "Direitos da juventude",
  "Proteção social especial de alta complexidade",
  "Introdução à psicologia criminal",
] as const;

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
                  src={authorPortraitJpg}
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
            <p className="text-xs font-semibold uppercase tracking-widest text-primary">
              Autora · Editora BELS FONTS
            </p>
            <h2
              id="autora-heading"
              className="text-3xl font-bold leading-tight text-foreground md:text-4xl"
            >
              Uma voz que nasceu dessa história
            </h2>
            <p className="leading-relaxed text-muted-foreground">
              Fui{" "}
              <strong className="font-semibold text-foreground">
                adotada aos 10 meses de vida
              </strong>{" "}
              — e essa marca atravessa tudo o que escrevo. Não para glamourizar
              nem para dramatizar: para{" "}
              <strong className="font-semibold text-foreground">
                nomear o real
              </strong>
              , acolher quem está no meio do processo e oferecer perguntas e
              respostas que eu gostaria de ter encontrado antes.
            </p>
            <p className="leading-relaxed text-muted-foreground">
              Minha missão com &quot;Além da Adoção&quot; é que a palavra{" "}
              <em>adoção</em> se associe a{" "}
              <strong className="font-semibold text-foreground">
                verdade, cuidado e esperança realista
              </strong>{" "}
              — nunca a substituição de uma família por outra como se fosse
              troca de peça, mas sim ao reconhecimento de um vínculo que se
              escolhe e se reconstrói todos os dias.
            </p>
            <div className="flex items-center gap-3 border-t border-border pt-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-display text-sm font-bold text-primary">
                B
              </span>
              <span className="font-display text-lg font-medium italic text-foreground">
                Bels Fonts
              </span>
            </div>
          </div>
        </div>

        {/* Próximos livros */}
        <article
          id="proximos-livros"
          aria-labelledby="proximos-livros-heading"
          className="relative mt-16 overflow-hidden rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/5 via-background to-sage/20 p-8 shadow-sm md:mt-20 md:p-10 lg:p-12"
        >
          <div
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-primary/10 blur-3xl"
            aria-hidden
          />
          <div className="relative max-w-3xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-background/80 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5 shrink-0" aria-hidden />
              Em construção, com calma
            </p>
            <h3
              id="proximos-livros-heading"
              className="mt-5 font-display text-2xl font-bold text-foreground md:text-3xl"
            >
              Há mais histórias a caminho
            </h3>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                <strong className="font-semibold text-foreground">
                  Além da Adoção
                </strong>{" "}
                não fecha a porta do que ainda está por vir. Continuo a escrever
                com a mesma curiosidade e a mesma responsabilidade: cada novo
                texto nasce de conversas reais, de tempo de estudo e de vivência
                ao lado de famílias e de narrativas que pediram para serem ditas
                com cuidado — sem pressa que sacrifique a verdade.
              </p>
              <p>
                Os{" "}
                <strong className="font-semibold text-foreground">
                  próximos livros
                </strong>{" "}
                surgem aos poucos: alguns já estão em preparação ou revisão;
                outros ainda escolhem o tom certo. Eles vão sendo{" "}
                <strong className="font-semibold text-foreground">
                  publicados conforme encontram o formato e o momento adequados
                </strong>
                , sempre com o compromisso de juntar relato, informação e
                escuta, no mesmo espírito deste primeiro passo.
              </p>
              <p className="border-l-2 border-primary/40 pl-4 text-foreground/90">
                Se este livro falou com você, fique atento às novidades da
                editora e aos canais da autora: há mais capítulos desta jornada
                a caminho.
              </p>
            </div>
          </div>
        </article>

        {/* Formação */}
        <div
          id="formacao-autora"
          aria-labelledby="formacao-heading"
          className="mt-16 md:mt-20"
        >
          <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-primary">
                <GraduationCap className="h-4 w-4" aria-hidden />
                Formação
              </p>
              <h3
                id="formacao-heading"
                className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl"
              >
                Cursos que atravessam o que eu escrevo
              </h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Para sustentar texto e relato com rigor, busquei formações que
                dialogam com infância, adolescência, família e direitos. Abaixo,
                os cursos que cursei — cada um deixou marcas na forma como leio
                o mundo e como escolho cada palavra.
              </p>
            </div>
            <div className="hidden shrink-0 rounded-xl border border-border bg-card p-4 text-center shadow-sm md:block">
              <BookOpen
                className="mx-auto h-8 w-8 text-primary/80"
                aria-hidden
              />
              <p className="mt-2 text-xs font-medium text-muted-foreground">
                {courses.length} cursos
              </p>
            </div>
          </div>

          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {courses.map((title) => (
              <li key={title}>
                <div className="group flex h-full min-h-[4.5rem] flex-col justify-center rounded-xl border border-border bg-card/60 px-4 py-3.5 shadow-sm transition-[border-color,box-shadow,background-color] hover:border-primary/25 hover:bg-card hover:shadow-md">
                  <span className="flex items-start gap-3">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                      aria-hidden
                    />
                    <span className="text-sm font-medium leading-snug text-foreground group-hover:text-foreground">
                      {title}
                    </span>
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AuthorSection;
