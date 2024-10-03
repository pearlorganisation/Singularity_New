import React, { useEffect } from "react";
import Slider from "../Slider";
import ERPLogo1 from "../../assets/singularity/ERPLogo1.png";
import ERPLogo2 from "../../assets/singularity/ERPLogo2.png";
import ERPLogo3 from "../../assets/singularity/ERPLogo3.png";
import ERPLogo4 from "../../assets/singularity/ERPLogo4.png";

import DecisionMaking1 from "../../assets/singularity/DecisionMaking1.png";
import DecisionMaking2 from "../../assets/singularity/DecisionMaking2.png";

import ResourceOpt1 from "../../assets/singularity/ResourceOpt1.png";
import ResourceOpt2 from "../../assets/singularity/ResourceOpt2.png";

import Streamline1 from "../../assets/singularity/Streamline1.png";
import Streamline2 from "../../assets/singularity/Streamline2.png";

import CustomerS1 from "../../assets/singularity/CustomerS1.png";
import CustomerS2 from "../../assets/singularity/CustomerS2.png";

import Polymer from "../../assets/singularity/Polymer1.png";

import Marquee from "react-fast-marquee";
import PriceCard from "./PriceCard";
import Design from "../Home/Design";



const EnterpriseResource = () => {
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
    <div className="">
      <div style={homeStyle} className="min-h-screen grid place-items-center">
        <div className="absolute -z-0 w-full h-full top-0 left-0">
          <Design />
        </div>
        <div className="container px-3 pt-[6.5rem] p-[3rem] space-y-[4rem]">
          <div className="z-0 font-semibold text-white text-center container space-y-6">
            <p className="text-clampH font-semibold bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 bg-clip-text text-transparent lg:leading-[5.8rem] xl:leading-[6.8rem] pb-3">
              Enterprise Resource Planning (ERP) Integration
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
          <div className="flex ml-7 max-md:ml-0 max-md:text-base max-md:font-semibold max-md:mb-2 flex-col max-md:w-fit max-md:mx-auto justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-2 md:order-1">
            <h3 className="max-md:w-full  max-md:text-start max-md:text-base">
              Data-Driven Decision-Making
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  AI empowers ERP users with data-driven insights.
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Enable more informed and timely decision-making .
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[DecisionMaking1, DecisionMaking2]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex flex-col max-md:mx-auto max-md:text-base max-md:font-semibold max-md:mb-2 justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              Resource Optimization
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  {" "}
                  Predictive capabilities assist in optimizing resource
                  allocation,
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  {" "}
                  Reduce wastage{" "}
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Enhance cost-effectiveness in ERP processes.
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[ResourceOpt1, ResourceOpt2]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex max-md:mx-auto ml-7 max-md:ml-0 max-md:text-base max-md:font-semibold max-md:mb-2 flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-2 md:order-1">
            <h3 className="max-md:w-full  max-md:text-start max-md:text-base">
              Streamlined Business Operations
            </h3>

            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  AI-driven automation streamlines ERP workflows.
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Minimize manual intervention.
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  improving overall process efficiency.
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[Streamline1, Streamline2]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex max-md:mx-auto flex-col max-md:text-base max-md:font-semibold max-md:mb-2 justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left  text-xl lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              Improved Customer Service
            </h3>
            <div className="flex flex-col text-xl text-left ml-5 max-md:ml-0">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  ERP systems can better anticipate customer demands
                </li>{" "}
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  {" "}
                  Enhance customer satisfaction
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[CustomerS1, CustomerS2]} />
          </div>
        </div>

        <div className="grid place-items-center gap-3">
          <h1 className="text-clampS2 max-md:text-base max-md:font-semibold max-md:mb-2 font-medium text-center md:text-left">
            Singularity AI seamlessly integrates into various popular ERP
            software platforms.
          </h1>
          <div className="flex justify-around items-center flex-wrap">
            {/* <Marquee speed={200} className="flex gap-[10rem]"> */}
            <img
              className="md:w-[14rem] md:h-[8rem] w-[10rem] h-[6rem]"
              src={ERPLogo1}
              alt=""
            />
            <img
              className="md:w-[14rem] md:h-[8rem] w-[10rem] h-[6rem]"
              src={ERPLogo2}
              alt=""
            />
            <img
              className="md:w-[14rem] md:h-[8rem] w-[10rem] h-[6rem]"
              src={ERPLogo3}
              alt=""
            />
            <img
              className="md:w-[14rem] md:h-[8rem] w-[10rem] h-[6rem]"
              src={ERPLogo4}
              alt=""
            />
            {/* </Marquee> */}
          </div>
        </div>

        {/*<div className="grid place-items-center gap-3 w-full">
          <h1 className="text-clampS2 font-medium">Choose The Plan</h1>

          <div className="flex flex-wrap items-end gap-[3rem] w-full">
            <PriceCard
              name="Basic Plan"
              price={29}
              features={[
                `Access to AI-Powered Spreadsheets`,
                `Meeting Analyzer for streamlined decision-making`,
                `Effortless Content Generation for captivating materials`,
              ]}
            />
            <PriceCard
              name="Standard"
              price={35}
              features={[
                `All Basic Plan features`,
                `Robust HR Automation for onboarding, performance management, and beyond`,
                `Advanced Sales Optimization with CRM integration, lead scoring, and real-time insights`,
                `Customer Support Automation with extensive training on product data and FAQs`,
                `Fully customized AI-Powered Spreadsheets tailored to your data needs`,
                ` Meeting Analyzer integration with CRM systems and customizable analytics`,
                `Tailored Content Generation with AI learning from your content and feedback`,
                `Dedicated account manager and priority support`,
                ` Integration with 3000+ tools and platforms`,
              ]}
            />
            <PriceCard
              name="Custom Enterprise Plan"
              price={40}
              features={[
                `Access to AI-Powered Spreadsheets`,
                `Meeting Analyzer for streamlined decision-making`,
                `Effortless Content Generation for captivating materials`,
              ]}
            />
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default EnterpriseResource;
