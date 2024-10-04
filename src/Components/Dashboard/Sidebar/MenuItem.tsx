import Link from "next/link";
import { usePathname } from "next/navigation";

const MenuItem = ({ label, address, icon: Icon }: any) => {
  const pathname = usePathname();
  const isPathname = pathname === address;

  return (
    <div className="mb-4">
      <Link
        href={address}
        className={`flex items-center gap-2 px-4 py-[6px]  transition-colors duration-300 transform     ${
          isPathname
            ? "bg-primary text-[#ffffff]"
            : "text-[#2d2c2c] hover:bg-[rgb(105,182,76,0.3)] hover:text-primary "
        }`}
      >
        <Icon className="size-5" />

        <span className="font-medium uppercase">{label}</span>
      </Link>
    </div>
  );
};

export default MenuItem;
