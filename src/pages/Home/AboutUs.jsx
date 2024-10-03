import React, { useState } from "react";
import GirlI from "../../assets/singularity/Girl.png";
import ManI from "../../assets/singularity/Man.png";
import Robot from "../../assets/singularity/Robot.png";
import Play from "../../assets/singularity/Solution.png";
import SingularityBanner from "../../assets/singularity/13.png";

import Home2 from "./Home2";

const AboutUs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  const homeStyle = {
    backgroundImage: `url("${SingularityBanner}")`,
  };
  return (
    <div
      style={homeStyle}
      className="grid  bg-no-repeat bg-center bg-cover place-items-center min-h-screen lg:py-[6rem] px-2"
    >
      {/* <div className="tab-btns">
                               {" "}
        <button
          className={activeTab === 1 ? "active" : ""}
          onClick={() => handleTabClick(1)}
        >
          <span>Highlights</span>
        </button>
                               {" "}
        <button
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
          <span>All Projects</span>
        </button>
                           {" "}
      </div>
      <div className="tab-content">
            {activeTab === 1 && <div>1</div>}   {" "}
        {activeTab === 2 && <div>2</div>}
      </div> */}
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
        <p className="text-center text-white font-medium text-[14px] md:text-[16px] lg:text-[18px] xl:w-[60%]">
          Leveraging the latest advancements in artificial intelligence, we
          provide innovative tools and platforms to streamline processes,
          enhance productivity, and drive growth.
        </p>

        <div className="flex items-end flex-wrap justify-center gap-3 2xl:gap-6 font-medium w-full pb-8 px-">
          {[
            "Ai Powered Spreadsheets ",
            "Meeting Summarizer",
            `Content 
              Generation`,
            `HR 
              Automation`,
            `Sales 
              Optimization`,
            `Customer Support Automation`,
          ].map((item, index) => {
            return (
              <button
                onClick={() => handleTabClick(index)}
                className={`${
                  activeTab === index
                    ? "bg-gradient-to-r bg-white/20 backdrop-blur text-white"
                    : "bg-white text-gray-900"
                } transition-colors  px-2 grid place-items-center text-center cursor-pointer rounded text-[15px] 2xl:text-[18px] lg:max-w-[150px xl:max-w-[200px] grow basis-[150px] 2xl:basis-[200px] h-[4rem] 2xl:h-[5rem]`}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 xl:gap-0">
          <div className="p-2">
            <img className="h-[483px w-[608px aspect-auto" src={Play} alt="" />
          </div>
          <div className="flex justify-center items-start gap-8 flex-col text-white">
            {activeTab === 0 && (
              <div className="space-y-8 flex flex-col justify-center items-center md:items-start">
                <p className="font-medium text-center md:text-left text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
                  Unlock insights by chatting with your spreadsheet data
                </p>
                <button
                  className="bg-gradient-to-r to-[#1B4098] from-[#8A67DD] lg:px-8 lg:py-3 md:px-6 md:py-2 px-4 py-2 rounded text-white text-base md:text-lg lg:text-xl font-medium active:scale-90 transition-all"
                  type="button"
                >
                  Learn More
                </button>
              </div>
            )}
            {activeTab === 1 && (
              <div className="space-y-8 flex flex-col justify-center items-center md:items-start">
                <p className="font-medium text-center md:text-left text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
                  Save time and capture key decisions and next steps with our
                  meeting transcript analyzer
                </p>
                <button
                  className="bg-gradient-to-r to-[#1B4098] from-[#8A67DD] lg:px-8 lg:py-3 md:px-6 md:py-2 px-4 py-2 rounded text-white text-base md:text-lg lg:text-xl font-medium active:scale-90 transition-all"
                  type="button"
                >
                  Learn More
                </button>
              </div>
            )}
            {activeTab === 2 && (
              <div className="space-y-8 flex w-full flex-col justify-center items-center md:items-start">
                <p className="font-medium text-center md:text-left text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
                  Effortlessly craft captivating content
                </p>
                <button
                  className="bg-gradient-to-r to-[#1B4098] from-[#8A67DD] lg:px-8 lg:py-3 md:px-6 md:py-2 px-4 py-2 rounded text-white text-base md:text-lg lg:text-xl font-medium active:scale-90 transition-all"
                  type="button"
                >
                  Learn More
                </button>
              </div>
            )}
            {activeTab === 3 && (
              <div className="space-y-8 flex flex-col justify-center items-center md:items-start">
                <p className="font-medium text-center md:text-left text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
                  Revolutionize your employee experience with automated HR
                  support - anytime, anywhere
                </p>
                <button
                  className="bg-gradient-to-r to-[#1B4098] from-[#8A67DD] lg:px-8 lg:py-3 md:px-6 md:py-2 px-4 py-2 rounded text-white text-base md:text-lg lg:text-xl font-medium active:scale-90 transition-all"
                  type="button"
                >
                  Learn More
                </button>
              </div>
            )}
            {activeTab === 4 && (
              <div className="space-y-8 flex flex-col justify-center items-center md:items-start">
                <p className="font-medium text-center md:text-left text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
                  Boost sales with Ai powered chatbots - personalized
                  recommendations, higher conversions
                </p>
                <button
                  className="bg-gradient-to-r to-[#1B4098] from-[#8A67DD] lg:px-8 lg:py-3 md:px-6 md:py-2 px-4 py-2 rounded text-white text-base md:text-lg lg:text-xl font-medium active:scale-90 transition-all"
                  type="button"
                >
                  Learn More
                </button>
              </div>
            )}
            {activeTab === 5 && (
              <div className="space-y-8 flex flex-col justify-center items-center md:items-start">
                <p className="font-medium text-center md:text-left text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
                  Streamline customer queries and free up your support team’s
                  time
                </p>
                <button
                  className="bg-gradient-to-r to-[#1B4098] from-[#8A67DD] lg:px-8 lg:py-3 md:px-6 md:py-2 px-4 py-2 rounded text-white text-base md:text-lg lg:text-xl font-medium active:scale-90 transition-all"
                  type="button"
                >
                  Learn More
                </button>
              </div>
            )}
             
          </div>
        </div>
        <p className="text-center text-white font-medium text-[14px] md:text-[16px] lg:text-[18px] xl:w-[60%]">
          Leveraging the latest advancements in artificial intelligence, we
          provide innovative tools and platforms to streamline processes,
          enhance productivity, and drive growth.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
