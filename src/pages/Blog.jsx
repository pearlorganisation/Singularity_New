import SingularityBanner from "../assets/singularity/13.png";
import AboutUsSlider from "./AboutUsSlider";
import AboutERP from "../assets/singularity/AboutERP.png";

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import ServiceSlider from "./Services/ServiceSlider";
import MeetingSenators from "./Home/MeetingSenators";
import { FaPlay } from "react-icons/fa";
import IntroThumbnail from "../assets/singularity/intro_thumbnail.png";
import Logo from "../assets/singularity/Logo.png";
import { FaPause } from "react-icons/fa6";


const AboutUs = () => {

  const homeStyle = {
    backgroundImage: `url("${SingularityBanner}")`,
  };
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const [playButton, setPlayButton] = useState('')
  const videoRef = useRef()

  const playBtn = (arg) => {
    videoRef.current.play()
    setPlayButton(false)

  }
  const pauseBtn = (arg) => {
    videoRef.current.pause()
    setPlayButton(true)


  }




  return (
    <div
      style={homeStyle}
      className="grid  bg-no-repeat bg-center bg-cover place-items-center min-h-screen  pt-[6rem] lg:py-[8rem] px-2"
    >
      <div className="container flex flex-col justify-star items-center gap-3 lg:gap-6">

        <div className="grid place-items-center min-h-[85vh]">
          <section className="py-28 relative w-full grid gap-6 place-items-center">

            <Link
              to={"https://docs.google.com/forms/d/e/1FAIpQLScv4oEFZPHcMZ-I7-9op_3YCDbPL98UNYcwEUPCU3YQO95oWw/viewform?usp=sf_link"}
            >
              <img src={Logo} className=' w-[15rem] h-[15rem] sm:w-[20rem] sm:h-[20rem] md:w-[25rem] md:h-[25rem] ' alt="" />
            </Link>
            <div className="text-xs sm:text-3xl  md:text-4xl lg:text-5xl text-white">Senate Grade Ai Legal Services</div>
          </section>
        </div>
        <h1 className="text-center text-white text-[35px] md:text-[45px] lg:text-[55px] xl:text-[65px] xl:leading-[65px] mx-auto font-semibold">
          Blog
        </h1>
        <p className="text-center text-white font-medium text-[14px] md:text-[16px] lg:text-[18px] xl:w-[60%]">
          Stay ahead in the legal realm. Explore Singularity, your business Ai
          copilot, tailored for law firms, offering Senate-grade Ai, intelligent
          automation, and cutting-edge solutions to elevate your practice
        </p>



        <div className="py-[4rem]">
          <div className="flex items-end flex-wrap justify-center gap-3 2xl:gap-6 font-medium w-full pb-8 px-">
            <div className="flex justify-center items-start gap-8 flex-col text-white bg-slate-900 rounded-md p-3 hover:bg-slate-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="">
                  <div className="p-2  h-full">
                    <AboutUsSlider images={[AboutERP]} />
                  </div>
                </div>

                <div className="space-y-8 flex flex-col justify-center items-center">
                  <h3 className="text-center text-white text-[30px] xl:text-[35px] xl:leading-[35px] mx-auto font-semibold">
                    Why your law firm needs a Business Ai Copilot
                  </h3>
                  <p className="font-medium text-center text-base md:text-lg 2xl:text-2xl">
                    In the dynamic landscape of the legal sector, where
                    efficiency and precision are paramount, embracing
                    cutting-edge technologies becomes imperative. With its
                    Senate-grade AI, Singularity is tailored to meet the unique
                    needs of law firms, ensuring compliance with AI regulations
                    and prioritizing ethical and responsible use of artificial
                    intelligence.
                  </p>
                  <Link to="/integrations/EnterpriseResourcePlanning(ERP)Integration">
                    <button
                      className="bg-black/40 ring-2 ring-offset-2  ring-white  backdrop-blur lg:px-8 lg:py-3 md:px-6 md:py-2 px-4 py-2 rounded-full text-white text-base md:text-lg lg:text-xl font-medium active:scale-90 transition-all hover:font-bold hover:text-2xl"
                      type="button"
                    >
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="space-y-4 container">
        <div className="h-[90vh] grid place-items-center">
          <div className=" grid md:grid-cols-2 gap-3 w-full mx-auto">
            <div className="grid md:place-items-center order-2 md:order-none">
              <ul className="list-outside text-white space-y-4">
                <h1 className=" text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium ">Ai Powered Video Calling</h1>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" /> Ai-powered meetings</li>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" /> Get a summary of every meeting</li>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" /> Executive business summaries</li>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" /> Ai assisted meeting agendas</li>
              </ul>
            </div>
            <div className="h-[30rem] relative grid place-items-center">

              <video
                className="w-full  mx-auto  bg-gradient-to-r rounded from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-1"
                poster={IntroThumbnail}
                // controls 
                autoPlay
                loop
                src={"./video/SINGULARITY INTRO.mp4"}
              />

            </div>

          </div>
        </div>

        <div className="h-[90vh] grid place-items-center">
          <div className=" grid md:grid-cols-2 gap-3 w-full mx-auto">
            <div className="grid md:place-items-center order-2">
              <ul className="list-outside text-white space-y-4">
                <h1 className=" text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium ">Content Generation</h1>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" /> Platform-Specific Customization</li>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" /> Diverse Content Types</li>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" />Fine-Grained Control</li>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" /> Audience Targeting</li>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" /> Content Variations and A/B Testing</li>
              </ul>
            </div>
            <div className="h-[30rem] relative grid place-items-center">

              <video
                className="w-full  mx-auto  bg-gradient-to-r rounded from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-1"
                poster={IntroThumbnail}
                // controls 
                autoPlay
                loop
                src={"./video/SINGULARITY INTRO.mp4"}
              />

            </div>

          </div>
        </div>

        <div className="h-[90vh] grid place-items-center">
          <div className=" grid md:grid-cols-2 gap-3 w-full mx-auto">
            <div className="grid md:place-items-center order-2 md:order-none ">
              <ul className="list-outside text-white space-y-4">
                <h1 className=" text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium "> Ai Email Automation</h1>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" />AI-Powered Email Reply Crafting</li>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" /> Streamlined Inbox Management</li>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" />CRM Integration for Personalized Emails</li>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" /> Automated Email Campaign Response Handling</li>

              </ul>
            </div>
            <div className="h-[30rem] relative grid place-items-center">

              <video
                className="w-full  mx-auto  bg-gradient-to-r rounded from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-1"
                poster={IntroThumbnail}
                // controls 
                autoPlay
                loop
                src={"./video/SINGULARITY INTRO.mp4"}
              />

            </div>

          </div>
        </div>

        <div className="h-[90vh] grid place-items-center">
          <div className=" grid md:grid-cols-2 gap-3 w-full mx-auto">
            <div className="grid md:place-items-center order-2 ">
              <ul className="list-outside text-white space-y-4 order-2">
                <h1 className=" text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium ">  HR Automation</h1>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" />AI-Powered HR Task Handling
                </li>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" />Streamlined HR Management</li>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" />HRMS Integration for Efficient Employee Management</li>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" /> Automated Employee Interaction Handling</li>

              </ul>
            </div>
            <div className="h-[30rem] relative grid place-items-center">

              <video
                className="w-full  mx-auto  bg-gradient-to-r rounded from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-1"
                poster={IntroThumbnail}
                // controls 
                autoPlay
                loop
                src={"./video/SINGULARITY INTRO.mp4"}
              />

            </div>

          </div>
        </div>

        <div className="h-[90vh] grid place-items-center">
          <div className=" grid md:grid-cols-2 gap-3 w-full mx-auto">
            <div className="grid md:place-items-center order-2 md:order-none">
              <ul className="list-outside text-white space-y-4 ">
                <h1 className=" text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium ">  Ai Enabled Customer Support</h1>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" />AI-Powered Support Ticket Handling
                </li>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" />Streamlined Support Management</li>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" />CRM Integration for Efficient Customer Management</li>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" /> Automated Customer Interaction Handling</li>

              </ul>
            </div>
            <div className="h-[30rem] relative grid place-items-center">

              <video
                className="w-full  mx-auto  bg-gradient-to-r rounded from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-1"
                poster={IntroThumbnail}
                // controls 
                autoPlay
                loop
                src={"./video/SINGULARITY INTRO.mp4"}
              />

            </div>

          </div>
        </div>

        <div className="h-[90vh] grid place-items-center">
          <div className=" grid md:grid-cols-2 gap-3 w-full mx-auto">
            <div className="grid md:place-items-center order-2 ">
              <ul className="list-outside text-white space-y-4 order-2">
                <h1 className=" text-xl sm:text-3xl md:text-4xl lg:text-5xl font-medium ">   Ai Powered Sales Automation</h1>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" />AI-Powered Sales Task Handling
                </li>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" />Streamlined Sales Management</li>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" />CRM Integration for Efficient Customer Management</li>
                <li className="flex justify-start items-center gap-2 md:text-xl"> <img className="w-[1.5rem]" src="https://cdn-icons-png.flaticon.com/512/7641/7641203.png" alt="" /> Automated Customer Interaction Handling</li>

              </ul>
            </div>
            <div className="h-[30rem] relative grid place-items-center">

              <video
                className="w-full  mx-auto  bg-gradient-to-r rounded from-[#6EE7B7] via-[#3B82F6] to-[#9333EA] p-1"
                poster={IntroThumbnail}
                // controls 
                autoPlay
                loop
                src={"./video/SINGULARITY INTRO.mp4"}
              />

            </div>

          </div>
        </div>

        <MeetingSenators />



      </div>
    </div>
  );
};

export default AboutUs;
