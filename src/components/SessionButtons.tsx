import React from "react";
import Link from "next/link";
import Button from "./Button";

interface SessionButtonsProps {
  /** Enlace para el botón 'Unete a la conversacion' */
  joinHref?: string;
  /** Enlace para el botón 'Cerrar sesion' */
  logoutHref?: string;
}

const SessionButtons: React.FC<SessionButtonsProps> = ({
  joinHref,
  logoutHref,
}) => {
  return (
    <div className="flex space-x-6">
      {joinHref && (
        <Link href={joinHref} className="contents">
          <Button
            variant="link"
            className="border-2 border-blue-400 text-[#343433] py-1 px-6 rounded-lg hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center no-underline"
          >
            Unete a la conversacion
          </Button>
        </Link>
      )}
      {logoutHref && (
        <Link href={logoutHref} className="contents">
          <Button
            variant="primary"
            className="py-1 px-8 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 flex items-center justify-center"
          >
            Cerrar sesion
          </Button>
        </Link>
      )}
    </div>
  );
};

export default SessionButtons;
