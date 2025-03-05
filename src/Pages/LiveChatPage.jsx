
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
    </>
  );
}

export default LiveChatPage;
