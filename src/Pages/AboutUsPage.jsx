import { useEffect, useState } from "react";
import Footer from "../Components/Footer/Footer";
import About from "../Components/AboutusPage/About";
import Calltoaction from "../Components/AboutusPage/Calltoaction";
import Feature from "../Components/AboutusPage/Feature";
import Fourthsectionfour from "../Components/AboutusPage/Fourthsectionfour";
import ImageCarousel from "../Components/AboutusPage/ImageCarousel";
import SecondReviews from "../Components/AboutusPage/SecondReviews";
import SquareCards from "../Components/AboutusPage/SquareCard";
import MeetFreelancer from "../Components/HomePage/MeetFreelancer";
import Header1 from "../Components/Freelancer/Header";
import Header2 from "../Components/Client/Header";
import HeaderGlobal from "../Components/Header"; // Import Global Header
import HiddenConOne from "../Components/AboutusPage/HiddenConOne";
import HiddenFooterCon from "../Components/Footer/HiddenFooterCon";

function AboutUsPage() {
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
    <main className="mt-20">
      <About />
      <HiddenConOne />
      <HiddenFooterCon />
      <ImageCarousel />

      {/* How it Works Section */}
      <section className="my-8">
        <h1 className="text-center text-lg md:text-2xl lg:text-3xl font-bold mb-5">
          How it Works
        </h1>
        <SquareCards />
      </section>

      <Fourthsectionfour />
      <div className="my-8">
        <h1 className="text-center text-lg md:text-2xl lg:text-3xl font-bold mb-5">Features</h1>
        <Feature />
      </div>
      <MeetFreelancer />
      {/* <Fourthsectioneight /> */}
      <Calltoaction />
      <SecondReviews />
    </main>
    <Footer />
    </div>
  );
}

export default AboutUsPage;
