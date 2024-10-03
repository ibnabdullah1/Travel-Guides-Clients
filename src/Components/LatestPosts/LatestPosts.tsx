"use client";
import { useGetAllPostsQuery } from "@/src/redux/features/post/postApi";
import FeaturedNewsFeed from "../FeaturedNewsFeed/FeaturedNewsFeed";
import RecommendedTopics from "../RecommendedTopics/RecommendedTopics";
import PostCardSkeleton from "../Skeleton/PostCardSkeleton";
import PostCard from "./PostCard";

const LatestPosts = () => {
  const { data: postData, isLoading } = useGetAllPostsQuery(undefined);
  return (
    <div className="max-w-7xl mx-auto px-5 lg:grid lg:grid-cols-3 mt-4 gap-4 space-y-4 lg:space-y-0">
      <div className="lg:col-span-2 space-y-4 w-full lg:border-r lg:px-10">
        {isLoading
          ? Array.from({ length: 4 }).map((_, index) => (
              <PostCardSkeleton key={index} />
            ))
          : postData?.data?.map((post: any) => (
              <PostCard {...post} key={post._id} />
            ))}
      </div>

      {/* Sidebar Section */}
      <div className="lg:col-span-1">
        <div className="lg:sticky lg:top-10">
          <div className="w-full py-10 pl-5">
            <FeaturedNewsFeed />
            <RecommendedTopics />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPosts;
