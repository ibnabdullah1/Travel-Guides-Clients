"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import {
  IoCloseOutline,
  IoCreateOutline,
  IoNotificationsOutline,
} from "react-icons/io5";
import Dropdown from "../Common/shared/MenuDropdown";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const Links = [
    { name: "Home", link: "/" },
    { name: "FAQs", link: "/faqs" },
    { name: "Contact Us", link: "/contact-us" },
  ];

  return (
    <header className="max-w-7xl mx-auto flex justify-between items-center px-4 lg:px-8 py-3 lg:py-0 relative">
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
      <div
        className={`fixed top-0 z-30 bg-gray-50 lg:bg-transparent right-0 lg:px-7 pb-7 pt-4 w-[250px] lg:w-auto h-full overflow-auto transform transition-transform duration-500 ${
          isMenuOpen ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        } lg:static lg:py-0 lg:overflow-visible`}
      >
        <div className="flex lg:hidden justify-between pb-5 border-b border-secondary/20 px-3 items-center">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="flex bg-gray-100 rounded-full p-1 lg:hidden text-primary"
          >
            <IoCloseOutline className="text-3xl" />
          </button>
          <div>
            <Image
              width={1200}
              height={200}
              src={
                "https://goodtravel.guide/wp-content/uploads/2020/01/LOGO-Good-Travel-Guide.png"
              }
              alt="logo"
              className="w-[100px] lg:hidden flex"
            />
          </div>
        </div>
        <ul className="list-none block bg-opacity-5 lg:flex gap-4">
          {Links.map((item) => (
            <li
              key={item.link}
              className="border-b lg:border-b-0 border-b-gray-300"
            >
              <Link
                href={item.link}
                className={`block px-4 lg:px-4 py-3 lg:py-2 text-xl ${
                  pathname === `${item.link}`
                    ? "text-white bg-primary"
                    : "text-[#333333] hover:text-primary"
                }`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center gap-3">
        <Link
          href={"/create-post"}
          className="gap-1 hidden lg:flex text-lg text-secondary/70 hover:text-secondary"
        >
          <IoCreateOutline className="text-2xl" />
          <h4>Write</h4>
        </Link>
        <IoNotificationsOutline className="text-2xl text-secondary/70 hover:text-secondary" />
        <Dropdown />
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="flex bg-gray-100 rounded-full p-1 lg:hidden text-primary"
        >
          <HiMiniBars3 className="text-3xl" />
        </button>
      </div>
    </header>
  );
};

export default Navbar;
