import React, { useEffect, useState } from 'react'
import Header1 from "../Components/Freelancer/Header";
import Header2 from "../Components/Client/Header";
import HeaderGlobal from "../Components/Header"; // Import Global Header
import NewHomeone from '../Components/NewHomePage/NewHomeone';
import Footer from '../Components/Footer/Footer';
import NewHomeFour from './../Components/NewHomePage/NewHomeFour';
import NewHomeZero from '../Components/NewHomePage/NewHomeZero';
import NewHomeTwo from './../Components/NewHomePage/NewHomeTwo';
import NewHomeFive from '../Components/NewHomePage/NewHomeFive';
import NewHomeSix from '../Components/NewHomePage/NewHomeSix';
import UserCarousel from '../Components/NewHomePage/UserCarousel';
function NewHomePage() {
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
    <>
     {roleType === "freelancer" ? (
  <Header1 />
) : roleType === "client" ? (
  <Header2 />
) : (
  <HeaderGlobal />
)}
      <NewHomeZero />
      <NewHomeone />
      {/* <NewHomeTwo /> */}
      <NewHomeFour />
    <NewHomeFive />
    <NewHomeSix />
    <UserCarousel />
      <Footer />
    </>
  )
}

export default NewHomePage
