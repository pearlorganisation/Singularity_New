import { Link } from "react-router-dom";
import BannerImage from "../assets/singularity/glowing-blue-sphere-held-by-human-hand-generated-by-ai 1.png";

const ForgetPassword = () => {
  return (
    <>
      <div className=" lg:w-full md:w-full w-full">
        <div
          style={{ backgroundImage: `url('${BannerImage}')` }}
          className="w-full h-[30rem] flex flex-col items-center justify-center bg-cover bg-center"
        >
          <h1 className="text-white font-semibold font-poppins lg:text-[93px] md:text-[70px]  text-[40px]">
            Forgot Password
          </h1>
          <p className="text-white font-medium font-poppins lg:text-[24px]">
            Singularity/Forgot Password
          </p>
        </div>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="form_container">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-900">
                Singularity
              </h2>
              <h2 className="mt-10 text-initial text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Forgot Password
              </h2>
              <p className="text-initial font-bold leading-9 tracking-tight text-gray-500">
                No worries, We will send you reset instructions
              </p>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="flex w-full justify-center rounded-md active:scale-90 transition-all  rounded-[7px] text-white font-poppins text-[12px] py-2 md:text-[14px] lg:text-[16px] font-bold  bg-gradient-to-l from-[#0C3C8E] to-[#996CE6]"
                  >
                    Reset Password
                  </button>
                </div>
              </form>

              <p className="mt-10 text-center text-sm text-gray-500">
                <Link
                  to="/login"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Back to login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
