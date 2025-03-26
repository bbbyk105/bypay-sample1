import Image from "next/image";
import Link from "next/link";

// ナビゲーション項目の型
type NavItem = {
  href: string;
  label: string;
  icon?: string; // iconは省略可能
};

const navItems: NavItem[] = [
  { href: "/", label: "ホーム" },
  { href: "/products", label: "商品一覧" },
  { href: "/caution", label: "ご利用にあたって" },
  { href: "/cart", label: "カート" },
];

// propsの型
type PageListProps = {
  className: string;
  onItemSelect?: () => void;
};

const PageList = ({ className, onItemSelect }: PageListProps) => {
  const handleItemClick = () => {
    if (onItemSelect) {
      onItemSelect();
    }
  };

  return (
    <div className={className}>
      {navItems.map(({ href, label, icon }) => (
        <Link
          key={`${href}-${label}`}
          href={href}
          onClick={handleItemClick}
          className="flex items-center"
        >
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
