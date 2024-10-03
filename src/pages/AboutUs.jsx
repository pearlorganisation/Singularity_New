import { useState } from "react";
import SingularityBanner from "../assets/singularity/13.png";
import AboutUsSlider from "./AboutUsSlider";
import AboutERP from "../assets/singularity/AboutERP.png";
import AboutSupplyChain from "../assets/singularity/AboutSupplyChain.png";
import AboutTelemedicine from "../assets/singularity/AboutTelemedicine.png";

import AboutHRMS from "../assets/singularity/AboutHRMS.png";
import AboutLMS from "../assets/singularity/AboutLMS.png";
import AboutResearchColl from "../assets/singularity/AboutResearchColl.png";

import AboutHRAuto from "../assets/singularity/AboutHRAuto.png";
import AboutSales from "../assets/singularity/AboutSales.png";
import AboutCustomerSupport from "../assets/singularity/AboutCustomerSupport.png";

import AboutAiPowered from "../assets/singularity/AboutAiPowered.png";
import AboutMeetingSum from "../assets/singularity/AboutMeetingSum.png";
import AboutContentGene from "../assets/singularity/AboutContentGene.png";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTab1, setActiveTab1] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);
  const [activeTab3, setActiveTab3] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const homeStyle = {
    backgroundImage: `url("${SingularityBanner}")`,
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div
      style={homeStyle}
      className="grid  bg-no-repeat bg-center bg-cover place-items-center min-h-screen  pt-[6rem] lg:py-[8rem] px-2"
    >
      <div className="container flex flex-col justify-star items-center gap-3 lg:gap-6">
        <h1 className="text-center text-white text-[35px] md:text-[45px] lg:text-[55px] xl:text-[65px] xl:leading-[65px] mx-auto font-semibold">
          Solution We Offer
          {/* <span className="bg-gradient-to-r from-[#185A78] to-[#996CE6] inline-block bg-clip-text text-transparent">
            Offer
          </span>{" "} */}
        </h1>
        <p className="text-center text-white font-medium text-[14px] md:text-[16px] lg:text-[18px] xl:w-[60%]">
          Leveraging the latest advancements in artificial intelligence, we
          provide innovative tools and platforms to streamline processes,
          enhance productivity, and drive growth.
        </p>

        <div className="py-[4rem]">
          <div className="flex items-end flex-wrap justify-center gap-3 2xl:gap-6 font-medium w-full pb-8 px-">
            {[
              "Enterprise Resource Planning (ERP) ",
              "Supply Chain Management",
              `Telemedicine Platform`,
            ].map((item, index) => {
              return (
                <button
                  onClick={() => handleTabClick(index)}
                  className={`${
                    activeTab === index
                      ? "bg-gradient-to-r bg-white/20 backdrop-blur text-white"
                      : "bg-white text-gray-900"
                  } transition-colors px-2 grid place-items-center text-center cursor-pointer rounded-full text-[15px] 2xl:text-[18px] lg:max-w-[150px w-full grow basis-[250px] 2xl:basis-[200px] py-4`}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div className="grid gap-6 md:gap-8 lg:gap-12 xl:gap-">
            <div className="flex justify-center items-start gap-8 flex-col text-white">
              {activeTab === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="">
                    <div className="p-2">
                      <AboutUsSlider images={[AboutERP]} />
                    </div>
                  </div>

                  <div className="space-y-8 flex flex-col justify-center items-center">
                    <p className="font-medium text-center text-base md:text-lg 2xl:text-2xl">
                      Integrate Singularity with popular ERP systems such as SAP
                      or Oracle to streamline manufacturing processes, automate
                      data entry, and gain real-time insights. Optimize resource
                      allocation, enhance inventory management, and drive
                      operational efficiency.
                    </p>
                    <Link to="/integrations/EnterpriseResourcePlanning(ERP)Integration">
                      <button
                        className="bg-black/40 ring-2 ring-offset-2  ring-white  backdrop-blur lg:px-8 lg:py-3 md:px-6 md:py-2 px-4 py-2 rounded-full text-white text-base md:text-lg lg:text-xl font-medium active:scale-90 transition-all"
                        type="button"
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              )}
              {activeTab === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="">
                    <div className="p-2">
                      <AboutUsSlider images={[AboutSupplyChain]} />
                    </div>
                  </div>
                  <div className="space-y-8 flex flex-col justify-center items-center">
                    <p className="font-medium text-center text-base md:text-lg 2xl:text-2xl">
                      Combine Singularity with supply chain management platforms
                      like JDA or Blue Yonder to optimize logistics, automate
                      demand forecasting, and improve supplier collaboration.
                      Leverage Ai to streamline supply chain operations and
                      ensure efficient, on-time deliveries.
                    </p>
                    <Link to="/integrations/SupplyChainManagementIntegration">
                      <button
                        className="bg-black/40 ring-2 ring-offset-2  ring-white  backdrop-blur lg:px-8 lg:py-3 md:px-6 md:py-2 px-4 py-2 rounded-full text-white text-base md:text-lg lg:text-xl font-medium active:scale-90 transition-all"
                        type="button"
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              )}
              {activeTab === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="">
                    <div className="p-2">
                      <AboutUsSlider images={[AboutTelemedicine]} />
                    </div>
                  </div>
                  <div className="space-y-8 flex w-full flex-col justify-center items-center">
                    <p className="font-medium text-center text-base md:text-lg 2xl:text-2xl">
                       Combine Singularity with telemedicine platforms to
                      enhance virtual patient consultations. Leverage Ai-powered
                      assistance during video calls, automate documentation, and
                      provide personalized recommendations to healthcare
                      professionals.
                    </p>
                    <Link to="/integrations/TelemedecinePlatformIntegration">
                      <button
                        className="bg-black/40 ring-2 ring-offset-2  ring-white  backdrop-blur lg:px-8 lg:py-3 md:px-6 md:py-2 px-4 py-2 rounded-full text-white text-base md:text-lg lg:text-xl font-medium active:scale-90 transition-all"
                        type="button"
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              )}
               
            </div>
          </div>
        </div>

        <div className="py-[4rem]">
          <div className="flex items-end flex-wrap justify-center gap-3 2xl:gap-6 font-medium w-full pb-8 px-">
            {[
              `Human Resources Management System (HRMS)`,
              `Learning Management System 
              (LMS)`,
              `Research Collaboration Platform`,
            ].map((item, index) => {
              return (
                <button
                  onClick={() => setActiveTab1(index)}
                  className={`${
                    activeTab1 === index
                      ? "bg-gradient-to-r bg-white/20 backdrop-blur text-white"
                      : "bg-white text-gray-900"
                  } transition-colors  px-2 grid place-items-center text-center cursor-pointer rounded-full text-[15px] 2xl:text-[18px] lg:max-w-[150px w-full grow basis-[250px] 2xl:basis-[200px] py-4`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <div className="grid gap-6 md:gap-8 lg:gap-12 xl:gap-6">
            <div className="flex justify-center items-start gap-8 flex-col text-white">
              {activeTab1 === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="">
                    <div className="p-2 object-cover">
                      <AboutUsSlider images={[AboutHRMS]} />
                    </div>
                  </div>
                  <div className="space-y-8 flex flex-col justify-center items-center">
                    <p className="font-medium text-center text-base md:text-lg 2xl:text-2xl">
                      Integrate Singularity with popular HRMS platforms like
                      Workday or BambooHR to streamline HR processes, automate
                      employee onboarding, and enhance employee engagement.
                      Leverage Ai to provide instant access to HR information,
                      policies, and support through Ai-driven chatbots and
                      virtual assistants.
                    </p>
                    <Link to="/integrations/HumanResourcesManagementSystem(HRMS)Integration">
                      <button
                        className="bg-black/40 ring-2 ring-offset-2  ring-white  backdrop-blur lg:px-8 lg:py-3 md:px-6 md:py-2 px-4 py-2 rounded-full text-white text-base md:text-lg lg:text-xl font-medium active:scale-90 transition-all"
                        type="button"
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              )}
              {activeTab1 === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="">
                    <div className="p-2">
                      <AboutUsSlider images={[AboutLMS]} />
                    </div>
                  </div>
                  <div className="space-y-8 flex flex-col justify-center items-center">
                    <p className="font-medium text-center text-base md:text-lg 2xl:text-2xl">
                      Integrate Singularity with popular LMS platforms like
                      Canvas or Moodle to enhance online learning experiences.
                      Provide Ai-powered support to students, automate grading,
                      and deliver personalized educational content tailored to
                      individual needs.
                    </p>
                    <Link to="/integrations/LearningManagementSystem(LMS)Integration">
                      <button
                        className="bg-black/40 ring-2 ring-offset-2  ring-white  backdrop-blur lg:px-8 lg:py-3 md:px-6 md:py-2 px-4 py-2 rounded-full text-white text-base md:text-lg lg:text-xl font-medium active:scale-90 transition-all"
                        type="button"
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              )}
              {activeTab1 === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="">
                    <div className="p-2">
                      <AboutUsSlider images={[AboutResearchColl]} />
                    </div>
                  </div>

                  <div className="space-y-8 flex flex-col justify-center items-center">
                    <p className="font-medium text-center text-base md:text-lg 2xl:text-2xl">
                      Combine Singularity with research collaboration platforms
                      like ResearchGate or Mendeley to streamline research
                      workflows, automate literature review, and facilitate
                      knowledge sharing. Leverage Ai capabilities to analyze
                      research data, identify trends, and generate insights.
                    </p>
                    <Link to="/integrations/ResearchCollaborationPlatformIntegration">
                      <button
                        className="bg-black/40 ring-2 ring-offset-2  ring-white  backdrop-blur lg:px-8 lg:py-3 md:px-6 md:py-2 px-4 py-2 rounded-full text-white text-base md:text-lg lg:text-xl font-medium active:scale-90 transition-all"
                        type="button"
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              )}
               
            </div>
          </div>
        </div>

        <div className="py-[4rem]">
          <div className="flex items-end flex-wrap justify-center gap-3 2xl:gap-6 font-medium w-full pb-8 px-">
            {[
              `HR 
              Automation`,
              `Sales 
              Optimization`,
              `Customer Support Automation`,
            ].map((item, index) => {
              return (
                <button
                  onClick={() => setActiveTab2(index)}
                  className={`${
                    activeTab2 === index
                      ? "bg-gradient-to-r bg-white/20 backdrop-blur text-white"
                      : "bg-white text-gray-900"
                  } transition-colors  px-2 grid place-items-center text-center cursor-pointer rounded-full text-[15px] 2xl:text-[18px] lg:min-w-[350px] w-full grow basis-[250px] 2xl:basis-[200px] py-4`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          <div className="grid place-items-center  gap-6 md:gap-8 lg:gap-12 xl:gap-6">
            <div className="flex justify-center items-start gap-8 flex-col text-white">
              {activeTab2 === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="">
                    <div className="p-2">
                      <AboutUsSlider images={[AboutHRAuto]} />
                    </div>
                  </div>
                  <div className="space-y-8 flex flex-col justify-center items-center">
                    <p className="font-medium text-center text-base md:text-lg 2xl:text-2xl">
                      Revolutionize your employee experience with automated HR
                      support - anytime, anywhere
                    </p>
                    <Link to="/services/HRAutomation">
                      <button
                        className="bg-black/40 ring-2 ring-offset-2  ring-white  backdrop-blur lg:px-8 lg:py-3 md:px-6 md:py-2 px-4 py-2 rounded-full text-white text-base md:text-lg lg:text-xl font-medium active:scale-90 transition-all"
                        type="button"
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              )}
              {activeTab2 === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="">
                    <div className="p-2">
                      <AboutUsSlider images={[AboutSales]} />
                    </div>
                  </div>
                  <div className="space-y-8 flex flex-col justify-center items-center">
                    <p className="font-medium text-center text-base md:text-lg 2xl:text-2xl">
                      Boost sales with Ai powered chatbots - personalized
                      recommendations, higher conversions
                    </p>
                    <Link to="/services/Ai-PoweredSalesAutomation">
                      <button
                        className="bg-black/40 ring-2 ring-offset-2  ring-white  backdrop-blur lg:px-8 lg:py-3 md:px-6 md:py-2 px-4 py-2 rounded-full text-white text-base md:text-lg lg:text-xl font-medium active:scale-90 transition-all"
                        type="button"
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              )}
              {activeTab2 === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="">
                    <div className="p-2">
                      <AboutUsSlider images={[AboutCustomerSupport]} />
                    </div>
                  </div>
                  <div className="space-y-8 flex flex-col justify-center items-center">
                    <p className="font-medium text-center text-base md:text-lg 2xl:text-2xl">
                      Streamline customer queries and free up your support
                      team’s time
                    </p>
                    <Link to="/services/AiEnabledCustomerSupport">
                      <button
                        className="bg-black/40 ring-2 ring-offset-2  ring-white  backdrop-blur lg:px-8 lg:py-3 md:px-6 md:py-2 px-4 py-2 rounded-full text-white text-base md:text-lg lg:text-xl font-medium active:scale-90 transition-all"
                        type="button"
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              )}
               
            </div>
          </div>
        </div>

        <div className="py-[4rem]">
          <div className="flex items-end flex-wrap justify-center gap-3 2xl:gap-6 font-medium w-full pb-8 px-">
            {[
              "Ai Powered Spreadsheets ",
              "Meeting Summarizer",
              `Content 
              Generation`,
            ].map((item, index) => {
              return (
                <button
                  onClick={() => setActiveTab3(index)}
                  className={`${
                    activeTab3 === index
                      ? "bg-gradient-to-r bg-white/20 backdrop-blur text-white"
                      : "bg-white text-gray-900"
                  } transition-colors  px-2 grid place-items-center text-center cursor-pointer rounded-full text-[15px] 2xl:text-[18px] lg:min-w-[350px] w-full grow basis-[250px] 2xl:basis-[200px] py-4`}
                >
                  {item}
                </button>
              );
            })}
          </div>
          <div className="grid place-items-center gap-6 md:gap-8 lg:gap-12 xl:gap-">
            <div className="flex justify-center items-start gap-8 flex-col text-white">
              {activeTab3 === 0 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="">
                    <div className="p-2">
                      <AboutUsSlider images={[AboutAiPowered]} />
                    </div>
                  </div>
                  <div className="space-y-8 flex flex-col justify-center items-center">
                    <p className="font-medium text-center text-base md:text-lg 2xl:text-2xl">
                      Unlock insights by chatting with your spreadsheet date
                    </p>
                    <Link to="/services/AiPoweredVideoCalling">
                      <button
                        className="bg-black/40 ring-2 ring-offset-2  ring-white  backdrop-blur lg:px-8 lg:py-3 md:px-6 md:py-2 px-4 py-2 rounded-full text-white text-base md:text-lg lg:text-xl font-medium active:scale-90 transition-all"
                        type="button"
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              )}
              {activeTab3 === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="">
                    <div className="p-2">
                      <AboutUsSlider images={[AboutMeetingSum]} />
                    </div>
                  </div>
                  <div className="space-y-8 flex flex-col justify-center items-center">
                    <p className="font-medium text-center text-base md:text-lg 2xl:text-2xl">
                      Save time and capture key decisions and next steps with
                      our meeting transcript analyzer
                    </p>
                    <Link to="/services/AiEmailAutomation">
                      <button
                        className="bg-black/40 ring-2 ring-offset-2  ring-white  backdrop-blur lg:px-8 lg:py-3 md:px-6 md:py-2 px-4 py-2 rounded-full text-white text-base md:text-lg lg:text-xl font-medium active:scale-90 transition-all"
                        type="button"
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              )}
              {activeTab3 === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <div className="">
                    <div className="p-2">
                      <AboutUsSlider images={[AboutContentGene]} />
                    </div>
                  </div>
                  <div className="space-y-8 flex flex-col justify-center items-center">
                    <p className="font-medium text-center text-base md:text-lg 2xl:text-2xl">
                      Effortlessly craft captivating content
                    </p>
                    <Link to="/services/ContentGeneration">
                      <button
                        className="bg-black/40 ring-2 ring-offset-2  ring-white  backdrop-blur lg:px-8 lg:py-3 md:px-6 md:py-2 px-4 py-2 rounded-full text-white text-base md:text-lg lg:text-xl font-medium active:scale-90 transition-all shadow-[rgba(50,_50,_93,_0.25)_0px_50px_100px_-20px,_rgba(0,_0,_0,_0.3)_0px_30px_60px_-30px,_rgba(10,_37,_64,_0.35)_0px_-2px_6px_0px_inset]"
                        type="button"
                      >
                        Learn More
                      </button>
                    </Link>
                  </div>
                </div>
              )}
               
            </div>
          </div>
        </div>
        {/*<div className="flex flex-wrap items-end gap-[3rem] w-full">
          <PriceCard
            name="Basic Plan"
            price={'$29'}
            features={[
              `Access to AI-Powered Spreadsheets`,
              `Meeting Analyzer for streamlined decision-making`,
              `Effortless Content Generation for captivating materials`,
            ]}
          />
          
          <PriceCard
            name="Custom Enterprise Plan"
            price={'Get in touch for quote'}
            features={[
              `All basic plan features`,
              `Robust HR Automation for onboarding, performance management, and beyond`,
              `Advanced Sales Optimization with CRM integration, lead scoring, and real-time insights`,
              ` Customer Support Automation with extensive training on product data and FAQs`,
              `Fully customized AI-Powered Spreadsheets tailored to your data needs`,
              ` Meeting Analyzer integration with CRM systems and customizable analytics`,
              `Tailored Content Generation with AI learning from your content and feedback`,
              `Dedicated account manager and priority support`,
              `Integration with 3000+ tools and platforms`
            ]}
          />
        </div>*/}
      </div>
    </div>
  );
};

export default AboutUs;
