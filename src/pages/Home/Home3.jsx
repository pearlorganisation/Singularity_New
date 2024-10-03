import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SingularityBanner from "../../assets/singularity/7.png";
import IntroThumbnail from "../../assets/singularity/intro_thumbnail.png";

const Home3 = () => {
  const homeStyle = {
    backgroundImage: `url("${SingularityBanner}")`,
  };


  return (
    <>
      <div
        style={homeStyle}
        className="py-28 px-8 bg-no-repeat bg-center bg-cover"
      >
        {/* <Swiper
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >


          {[
            `https://drive.google.com/file/d/1GuUgHhZ1mZ-NNvsRTcA3IGiI6O9jUecI/preview`,
            `https://drive.google.com/file/d/1SXj9Ir59HghkaVLW74Nc58NgOYKHQ55Q/preview`,
            `https://drive.google.com/file/d/1C9frOOoxMzDfkVqFE9klnQh0o3SKaAnO/preview`,
            `https://drive.google.com/file/d/1OCTaM0p170pWSCZHKQoi4lvMyAxYDWGN/preview`,
            `https://drive.google.com/file/d/1Z63djv-9AtQGfmZtLNA1-hwGvz5uKq2T/preview`,
            `https://drive.google.com/file/d/14csOByrYmnctN46auDRkKlBU4Ur6vz0D/preview`,
            `https://drive.google.com/file/d/18KvDCgyEFHS_tQiNOgzhKfryJPFXZcxY/preview`
          ]
            .map((item, idx) => {
              return (

                <div key={idx} className="">
                  <SwiperSlide className="w-full  h-[20rem] !bg-transparent m-2">
                    <iframe
                      className="mx-auto   p-1"
                      allow="autoplay"
                      src={item}
                      width='100%'
                      height='100%'
                    ></iframe>
                    {" "}

                  </SwiperSlide>
                </div>

              );
            })}
        </Swiper> */}
        <div className="w-full min-h-[75vh] p-1 grid place-items-center py-[4rem] px-3">
          <div className="container grid place-items-center">
            <span className="text-white text-[30px] md:text-[40px] lg:text-[45px] xl:text-[50px] w-full text-center font-semibold">
              What is Singularity?
            </span>
            <video
              className="w-full h-[40rem] p-3"
              controls
              autoPlay
              loop
              src={"/video/SINGULARITY INTRO.mp4"}
            />



          </div>
        </div>
      </div>
    </>
  );
};

export default Home3;
