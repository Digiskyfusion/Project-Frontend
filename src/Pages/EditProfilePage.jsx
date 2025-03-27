import React, { useEffect, useState } from 'react'
import UserEdit from './EditProfile'
import Header1 from "../Components/Freelancer/Header";
import Header2 from "../Components/Client/Header";
import { useNavigate } from "react-router-dom";
import Footer from '../Components/Footer/Footer';
function EditProfilePage() {
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
      {/* Conditionally render headers based on roleType */}
      {roleType === "freelancer" ? <Header1 /> : <Header2 />}
      <UserEdit />
      <Footer />
    </div>
  )
}

export default EditProfilePage
