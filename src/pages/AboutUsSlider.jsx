import React, { useRef, useState } from "react";
// import Service2 from "../../assets/singularity/Service2.png";
import SliderI1 from "../assets/singularity/slider1.png";
import SliderI2 from "../assets/singularity/slider2.png";
import SliderI3 from "../assets/singularity/slider3.png";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";

const AboutUsSlider = ({ images }) => {
  const images2 = [SliderI1, SliderI2, SliderI3];
  let mappingElement = images.length > 0 ? images : images2;

  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={10}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
        className="mySwiper w-full h-full"
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        {mappingElement?.map((item) => {
          return (
            <SwiperSlide className="w-full h-full">
              <img
                className="block md:h-[18rem]  lg:h-[25rem] object-cover aspect-auto"
                src={item}
                alt=""
              //  loading="lazy"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default AboutUsSlider;
