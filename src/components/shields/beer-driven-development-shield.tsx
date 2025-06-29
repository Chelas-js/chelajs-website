import React from "react";
import Image from "next/image";

const BeerDrivenDevelopmentShield: React.FC = ({}) => {
  return (
    <Image
      src={"/public/shields/beer-driven-development.png"}
      alt={`Beer Driven Development shield`}
      width={96}
      height={96}
      className="w-24 h-24 object-contain border border-gray-300"
    />
  );
};

export default BeerDrivenDevelopmentShield;
