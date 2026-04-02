import { Heart, Shield, Star, CloudRain, Fingerprint, Link } from "lucide-react";

const lights = [
  {
    icon: Heart,
    title: "Verdade com acolhimento",
    desc: "Um relato vivido que nomeia sentimentos e situações que muitas famílias reconhecem, mas poucas vezes veem em livros.",
  },
  {
    icon: Shield,
    title: "20 perguntas que esclarecem",
    desc: "Respostas diretas para dúvidas comuns sobre adoção — sem julgamento, com informação e sensibilidade.",
  },
  {
    icon: Star,
    title: "Para pais, futuros pais e curiosos",
    desc: "Útil quem está no processo, quem já adotou e quem quer entender a adoção além dos clichês.",
  },
];

const shadows = [
  {
    icon: CloudRain,
    title: "Não é promessa de conto de fadas",
    desc: "O livro não vende um final automático: fala de luto, expectativas e ajustes — porque vínculo se constrói no tempo.",
  },
  {
    icon: Fingerprint,
    title: "Identidade e pertencimento",
    desc: "Toca em questões reais de quem nasceu em uma história e cresce em outra — com honestidade.",
  },
  {
    icon: Link,
    title: "Vínculo exige presença",
    desc: "Amor e escolha não cancelam desafios; este livro ajuda a enxergar a jornada com menos culpa e mais clareza.",
  },
];

const DualitySection = () => {
  return (
    <section
      id="sumario"
      aria-labelledby="sumario-heading"
      className="scroll-mt-24 border-t border-border/60 bg-background py-20 md:py-24"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <header className="mb-14 text-center md:mb-16">
          <h2 id="sumario-heading" className="text-3xl font-bold text-foreground md:text-4xl">
            O que você leva deste livro
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            A beleza e a complexidade caminham juntas. Saber o que esperar — inclusive o que não vem pronto em embalagem
            de sonho — é o primeiro passo para uma adoção mais consciente e sustentável.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm md:p-8">
            <h3 className="mb-6 border-b border-border pb-3 font-display text-xl font-semibold text-foreground">
              Por que vale a leitura
            </h3>
            <ul className="space-y-6" role="list">
              {lights.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm md:p-8">
            <h3 className="mb-6 border-b border-border pb-3 font-display text-xl font-semibold text-foreground">
              O que o livro não promete
            </h3>
            <ul className="space-y-6" role="list">
              {shadows.map((item, i) => (
                <li key={i} className="flex gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-destructive/10 text-destructive">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DualitySection;
