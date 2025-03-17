import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Signuppage from "./Components/SignupPage/Signuppage";
import Education from "./Components/EducationPage/Education";
import Chat from "./Pages/Chat";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ContactUsPages from "./Pages/ContactUsPage";
import ScrollToTop from "./Components/ScrolltopTop/ScrollToTop";
import ChooseUSPage from "./Pages/ChooseUSPage";
import AllFreelancerPage from "./Pages/AllFreelancerPage";
import DashboardPage from "./Pages/DashboardPage";
import FreelancerProfilePage from "./Pages/FreelancerProfilePage";
import FreelancerDetails from "./Components/FreelancerDetailPage/FreelancerDetails";
import FreelancreClientPage from "./Pages/FreelancreClientPage";
import ClientFormPage from "./Pages/ClientFormPage";
import SubCategoryPage from "./Pages/SubCategoryPage";
import Services from "./Pages/Services";
import CardsProfile from "./Components/CardProfilePage/CardsProfile";
import Loginform from "./Components/LoginPage/LoginForm";
import ClientProfile from "./Components/ClientProfile/Clientprofile";
import StarPlusPage from "./Pages/StarPlusPage";
import AdvertisingPage from "./Pages/AdvertisingPage";
import TvAdvertisingPage from "./Pages/TvAdvertisingPage";
import AjTakPage from "./Pages/AjTakPage";
import ColorPages from "./Pages/ColorPages";
import AsthaPage from "./Pages/AsthaPage";
import SolarSystemPage from "./Pages/SolarSystemPage";
import CartTvPage from "./Pages/CartTvPage";
import PostJobPage from "./Pages/PostJobPage";
import AllJobsPage from "./Pages/AllJobsPage";
import TermAndConditionPage from "./Pages/TermAndConditionPage";
import PrivacyNdPolicyPage from "./Pages/PrivacyNdPolicyPage";
import CancellationRefundPage from "./Pages/CancellationRefundPage";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/ChooseUSPage" element={<ChooseUSPage />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/allfreelancer" element={<AllFreelancerPage />} />
        <Route path="/service" element={<Services />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/FreelancerNoUpadte" element={<FreelancerProfilePage />} />
        <Route path="/FreelancreClientPage" element={<FreelancreClientPage />} />
        <Route path="/FreelancerUpadte" element={<FreelancerDetails />} />
        <Route path="/ClientForm" element={<ClientFormPage />} />
        <Route path="/contactus" element={<ContactUsPages />} />
        <Route path="/registration" element={<Signuppage />} />
        <Route path="/Subcatagory" element={<SubCategoryPage />} />
        <Route path="/freelancerDetails" element={<Education />} />
        <Route path="/clientDetails" element={<CardsProfile />} />
        <Route path="/login" element={<Loginform />} />
        <Route path="/ClientProfile" element={<ClientProfile />} />
        <Route path="/ADCDPAGE" element={<StarPlusPage />} />
        <Route path="/channel" element={<TvAdvertisingPage />} />
        <Route path="/starplus" element={<AdvertisingPage />} />
        <Route path="/ajtak" element={<AjTakPage />} />
        <Route path="/colors" element={<ColorPages />} />
        <Route path="/astha" element={<AsthaPage />} />
        <Route path="/solarsystem" element={<SolarSystemPage />} />
        <Route path="/cart" element={<CartTvPage />} />
        <Route path="/postjob" element={<PostJobPage />} />
        <Route path="/all-jobs" element={<AllJobsPage />} />
        <Route path="/TermCondition" element={<TermAndConditionPage />} />
        <Route path="/PrivacyNdPolicy" element={<PrivacyNdPolicyPage />} />
        <Route path="/CancellationNdRefund" element={<CancellationRefundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
