import Image from "next/image";
import { BsQuote } from "react-icons/bs";

const ReviewsCard = ({ review }: any) => {
  return (
    <div className="flex flex-col justify-between   rounded-md border border-gray-100 bg-white p-4 min-h-[230px]">
      <div>
        <BsQuote className="text-5xl text-[#14B8A661]" />

        <p className="mb-4 text-sm font-normal leading-relaxed tracking-wide text-gray-400">
          {review?.review.length > 170
            ? `${review?.review.slice(0, 200)}...`
            : review?.review}
        </p>
      </div>

      <div className="flex justify-between w-full items-start ">
        <div className="flex items-start gap-3">
          <Image
            alt=""
            src={review?.image}
            width={1200}
            height={100}
            decoding="async"
            data-nimg="1"
            className="inline-block size-10 rounded-full "
            loading="lazy"
          />

          <div>
            <p className="leading-relaxed tracking-wide text-gray-600">
              {review?.name}
            </p>
            <p className="text-xs leading-relaxed tracking-wide text-gray-700">
              {review?.title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewsCard;
