import React from "react";
import HRMS1 from "../../assets/singularity/HRMS1.png";
import HRMS2 from "../../assets/singularity/HRMS2.png";
import HRMS3 from "../../assets/singularity/HRMS3.png";
import HRMS4 from "../../assets/singularity/HRMS4.png";
import HRMS5 from "../../assets/singularity/HRMS5.png";
import Slider from "../Slider";

import EfficientTalent1 from "../../assets/singularity/EfficientTalent1.png";
import EfficientTalent2 from "../../assets/singularity/EfficientTalent2.png";

import Workforce1 from "../../assets/singularity/Workforce1.png";
import Workforce2 from "../../assets/singularity/Workforce2.png";

import Enhanced1 from "../../assets/singularity/Enhanced1.png";
import Enhanced2 from "../../assets/singularity/Enhanced2.png";

import DataDriven1 from "../../assets/singularity/DataDriven1.png";
import DataDriven2 from "../../assets/singularity/DataDriven2.png";

import Polymer from "../../assets/singularity/Polymer1.png";
import Design from "../Home/Design";
import { useEffect } from "react";

const HRMS = () => {
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
            <p className="text-clampH font-semibold bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 bg-clip-text max-[370px]:break-all text-transparent lg:leading-[5.8rem] xl:leading-[6.8rem] pb-3">
              Human Resources Management System (HRMS) Integration
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
              Efficient Talent Management
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `AI-driven talent acquisition `,
                  `Personalized engagement strategies`,
                  `Better hiring decisions`,
                  `Improved employee morale`,
                ].map((item) => (
                  <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                    {item}
                  </li>
                ))}
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[EfficientTalent1, EfficientTalent2]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex max-md:w-fit max-md:mx-auto max-md:text-base max-md:font-semibold max-md:mb-2 flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              Workforce Optimization
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Ai powered predictive workforce planning`,
                  `Optimize talent for future needs`,
                  `Ensure organizational readiness`,
                ].map((item) => (
                  <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                    {item}
                  </li>
                ))}
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[Workforce1, Workforce2]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex max-md:ml-0 ml-6 max-md:w-fit max-md:mx-auto   max-md:text-base max-md:font-semibold max-md:mb-2 flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-2 md:order-1">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              {" "}
              Enhanced Employee Experience
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Ai enhanced HRMS insights.`,
                  `Design automated employee on-boarding experiences`,
                  `Boost employee satisfaction and productivity`,
                ].map((item) => (
                  <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                    {item}
                  </li>
                ))}
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[Enhanced1, Enhanced2]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex max-md:w-fit max-md:mx-auto max-md:text-base max-md:font-semibold max-md:mb-2 flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              {" "}
              Data-Driven HR Decisions
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Empower data analysis.`,
                  `Enable data-driven HR decisions.`,
                  `Enhance various HR functions.`,
                ].map((item) => (
                  <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                    {item}
                  </li>
                ))}
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[DataDriven1, DataDriven2]} />
          </div>
        </div>

        <div className="grid place-items-center gap-3">
          <h1 className="text-clampS2 max-md:text-base font-medium text-center">
            Singularity AI seamlessly integrates into various popular HRMS
            platforms.
          </h1>
          <div className="flex justify-around items-center flex-wrap">
            {/* <Marquee speed={200} className="flex gap-[10rem]"> */}
            <img className="w-[14rem] h-[8rem]" src={HRMS1} alt="" />
            <img className="w-[14rem] h-[8rem]" src={HRMS2} alt="" />
            <img className="w-[14rem] h-[8rem]" src={HRMS3} alt="" />
            <img className="w-[14rem] h-[8rem]" src={HRMS4} alt="" />
            <img className="w-[14rem] h-[8rem]" src={HRMS5} alt="" />
            {/* <img className="w-[14rem] h-[8rem]" src={SupplyChain4} alt="" /> */}
            {/* </Marquee> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRMS;
