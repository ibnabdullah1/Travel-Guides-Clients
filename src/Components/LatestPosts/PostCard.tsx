import { selectCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useAddReactionToPostMutation } from "@/src/redux/features/reaction/reactionApi";
import { RootState } from "@/src/redux/features/store";
import Image from "next/image";
import Link from "next/link";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { CiBookmarkPlus, CiCircleMinus } from "react-icons/ci";
import { FaComment } from "react-icons/fa6";
import { MdVerified } from "react-icons/md";
import { PiStarFourFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterIcon,
  TwitterShareButton,
} from "react-share";

const PostCard = ({
  _id,
  title,
  subTitle,
  image,
  authorId,
  likes,
  dislikes,
  comments,
  category,
  status,
  date,
}: any) => {
  const user = useSelector((state: RootState) => selectCurrentUser(state));
  const [addReactionToPost] = useAddReactionToPostMutation();

  const isLike =
    !!likes && likes.length > 0 && likes.find((like: any) => like == user?._id);
  const isDisLike =
    !!dislikes &&
    dislikes.length > 0 &&
    dislikes.find((dislike: any) => dislike == user?._id);
  const shareUrl = `https://travel-guide-community.vercel.app/post/${_id}`;

  const handleReaction = async (id: any, action: any) => {
    const data = { postId: id, data: { userId: user?._id, action } };
    try {
      await addReactionToPost(data).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="px-5 py-10 flex flex-col-reverse lg:grid grid-cols-7 items-center border-b">
      <div className="lg:col-span-5 space-y-2 w-full">
        <div className="flex items-center gap-2 mb-5">
          <Image
            src={authorId?.profilePhoto}
            width={1200}
            height={200}
            alt="author"
            className="size-6 rounded-full"
          />
          <h3 className="text-sm flex items-center gap-4 text-secondary/90 ">
            <span className="hover:underline cursor-pointer flex items-center gap-1">
              {" "}
              {authorId?.name}
              {authorId?.isPremium && (
                <MdVerified className="text-blue-500 text-lg" />
              )}
            </span>
            <span className="px-3 py-[2px] text-xs bg-primary/20 text-primary rounded-full">
              {" "}
              {category}
            </span>
            <span className="px-3 py-[2px] text-xs bg-green-500 text-white rounded-full">
              {" "}
              {status}
            </span>
          </h3>
        </div>
        <Link href={`post/${_id}`}>
          <h1 className="text-[24px] leading-[35px] font-bold lg:w-[80%] font-roboto hover:text-primary duration-150">
            {title}
          </h1>
        </Link>
        <p className="text-sm text-secondary/90">{subTitle}</p>

        <div className="flex items-center justify-between lg:w-[90%] pt-5">
          <div className="flex  items-center gap-4 text-sm">
            <div className="flex items-center gap-3">
              <PiStarFourFill className="text-yellow-500" />
              <p>{date}</p>
            </div>
            <button
              onClick={() => handleReaction(_id, "like")}
              className="flex items-center gap-1"
            >
              <AiFillLike
                className={`text-base ${
                  isLike
                    ? "text-blue-500"
                    : "text-secondary/90 hover:text-blue-500"
                }`}
              />
              {likes?.length}
            </button>
            <button
              onClick={() => handleReaction(_id, "disLike")}
              className="flex items-center gap-1"
            >
              <AiFillDislike
                className={`text-base ${
                  isDisLike
                    ? "text-blue-500 "
                    : "text-secondary/90 hover:text-blue-500"
                }`}
              />
              {dislikes?.length}
            </button>
            <div className="flex items-center gap-1">
              <FaComment className="text-base text-secondary/90" />
              {comments?.length}
            </div>
          </div>

          <div className="flex items-center gap-4 text-xl">
            <CiCircleMinus className="hover:text-primary duration-150 text-secondary/90" />
            <CiBookmarkPlus className="hover:text-primary duration-150 text-secondary/90" />
          </div>
        </div>

        <div className="flex gap-2 mt-2">
          Share:
          <FacebookShareButton url={shareUrl}>
            <FacebookIcon size={20} round={true} />
          </FacebookShareButton>
          <TwitterShareButton url={shareUrl}>
            <TwitterIcon size={20} round={true} />
          </TwitterShareButton>
          <LinkedinShareButton url={shareUrl}>
            <LinkedinIcon size={20} round={true} />
          </LinkedinShareButton>
        </div>
      </div>
      <div className="lg:col-span-2 w-full lg:mb-0 mb-6">
        <Image
          src={image}
          width={1200}
          height={200}
          alt="post image"
          className="w-full h-[200px] md:h-[300px] lg:h-[120px] object-cover"
        />
      </div>
    </div>
  );
};

export default PostCard;
