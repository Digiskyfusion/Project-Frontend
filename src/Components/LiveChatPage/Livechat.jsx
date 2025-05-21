import { useState, useEffect, useRef } from 'react';
import { FiPhone, FiVideo } from 'react-icons/fi';
import { MdOutlineSend } from 'react-icons/md';
import { initializeSocket } from '../../utils/socket';
import defaultAvatar from '../../assets/Images/userimage.png';

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
              Authorization: `Bearer ${localStorage.getItem('token')}`
            }
          }
        );
        const data = await response.json();
        setConversation(data.data);
        setMessages(data.data.messages);
        setRecipient(data.data.participants.find(p => p._id !== currentUserId));
      } catch (err) {
        console.error('Error fetching conversation:', err);
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
    } catch (err) {
      console.error('Error sending message:', err);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (loading) {
    return <div className="flex-1 flex items-center justify-center">Loading chat...</div>;
  }

  return (
    <div className="w-full h-screen flex flex-col shadow-lg rounded-r-lg">
      {/* Header with recipient info */}
      <div className="bg-[#004930] text-white p-4 flex items-center rounded-r-lg">
        <img 
          src={recipient?.image || defaultAvatar} 
          alt="Profile" 
          className="w-10 h-10 rounded-full mr-3" 
        />
        <h1 className="font-semibold text-lg flex-1">
          {recipient?.name || 'Loading...'}
        </h1>
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
  className={`p-3 max-w-xs rounded-lg ${
    (msg.sender?._id || msg.senderId) === currentUserId
      ? 'bg-[#004930] text-white ml-auto'
      : 'bg-gray-300 text-gray-800'
  }`}
>
  {msg.text}
  <div className="text-xs mt-1 opacity-70">
    {new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
  </div>
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
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button 
          onClick={sendMessage}
          className="p-2 text-green-600 hover:text-green-800"
        >
          <MdOutlineSend size={24} />
        </button>
      </div>
    </div>
  );
};

export default LiveChat;