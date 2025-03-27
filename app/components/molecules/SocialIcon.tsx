import React from "react";
import { IconType } from "react-icons";

type SocialIconProps = {
  Icon: IconType;
  url: string;
  label: string;
};

const SocialIcon: React.FC<SocialIconProps> = ({ Icon, url, label }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-gray-800 hover:text-gray-600 transition-colors"
    >
      <Icon size={18} />
    </a>
  );
};

export default SocialIcon;
