import React, { useEffect, useState } from 'react'
import SkillPage from '../Components/skillspage'
import Footer from '../Components/Footer/Footer'
import Header1 from "../Components/Freelancer/Header";
import Header2 from "../Components/Client/Header";
import HeaderGlobal from "../Components/Header"; // Import Global Header
import HiddenSkillContent from '../Components/SkillsHiddenContent/HiddenSkillContent';
function SkillsCardPage() {

    const [roleType, setRoleType] = useState(null);
  const [hasToken, setHasToken] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user"); // Get from localStorage
    const token = localStorage.getItem("token");    // Assuming token is stored here
    setHasToken(!!token); // true if token exists, false otherwise

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

 <HiddenSkillContent />
      <SkillPage />
    
    </div>
  )
}

export default SkillsCardPage
