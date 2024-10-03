import Link from "next/link";
import FeaturedNewsFeedCard from "./FeaturedNewsFeedCard";

const FeaturedNewsFeed = () => {
  return (
    <div className="">
      <h2 className="font-semibold my-3">News Feed</h2>
      <FeaturedNewsFeedCard />
      <FeaturedNewsFeedCard />
      <FeaturedNewsFeedCard />
      <Link
        href={"/all-posts"}
        className="hover:text-primary mt-2 hover:underline"
      >
        See the full list
      </Link>
    </div>
  );
};

export default FeaturedNewsFeed;
