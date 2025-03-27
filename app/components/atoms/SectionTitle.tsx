import React from "react";

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  className = "",
}) => {
  return (
    <div
      className={`${centered ? "text-center" : "text-left"} mb-10 ${className}`}
    >
      <h2 className="font-serif text-2xl tracking-wider mb-2">{title}</h2>
      {subtitle && <p className="text-gray-600 text-sm">{subtitle}</p>}
    </div>
  );
};

export default SectionTitle;
