import React from "react";
import SideImage from "../../assets/singularity/Rectangle15.png";

import Sol1 from "../../assets/singularity/Solution1.png";
import Sol2 from "../../assets/singularity/Solution2.png";
import Sol3 from "../../assets/singularity/Solution3.png";
import Sol4 from "../../assets/singularity/Solution4.png";
import Sol5 from "../../assets/singularity/Solution5.png";
import Sol6 from "../../assets/singularity/Solution6.png";
import Sol7 from "../../assets/singularity/Solution7.png";
import Sol8 from "../../assets/singularity/Solution8.png";
import Slider from "react-slick";
import SingularityBanner from "../../assets/singularity/18.png";
import AudienceTargeting from "../../assets/singularity/AudienceTargeting.png";
import EnhancedResearch2 from "../../assets/singularity/EnhancedResearch2.png";
import ResourceOpt2 from "../../assets/singularity/ResourceOpt2.png";
import TechSupport from "../../assets/singularity/slider3.png";

import { GrDocumentText } from "react-icons/gr";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import Frame1 from "../../assets/singularity/Frame1.png";
import Frame2 from "../../assets/singularity/Frame2.png";
import ContactUsBanner from "../../assets/singularity/18.png";
import { AdoptionChart } from "../../components/AdoptionChart";
import { ProfitVsAIInvestmentScatterChart } from "../../components/ProfitsvsInvestmentChart";
import { InvestmentInAi } from "../../components/InvestmentInAi";
import ServiceSlider from "../Services/ServiceSlider";

const Home5 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const homeStyle = {
    backgroundImage: `url("${SingularityBanner}")`,
  };
  return (
    <>
      <div
        style={homeStyle}
        className="grid place-items-center font-poppins space-y-6 bg-no-repeat bg-center bg-cover py-[8rem]"
      >
        <div className="container mx-auto py-5 gap-5  grid place-items-center">
          <div className="w-[90%] space-y-3 ">
            <h1 className="text-center w-full text-white text-3xl lg:text-4xl xl:text-5xl xl:leading-[3.5rem] mx-auto font-semibold">
              Why do you need Singularity?
              {/* <span className="pl-1 bg-gradient-to-r from-[#185A78] to-[#996CE6] inline-block bg-clip-text text-transparent">
                Singularity?
              </span>{" "} */}
            </h1>
            <p className="text-center text-[14px] md:text-[16px] pb-6 lg:text-[20px] text-white mx-auto font-medium w-full lg:w-[90%] xl:w-[70%] ">
              Failure to adopt AI will leave your organization vulnerable to
              swift obsolescence, while your AI-powered competitors seize the
              reins of industry dominance.
            </p>
            <div className="md:flex bg-gray-50/10 rounded-md py-10 md:flex-row md:space-x-2 mt-8 px-6 sm:flex sm:flex-col sm:justify-center ">
              <div className="grid lg:grid-cols-2 xl:grid-cols-3 min-h-[25rem] gap-6">
                <div className="increasing_numbers border border-white text-white border-t-transparent border-r-transparent px-6 py-5 space-y-6">
                  <h1 className="font-semibold text-4xl lg:text-5xl xl:text-6xl">
                    <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                      {({ isVisible }) => (
                        <div className="inside" style={{ height: 50 }}>
                          {isVisible ? (
                            <CountUp
                              useEasing={true}
                              start={0}
                              end={70}
                              suffix="%"
                            />
                          ) : null}
                        </div>
                      )}
                    </VisibilitySensor>
                  </h1>
                  <p className="text-xl">leaner workforce</p>
                </div>

                <div className="increasing_numbers border border-white text-white border-t-transparent border-r-transparent px-6 py-5 space-y-6">
                  <h1 className="font-semibold text-4xl lg:text-5xl xl:text-6xl">
                    <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                      {({ isVisible }) => (
                        <div className="inside" style={{ height: 50 }}>
                          {isVisible ? (
                            <CountUp
                              useEasing={true}
                              start={0}
                              end={30}
                              suffix="%"
                            />
                          ) : null}
                        </div>
                      )}
                    </VisibilitySensor>
                  </h1>
                  <p className="text-xl">
                    cost savings through increased automation of repetitive
                    tasks
                  </p>
                </div>

                <div className="increasing_numbers border border-white text-white border-t-transparent border-r-transparent px-6 py-5 space-y-6">
                  <h1 className="font-semibold text-4xl lg:text-5xl xl:text-6xl">
                    <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                      {({ isVisible }) => (
                        <div className="inside" style={{ height: 50 }}>
                          {isVisible ? (
                            <CountUp
                              useEasing={true}
                              start={0}
                              end={25}
                              suffix="%"
                            />
                          ) : null}
                        </div>
                      )}
                    </VisibilitySensor>
                  </h1>
                  <p className="text-xl">
                    cost savings by streamlining inventory management and
                    logistics.
                  </p>
                </div>

                <div className="increasing_numbers border border-white text-white border-t-transparent border-r-transparent px-6 py-5 space-y-6">
                  <h1 className="font-semibold text-4xl lg:text-5xl xl:text-6xl">
                    <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                      {({ isVisible }) => (
                        <div className="inside" style={{ height: 50 }}>
                          {isVisible ? (
                            <CountUp
                              useEasing={true}
                              start={0}
                              end={20}
                              suffix="%"
                            />
                          ) : null}
                        </div>
                      )}
                    </VisibilitySensor>
                  </h1>
                  <p className="text-xl">reduction in maintenance costs</p>
                </div>

                <div className="increasing_numbers border border-white text-white border-t-transparent border-r-transparent px-6 py-5 space-y-6">
                  <h1 className="font-semibold text-4xl lg:text-5xl xl:text-6xl">
                    <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                      {({ isVisible }) => (
                        <div className="inside" style={{ height: 50 }}>
                          {isVisible ? (
                            <CountUp
                              useEasing={true}
                              start={0}
                              end={30}
                              suffix="%"
                            />
                          ) : null}
                        </div>
                      )}
                    </VisibilitySensor>
                  </h1>
                  <p className="text-xl">savings in customer service costs</p>
                </div>
                <div className="increasing_numbers border border-white text-white border-t-transparent border-r-transparent px-6 py-5 space-y-6">
                  <h1 className="font-semibold text-4xl lg:text-5xl xl:text-6xl">
                    <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                      {({ isVisible }) => (
                        <div className="inside" style={{ height: 50 }}>
                          {isVisible ? (
                            <CountUp
                              useEasing={true}
                              start={0}
                              end={30}
                              suffix="%"
                            />
                          ) : null}
                        </div>
                      )}
                    </VisibilitySensor>
                  </h1>
                  <p className="text-xl">
                    reduction in fraud by identifying and preventing fraudulent
                    activities in financial transactions.
                  </p>
                </div>
                <div className="increasing_numbers border border-white text-white border-t-transparent border-r-transparent px-6 py-5 space-y-6">
                  <h1 className="font-semibold text-4xl lg:text-5xl xl:text-6xl">
                    <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                      {({ isVisible }) => (
                        <div className="inside" style={{ height: 50 }}>
                          {isVisible ? (
                            <CountUp
                              useEasing={true}
                              start={0}
                              end={25}
                              suffix="%"
                            />
                          ) : null}
                        </div>
                      )}
                    </VisibilitySensor>
                  </h1>
                  <p className="text-xl">
                    cost savings by targeting relevant audiences and optimizing
                    ad spend.
                  </p>
                </div>

                <div className="increasing_numbers border border-white text-white border-t-transparent border-r-transparent px-6 py-5 space-y-6">
                  <h1 className="font-semibold text-4xl lg:text-5xl xl:text-6xl">
                    <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                      {({ isVisible }) => (
                        <div className="inside" style={{ height: 50 }}>
                          {isVisible ? (
                            <CountUp
                              useEasing={true}
                              start={0}
                              end={20}
                              suffix="%"
                            />
                          ) : null}
                        </div>
                      )}
                    </VisibilitySensor>
                  </h1>
                  <p className="text-xl">
                    savings in HR administrative costs by automating tasks such
                    as candidate screening and employee onboarding.
                  </p>
                </div>

                <div className="increasing_numbers border border-white text-white border-t-transparent border-r-transparent px-6 py-5 space-y-6">
                  <h1 className="font-semibold text-4xl lg:text-5xl xl:text-6xl">
                    <VisibilitySensor partialVisibility offset={{ bottom: 0 }}>
                      {({ isVisible }) => (
                        <div className="inside" style={{ height: 50 }}>
                          {isVisible ? (
                            <CountUp
                              useEasing={true}
                              start={0}
                              end={20}
                              suffix="%"
                            />
                          ) : null}
                        </div>
                      )}
                    </VisibilitySensor>
                  </h1>
                  <p className="text-xl">
                    cost savings by providing data-driven insights for better
                    decision-making and resource allocation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-center w-full text-white text-3xl lg:text-4xl xl:text-5xl xl:leading-[3.5rem] mx-auto font-semibold">
          How Companies are Adopting Ai
        </h1>
        <span className="text-center w-full text-white text-xl lg:text-2xl xl:text-3xl xl:leading-[3.5rem] mx-auto ">
          Companies are automating upto 50% of their legacy workflows with Ai
          powered automations
        </span>
        <div className="container grid place-items-center mx-auto sm:w-[10rem] md:w-3/4 lg:w-2/3">
          <AdoptionChart />
          {/*<ProfitVsAIInvestmentScatterChart />*/}
          {/*<InvestmentInAi />*/}
        </div>

        <div className="container gird place-items-center px-6 text-white">
          <div className="grid place-items-center gap-5 lg:space-y-5 ">
            <p className="text-3xl text-center lg:text-5xl xl:text-6xl font-semibold ">
              Steps
              <span className="bg-gradient-to-r leading-[1.5]  pl-2 from-[#185A78] to-[#996CE6] inline-block bg-clip-text text-transparent">
                To Integrate
              </span>
            </p>

            <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
              <div className="flex flex-col text-left w-full order-2 md:order-none">
                <ul className="font-normal md:font-medium list-disc ml-5 space-y-2 flex justify-center items-center flex-col h-full md:text-left text-xl md:text-2xl lg:text-3xl">
                  {[
                    `Identify Client Requirements.`,
                    `Technology Implementation and Testing.`,
                    `Deploy and Continued Support.`,
                  ].map((item) => (
                    <li className="text-left w-full">{item}</li>
                  ))}
                </ul>
              </div>
              <div className=" w-full">
                <ServiceSlider
                  images={[
                    "https://www.bls.gov/careeroutlook/2014/images/law-firms1.jpg",
                  ]}
                />
              </div>
            </div>
          </div>
        </div>

      </div>


    </>
  );
};

export default Home5;
