// next
import Image from "next/image";
import Link from "next/link";

// clsx
import clsx from "clsx";

// types
export type LogoProps = {
  id: string;
  href: string;
  size?: "small" | "medium" | "large";
};

const Logo = ({ id, href, size = "medium" }: LogoProps) => {
  return (
    <Link
      key={id}
      href={href}
      className={clsx(
        "block",
        size === "small" && "w-16 h-auto",
        size === "medium" && "w-24 h-auto",
        size === "large" && "w-32 h-auto"
      )}
    >
      <Image
        src="/images/logo.webp"
        className="block w-full h-auto"
        width={750}
        height={50}
        alt="logo"
      />
    </Link>
  );
};

export default Logo;
