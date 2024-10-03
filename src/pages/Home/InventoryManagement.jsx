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
import ReactCountryFlag from "react-country-flag";

const InventoryManagement = () => {
  const [activeTab, setActiveTab] = useState(1);
  const imagesSlider = [Polymer, PaygoldI, SaveDesis, MedLife];
  const homeStyle = {
    // backgroundImage: `url("${SingularityBanner}")`,
    backgroundImage: `url(${imagesSlider[activeTab - 1]})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
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
    <div className="grid place-items-center py-10" style={homeStyle}>
      <div className="container mx-auto space-y-8">
        <section className=" pb-12 px-4 items-center lg:flex md:px-8 space-y-8 space-x-0 lg:space-x-8 lg:space-y-0">
          <div className="space-y-4 flex-1 sm:text-center lg:text-left">
            <h1 className="text-white font-bold text-4xl xl:text-5xl">
              <span className="text-indigo-400"> Senate Grade Ai</span>
              <ReactCountryFlag countryCode="US" svg />
            </h1>
            <p className="text-white font-medium">
              Singularity is a senate grade AI system that complies with the
              recently passed AI regulations that ensure the ethical and
              responsible use of artificial intelligence.
            </p>
            <p className="text-white font-medium">
              It respects the privacy of its users and clients, and does not
              collect, store, or share any personal or sensitive data without
              consent.
            </p>
            <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/forms/d/e/1FAIpQLScv4oEFZPHcMZ-I7-9op_3YCDbPL98UNYcwEUPCU3YQO95oWw/viewform"
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
            {/*<ul className="text-white list-disc font-medium">
              <li className="">
                Respects the privacy of its users and clients, and does not
                collect, store, or share any personal or sensitive data without
                consent.
              </li>
              <li className="">
                respects the rights of its users and clients, and does not
                infringe on any intellectual property, contractual, or legal
                rights
              </li>
              <li className="">
                Automate inventory classification based on various parameters
                such as demand, value or shelf life to increase inventory
                efficiency
              </li>
              <li className="">
                Automate evaluation of suppliers based on criteria like delivery
                times, quality and compliance to make informed decisions about
                your supply chain{" "}
              </li>
  </ul>*/}
            {/* <p className="text-gray-300 max-w-xl leading-relaxed sm:mx-auto lg:ml-0">
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum
                    </p> */}
            {/*<div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
              <a
                href="javascript:void(0)"
                className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
              >
                Contact Us
              </a>
              <a
                href="javascript:void(0)"
                className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto"
              >
                Try it out
              </a>
                </div>*/}
          </div>
          <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
            <img
              src="https://wallpapercave.com/wp/wp4204395.jpg"
              className="w-full mx-auto sm:w-10/12  lg:w-full"
            />
          </div>
        </section>
        {/*<section className=" pb-12 px-4 items-center lg:flex md:px-8 space-y-8 space-x-0 lg:space-x-8 lg:space-y-0">
          <div className="flex-1 text-center mt-7 lg:mt-0 lg:ml-3">
            <img
              src="https://i.postimg.cc/HxHyt53c/undraw-heatmap-uyye.png"
              className="w-full mx-auto sm:w-10/12  lg:w-full"
            />
          </div>
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
                Automatic demand forecasting based on analyzing historical data
                to prevent stockouts and over stocking
              </li>
              <li className="">
                Seamless Order Replacement when inventory levels hit
                predetermined low stock thresholds, with automated handling of
                order routing, allocation and tracking
              </li>
              <li className="">
                Automate inventory classification based on various parameters
                such as demand, value or shelf life to increase inventory
                efficiency
              </li>
              <li className="">
                Automate evaluation of suppliers based on criteria like delivery
                times, quality and compliance to make informed decisions about
                your supply chain{" "}
              </li>
            </ul>
            
            <div className="pt-10 items-center justify-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex lg:justify-start">
              <a
                href="javascript:void(0)"
                className="px-7 py-3 w-full bg-white text-gray-800 text-center rounded-md shadow-md block sm:w-auto"
              >
                Contact Us
              </a>
              <a
                href="javascript:void(0)"
                className="px-7 py-3 w-full bg-gray-700 text-gray-200 text-center rounded-md block sm:w-auto"
              >
                Try it out
              </a>
            </div>
          </div>
        </section>*/}

        <section className=" py-4 bg-white/10 backdrop-blur-md  ">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8 space-y-6">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                Let’s Ai together
              </h3>
              {/* <p className="mt-3 text-gray-300">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi venenatis sollicitudin quam ut tincidunt.
                    </p> */}
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
                    <p className="mt-3 text-gray-400 font-medium">
                      {item.title}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default InventoryManagement;
