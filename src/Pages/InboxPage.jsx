import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Livechatcomponent from "../Components/LiveChatPage/Livechatcomponent";
import LiveChat from "../Components/LiveChatPage/Livechat";
import Footer from "../Components/Footer/Footer";
import Header1 from "../Components/Freelancer/Header";
import Header2 from "../Components/Client/Header";
import HeaderGlobal from "../Components/Header";

function InboxPage() {
  const navigate = useNavigate();
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

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

   return (
     <div className="flex flex-col min-h-screen">
       {roleType === "freelancer" ? (
         <Header1 />
       ) : roleType === "client" ? (
         <Header2 />
       ) : (
         <HeaderGlobal />
       )}

       {/* Make this grow to fill all remaining space */}
       <div className="flex flex-1 px-6 overflow-hidden">
         <div className="w-1/4 shadow-md hidden md:flex flex-col">
         <Livechatcomponent />
         </div>
         <div className="flex-1">
         <LiveChat recipientId={null} />
         </div>
       </div>

       <Footer />
     </div>
   );
}

export default InboxPage;