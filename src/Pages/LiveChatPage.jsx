import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Livechatcomponent from "../Components/LiveChatPage/Livechatcomponent";
import LiveChat from "../Components/LiveChatPage/Livechat";
import Footer from "../Components/Footer/Footer";

function LiveChatPage() {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <>
      <div className="flex px-6">
        {/* Left Sidebar (Contacts) */}
        <div className="w-1/4 shadow-md hidden md:flex flex-col">
          <Livechatcomponent currentUserId={id} />
        </div>

        {/* Right Chat Window */}
        <div className="flex-1">
          <LiveChat recipientId={id} />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LiveChatPage;