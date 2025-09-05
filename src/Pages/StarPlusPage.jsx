import React, { useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Confused from '../Components/StarPlusPage/Confused';
import Starplus from '../Components/StarPlusPage/Starplus';
import Header1 from "../Components/Freelancer/Header";
import Header2 from "../Components/Client/Header";
import HeaderGlobal from "../Components/Header"; // Import Global Header
function StarPlusPage() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token'); // Assuming you're storing the token in localStorage

  // Redirect to login if no token
  React.useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

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
      <Starplus />
      <Confused />
      <Footer />
    </div>
  )
}

export default StarPlusPage
