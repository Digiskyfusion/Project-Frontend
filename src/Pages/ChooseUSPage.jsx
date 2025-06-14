import { useEffect, useState } from "react";
import Footer from '../Components/Footer/Footer'
import ThirdSectionFirst from "../Components/ChoosePage/ThirdSectionFirst"
import Thirdsection from "../Components/ChoosePage/Thirdsection"
import Thirdsectionfivth from "../Components/ChoosePage/Thirdsectionfivth"
import ProjectSection from "../Components/ChoosePage/ProjectSection"
import MeetFreelancer from '../Components/HomePage/MeetFreelancer'
import Fourthsectionfour from '../Components/AboutusPage/Fourthsectionfour'
import Header1 from "../Components/Freelancer/Header";
import Header2 from "../Components/Client/Header";
import HeaderGlobal from "../Components/Header"; // Import Global Header
import HiddenCont from "../Components/ChoosePage/HiddenCont";

function ChooseUSPage() {
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
  <div className="">
    
    <ThirdSectionFirst />
    <HiddenCont />
      <MeetFreelancer />
      <ProjectSection />
      <Thirdsection />
      <Fourthsectionfour />
      <Thirdsectionfivth />
  </div>
      <Footer />
    </div>
  )
}

export default ChooseUSPage
