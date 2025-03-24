import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Livechatcomponent from "../Components/LiveChatPage/Livechatcomponent";
import LiveChat from "../Components/LiveChatPage/Livechat";
import Footer from "../Components/Footer/Footer";
import Header1 from "../Components/Freelancer/Header";
import Header2 from "../Components/Client/Header";

function LiveChatPage() {
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
    <>
     {/* Conditionally render headers based on roleType */}
     {roleType === "freelancer" ? <Header1 /> : <Header2 />}
      <div className="flex md:px-3">
        {/* Left Sidebar (Contacts) */}
        <div className="w-1/4 shadow-md hidden md:flex flex-col">
          <Livechatcomponent />
        </div>

        {/* Right Chat Window */}
        <div className="flex-1">
          <LiveChat />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LiveChatPage;
