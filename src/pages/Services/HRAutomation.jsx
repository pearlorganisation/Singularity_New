import React from "react";
import Polymer from "../../assets/singularity/Polymer1.png";
import Design from "../Home/Design";
import ServiceSlider from "./ServiceSlider";
import { useEffect } from "react";

import HrTaskHandling from "../../assets/singularity/HrTaskHandling.png";
import HrManagement from "../../assets/singularity/HrManagement.png";
import HRMSIntegration from "../../assets/singularity/HRMSIntegration.png";
import AutomatedEmp from "../../assets/singularity/AutomatedEmp.png";

const HRAutomation = () => {
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
      <div style={homeStyle} className="h-screen  grid place-items-center">
        <div className="absolute -z-0 w-full h-full top-0 left-0">
          <Design />
        </div>

        <div className="z-0 font-semibold text-white text-center container space-y-6">
          <p className="text-clampH font-semibold bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 bg-clip-text text-transparent lg:leading-[5.8rem] xl:leading-[6.8rem] pb-3">
            {" "}
            HR{" "}
            <span className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 bg-clip-text text-transparent">
              Automation
            </span>
          </p>
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
          className="w-full h-[50rem] p-3"
          // controls 
          autoPlay
          loop
          src={"/video/SINGULARITY [NEW VOICE].mp4"}
        />
      </div>

      <div className="container mx-auto grid place-items-center px-6">
        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start md:text-left text-center text-xl lg:text-3xl xl:text-4xl order-2 md:order-1">
            AI-Powered HR Task Handling
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Leverage Ai to manage HR tasks`,
                  `Save time and ensure efficient HR operations
                  `,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <ServiceSlider images={[HrTaskHandling]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            Streamlined HR Management
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Embrace a clutter-free HR experience with Singularity's automated interface`,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <ServiceSlider images={[HrManagement]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start md:text-left text-center text-xl lg:text-3xl xl:text-4xl order-2 md:order-1">
            HRMS Integration for Efficient Employee Management
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  ` Seamlessly connect Singularity with your HRMS system to leverage valuable employee data`,
                  `Manage employee information at scale using Ai`,
                  `Upto 70% increased efficiency in HR operations`,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <ServiceSlider images={[HRMSIntegration]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 pb-5 md:pb-0">
          <div className="flex flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-xl text-center md:text-left lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            Automated Employee Interaction Handling
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Automate onboarding of new employees`,
                  `Promptly address employee inquiries with chatbots trained on company knowledge-bases`,
                  `Provide 24x7 responses to boost employee engagement and satisfaction.
                  `,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <ServiceSlider images={[AutomatedEmp]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRAutomation;
