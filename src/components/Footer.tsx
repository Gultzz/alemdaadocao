import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer role="contentinfo" className="border-t border-border bg-muted py-12">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-8">
          <div className="max-w-md">
            <p className="font-display text-lg font-semibold text-foreground">{t("footer.title")}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              {t("footer.desc")}
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground" aria-label="Rodapé">
            <a href="#" className="focus-ring rounded-md hover:text-foreground">
              {t("footer.nav.terms")}
            </a>
            <a href="#" className="focus-ring rounded-md hover:text-foreground">
              {t("footer.nav.privacy")}
            </a>
            <a href="#" className="focus-ring rounded-md hover:text-foreground">
              {t("footer.nav.contact")}
            </a>
          </nav>
        </div>
        <p className="mt-10 border-t border-border pt-8 text-center text-xs text-muted-foreground md:text-left">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
