import React, { useState } from "react";
import Service2 from "../../assets/singularity/Service2.png";
import Sol1 from "../../assets/singularity/Solution1.png";
import Sol2 from "../../assets/singularity/Solution2.png";
import Sol3 from "../../assets/singularity/Solution3.png";
import Sol4 from "../../assets/singularity/Solution4.png";
import Sol5 from "../../assets/singularity/Solution5.png";
import Sol6 from "../../assets/singularity/Solution6.png";
import Sol7 from "../../assets/singularity/Solution7.png";
import Sol8 from "../../assets/singularity/Solution8.png";

import Platform from "../../assets/singularity/Platform.png";
import ContentFormat from "../../assets/singularity/ContentFormat.png";
import ContentStyle from "../../assets/singularity/ContentStyle.png";
import TargetAudience from "../../assets/singularity/TargetAudience.png";
import ContentVariation from "../../assets/singularity/ContentVariation.png";
import Slider from "../Slider";
import ServiceSlider from "./ServiceSlider";

import PlatformSpecificCustomization from "../../assets/singularity/PlatformSpecificCustomization.png";
import Diverse from "../../assets/singularity/Diverse.png";
import FinedGrained from "../../assets/singularity/FinedGrained.png";
import AudienceTargeting from "../../assets/singularity/AudienceTargeting.png";
import ContentVariationAB from "../../assets/singularity/ContentVariationAB.png";
import { useEffect } from "react";

const ContentGeneration2 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="space-y-12">
      <div className="container mx-auto space-y-14 px-6">
        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex flex-col justify-center gap-1 font-medium md:font-normal text-center items-center md:items-start text-xl lg:text-3xl xl:text-4xl order-2 md:order-1 ">
            Platform-Specific Customization
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Tailor your content for various platforms like Twitter, Facebook, Instagram, LinkedIn, and blogs`,
                  `Singularity's Ai-powered solution understands the nuances of each platform`,
                  `Generate optimized content specific to your requirements and audience preferences`,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <ServiceSlider images={[PlatformSpecificCustomization]} />
          </div>
        </div>
        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex flex-col justify-center gap-1 font-medium md:font-normal text-center items-center md:items-start text-xl lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            Diverse Content Types
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Blog articles`,
                  `Social media posts
                  `,
                  `Product descriptions`,
                  `Headlines`,
                  `Ad Copies`,
                  `Emails`,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <ServiceSlider images={[Diverse]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex flex-col justify-center gap-1 font-medium md:font-normal text-center items-center md:items-start text-xl lg:text-3xl xl:text-4xl order-2 md:order-1 ">
            Fine-Grained Control
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Exercise precise control over the generated content`,
                  `Customize the tone, style, and voice to match your brand guidelines`,
                  `Choose between different content approaches to align with your marketing goals`,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" w-full">
            <ServiceSlider images={[FinedGrained]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex flex-col justify-center gap-1 font-medium md:font-normal text-center items-center md:items-start text-xl lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            Audience Targeting
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Refine your content generation by specifying target audience characteristics. `,
                  `Ai can analyze audience demographics, preferences, and behavior`,
                  `Create content that resonates with specific segments`,
                  `Optimize engagement and conversions`,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className=" w-full">
            <ServiceSlider images={[AudienceTargeting]} />
          </div>
        </div>
        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex flex-col justify-center gap-1 font-medium md:font-normal text-center items-center md:items-start text-xl lg:text-3xl xl:text-4xl order-2 md:order-1 ">
            Content Variations and A/B Testing
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                {[
                  `Easily create content variations for A/B testing purposes
                  `,
                  `Singularity can generate multiple versions of content to experiment and measure their effectiveness`,
                ].map((item) => (
                  <li>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-full">
            <ServiceSlider images={[ContentVariationAB]} />
          </div>
        </div>
        <div className="container gird place-items-center pb-[5rem]">
          <div className="grid place-items-center md:gap-5 md:space-y-5 ">
            <p className="text-2xl lg:text-4xl xl:text-6xl font-semibold py-2 text-center">
              Custom
              <h1 className="bg-gradient-to-r font-semibold pl-1 from-[#0C3C8E] to-[#996CE6] inline-block bg-clip-text text-transparent">
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

export default ContentGeneration2;
