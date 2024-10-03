import { useState } from "react";
import { GoStarFill } from "react-icons/go";
import { TbReload } from "react-icons/tb";

const StarRating = ({ onChange }: any) => {
  const [selectedStars, setSelectedStars] = useState(0);
  const handleStarClick = (starValue: any) => {
    setSelectedStars(starValue);
    onChange(starValue);
  };

  const handleReloadClick = (e: any) => {
    e.preventDefault();
    setSelectedStars(0);
    onChange(0);
  };

  return (
    <div className="flex gap-2">
      <button onClick={handleReloadClick}>
        <TbReload className="hover:text-primary" />
      </button>

      {[...Array(5)].map((_, index) => (
        <div
          key={index + 1}
          className={`cursor-pointer text-lg ${
            index < selectedStars ? "text-primary" : "text-gray-300"
          }`}
          onClick={() => handleStarClick(index + 1)}
        >
          <GoStarFill />
        </div>
      ))}
    </div>
  );
};

export default StarRating;
