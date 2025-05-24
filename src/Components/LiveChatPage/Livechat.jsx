import { useState, useEffect, useRef } from 'react';
import { MdOutlineSend } from 'react-icons/md';
import { initializeSocket } from '../../utils/socket';
import defaultAvatar from '../../assets/Images/userimage.png';
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const LiveChat = ({ recipientId }) => {
 const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState(null);
  const [recipient, setRecipient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState(null);
  const chatEndRef = useRef(null);
  const API_URL = import.meta.env.VITE_API_URL;
  const user = JSON.parse(localStorage.getItem('user'));
  const currentUserId = user?._id;
  const [UserCredits, setUserCredits] = useState(null);
  const [newChat, setNewChat] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const newSocket = initializeSocket(token);
    setSocket(newSocket);

    return () => {
    };
  }, []);

  useEffect(() => {
    if (!socket || !conversation) return;

    socket.emit('join_conversation', conversation._id);

    socket.on('receive_message', (message) => {
      setMessages(prev => [...prev, message]);
      // toast.success('message recieved');
    });

    socket.on('message_delivered', (message) => {
    });

    socket.on('message_error', (error) => {
      console.error('Message error:', error);
    });

    return () => {
      socket.off('receive_message');
      socket.off('message_delivered');
      socket.off('message_error');
    };
  }, [socket, conversation]);

  useEffect(() => {
    if (!currentUserId || !recipientId) return;

    const fetchConversation = async () => {
      try {
        const response = await fetch(
          `${API_URL}/chat/conversation/${currentUserId}/${recipientId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        const data = await response.json();
        setConversation(data.data);
        setMessages(data.data.messages);
        setRecipient(
          data.data.participants.find((p) => p._id !== currentUserId)
        );


         const UserResponse = await fetch(
          `${API_URL}/user/${currentUserId}`,
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        if (UserResponse.status === 200) {
          const jsonData = await UserResponse.json();
          setUserCredits(jsonData.credits); 
          if(data.data.messages?.length < 1){
            setNewChat(true);
          }
        }

        // 🔥 Mark messages as read
       await fetch(`${API_URL}/chat/mark-as-read`, {
         method: "PATCH",
         headers: {
           "Content-Type": "application/json",
           Authorization: `Bearer ${localStorage.getItem("token")}`,
         },
         body: JSON.stringify({
           conversationId: data.data._id,
           userId: currentUserId,
         }),
       });


      } catch (err) {
        console.error("Error fetching conversation:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchConversation();
  }, [currentUserId, recipientId]);

  const sendMessage = async () => {
    if (input.trim() === '' || !conversation || !currentUserId) return;

    const messageData = {
      conversationId: conversation._id,
      senderId: currentUserId,
      text: input,
      timestamp: new Date()
    };

    try {
      setMessages(prev => [...prev, messageData]);
      setInput('');

      socket.emit('send_message', messageData);

      await fetch(`${API_URL}/chat/message`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          conversationId: conversation._id,
          senderId: currentUserId,
          text: input
        })
      });

      if(newChat){
        const response = await axios.put(
        `${API_URL}/user/credits/${currentUserId}`,
        { credits: (UserCredits - 1) },
        { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
      );

      if (response.status === 200) {
        toast.success("Your credits are reduced by one.");
      }
      setNewChat(false);
      }
      

      console.log(messages,"right");
    } catch (err) {
      console.error('Error sending message:', err);
    }
  };

 useEffect(() => {
  if (chatEndRef.current) {
    chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  }
}, [messages]);


  if (loading && !recipientId) {
    return <div className="flex-1 flex items-center justify-center"></div>;
  }

  if (loading) {
    return <div className="flex-1 flex items-center justify-center">Loading chat...</div>;
  }

  return (
    <div className="w-full flex flex-col h-full shadow-lg rounded-r-lg">
      <Toaster/>
      {/* Header with recipient info */}
      <div className="bg-[#004930] text-white p-4 flex items-center rounded-r-lg shrink-0">
        <img
          src={recipient?.image || defaultAvatar}
          alt="Profile"
          className="w-10 h-10 rounded-full mr-3"
        />
        <h1 className="font-semibold text-lg flex-1">
          {recipient?.name || "Loading..."}
        </h1>
        {/* <div className="flex gap-3">
          <button className="p-2 bg-white rounded-full text-green-600 hover:bg-green-200">
            <FiVideo size={20} />
          </button>
          <button className="p-2 bg-white rounded-full text-green-600 hover:bg-green-200">
            <FiPhone size={20} />
          </button>
        </div> */}
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 max-w-xs rounded-lg ${
              (msg.sender?._id || msg.senderId) === currentUserId
                ? "bg-[#004930] text-white ml-auto"
                : "bg-gray-300 text-gray-800"
            }`}
          >
            {msg.text}
            <div className="text-xs mt-1 opacity-70">
              {new Date(msg.timestamp).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        ))}
        <div ref={chatEndRef}></div>
      </div>

      {/* Chat Input Box */}
      <div className="p-3 bg-white border-t shrink-0">
  <div className="flex items-center gap-2">
    <input
      disabled={messages?.length === 0 && UserCredits === 0}
      type="text"
      placeholder="Type a message..."
      className={`flex-1 p-2 rounded-md border outline-none transition-all duration-150 ${
        messages?.length === 0 && UserCredits === 0
          ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-300'
          : 'border-gray-300 focus:ring-2 focus:ring-green-500'
      }`}
      value={input}
      onChange={(e) => setInput(e.target.value)}
      onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
    />

    <button
      onClick={sendMessage}
      disabled={messages?.length === 0 && UserCredits === 0}
      className={`p-2 rounded-md transition-all duration-150 ${
        messages?.length === 0 && UserCredits === 0
          ? 'text-gray-400 cursor-not-allowed'
          : 'text-green-600 hover:text-green-800'
      }`}
    >
      <MdOutlineSend size={24} />
    </button>
  </div>

  {messages?.length === 0 && UserCredits === 0 && (
    <div className="mt-2 px-2 py-1 bg-red-50 text-red-600 text-sm rounded-md border border-red-200">
      You have <strong>zero credits</strong>. Please <a href="/MembershipPlans" className="underline hover:text-red-800">upgrade</a>.
    </div>
  )}
</div>

    </div>
  );
};

export default LiveChat;