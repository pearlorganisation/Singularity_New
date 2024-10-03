import BannerImage from "../assets/singularity/glowing-blue-sphere-held-by-human-hand-generated-by-ai 1.png";
const ResetNewPassword = () => {
  return (
    <>
        <div className=" lg:w-full md:w-full w-full">
        <div
          style={{ backgroundImage: `url('${BannerImage}')` }}
          className="w-full h-[30rem] flex flex-col items-center justify-center bg-cover bg-center"
        >
          <h1 className="text-white font-semibold font-poppins lg:text-[93px] md:text-[70px]  text-[40px]">
            Reset New Password
          </h1>
          <p className="text-white font-medium font-poppins lg:text-[24px]">
            Singularity/Reset New Password
          </p>
        </div>

        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="form_container">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-900">
                Singularity
              </h2>
              <h2 className="mt-10 text-initial text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Set New Password
              </h2>
              <p className="text-initial font-bold leading-9 tracking-tight text-gray-500">
              Must be at least 8 characters.
              </p>
            </div>

            <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="#" method="POST">
                <div>
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="password"
                      required
                      className="block w-full rounded-md border-0 p-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="CPassword"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Confirm Password
                  </label>
                  <div className="mt-2">
                    <input
                      id="cpassword"
                      name="cpassword"
                      type="password"
                      autoComplete="cpassword"
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
                <a
                  href="#"
                  className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Back to login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetNewPassword