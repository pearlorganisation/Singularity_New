import React, { useEffect } from "react";
import { useLocation } from "react-router";
import NotFound from "../assets/singularity/NotFound.gif";
import { Link } from "react-router-dom";

const BlogDetails = () => {
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

export default BlogDetails;
