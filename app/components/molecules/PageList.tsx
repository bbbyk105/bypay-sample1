import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/", label: "ホーム" },
  { href: "/products", label: "商品一覧" },
  { href: "/caution", label: "ご利用にあたって" },
  { href: "/cart", icon: "/images/cart.svg" },
];

const PageList = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      {navItems.map(({ href, label, icon }) => (
        <Link key={`${href}-${label}`} href={href}>
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
