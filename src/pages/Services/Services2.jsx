import React, { useEffect, useState } from "react";
import Sol1 from "../../assets/singularity/Solution1.png";
import Sol2 from "../../assets/singularity/Solution2.png";
import Sol3 from "../../assets/singularity/Solution3.png";
import Sol4 from "../../assets/singularity/Solution4.png";
import Sol5 from "../../assets/singularity/Solution5.png";
import Sol6 from "../../assets/singularity/Solution6.png";
import Sol7 from "../../assets/singularity/Solution7.png";
import Sol8 from "../../assets/singularity/Solution8.png";

import VideoCalling2 from "../../assets/singularity/VideoCalling2.png";

import Summary2 from "../../assets/singularity/Summary2.png";

import ExecutiveBusiness from "../../assets/singularity/ExecutiveBusiness.png";

import AssMeetingAgendas from "../../assets/singularity/AssMeetingAgendas.png";

import ServiceSlider from "./ServiceSlider";

// import Slider from "../Slider";

const Services2 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="space-y-5">
      <div className="container mx-auto space-y-14 px-6">

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex flex-col justify-center gap-1 items-center font-medium md:font-normal md:items-start text-xl lg:text-3xl xl:text-4xl order-2 md:order-1 ">
            Ai-powered meetings
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Stay focused on the meeting information that matters most with intelligent recap.`,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>{" "}
            </div>
          </div>
          <div className=" w-full">
            <ServiceSlider images={[VideoCalling2]} />
          </div>
        </div>
        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex flex-col justify-center gap-1 font-medium md:font-normal items-center text-center md:items-start text-xl lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            Get a summary of every meeting
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Focus on the meeting discussion, not on taking notes, with Ai-generated notes`,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>{" "}
            </div>
          </div>
          <div className="w-full">
            <ServiceSlider images={[Summary2]} />
          </div>
        </div>
        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex flex-col justify-center gap-1 font-medium md:font-normal items-center text-center md:items-start text-xl lg:text-3xl xl:text-4xl order-2 md:order-1">
            Executive business summaries
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[`Get a high level overview of all the meetings `].map(
                  (item) => (
                    <li>{item}</li>
                  )
                )}
              </ul>{" "}
            </div>
          </div>
          <div className="w-full">
            <ServiceSlider images={[ExecutiveBusiness]} />
          </div>
        </div>
        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex flex-col justify-center gap-1 font-medium md:font-normal items-center text-center md:items-start text-xl lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            Ai assisted meeting agendas
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Generate comprehensive meeting agendas`,
                  ` Be well-equipped with relevant topics and information to discuss before going into a meeting`,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>{" "}
            </div>
          </div>
          <div className="w-full">
            <ServiceSlider images={[AssMeetingAgendas]} />
          </div>
        </div>

        <div className="container gird place-items-center pb-[5rem]">
          <div className="grid place-items-center md:gap-5 md:space-y-5 ">
            <p className="text-2xl lg:text-4xl xl:text-6xl font-semibold py-2 text-center">
              Custom
              <h1 className="bg-gradient-to-r  pl-2 from-[#185A78] to-[#996CE6] inline-block bg-clip-text text-transparent">
                Solutions
              </h1>
            </p>
            <p className="text-center text-base lg:text-lg xl:text-2xl font-normal">
              At Singularity, we specialize in creating Ai powered automations
              that leverage a wide range of industry leading tools and platforms
              to meet the unique needs of businesses across various sectors. Our
              team of experts is dedicated to harnessing the power of Ai to
              streamline operations, boost efficiency and drive innovation in
              your industry.
            </p>
            <div className="flex gap-8 w-full justify-center items-center flex-wrap pt-3 md:pt-0">
              {" "}
              <img
                className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
                src={Sol1}
                alt=""
              />
              <img
                className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
                src={Sol2}
                alt=""
              />
              <img
                className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
                src={Sol3}
                alt=""
              />
              <img
                className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
                src={Sol4}
                alt=""
              />
              <img
                className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
                src={Sol5}
                alt=""
              />
              <img
                className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
                src={Sol6}
                alt=""
              />
              <img
                className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
                src={Sol7}
                alt=""
              />
              <img
                className="w-[2.5rem] h-[2.5rem] lg:w-[3.5rem] lg:h-[3.5rem]"
                src={Sol8}
                alt=""
              />{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services2;
