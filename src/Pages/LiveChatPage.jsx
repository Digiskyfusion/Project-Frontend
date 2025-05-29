import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Livechatcomponent from "../Components/LiveChatPage/Livechatcomponent";
import LiveChat from "../Components/LiveChatPage/Livechat";
import Footer from "../Components/Footer/Footer";
import Header1 from "../Components/Freelancer/Header";
import Header2 from "../Components/Client/Header";
import HeaderGlobal from "../Components/Header";

function LiveChatPage() {
  const { id } = useParams();
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
    <div className="flex flex-col min-h-screen">
    {roleType === "freelancer" ? (
       <Header1 />
    ) : roleType === "client" ? (
      <Header2 />
     ) : (
       <HeaderGlobal />
     )}

     {/* Make this grow to fill all remaining space */}
     <div className="flex flex-1 px-6 overflow-hidden  py-2">
       <div className="w-1/4  hidden  md:flex flex-col">
         <Livechatcomponent />
       </div>
       <div className="flex-1 ">
         <LiveChat recipientId={id} />
       </div>
     </div>

     <Footer />
   </div>
  );
}

export default LiveChatPage;