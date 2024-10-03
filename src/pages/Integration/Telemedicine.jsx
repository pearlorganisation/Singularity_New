import React from "react";
import Telemedecine1 from "../../assets/singularity/Telemedecine1.png";
import Telemedecine2 from "../../assets/singularity/Telemedecine2.png";
import Telemedecine3 from "../../assets/singularity/Telemedecine3.png";
import Telemedecine4 from "../../assets/singularity/Telemedecine4.png";
import Slider from "../Slider";

import Diagonistic1 from "../../assets/singularity/Diagonistic1.png";
import Diagonistic2 from "../../assets/singularity/Diagonistic2.png";

import PersonalizeHealth1 from "../../assets/singularity/PersonalizeHealth1.png";
import PersonalizeHealth2 from "../../assets/singularity/PersonalizeHealth2.png";

import Proactive1 from "../../assets/singularity/Proactive1.png";
import Proactive2 from "../../assets/singularity/Proactive2.png";

import Streamlined1 from "../../assets/singularity/Streamlined1.png";
import Streamlined2 from "../../assets/singularity/Streamlined2.png";

import Polymer from "../../assets/singularity/Polymer1.png";
import Design from "../Home/Design";
import { useEffect } from "react";

const Telemedicine = () => {
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
              Telemedecine Platform Integration
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
          <div className="flex ml-6 max-md:ml-0 max-md:w-fit max-md:mx-auto max-md:text-base max-md:font-semibold max-md:mb-2 flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-2 md:order-1">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              Enhanced Diagnostic Accuracy
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Reduce diagnostic errors
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Lead to better patient outcomes
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Increased confidence in diagnoses
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[Diagonistic1, Diagonistic2]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex max-md:w-fit max-md:mx-auto max-md:text-base max-md:font-semibold max-md:mb-2 flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              Personalized Healthcare
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Receive personalized treatment plans
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Increase treatment efficacy
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Improve patient satisfaction
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[PersonalizeHealth1, PersonalizeHealth2]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex ml-6 max-md:ml-0 max-md:w-fit max-md:mx-auto max-md:text-base max-md:font-semibold max-md:mb-2 flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-2 md:order-1">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              Proactive Healthcare Management
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Predictive capabilities aid in identifying health trends
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Allow healthcare providers to proactively address potential
                  health risks and emergencies.
                </li>
                {/* <li></li> */}
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[Proactive1, Proactive2]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex max-md:w-fit max-md:mx-auto max-md:text-base max-md:font-semibold max-md:mb-2 flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              Streamlined Workflows
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Optimize administrative tasks with Ai automations
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Free up healthcare professionals to focus on patient care
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[Streamlined1, Streamlined2]} />
          </div>
        </div>

        <div className="grid place-items-center gap-3">
          <h1 className="text-clampS2 max-md:text-base font-medium text-center">
            Singularity AI seamlessly integrates into various popular
            telemedicine platforms.
          </h1>
          <div className="flex justify-around items-center flex-wrap gap-5">
            {/* <Marquee speed={200} className="flex gap-[10rem]"> */}
            <img className="w-[14rem] h-[4rem]" src={Telemedecine1} alt="" />
            <img className="w-[14rem] h-[4rem]" src={Telemedecine2} alt="" />
            <img className="w-[14rem] h-[4rem]" src={Telemedecine3} alt="" />
            <img className="w-[14rem] h-[4rem]" src={Telemedecine4} alt="" />
            {/* <img className="w-[14rem] h-[8rem]" src={SupplyChain4} alt="" /> */}
            {/* </Marquee> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Telemedicine;
