import React from 'react';
import LiveChat from '../Components/Livechat';
import Livechatcomponent from '../Components/Livechatcomponent';

function LiveChatPage() {
  return (
    <div className="flex h-screen px-6   ">
      
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
  );
}

export default LiveChatPage;
