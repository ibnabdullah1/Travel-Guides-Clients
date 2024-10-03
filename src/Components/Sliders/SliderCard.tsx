const SliderCard = ({ slider }: any) => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(30deg, rgba(48, 56, 73, 0.5) 10%, rgba(48, 56, 73, 0.2) 100%), url("${slider.image}")`,
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="py-20 md:py-36 lg:py-[200px] px-5 lg:px-10"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-left space-y-3 lg:space-y-4">
          <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold leading-[40px] w-[100%] lg:w-[70%] md:leading-[65px] lg:leading-[90px] tracking-wider">
            {slider.title}
          </h1>
          <p className="text-white w-[96%] lg:w-[80%]">{slider.subtitle}</p>
          <button
            className="bg-primary px-8 py-2.5 text-white duration-500 flex items-center gap-2 text-xl"
            onClick={() => (window.location.href = slider.buttonLink)}
          >
            {slider.buttonText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SliderCard;
