import BannerImage from "../assets/singularity/glowing-blue-sphere-held-by-human-hand-generated-by-ai 1.png";
import Vector from "../assets/singularity/Vector.png";
import Vector1 from "../assets/singularity/Vector1.png";
import Vector2 from "../assets/singularity/Vector2.png";
import FormImage from "../assets/singularity/3d-rendering-biorobots-concept (1) 1.png";

const ContactUs = () => {
  return (
    <>
      <div className=" lg:w-full md:w-full w-full">
        <div
          style={{ backgroundImage: `url('${BannerImage}')` }}
          className="w-full h-[15rem] md:h-[20rem] lg:h-[25rem] flex flex-col items-center justify-center bg-cover bg-center"
        >
          <h1 className="text-white font-semibold font-poppins lg:text-[93px] md:text-[70px]  text-[40px]">
            Contact Us
          </h1>
          <p className="text-white font-medium font-poppins lg:text-[24px]">
            Singularity/Contact Us
          </p>
        </div>

        <div className="container mx-auto my-8 py-4  flex flex-row gap-3 flex-wrap md:space-y-0 justify-center md:flex-row md:justify-between items-center">
          <button className="bg-gray-200 md:w-[240px] xl:w-[384px] lg:w-[320px] w-full h-[268px] flex flex-col items-center justify-center py-8 px-4">
            <img
              src={Vector}
              className="lg:h-[70px] md:h-[50px] h-[40px]"
            />
            <p className="lg:text-[24px] font-semibold font-poppins lg:font-semibold  text-[18px] my-2 text-[#000000]">
              Location
            </p>
            <p className="font-medium font-poppins lg:text-[16px] text-[14px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </button>
          <button className="bg-gray-200 md:w-[240px] xl:w-[384px] lg:w-[320px]   w-full h-[268px] flex flex-col items-center justify-center py-8 px-4 ">
            <img
              src={Vector1}
              className="lg:h-[70px] md:h-[50px] h-[40px]"
            />
            <p className="lg:text-[24px] font-semibold font-poppins  text-[18px] my-2 text-[#000000]">
              Email
            </p>
            <p className="font-medium font-poppins text-[14px] lg:text-[16px]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry
            </p>
          </button>
          <button className="bg-gray-200 md:w-[240px] xl:w-[384px] lg:w-[320px]  w-full h-[268px] flex flex-col items-center justify-center py-8  px-4">
            <img
              src={Vector2}
              className="lg:h-[70px] md:h-[50px] h-[40px]"
            />
            <p className="lg:text-[24px] font-semibold font-poppins text-[18px] my-2 text-[#000000]">
              Phone
            </p>
            <p className="font-medium font-poppins text-[14px] lg:text-[16px]">
              91+ 8844666345
            </p>
            <p className="font-medium font-poppins text-[14px] lg:text-[16px]">
              91+ 7744226345
            </p>
          </button>
        </div>

        <div className="container mx-auto py-[4rem]">
          <div className="flex flex-row  lg:space-x-10">
            <div className="w-full hidden lg:block">
              <img src={FormImage} className="lg:h-full lg:w-full" />
            </div>
            <div className="flex flex-col lg:w-full w-full md:px-0 px-10 ">
              <label className="font-poppins md:text-[24px] font-medium">
                Name:
              </label>
              <input
                type="text"
                placeholder="Enter Your Name"
                className="font-poppins mb-4 md:mb-10 rounded-[7px] shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] lg:py-4 py-2 px-2 md:py-3 md:px-3 bg-[#F8F8F8] border border-[#000000] w-full outline-none"
              ></input>
              <label className="font-poppins md:text-[24px] font-medium">
                Email:
              </label>
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="font-poppins mb-4 md:mb-10 rounded-[7px] shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] lg:py-4 py-2 px-2 md:py-3 md:px-3 bg-[#F8F8F8] border border-[#000000] w-full outline-none"
              ></input>
              <label className="font-poppins md:text-[24px] font-medium">
                Phone:
              </label>
              <input
                type="text"
                placeholder="Enter Your Phone Number"
                className="font-poppins mb-4 md:mb-10 rounded-[7px] shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] lg:py-4 py-2 px-2 md:py-3 md:px-3 bg-[#F8F8F8] border border-[#000000]  w-full outline-none"
              ></input>
              <label className="font-poppins md:text-[24px] font-medium">
                Message:
              </label>
              <textarea
                type="text"
                rows="5"
                placeholder="Add a Comment"
                className="font-poppins mb-4 md:mb-10 rounded-[7px] shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)] lg:py-4 py-2 px-2 md:py-3 md:px-3 bg-[#F8F8F8] border border-[#000000] w-full outline-none"
              ></textarea>

              <button className="font-poppins w-full active:scale-90 transition-all rounded-[7px] text-white bg-gradient-to-l from-[#0C3C8E] to-[#996CE6] py-4 shadow-[0px_4px_4px_rgba(0, 0, 0, 0.25)]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
