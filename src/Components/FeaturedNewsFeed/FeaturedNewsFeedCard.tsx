import Image from "next/image";
import Link from "next/link";

const FeaturedNewsFeedCard = () => {
  return (
    <div className="py-3">
      <div className="flex items-center gap-2 mb-2">
        <Image
          src={"https://i.ibb.co/qFJj67f/Arafat-Logo.png"}
          width={1200}
          height={200}
          alt="author"
          className="size-5 rounded-full"
        />
        <h3 className="text-secondary/90 hover:underline cursor-pointer font-semibold text-sm">
          Ben &ldquo;The Hosk&ldquo; Hosking
        </h3>
      </div>
      <Link href={""}>
        <h1 className="text-[16px] font-semibold w-[90%] font-roboto hover:text-primary duration-150">
          My favorite coding question to give candidates
        </h1>
      </Link>
    </div>
  );
};

export default FeaturedNewsFeedCard;
