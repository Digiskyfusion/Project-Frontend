
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import AboutUsPage from "./Pages/AboutUsPage";
import ChooseUSPage from "./Pages/ChooseUSPage";
import LiveChatPage from "./Pages/LiveChatPage";
import AllFreelancerPage from "./Pages/AllFreelancerPage";
import DashboardPage from "./Pages/DashboardPage";
import FreelancerProfilePage from "./Pages/FreelancerProfilePage";
import FreelancreClientPage from "./Pages/FreelancreClientPage";
import FreelancerDetails from "./Components/FreelancerDetails";
import ClientFormPage from "./Pages/ClientFormPage";
import ContactUsPages from "./Pages/ContactUsPage";
import Signuppage from "./Components/Signuppage";
import SubCategoryPage from "./Pages/SubCategoryPage";
import Services from "./Pages/Services";
import Education from "./Components/Education";
import CardsProfile from "./Components/CardsProfile";
import Loginform from "./Components/LoginForm";
import Clientformmpage from "./Pages/Clientformmpage";
import ClientProfile from "./Components/Clientprofile";
import StarPlusPage from "./Pages/StarPlusPage";
import AdvertisingPage from "./Pages/AdvertisingPage";
import TvAdvertisingPage from "./Pages/TvAdvertisingPage";
import AjTakPage from "./Pages/AjTakPage";
import ColorPages from "./Pages/ColorPages";
import AsthaPage from "./Pages/AsthaPage";

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
        <Route path="/FreelancerNoUpadte" element={  <FreelancerProfilePage />} />
        <Route path="/FreelancreClientPage" element={ <FreelancreClientPage />} />
        <Route path="/FreelancerUpadte" element={  <FreelancerDetails />} />
        <Route path="/ClientForm" element={ <ClientFormPage />} />
        <Route path="/contactus" element={<ContactUsPages />} />
        <Route path="/registration" element={<Signuppage />} />
        <Route path="/Subcatagory" element={<SubCategoryPage />} />
        <Route path="/freelancerDetails" element={<Education  />} />
        <Route path="/clientDetails" element={<CardsProfile  />} />
        <Route path="/login" element={<Loginform  />} />
        <Route path="/client" element={<Clientformmpage />} />
        <Route path="/ClientProfile" element={<ClientProfile />} />
        <Route path="/ADCDPAGE" element={<StarPlusPage />} />
        <Route path="/starplus" element={<AdvertisingPage />} />
        <Route path="/TvAdvertising" element={<TvAdvertisingPage />} />
        <Route path="/ajtak" element={<AjTakPage />} />
        <Route path="/colors" element={<ColorPages />} />
        <Route path="/astha" element={<AsthaPage />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
