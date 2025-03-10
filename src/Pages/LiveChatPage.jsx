<<<<<<< HEAD

import LiveChat from '../Components/Livechat';
import Livechatcomponent from '../Components/Livechatcomponent';
import Footer from '../Components/Footer';

function LiveChatPage() {
  return (
    <>
    <div className="flex px-6   ">
      
      {/* Left Sidebar (Contacts) */}
      <div className="w-1/4   shadow-md hidden md:flex flex-col">
        <Livechatcomponent />
        {/* Add more contacts dynamically */}
      </div>

      {/* Right Chat Window */}
      <div className="flex-1">
        <LiveChat />
      </div>

    </div>
    <Footer />
=======
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Livechatcomponent from "../Components/LiveChatPage/Livechatcomponent";
import LiveChat from "../Components/LiveChatPage/Livechatcomponent";
import Footer from "../Components/Footer/Footer";


function LiveChatPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if no token
    }
  }, [navigate]);

  return (
    <>
      <div className="flex px-6">
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
>>>>>>> 5bdeadc (Fresh start with clean code)
    </>
  );
}

export default LiveChatPage;
