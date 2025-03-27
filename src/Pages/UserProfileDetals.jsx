import { useEffect, useState } from 'react'
import ProfileDetails from '../Components/UserProfile/ProfileDetails'
import Footer from '../Components/Footer/Footer'
import Header1 from "../Components/Freelancer/Header";
import Header2 from "../Components/Client/Header";

function UserProfileDetals() {

     const [roleType, setRoleType] = useState("");
    
      // Fetch roleType from user data (localStorage or API)
      useEffect(() => {
        const userData = localStorage.getItem("user"); // Get from localStorage
        if (userData) {
          try {
            const parsedData = JSON.parse(userData); // Parse JSON string
            // console.log("parsedData");
            // console.log(parsedData);
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
     {/* Conditionally render headers based on roleType */}
     {roleType === "freelancer" ? <Header1 /> : <Header2 />}
      <ProfileDetails />
      <Footer />
    </div>
  )
}

export default UserProfileDetals
