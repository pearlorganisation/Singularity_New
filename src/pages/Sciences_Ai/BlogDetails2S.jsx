import React, { useEffect } from "react";
import { useLocation } from "react-router";
import NotFound from "../../assets/singularity/NotFound.gif";
import { Link } from "react-router-dom";
import { blogAuthor } from "../../utils/blogAuthor";


const BlogDetails2S = () => {
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
                    Building an Automated Enterprise AI Data Pipeline with
                    Singularity
                  </h1>
                  <span>By Roo Dov</span>
                </div>
                <p>
                  In the dynamic landscape of procurement, an automated AI data
                  pipeline is essential for unlocking value, optimizing
                  processes, and making informed decisions. Singularity, our
                  powerful AI software, plays a pivotal role in this
                  transformation. Let’s dive into the technical steps of
                  building an efficient and secure AI data pipeline for
                  procurement.
                </p>

                <div className="space-y-2 py-3">
                  <h1 className="text-2xl font-medium">
                    1. Define Your Strategy
                  </h1>
                  <p>
                    Before diving into implementation, outline a clear strategy:
                  </p>
                  <ul className="list-disc pl-14">
                    <li>
                      <span className="font-medium pr-1"> Use Cases:</span>{" "}
                      Identify specific use cases where generative AI can add
                      value. Examples include vendor evaluation, compliance
                      monitoring, and market intelligence.
                    </li>
                    <li>
                      <span className="font-medium pr-1">
                        {" "}
                        Data Requirements
                      </span>{" "}
                      Identify specific use cases where generative AI can add
                      value. Examples include vendor evaluation, compliance
                      monitoring, and market intelligence.
                    </li>
                    <li>
                      <span className="font-medium pr-1">
                        Expected Outcomes:
                      </span>{" "}
                      Define success metrics. What impact do you expect
                      generative AI to have on procurement processes?
                    </li>
                  </ul>
                </div>

                <div className="space-y-2 py-3">
                  <h1 className="text-2xl font-medium">
                    2. Infrastructure Setup
                  </h1>
                  <p>Building a robust infrastructure is crucial:</p>
                  <ul className="list-disc pl-14">
                    <li>
                      Data Pipelines:
                      <ul className="list-disc pl-8 text-sm">
                        <li>
                          Design data pipelines to collect, preprocess, and
                          transform relevant data. Ensure seamless data flow
                          from source to destination.
                        </li>
                        <li>
                          Use AI-powered integration tools to streamline data
                          collection and transformation.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Computing Resources:
                      <ul className="list-disc pl-8 text-sm">
                        <li>
                          Allocate sufficient computational power for training
                          and inference.
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
                    3. Security Considerations
                  </h1>
                  <p>
                    Security is paramount in an enterprise AI data pipeline:
                  </p>
                  <ul className="list-disc pl-14">
                    <li>
                      <span className="font-medium pr-1"> Data Privacy:</span>{" "}
                      Ensure compliance with data privacy regulations (e.g.,
                      GDPR). Anonymize sensitive information.
                    </li>
                    <li>
                      <span className="font-medium pr-1">
                        {" "}
                        Access Controls:
                      </span>{" "}
                      Implement role-based access controls. Limit access to
                      authorized personnel.
                    </li>
                    <li>
                      <span className="font-medium pr-1"> Encryption:</span>{" "}
                      Encrypt data at rest and in transit. Use secure protocols.
                    </li>
                    <li>
                      <span className="font-medium pr-1"> Audit Trails:</span>
                      Maintain detailed logs of data access and processing.
                    </li>
                    <li>
                      <span className="font-medium pr-1">
                        Threat Detection:
                      </span>{" "}
                      Deploy AI-driven threat detection mechanisms to identify
                      anomalies or malicious activities.
                    </li>
                  </ul>
                </div>

                <div className="space-y-2 py-3">
                  <h1 className="text-2xl font-medium">
                    4. Generative AI Model Development
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
                          text data.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Model Selection:
                      <ul className="list-disc pl-8 text-sm">
                        <li>
                          Choose appropriate generative AI models (e.g., GPT-3,
                          BERT).
                        </li>
                        <li>
                          Fine-tune pre-trained models on your specific
                          procurement data.
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
                    5.Continuous Monitoring and Improvement
                  </h1>
                  <p>An AI data pipeline is not static:</p>
                  <ul className="list-disc pl-14">
                    <li>
                      Monitoring:
                      <ul className="list-disc pl-8 text-sm">
                        <li>Monitor model performance in real time.</li>
                        <li>
                          Detect concept drift or data distribution changes.
                        </li>
                      </ul>
                    </li>
                    <li>
                      Feedback Loop:
                      <ul className="list-disc pl-8 text-sm">
                        <li>Collect feedback from users and stakeholders.</li>
                        <li>Continuously improve models based on feedback.</li>
                      </ul>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col gap-6 my-3">
                  <h1 className="text-3xl font-medium">Conclusion</h1>
                  <p>
                    Building an automated enterprise AI data pipeline requires a
                    holistic approach. Singularity empowers procurement
                    professionals to transform their processes. Embrace the
                    possibilities, secure your pipeline, and let AI drive
                    procurement forward.
                  </p>
                  <div className="grid py-10 border-y-2 space-y-4">
                    <span>
                      About the Author: Roo Dov is the CEO/Founder of
                      Singularity.
                    </span>
                    <span>Contact Roo Dov: info@blockcoder.net</span>
                  </div>
                </div>
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

export default BlogDetails2S;
