import { CiMail } from "react-icons/ci";
import Logo from "../../assets/singularity/Logo.png";
import SingularityBanner from "../../assets/singularity/1.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const footerNavs = [
    {
      label: "Services",
      items: [
        {
          href: 'services/AiPoweredVideoCalling',
          name: 'Ai Powered Video Calling'
        },
        {
          href: 'services/ContentGeneration',
          name: 'Content Generation'
        },
        {
          href: 'services/AiEmailAutomation',
          name: 'Ai Email Automation'
        },
        {
          href: 'services/HRAutomation',
          name: 'HR Automation'
        },

        {
          href: 'services/AiEnabledCustomerSupport',
          name: 'Ai Enabled Customer Support'
        },

        {
          href: 'services/Ai-PoweredSalesAutomation',
          name: 'Ai-Powered Sales Automation'
        },
        {
          href: 'services/AboutUs',
          name: 'About Us'
        },
      ],
    },
    {
      label: "Integrations",
      items: [
        {
          href: 'integrations/EnterpriseResourcePlanning(ERP)Integration',
          name: 'Enterprise Resource Planning (ERP) Integration'
        },
        {
          href: 'integrations/SupplyChainManagementIntegration',
          name: 'Supply Chain Management Integration'
        },
        {
          href: 'integrations/TelemedecinePlatformIntegration',
          name: 'Telemedecine Platform Integration'
        },
        {
          href: 'integrations/HumanResourcesManagementSystem(HRMS)Integration',
          name: 'Human Resources Management System (HRMS) Integration'
        },

        {
          href: 'integrations/LearningManagementSystem(LMS)Integration',
          name: 'Learning Management System (LMS) Integration'
        },

        {
          href: 'integrations/ResearchCollaborationPlatformIntegration',
          name: 'Research Collaboration Platform Integration'
        }
      ],
    },

  ]
  return (
    <>
      <div
        style={{ backgroundImage: `url('${SingularityBanner}')` }}
        className="w-full bg-no-repeat bg-cover bg-center grid place-items-center bg-[#F4F4F4] px-3"
      >
        <div className="container relative mx-auto font-poppins  py-6 ">
          <div className="flex flex-col md:flex-row justify-between gap-16 items-start px-2  md:py-5 lg:py-10 lg:px-10 ">
            <div className="grid gap-2 text-white">
              <a
                id=""
                className="flex items-center gap-3 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
                href="#"
              >
                <img
                  className="lg:w-[4.5rem] lg:h-[4.5rem] sm:w-[3.5rem]
sm:h-[3.5rem] w-[3rem]
h-[3rem]"
                  src={Logo}
                  alt=""
                />
                <span className="text-blue-600 text-3xl lg:text-4xl font-bold">
                  Singularity
                </span>
              </a>
              <p className="text-lg lg:text-xl pl-2 font-medium font-poppins">
                Your Business Ai Copilot
              </p>
            </div>

            <div className="grid gap-2 text-white">
              <h1 className="font-semibold whitespace-nowrap">Menu Links</h1>
              <Link to="/">
                <span>Home</span>
              </Link>
              <Link to="/about">
                <span>AboutUs</span>
              </Link>
              <Link to="/services/AiPoweredVideoCalling">
                <span>Services</span>
              </Link>
              <Link to="/integrations/EnterpriseResourcePlanning(ERP)Integration">
                <span>Integration</span>
              </Link>
              <Link to="/legal">
                <span>Blog</span>
              </Link>
              {/*<span>Contact Us</span>*/}
            </div>

            {
              footerNavs?.map(item => {
                return <div className="grid gap-2 text-white">


                  <h1 className="font-semibold whitespace-nowrap">{item?.label}</h1>
                  {
                    item?.items?.map(ser => {
                      return <Link to={ser?.href}>
                        <span>{ser?.name}</span>
                      </Link>
                    })
                  }


                </div>
              })
            }





            <div className="grid gap-2 text-white">
              <h1 className="font-semibold whitespace-nowrap">ContactUs</h1>

              {/* <p className="md:mb-5 mb-2  flex flex-row">
                <SlLocationPin className="text-[20px] md:text-[25px] lg:text-[30px]" />
                <span className="lg:text-[16px] grid place-items-center text-[10px] md:text-[12px] ml-2 font-medium">
                  <span>
                    Office 3A-C2, Business Gate Complex,  Dehradun India{" "}
                  </span>
                </span>
              </p> */}
              <p className="flex">
                <CiMail className=" text-[20px] md:text-[25px] lg:text-[30px]" />
                <span className="lg:text-[16px] grid place-items-center text-[10px] md:text-[12px] ml-2 font-medium">
                  info@blockcoder.net
                </span>
              </p>
              {/* <div className="text-2xl md:text-3xl lg:text-4xl py-4 pl-1 space-x-2 text-gray-100">
                {" "}
                <i class="fa-brands fa-instagram"></i>{" "}
                <i class="fa-brands fa-facebook-f"></i>{" "}
                <i class="fa-brands fa-twitter"></i>{" "}
                <i class="fa-brands fa-whatsapp"></i>{" "}
              </div> */}
            </div>
          </div>

          <div className="w-full text-center mt-4 md:mt-0">
            <span className="lg:text-[14px] md:text-[12px] text-[10px] font-semibold text-white">
              © 2024 paygold.io, Inc. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
