import React, { useRef, useState } from "react";
// import Service2 from "../../assets/singularity/Service2.png";
import SliderI1 from "../../assets/singularity/slider1.png";
import SliderI2 from "../../assets/singularity/slider2.png";
import SliderI3 from "../../assets/singularity/slider3.png";
import Polymer from "../../assets/singularity/Polymer1.png";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import './styles.css';

// import required modules
import { Keyboard, Pagination, Navigation, Autoplay } from "swiper/modules";

const OurClientSlider = ({ images }) => {
  const images2 = [Polymer, SliderI2, SliderI3];
  let mappingElement = images.length > 0 ? images : images2;

  const menu = [`Manufacturing`,`Finance`,`Non-Profit`,`HealthCare`]
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menu[index] + '</span>';
    },
  };
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
        className="mySwiper w-full h-full clinet grid place-items-center"
        pagination={pagination}
        loop={true}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation, Autoplay]}
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
            <SwiperSlide className="w-full h-full grid gap-2 place-items-center text-center text-black lg:place-items-start lg:text-left">
              <img
                className="block w-full h-full object-cover"
                src={item}
                alt=""
              /> hello
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default OurClientSlider;
