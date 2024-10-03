import React, { useEffect } from "react";

import { blogAuthor } from "../../utils/blogAuthor";
import FeaturedCategories from "../Procurement/FeaturedCategories";
import FeaturedArticles from "../Procurement/FeaturedArticles";
import OurStory from "../Procurement/OurStory";
import NewsLetter from "../Procurement/NewsLetter";
import CloudCards from "../../components/CloudCards";
import { useNavigate } from "react-router";

const Sciences_Ai = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  // dummy data for FeaturedArticles section starts
  const dummyData = [
    {
      category: `Technology`,
      title: "Generative AI in Labs: Singularity's Swift Model Development ",
      image:
        "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      profile: {
        img: blogAuthor.image,
        name: blogAuthor.name,
        email: blogAuthor.email,
      },
      desc: "Singularity introduces a groundbreaking solution to expedite the development of generative Ai and large language models (LLM) within the realm of laboratory management software. The transformative potential of generative Ai is becoming a reality, promising to revolutionize the way we operate in the laboratory setting. However, the enormity of these models and the continuous influx of data present challenges. Accelerating the progress of such large language models demands the elimination of complexity and barriers to entry within an optimally designed environment specifically crafted for Ai. With Singularity's specialized expertise and tailored architecture, empower your laboratory management software to navigate the complexities seamlessly, unlocking the full potential of generative Ai for enhanced efficiency in laboratory workflows.",
      link: "/sciences_ai/blogDetails1",
      date: "Jan 4 2022",
    },
    {
      category: `Technology`,
      title:
        "Streamline Your Laboratory's Ai Data Pipeline for Enhanced Efficiency",
      image:
        "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      profile: {
        img: blogAuthor.image,
        name: blogAuthor.name,
        email: blogAuthor.email,
      },
      desc: "Efficiently managing the vast array of data within a science laboratory is paramount for transforming your Ai strategy into a well-orchestrated pipeline of projects. From the initial proof of concept to full-scale production, the key lies in obtaining a comprehensive view of your laboratory's data and strategically converting it into a valuable asset through Ai. Embracing a novel perspective on pipeline lifecycle management is essential to seamlessly navigate the journey from data inception to strategic Ai implementation within the laboratory environment.",

      link: "/sciences_ai/blogDetails3",
      date: "Jan 4 2022",
    },
  ];
  // dummy data for FeaturedArticles section ends

  // our story data of Science.ai starts here
  const ourStory = {
    title: "Your Next-Generation Ai Companion for Science Laboratories.",
    desc: [
      `Singularity stands at the forefront of Ai innovation, specifically designed to elevate the capabilities of science laboratories. Crafted by experts and informed by the latest advancements in Ai technology, Singularity is your comprehensive solution for optimizing laboratory processes and data management.`,
      `With a focus on accelerating the training and tuning of Ai models, Singularity empowers laboratory management software to seamlessly adapt and learn autonomously at scale. It  simplifies the data pipeline within science laboratories, offering a streamlined approach to managing vast datasets and ensuring efficiency from proof of concept to full-scale production.`,
      ,
    ],
  };
  // our story data of Science.ai ends here
  return (
    <section className="min-h-screen relative overflow-hidden py-28 px-4 bg-gray-900 md:px-8 grid place-items-center z-10">
      <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10 -z-10"></div>
      <section className="py-14">
        <div className="container mx-auto md:px-8 space-y-12 md:space-y-0">
          <div className="items-center gap-x-12 gap-y-12 lg:gap-y-0 sm:px-4 md:px-0 lg:flex min-h-[70vh] grid place-items-center">
            <div className="max-w-xl px-4 order-1 lg:order-[0]  space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <h3 className="text-white font-semibold">Ai in Sciences.ai</h3>
              <p className="text-white text-3xl font-semibold sm:text-4xl">
                Elevate Laboratory Management Software with Accelerated Ai Model
                Training
              </p>

              <p className="mt-3 text-white">
                Singularity presents a cutting-edge solution for the rapid
                training and tuning of Ai models within the domain of laboratory
                management software. Empower your laboratory management software
                with our Ai models, allowing it to autonomously learn and adapt
                at scale.
              </p>
              <button
                type="button"
                onClick={() => {
                  navigate("/sciences_ai/blogDetails1");
                }}
                className="inline-flex gap-x-1 hover:ring-8 ring-black/40 active:scale-95 transition-all items-center border text-white px-8 py-2  font-medium"
              >
                Read more
              </button>
            </div>
            <div className="flex-1 lg:block">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="md:max-w-lg sm:rounded-lg"
                alt=""
              />
            </div>
          </div>
          {/* <FeaturedCategories /> */}
          <FeaturedArticles dummyData={dummyData} />
          <CloudCards />
          <OurStory ourStory={ourStory} />
        </div>
      </section>
    </section>
  );
};

export default Sciences_Ai;
