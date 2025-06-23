import React from "react";

export type ButtonVariant =
  | "primary"
  | "black-outline"
  | "regular"
  | "link"
  | "blue-outline";

export interface ButtonProps {
  variant?: ButtonVariant;
  icon?: React.ReactNode;
  href?: string; // Agrega soporte para el atributo href
  className?: string;
  children?: React.ReactNode;
}

const baseClasses =
  "font-semibold py-2 px-4 rounded transition-colors duration-200 flex items-center justify-center";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-yellow-400 hover:bg-yellow-500 text-[#343433]",
  "black-outline":
    "border border-black text-[#343433] hover:bg-black hover:text-white",
  regular: "bg-gray-200 hover:bg-gray-300 text-[#343433]",
  link: "bg-transparent text-blue-400 underline hover:no-underline p-0",
  "blue-outline":
    "border-2 border-blue-400 text-[#343433] font-semibold py-1 px-6 rounded-lg transition-colors duration-200 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400 flex items-center justify-center",
};

const Button: React.FC<ButtonProps> = ({
  variant = "link",
  className = "",
  children,
  icon,
  href, // Agrega href como prop
  ...rest
}) => {
  const classes =
    `${baseClasses} ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {icon && (
          <span
            className={
              children ? "mr-2 flex items-center" : "flex items-center"
            }
          >
            {icon}
          </span>
        )}
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...rest}>
      {icon && (
        <span
          className={children ? "mr-2 flex items-center" : "flex items-center"}
        >
          {icon}
        </span>
      )}
      {children}
    </button>
  );
};

export default Button;
