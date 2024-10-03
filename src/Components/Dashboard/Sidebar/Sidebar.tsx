import Link from "next/link";
import { LuHome } from "react-icons/lu";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import MenuItem from "./MenuItem";

const Sidebar = ({ isActive }: any) => {
  return (
    <div
      className={`z-20 fixed flex flex-col justify-between overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[rgba(0,0,0,0.05)]  bg-[#fff] w-[280px] space-y-6  pb-4  inset-y-0 left-0 transform ${
        isActive && "-translate-x-full"
      }  lg:translate-x-0  transition duration-200 ease-in-out`}
    >
      <div>
        <div className="sticky py-2 top-0 flex justify-center bg-white z-40">
          <Link
            href="/"
            aria-label="E-Pharmacy"
            title="E-Pharmacy"
            className="inline-flex  items-center mr-8 gap-1"
          >
            <span className="text-2xl font-bold text-primary">Pharmify</span>
          </Link>
        </div>
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <MenuItem
              icon={MdOutlineDashboardCustomize}
              label="Dashboard"
              address="/dashboard"
            />
            <MenuItem
              icon={MdOutlineDashboardCustomize}
              label="Profile"
              address="/profile"
            />
            {/* User Menu Items */}
            <div className="w-full h-[1px] bg-secondary/30 my-8"></div>
            <MenuItem icon={LuHome} label="Home" address="/" />{" "}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
