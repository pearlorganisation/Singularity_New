import React, { useEffect } from "react";
import FeaturedArticles from "./FeaturedArticles";
import FeaturedCategories from "./FeaturedCategories";
import OurStory from "./OurStory";
import NewsLetter from "./NewsLetter";
import { blogAuthor } from "../../utils/blogAuthor";
import { useNavigate } from "react-router";
import CloudCards from "../../components/CloudCards";

const Procurement = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const navigate = useNavigate();
  // dummyData for FeaturedArticles section
  const dummyData = [
    {
      category: `Technology`,
      title: "Simplify your Ai data pipeline",
      image:
        "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      profile: {
        img: blogAuthor.image,
        name: blogAuthor.name,
        email: blogAuthor.email,
      },
      desc: "Gain a comprehensive view of your procurement data and transform your Ai strategy into a meticulously planned pipeline. From proof of concept to full-scale production, converting all your business data into a strategic asset demands a fresh approach to pipeline management throughout its lifecycle.Discover the keys to successful Ai deployment in procurement by learning the crucial steps to create solutions that unleash insights driving impactful business decisions. ",
      link: "/procurement/blogDetails2",
      date: "Jan 4 2024",
    },
    {
      category: `Technology`,
      title: "Generative AI in Labs: Singularity's Swift Model Development",
      image:
        "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      profile: {
        img: blogAuthor.image,
        name: blogAuthor.name,
        email: blogAuthor.email,
      },
      desc: "Singularity introduces a groundbreaking solution to expedite the development of generative Ai and large language models (LLM) within the realm of laboratory management software. The transformative potential of generative Ai is becoming a reality, promising to revolutionize the way we operate in the laboratory setting. However, the enormity of these models and the continuous influx of data present challenges. Accelerating the progress of such large language models demands the elimination of complexity and barriers to entry within an optimally designed environment specifically crafted for Ai. With Singularity's specialized expertise and tailored architecture, empower your laboratory management software to navigate the complexities seamlessly, unlocking the full potential of generative Ai for enhanced efficiency in laboratory workflows.",
      link: "/procurement/blogDetails3",
      date: "Jan 4 2024",
    },
  ];

  // our story data of procurement starts here
  const ourStory = {
    title: "Elevate Your Procurement Intelligence with Singularity",
    desc: [
      ` Singularity, a leading AI company specializing in procurement
  solutions, pioneers a strategic approach to data management. Our
  automated data pipelines seamlessly integrate with AI models,
  unlocking transformative insights and empowering informed
  decision-making in procurement.`,
      `Committed to ethical and responsible AI practices, Singularity
ensures compliance with industry regulations, prioritizing user
and client privacy by abstaining from collecting, storing, or
sharing personal or sensitive data without explicit consent.`,
    ],
  };
  // our story data of procurement ends here
  return (
    <section className="min-h-screen relative overflow-hidden py-28 px-4 bg-gray-900 md:px-8 grid place-items-center z-10">
      <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10 -z-10"></div>
      <section className="py-14">
        <div className="container mx-auto md:px-8 space-y-12 md:space-y-0">
          <div className="items-center gap-x-12 gap-y-12 lg:gap-y-0 sm:px-4 md:px-0 lg:flex min-h-[70vh] grid place-items-center">
            <div className="max-w-xl px-4 order-1 lg:order-[0]  space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
              <h3 className="text-white font-semibold">Ai in Procurement</h3>
              <p className="text-white text-3xl font-semibold sm:text-4xl">
                Optimize Ai Model Training: A Fast Track to Procurement
                Excellence
              </p>

              <p className="mt-3 text-white">
                As an Ai company specializing in procurement solutions, we
                tackle the time-to-market challenges in Ai with precision.
                Efficiently training and tuning models demands the integration
                of our advanced software, cutting-edge supercomputing
                technologies, and expert knowledge. Elevate your procurement
                strategies as our Ai services empower models to autonomously
                adapt and learn at scale.
              </p>
              <button
                type="button"
                onClick={() => {
                  navigate("/procurement/blogDetails1");
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

export default Procurement;
