import React from "react";
import Polymer from "../../assets/singularity/Polymer1.png";
import Design from "../Home/Design";
import ServiceSlider from "./ServiceSlider";
import { useEffect } from "react";

import SalesTask from "../../assets/singularity/SalesTask.png";
import SalesManagement from "../../assets/singularity/SalesManagement.png";
import EfficientCusMana from "../../assets/singularity/EfficientCusMana.png";
import AutomatedCustomer from "../../assets/singularity/AutomatedCustomer.png";

const AiPoweredSalesAutomation = () => {
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
            Ai-Powered{" "}
            <span className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 bg-clip-text text-transparent">
              Sales Automation
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
          <div className="flex flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-2 md:order-1 ">
            AI-Powered Sales Task Handling
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  ` Instantly manage sales tasks using Singularity's cutting-edge AI technology`,
                  `saving time and ensuring consistent and efficient sales operations`,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <ServiceSlider images={[SalesTask]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            Streamlined Sales Management
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Embrace a clutter-free sales experience with Singularity's automated interface`,
                  `enabling natural and intuitive sales processes.
                  `,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <ServiceSlider images={[SalesManagement]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-2 md:order-1 ">
            CRM Integration for Efficient Customer Management
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Seamlessly connect Singularity with your CRM system to leverage valuable customer data`,
                  `enabling you to manage customer information at scale and strengthen sales operations.`,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <ServiceSlider images={[EfficientCusMana]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 pb-5 md:pb-0">
          <div className="flex flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-xl text-center md:text-left lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            Automated Customer Interaction Handling
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Optimize your sales processes with Singularity's automated interaction handling`,
                  `promptly addressing customer inquiries and providing customized responses to boost customer satisfaction and sales conversion rates.
                  `,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <ServiceSlider images={[AutomatedCustomer]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiPoweredSalesAutomation;
