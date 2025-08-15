import React from "react";
import BlockLogin from "./BlockLogin";
import Footer from "./Footer";

// 1. Definir interfaces específicas del dominio
interface LoginPageProps {
  // Props funcionales
  onGithubLogin?: () => void;
  // Props de configuración
  logoHref?: string;
  // Props de estilo
  className?: string;
}

// 3. Valores por defecto
const defaultLogoHref = "/";

// 4. Componente principal
const LoginPage: React.FC<LoginPageProps> = ({
  onGithubLogin = () => console.log("GitHub login clicked"),
  logoHref = defaultLogoHref,
  className = "",
}) => {
  // Funciones helper internas
  const renderHeader = () => {
    return (
      <nav className="w-full bg-white text-[#343433]">
        <div className="container mx-auto flex items-center justify-between py-4 px-6">
          <a
            href={logoHref}
            className="text-2xl font-bold tracking-tight hover:text-yellow-400 transition-colors duration-200"
            aria-label="Ir a página principal de Chela.JS"
          >
            Chela.JS
          </a>
        </div>
      </nav>
    );
  };

  return (
    <div
      className={`min-h-screen bg-gray-50 flex flex-col ${className}`}
      data-testid="login-page"
    >
      {/* Header simplificado con solo logo */}
      {renderHeader()}

      {/* Contenido principal - LoginBlock centrado */}
      <main className="flex-grow flex items-center justify-center px-4 py-8">
        <div className="w-full max-w-md">
          <BlockLogin onGithubLogin={onGithubLogin} />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LoginPage;
