import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import defaultAvatar from "../../assets/Images/userimage.png";

const Livechatcomponent = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [conversations, setConversations] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const currentUserId = user?._id;
  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `${API_URL}/chat/user-conversations/${currentUserId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`
            }
          }
        );
        setConversations(response.data.data);
      } catch (error) {
        console.error("Error fetching conversations:", error);
      } finally {
        setLoading(false);
      }
    };

    if (currentUserId) {
      fetchConversations();
    }
  }, [currentUserId]);

  const getOtherParticipant = (participants) => {
    return participants.find(participant => participant._id !== currentUserId);
  };

  return (
    <div className="p-4 overflow-y-auto">
      <h2 className="text-xl font-bold text-[#004930] mb-4">Chats</h2>
      
      {loading ? (
        <div className="flex justify-center">Loading conversations...</div>
      ) : conversations.length === 0 ? (
        <div className="text-center text-gray-500">No conversations yet</div>
      ) : (
        <div className="space-y-2">
          {conversations.map((conversation) => {
            const otherUser = getOtherParticipant(conversation.participants);
            const lastMessage = conversation.messages[conversation.messages.length - 1];
            
            return (
              <div
                key={conversation._id}
                className="flex items-center p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                onClick={() => navigate(`/livechat/${otherUser._id}`)}
              >
                <img
                  src={otherUser.image || defaultAvatar}
                  alt={otherUser.name}
                  className="w-10 h-10 rounded-full mr-3"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{otherUser.name}</h3>
                  {lastMessage && (
                    <p className="text-sm text-gray-500 truncate">
                      {lastMessage.sender._id === currentUserId ? "You: " : ""}
                      {lastMessage.text}
                    </p>
                  )}
                </div>
                {conversation.messages.some(
                  msg => !msg.read && msg.sender._id !== currentUserId
                ) && (
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Livechatcomponent;