import { AMAZON_PRODUCT_URL, externalLinkProps } from "@/lib/constants";
import { useTranslation, Trans } from "react-i18next";

const CTASection = () => {
  const { t } = useTranslation();
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
          {t("cta.title")}
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-primary-foreground/95">
          <Trans
            i18nKey="cta.desc1"
            components={{
              1: <strong className="font-semibold text-primary-foreground" />,
            }}
          />
        </p>
        <p className="mt-4 text-sm text-primary-foreground/85">
          {t("cta.desc2")}
        </p>
        <a
          href={AMAZON_PRODUCT_URL}
          {...externalLinkProps}
          aria-label="Comprar o eBook na Amazon Brasil — ASIN B0GTTR8138. Abre numa nova aba."
          className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-background px-8 py-4 text-base font-semibold text-foreground shadow-md transition-opacity hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-foreground focus-visible:ring-offset-2 focus-visible:ring-offset-primary"
        >
          {t("cta.buyAmazon")}
        </a>
      </div>
    </section>
  );
};

export default CTASection;
