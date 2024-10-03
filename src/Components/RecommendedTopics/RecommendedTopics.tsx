import { categories } from "@/src/data/dummyData";
import Link from "next/link";

const RecommendedTopics = () => {
  return (
    <div className="mt-5 ">
      <h2 className="font-semibold my-3">Recommended Topics</h2>
      <div className="flex flex-wrap gap-4 mb-4">
        {categories.slice(0, 8).map((topic, i) => (
          <RecommendedTopicsCard key={i} topic={topic} />
        ))}
      </div>
      <Link href={"/all-topics"} className="hover:text-primary hover:underline">
        See more topics
      </Link>
    </div>
  );
};

export default RecommendedTopics;

const RecommendedTopicsCard = ({ topic }: { topic: string }) => {
  return (
    <div className="rounded-full text-sm bg-gray-100 hover:bg-primary/10 hover:text-primary cursor-pointer px-5 py-[6px] w-fit">
      <Link href={`/${topic}`} className="">
        {topic}
      </Link>
    </div>
  );
};
