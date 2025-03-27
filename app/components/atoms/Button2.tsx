import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}) => {
  const baseStyle = "font-light tracking-widest transition-all duration-300";

  const variantStyles = {
    primary: "bg-black text-white hover:bg-opacity-90",
    outline: "border border-black text-black hover:bg-black hover:text-white",
  };

  const sizeStyles = {
    sm: "px-4 py-1 text-xs",
    md: "px-6 py-2 text-sm",
    lg: "px-8 py-3 text-base",
  };

  return (
    <button
      className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
