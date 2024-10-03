import React from "react";
import LMS1 from "../../assets/singularity/LMS1.png";
import LMS2 from "../../assets/singularity/LMS2.png";
import LMS3 from "../../assets/singularity/LMS3.png";
import LMS4 from "../../assets/singularity/LMS4.png";
import LMS5 from "../../assets/singularity/LMS5.png";

import EnhanceLearning1 from "../../assets/singularity/EnhanceLearning1.png";
import EnhanceLearning2 from "../../assets/singularity/EnhanceLearning2.png";

import Improve1 from "../../assets/singularity/Improve1.png";
import Improve2 from "../../assets/singularity/Improve2.png";

import LearningManage1 from "../../assets/singularity/LearningManage1.png";
import LearningManage2 from "../../assets/singularity/LearningManage2.png";

import Educational1 from "../../assets/singularity/Educational1.png";
import Educational2 from "../../assets/singularity/Educational2.png";

import Polymer from "../../assets/singularity/Polymer1.png";

import Slider from "../Slider";
import Design from "../Home/Design";
import { useEffect } from "react";

const LearningManagement = () => {
  const homeStyle = {
    // backgroundImage: `url("${SingularityBanner}")`,
    backgroundImage: `url(${Polymer})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div>
      <div style={homeStyle} className="min-h-screen grid place-items-center">
        <div className="absolute -z-0 w-full h-full top-0 left-0">
          <Design />
        </div>
        <div className="container pt-[6.5rem] p-[3rem] space-y-[4rem]">
          <div className="z-0 font-semibold text-white text-center container space-y-6">
            <p className="text-clampH font-semibold bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 bg-clip-text text-transparent lg:leading-[5.8rem] xl:leading-[6.8rem] pb-3">
              Learning Management System (LMS) Integration
            </p>
          </div>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#0C3C8E] to-[#996CE6] bg-white grid place-items-center py-8 xl:py-16">
        {" "}
        <button className=" text-white rounded-md active:scale-95 transition-all px-8 text-[20px] lg:text-[30px] xl:text-[45px] font-semibold py-2">
          Integrate Ai into your current system.
        </button>{" "}
      </div>

      <div className="container mx-auto grid place-items-center gap-[6rem] py-[6rem] px-6">
        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex ml-6 max-md:ml-0 max-md:w-fit max-md:mx-auto flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-2 md:order-1">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              Enhanced Learning Experience
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Personalized learning with Singularity`,
                  `Intelligent content curation`,
                  `Engaging, effective learning paths`,
                ].map((item) => (
                  <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                    {item}
                  </li>
                ))}
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[EnhanceLearning1, EnhanceLearning2]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex max-md:w-fit max-md:mx-auto flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              Improved Learning Outcomes
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Predictive analytics empower learners.`,
                  ` Enhanced performance and retention.`,
                  `Ai generated actionable insights`,
                ].map((item) => (
                  <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                    {item}
                  </li>
                ))}
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[Improve1, Improve2]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex ml-6 max-md:ml-0 max-md:w-fit max-md:mx-auto flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-2 md:order-1">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              Efficient Learning Management
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Automate LMS tasks.`,
                  `Streamline course management.`,
                  `Automate creation of assignments and reporting.`,
                ].map((item) => (
                  <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                    {item}
                  </li>
                ))}
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[LearningManage1, LearningManage2]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex max-md:w-fit max-md:mx-auto flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              Data-Driven Educational Decisions
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Ai powered data analysis.`,
                  `Make data-driven decisions.`,
                  `Enhance educational strategies.`,
                ].map((item) => (
                  <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                    {item}
                  </li>
                ))}
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[Educational1, Educational2]} />
          </div>
        </div>

        <div className="grid place-items-center gap-3">
          <h1 className="text-clampS2 font-medium text-center">
            Singularity AI seamlessly integrates into various popular Learning
            Management Systems, including:
          </h1>
          <div className="flex justify-around items-center flex-wrap">
            {/* <Marquee speed={200} className="flex gap-[10rem]"> */}
            <img
              className="md:w-[14rem] md:h-[8rem] w-[10rem] h-[6rem] object-contain object-center"
              src={LMS1}
              alt=""
            />
            <img
              className="md:w-[14rem] md:h-[8rem] w-[10rem] h-[6rem] object-contain object-center"
              src={LMS2}
              alt=""
            />
            <img
              className="md:w-[14rem] md:h-[8rem] w-[10rem] h-[6rem] object-contain object-center"
              src={LMS3}
              alt=""
            />
            <img
              className="md:w-[14rem] md:h-[8rem] w-[10rem] h-[6rem] object-contain object-center"
              src={LMS4}
              alt=""
            />
            <img
              className="md:w-[14rem] md:h-[8rem] w-[10rem] h-[6rem] object-contain object-center"
              src={LMS5}
              alt=""
            />
            {/* <img className="w-[14rem] h-[8rem]" src={SupplyChain4} alt="" /> */}
            {/* </Marquee> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearningManagement;
