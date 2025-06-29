import React from "react";
import BeerDrivenDevelopmentShield from "./shields/beer-driven-development-shield";
import ChelaJsShield from "./shields/chela-js-shield";
import BeerBrandShield from "./shields/beer-brand-shield";

interface ShieldProps {
  variant?: "beerDrivenDevelopment" | "chelaJs" | "beerBrand";
}

const Shield: React.FC<ShieldProps> = ({ variant }) => {
  if (variant === "beerDrivenDevelopment")
    return <BeerDrivenDevelopmentShield></BeerDrivenDevelopmentShield>;
  if (variant === "chelaJs") return <ChelaJsShield></ChelaJsShield>;
  if (variant === "beerBrand") return <BeerBrandShield></BeerBrandShield>;

  return null;
};

export default Shield;
