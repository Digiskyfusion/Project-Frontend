
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar"
import SecondReviews from "./Components/SecondReviews"
import Cart from "./Components/Card"
import Carousel from "./Components/Carousel"
import CarouselSection from "./Components/CarouselSection"
import Category from "./Components/Category"
import Employ from "./Components/Employ"
import FirstSection from "./Components/FirstSection"
import FullJobCard from "./Components/FullJobCard"
import JobSection from "./Components/Jobsection"
import MeetFreelancer from "./Components/MeetFreelancer"
import ReviewSection from "./Components/ReviewSection"
import SecondReview from "./Components/SecondReviews"
import SecondSection from "./Components/Secondsection"
import Signuppage from "./Components/Signuppage"
import Work from "./Components/Work"
import Footer from "./Components/Footer"
import Thirdsection from "./Components/Thirdsection"
import Thirdsectionfivth from "./Components/Thirdsectionfivth"
import Thirdsectionseven from "./Components/Thirdsectionseven"
import Fourthsectioneight from "./Components/Fourthsectioneight"
import Fourthsectionfour from "./Components/Fourthsectionfour"
import Calltoaction from "./Components/Calltoaction"
import Contectus from "./Components/Contectus"
import Mapsection from "./Components/Mapsection"
import ContactForm from "./Components/ContactForm"
import Mapcomponent from "./Components/Mapcomponent"
import Cards from "./Components/ProfileCard"
import ProfileCard from "./Components/ProfileCard"
import Education from "./Components/Education"
import Livechat from "./Components/Livechat"
import Livechatcomponent from "./Components/Livechatcomponent"
import LiveChatPage from "./Pages/LiveChatPage"
import Card from "./Components/Card"
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
        <Route path="/service" element={ <Services />} />
        <Route path="/dashboard" element={ <DashboardPage />} />
        <Route path="/FreelancerNoUpadte" element={   <FreelancerProfilePage />} />
        <Route path="/FreelancreClientPage" element={    <FreelancreClientPage />} />
        <Route path="/FreelancerUpadte" element={    <FreelancerDetails />} />
        <Route path="/ClientForm" element={ <ClientFormPage />} />
        <Route path="/contactus" element={<ContactUsPages />} />
        <Route path="/registration" element={<Signuppage />} />
        <Route path="/Subcatagory" element={<Subcategory  />} />
      </Routes>
      <Footer />
    </BrowserRouter>
    {/* <HomePage /> */}
    {/* <AboutUsPage /> */}
    
     {/* <Navbar />
    <FirstSection />
    <SecondSection />
    <Signuppage />
   <Work />
   <CarouselSection />
   <Employ />
   <FullJobCard />
   <MeetFreelancer />
   <ReviewSection />
   <SecondReview /> 

    <Thirdsection /> 
   <Thirdsectionfivth />
   <Thirdsectionseven /> 
    <Fourthsectioneight /> 

   <Fourthsectionfour /> 
   <Calltoaction />
   <Contectus />

   <Mapsection />
   <ContactForm />
   <Mapcomponent />
  
   <ProfileCard />
   <Education />
   <Card />
    <Livechatcomponent />
   <Livechat />
   <LiveChatPage /> */}

   {/* <Subcategory /> */}
                  
    </>
  )
}

export default App
