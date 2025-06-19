import React from "react";

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
        <a
          href={joinHref}
          className="border-2 border-blue-400 text-[#343433] font-semibold py-1 px-6 rounded-lg transition-colors duration-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center"
        >
          Unete a la conversacion
        </a>
      )}
      {logoutHref && (
        <a
          href={logoutHref}
          className="bg-yellow-400 hover:bg-yellow-500 text-[#343433] font-semibold py-1 px-8 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-yellow-400 flex items-center justify-center"
        >
          Cerrar sesion
        </a>
      )}
    </div>
  );
};

export default SessionButtons;
