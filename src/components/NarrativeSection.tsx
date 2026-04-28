import { BookOpen, HelpCircle, Calendar, Sparkles, Library } from "lucide-react";
import { useTranslation, Trans } from "react-i18next";

const NarrativeSection = () => {
  const { t } = useTranslation();

  const stats = [
    {
      icon: HelpCircle,
      value: t("narrative.stats.questions.value"),
      label: t("narrative.stats.questions.label"),
      hint: t("narrative.stats.questions.hint"),
    },
    {
      icon: BookOpen,
      value: t("narrative.stats.pages.value"),
      label: t("narrative.stats.pages.label"),
      hint: t("narrative.stats.pages.hint"),
    },
    {
      icon: Calendar,
      value: t("narrative.stats.release.value"),
      label: t("narrative.stats.release.label"),
      hint: t("narrative.stats.release.hint"),
    },
  ] as const;

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
              {t("narrative.tag")}
            </p>
            <h2
              id="livro-heading"
              className="mt-5 text-3xl font-bold leading-[1.15] text-foreground md:text-4xl lg:text-[2.35rem]"
            >
              {t("narrative.title")}
            </h2>
            <div className="mt-6 h-px w-16 bg-gradient-to-r from-primary to-transparent" aria-hidden />
            <p className="mt-6 text-[1.02rem] leading-relaxed text-muted-foreground">
              <Trans
                i18nKey="narrative.p1"
                components={{
                  1: <strong className="font-semibold text-foreground" />,
                  3: <strong className="font-semibold text-foreground" />,
                }}
              />
            </p>
          </div>

          <div className="space-y-8 lg:col-span-7">
            <div className="rounded-2xl border border-border/80 bg-background/80 p-6 shadow-sm backdrop-blur-sm md:p-8">
              <p className="leading-relaxed text-muted-foreground">
                <Trans
                  i18nKey="narrative.p2"
                  components={{
                    1: <strong className="font-semibold text-foreground" />,
                    3: <strong className="font-semibold text-foreground" />,
                  }}
                />
              </p>
              <p className="mt-5 border-l-2 border-primary/45 pl-4 leading-relaxed text-muted-foreground">
                <Trans
                  i18nKey="narrative.p3"
                  components={{
                    1: <strong className="font-semibold text-foreground" />,
                  }}
                />
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
                  <h3 className="font-display text-base font-semibold text-foreground">{t("narrative.details.title")}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{t("narrative.details.subtitle")}</p>
                  <ul className="mt-4 space-y-3 text-sm text-muted-foreground" role="list">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" aria-hidden />
                      <span>
                        <Trans
                          i18nKey="narrative.details.list1"
                          components={{
                            1: <strong className="font-medium text-foreground" />,
                          }}
                        />
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/70" aria-hidden />
                      <span>
                        <Trans
                          i18nKey="narrative.details.list2"
                          components={{
                            1: <strong className="font-medium text-foreground" />,
                            3: <strong className="font-medium text-foreground" />,
                          }}
                        />
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
