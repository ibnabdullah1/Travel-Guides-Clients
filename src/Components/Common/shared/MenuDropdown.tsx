import { logout, selectCurrentUser } from "@/src/redux/features/auth/authSlice";
import { RootState } from "@/src/redux/features/store";
import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment } from "react";
import { FiUser } from "react-icons/fi";
import { IoCreateOutline } from "react-icons/io5";
import { MdOutlineDashboardCustomize, MdPostAdd } from "react-icons/md";
import { TbLogin } from "react-icons/tb";
import { useDispatch, useSelector } from "react-redux";

const Dropdown = () => {
  const user = useSelector((state: RootState) => selectCurrentUser(state));
  const router = useRouter();
  const dispatch = useDispatch();
  if (!user) {
    router.push("/sign-in");
  }
  const handleLogout = () => {
    dispatch(logout());
    router.push("/sign-in");
  };

  return (
    <Menu as="div" className="relative inline-block text-left">
      <Menu.Button>
        <div className=" relative rounded-full z-10 top-[3.5px]  border-[2px] border-primary/50">
          <Image
            src={
              user?.profileUrl
                ? user.profileUrl
                : "https://i.ibb.co/PmWMF1j/user.png"
            }
            alt=""
            width={1200}
            height={100}
            className="size-8 rounded-full"
          />
        </div>
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 min-w-[250px] max-w-[250px] origin-top-right divide-y divide-gray-100 z-50 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          {user ? (
            <div className="max-h-[90vh] overflow-y-auto pt-4">
              <Link
                href={"/create-post"}
                className="flex lg:hidden items-center cursor-pointer px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent  hover:border-primary  hover:text-primary"
              >
                {" "}
                <span className="mr-2">
                  <IoCreateOutline />
                </span>
                Write
              </Link>
              <Link
                href={"/user-profile"}
                className="flex items-center cursor-pointer px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent  hover:border-primary  hover:text-primary"
              >
                <span className="mr-2">
                  <FiUser />
                </span>
                Profile
              </Link>

              <Link
                href={"/my-stories"}
                className="flex px-4 cursor-pointer py-2 text-sm text-gray-700 border-l-2 border-transparent  hover:border-primary  hover:text-primary"
              >
                <span className="mr-1">
                  <MdPostAdd className="text-lg" />
                </span>
                Stories
              </Link>

              <Link
                href="/dashboard"
                className="flex px-4 py-2 cursor-pointer text-sm text-gray-700 border-l-2 border-transparent  hover:border-primary  hover:text-primary"
              >
                <span className="mr-2">
                  <MdOutlineDashboardCustomize />{" "}
                </span>
                Dashboard
              </Link>
              <hr className="my-3" />
              <a className="flex px-4 py-1 cursor-pointer text-sm text-gray-700  hover:text-primary">
                Settings
              </a>
              <Link
                href="/about-us"
                className="flex px-4 py-1 cursor-pointer text-sm text-gray-700  hover:text-primary"
              >
                About Us
              </Link>
              <Link
                href="/contact-us"
                className="flex px-4 py-1 cursor-pointer text-sm text-gray-700  hover:text-primary"
              >
                Contact Us
              </Link>
              <hr className="my-3" />
              <button
                onClick={handleLogout}
                className="px-4 py-2 text-left text-sm text-gray-700 hover:text-primary"
              >
                <p>Sign Out</p>
                <div className="flex items-center">
                  <p>
                    {user &&
                      user?.email.split("@")[0].slice(0, 2) +
                        "*".repeat(user?.email.split("@")[0].length - 2)}
                  </p>
                  <p>@{user && user?.email.split("@")[1]}</p>
                </div>
              </button>
            </div>
          ) : (
            <Link href={"/sign-in"}>
              <button className="flex px-4 py-2 text-sm text-gray-700 border-l-2 border-transparent  rounded-bl-md hover:border-primary  hover:text-primary">
                <span className="mr-2">
                  <TbLogin className="text-[15px]" />
                </span>
                Login
              </button>
            </Link>
          )}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Dropdown;
