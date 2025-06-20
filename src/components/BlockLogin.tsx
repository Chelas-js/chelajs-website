import React from "react";

interface BlockLoginProps {
  onGithubLogin: () => void;
}

const BlockLogin: React.FC<BlockLoginProps> = ({ onGithubLogin }) => {
  return (
    <div className="">
      <div className="bg-white rounded-2xl shadow p-10 flex flex-col items-center w-[420px] min-w-[320px] min-h-[320px] rounded-3xl border border-gray-200">
        <h1 className="text-3xl font-bold mb-16 mt-2 text-center">
          Iniciar sesion
        </h1>
        <button
          onClick={onGithubLogin}
          className="flex items-center gap-2 bg-amber-400 hover:bg-amber-500 text-black font-semibold py-2 px-6 rounded transition-colors duration-200 shadow focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.687-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.594 1.028 2.687 0 3.847-2.337 4.695-4.566 4.944.36.31.68.921.68 1.857 0 1.34-.012 2.422-.012 2.753 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z"
              clipRule="evenodd"
            />
          </svg>
          Github
        </button>
      </div>
    </div>
  );
};

export default BlockLogin;
