import { useState, useEffect, useRef } from 'react';
import { MdOutlineSend } from 'react-icons/md';
import { initializeSocket } from '../../utils/socket';
import defaultAvatar from '../../assets/Images/userimage.png';
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { Upload } from 'lucide-react';

// Add the CSS styles for hiding scrollbar here or in your global CSS file
const styles = `
  .messages-container::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera */
  }
  .messages-container {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
`;

// Inject styles dynamically
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = styles;
  document.head.appendChild(styleTag);
}

const LiveChat = ({ recipientId }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState(null);
  const [recipient, setRecipient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [socket, setSocket] = useState(null);
  const chatEndRef = useRef(null);
  const messagesContainerRef = useRef(null);
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
      newSocket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socket || !conversation) return;

    socket.emit('join_conversation', conversation._id);

    socket.on('receive_message', (message) => {
      setMessages(prev => [...prev, message]);
    });

    socket.on('message_delivered', () => {});

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

        // Mark messages as read
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


  const handleFileUpload = async (file) => {
  if (!file || !conversation || !currentUserId) return;

  const formData = new FormData();
  formData.append("file", file);
  formData.append("conversationId", conversation._id);
  formData.append("senderId", currentUserId);

  try {
    const response = await axios.post(`${API_URL}/chat/file`, formData, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
    });

    const fileMessage = response.data.data;

    // Emit and update local messages
    socket.emit("send_message", fileMessage);
    setMessages((prev) => [...prev, fileMessage]);

    const fileInput = document.getElementById('fileInput');
    console.log(fileInput,"hello");
    if (fileInput) fileInput.value = '';
  } catch (error) {
    console.error("Error uploading file:", error);
    toast.error("File upload failed");
  }
};


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

  // Scroll only if messages overflow the container height
  useEffect(() => {
    const container = messagesContainerRef.current;
    if (!container) return;

    if (container.scrollHeight > container.clientHeight) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  if (loading && !recipientId) {
    return <div className="flex-1 flex items-center justify-center"></div>;
  }

  if (loading) {
    return <div className="flex-1 flex items-center justify-center">Loading chat...</div>;
  }

  return (
    <div className="w-full h-screen flex flex-col min-h-screen rounded-lg">
      {/* Header */}
      <div className="bg-[#004930] text-white p-4 flex items-center rounded-t-lg shrink-0">
        <img 
          src={recipient?.image || defaultAvatar} 
          alt="Profile" 
          className="w-10 h-10 rounded-full mr-3" 
        />
        <h1 className="font-semibold text-lg flex-1">
          {recipient?.name || "Loading..."}
        </h1>
      </div>

      {/* Messages */}
      <div 
        ref={messagesContainerRef}
        className="messages-container flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50"
      >
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`p-3 max-w-xs rounded-lg break-words whitespace-pre-wrap ${
              (msg.sender?._id || msg.senderId || msg.sender) === currentUserId
                ? 'bg-[#004930] text-white ml-auto'
                : 'bg-gray-300 text-gray-800'
            }`}
          >
            {msg.text && <div>{msg.text}</div>}
{msg.fileUrl && (
  <div className="mt-2">
    {msg.fileType?.startsWith("image") ? (
      <img src={msg.fileUrl} alt="Shared File" className="w-40 rounded" />
    ) : (
      <a href={msg.fileUrl} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
        {msg.originalname}
      </a>
    )}
  </div>
)}
            <div className="text-xs mt-1 opacity-70">
              {new Date(msg.timestamp).toLocaleTimeString([], {
                hour: '2-digit',
                minute: '2-digit'
              })}
            </div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="p-3 bg-white flex items-center gap-2 outline-1 shrink-0 hover:outline-1 rounded-2xl">
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 p-2 outline-0"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <label htmlFor="fileInput" className="cursor-pointer text-green-600 hover:text-green-800">
  <Upload size={20} />
</label>
        <button 
          onClick={sendMessage}
          className="p-2 text-green-600 hover:text-green-800"
        >
          <MdOutlineSend size={24} />
        </button>
           <input
  type="file"
  accept="image/*,application/pdf,.doc,.docx"
  onChange={(e) => handleFileUpload(e.target.files[0])}
  className="hidden"
  id="fileInput"
/>

      </div>
   

      <Toaster />
    </div>
  );
};

export default LiveChat;
