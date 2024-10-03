import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services/Services";
//import OurTerms from './pages/OurTerms'
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Layout from "./layout/Layout";
import Home from "./pages/Home/Home";
import Integration1 from "./pages/Integration/Integration1";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import ResetNewPassword from "./pages/ResetNewPassword";
import "./App.css";
import BlogArticle from "./pages/BlogArticle";
import ContentGeneration from "./pages/Services/ContentGeneration";
import EnterpriseResource from "./pages/Integration/EnterpriseResource";
import SupplyChain from "./pages/Integration/SupplyChain";
import Telemedicine from "./pages/Integration/Telemedicine";
import HRMS from "./pages/Integration/HRMS";
import LearningManagement from "./pages/Integration/LearningManagement";
import ResearchCollaboration from "./pages/Integration/ResearchCollaboration";
import AiEmailAutomation from "./pages/Services/AiEmailAutomation";
import HRAutomation from "./pages/Services/HRAutomation";
import AiEnabledCustomerSupport from "./pages/Services/AiEnabledCustomerSupport";
import AiPoweredSalesAutomation from "./pages/Services/AiPoweredSalesAutomation";
import Procurement from "./pages/Procurement/Procurement";
import Sciences_Ai from "./pages/Sciences_Ai/Sciences_Ai";
import BlogDetails from "./components/BlogDetails";
import HeroPBlogDetails from "./components/HeroPBlogDetails";
import HeroPSlogDetails from "./components/HeroSBlogDetails";
import BlogDetails1P from "./pages/Procurement/BlogDetails1P";
import BlogDetails2P from "./pages/Procurement/BlogDetails2P";
import BlogDetails3P from "./pages/Procurement/BlogDetails3P";
import BlogDetails1S from "./pages/Sciences_Ai/BlogDetails1S";
import BlogDetails2S from "./pages/Sciences_Ai/BlogDetails2S";
import BlogDetails3S from "./pages/Sciences_Ai/BlogDetails3S";
import Warehouse from "./pages/Warehouse/Warehouse";
import Blogs from "./pages/Blogs/Blogs";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/contact" element={<ContactUs />} />
          {/* servicepages starts here */}
          <Route
            path="/services/AiPoweredVideoCalling"
            element={<Services />}
          />
          <Route path="/services/AboutUs" element={<AboutUs />} />

          <Route
            path="/services/ContentGeneration"
            element={<ContentGeneration />}
          />
          <Route
            path="/services/AiEmailAutomation"
            element={<AiEmailAutomation />}
          />
          <Route path="/services/HRAutomation" element={<HRAutomation />} />
          <Route
            path="/services/AiEnabledCustomerSupport"
            element={<AiEnabledCustomerSupport />}
          />
          <Route
            path="/services/Ai-PoweredSalesAutomation"
            element={<AiPoweredSalesAutomation />}
          />

          {/* servicepages ends here */}

          {/* integrations pages start */}
          <Route path="/integrations" element={<Integration1 />} />

          <Route
            path="/integrations/EnterpriseResourcePlanning(ERP)Integration"
            element={<EnterpriseResource />}
          />
          <Route
            path="/integrations/SupplyChainManagementIntegration"
            element={<SupplyChain />}
          />
          <Route
            path="/integrations/TelemedecinePlatformIntegration"
            element={<Telemedicine />}
          />
          <Route
            path="/integrations/HumanResourcesManagementSystem(HRMS)Integration"
            element={<HRMS />}
          />
          <Route
            path="/integrations/LearningManagementSystem(LMS)Integration"
            element={<LearningManagement />}
          />
          <Route
            path="/integrations/ResearchCollaborationPlatformIntegration"
            element={<ResearchCollaboration />}
          />

          {/* integrations pages end */}

          {/* Procurement starts */}
          <Route path="/procurement" element={<Procurement />} />

          {/* This routes page is blog details */}
          <Route path="/procurement/blogDetails1" element={<BlogDetails1P />} />
          <Route path="/procurement/blogDetails2" element={<BlogDetails2P />} />
          <Route path="/procurement/blogDetails3" element={<BlogDetails2P />} />

          {/* Procurement end */}

          <Route
            path="/science_ai/blogDetailsSection"
            element={<HeroPSlogDetails />}
          />

          {/*  Sciences.ai starts */}
          <Route path="/sciences_ai" element={<Sciences_Ai />} />

          {/* This routes page is blog details */}
          <Route path="/sciences_ai/blogDetails1" element={<BlogDetails1S />} />
          <Route path="/sciences_ai/blogDetails2" element={<BlogDetails1S />} />
          <Route path="/sciences_ai/blogDetails3" element={<BlogDetails3S />} />

          {/* Sciences.ai end */}



          {/* Warehouse Page Starts  */}
          <Route path="/warehouse" element={<Warehouse />} />
          {/* BlogDetails Page Ends  */}

          <Route path="/ourTerms" element={<Home />} />
          <Route path="/legal" element={<Blog />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/reset-new-password" element={<ResetNewPassword />} />
          <Route path="/blog-article" element={<BlogArticle />} />
          {/* <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/> */}
          <Route path="/blogs" element={<Blogs />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
