import HomeImage from "../../assets/singularity/HomePage.png";
import Clients from "../Clients";
import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./AboutUs";
import Home5 from "./Home5";
// import SingularityBanner from '../../assets/singularity/SingularityBannerBg.jpg'
// import SingularityBanner from "../../assets/singularity/1.png";
import Polymer from "../../assets/singularity/Polymer1.png";
import PaygoldLogo from "../../assets/singularity/PaygoldLogo.jpg";
import SaveDesis from "../../assets/singularity/SaveDesisLogo.png";
import MediaLife from "../../assets/singularity/MediaLifeLog.png";
import PolymerHemp from "../../assets/singularity/PolymerHempLogo.png";
import SENDINGCASH from "../../assets/singularity/SENDINGCASH.png";
import REMIFIRM from "../../assets/singularity/REMIFIRM.png";

import Design from "./Design";
import OurClient from "./OurClient";
import InventoryManagement from "./InventoryManagement";
import MeetingSenators from "./MeetingSenators";
import ReactCountryFlag from "react-country-flag";

const Home = () => {
  const homeStyle = {
    // backgroundImage: `url("${SingularityBanner}")`,
    backgroundImage: `url(${Polymer})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: "100vh",
  };
  return (
    <div>
      <div style={homeStyle} className="h-screen  grid place-items-center">
        <div className="absolute -z-0 w-full h-full top-0 left-0">
          <Design />
        </div>
        <div className="z-0 font-semibold text-white text-center container space-y-6">
          <p className="xl:text-[55px] lg:text-[45px] md:text-[35px] text-[25px]">
            {" "}
            Your Business{" "}
            <span className="bg-gradient-to-r from-blue-100 via-blue-300 to-blue-500 bg-clip-text text-transparent">
              Ai Copilot
            </span>
          </p>
        </div>
      </div>
      <div className="w-full bg-gradient-to-r from-[#0C3C8E] to-[#996CE6] bg-white grid place-items-center p-8 xl:py-12">
        {" "}
        <button className=" text-white rounded-md active:scale-95 transition-all px-8 text-clampS2 font-semibold py-2">
          <ReactCountryFlag countryCode="US" svg /> Effortless Document
          Drafting with Intelligent Automation{" "}
          <ReactCountryFlag countryCode="US" svg />
        </button>{" "}
      </div>
      <Home3 />
      {/*<div className="w-full bg-gradient-to-r from-[#0C3C8E] to-[#996CE6] bg-white grid place-items-center py-8 xl:py-12">
        {" "}
        <button className=" text-white rounded-md active:scale-95 transition-all px-8 text-clampS2 font-semibold py-2">
          Cut up to 30% in customer service costs
        </button>{" "}
      </div>

      {/*<OurClient />*/}

      <div className="w-full bg-gradient-to-r from-[#0C3C8E] to-[#996CE6] bg-white grid place-items-center py-8 xl:py-12">
        {" "}
        <button className=" text-white rounded-md active:scale-95 transition-all px-8 text-clampS2 font-semibold py-2">
          <ReactCountryFlag countryCode="US" svg /> Automate note taking with
          our meeting analyzer <ReactCountryFlag countryCode="US" svg />
        </button>{" "}
      </div>

      <InventoryManagement />
      <div className="w-full bg-gradient-to-r from-[#0C3C8E] to-[#996CE6] bg-white grid place-items-center py-8 xl:py-12">
        {" "}
        <button className=" text-white rounded-md active:scale-95 transition-all px-8 text-clampS2 font-semibold py-2">
          <ReactCountryFlag countryCode="US" svg /> Elevate Your Practice with
          Ai Powered Contract Review & Analysis{" "}
          <ReactCountryFlag countryCode="US" svg />
        </button>{" "}
      </div>

      <Home5 />

      {/* <MeetingSenators /> */}

      <div className="w-full bg-gradient-to-r from-[#0C3C8E] to-[#996CE6] bg-white grid place-items-center py-8 xl:py-12">
        {" "}
        <div className="">
          <div className="max-w-screen-xl mx-auto px-4 md:px-8">
            <h3 className="font-semibold text-sm text-white pb-4 text-center">
              COMPANIES WE HAVE INTEGRATED WITH
            </h3>
            <div className="">
              <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                {/* LOGO 1 */}
                {/* <li>
                  <img
                    className="w-[8rem] h-[8rem] rounded object-cover object-center"
                    src={PaygoldLogo}
                    alt=""
                  />
                </li> */}

                {/* LOGO 4 */}
                <li>
                  <img
                    className="w-[8rem] h-[8rem] rounded object-contain object-center"
                    src={REMIFIRM}
                    alt=""
                  />
                </li>

                {/* LOGO 2 */}

                <li>
                  <img
                    className="w-[9rem] h-[8rem] rounded  "
                    src={SaveDesis}
                    alt=""
                  />
                </li>

                {/* LOGO 3 */}
                <li>
                  <img
                    className="w-[8rem] h-[8rem] rounded object-contain object-center "
                    src={MediaLife}
                    alt=""
                  />
                </li>

                {/* LOGO 4 */}
                <li>
                  <img
                    className="w-[8rem] h-[8rem] rounded object-contain object-center"
                    src={PolymerHemp}
                    alt=""
                  />
                </li>

                {/* LOGO 4 */}
                <li>
                  <img
                    className="w-[8rem] h-[8rem] rounded object-contain object-center"
                    src={SENDINGCASH}
                    alt=""
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
