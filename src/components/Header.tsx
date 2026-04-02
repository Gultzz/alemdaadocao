import { useState, useId } from "react";
import { Menu, X } from "lucide-react";
import { AMAZON_PRODUCT_URL, externalLinkProps } from "@/lib/constants";

const navLinks = [
  { href: "#livro", label: "O livro" },
  { href: "#sumario", label: "O que você encontra" },
  { href: "#faq", label: "Perguntas frequentes" },
  { href: "#autora", label: "Autora" },
] as const;

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuId = useId();

  return (
    <header role="banner" className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/85 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="container mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-3 md:py-4">
        <a
          href="/"
          className="focus-ring font-display text-lg font-semibold text-foreground rounded-md"
        >
          <span className="sr-only">Página inicial — </span>
          Além da Adoção
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground" aria-label="Secções da página">
          {navLinks.map(({ href, label }) => (
            <a key={href} href={href} className="focus-ring rounded-md text-muted-foreground hover:text-foreground transition-colors">
              {label}
            </a>
          ))}
        </nav>
        <a
          href={AMAZON_PRODUCT_URL}
          {...externalLinkProps}
          aria-label="Comprar o eBook na Amazon Brasil. Abre numa nova aba."
          className="focus-ring hidden min-h-[44px] min-w-[44px] items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-95 md:inline-flex"
        >
          Comprar na Amazon
        </a>
        <button
          type="button"
          onClick={() => setMenuOpen((o) => !o)}
          className="focus-ring inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md text-foreground md:hidden"
          aria-expanded={menuOpen}
          aria-controls={menuId}
          aria-label={menuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
        >
          {menuOpen ? <X size={24} aria-hidden /> : <Menu size={24} aria-hidden />}
        </button>
      </div>
      <div
        id={menuId}
        hidden={!menuOpen}
        className="border-t border-border bg-background px-6 py-4 shadow-lg md:hidden"
      >
        <nav className="flex flex-col gap-1" aria-label="Secções da página">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="focus-ring rounded-md px-2 py-3 text-muted-foreground hover:bg-muted hover:text-foreground"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href={AMAZON_PRODUCT_URL}
            {...externalLinkProps}
            aria-label="Comprar o eBook na Amazon Brasil. Abre numa nova aba."
            className="focus-ring mt-2 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            onClick={() => setMenuOpen(false)}
          >
            Comprar na Amazon
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
