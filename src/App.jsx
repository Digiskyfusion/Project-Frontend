
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Signuppage from "./Components/Signuppage"
import ProfileCard from "./Components/ProfileCard"
import Education from "./Components/Education"
import LiveChatPage from "./Pages/LiveChatPage"
import Footer from "./Components/Footer"
import ProfileCard from "./Components/ProfileCard"
import Education from "./Components/Education"
import LiveChatPage from "./Pages/LiveChatPage"
import Subcategory from "./Components/Subcategory"
import HomePage from "./Pages/HomePage"
import AboutUsPage from "./Pages/AboutUsPage"
import ContactUsPages from "./Pages/ContactUsPage"
import ScrollToTop from "./Components/ScrollToTop";
import Services from "./Pages/Services";
import DashboardPage from "./Pages/DashboardPage";
import FreelancerProfilePage from "./Pages/FreelancerProfilePage";
import FreelancerDetails from "./Components/FreelancerDetails";
import FreelancreClientPage from "./Pages/FreelancreClientPage";
import ClientFormPage from "./Pages/ClientFormPage";
import ChooseUSPage from "./Pages/ChooseUSPage";
import CardsProfile from "./Components/CardsProfile";
import SubCategoryPage from "./Pages/SubCategoryPage";
import AllFreelancerPage from "./Pages/AllFreelancerPage";
import ForgetPasswordPage from "./Pages/ForgetPasswordPage";
import ResetpasswordPage from "./Pages/ResetpasswordPage";

function App() {
  

  return (
    <>

<BrowserRouter>
<ScrollToTop /> {/* Ensure this is inside BrowserRouter */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/ChooseUSPage" element={<ChooseUSPage />} />
        <Route path="/livechat" element={<LiveChatPage />} />
        <Route path="/allfreelancer" element={<AllFreelancerPage />} />
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
        <Route path="/forget-password" element={<ForgetPasswordPage  />} />
        <Route path="/resetpassword" element={<ResetpasswordPage  />} />
        <Route path="/channel" element={<TvAdvertising  />} />
      </Routes>
    </BrowserRouter>
   
    </>
  )
}

export default App
