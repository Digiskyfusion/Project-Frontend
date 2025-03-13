import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Signuppage from "./Components/Signuppage"
import Education from "./Components/Education"
import LiveChatPage from "./Pages/LiveChatPage"
import HomePage from "./Pages/HomePage"
import AboutUsPage from "./Pages/AboutUsPage"
import ContactUsPages from "./Pages/ContactUsPage"
import ScrollToTop from "./Components/ScrollToTop";
// import Navbar from "./Components/Navbar";
// import HomePage from "./Pages/HomePage";
// import AboutUsPage from "./Pages/AboutUsPage";
import ChooseUSPage from "./Pages/ChooseUSPage";
// import LiveChatPage from "./Pages/LiveChatPage";
import AllFreelancerPage from "./Pages/AllFreelancerPage";
import DashboardPage from "./Pages/DashboardPage";
import FreelancerProfilePage from "./Pages/FreelancerProfilePage";
import FreelancerDetails from "./Components/FreelancerDetailPage/FreelancerDetails";
import FreelancreClientPage from "./Pages/FreelancreClientPage";
import ClientFormPage from "./Pages/ClientFormPage";
// import ContactUsPages from "./Pages/ContactUsPage";
// import Signuppage from "./Components/Signuppage";
import SubCategoryPage from "./Pages/SubCategoryPage";
import Services from "./Pages/Services";
// import Education from "./Components/Education";
// import AllFreelancerPage from "./Pages/AllFreelancerPage";
// import ChooseUSPage from "./Pages/ChooseUSPage";
import CardsProfile from "./Components/CardsProfile";
import Loginform from "./Components/LoginForm";
import Clientformmpage from "./Pages/Clientformmpage";
import ClientProfile from "./Components/ClientProfile/Clientprofile";
import StarPlusPage from "./Pages/StarPlusPage";
import AdvertisingPage from "./Pages/AdvertisingPage";
import TvAdvertisingPage from "./Pages/TvAdvertisingPage";
import AjTakPage from "./Pages/AjTakPage";
import ColorPages from "./Pages/ColorPages";
import AsthaPage from "./Pages/AsthaPage";
import DetailPage from "./Components/DetailPage";
// import SubCategoryPage from "./Pages/SubCategoryPage";
import SolarSystemPage from "./Pages/SolarSystemPage";
import CartTvPage from "./Pages/CartTvPage";
import PostJobPage from "./Pages/PostJobPage";
import AllJobsPage from "./Pages/AllJobsPage";
import DiscoverHire from "./Components/Discoverhire";
import MembershipPlans from "./Components/Card";
import FullJOBCard from "./Components/FullJobCard"
import SquareCards from "./Components/SquareCard";
import TermAndConditionPage from "./Pages/TermAndConditionPage";
import Content from "./Components/Content";
import Work from "./Components/Work";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyNdPolicy";
import CancellationNdRefund from "./Components/CancellationRefund/CancellationNdRefund";
import PrivacyNdPolicyPage from "./Pages/PrivacyNdPolicyPage";
import CancellationRefundPage from "./Pages/CancellationRefundPage";





function App() {
  

  return (
    <>

<BrowserRouter>
<ScrollToTop /> 
<Navbar />      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MembershipPlans" element={<MembershipPlans />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/ChooseUSPage" element={<ChooseUSPage />} />
        <Route path="/livechat" element={<LiveChatPage />} />
        <Route path="/allfreelancer" element={<AllFreelancerPage />} />
        <Route path="/service" element={ <Services />} /> 
        <Route path="/dashboard" element={ <DashboardPage />} /> 
        <Route path="/FreelancerNoUpadte" element={  <FreelancerProfilePage />} />
        <Route path="/FreelancreClientPage" element={ <FreelancreClientPage />} />
        <Route path="/FreelancerUpadte" element={  <FreelancerDetails />} />
        <Route path="/ClientForm" element={ <ClientFormPage />} />
        <Route path="/contactus" element={<ContactUsPages />} />
        <Route path="/registration" element={<Signuppage />} />
        <Route path="/Subcatagory" element={<SubCategoryPage />} />
        <Route path="/service" element={ <Services />} />
        <Route path="/dashboard" element={ <DashboardPage />} /> 
        <Route path="/FreelancerNoUpadte" element={   <FreelancerProfilePage />} />
        <Route path="/FreelancreClientPage" element={    <FreelancreClientPage />} />
        <Route path="/FreelancerUpadte" element={    <FreelancerDetails />} />
        <Route path="/ClientForm" element={ <ClientFormPage />} />
        <Route path="/contactus" element={<ContactUsPages />} />
        <Route path="/registration" element={<Signuppage />} />
        <Route path="/Subcatagory" element={<SubCategoryPage  />} />
        <Route path="/freelancerDetails" element={<Education  />} />
        <Route path="/clientDetails" element={<CardsProfile  />} />
        <Route path="/login" element={<Loginform  />} />
        {/* <Route path="/discover" element={<DiscoverHire   />} /> */}
        <Route path="/client" element={<Clientformmpage />} />
        <Route path="/ClientProfile" element={<ClientProfile />} />
        <Route path="/ADCDPAGE" element={<StarPlusPage />} />
        <Route path="/channel" element={<TvAdvertisingPage />} />
        <Route path="/starplus" element={<AdvertisingPage />} />
        <Route path="/ajtak" element={<AjTakPage />} />
        <Route path="/colors" element={<ColorPages />} />
        <Route path="/astha" element={<AsthaPage />} />

        {/* <Route path="/detailpage" element={<DetailPage />} /> */}

        <Route path="/solarsystem" element={<SolarSystemPage />} />
        <Route path="/cart" element={<CartTvPage />} />
        <Route path="/postjob" element={<PostJobPage />} />
        <Route path="/all-jobs" element={<AllJobsPage />} />
        <Route path="/card" element={<MembershipPlans />} />
        <Route path="/FullJobCard" element={<FullJOBCard />} />
        <Route path="/SquareCards" element={<SquareCards />} />
        <Route path="/TermCondition" element={<TermAndConditionPage />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/PrivacyNdPolicy" element={<PrivacyNdPolicyPage />} />
        <Route path="/CancellationNdRefund" element={<CancellationRefundPage />} />

      </Routes>
    </BrowserRouter>

   
    

  
    </>
  )
}

export default App
