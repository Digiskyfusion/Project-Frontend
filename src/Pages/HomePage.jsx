import { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import FirstSection from "../Components/HomePage/FirstSection";
import Secondsection from "../Components/HomePage/Secondsection";
import SolarSystem from "../Components/HomePage/SolarSystem";
import Work from "../Components/HomePage/Work";
import ReviewSection from "../Components/HomePage/ReviewSection";
import CarouselSection from "../Components/HomePage/CarouselSection";
import MeetFreelancer from "../Components/HomePage/MeetFreelancer";
import Header1 from "../Components/Freelancer/Header";
import Header2 from "../Components/Client/Header";
import HeaderGlobal from "../Components/Header"; // Import Global Header
// import MembershipPlans from "../Components/HomePage/Card";
// import MembershipPlans from "../Components/HomePage/Card";

function HomePage() {
  const [roleType, setRoleType] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user"); // Get from localStorage
    if (userData) {
      try {
        const parsedData = JSON.parse(userData); // Parse JSON string
        console.log(parsedData);
        
        if (parsedData && parsedData.roleType) {
          setRoleType(parsedData.roleType); // Set roleType state
        }
      } catch (error) {
        console.error("Error parsing userInfo:", error);
      }
    }
  }, []);

  return (
    <div>
     {roleType === "freelancer" ? (
  <Header1 />
) : roleType === "client" ? (
  <Header2 />
) : (
  <HeaderGlobal />
)}

      <FirstSection />
      <Secondsection />
      <SolarSystem />
      {/* <MembershipPlans /> */}
      <Work />
      <ReviewSection />
      <CarouselSection />
      <MeetFreelancer />
      <Footer />
    </div>
  );
}

export default HomePage;
