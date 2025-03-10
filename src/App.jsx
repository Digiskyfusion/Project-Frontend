
import { BrowserRouter, Route, Routes } from "react-router-dom";
<<<<<<< HEAD

import Navbar from "./Components/Navbar"
import Signuppage from "./Components/Signuppage"
import Education from "./Components/Education"
=======
import Navbar from "./Components/Navbar/Navbar"
import Signuppage from "./Components/SignupPage/Signuppage"
import Education from "./Components/EducationPage/Education"
>>>>>>> 5bdeadc (Fresh start with clean code)
import LiveChatPage from "./Pages/LiveChatPage"
import HomePage from "./Pages/HomePage"
import AboutUsPage from "./Pages/AboutUsPage"
import ContactUsPages from "./Pages/ContactUsPage"
<<<<<<< HEAD

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

import AllFreelancerPage from "./Pages/AllFreelancerPage";
import ChooseUSPage from "./Pages/ChooseUSPage";

import CardsProfile from "./Components/CardsProfile";
import Loginform from "./Components/LoginForm";
import Clientformmpage from "./Pages/Clientformmpage";
import ClientProfile from "./Components/Clientprofile";
=======
import ScrollToTop from "./Components/ScrolltopTop/ScrollToTop";
import Services from "./Pages/Services";
import DashboardPage from "./Pages/DashboardPage";
import FreelancerProfilePage from "./Pages/FreelancerProfilePage";
import FreelancerDetails from "./Components/FreelancerDetailPage/FreelancerDetails";
import FreelancreClientPage from "./Pages/FreelancreClientPage";
import ClientFormPage from "./Pages/ClientFormPage";
import AllFreelancerPage from "./Pages/AllFreelancerPage";
import ChooseUSPage from "./Pages/ChooseUSPage";
import CardsProfile from "./Components/CardProfilePage/CardsProfile";
import Loginform from "./Components/LoginPage/LoginForm";
import Clientformmpage from "./Pages/Clientformmpage";
import ClientProfile from "./Components/ClientProfile/Clientprofile";
>>>>>>> 5bdeadc (Fresh start with clean code)
import StarPlusPage from "./Pages/StarPlusPage";
import AdvertisingPage from "./Pages/AdvertisingPage";
import TvAdvertisingPage from "./Pages/TvAdvertisingPage";
import AjTakPage from "./Pages/AjTakPage";
import ColorPages from "./Pages/ColorPages";
import AsthaPage from "./Pages/AsthaPage";
<<<<<<< HEAD

import DetailPage from "./Components/DetailPage";
import TermsAndConditions from "./Components/Termsandcondition";

=======
>>>>>>> 5bdeadc (Fresh start with clean code)
import SubCategoryPage from "./Pages/SubCategoryPage";
import SolarSystemPage from "./Pages/SolarSystemPage";
import CartTvPage from "./Pages/CartTvPage";
import PostJobPage from "./Pages/PostJobPage";
import AllJobsPage from "./Pages/AllJobsPage";
<<<<<<< HEAD
import DiscoverHire from "./Components/Discoverhire";

=======
import DiscoverHire from "./Components/DiscoverPage/Discoverhire";
import FreelancerJobs from "./Components/FreelancerJobPage/FreelancerJob";
import MembershipPlans from "./Components/HomePage/Card";
>>>>>>> 5bdeadc (Fresh start with clean code)

function App() {
  

  return (
    <>

<BrowserRouter>
<<<<<<< HEAD
<ScrollToTop /> {/* Ensure this is inside BrowserRouter */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
=======
<ScrollToTop /> 
<Navbar />      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/MembershipPlans" element={<MembershipPlans />} />
>>>>>>> 5bdeadc (Fresh start with clean code)
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/ChooseUSPage" element={<ChooseUSPage />} />
        <Route path="/livechat" element={<LiveChatPage />} />
        <Route path="/allfreelancer" element={<AllFreelancerPage />} />
<<<<<<< HEAD
        <Route path="/service" element={ <Services />} /> 
        <Route path="/dashboard" element={ <DashboardPage />} /> 
        <Route path="/FreelancerNoUpadte" element={  <FreelancerProfilePage />} />
        <Route path="/FreelancreClientPage" element={ <FreelancreClientPage />} />
        <Route path="/FreelancerUpadte" element={  <FreelancerDetails />} />
        <Route path="/ClientForm" element={ <ClientFormPage />} />
        <Route path="/contactus" element={<ContactUsPages />} />
        <Route path="/registration" element={<Signuppage />} />
        <Route path="/Subcatagory" element={<SubCategoryPage />} />
=======
        <Route path="/service" element={ <Services />} />
        <Route path="/dashboard" element={ <DashboardPage />} /> 
        <Route path="/FreelancerNoUpadte" element={   <FreelancerProfilePage />} />
        <Route path="/FreelancreClientPage" element={    <FreelancreClientPage />} />
        <Route path="/FreelancerUpadte" element={    <FreelancerDetails />} />
        <Route path="/ClientForm" element={ <ClientFormPage />} />
        <Route path="/contactus" element={<ContactUsPages />} />
        <Route path="/registration" element={<Signuppage />} />
        <Route path="/Subcatagory" element={<SubCategoryPage  />} />
>>>>>>> 5bdeadc (Fresh start with clean code)
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
<<<<<<< HEAD

        <Route path="/detailpage" element={<DetailPage />} />

=======
>>>>>>> 5bdeadc (Fresh start with clean code)
        <Route path="/solarsystem" element={<SolarSystemPage />} />
        <Route path="/cart" element={<CartTvPage />} />
        <Route path="/postjob" element={<PostJobPage />} />
        <Route path="/all-jobs" element={<AllJobsPage />} />
<<<<<<< HEAD

      </Routes>
    </BrowserRouter>

    <TermsAndConditions />
=======
        <Route path="/freelancerjob" element={<FreelancerJobs />} />
      </Routes>
    </BrowserRouter>
>>>>>>> 5bdeadc (Fresh start with clean code)
    </>
  )
}

export default App
