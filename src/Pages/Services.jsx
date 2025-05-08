
import { useEffect, useState } from "react";
import SecondReviews from "../Components/AboutusPage/SecondReviews"
import Footer from "../Components/Footer/Footer"
import CarouselSection from "../Components/HomePage/CarouselSection"
import Employ from "../Components/ServicePage/Employ"
import FullJobCard from "../Components/ServicePage/FullJobCard"
import Platform from "../Components/ServicePage/Platform"
import Header1 from "../Components/Freelancer/Header";
import Header2 from "../Components/Client/Header";
import HeaderGlobal from "../Components/Header"; // Import Global Header
import HiddenCont from "../Components/ServicePage/hiddenCont";


function Services() {
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

        <Platform />
        <HiddenCont />
        <Employ />
        <CarouselSection />
        <FullJobCard />
        <SecondReviews />
        <Footer />
    </div>
        )
}

export default Services
