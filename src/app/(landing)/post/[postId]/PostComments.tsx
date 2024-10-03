import CommentDropdown from "@/src/Components/Common/shared/CommentDropdown";
import Image from "next/image";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { BsDot } from "react-icons/bs";

const PostComments = ({ comments }: any) => {
  return (
    <div>
      {comments &&
        comments.length > 0 &&
        comments?.map((comment: any) => (
          <CommentCard {...comment} key={comment?._id} />
        ))}
    </div>
  );
};

const CommentCard = ({ _id, author, date, content }: any) => {
  return (
    <div className="w-full flex-col justify-center items-start gap-3.5 flex p-6 bg-white border-b border-b-gray-300 ">
      <div className="w-full justify-between items-center flex">
        <div className="items-center gap-2.5 flex">
          <Image
            width={1200}
            height={200}
            className="w-10 h-10 rounded-full object-cover"
            src={author?.profilePhoto}
            alt={author?.name}
          />

          <div className="">
            <h5 className="text-gray-900 text-sm font-semibold leading-snug">
              {author?.name}
            </h5>
            <h6 className="text-gray-500 text-xs font-normal leading-5">
              {date}
            </h6>
          </div>
        </div>

        {/* Options Dropdown */}
        {/* <AiOutlineEllipsis size={24} /> */}
        <CommentDropdown commentId={_id} content={content} />
      </div>

      {/* Comment Text */}
      <p className="text-gray-800 text-sm font-normal leading-snug">
        {content}
      </p>
      <div className="flex items-center gap-1">
        <p className="text-secondary/70 hover:text-secondary cursor-pointer">
          reply
        </p>{" "}
        <BsDot className="text-sm text-gray-500" />
        <p className="text-secondary/70 hover:text-secondary cursor-pointer">
          share
        </p>{" "}
        <BsDot className="text-sm text-gray-500" />
        <p className="text-secondary">0 likes</p>{" "}
        <BsDot className="text-sm text-gray-500" />
        <div className="flex items-center gap-2">
          <AiFillLike className="text-base text-secondary/90 hover:text-blue-500" />
          <AiFillDislike className="text-base text-secondary/90 hover:text-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default PostComments;
