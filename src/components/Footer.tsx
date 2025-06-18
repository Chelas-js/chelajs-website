import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-gray-100 text-gray-800 py-6 mt-8">
      <div className="container mx-auto px-6 flex flex-col items-center">
        <span className="font-semibold mb-2">Chela.js</span>
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://github.com/chelas-js"
              className="text-blue-400 underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/chelajscommunity"
              className="text-blue-400 underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://lu.ma/chelas.js"
              className="text-blue-400 underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Luma
            </a>
          </li>
        </ul>
        <p className="text-sm mt-4">
          &copy; {new Date().getFullYear()} Chela.js
        </p>
      </div>
    </footer>
  );
};

export default Footer;
