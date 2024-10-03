import React from "react";
import Polymer from "../../assets/singularity/Polymer1.png";
import Design from "../Home/Design";
import ServiceSlider from "./ServiceSlider";

import EmailCrafting from "../../assets/singularity/EmailCrafting.png";
import StreamlinedInbox from "../../assets/singularity/StreamlinedInbox.png";
import CRMIntegration from "../../assets/singularity/CRMIntegration.png";
import AutomatedEmail from "../../assets/singularity/AutomatedEmail.png";
import { useEffect } from "react";

const AiEmailAutomation = () => {
  const homeStyle = {
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
            Ai Email{" "}
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
          <div className="flex flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-xl text-center md:text-left lg:text-3xl xl:text-4xl order-2 md:order-1 ">
            AI-Powered Email Reply Crafting
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Automate generation of personalized email responses `,
                  `Ensure consistent and engaging communication`,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" w-full">
            <ServiceSlider images={[EmailCrafting]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-xl text-center md:text-left lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            Streamlined Inbox Management
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Embrace a clutter-free email experience`,
                  //`Chat-based interface through natural and intuitive conversations.`,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <ServiceSlider images={[StreamlinedInbox]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-xl text-center md:text-left lg:text-3xl xl:text-4xl order-2 md:order-1 ">
            CRM Integration for Personalized Emails
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Seamlessly connect Singularity with your CRM system to leverage valuable customer data`,
                  `Automate crafting personalized emails at scale and strengthen customer relationships`,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <ServiceSlider images={[CRMIntegration]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0 pb-5 md:pb-0">
          <div className="flex flex-col justify-center gap-1 items-start text-xl text-center md:text-left lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            Automated Email Campaign Response Handling
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  ` Optimize your email campaigns with Singularity's automated reply crafting`,
                  `Promptly address user inquiries`,
                  `Provide customized responses to boost campaign engagement and conversion rates
                  `,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <ServiceSlider images={[AutomatedEmail]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiEmailAutomation;
