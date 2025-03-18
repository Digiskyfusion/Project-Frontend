import { BrowserRouter, Route, Routes } from "react-router-dom";
import LiveChatPage from "./Pages/LiveChatPage"
import HomePage from "./Pages/HomePage"
import AboutUsPage from "./Pages/AboutUsPage"
import ContactUsPages from "./Pages/ContactUsPage"
import ScrollToTop from "./Components/ScrolltopTop/ScrollToTop";
import Services from "./Pages/Services";
import ChooseUSPage from "./Pages/ChooseUSPage";
import AllFreelancerPage from "./Pages/AllFreelancerPage";
import DashboardPage from "./Pages/DashboardPage";
import FreelancerProfilePage from "./Pages/FreelancerProfilePage";
import FreelancerDetails from "./Components/FreelancerDetailPage/FreelancerDetails";
import FreelancreClientPage from "./Pages/FreelancreClientPage";
import ClientFormPage from "./Pages/ClientFormPage";
import CardsProfile from "./Components/CardProfilePage/CardsProfile";
import Loginform from "./Components/LoginPage/LoginForm";
import SubCategoryPage from "./Pages/SubCategoryPage";
import Clientformmpage from "./Pages/Clientformmpage";
import ClientProfile from "./Components/ClientProfile/Clientprofile";
import StarPlusPage from "./Pages/StarPlusPage";
import AdvertisingPage from "./Pages/AdvertisingPage";
import TvAdvertisingPage from "./Pages/TvAdvertisingPage";
import AjTakPage from "./Pages/AjTakPage";
import ColorPages from "./Pages/ColorPages";
import AsthaPage from "./Pages/AsthaPage";
import DetailPage from "./Components/SubCategoryPage/DetailPage";
import SolarSystemPage from "./Pages/SolarSystemPage";
import CartTvPage from "./Pages/CartTvPage";
import PostJobPage from "./Pages/PostJobPage";
import AllJobsPage from "./Pages/AllJobsPage";
import FreelancerJobs from "./Components/FreelancerJobPage/FreelancerJob";
import MembershipPlans from "./Components/HomePage/Card";
import DiscoverHire from "./Components/DiscoverPage/Discoverhire";
import ReviewForm from "./Components/ReviewForm/ReviewForm";
import ReviewList from "./Components/ReviewForm/ReviewList";
import TermAndConditionPage from "./Pages/TermAndConditionPage";
import PrivacyNdPolicyPage from "./Pages/PrivacyNdPolicyPage";
import CancellationRefundPage from "./Pages/CancellationRefundPage";
import Navbar from "./Components/Navbar/Navbar";
import Content from "./Components/RandomContent/Content";
import Signuppage from "./Components/SignupPage/Signuppage";
import Education from "./Components/EducationPage/Education";
import FullJobCard from "./Components/ServicePage/FullJobCard";
import SquareCards from "./Components/AboutusPage/SquareCard";
import Work from "./Components/HomePage/Work";





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
        <Route path="/contactus" element={<ContactUsPages />} />
        <Route path="/registration" element={<Signuppage />} />
        <Route path="/Subcatagory" element={<SubCategoryPage />} />
        <Route path="/ClientForm" element={ <ClientFormPage />} />
        <Route path="/contactus" element={<ContactUsPages />} />
        <Route path="/freelancerDetails" element={<Education  />} />
        <Route path="/clientDetails" element={<CardsProfile  />} />
        <Route path="/login" element={<Loginform  />} />
        <Route path="/discover" element={<DiscoverHire   />} />
        <Route path="/client" element={<Clientformmpage />} />
        <Route path="/ClientProfile" element={<ClientProfile />} />
        <Route path="/ADCDPAGE" element={<StarPlusPage />} />
        <Route path="/channel" element={<TvAdvertisingPage />} />
        <Route path="/starplus" element={<AdvertisingPage />} />
        <Route path="/ajtak" element={<AjTakPage />} />
        <Route path="/colors" element={<ColorPages />} />
        <Route path="/astha" element={<AsthaPage />} />
        <Route path="/detailpage" element={<DetailPage />} />
        <Route path="/solarsystem" element={<SolarSystemPage />} />
        <Route path="/card" element={<MembershipPlans />} />
        <Route path="/FullJobCard" element={<FullJobCard />} />
        <Route path="/SquareCards" element={<SquareCards />} />
        <Route path="/TermCondition" element={<TermAndConditionPage />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/Work" element={<Work />} />
        <Route path="/PrivacyNdPolicy" element={<PrivacyNdPolicyPage />} />
        <Route path="/CancellationNdRefund" element={<CancellationRefundPage />} />
        <Route path="/cart" element={<CartTvPage />} />
        <Route path="/postjob" element={<PostJobPage />} />
        <Route path="/all-jobs" element={<AllJobsPage />} />
        <Route path="/freelancerjob" element={<FreelancerJobs />} />
        <Route path="/createreview" element={<ReviewForm />} />
        <Route path="/reviewslist" element={<ReviewList />} />
      </Routes>
    </BrowserRouter>
   
  
    </>
  )
}

export default App
