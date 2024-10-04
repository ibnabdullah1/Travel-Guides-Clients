import Image from "next/image";
import Link from "next/link";
import { HiMiniBars3 } from "react-icons/hi2";
import { MdClose } from "react-icons/md";

const DashboardNavbar = ({ isActive, handleToggle }: any) => {
  return (
    <div className="lg:hidden max-w-[920px] mx-auto bg-gray-50 sticky top-0 z-10 flex gap-2 justify-between items-center py-3 px-4">
      <Link href={"/"} className="lg:py-2  flex lg:hidden">
        <Image
          width={1200}
          height={100}
          src={
            "https://goodtravel.guide/wp-content/uploads/2020/01/LOGO-Good-Travel-Guide.png"
          }
          alt="logo"
          className="w-[120px] md:w-[160px]"
        />
      </Link>

      <button
        onClick={handleToggle}
        className="flex bg-gray-100 rounded-full p-1 lg:hidden text-primary hover:bg-primary/10 duration-500"
      >
        {isActive ? (
          <HiMiniBars3 className="text-2xl" />
        ) : (
          <MdClose className="text-2xl" />
        )}
      </button>
    </div>
  );
};

export default DashboardNavbar;
