"use client";
import Loading from "@/src/Components/Common/Loading";
import { selectCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useGetAllPostsQuery } from "@/src/redux/features/post/postApi";
import { RootState } from "@/src/redux/features/store";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { useSelector } from "react-redux";
import { StoryCard } from "./StoryCard";

const MyStories = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => selectCurrentUser(state));

  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
    }
  }, [user, router]);

  const { data: postData, isLoading: isStoriesLoading } =
    useGetAllPostsQuery(undefined);

  if (isStoriesLoading) {
    return <Loading />;
  }

  // Filter posts created by the current user
  const userPosts = postData?.data?.filter(
    (post: any) => post?.authorId?._id === user?._id
  );

  if (userPosts.length === 0) {
    return <p>You have no stories to display.</p>;
  }

  return (
    <div className="p-4">
      <div className="flex items-center justify-between mb-4">
        <div className="text-2xl font-semibold flex items-center gap-2">
          <p> My Stories: </p>
          <span className="bg-primary text-white py-[2px] px-3 rounded-full text-sm">
            {userPosts?.length}
          </span>
        </div>
        <Link
          href={"/create-post"}
          className="px-2 py-1.5 bg-primary gap-1 text-white rounded-md flex items-center justify-between"
        >
          <AiFillPlusCircle className="text-[20px]" /> Add Stories
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {userPosts.map((post: any) => (
          <StoryCard
            key={post._id}
            image={post?.image}
            title={post?.title}
            subTitle={post?.subTitle}
            date={post?.date}
            likes={post?.likes?.length || 0}
            dislikes={post?.dislikes?.length || 0}
            comments={post?.comments?.length || 0}
            postId={post?._id}
          />
        ))}
      </div>
    </div>
  );
};

export default MyStories;
