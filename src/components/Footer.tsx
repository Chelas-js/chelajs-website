import React from "react";
import { Github, Instagram, Calendar } from "lucide-react";

interface SocialLink {
  platform: "github" | "instagram" | "luma";
  url: string;
  label: string;
}

interface FooterProps {
  socialLinks?: SocialLink[];
  copyrightYear?: number;
  className?: string;
}

const defaultSocialLinks: SocialLink[] = [
  {
    platform: "github",
    url: "https://github.com/chelas-js",
    label: "GitHub de ChelaJS",
  },
  {
    platform: "instagram",
    url: "https://instagram.com/chelajscommunity",
    label: "Instagram de ChelaJS",
  },
  {
    platform: "luma",
    url: "https://lu.ma/chelas.js",
    label: "Eventos en Luma",
  },
];

const Footer: React.FC<FooterProps> = ({
  socialLinks = defaultSocialLinks,
  copyrightYear = new Date().getFullYear(),
  className = "",
}) => {
  const renderIcon = (platform: string) => {
    switch (platform) {
      case "github":
        return <Github className="w-5 h-5" />;
      case "instagram":
        return <Instagram className="w-5 h-5" />;
      case "luma":
        return <Calendar className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer
      className={`bg-white border-t border-gray-200 py-8 mt-16 ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-6 md:flex-row md:space-y-0">
          {/* Logo/Branding */}
          <div className="text-center md:text-left">
            <span
              data-testid="brand"
              className="text-xl font-bold text-[#343433]"
            >
              ChelaJS
            </span>
            <p className="text-sm text-gray-600 mt-1">
              Comunidad tech chilena 🍺
            </p>
          </div>

          {/* Enlaces sociales */}
          <div className="flex items-center space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-400 transition-colors duration-200 flex items-center space-x-2"
                aria-label={link.label}
                title={link.label}
              >
                {renderIcon(link.platform)}
                <span className="text-sm font-medium capitalize">
                  {link.platform}
                </span>
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-gray-500 text-sm">
              © {copyrightYear} ChelaJS. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
