import React from "react";
import Ellipse11 from "../assets/singularity/Ellipse11.png";
import Ellipse12 from "../assets/singularity/Ellipse12.png";
import Ellipse13 from "../assets/singularity/Ellipse13.png";
import Ellipse14 from "../assets/singularity/Ellipse14.png";
import Ellipse15 from "../assets/singularity/Ellipse15.png";
import Ellipse5 from "../assets/singularity/Ellipse5.png";

const Clients = () => {
  return (
    <>
      <div className="min-h-screen grid place-items-center font-poppins py-10 ">
        <div className="flex w-full mx-auto flex-row px-3 py-2">
          <div className="space-y-6">
            <div className="w-full text-left">
              <img src={Ellipse14} className="" />
            </div>
            <div className="w-full p-2 text-center">
              <img src={Ellipse15} className="" />
            </div>
            <div className="w-full p-2 text-left">
              <img src={Ellipse12} className="" />
            </div>
          </div>
          <div className=" w-full md:px-5 sm:px-3 px-2 text-center">
            <h1 className="lg:text-5xl md:text-[20px] text-[18px] bg-gradient-to-b font-semibold from-[#0C3C8E] to-[#996CE6] inline-block text-transparent bg-clip-text">
              What Clients are Saying
            </h1>
            <p className=" lg:text-xl md:text-lg text-base font-medium mb-5 md:mb-8 text-[#5B6569]">
              What is Lorem Ipsum?
            </p>
            <p className=" lg:text-2xl md:text-xl sm:text-lg text-base text-center lg:px-10 mb-10 text-[#323232]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <div className="flex flex-col items-center">
              <img src={Ellipse5} />
              <p className="lg:text-[20px] text-[14px] font-semibold text-[#323232]">
                Harry Callum
              </p>
              <p className="text-[12px] md:text-[14px] py-1 lg:text-[16px] font-normal text-[#686868]">
                Designer
              </p>
              <div className="mx-auto flex flex-row justify-between py-2">
                <button className="h-[10px] mx-[2px] w-[10px] rounded-[50%] border-1 border-[rgba(0,0,0,0.8)] bg-gray-200 hover:bg-gradient-to-t from-[#996CE6] to-[#185A78] "></button>
                <button className="h-[10px] mx-[2px] w-[10px] rounded-[50%] border-1 border-[rgba(0,0,0,0.8)] bg-gray-200 hover:bg-gradient-to-t from-[#996CE6] to-[#185A78]  "></button>
                <button className="h-[10px] mx-[2px] w-[10px] rounded-[50%] border-1 border-[rgba(0,0,0,0.8)] bg-gray-200 hover:bg-gradient-to-t from-[#996CE6] to-[#185A78]  "></button>
                <button className="h-[10px] mx-[2px] w-[10px] rounded-[50%] border-1 border-[rgba(0,0,0,0.8)] bg-gray-200 hover:bg-gradient-to-t from-[#996CE6] to-[#185A78]  "></button>
              </div>
            </div>
          </div>
          <div className="space-y-10">
            <div className="w-full p-4">
              <img src={Ellipse13} />
            </div>
            <div className="w-full p-4">
              <img src={Ellipse11} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clients;
