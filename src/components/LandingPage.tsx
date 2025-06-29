import React from "react";
import Button from "./Button";

interface LandingPageProps {
  buttonHref?: string;
}

const LandingPage: React.FC<LandingPageProps> = ({ buttonHref }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-black mb-4">Chela.js</h1>
      <h2 className="text-xl text-blue-500 mb-8">
        Donde la tecnología se destapa mejor con una cerveza.
      </h2>
      <p className="text-center text-gray-700 max-w-md mb-8">
        En <span className="font-bold">chela.js</span>, nos reunimos cada mes en
        algún bar de Santiago para compartir lo que más nos gusta: tecnología,
        proyectos, ideas, problemas y descubrimientos, todo con una chela en
        mano.
      </p>
      <p className="text-center text-gray-700 max-w-md mb-8">
        Esta comunidad une a desarrolladores, diseñadores, product managers y
        entusiastas tech para desconectarse un rato, conversar tranquilo y
        disfrutar de buena compañía.
      </p>
      <p className="text-center text-gray-700 max-w-md mb-8">
        Si trabajas en tecnología y estás en Santiago, este es tu lugar.
      </p>
      {buttonHref && (
        <Button variant="primary" href={buttonHref}>
          Unirme
        </Button>
      )}
    </div>
  );
};

export default LandingPage;
