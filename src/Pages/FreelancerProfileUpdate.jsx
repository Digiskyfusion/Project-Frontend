import React, { useState, useEffect } from "react";
import FreelancersProfile from "../Components/Client/FreelancerProfile";
import Header2 from "../Components/Client/Header.jsx";
import Header1 from "../Components/Freelancer/Header.jsx";

function FreelancerProfileUpdate() {
  const [roleType, setRoleType] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setRoleType(parsedUser.roleType); 
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  useEffect(() => {
    console.log("Updated roleType:", roleType); 
  }, [roleType]);

  return (
    <div>
    
    {roleType === "freelancer" ? <Header1 /> :<Header2 /> }
      <FreelancersProfile />

      
    </div>
  );
}

export default FreelancerProfileUpdate;
