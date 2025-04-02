"use client";

import React, { ReactNode, ButtonHTMLAttributes } from "react";

// サイズとバリアントの型定義
type ButtonSize = "sm" | "default" | "lg";
type ButtonVariant = "primary" | "subtle" | "ghost" | "danger";
type ButtonType = "button" | "submit" | "reset";

// Props型定義
interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant: ButtonVariant;
  type?: ButtonType;
  icon?: ReactNode;
}

// 洗練されたボタンコンポーネント
const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  className = "",
  size = "default",
  variant = "primary",
  onClick,
  disabled = false,
  type = "button",
  icon,
  ...props
}) => {
  // サイズに基づくクラス
  const sizeClasses: Record<ButtonSize, string> = {
    sm: "px-3.5 py-2 text-sm",
    default: "px-5 py-2.5 text-base",
    lg: "px-6 py-3.5 text-lg",
  };

  // 高級感のある暗めのバリアントクラス
  const variantClasses: Record<ButtonVariant, string> = {
    primary: "bg-indigo-900 hover:bg-indigo-800 text-white shadow-md",
    subtle:
      "bg-gray-900 bg-opacity-90 hover:bg-opacity-100 text-gray-100 border border-gray-700",
    ghost:
      "bg-transparent border border-gray-700 hover:bg-gray-900 hover:bg-opacity-10 text-gray-800",
    danger: "bg-red-900 hover:bg-red-800 text-white shadow-md",
  };

  // 基本クラス（高級感を強調）
  const baseClasses =
    "rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-indigo-500 inline-flex items-center justify-center tracking-wide";

  // 無効化クラス
  const disabledClasses = disabled
    ? "opacity-60 cursor-not-allowed"
    : "cursor-pointer";

  // アイコンのスペーシング
  const iconSpacing = icon ? "gap-2" : "";

  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${disabledClasses} ${iconSpacing} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
      {...props}
    >
      {icon && <span className="inline-flex">{icon}</span>}
      {children}
    </button>
  );
};

export default CustomButton;
