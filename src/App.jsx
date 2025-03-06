
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"
import Signuppage from "./Components/Signuppage"

import Education from "./Components/Education"
import LiveChatPage from "./Pages/LiveChatPage"


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
import TvAdvertising from "./Pages/TvAdvertisingPage";
import Loginform from "./Components/Loginform";
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
        <Route path="/FreelancerNoUpadte" element={   <FreelancerProfilePage />} />
        <Route path="/FreelancreClientPage" element={    <FreelancreClientPage />} />
        <Route path="/FreelancerUpadte" element={    <FreelancerDetails />} />
        <Route path="/ClientForm" element={ <ClientFormPage />} />
        <Route path="/contactus" element={<ContactUsPages />} />
        <Route path="/registration" element={<Signuppage />} />
        <Route path="/Subcatagory" element={<SubCategoryPage  />} />
        <Route path="/freelancerDetails" element={<Education  />} />
        <Route path="/clientDetails" element={<CardsProfile  />} />
        <Route path="/channel" element={<TvAdvertising  />} />
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
