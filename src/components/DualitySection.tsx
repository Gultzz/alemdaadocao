import { Heart, Shield, Star, CloudRain, Fingerprint, Link } from "lucide-react";
import { useTranslation } from "react-i18next";

const DualitySection = () => {
  const { t } = useTranslation();

  const lights = [
    {
      icon: Heart,
      title: t("duality.lights.0.title"),
      desc: t("duality.lights.0.desc"),
    },
    {
      icon: Shield,
      title: t("duality.lights.1.title"),
      desc: t("duality.lights.1.desc"),
    },
    {
      icon: Star,
      title: t("duality.lights.2.title"),
      desc: t("duality.lights.2.desc"),
    },
  ];

  const shadows = [
    {
      icon: CloudRain,
      title: t("duality.shadows.0.title"),
      desc: t("duality.shadows.0.desc"),
    },
    {
      icon: Fingerprint,
      title: t("duality.shadows.1.title"),
      desc: t("duality.shadows.1.desc"),
    },
    {
      icon: Link,
      title: t("duality.shadows.2.title"),
      desc: t("duality.shadows.2.desc"),
    },
  ];

  return (
    <section
      id="sumario"
      aria-labelledby="sumario-heading"
      className="scroll-mt-24 border-t border-border/60 bg-background py-20 md:py-24"
    >
      <div className="container mx-auto max-w-6xl px-6">
        <header className="mb-14 text-center md:mb-16">
          <h2 id="sumario-heading" className="text-3xl font-bold text-foreground md:text-4xl">
            {t("duality.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted-foreground">
            {t("duality.subtitle")}
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 md:gap-8">
          <div className="rounded-2xl border border-border bg-card p-7 shadow-sm md:p-8">
            <h3 className="mb-6 border-b border-border pb-3 font-display text-xl font-semibold text-foreground">
              {t("duality.lightsTitle")}
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
              {t("duality.shadowsTitle")}
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
