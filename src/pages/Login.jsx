// import LoginImage from "../assets/singularity/LoginformImage.png";
import { TiSocialFacebook } from "react-icons/ti";
import { FcGoogle } from "react-icons/fc";
import { TiSocialLinkedin } from "react-icons/ti";
import { FiUser } from "react-icons/fi";
import { RiLockLine } from "react-icons/ri";
import { TiSocialTwitter } from "react-icons/ti";
// import "./Login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="container mx-auto min-h-[100vh] grid place-items-center pt-[5.5rem]">
        <div className="flex flex-row h-[660px] gap-5 justify-center p-5 w-full">
          <div className="w-full  hidden lg:block">
            <img src='https://i.ibb.co/PG1s47v/Loginform-Image.png' className="h-full w-full" />
          </div>

          <div className="flex w-full bg-[#F0EFEF] shadow-md rounded-[7px] h-auto  flex-col px-10 py-10">
            <div className="relative ">
              <label className="text-[12px] lg:text-[16px] md:text-[14px] font-poppins font-medium">
                UserName:
              </label>
              <input
                type="text"
                placeholder="UserName"
                className="w-full mb-5  outline-none rounded-[7px] px-3 text-[rgba(0,0,0,0.8)] py-2 placeholder:font-poppins placeholder:text-[10px] md:placeholder:text-[12px] lg:placeholder:text-[14px]"
              />

              <FiUser className="absolute top-[38%] text-[rgb(81,81,81)] h-[25px] w-[25px] md:top-[38%] lg:h-[30px]  right-[3%] lg:right-[5%]" />
            </div>
            <div className="relative ">
              <label className="text-[12px] lg:text-[16px] md:text-[14px] font-poppins font-medium">
                Password:
              </label>
              <input
                type="password"
                placeholder="Password"
                className="w-full mb-5  outline-none rounded-[7px] text-[rgba(0,0,0,0.8)] px-3 py-2 placeholder:font-poppins placeholder:text-[10px] md:placeholder:text-[12px] lg:placeholder:text-[14px]"
              />

              <RiLockLine className="absolute top-[38%] text-[rgb(81,81,81)] h-[25px] w-[25px] md:top-[38%] lg:h-[30px]  right-[3%] lg:right-[5%]" />
            </div>

            <div className="w-full flex flex-row justify-between mb-4">
              <span className="cursor-pointer font-normal font-poppins text-[12px] md:text-[14px] ">
                Remember Me{" "}
                <input type="checkbox" className="relative top-[2px] "></input>
              </span>
              <Link to="/forgot-password" className="cursor-pointer bg-gradient-to-r from-[#0C3C8E] to-[#996CE6] inline-block text-transparent bg-clip-text font-normal font-poppins text-[#996CE6]  text-[12px] md:text-[14px]">
                Forget Password
              </Link>
            </div>

            <button className="w-full active:scale-90 transition-all  rounded-[7px] text-white font-poppins text-[12px] py-2 md:text-[14px] lg:text-[16px] font-bold  bg-gradient-to-l from-[#0C3C8E] to-[#996CE6]">
              Login
            </button>

            <div className="w-full text-center my-4">
              <span className=" login-option font-poppins text-[12px] md:text-[14px] lg:text-[16px] font-normal">
                Or Login With
              </span>
            </div>

            <div className="w-full flex justify-center items-center mt-2">
              <div className="w-[60%] py-[4px] px-1 rounded-[7px] bg-white  flex flex-row justify-around">
                <button>
                  <FcGoogle className=" text-[25px] lg:text-[30px]" />
                </button>
                <button className="bg-[#395398] rounded-[7px]">
                  <TiSocialFacebook className="text-[25px] lg:text-[30px] fill-white" />
                </button>
                <button className="rounded-[7px] bg-[#7BC5F8] ">
                  <TiSocialTwitter className="text-[25px]  fill-white lg:text-[30px]" />
                </button>
                <button className="rounded-[7px] bg-gradient-to-l from-[#007AB5] to-[#0046E5] ">
                  <TiSocialLinkedin className="text-[25px]  fill-white lg:text-[30px]" />
                </button>
              </div>
            </div>

            <div className="w-full text-center mt-8 ">
              <span className="lg:text-[16px] md:text-[14px] text-[12px] font-poppins font-normal">
                Do not have an account?
                <Link to="/signup">
                  <span className="bg-gradient-to-r pl-1 from-[#0C3C8E] to-[#996CE6] inline-block text-transparent bg-clip-text font-poppins cursor-pointer">
                    Sign Up Here
                  </span>
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
