import React, { useState, useEffect } from "react"; 
import { useNavigate } from "react-router-dom";
import FreelancerClientForm from "../Components/Freelancer/ProfileVerification";
import Footer from "../Components/Footer/Footer";
import Header1 from "../Components/Freelancer/Header";
import Header2 from "../Components/Client/Header";

function FreelancreClientPage() {
  const navigate = useNavigate();
  const [roleType, setRoleType] = useState(""); 

  // Fetch roleType from user data (localStorage or API)
  useEffect(() => {
    const userData = localStorage.getItem("user"); // Get from localStorage
    console.log("Raw userData:", userData);

    if (userData) {
      try {
        const parsedData = JSON.parse(userData); // Parse JSON string
        console.log("Parsed userData:", parsedData);

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
      
      {roleType === "freelancer" ? <Header1 /> : <Header2 />}
      <FreelancerClientForm />
      <Footer />
    </div>
  );
}

export default FreelancreClientPage;
