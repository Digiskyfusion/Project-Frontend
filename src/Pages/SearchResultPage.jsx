import React, { useEffect, useState } from 'react'
import SearchResults from '../Components/ServicePage/SearchResults'
import Footer from '../Components/Footer/Footer'
import Header1 from "../Components/Freelancer/Header";
import Header2 from "../Components/Client/Header";
import HeaderGlobal from "../Components/Header"; // Import Global Header
function SearchResultPage() {

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

    <SearchResults />
    <Footer />
      
    </>
  )
}

export default SearchResultPage
