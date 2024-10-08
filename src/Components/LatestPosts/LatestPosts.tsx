"use client";
import { categories } from "@/src/data/dummyData";
import { selectCurrentUser } from "@/src/redux/features/auth/authSlice";
import { useGetAllPostsQuery } from "@/src/redux/features/post/postApi";
import { RootState } from "@/src/redux/features/store";
import { useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import FeaturedNewsFeed from "../FeaturedNewsFeed/FeaturedNewsFeed";
import RecommendedTopics from "../RecommendedTopics/RecommendedTopics";
import PostCardSkeleton from "../Skeleton/PostCardSkeleton";
import PostCard from "./PostCard";
const LatestPosts = () => {
  const user = useSelector(selectCurrentUser);
  let AccessUserPostData;
  const { data: postData, isLoading } = useGetAllPostsQuery(undefined);
  const searchTerm = useSelector(
    (state: RootState) => state?.search?.searchTerm
  );
  if (!user?.isPremium) {
    AccessUserPostData = postData?.data?.filter(
      (post: any) => post.status == "FREE"
    );
  }
  if (user?.isPremium) {
    AccessUserPostData = postData?.data;
  }

  const [sortOption, setSortOption] = useState<string>("");
  const [categoryOption, setCategoryOption] = useState<string>("");
  const [visiblePosts, setVisiblePosts] = useState<number>(10);
  const [isFetchingMore, setIsFetchingMore] = useState<boolean>(false);

  const sortPosts = (posts: any[]) => {
    switch (sortOption) {
      case "likes-high-low":
        return posts?.sort((a, b) => b?.likes?.length - a?.likes?.length);
      case "likes-low-high":
        return posts?.sort((a, b) => a?.likes?.length - b?.likes?.length);
      case "dislikes-high-low":
        return posts?.sort((a, b) => b?.dislikes?.length - a?.dislikes?.length);
      case "dislikes-low-high":
        return posts?.sort((a, b) => a?.dislikes?.length - b?.dislikes?.length);
      default:
        return posts;
    }
  };

  const filteredPosts = AccessUserPostData?.filter((post: any) => {
    const matchesSearchTerm =
      post?.title?.toLowerCase()?.includes(searchTerm?.toLowerCase()) ||
      post?.content?.toLowerCase()?.includes(searchTerm?.toLowerCase());

    const matchesCategory =
      categoryOption === "" || post?.category === categoryOption;

    return matchesSearchTerm && matchesCategory;
  });

  const sortedPosts = sortPosts(filteredPosts || []);

  const fetchMoreData = () => {
    setIsFetchingMore(true);
    setTimeout(() => {
      setVisiblePosts((prev) => prev + 10);
      setIsFetchingMore(false);
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-5 lg:grid lg:grid-cols-3 mt-4 gap-4 space-y-4 lg:space-y-0">
      {/* Search and Sort Section */}

      {/* Posts List Section */}
      <div className="lg:col-span-2 space-y-4 w-full lg:border-r lg:px-10 pt-10">
        <div className="lg:col-span-3 flex justify-between items-center ">
          <h4 className="font-semibold text-xl font-roboto">New Posts</h4>
          <div className="flex gap-3 items-center">
            <select
              className="w-fit px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-white text-gray-900"
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="">Sort by</option>
              <option value="likes-high-low">Likes: High to Low</option>
              <option value="likes-low-high">Likes: Low to High</option>
              <option value="dislikes-high-low">Dislikes: High to Low</option>
              <option value="dislikes-low-high">Dislikes: Low to High</option>
            </select>
            <select
              className="w-fit px-3 py-2 border rounded-md border-gray-300 focus:outline-primary bg-white text-gray-900"
              onChange={(e) => setCategoryOption(e.target.value)}
            >
              <option value="">Categories</option>
              {categories?.map((category) => (
                <option key={category} value={category} className="capitalize">
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>
        {isLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <PostCardSkeleton key={index} />
          ))
        ) : sortedPosts.length === 0 ? (
          <div className="text-center py-10">
            <h3 className="text-xl text-gray-500">No posts found</h3>
          </div>
        ) : (
          <InfiniteScroll
            dataLength={visiblePosts}
            next={fetchMoreData}
            hasMore={visiblePosts < sortedPosts.length}
            loader={
              isFetchingMore ? (
                <p className="text-center py-2">Loading...</p>
              ) : null
            }
            endMessage={
              <p className="text-center my-5">
                <b>No more posts to show</b>
              </p>
            }
          >
            {sortedPosts.slice(0, visiblePosts).map((post: any) => (
              <PostCard {...post} key={post._id} />
            ))}
          </InfiniteScroll>
        )}
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
