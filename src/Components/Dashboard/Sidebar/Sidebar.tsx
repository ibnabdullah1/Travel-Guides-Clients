import { selectCurrentUser } from "@/src/redux/features/auth/authSlice";
import { RootState } from "@/src/redux/features/store";
import Image from "next/image";
import Link from "next/link";
import { LuHome } from "react-icons/lu";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { useSelector } from "react-redux";
import AdminMenu from "./AdminMenu";
import MenuItem from "./MenuItem";
import UserMenu from "./UserMenu";

const Sidebar = ({ isActive }: any) => {
  const user = useSelector((state: RootState) => selectCurrentUser(state));
  return (
    <div
      className={`z-20 fixed flex flex-col justify-between overflow-x-hidden scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[rgba(0,0,0,0.05)]  bg-[#fff] w-[280px] space-y-6  pb-4  inset-y-0 left-0 transform ${
        isActive && "-translate-x-full"
      }  lg:translate-x-0  transition duration-200 ease-in-out`}
    >
      <div>
        <div className="sticky py-2 top-0 flex justify-center bg-white z-40">
          <Link href={"/"} className="lg:py-2">
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
        </div>
        <div className="flex flex-col justify-between flex-1 mt-6">
          <nav>
            <MenuItem
              icon={MdOutlineDashboardCustomize}
              label="Dashboard"
              address="/dashboard"
            />
            {user?.role === "ADMIN" && <AdminMenu />}
            {user?.role === "USER" && <UserMenu />}
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
