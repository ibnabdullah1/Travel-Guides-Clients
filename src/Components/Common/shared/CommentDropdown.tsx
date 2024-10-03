"use client";
import { useDeleteCommentToPostMutation } from "@/src/redux/features/post/postApi";
import { Menu, Transition } from "@headlessui/react";
import { useParams } from "next/navigation";
import { Fragment, useState } from "react";
import toast from "react-hot-toast";
import {
  AiOutlineDelete,
  AiOutlineEdit,
  AiOutlineEllipsis,
} from "react-icons/ai";
import CommentUpdateModal from "../../Modal/CommentUpdateModal";

const CommentDropdown = ({ commentId, content }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { postId } = useParams();
  const [deleteCommentToPost] = useDeleteCommentToPostMutation();

  const handleDeleteComment = async () => {
    const data = { commentId, postId };
    const res: any = await deleteCommentToPost(data).unwrap();
    if (res.success) {
      toast.success(res.message);
    }
  };

  const openModal = () => {
    setIsOpen(true);
    setIsMenuOpen(false);
  };

  return (
    <>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <div className="hover:text-primary">
            <AiOutlineEllipsis size={28} />
          </div>
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
            <button
              onClick={handleDeleteComment}
              className="flex items-center cursor-pointer px-4 py-2 text-sm text-gray-700 hover:text-primary"
            >
              <span className="mr-2">
                <AiOutlineDelete />
              </span>
              Delete
            </button>

            <button
              onClick={openModal}
              className="flex items-center cursor-pointer px-4 py-2 text-sm text-gray-700 hover:text-primary"
            >
              <span className="mr-2">
                <AiOutlineEdit className="text-lg" />
              </span>
              Edit
            </button>
          </Menu.Items>
        </Transition>
      </Menu>

      <CommentUpdateModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        commentId={commentId}
        content={content}
      />
    </>
  );
};

export default CommentDropdown;
