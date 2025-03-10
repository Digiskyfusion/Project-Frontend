import React, { useState, useRef, useEffect } from "react";
import { FiPhone, FiVideo } from "react-icons/fi";
import first from "./../assets/Images/first.png";
import Livechatcomponent from "./Livechatcomponent";
import { MdOutlineSend } from "react-icons/md";
const LiveChat = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I help you?", timestamp: new Date() },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef(null);

  const sendMessage = () => {
    if (input.trim() === "") return;

    setMessages([...messages, { sender: "user", text: input, timestamp: new Date() }]);
    setInput("");

    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "Thanks for your message!", timestamp: new Date() },
      ]);
    }, 1000);
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
   <>
    <div className="">

    
    <div className="w-full   h-screen flex flex-col  shadow-lg rounded-r-lg ">
      
      {/* Header with Image on Left & Call Icons on Right */}
      <div className="bg-[#004930] text-white p-4 flex items-center rounded-r-lg">
        <img src={first} alt="Profile" className="w-10 h-10 rounded-full mr-3" />
        <h1 className="font-semibold text-lg flex-1">Manisha Thakur</h1>
        <div className="flex gap-3">
          <button className="p-2 bg-white rounded-full text-green-600 hover:bg-green-200">
            <FiVideo size={20} />
          </button>
          <button className="p-2 bg-white rounded-full text-green-600 hover:bg-green-200">
            <FiPhone size={20} />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-2 max-w-xs rounded-lg ${
              msg.sender === "user" ? "bg-[#004930] text-white ml-auto" : "bg-gray-300 text-gray-800"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      {/* Chat Input Box */}
      <div className="p-3 bg-white flex items-center gap-2 border-t">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 outline-0"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <p className="px-4 py-2  text-4xl text-black " onClick={sendMessage}>
        <MdOutlineSend className="cursor-pointer" />
        </p>
      </div>
    </div>

    </div>

    </>
  );
};

export default LiveChat;
