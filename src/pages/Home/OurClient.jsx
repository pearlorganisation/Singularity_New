import React, { useState } from "react";
import OurClientBanner from "../../assets/singularity/1.png";
import PolymerHempLogo from "../../assets/singularity/PolymerHempLogo.png";
import PaygoldLogo from "../../assets/singularity/PaygoldLogo.png";
import SaveDesisLogo from "../../assets/singularity/SaveDesisLogo.png";
import MediaLifeLog from "../../assets/singularity/MediaLifeLog.png";
import OurClientSlider from "./OurClientSlider";
import Polymer from "../../assets/singularity/Polymer1.png";
import SaveDesis from "../../assets/singularity/SaveDesis.png";
import PaygoldI from "../../assets/singularity/PaygoldI.png";
import MedLife from "../../assets/singularity/MedLife.png";

const OurClient = () => {
  const [activeTab, setActiveTab] = useState(1);
  const imagesSlider = [Polymer, PaygoldI, SaveDesis, MedLife];
  const homeStyle = {
    // backgroundImage: `url("${SingularityBanner}")`,
    backgroundImage: `url(${imagesSlider[activeTab - 1]})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };

  const stats = [
    {
      data: <i class="fa-solid fa-laptop"></i>,
      title: "Custom Software",
    },
    {
      data: <i class="fa-solid fa-headphones-simple"></i>,
      title: "Call Centre Support",
    },
    {
      data: <i class="fa-solid fa-code-compare"></i>,
      title: "Automation",
    },
  ];

  return (
    <div
      style={homeStyle}
      className="min-h-[100vh] grid place-items-center bg-no-repeat bg-center bg-cover px-3 py-8 "
    >
      
      <section className="mx-auto max-w-screen-2xl pb-12 px-4 items-center lg:flex md:px-8">
        <div className="space-y-4 flex-1 sm:text-center lg:text-left">
          <h1 className="text-white font-bold text-4xl xl:text-5xl">
            Singularity Automates
            <span className="text-indigo-400">
              {" "}
              90% of Inventory Management!
            </span>
          </h1>
          <ul className="text-white list-disc font-medium">
            <li className="">
              Automatic demand forecasting based on analyzing historical data to
              prevent stockouts and over stocking
            </li>
            <li className="">
              Seamless Order Replacement when inventory levels hit predetermined
              low stock thresholds, with automated handling of order routing,
              allocation and tracking
            </li>
            <li className="">
              Automate inventory classification based on various parameters such
              as demand, value or shelf life to increase inventory efficiency
            </li>
            <li className="">
              Automate evaluation of suppliers based on criteria like delivery
              times, quality and compliance to make informed decisions about
              your supply chain{" "}
            </li>
          </ul>
          {/* <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                    </p> */}
          <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
            <a
              href="https://forms.gle/JA4SnWteMJ89QBoK8"
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
            >
              Contact Us
            </a>
            {/*<a
              href="javascript:void(0)"
              className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto"
            >
              Try it out
                  </a>*/}
          </div>
        </div>
        <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
          <img
            src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
            className="w-full mx-auto sm:w-10/12  lg:w-full mb-3"
          />
        </div>
      </section>

      <div className="container mx-auto md:space-y-6">
        <div
          className={`${
            activeTab === 1 ? "text-white" : "text-black"
          } text-black grid place-items-center`}
        >
          {" "}
          <h1 className="text-3xl md:text-4xl xl:text-6xl">Our Clients</h1>{" "}
        </div>
        {activeTab === 1 && (
          <div
            className={`grid place-items-center ${
              activeTab === 1 ? "text-white" : "text-black"
            } h-[25rem]`}
          >
            <p className="text-center w-[85%] text-lg md:text-2xl lg:text-3xl">
              Polymerhemp is a hemp bioplastic manufacturer which achieved a 70%
              leaner organization by leveraging our Ai solutions for optimizing
              logistics and personalizing customer support and outreach.
            </p>
            <img
              className="h-[8em] md:h-[12rem] aspect-auto"
              src={PolymerHempLogo}
              alt=""
            />
          </div>
        )}

        {activeTab === 2 && (
          <div className="grid place-items-center text-black h-[25rem]">
            <p className="text-center w-[85%] text-lg md:text-2xl lg:text-3xl">
              Paygold.io is a web3 banking as a service company disrupting the
              $50billion global remittance market
            </p>
            <img
              className="h-[8em] md:h-[12rem] aspect-auto"
              src={PaygoldLogo}
              alt=""
            />
          </div>
        )}

        {activeTab === 3 && (
          <div className="grid place-items-center text-black h-[25rem]">
            <p className="text-center w-[85%] text-lg md:text-2xl lg:text-3xl">
              Save Desis is a disaster relief fund aiming to empower Indian
              Americans and ensure a sustainable food supply in times of global
              crisis. It also offers them financial services they require such
              as remittances.
            </p>
            <img
              className="h-[8em] md:h-[12rem] aspect-auto"
              src={SaveDesisLogo}
              alt=""
            />
          </div>
        )}

        {activeTab === 4 && (
          <div className="grid place-items-center text-black h-[25rem]">
            <p className="text-center w-[85%] text-lg md:text-2xl lg:text-3xl">
              Medilifelog is comprehensive Ai powered solution that empowers
              users to make informed decisions and actively participate in their
              healthcare journey.
            </p>
            <img
              className="h-[8rem] md:h-[12rem] aspect-auto"
              src={MediaLifeLog}
              alt=""
            />
          </div>
        )}
        <div className="flex gap-6 flex-wrap items-end">
          {[`Manufacturing`, `Finance`, `Non-Profit`, `Healthcare`].map(
            (item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => {
                    setActiveTab(index + 1);
                  }}
                  className={`bg-black/70 text-white flex justify-center items-center gap-2 py-2 md:py-4 rounded-full font-medium font-poppins text-lg md:text-2xl grow basis-[180px] md:basis-[230px] ${
                    activeTab === index + 1 &&
                    "ring-4 ring-black/70 ring-offset-2 md:ring-offset-4"
                  } `}
                  type="button"
                >
                  {item}
                </button>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default OurClient;

{
  /**
<section className="py-28 bg-white/10 backdrop-blur-md  container">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8 space-y-6">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-white text-3xl font-semibold sm:text-4xl">
              Let's Level up your supply chain together
            </h3>
            <p className="mt-3 text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
                    </p> 
                    </div>
                    <div className="">
                      <ul className="flex flex-col gap-4 items-center justify-center sm:flex-row">
                        {stats.map((item, idx) => (
                          <li
                            key={idx}
                            className="w-full text-center bg-gray-800 px-12 py-4 rounded-lg sm:w-auto"
                          >
                            <h4 className="text-4xl text-white font-semibold">
                              {item.data}
                            </h4>
                            <p className="mt-3 text-gray-400 font-medium">{item.title}</p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </section>
*/
}
