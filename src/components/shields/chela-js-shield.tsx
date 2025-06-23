import React from "react";
import Image from "next/image";

const ChelaJsShield: React.FC = () => {
  return (
    <Image
      src={"/public/shields/chela-js.png"}
      alt={`Chela JS shield`}
      width={96}
      height={96}
      className="w-24 h-24 object-contain border border-gray-300"
    />
  );
};

export default ChelaJsShield;
