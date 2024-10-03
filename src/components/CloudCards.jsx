import React from "react";
import { Link } from "react-router-dom";

const CloudCards = () => {
  return (
    <div className="grid place-items-center min-h-screen">
      <div className="space-y-6">
        <div>
          <p className="text-2xl sm:text-3xl md:text-5xl font-medium text-white">
            Explore the ways Singularity can help you open up opportunities.
          </p>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-5">
          <div className="min-h-[15rem] md:min-h-[20rem] flex flex-col justify-between items-start p-6 rounded-2xl text-white bg-gradient-to-bl from-[#6756E2] via-[#32DAC8] to-[#E4CC1C] ">
            <div>
              <h1 className="text-2xl md:text-3xl font-medium">
                Human Resource Management
              </h1>
              <p>
                {" "}
                Use Ai driven talent acquisition to make better hiring
                decisions, as well as boost productivity of existing employees .
              </p>
            </div>
            <Link
              to="/services/HRAutomation"
              className="rounded-md bg-gray-100 px-6 py-2 font-medium text-black active:scale-95 transition-all"
            >
              Explore HRMS solutions
            </Link>
          </div>
          <div className="min-h-[15rem] md:min-h-[20rem] flex flex-col justify-between items-start p-6 rounded-2xl text-white bg-gradient-to-bl from-[#46C5D0] via-[#7591E2] to-[#B947FC]">
            <div>
              <h1 className="text-2xl md:text-3xl font-medium"> Ai Powered Meetings </h1>
              <p>
                {" "}
                Have Ai automatically schedule meetings, transcribe meeting
                notes, create to dos and assign them to the relevant departments
                .
              </p>
            </div>
            <Link
              to="/services/AiPoweredVideoCalling"
              className="rounded-md bg-gray-100 px-6 py-2 font-medium text-black active:scale-95 transition-all"
            >
              Explore Meeting solutions
            </Link>
          </div>
          <div className="min-h-[15rem] md:min-h-[20rem] flex flex-col justify-between items-start p-6 rounded-2xl text-white bg-gradient-to-bl from-[#F3B22B] via-[#BB3FF9] to-[#172356]">
            <div>
              <h1 className="text-2xl md:text-3xl font-medium">Content Generation </h1>
              <p>
                {" "}
                Use Ai to generate memos, purchase orders, summaries, internal
                documents and many more, in compliance with company guidelines .
              </p>
            </div>
            <Link
              to="/services/ContentGeneration"
              className="rounded-md bg-gray-100 px-6 py-2 font-medium text-black active:scale-95 transition-all"
            >
              Explore Content Generation Solutions
            </Link>
          </div>
          <div className="min-h-[15rem] md:min-h-[20rem] flex flex-col justify-between items-start p-6 rounded-2xl text-white bg-gradient-to-bl from-[#8231DE] via-[#E73478] to-[#FCB90E]">
            <div>
              <h1 className="text-2xl md:text-3xl font-medium"> Emails </h1>
              <p>
                {" "}
                Automate replying to emails with personalized responses crafted
                by Ai, can be enriched with data from connected CRMs .
              </p>
            </div>
            <Link
              to="/services/AiEmailAutomation"
              className="rounded-md bg-gray-100 px-6 py-2 font-medium text-black active:scale-95 transition-all"
            >
              Explore Email solutions
            </Link>
          </div>

          <div className="min-h-[15rem] md:min-h-[20rem] flex flex-col justify-between items-start p-6 rounded-2xl text-white bg-gradient-to-bl from-[#6756E2] via-[#32DAC8] to-[#E4CC1C] ">
            <div>
              <h1 className="text-2xl md:text-3xl font-medium">Customer Support</h1>
              <p>
                Automate managing support tickets using Ai, manage customer
                information at scale and strengthen support operations .
              </p>
            </div>
            <Link
              to="/services/AiEnabledCustomerSupport"
              className="rounded-md bg-gray-100 px-6 py-2 font-medium text-black active:scale-95 transition-all"
            >
              Explore Customer Support solutions
            </Link>
          </div>

          <div className="min-h-[15rem] md:min-h-[20rem] flex flex-col justify-between items-start p-6 rounded-2xl text-white bg-gradient-to-bl from-[#46C5D0] via-[#7591E2] to-[#B947FC]">
            <div>
              <h1 className="text-2xl md:text-3xl font-medium"> Sales </h1>
              <p>
                Optimize your sales processes with Singularity's automated
                interaction handling promptly addressing customer inquiries and
                providing customized responses to boost customer satisfaction
                and sales conversion rates.
              </p>
            </div>
            <Link
              to="/services/Ai-PoweredSalesAutomation"
              className="rounded-md bg-gray-100 px-6 py-2 font-medium text-black active:scale-95 transition-all"
            >
              Explore Sales solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CloudCards;
