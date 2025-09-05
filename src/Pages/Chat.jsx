import { useState, useEffect, useContext } from "react";
import noimage from "../assets/Images/userimage.png";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";
import { FaArrowLeft } from "react-icons/fa";
import axios from "axios";


const Chat = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { chatId } = location.state || {};
  const [chats, setChats] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const { userInfo } = useContext(UserContext);
  const [roleType, setRoleType] = useState("");

  useEffect(() => {
    console.log("Logged-in User Info:", userInfo);
    if (userInfo) fetchChats(); // Ensure chats are fetched when userInfo is available
  }, [userInfo]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchChats();
      if (selectedChat) {
        fetchMessages(selectedChat._id);
      }
    }, 5000); // Fetch data every 10 seconds
  
    return () => clearInterval(interval); // Cleanup on unmount
  }, [selectedChat]);
  

  const fetchChats = async () => {
    try {
      const token = localStorage.getItem("token"); 
      const response = await axios.get(`${API_URL}/user/chat/fetch-chats`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const filteredChats = response.data.filter(
        (chat) =>
          chat.user1._id === userInfo._id || chat.user2._id === userInfo._id
      );

      setChats(filteredChats);

      if (chatId) {
        const chat = filteredChats.find((c) => c._id === chatId);
        if (chat) selectChat(chat);
      }
    } catch (error) {
      console.error("Error fetching chats:", error.response?.data || error.message);
    }
  };

  const fetchMessages = async (chatId) => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`${API_URL}/user/chat/fetch-message/${chatId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setMessages(response.data);
    } catch (error) {
      console.error("Error fetching messages:", error.response?.data || error.message);
    }
  };

  const sendMessage = async () => {
    if (!newMessage.trim()) {
        console.log("No message to send. Input is empty.");
        return;
    }

    try {
        const token = localStorage.getItem("token");

        // Send the message with chatId, content, and roleType
        await axios.get(`${API_URL}/user/chat/new-message`,
            {
                chatId: selectedChat._id,
                content: newMessage,
                roleType, // Include the roleType in the request
            },
            { headers: { Authorization: `Bearer ${token}` } }
        );
        // Fetch updated messages
        fetchMessages(selectedChat._id);
        setNewMessage(""); // Clear the input field
    } catch (error) {
        fetchMessages(selectedChat._id);
        console.error("Error sending message:", error.response);
        setNewMessage(""); // Clear the input even if there's an error
    }
};

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
      fetchMessages(selectedChat._id)
    }
  };

  const selectChat = (chat) => {
    setSelectedChat(chat);
    fetchMessages(chat._id);
  };

  useEffect(() => {
    const chatContainer = document.querySelector(".messages-container");
    if (chatContainer) {
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }, [messages]);

  const handleBackClick = () => {
    if (window.innerWidth <= 768) {
      setSelectedChat(null); // Show user list in mobile view
    } else {
      navigate("/"); // Redirect to home page on larger screens
    }
  };

  // Automatically reload the page only on redirection
  useEffect(() => {
    const shouldReload = sessionStorage.getItem("shouldReload");
    if (!shouldReload) {
      sessionStorage.setItem("shouldReload", "true");
      window.location.reload();
    }
  }, []);

  // Fetch roleType from userInfo on component mount
  useEffect(() => {
    if (userInfo && userInfo.roleType) {
      setRoleType(userInfo.roleType);
    }
  }, [userInfo]);

  return (
    <div className="h-screen flex flex-col bg-gray-100">
      {roleType === "freelancer" ? <Header2 /> : <Header1 />}
      <div className="flex flex-1 overflow-hidden">
        {/* Chat List */}

        <div className={`transition-all duration-300 ${selectedChat ? "w-1/3 md:flex hidden" : "w-full md:w-1/3"} bg-white shadow-lg overflow-y-auto`}>
  <div className="p-2 w-[100%]">
    {chats.length > 0 ? (
      chats.map((chat) => (
        <div
          key={chat._id}
          onClick={() => selectChat(chat)}
          className={`flex items-center p-3 rounded-lg cursor-pointer ${selectedChat?._id === chat._id ? "bg-blue-100" : "hover:bg-gray-200"}`}
        >
          <img
            className="flex-shrink-0 w-10 h-10 rounded-full"
            src={
              chat.user1._id === userInfo._id
                ? chat.user2.user_image || noimage
                : chat.user1.user_image || noimage
            }
            alt="User"
          />
          <div className="ml-3">
            <div className="text-sm font-semibold">
              {chat.user1._id === userInfo._id
                ? chat.user2.name
                : chat.user1.name || "Unknown User"}
            </div>
            <div className="text-xs text-gray-500">
              {chat.latestMessage?.content || "No messages yet"}
            </div>
          </div>
        </div>
      ))
    ) : (
      <div className="text-center text-gray-500 p-4">
        <p>No chats have been started yet.</p>
      </div>
    )}
  </div>
</div>


        {/* Chat Messages */}
        <div className={`transition-all duration-300 ${selectedChat ? "w-full" : "hidden"} md:w-2/3 flex flex-col bg-gray-50`}>       
           {selectedChat ? (
            <>
            
              {/* Chat Header */}
              <div className="flex items-center p-4 bg-blue-600 text-white">
                <Link to="#" onClick={handleBackClick}>
                  <FaArrowLeft className="me-2 text-[20px]" />
                </Link>
                <img
                  className="flex-shrink-0 w-10 h-10 rounded-full"
                  src={
                    selectedChat.user1._id === userInfo._id
                      ? selectedChat.user2.user_image || noimage
                      : selectedChat.user1.user_image || noimage
                  }
                  alt="User"
                />
                <div className="ml-3 text-lg font-semibold">
                  {selectedChat.user1._id === userInfo._id
                    ? selectedChat.user2.name
                    : selectedChat.user1.name || "Chat"}
                </div>
              </div>

              {/* Messages List */}
              <div className="flex-1 overflow-y-scroll p-4 messages-container">
                {messages.map((message) => (
                  <div
                    key={message._id}
                    className={`flex mb-4 items-end ${message.sender_id._id === userInfo._id ? "justify-end" : "justify-start"}`}
                  >
                    {message.sender_id._id !== userInfo._id && (
                      <img
                        src={
                          selectedChat.user1._id === userInfo._id
                            ? selectedChat.user2.user_image || noimage
                            : selectedChat.user1.user_image || noimage
                        }
                        alt="Sender"
                        className="w-8 h-8 rounded-full mr-2"
                      />
                    )}
                    <div>
                      <div
                        className={`${
                          message.sender_id._id === userInfo._id
                            ? "bg-blue-500 text-white"
                            : "bg-gray-200"
                        } p-3 rounded-lg text-sm max-w-sm`}
                      >
                        {message.content}
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        {new Date(message.createdAt).toLocaleTimeString()}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Message Input */}
              <div className="p-4 bg-white border-t flex items-center">
                <input
                  type="text"
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 border border-gray-300 rounded-lg p-2"
                />
                <button
                  onClick={sendMessage}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                >
                  Send
                </button>
              </div>
            </>
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500">Select a chat to start messaging.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;