import { useUpdateCommentToPostMutation } from "@/src/redux/features/post/postApi";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";

export default function CommentUpdateModal({
  isOpen,
  setIsOpen,
  content,
  commentId,
}: any) {
  const [loading, setLoading] = useState(false);
  const [updateCommentToPost] = useUpdateCommentToPostMutation();
  const { postId } = useParams();
  const handleSubmitComment = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    const updateComment = {
      content: e.target.content.value,
      commentId,
    };
    const data = { updateComment, postId };
    const res = await updateCommentToPost(data).unwrap();
    if (res.success) {
      setLoading(false);
      setIsOpen(false);
      toast.success(res.message);
    }
  };
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={() => setIsOpen(false)}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-lg rounded bg-white border duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0 p-5"
            >
              <form onSubmit={handleSubmitComment} className="w-full space-y-3">
                <textarea
                  rows={4}
                  name="content"
                  defaultValue={content}
                  required
                  className="appearance-none block w-full bg-transparent placeholder:text-gray-300 border-none outline-none focus:ring-0"
                  placeholder="Update comment...."
                />
                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    className="px-4 py-[6px] rounded bg-green-500 duration-150 hover:bg-[#08ee68]  text-white"
                  >
                    {loading ? "Updating..." : "Update"}
                  </button>
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="px-4 py-[6px] rounded bg-red-500 duration-150 hover:bg-[#ee0808]  text-white"
                  >
                    Close
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
