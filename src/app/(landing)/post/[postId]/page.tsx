"use client";
import Loading from "@/src/Components/Common/Loading";
import SendAComment from "@/src/Components/Common/SendAComment";
import PostDropdown from "@/src/Components/Common/shared/PostDropdown";
import PostHtmlContent from "@/src/Components/PostHtmlContent/PostHtmlContent";
import { selectCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useGetSinglePostQuery } from "@/src/redux/features/post/postApi";
import { useAddReactionToPostMutation } from "@/src/redux/features/reaction/reactionApi";
import { RootState } from "@/src/redux/features/store";
import { useAddFollowMutation } from "@/src/redux/features/user/userApi";
import html2pdf from "html2pdf.js";
import Image from "next/image";
import { useParams } from "next/navigation";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { BsDot } from "react-icons/bs";
import { CiBookmarkPlus, CiCircleMinus } from "react-icons/ci";
import { FaComment } from "react-icons/fa6";
import { PiStarFourFill } from "react-icons/pi";
import { useSelector } from "react-redux";
import PostComments from "./PostComments";
const PostDetails = () => {
  const { postId } = useParams<{ postId: string }>();
  const { data, isLoading: isPostLoading } = useGetSinglePostQuery(postId);
  const post = data?.data;
  const user = useSelector((state: RootState) => selectCurrentUser(state));
  const [addReactionToPost] = useAddReactionToPostMutation();
  const [addFollow] = useAddFollowMutation();
  const isLike =
    !!post?.likes &&
    post?.likes?.length > 0 &&
    post?.likes?.find((like: any) => like == user?._id);

  const isDisLike =
    !!post?.dislikes &&
    post?.dislikes.length > 0 &&
    post?.dislikes.find((dislike: any) => dislike == user?._id);

  const isFollow =
    !!post?.authorId?.follower &&
    post?.authorId?.follower.length > 0 &&
    post?.authorId?.follower.find(
      (followingId: any) => followingId == user?._id
    );
  const handleReaction = async (id: any, action: any) => {
    const data = { postId: id, data: { userId: user?._id, action } };
    try {
      await addReactionToPost(data).unwrap();
    } catch (err) {
      console.log(err);
    }
  };

  const isUser = String(user?._id) === String(post?.authorId?._id);

  const handleDownloadPdfFormat = () => {
    const options = {
      margin: 1,
      filename: `${post?.title}.pdf`,
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    html2pdf().from(post?.content).set(options).save();
  };

  const handleFollow = async () => {
    try {
      const data = {
        userId: user?._id,
        authorId: post?.authorId?._id,
      };
      await addFollow(data).unwrap();
    } catch (e: any) {
      console.log(e.message);
    }
  };

  return (
    <div className="max-w-4xl mx-auto  px-5 py-10">
      {isPostLoading ? (
        <Loading />
      ) : (
        <>
          <div className="">
            <div className="flex items-center gap-3 mb-3">
              <PiStarFourFill className="text-yellow-500" />

              <p>Member-only story</p>
            </div>

            <h1 className="text-[34px] md:text-[44px] leading-[40px] md:leading-[55px] font-bold  font-roboto ">
              {post?.title}
            </h1>

            <p className="text-xl text-secondary/80 font-medium">
              {post?.subtitle}
            </p>
            <div className="flex items-center gap-2 my-5">
              <Image
                src={post?.authorId?.profilePhoto}
                width={1200}
                height={200}
                alt="author"
                className="size-10 rounded-full"
              />
              <div>
                <div className="flex items-center gap-1">
                  <h3 className=" text-secondary font-semibold">
                    {post?.authorId?.name}
                  </h3>
                  {!isUser && (
                    <>
                      <BsDot className="text-xs text-gray-500" />
                      <button
                        onClick={handleFollow}
                        className="text-blue-500 font-semibold"
                      >
                        {isFollow ? "Following" : "Follow"}
                      </button>
                    </>
                  )}
                </div>
                <div className="flex items-center gap-1">
                  <h3 className="text-sm text-secondary hover:underline cursor-pointer">
                    Published in ITNEXT
                  </h3>
                  <BsDot className="text-xs text-gray-500" />
                  <p className="text-sm">5 min read</p>
                  <BsDot className="text-xs text-gray-500" />

                  <p className="text-sm">{post?.date}</p>
                </div>
              </div>
            </div>
            <div className="border-y flex items-center justify-between py-3">
              <div className="flex items-center gap-4 text-sm">
                <button
                  onClick={() => handleReaction(post?._id, "like")}
                  className="flex items-center gap-1"
                >
                  <AiFillLike
                    className={`text-base ${
                      isLike
                        ? "text-blue-500"
                        : "text-secondary/90 hover:text-blue-500"
                    }`}
                  />
                  {post?.likes?.length}
                </button>
                <button
                  onClick={() => handleReaction(post?._id, "disLike")}
                  className="flex items-center gap-1"
                >
                  <AiFillDislike
                    className={`text-base ${
                      isDisLike
                        ? "text-blue-500 "
                        : "text-secondary/90 hover:text-blue-500"
                    }`}
                  />
                  {post?.dislikes?.length}
                </button>
                <div className="flex items-center gap-1">
                  <FaComment className="text-base text-secondary/60 hover:text-secondary" />
                  {post?.comments?.length}
                </div>
              </div>

              <div className="flex items-center gap-4 text-xl">
                <CiCircleMinus className="hover:text-primary duration-150  text-secondary/90" />
                <CiBookmarkPlus className="hover:text-primary duration-150 text-secondary/90" />

                <PostDropdown
                  handleDownloadPdfFormat={handleDownloadPdfFormat}
                  isUser={isUser}
                />
              </div>
            </div>
          </div>
          <div className="py-10">
            <Image
              src={post?.image}
              width={1200}
              height={200}
              alt="author"
              className="w-full h-[500px] object-cover"
            />
          </div>

          <PostHtmlContent content={post?.content} />
          <SendAComment comment={post?.comments?.length} />
          <PostComments comments={post?.comments} />
        </>
      )}
    </div>
  );
};

export default PostDetails;
