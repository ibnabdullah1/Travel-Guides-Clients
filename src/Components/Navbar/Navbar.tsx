"use client";
import { setSearchTerm } from "@/src/redux/features/search/searchSlice";
import { debounce } from "@/src/utils/debounce";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChangeEvent } from "react";
import { IoCreateOutline, IoNotificationsOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { useDispatch } from "react-redux";
import Dropdown from "../Common/shared/MenuDropdown";

const Navbar = () => {
  const pathname = usePathname();
  const dispatch = useDispatch();

  const handleSearchChange = debounce((e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(e.target.value));
  }, 1000);
  return (
    <header className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8 py-3 lg:py-0 relative">
      <div className="flex items-center gap-3">
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
        <div className="hidden md:flex items-center bg-gray-50  rounded-full gap-2 px-4 py-3">
          <LuSearch className="text-gray-400 text-lg" />
          <input
            type="text"
            name="search"
            id="search"
            className="placeholder:text-base w-[200px] bg-gray-50 placeholder:text-slate-400 border-none outline-none focus:ring-0"
            placeholder="Search..."
            onChange={handleSearchChange}
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <Link
          href={"/about-us"}
          className={` text-lg hidden lg:flex ${
            pathname === "/about-us"
              ? "text-primary"
              : " text-secondary/70 hover:text-secondary"
          }`}
        >
          <h4>About Us</h4>
        </Link>

        <Link
          href={"/contact-us"}
          className={` px-4 text-lg hidden lg:flex ${
            pathname === "/contact-us"
              ? "text-primary"
              : " text-secondary/70 hover:text-secondary"
          }`}
        >
          <h4>Contact Us</h4>
        </Link>
        <Link
          href={"/create-post"}
          className="gap-1 hidden lg:flex text-lg text-secondary/70 hover:text-secondary"
        >
          <IoCreateOutline className="text-2xl" />
          <h4>Write</h4>
        </Link>

        <IoNotificationsOutline className="text-2xl text-secondary/70 hover:text-secondary" />
        <Dropdown />
      </div>
    </header>
  );
};

export default Navbar;
