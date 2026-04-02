import { useCallback } from "react";

/**
 * Primeiro elemento focável: permite saltar navegação repetitiva (WCAG 2.4.1).
 * Move o foco para <main> após ativação.
 */
const SkipLink = () => {
  const onClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    const main = document.getElementById("conteudo-principal");
    if (!main) return;
    e.preventDefault();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    main.focus({ preventScroll: true });
    main.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  }, []);

  return (
    <a href="#conteudo-principal" className="skip-link" onClick={onClick}>
      Ir para o conteúdo principal
    </a>
  );
};

export default SkipLink;
