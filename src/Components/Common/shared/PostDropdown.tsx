"use client";
import { useDeleteSinglePostMutation } from "@/src/redux/features/post/postApi";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { BsThreeDots } from "react-icons/bs";
import { IoCloudDownloadOutline } from "react-icons/io5";
import Swal from "sweetalert2";

const PostDropdown = ({ handleDownloadPdfFormat, isUser, postId }: any) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [deleteSinglePost] = useDeleteSinglePostMutation();
  const router = useRouter();
  // Function to close the menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const handleDelete = async (id: any) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      try {
        const res = await deleteSinglePost(id).unwrap();
        if (res.success) {
          toast.success(res.message);
          router.push("/not-found");
        }
      } catch (error) {
        toast.error("Failed to delete the post.");
        console.error("Error deleting post:", error);
      }
    }
  };

  return (
    <Menu as="div" className="relative inline-block text-left" ref={menuRef}>
      <Menu.Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <BsThreeDots className="hover:text-primary duration-150 text-secondary/90" />
      </Menu.Button>

      <Transition
        as={Fragment}
        show={isMenuOpen}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-[200px] origin-top-right divide-y divide-gray-100 z-50 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
          {isUser && (
            <>
              <button
                onClick={() => handleDelete(postId)}
                className="flex items-center cursor-pointer px-4 py-2 text-sm text-gray-700 hover:text-primary"
              >
                <span className="mr-2">
                  <AiOutlineDelete className="text-lg" />
                </span>
                Delete
              </button>
              <Link href={`/update-post/${postId}`}>
                <button className="flex items-center cursor-pointer px-4 py-2 text-sm text-gray-700 hover:text-primary">
                  <span className="mr-2">
                    <AiOutlineEdit className="text-lg" />
                  </span>
                  Edit
                </button>
              </Link>
            </>
          )}

          <button
            onClick={handleDownloadPdfFormat}
            className="flex items-center cursor-pointer px-4 py-2 text-sm text-gray-700 hover:text-primary"
          >
            <span className="mr-2">
              <IoCloudDownloadOutline className="text-lg" />
            </span>
            Download PDF
          </button>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default PostDropdown;
