import Image from "next/image";
import Link from "next/link";
import { AiOutlineArrowRight } from "react-icons/ai";

export const StoryCard = ({
  image,
  title,
  subTitle,
  date,
  likes,
  dislikes,
  comments,
  postId,
}: {
  image: string;
  title: string;
  subTitle: string;
  date: string;
  likes: number;
  dislikes: number;
  comments: number;
  postId: string;
}) => {
  return (
    <div className="overflow-hidden group transition-shadow duration-300 bg-white rounded">
      <Image
        src={image}
        width={1200}
        height={200}
        className="object-cover w-full h-[260px]"
        alt=""
      />
      <div className="py-5 mb-4 pl-3">
        <p className="text-xs font-semibold font-sans tracking-wide uppercase">
          <span
            className="transition-colors duration-200 text-primary border-r border-gray-300 pr-4"
            aria-label="Category"
            title="date"
          >
            {date}
          </span>
          <span className="text-gray-600 px-4">{likes} likes</span>
          <span className="text-gray-600 px-4">{dislikes} Dislikes</span>
          <span className="text-gray-600 px-4">{comments}comments</span>
        </p>
        <Link
          href={`/post/${postId}`}
          className="inline-block font-semibold pt-3 group-hover:text-primary duration-150 leading-5 text-gray-700"
        >
          {title}
        </Link>
        <p className="text-gray-500 mb-4">{subTitle}</p>
        <Link
          href={`/post/${postId}`}
          className="flex items-center uppercase font-semibold text-sm gap-1 rounded-sm tracking-wide text-secondary transition-all cursor-pointer"
        >
          <AiOutlineArrowRight className="p-1 text-2xl bg-primary text-white rounded-full" />{" "}
          Read More{" "}
        </Link>
      </div>
    </div>
  );
};
