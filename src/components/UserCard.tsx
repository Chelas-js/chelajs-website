import React from "react";
import { SiInstagram, SiGithub } from "@icons-pack/react-simple-icons";
import { Linkedin } from "lucide-react";

interface SocialLinks {
  /** URL del perfil de Instagram del usuario. */
  instagram?: string;
  /** URL del perfil de GitHub del usuario. */
  github?: string;
  /** URL del perfil de LinkedIn del usuario. */
  linkedin?: string;
}

export interface UserCardProps {
  /** Nombre completo del usuario. */
  name: string;
  /** Nombre de usuario o handle. */
  username: string;
  /** URL del avatar del usuario. */
  avatarUrl: string;
  /** Enlaces a redes sociales del usuario. */
  socials: SocialLinks;
  /** Descripción del trabajo o rol del usuario. */
  workDescription: string;
  /** Datos curiosos o divertidos sobre el usuario. */
  funFacts: string;
  /** Color de fondo de la tarjeta. */
  backgroundColor?: string;
  /** Color del texto de la tarjeta. */
  textColor?: string;
  /** Si la tarjeta debe tener bordes redondeados. */
  rounded?: boolean;
  /** Estilos CSS adicionales para la tarjeta. */
  style?: React.CSSProperties;
}

const UserCard: React.FC<UserCardProps> = ({
  name,
  username,
  avatarUrl,
  socials,
  workDescription,
  funFacts,
  backgroundColor = "#4285F4",
  textColor = "#FFFFFF",
  rounded = true,
  style,
}) => {
  return (
    <div
      className={`${rounded ? "rounded-b-lg" : ""} p-6`}
      style={{ backgroundColor, color: textColor, ...style }}
    >
      <div className="container m-auto grid md:grid-cols-[auto_minmax(200px,auto)_1fr_1fr] gap-5">
        {/* Sección 1: Avatar */}
        <div className="md:items-center flex justify-center mb-4 md:mb-0">
          <img
            src={avatarUrl}
            alt={`${name} avatar`}
            className="w-25 h-25 rounded-full object-cover mb-4"
          />
        </div>
        {/* Sección 2: Información y redes sociales */}
        <div className="">
          <h2 className="text-xl font-semibold">{name}</h2>
          <p className="text-sm opacity-80">{username}</p>
          <div className="flex space-x-4 mt-3">
            {socials.instagram && (
              <a
                href={socials.instagram}
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiInstagram className="w-5 h-5" color={textColor} />
              </a>
            )}
            {socials.github && (
              <a
                href={socials.github}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="w-5 h-5" color={textColor} />
              </a>
            )}
            {socials.linkedin && (
              <a
                href={socials.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" color={textColor} />
              </a>
            )}
          </div>
        </div>
        {/* Sección 3: My Work */}
        <div className="">
          <h3
            className={`text-xl font-semibold${!workDescription ? " opacity-50" : ""}`}
          >
            My work
          </h3>
          <p className="mt-2">{workDescription}</p>
        </div>
        {/* Sección 4: Fun Facts */}
        <div className="">
          <h3
            className={`text-xl font-semibold${!funFacts ? " opacity-50" : ""}`}
          >
            Fun Fact
          </h3>
          <p className="mt-2">{funFacts}</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
