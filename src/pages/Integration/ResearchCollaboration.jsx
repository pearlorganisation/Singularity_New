import React from "react";
import ResearchColl1 from "../../assets/singularity/ResearchColl1.png";
import ResearchColl2 from "../../assets/singularity/ResearchColl2.jpg";
import ResearchColl3 from "../../assets/singularity/ResearchColl3.png";
import ResearchColl4 from "../../assets/singularity/ResearchColl4.png";
import ResearchColl5 from "../../assets/singularity/ResearchColl5.png";
import Slider from "../Slider";
import Polymer from "../../assets/singularity/Polymer1.png";

import EfficientResearch1 from "../../assets/singularity/EfficientResearch1.png";
import EfficientResearch2 from "../../assets/singularity/EfficientResearch2.png";

import Relavance1 from "../../assets/singularity/Relavance1.png";
import Relavance2 from "../../assets/singularity/Relavance2.png";

import DrivenCollab1 from "../../assets/singularity/DrivenCollab1.png";
import DrivenCollab2 from "../../assets/singularity/DrivenCollab2.png";

import StreamlineCollab1 from "../../assets/singularity/StreamlineCollab1.png";
import StreamlineCollab2 from "../../assets/singularity/StreamlineCollab2.png";

import EnhancedResearch1 from "../../assets/singularity/EnhancedResearch1.png";
import EnhancedResearch2 from "../../assets/singularity/EnhancedResearch2.png";

import Design from "../Home/Design";
import { useEffect } from "react";

const ResearchCollaboration = () => {
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
              Research Collaboration Platform Integration
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
          <div className="flex max-md:ml-0 ml-8 max-md:w-fit max-md:mx-auto flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-2 md:order-1">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              Efficient Research Discovery
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  AI-driven research discovery
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Enhance researcher's ability to find relevant studies and
                  collaborators, saving time and effort
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[EfficientResearch1, EfficientResearch2]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex ml-8 max-md:ml-0 max-md:w-fit max-md:mx-auto flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              Enhanced Research Relevance
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {" "}
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Personalized recommendations
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  More relevant research connections and collaborations
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Foster productive research endeavors.
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[EnhancedResearch1, EnhancedResearch2]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex max-md:w-fit max-md:mx-auto flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              Data-Driven Collaboration
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Predictive insights facilitate proactive research
                  collaboration
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Promote interdisciplinary studies
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Expand research horizons
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[DrivenCollab1, DrivenCollab2]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex max-md:w-fit max-md:mx-auto flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-2 md:order-1">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              Streamlined Collaboration Management
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Leverage Ai to automate administrative tasks 
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Enable researchers to focus more on their collaborative
                  research
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[StreamlineCollab1, StreamlineCollab2]} />
          </div>
        </div>

        <div className="grid place-items-center gap-3">
          <h1 className="text-clampS2 font-medium text-center">
            Singularity AI seamlessly integrates into various popular Research
            Collaboration Platforms, including
          </h1>
          <div className="flex justify-around items-center flex-wrap gap-5">
            {/* <Marquee speed={200} className="flex gap-[10rem]"> */}
            <img
              className="md:w-[14rem] md:h-[8rem] w-[10rem] h-[6rem] object-contain object-center"
              src={ResearchColl1}
              alt=""
            />
            <img
              className="md:w-[14rem] md:h-[8rem] w-[10rem] h-[6rem] object-contain object-center"
              src={ResearchColl2}
              alt=""
            />
            <img
              className="md:w-[14rem] md:h-[8rem] w-[10rem] h-[6rem] object-contain object-center"
              src={ResearchColl3}
              alt=""
            />
            <img
              className="md:w-[14rem] md:h-[8rem] w-[10rem] h-[6rem] object-contain object-center"
              src={ResearchColl4}
              alt=""
            />
            <img
              className="md:w-[14rem] md:h-[8rem] w-[10rem] h-[6rem] object-contain object-center"
              src={ResearchColl5}
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

export default ResearchCollaboration;
