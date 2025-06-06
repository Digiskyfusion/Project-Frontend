import { useEffect, useState } from "react";
import ContactUs from '../Components/ContactusPage/ContactUs'
import Mapcomponent from '../Components/ContactusPage/Mapcomponent'
import Mapsection from '../Components/ContactusPage/mapsection'
import ContactForm from '../Components/ContactusPage/ContactForm'
import Support from '../Components/ContactusPage/Support'
import Footer from '../Components/Footer/Footer'
import Secondsection from '../Components/HomePage/Secondsection'
import Header1 from "../Components/Freelancer/Header";
import Header2 from "../Components/Client/Header";
import HeaderGlobal from "../Components/Header"; // Import Global Header
import HiddenContContact from "../Components/ContactusPage/HiddenContContact";

function ContactUsPages() {
   const [roleType, setRoleType] = useState("");
  
    // Fetch roleType from user data (localStorage or API)
    useEffect(() => {
      const userData = localStorage.getItem("user"); // Get from localStorage
      if (userData) {
        try {
          const parsedData = JSON.parse(userData); // Parse JSON string
          console.log("parsedData");
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
       <div className="mt-20">
         <ContactUs />
        <HiddenContContact />
        <Secondsection />
        <div className='md:flex md:justify-between '>

            <div className='w-full px-5'>
                <Mapcomponent />
                <Mapsection  />
            </div>
            <div className='w-full '>
                <ContactForm />
            </div>
        </div>
        <Support />
       </div>

      <Footer />
      </div>
  )
}

export default ContactUsPages
