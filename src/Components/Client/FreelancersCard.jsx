import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

export default function FreelancerCard({ userId, bio, category, experience_level, user_image }) {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  const enableChat = async (freelancerId, freelancerName) => {
    try {
      const token = localStorage.getItem("token");
      const parsed = JSON.parse(localStorage.getItem("user"));
  
      if (!parsed || !token) {
        navigate("/login");
        return;
      }
  
      const response = await axios.post(
        `${API_URL}/user/chat/`,
        { userId: freelancerId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
  
      const { _id: chatId } = response.data;
  
      if (chatId) {
        navigate("/chat", { state: { chatId, freelancerName } });
      } else {
        setError("Unable to start chat. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-md mx-auto bg-white shadow-lg rounded-lg p-4 mt-4 flex flex-col items-center border border-gray-300 transition-transform transform hover:scale-105 mb-5">
      {error && <p className="text-red-500">{error}</p>} 
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-[#004930] shadow-md">
          <img
            src={user_image || "https://via.placeholder.com/150"}
            className="w-full h-full object-cover"
            alt="Profile"
          />
          <div className={`absolute bottom-2 right-2 w-4 h-4 rounded-full border-2 border-white ${
            userId?.status === "Online" ? "bg-green-500" : "bg-gray-400"
          }`}></div>
        </div>
        <h2 className="text-xl font-bold text-gray-900 mt-3">{userId?.name}</h2>
        <p className="text-xs text-gray-500">{userId?.role || "Freelancer"}</p>
      </div>

      <div className="mt-3 text-center space-y-1">
        <p className="text-sm text-gray-700"><span className="font-semibold">Bio:</span> {bio.split(" ").slice(0, 5).join(" ")}</p>
        <p className="text-sm text-gray-700"><span className="font-semibold">Skills:</span> {category?.name}</p>
        <p className="text-sm text-gray-700"><span className="font-semibold">Experience:</span> {experience_level}</p>
      </div>

      <div className="flex gap-3 mt-3 w-full justify-center">
        <button
          onClick={() => enableChat(userId?._id, userId?.name)}
          className="px-4 py-2 text-sm font-medium text-white bg-[#004930] rounded-lg hover:bg-[#006F50] transition-shadow shadow-md hover:shadow-lg"
        >
          Chat Now
        </button>
        <button
          onClick={() => navigate(`/user/${userId?._id}`)}
          className="px-4 py-2 text-sm font-medium text-[#004930] border border-[#004930] rounded-lg hover:bg-[#004930] hover:text-white transition-shadow shadow-md hover:shadow-lg"
        >
          See Details
        </button>
      </div>
      
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

FreelancerCard.propTypes = {
  userId: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string,
  }).isRequired,
  bio: PropTypes.string.isRequired,
  user_image: PropTypes.string.isRequired,
  category: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  experience_level: PropTypes.string.isRequired,
};
