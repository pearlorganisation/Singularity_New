import React from "react";
import SupplyChain1 from "../../assets/singularity/SupplyChain1.png";
import SupplyChain2 from "../../assets/singularity/SupplyChain2.png";
import SupplyChain3 from "../../assets/singularity/SupplyChain3.png";
import OptimalInventory1 from "../../assets/singularity/OptimalInventory1.png";
import OptimalInventory2 from "../../assets/singularity/OptimalInventory2.png";
import Efficiency1 from "../../assets/singularity/Efficiency1.png";
import Efficiency2 from "../../assets/singularity/Efficiency2.png";
import Resilient1 from "../../assets/singularity/Resilient1.png";
import Resilient2 from "../../assets/singularity/Resilient2.png";

import ImprovedCustomer1 from "../../assets/singularity/ImprovedCustomer1.png";
import ImprovedCustomer2 from "../../assets/singularity/ImprovedCustomer2.png";

import Slider from "../Slider";
import Polymer from "../../assets/singularity/Polymer1.png";
import Design from "../Home/Design";
import { useEffect } from "react";

const SupplyChain = () => {
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
      <div style={homeStyle} className="min-h-screen grid place-items-center">
        <div className="absolute -z-0 w-full h-full top-0 left-0">
          <Design />
        </div>
        <div className="container pt-[6.5rem] p-[3rem] space-y-[4rem]">
          <div className="z-0 font-semibold text-white text-center container space-y-6">
            <p className="text-clampH font-semibold bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 bg-clip-text text-transparent lg:leading-[5.8rem] xl:leading-[6.8rem] pb-3">
              Supply Chain Management Integration
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
        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex ml-6 max-md:ml-0 max-md:w-fit max-md:mx-auto max-md:text-base max-md:font-semibold max-md:mb-2 flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-2 md:order-1">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              Optimal Inventory Management
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Optimize inventory levels
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Reduce excess inventory costs{" "}
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Improve cash flow.
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[OptimalInventory1, OptimalInventory2]} />
          </div>
        </div>
        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex max-md:w-fit max-md:mx-auto max-md:text-base max-md:font-semibold max-md:mb-2 flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              Improved Customer Satisfaction
            </h3>
            <div className="flex flex-col text-xl text-lrft">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  {" "}
                  Accurate demand forecasting and real-time visibility{" "}
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Enable companies to meet customer demands promptly
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Enhance overall customer satisfaction.
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[ImprovedCustomer1, ImprovedCustomer2]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex ml-6 max-md:ml-0 max-md:w-fit max-md:mx-auto max-md:text-base max-md:font-semibold max-md:mb-2 flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-2 md:order-1">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              Enhanced Efficiency
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  {" "}
                  Streamlines supply chain operations
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Minimizes inefficiencies,
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  {" "}
                  Lowers operational costs
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Improved overall efficiency and profitability.
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[Efficiency1, Efficiency2]} />
          </div>
        </div>

        <div className="md:pt-24 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-0">
          <div className="flex  max-md:w-fit max-md:mx-auto max-md:text-base max-md:font-semibold max-md:mb-2 flex-col justify-center gap-1 font-medium md:font-normal items-center md:items-start text-center md:text-left text-xl lg:text-3xl xl:text-4xl order-1 md:order-[0]">
            <h3 className="max-md:w-full max-md:text-start max-md:text-base">
              Resilient Supply Chain
            </h3>
            <div className="flex flex-col text-xl text-left">
              <ul className="text-base font-normal md:font-medium md:text-lg list-disc ml-5 text-center md:text-left">
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Adaptive planning{" "}
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Real-time insights
                </li>
                <li className="max-md:text-start max-md:text-sm max-md:mb-1">
                  Better equipped to handle disruptions and unexpected events.
                </li>
              </ul>{" "}
            </div>
          </div>
          <div className="h-[25rem]">
            <Slider images={[Resilient1, Resilient2]} />
          </div>
        </div>

        <div className="grid place-items-center gap-3">
          <h1 className="text-clampS2 font-medium text-center">
            Singularity AI can be seamlessly integrated into various popular
            supply chain management software platforms
          </h1>
          <div className="flex justify-around items-center flex-wrap">
            {/* <Marquee speed={200} className="flex gap-[10rem]"> */}
            <img
              className="md:w-[14rem] md:h-[8rem] w-[10rem] h-[6rem]"
              src={SupplyChain1}
              alt=""
            />
            <img
              className="md:w-[14rem] md:h-[8rem] w-[10rem] h-[6rem]"
              src={SupplyChain3}
              alt=""
            />
            <img
              className="md:w-[14rem] md:h-[8rem] w-[10rem] h-[6rem]"
              src={SupplyChain2}
              alt=""
            />
            {/* <img className="w-[14rem] h-[8rem]" src={SupplyChain4} alt="" /> */}
            {/* </Marquee> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChain;
