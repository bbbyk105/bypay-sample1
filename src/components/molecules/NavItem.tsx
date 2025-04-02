import React from "react";
import Link from "next/link";

type NavItemProps = {
  label: string;
  href: string;
  active?: boolean;
};

const NavItem: React.FC<NavItemProps> = ({ label, href, active = false }) => {
  return (
    <Link
      href={href}
      className={`relative text-sm tracking-wide hover:opacity-75 transition-opacity py-1 ${
        active ? "font-medium" : "font-light"
      }`}
    >
      {label}
      {active && (
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-black" />
      )}
    </Link>
  );
};

export default NavItem;
