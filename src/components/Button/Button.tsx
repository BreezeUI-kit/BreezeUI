import React from "react";
import clsx from "clsx";


type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

const Button = ({ children, variant = "primary", onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={clsx(
        "px-4 py-2 rounded-lg font-medium",
        variant === "primary"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white",
      )}
    >
      {children}
    </button>
  );
};

export default Button;
