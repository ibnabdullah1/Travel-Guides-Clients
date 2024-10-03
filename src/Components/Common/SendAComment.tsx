import { selectCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useAddCommentToPostMutation } from "@/src/redux/features/post/postApi";
import { RootState } from "@/src/redux/features/store";
import { formatDate } from "@/src/utils/formatDate";
import { useParams } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const SendAComment = ({ comment }: any) => {
  const user = useSelector((state: RootState) => selectCurrentUser(state));
  const { postId } = useParams();
  const [loading, setLoading] = useState(false);
  const [addCommentToPost] = useAddCommentToPostMutation();
  const handleSubmitComment = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const date = new Date();
      const comment = {
        date: formatDate(date),
        content: e.target.content.value,
        author: user?._id,
      };
      const data = { comment, id: postId };
      const res: any = await addCommentToPost(data).unwrap();

      if (res.success) {
        setLoading(false);
        toast.success(res.message);
        e.target.reset();
      }
    } catch (error: any) {
      setLoading(false);
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="w-full flex-col justify-start items-start lg:gap-10 gap-6 inline-flex">
      <h2 className="text-gray-900 text-3xl font-bold font-manrope leading-normal">
        {comment ? comment : "0"} Comments
      </h2>

      {/* Comment Input Section */}

      <form onSubmit={handleSubmitComment} className="w-full space-y-3">
        <textarea
          rows={4}
          name="content"
          required
          className="appearance-none block w-full px-3 pl-6 text-[16px] py-4 border-2  rounded-md placeholder-[#333333]/50 focus:outline-none focus:border-primary/50 transition duration-150 ease-in-out"
          placeholder="Add a comment...."
        />
        <button
          type="submit"
          className="px-6 py-4 w-full bg-gray-100 rounded text-secondary/80 font-semibold hover:bg-primary duration-500 hover:text-white"
        >
          {loading ? "Posting..." : "Post"}
        </button>
      </form>

      {/* Comments List */}
    </div>
  );
};

export default SendAComment;
