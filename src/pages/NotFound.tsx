import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: rota inexistente:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted px-6 py-16">
      <main className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Erro 404</p>
        <h1 className="mt-2 text-4xl font-bold text-foreground">Página não encontrada</h1>
        <p className="mt-4 max-w-md text-lg text-muted-foreground">
          O endereço que você tentou abrir não existe ou foi movido.
        </p>
        <a
          href="/"
          className="focus-ring mt-8 inline-flex min-h-[44px] items-center justify-center rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground"
        >
          Voltar para o início
        </a>
      </main>
    </div>
  );
};

export default NotFound;
