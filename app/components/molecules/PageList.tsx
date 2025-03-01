import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "#", label: "ホーム" },
  { href: "#", label: "メニュー" },
  { href: "#", label: "購入方法" },
  { href: "/cart", icon: "/images/cart.svg" },
];

const PageList = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      {navItems.map(({ href, label, icon }) => (
        <Link key={label} href={href}>
          {icon ? (
            <Image src={icon} alt="icon" width={24} height={24} />
          ) : (
            <span>{label}</span>
          )}
        </Link>
      ))}
    </div>
  );
};

export default PageList;
