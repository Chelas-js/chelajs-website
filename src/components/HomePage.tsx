import React from "react";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Footer from "./Footer";
import { Users, Code, Beer, Calendar, Github, Coffee } from "lucide-react";

interface CommunityFeature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface GalleryImage {
  url: string;
  alt: string;
}

interface HomePageProps {
  joinHref?: string;
  loginHref?: string;
  exploreHref?: string;
  nextEventHref?: string;
  galleryImages?: GalleryImage[];
  className?: string;
}

const defaultGalleryImages: GalleryImage[] = [
  {
    url: "https://placehold.co/400x300/4285F4/FFFFFF?text=Event+1",
    alt: "Evento de ChelaJS 1",
  },
  {
    url: "https://placehold.co/400x300/34A853/FFFFFF?text=Event+2",
    alt: "Evento de ChelaJS 2",
  },
  {
    url: "https://placehold.co/400x300/EA4335/FFFFFF?text=Event+3",
    alt: "Evento de ChelaJS 3",
  },
  {
    url: "https://placehold.co/400x300/FBBC05/000000?text=Event+4",
    alt: "Evento de ChelaJS 4",
  },
  {
    url: "https://placehold.co/400x300/9C27B0/FFFFFF?text=Event+5",
    alt: "Evento de ChelaJS 5",
  },
  {
    url: "https://placehold.co/400x300/FF5722/FFFFFF?text=Event+6",
    alt: "Evento de ChelaJS 6",
  },
];

const communityFeatures: CommunityFeature[] = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Comunidad Inclusiva",
    description:
      "Un espacio donde todos los desarrolladores son bienvenidos, sin importar su nivel de experiencia o background técnico.",
  },
  {
    icon: <Code className="w-8 h-8" />,
    title: "Aprendizaje Colaborativo",
    description:
      "Compartimos conocimientos, experiencias y mejores prácticas en un ambiente relajado y constructivo.",
  },
  {
    icon: <Beer className="w-8 h-8" />,
    title: "Networking Casual",
    description:
      "Conectamos con otros profesionales tech mientras disfrutamos de una buena cerveza y conversaciones genuinas.",
  },
];

const HomePage: React.FC<HomePageProps> = ({
  joinHref = "https://lu.ma/chelas.js",
  loginHref = "#login",
  exploreHref = "#explore",
  nextEventHref = "https://lu.ma/chelas.js",
  galleryImages = defaultGalleryImages,
  className = "",
}) => {
  const renderGalleryImage = (image: GalleryImage, index: number) => (
    <div
      key={index}
      className="aspect-square overflow-hidden rounded-lg bg-gray-200 hover:scale-105 transition-transform duration-300"
    >
      <img
        src={image.url}
        alt={image.alt}
        className="w-full h-full object-cover"
      />
    </div>
  );

  const renderCommunityFeature = (feature: CommunityFeature, index: number) => (
    <div
      key={index}
      className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
      data-testid={`community-feature-${index}`}
    >
      <div className="flex justify-center mb-4 text-blue-600">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gray-800">
        {feature.title}
      </h3>
      <p className="text-gray-600 leading-relaxed">{feature.description}</p>
    </div>
  );

  return (
    <div
      className={`min-h-screen bg-white ${className}`}
      data-testid="homepage"
    >
      {/* Navigation */}
      <Navbar
        joinHref={joinHref}
        loginHref={loginHref}
        exploreHref={exploreHref}
      />

      {/* Hero Section */}
      <Hero nextEventHref={nextEventHref} />

      {/* Photo Gallery Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Nuestros Eventos
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explora los momentos más destacados de nuestra comunidad en acción
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {galleryImages.map((image, index) =>
              renderGalleryImage(image, index),
            )}
          </div>
        </div>
      </section>

      {/* Introduction to Chelas Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              ¿Qué es ChelaJS?
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                <strong>ChelaJS</strong> es una comunidad vibrante de
                desarrolladores JavaScript que combina la pasión por la
                tecnología con el ambiente relajado de compartir una buena
                cerveza.
              </p>
              <p>
                Nacimos con la idea de crear un espacio donde los profesionales
                de la tecnología puedan conectar, aprender y crecer juntos en un
                ambiente informal y amigable. Creemos que las mejores
                conversaciones sobre código suceden cuando estás cómodo y
                relajado.
              </p>
              <div className="flex justify-center space-x-6 pt-8">
                <div className="flex items-center space-x-2 text-blue-600">
                  <Calendar className="w-5 h-5" />
                  <span className="font-medium">Eventos Regulares</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-600">
                  <Github className="w-5 h-5" />
                  <span className="font-medium">Proyectos Open Source</span>
                </div>
                <div className="flex items-center space-x-2 text-blue-600">
                  <Coffee className="w-5 h-5" />
                  <span className="font-medium">Networking Casual</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Características de Nuestra Comunidad
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Descubre qué hace especial a ChelaJS y por qué cada vez más
              desarrolladores se unen a nuestra comunidad
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {communityFeatures.map((feature, index) =>
              renderCommunityFeature(feature, index),
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
