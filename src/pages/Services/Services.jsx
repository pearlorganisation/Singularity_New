import BannerImage from "../../assets/singularity/glowing-blue-sphere-held-by-human-hand-generated-by-ai 1.png";
import Service1 from "../../assets/singularity/Vedio.png";
import ContentGeneration from "./ContentGeneration";
import Services2 from "./Services2";
import React from "react";
import Polymer from "../../assets/singularity/Polymer1.png";
import Design from "../Home/Design";

const Services = () => {
  const homeStyle = {
    // backgroundImage: `url("${SingularityBanner}")`,
    backgroundImage: `url(${Polymer})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  return (
    <div>
      <div style={homeStyle} className="h-screen  grid place-items-center">
        <div className="absolute -z-0 w-full h-full top-0 left-0">
          <Design />
        </div>
        <div className="grid place-items-center px-6">
          <div className="container space-y-6">
            <div className="flex flex-col gap-1 justify-start items-center text-center">
              <h1 className="text-clampH font-semibold bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 bg-clip-text text-transparent lg:leading-[5.8rem] xl:leading-[6.8rem] pb-3">
                Ai Powered Video Calling
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#0C3C8E] to-[#996CE6] bg-white grid place-items-center py-8 xl:py-16">
        {" "}
        <button className=" text-white rounded-md active:scale-95 transition-all px-8 text-[20px] lg:text-[30px] xl:text-[45px] font-semibold py-2">
          Integrate Ai into your current system.
        </button>{" "}
      </div>

      <div className="container mx-auto py-14">
        <video
          className="w-full p-3"
          // controls 
          autoPlay
          loop
          src={"/video/SINGULARITY [NEW VOICE].mp4"}
        />
      </div>

      <Services2 />
    </div>
  );
};

export default Services;
