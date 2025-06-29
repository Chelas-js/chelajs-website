import React from "react";
import Button from "./Button";

interface HeroProps {
  nextEventHref?: string;
}

const Hero: React.FC<HeroProps> = ({ nextEventHref }) => {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto p-2 grid grid-cols-[1fr_2fr] gap-4">
        <div className="py-12">
          <h2 className="text-3xl font-bold mb-4">
            Donde la tecnología se destapa mejor con una cerveza.
          </h2>
          {nextEventHref && (
            <Button variant="primary" href={nextEventHref}>
              Ver próximo
            </Button>
          )}
        </div>
        <div></div>
      </div>
    </section>
  );
};

export default Hero;
