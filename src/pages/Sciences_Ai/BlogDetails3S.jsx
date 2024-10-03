import React, { useEffect } from "react";
import { useLocation } from "react-router";
import NotFound from "../../assets/singularity/NotFound.gif";
import { Link } from "react-router-dom";
import { blogAuthor } from "../../utils/blogAuthor";

const BlogDetails3S = () => {
  const { state } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div className="min-h-screen relative overflow-hidden py-28 px-4 bg-gray-900 text-white md:px-8 grid place-items-center z-10">
      {state ? (
        <>
          {" "}
          <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10 -z-10"></div>
          <article className=" mt-4 min-h-[20rem] rounded-md duration-300 hover:shadow-sm container mx-auto">
            <div className="grid  gap-3 w-[70%] mx-auto">
              <img
                src={state?.image}
                loading="lazy"
                alt={state.title}
                className="w-full rounded-t-md"
              />
              <div className="space-y-2 flex flex-col justify-center gap-1 items-start p-1">
                <div className="px-8 py-2 rounded-2xl text-slate-950 bg-white w-fit font-medium">
                  #{state?.category}
                </div>
                <p className="text-4xl text-white">
                  {state?.title ||
                    "10 Tips for Crafting the Perfect UX Portfolio"}
                </p>
                <div className="space-y-3 items-center gap-x-6 md:flex md:space-y-0">
                  <div class="flex items-center space-x-3">
                    <img
                      class="w-12 h-12 rounded-full object-cover"
                      src={state?.profile?.img}
                      alt=""
                    />{" "}
                    <div>
                      <span class="text-white text-sm">
                        {state?.profile?.name}
                      </span>
                      <span class="block text-white text-xs">
                        {state?.profile?.email}
                      </span>
                    </div>
                  </div>
                </div>
                <p className=" text-2xl mt-1">{state?.desc}</p>
              </div>
              <div>
                <div>
                  <h1 className="text-3xl font-medium md:w-[75%]">
                    Building an Efficient AI Data Pipeline for Science
                    Laboratories
                  </h1>
                  <span>By Roo Dov</span>
                </div>
                <p>
                  In the dynamic world of scientific research, an efficient data
                  pipeline is essential for unlocking insights, accelerating
                  discoveries, and optimizing laboratory processes. In this
                  technical article, we delve into the steps of building an
                  effective AI data pipeline tailored to the unique needs of
                  science laboratories. And yes, we’ll highlight Singularity,
                  our powerful AI software, which plays a pivotal role in this
                  transformation.
                </p>
                <div className="space-y-2 py-3">
                  <h1 className="text-2xl font-medium">
                    1. Define Your Strategy
                  </h1>
                  <p>
                    Before diving into implementation, let’s outline a clear
                    strategy:
                  </p>
                  <ul className="list-disc pl-14">
                    <li>
                      <span className="font-medium pr-1"> Use Cases:</span>{" "}
                      Identify specific use cases where AI can add value.
                      Examples include disease understanding, drug discovery,
                      and optimization of lab protocols.
                    </li>
                    <li>
                      <span className="font-medium pr-1">
                        {" "}
                        Data Requirements
                      </span>{" "}
                      Understand the types of data you need—genomic data,
                      clinical records, experimental results, and more.
                    </li>
                    <li>
                      <span className="font-medium pr-1">
                        Expected Outcomes:
                      </span>{" "}
                      Define success metrics. How will AI enhance your research
                      and decision-making?
                    </li>
                  </ul>
                </div>
                <div className="space-y-2 py-3">
                  <h1 className="text-2xl font-medium">
                    2. Infrastructure Setup
                  </h1>
                  <p>
                    Building a robust infrastructure ensures seamless
                    performance:
                  </p>
                  <ul className="list-disc pl-14">
                    <li>
                      Data Pipelines:
                      <ul className="list-disc pl-8 text-sm">
                        <li>
                          Design data pipelines to collect, preprocess, and
                          transform relevant data. Consider real-time streams
                          and batch processing.
                        </li>
                        <li>
                          Use AI-powered integration tools to streamline data
                          collection and harmonize datasets.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Computing Resources:
                      <ul className="list-disc pl-8 text-sm">
                        <li>
                          Allocate sufficient computational power for training
                          AI models.
                        </li>
                        <li>
                          Consider cloud-based solutions for scalability and
                          flexibility.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Analytics Tools:
                      <ul className="list-disc pl-8 text-sm">
                        <li>
                          Leverage tools for data exploration, model evaluation,
                          and monitoring.
                        </li>
                        <li>
                          Implement real-time analytics to detect anomalies and
                          optimize performance.
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2 py-3">
                  <h1 className="text-2xl font-medium">
                    3. Generative AI Model Development
                  </h1>
                  <p>Now let’s focus on generative AI model development:</p>
                  <ul className="list-disc pl-14">
                    <li>
                      Data Preparation:
                      <ul className="list-disc pl-8 text-sm">
                        <li>
                          Clean, preprocess, and transform data. Address missing
                          values and outliers.
                        </li>
                        <li>
                          Use techniques like tokenization and embedding for
                          text and genomic data.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Model Selection:
                      <ul className="list-disc pl-8 text-sm">
                        <li>
                          Choose appropriate generative AI models (e.g., GPT-3,
                          variational autoencoders).
                        </li>
                        <li>
                          Fine-tune pre-trained models on your specific
                          scientific data.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Training and Tuning:
                      <ul className="list-disc pl-8 text-sm">
                        <li>Train models using labeled data.</li>
                        <li>
                          Optimize hyperparameters and monitor performance.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Deployment:
                      <ul className="list-disc pl-8 text-sm">
                        <li>Deploy models in a production environment.</li>
                        <li>Implement version control and model tracking.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2 py-3">
                  <h1 className="text-2xl font-medium">
                    4. Unlocking Insights from Historical Data
                  </h1>
                  <p>Historical data is a goldmine for scientific insights:</p>
                  <ul className="list-disc pl-14">
                    <li>
                      Knowledge Graphs:
                      <ul className="list-disc pl-8 text-sm">
                        <li>
                          Create networks of contextualized scientific facts and
                          relationships.
                        </li>
                        <li>
                          Integrate genomic, disease, drug, clinical, and safety
                          information.
                        </li>
                        <li>
                          Use graph neural networks to uncover patterns and make
                          novel predictions.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Predictive Analytics:
                      <ul className="list-disc pl-8 text-sm">
                        <li>
                          Leverage AI to predict disease outcomes, drug
                          responses, and patient risks.
                        </li>
                        <li>
                          Optimize lab protocols based on historical data.
                        </li>
                        <li>Identify hidden correlations and trends.</li>
                      </ul>
                    </li>
                  </ul>
                </div>
                <div className="space-y-2 py-3">
                  <h1 className="text-2xl font-medium">
                    5. Singularity: Empowering Scientific Discovery
                  </h1>
                  <p>
                    Enter Singularity, our AI software designed to transform
                    scientific research:
                  </p>
                  <ul className="list-decimal pl-14">
                    <li>
                      Computer Vision: Analyze images—from microscopy slides to
                      molecular structures.
                    </li>
                    <li>
                      Natural Language Processing (NLP): Interpret scientific
                      literature and extract valuable insights.
                    </li>
                    <li>
                      Optical Character Recognition (OCR): Extract data from
                      scanned lab notebooks.
                    </li>
                    <li>
                      Real-Time Interaction: Seamlessly interact with the
                      system.
                    </li>
                    <li>
                      Modeling Capabilities: Build, train, and deploy AI models
                      for personalized medicine, drug discovery, and more.
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-6 my-3">
                  <h1 className="text-3xl font-medium">Conclusion</h1>
                  <p>
                    An AI data pipeline is not just about technology; it’s about
                    advancing scientific knowledge. By following these
                    principles and leveraging Singularity, you’ll accelerate
                    discoveries and push the boundaries of medical science.
                  </p>
                  <div className="grid py-10 border-y-2 space-y-4">
                    <span>
                      About the Author: Roo Dov is a data scientist and AI
                      enthusiast. He enjoys simplifying complex concepts and
                      helping researchers leverage data for scientific
                      advancement.
                    </span>
                    <span>Contact Roo Dov: info@blockcoder.net</span>
                  </div>
                </div>
                References:
                <ol className="list-decimal ml-8">
                  <li>
                    Deloitte US Blog. “Generative AI in Sourcing and Procurement
                    Operations.”
                    <a
                      className="text-blue-500 px-1"
                      href="https://www2.deloitte.com/us/en/blog/business-operations-room-blog/2023/generative-ai-in-procurement.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more.
                    </a>
                  </li>
                  <li>
                    Accenture. “A new era of generative AI for everyone.”
                    <a
                      className="text-blue-500 px-1"
                      href="https://www.accenture.com/content/dam/accenture/final/accenture-com/document/Accenture-Generative-AI-Sourcing-and-Procurement.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more.
                    </a>
                  </li>
                  <li>
                    Heinsohn NA. “The Power of Generative AI in Procurement.”{" "}
                    <a
                      className="text-blue-500 px-1"
                      href="https://us.heinsohn.co/blog/generative-ai-in-procurement/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more.
                    </a>
                  </li>
                  <li>
                    Deloitte US Blog. “Digital Procurement Transformation
                    through Generative AI.”{" "}
                    <a
                      className="text-blue-500 px-1"
                      href="https://www2.deloitte.com/us/en/blog/business-operations-room-blog/2023/digital-procurement-transformation-through-generative-ai.html"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more.
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </article>
        </>
      ) : (
        <div className="flex flex-col gap-2 justify-center items-center text-white">
          <img src={NotFound} alt="" />
          <span className="text-2xl md:text-3xl lg:text-5xl mb-2">
            NOT FOUND
          </span>
          <Link
            to="/"
            className="bg-white px-4 py-2 rounded text-black font-medium"
          >
            Go To Home
          </Link>
        </div>
      )}
    </div>
  );
};

export default BlogDetails3S;
