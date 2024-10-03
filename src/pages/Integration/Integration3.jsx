import React, { useState } from "react";
import IntegrationI3 from "../../assets/singularity/IntegrationI3.png";

import IntegrationII1 from "../../assets/singularity/IntegrationII1.png";
import IntegrationII2 from "../../assets/singularity/IntegrationII2.png";
import IntegrationII3 from "../../assets/singularity/IntegrationII3.png";
import IntegrationII4 from "../../assets/singularity/IntegrationII4.png";
import IntegrationII5 from "../../assets/singularity/IntegrationII5.png";
import IntegrationII6 from "../../assets/singularity/IntegrationII6.png";
import ERP from "../../assets/singularity/ERP.png";
import Supply from "../../assets/singularity/Supply.png";
import Telemedicine from "../../assets/singularity/Telemedicine.png";
import HRMS from "../../assets/singularity/HRMS.png";
import ATS from "../../assets/singularity/ATS.png";
import LMS from "../../assets/singularity/LMS.png";
import Reasearch from "../../assets/singularity/Reasearch.png";

const Integration3 = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="pb-8 space-y-12 px-2">
      {/* <div className="grid grid-cols-2 w-[90%]">
        <div>
          <h1 className="font-semibold text-[46px] bg-gradient-to-r from-[#0C3C8E] to-[#996CE6] inline-block bg-clip-text text-transparent leading-[55px]">
            Enhance Collaboration and User Experience
          </h1>
          <p className="font-medium text-[18px]">
            Integrate Singularity with communication and collaboration tools to
            enhance collaboration, automate documentation, and provide
            personalized support. Streamline workflows, improve user
            satisfaction, and drive innovation in industries like healthcare,
            HR, academia, and more.
          </p>
        </div>
        <div className="flex justify-end items-center">
          {" "}
          <img src={IntegrationI3} alt="" />{" "}
        </div>
      </div> */}

      <div className="grid lg:grid-cols-2 gap-12 w-full mx-auto lg:pt-24 lg:py-24">
        <div className="grid place-items-start lg:gap-0 gap-6">
          {[
            `Enterprise Resource Planning (ERP) Integration`,
            `Supply Chain Management Integration`,
            `Telemedicine Platform Integration`,
            `Human Resources Management System (HRMS) Integration`,
            `Recruitment and Applicant Tracking System (ATS) Integration`,
            `Learning Management System 
          (LMS) Integration`,
            `Research Collaboration Platform Integration`,
          ].map((item, index) => {
            return (
              <button
                onClick={() => handleTabClick(index)}
                type="button"
                className={`${
                  activeTab === index ? "bg-gradient-to-r text-white" : ""
                } bg-slate-300/50 w-full px-6 py-3 lg:px-10 font-medium   from-[#0C3C8E] to-[#996CE6] transition-all lg:rounded-[5px] lg:py-5 truncate`}
              >
                {item}
              </button>
            );
          })}
        </div>
        {activeTab === 0 && (
          <div className="grid gap-6">
            <div className="grid grid-cols-3 gap-y-12 place-items-start">
              <img src={IntegrationII1} alt="" />
              <img src={IntegrationII2} alt="" />
              <img src={IntegrationII3} alt="" />
              <img src={IntegrationII4} alt="" />
              <img src={IntegrationII5} alt="" />
              <img src={IntegrationII6} alt="" />
            </div>
            <p className="text-sm min-h-[5rem]">
              Integrate Singularity with popular ERP systems such as SAP or
              Oracle to streamline manufacturing processes, automate data entry,
              and gain real-time insights. Optimize resource allocation, enhance
              inventory management, and drive operational efficiency.
            </p>
            <div className="">
              <img className="w-full" src={ERP} alt="" />
            </div>
          </div>
        )}

        {activeTab === 1 && (
          <div className="grid gap-6">
            <div className="grid grid-cols-3 gap-y-12 place-items-start">
              <img src={IntegrationII1} alt="" />
              <img src={IntegrationII2} alt="" />
              <img src={IntegrationII3} alt="" />
              <img src={IntegrationII4} alt="" />
              <img src={IntegrationII5} alt="" />
              <img src={IntegrationII6} alt="" />
            </div>
            <p className="text-sm min-h-[5rem]">
              Combine Singularity with supply chain management platforms like
              JDA or Blue Yonder to optimize logistics, automate demand
              forecasting, and improve supplier collaboration. Leverage Ai to
              streamline supply chain operations and ensure efficient, on-time
              deliveries.
            </p>
            <div className="">
              <img className="w-full" src={Supply} alt="" />
            </div>
          </div>
        )}

        {activeTab === 2 && (
          <div className="grid gap-6">
            <div className="grid grid-cols-3 gap-y-12 place-items-start">
              <img src={IntegrationII1} alt="" />
              <img src={IntegrationII2} alt="" />
              <img src={IntegrationII3} alt="" />
              <img src={IntegrationII4} alt="" />
              <img src={IntegrationII5} alt="" />
              <img src={IntegrationII6} alt="" />
            </div>
            <p className="text-sm min-h-[5rem]">
               Combine Singularity with telemedicine platforms to enhance
              virtual patient consultations. Leverage Ai-powered assistance
              during video calls, automate documentation, and provide
              personalized recommendations to healthcare professionals.
            </p>
            <div className="">
              <img className="w-full" src={Telemedicine} alt="" />
            </div>
          </div>
        )}

        {activeTab === 3 && (
          <div className="grid gap-6">
            <div className="grid grid-cols-3 gap-y-12 place-items-start">
              <img src={IntegrationII1} alt="" />
              <img src={IntegrationII2} alt="" />
              <img src={IntegrationII3} alt="" />
              <img src={IntegrationII4} alt="" />
              <img src={IntegrationII5} alt="" />
              <img src={IntegrationII6} alt="" />
            </div>
            <p className="text-sm min-h-[5rem]">
              Integrate Singularity with popular HRMS platforms like Workday or
              BambooHR to streamline HR processes, automate employee onboarding,
              and enhance employee engagement. Leverage Ai to provide instant
              access to HR information, policies, and support through Ai-driven
              chatbots and virtual assistants.
            </p>
            <div className="">
              <img className="w-full" src={HRMS} alt="" />
            </div>
          </div>
        )}

        {activeTab === 4 && (
          <div className="grid gap-6">
            <div className="grid grid-cols-3 gap-y-12 place-items-start">
              <img src={IntegrationII1} alt="" />
              <img src={IntegrationII2} alt="" />
              <img src={IntegrationII3} alt="" />
              <img src={IntegrationII4} alt="" />
              <img src={IntegrationII5} alt="" />
              <img src={IntegrationII6} alt="" />
            </div>
            <p className="text-sm min-h-[5rem]">
              Combine Singularity with ATS platforms such as Greenhouse or Lever
              to automate candidate screening, assist in resume parsing, and
              provide Ai-powered recommendations for hiring decisions.
              Streamline the recruitment process and improve hiring efficiency.
            </p>
            <div className="">
              <img className="w-full" src={ATS} alt="" />
            </div>
          </div>
        )}

        {activeTab === 5 && (
          <div className="grid gap-6">
            <div className="grid grid-cols-3 gap-y-12 place-items-start">
              <img src={IntegrationII1} alt="" />
              <img src={IntegrationII2} alt="" />
              <img src={IntegrationII3} alt="" />
              <img src={IntegrationII4} alt="" />
              <img src={IntegrationII5} alt="" />
              <img src={IntegrationII6} alt="" />
            </div>
            <p className="text-sm">
              Integrate Singularity with popular LMS platforms like Canvas or
              Moodle to enhance online learning experiences. Provide Ai-powered
              support to students, automate grading, and deliver personalized
              educational content tailored to individual needs.
            </p>
            <div className="">
              <img className="w-full" src={LMS} alt="" />
            </div>
          </div>
        )}
        {activeTab === 6 && (
          <div className="grid gap-6">
            <div className="grid grid-cols-3 gap-y-12 place-items-start">
              <img src={IntegrationII1} alt="" />
              <img src={IntegrationII2} alt="" />
              <img src={IntegrationII3} alt="" />
              <img src={IntegrationII4} alt="" />
              <img src={IntegrationII5} alt="" />
              <img src={IntegrationII6} alt="" />
            </div>
            <p className="text-sm">
              Combine Singularity with research collaboration platforms like
              ResearchGate or Mendeley to streamline research workflows,
              automate literature review, and facilitate knowledge sharing.
              Leverage Ai capabilities to analyze research data, identify
              trends, and generate insights.
            </p>
            <div className="">
              <img className="w-full" src={Reasearch} alt="" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Integration3;
