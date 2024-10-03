const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(30deg , rgba(48, 56, 73,0.5) 10%, rgba(48, 56, 73,0.8) 100%), url("/assets/images/hero-banner.jpg")`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="h-[600px]"
    >
      <div className=" flex items-center py-20 md:py-36 lg:py-[200px] justify-center">
        <div className=" px-4 text-center space-y-3 lg:space-y-4">
          <h2 className="text-[45px] md:text-[55px] lg:text-[77px] text-white font-questrial tracking-[0.3rem] font-bold">
            Explore <span className="text-primary">The World</span>
          </h2>

          <p className="text-white w-[80%] mx-auto">
            Discover the best travel tips and destination guides to make your
            next adventure unforgettable. From tropical getaways to cultural
            excursions, we have you covered.
          </p>

          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button className="bg-primary px-8 py-2.5 font-semibold  text-white duration-500 flex items-center gap-2 text-xl rounded-full">
              Plan Your Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
