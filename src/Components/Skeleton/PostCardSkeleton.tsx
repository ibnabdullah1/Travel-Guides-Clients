import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const PostCardSkeleton = () => {
  return (
    <div className="px-5 py-10 flex flex-col-reverse lg:grid grid-cols-7 items-center border-b">
      {/* Left Side Skeleton (Post Details) */}
      <div className="lg:col-span-5 space-y-2 w-full">
        <div className="flex items-center gap-2 mb-5">
          <Skeleton circle={true} height={20} width={20} />
          <Skeleton width={100} height={10} className="mt-3" />
        </div>
        <Skeleton height={15} width={"80%"} />
        <Skeleton height={15} width={"90%"} />

        <div className="flex items-center justify-between lg:w-[90%] pt-5">
          <div className="flex items-center gap-4 text-sm">
            <Skeleton width={50} height={15} />
            <Skeleton width={30} height={15} />
            <Skeleton width={30} height={15} />
            <Skeleton width={30} height={15} />
          </div>
          <Skeleton width={100} height={15} />
        </div>
      </div>

      {/* Right Side Skeleton (Post Image) */}
      <div className="lg:col-span-2 w-full lg:mb-0 mb-6">
        <Skeleton height={120} width={"100%"} />
      </div>
    </div>
  );
};

export default PostCardSkeleton;
