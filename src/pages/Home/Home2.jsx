import React from "react";
import Bot from "../../assets/singularity/Bot.png";
import Image1 from "../../assets/singularity/Group1.png";
import Image2 from '../../assets/singularity/Frame.png'
const Home2 = () => {
  return (
    <div className="w-full grid place-items-center">
      <div className="bg-transparent flex flex-wrap items-end gap-6 container p-4">
        <div className="grow min-h-[340px]  basis-[400px] bg-black/30 text-white px-3 py-4 rounded-2xl space-y-3 lg:translate-y-[-7rem] flex justify-between flex-col shadow-[rgba(50,_50,_93,_0.25)_0px_6px_12px_-2px,_rgba(0,_0,_0,_0.3)_0px_3px_7px_-3px]">
          <div className="flex justify-between items-center">
            {" "}
            <span className="text-lg lg:text-xl font-semibold">
            Seamless Integration 
            </span>{" "}
            <img className="w-[8rem] h-[6rem]" src={Bot} alt="" />{" "}
          </div>
          <p className="font-medium text-base md:text-lg lg:text-xl grid">
          With Singularity, you can seamlessly integrate AI-powered automation into your existing workflow
          </p>
          <button className="bg-[#F6F6F6] px-3 py-2 w-fit rounded-md font-medium text-black shadow-xl active:scale-90 transition-all">
            Learn More <i class="fa-regular fa-arrow-right pl-1"></i>
          </button>
        </div>

        <div className="grow  min-h-[340px]  basis-[400px] bg-black/30 text-white px-3 py-4 rounded-2xl space-y-3 lg:translate-y-[-7rem] flex justify-between flex-col shadow-[rgba(50,_50,_93,_0.25)_0px_6px_12px_-2px,_rgba(0,_0,_0,_0.3)_0px_3px_7px_-3px]">
          <div className="flex justify-between items-center">
            {" "}
            <span className="text-lg lg:text-xl font-semibold">
            Cost Savings
            </span>{" "}
            <img className="w-[8rem] h-[6rem]" src={Image1} alt="" />{" "}
          </div>
          <p className="font-medium text-base md:text-lg lg:text-xl grid">
          Streamline your operations to become 70% more efficient
          </p>
          <button className="bg-[#F6F6F6] px-3 w-fit py-2 rounded-md font-medium text-black shadow-xl active:scale-90 transition-all">
            Learn More <i class="fa-regular fa-arrow-right pl-1"></i>
          </button>
        </div>

        <div className="grow  min-h-[340px]  basis-[400px] bg-black/30 text-white px-3 py-4 rounded-2xl space-y-3 lg:translate-y-[-7rem] flex justify-between flex-col shadow-[rgba(50,_50,_93,_0.25)_0px_6px_12px_-2px,_rgba(0,_0,_0,_0.3)_0px_3px_7px_-3px]">
          <div className="flex justify-between items-center">
            {" "}
            <span className="text-lg lg:text-xl font-semibold">
            Personalized Assistance
            </span>{" "}
            <img className="w-[8rem] h-[6rem]" src={Image2} alt="" />{" "}
          </div>
          <p className="font-medium text-base md:text-lg lg:text-xl grid">
          Singularity provides personalized Ai assistance taking into account your unique business needs
          </p>
          <button className="bg-[#F6F6F6] w-fit px-3 py-2 rounded-md font-medium text-black shadow-xl active:scale-90 transition-all">
            Learn More <i class="fa-regular fa-arrow-right pl-1"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home2;
