import React from "react";

/**
 * Props para el componente Navbar.
 */
interface NavbarProps {
  /** Enlace para el botón 'Unete a la conversacion' */
  joinHref?: string;
  /** Enlace para el botón 'Login' */
  loginHref?: string;
}

const Navbar: React.FC<NavbarProps> = ({ joinHref, loginHref }) => {
  return (
    <nav className="w-full block bg-white text-[#343433]">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold tracking-tight">Chela.JS</div>
        <ul className="flex space-x-6">
          {joinHref && (
            <li>
              <a
                href={joinHref}
                className="border-2 border-blue-400 text-[#343433] font-semibold py-1 px-6 rounded-lg transition-colors duration-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center"
              >
                Unete a la conversacion
              </a>
            </li>
          )}
          {loginHref && (
            <li>
              <a
                href={loginHref}
                className="bg-yellow-400 hover:bg-yellow-500 text-[#343433] font-semibold py-1 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 flex items-center justify-center"
              >
                Login
              </a>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
