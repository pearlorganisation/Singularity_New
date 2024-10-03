import React, { useEffect, useState } from "react";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import AILogo from "../../assets/singularity/AILogo.png";
import Logo from "../../assets/singularity/Logo.png";
import DropDown from "./DropDown";

const Header = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    console.log("pathName::", pathname);
    console.log(pathname.split("/")[1] === "services");
    console.log(pathname.split("/")[1] === "integrations");

    console.log("path:", pathname.split("/")[1]);
  }, [pathname]);
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  let prevScroll = window.scrollY;
  let currScroll = 0;
  /*const handleNavBar = () => {
    currScroll = window.scrollY;
    if (prevScroll < currScroll) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
    // if(window.scrollY > 100){
    //   setShowNav(true)
    //   console.log("Greater than 100")}
    //   else {
    //     setShowNav(false)
    //   }
    prevScroll = currScroll;
  };*/
  /*useEffect(() => {
    window.addEventListener("scroll", handleNavBar);

    return () => {
      window.removeEventListener("scroll", handleNavBar);
    };
  }, []);*/

  return (
    <>
      {/*<!-- Component: Basic Navbar --> */}
      <header
        className={`fixed z-20 ${showNav
          ? "max-h-[0rem] overflow-hidden opacity-0"
          : "max-h-[10rem] opacity-100"
          } transition-all duration-200 w-full  shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 bg-black/30 backdrop-blur-sm lg:after:hidden lg:px-2`}
      >
        <div className="relative mx-auto ">
          <nav
            aria-label="main navigation"
            className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
            role="navigation"
          >
            {/*      <!-- Brand logo --> */}
            <a
              id="WindUI"
              aria-label="WindUI logo"
              aria-current="page"
              className="flex items-center  xl:gap-3 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
              href="/"
            >
              <img
                className="lg:w-[4.5rem] lg:h-[4.5rem] sm:w-[3.5rem]
sm:h-[3.5rem] w-[3rem]
h-[3rem]"
                src={Logo}
                alt=""
              />
              <span className=" text-xl lg:text-2xl xl:text-4xl font-bold text-white">
                Singularity
              </span>
            </a>
            {/*      <!-- Mobile trigger --> */}
            <button
              className={`relative order-10 block h-10 w-10 self-center lg:hidden
                ${isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
                }
              `}
              onClick={() => setIsToggleOpen(!isToggleOpen)}
              aria-expanded={isToggleOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-blue-600 transition-all duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-6 transform rounded-full bg-blue-600 transition duration-300"
                ></span>
                <span
                  aria-hidden="true"
                  className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-blue-600 transition-all duration-300"
                ></span>
              </div>
            </button>

            <ul
              role="menubar"
              aria-label="Select page"
              className={`absolute top-0 left-0 z-[-1] h-[100vh] w-full justify-center overflow-hidden  md:text-white  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                ? "visible opacity-100 backdrop-blur-sm"
                : "invisible opacity-0"
                }`}
            >
              <NavLink
                onClick={() => {
                  setIsToggleOpen(!isToggleOpen);
                }}
                className={({ isActive }) =>
                  `flex items-stretch ${isActive ? "text-blue-600" : ""}`
                }
                to={`/`}
              >
                <li role="none" className="flex items-stretch">
                  <span
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex="0"
                    className="relative flex flex-col md:flex-row items-start md:items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-3 xl:px-4"
                  >
                    Home
                  </span>
                </li>
              </NavLink>

              <NavLink
                onClick={() => {
                  setIsToggleOpen(!isToggleOpen);
                }}
                className={({ isActive }) =>
                  `flex items-stretch ${isActive ? "text-blue-600" : ""}`
                }
                to={`/legal`}
              >
                <li role="none" className="flex items-stretch">
                  <span
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex="0"
                    className="relative flex flex-col md:flex-row items-start md:items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-3 xl:px-4"
                  >
                    Legal
                  </span>
                </li>
              </NavLink>

              <NavLink
                onClick={() => {
                  setIsToggleOpen(!isToggleOpen);
                }}
                className={({ isActive }) =>
                  `flex items-stretch ${isActive ? "text-blue-600" : ""}`
                }
                to={`/blogs`}
              >
                <li role="none" className="flex items-stretch">
                  <span
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex="0"
                    className="relative flex flex-col md:flex-row items-start md:items-center gap-2 py-4 transition-colors duration-300 focus:outline-none focus-visible:outline-none lg:px-3 xl:px-4"
                  >
                    Blogs
                  </span>
                </li>
              </NavLink>

              {/* <NavLink
                onClick={() => {
                  setIsToggleOpen(!isToggleOpen);
                }}
                className={({ isActive }) =>
                  `flex items-stretch ${isActive ? "text-blue-600" : ""}`
                }
                to={`/sciences_ai`}
              >
                <li role="none" className="flex items-stretch">
                  <span
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex="0"
                    className="relative flex flex-col md:flex-row items-start md:items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-600 focus:outline-none focus-visible:outline-none lg:px-3 xl:px-4"
                  >
                    Sciences.ai
                  </span>
                </li>
              </NavLink>

              <NavLink
                onClick={() => {
                  setIsToggleOpen(!isToggleOpen);
                }}
                className={({ isActive }) =>
                  `flex items-stretch ${isActive ? "text-blue-600" : ""}`
                }
                to={`/procurement`}
              >
                <li role="none" className="flex items-stretch">
                  <span
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex="0"
                    className="relative flex flex-col md:flex-row items-start md:items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-600 focus:outline-none focus-visible:outline-none lg:px-3 xl:px-4"
                  >
                    Procurement
                  </span>
                </li>
              </NavLink>

              <NavLink
                onClick={() => {
                  setIsToggleOpen(!isToggleOpen);
                }}
                className={({ isActive }) =>
                  `flex items-stretch ${isActive ? "text-blue-600" : ""}`
                }
                to={`/warehouse`}
              >
                <li role="none" className="flex items-stretch">
                  <span
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex="0"
                    className="relative flex flex-col md:flex-row items-start md:items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-600 focus:outline-none focus-visible:outline-none lg:px-3 xl:px-4"
                  >
                    Warehouse
                  </span>
                </li>
              </NavLink> */}

              <div className="flex items-stretch">
                <li role="none" className="flex items-stretch">
                  <span
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex="0"
                    className="relative flex flex-col md:flex-row items-start md:items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-600 focus:outline-none focus-visible:outline-none lg:px-3 xl:px-4"
                  >
                    <DropDown
                      setIsToggleOpen={setIsToggleOpen}
                      isToggleOpen={isToggleOpen}
                      name="Services"
                      links={[
                        `Ai Powered Video Calling`,
                        `Content Generation`,
                        `Ai Email Automation`,
                        `HR Automation`,
                        `Ai Enabled Customer Support`,
                        `Ai-Powered Sales Automation`,
                        `About Us`,
                      ]}
                      active={pathname.split("/")[1] === "services"}
                    />
                  </span>
                </li>
              </div>
              {/* <Link className="flex items-stretch" to={`/integrations`}> */}
              <div className="flex items-stretch">
                <li role="none" className="flex items-stretch">
                  <span
                    role="menuitem"
                    aria-haspopup="false"
                    tabIndex="0"
                    className="relative flex flex-col md:flex-row items-start md:items-center gap-2 py-4 transition-colors duration-300 hover:text-blue-600 focus:outline-none focus-visible:outline-none lg:px-3 xl:px-4"
                  >
                    <DropDown
                      setIsToggleOpen={setIsToggleOpen}
                      isToggleOpen={isToggleOpen}
                      name="Integrations"
                      links={[
                        `Enterprise Resource Planning (ERP) Integration `,
                        `Supply Chain Management Integration`,
                        `Telemedecine Platform Integration`,
                        `Human Resources Management System (HRMS) Integration`,
                        `Learning Management System 
                        (LMS) Integration`,
                        `Research Collaboration Platform Integration`,
                      ]}
                      active={pathname.split("/")[1] === "integrations"}
                    />
                  </span>
                </li>
              </div>

              <div className="flex gap-3 lg:justify-center lg:items-center">
                {[
                  //{ name: "Login", link: "login" },
                  { name: "SignUp", link: "signUp" },
                ].map((item, key) => {
                  return (
                    <Link
                      key={key}
                      onClick={() => {
                        setIsToggleOpen(!isToggleOpen);
                      }}
                      //to={`/${item.link}`}
                      to={"https://forms.gle/JA4SnWteMJ89QBoK8"}
                      className="lg:ml-0 lg:p-0"
                    >
                      <button className="inline-flex active:scale-90 h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-white px-5 text-sm font-medium tracking-wide text-[#031663] hover:shadow-md shadow-blue-200 transition duration-300 hover:shadow-emerald-200 disabled:cursor-not-allowed ">
                        <span>{item.name}</span>
                      </button>
                    </Link>
                  );
                })}
              </div>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
