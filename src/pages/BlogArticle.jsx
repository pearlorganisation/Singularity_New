import { Link } from "react-router-dom";
import BannerImage from "../assets/singularity/glowing-blue-sphere-held-by-human-hand-generated-by-ai 1.png";
import BlogImage from "../assets/singularity/blog-img.png";
import LeftIcon from "../assets/singularity/left-icon.png";
import RightIcon from "../assets/singularity/right-icon.png";

const BlogArticle = () => {
  return (
    <>
      <div className=" lg:w-full md:w-full w-full">
        <div
          style={{ backgroundImage: `url('${BannerImage}')` }}
          className="w-full h-[30rem] relative flex flex-col items-center justify-center bg-cover bg-center"
        >
          <h1 className="text-white font-semibold font-poppins lg:text-[93px] md:text-[70px]  text-[40px]">
            Blog & Article
          </h1>
          <div className="blog-navigation mt-5 absolute bottom-0 w-full flex justify-center gap-5">
            <nav className="flex items-center justify-between flex-wrap p-6">
              <div className="flex items-center flex-shrink-0 text-white mr-6">
              </div>
              <div className="block lg:hidden">
                <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                  <svg
                    className="fill-current h-3 w-3"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Menu</title>
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                  </svg>
                </button>
              </div>
              <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
                <div className="text-md  lg:flex-grow">
                  <Link
                    className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mx-9"
                  >
                    Community
                  </Link>
                  <Link
                    className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mx-9"
                  >
                    Ai Technology
                  </Link>
                  <Link
                    className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mx-9"
                  >
                    Developers
                  </Link>
                  <Link
                    className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mx-9"
                  >
                    Announcements
                  </Link>
                  <Link
                    className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mx-9"
                  >
                    Video Library
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="grid place-items-center">
            <div className="flex items-end flex-wrap gap-3 w-[80%]">
              <div className="grow basis-[100px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link href="#">
                  <img className="blog-img rounded-t-lg" src={BlogImage} alt />
                </Link>
                <div className="blog_inner_content p-5">
                  <Link
                    to="#"
                    className="inline-flex items-center w-2/4 my-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-sm active:scale-90 transition-all  rounded-[7px] text-white font-poppins text-[12px] py-2 md:text-[14px] lg:text-[16px] font-bold  bg-gradient-to-l from-[#0C3C8E] to-[#996CE6]"
                  >
                    Read more
                  </Link>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                </div>
              </div>
              <div className="grow basis-[100px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link href="#">
                  <img className="blog-img rounded-t-lg" src={BlogImage} alt />
                </Link>
                <div className="p-5">
                  <Link
                    to="#"
                    className="inline-flex items-center w-2/4 my-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-sm active:scale-90 transition-all  rounded-[7px] text-white font-poppins text-[12px] py-2 md:text-[14px] lg:text-[16px] font-bold  bg-gradient-to-l from-[#0C3C8E] to-[#996CE6]"
                  >
                    Read more
                  </Link>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                </div>
              </div>
              <div className="grow basis-[100px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link href="#">
                  <img className="blog-img rounded-t-lg" src={BlogImage} alt />
                </Link>
                <div className="p-5">
                  <Link
                    to="#"
                    className="inline-flex items-center w-2/4 my-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-sm active:scale-90 transition-all  rounded-[7px] text-white font-poppins text-[12px] py-2 md:text-[14px] lg:text-[16px] font-bold  bg-gradient-to-l from-[#0C3C8E] to-[#996CE6]"
                  >
                    Read more
                  </Link>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-end flex-wrap gap-3 w-[80%] my-5">
              <div className="grow basis-[100px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link href="#">
                  <img className="blog-img rounded-t-lg" src={BlogImage} alt />
                </Link>
                <div className="p-5">
                  <Link
                    to="#"
                    className="inline-flex items-center w-2/4 my-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-sm active:scale-90 transition-all  rounded-[7px] text-white font-poppins text-[12px] py-2 md:text-[14px] lg:text-[16px] font-bold  bg-gradient-to-l from-[#0C3C8E] to-[#996CE6]"
                  >
                    Read more
                  </Link>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                </div>
              </div>
              <div className="grow basis-[100px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link href="#">
                  <img className="blog-img rounded-t-lg" src={BlogImage} alt />
                </Link>
                <div className="p-5">
                  <Link
                    to="#"
                    className="inline-flex items-center w-2/4 my-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-sm active:scale-90 transition-all  rounded-[7px] text-white font-poppins text-[12px] py-2 md:text-[14px] lg:text-[16px] font-bold  bg-gradient-to-l from-[#0C3C8E] to-[#996CE6]"
                  >
                    Read more
                  </Link>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                </div>
              </div>
              <div className="grow basis-[100px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <Link href="#">
                  <img className="blog-img rounded-t-lg" src={BlogImage} alt />
                </Link>
                <div className="p-5">
                  <Link
                    to="#"
                    className="inline-flex items-center w-2/4 my-4 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-sm active:scale-90 transition-all  rounded-[7px] text-white font-poppins text-[12px] py-2 md:text-[14px] lg:text-[16px] font-bold  bg-gradient-to-l from-[#0C3C8E] to-[#996CE6]"
                  >
                    Read more
                  </Link>

                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of
                    2021 so far, in reverse chronological order.
                  </p>
                  <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Noteworthy technology acquisitions 2021
                    </h5>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pagination">
          <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="flex flex-1 justify-between sm:hidden">
              <a
                href="#"
                className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Previous
              </a>
              <a
                href="#"
                className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
              >
                Next
              </a>
            </div>
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-around">
              <div className="flex justify-start items-center gap-2">
                <img src={LeftIcon} alt="left" />
                <p className="text-sm font-medium text-[22px] text-gray-700">
                  PREVIOUS
                </p>
              </div>
              <div className="flex justify-start items-center gap-2">
                <img src={RightIcon} alt="right" />
                <p className="text-sm font-medium text-[22px] text-gray-700">
                  Next
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogArticle;
