const Footer = () => {
  return (
    <footer role="contentinfo" className="border-t border-border bg-muted py-12">
      <div className="container mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between md:gap-8">
          <div className="max-w-md">
            <p className="font-display text-lg font-semibold text-foreground">Além da Adoção</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Livro sobre adoção: relato de quem foi adotada aos 10 meses e 20 perguntas que desmistificam o processo.
              Editora BELS FONTS · eBook Kindle · ASIN B0GTTR8138
            </p>
          </div>
          <nav className="flex flex-wrap gap-x-8 gap-y-3 text-sm text-muted-foreground" aria-label="Rodapé">
            <a href="#" className="focus-ring rounded-md hover:text-foreground">
              Termos de uso
            </a>
            <a href="#" className="focus-ring rounded-md hover:text-foreground">
              Privacidade
            </a>
            <a href="#" className="focus-ring rounded-md hover:text-foreground">
              Contato
            </a>
          </nav>
        </div>
        <p className="mt-10 border-t border-border pt-8 text-center text-xs text-muted-foreground md:text-left">
          © {new Date().getFullYear()} Bels Fonts · BELS FONTS. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
