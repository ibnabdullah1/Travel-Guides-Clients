"use client";
import { sliders } from "@/src/data/dummyData";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderCard from "./SliderCard";

const Sliders = () => {
  return (
    <Swiper
      freeMode={true}
      autoplay={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Navigation, Autoplay]}
    >
      {sliders.map((slider) => (
        <SwiperSlide key={slider.id}>
          <SliderCard slider={slider} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Sliders;
