import React from "react";
import Button from "./Button";

/**
 * Props para el componente Navbar.
 */
interface NavbarProps {
  /** Enlace para el botón 'Unete a la conversacion' */
  joinHref?: string;
  /** Enlace para el botón 'Login' */
  loginHref?: string;
  /** Enlace para el botón 'Explorar' */
  exploreHref?: string;
}

const Navbar: React.FC<NavbarProps> = ({
  joinHref,
  loginHref,
  exploreHref,
}) => {
  return (
    <nav className="w-full block bg-white text-[#343433]">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <div className="text-2xl font-bold tracking-tight">Chela.JS</div>
        <ul className="flex space-x-6">
          {exploreHref && (
            <li>
              <Button variant="link" href={exploreHref}>
                Explorar
              </Button>
            </li>
          )}
          {joinHref && (
            <li>
              <Button variant="blue-outline" href={joinHref}>
                Unete a la conversacion
              </Button>
            </li>
          )}
          {loginHref && (
            <li>
              <Button variant="primary" href={loginHref}>
                Login
              </Button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
