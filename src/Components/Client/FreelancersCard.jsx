import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Ensure `useNavigate` is used if not already passed
import axios from "axios";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PropTypes from "prop-types";

export default function FreelancerCard({
  userId,
  bio,
  category,
  experience_level,
  user_image
}) {
  const navigate = useNavigate(); // Use `useNavigate` hook directly if not passed as a prop
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  const enableChat = async (freelancerId, freelancerName) => {
    try {
      console.log("Navigating with:", { freelancerId, freelancerName });
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
  
      console.log("response", response);
      const { _id: chatId } = response.data;
      console.log("Chat ID from API:", chatId);
  
      if (chatId) {
        navigate("/chat", { state: { chatId, freelancerName } });
      } else {
        setError("Unable to start chat. Please try again.");
      }
    } catch (err) {
      console.error("Error in enableChat:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto bg-white shadow-lg rounded-lg p-4 mt-10 h-[200px]">
      {error && <p className="text-red-500">{error}</p>} {/* Display error message */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex flex-row sm:flex-col items-center gap-4 sm:w-1/4">
          <div className="relative w-16 h-16 sm:w-20 sm:h-20">
            <div className={`w-4 h-4 rounded-full inline-block mr-2 absolute mt-14 ms-16 ${
              userId?.status === "Online" ? "bg-green-500" : "bg-gray-400"
            }`}></div>
            <img
              src={user_image || "https://via.placeholder.com/150"}
              className="rounded-full w-[200px] h-[80px] object-cover"
              alt="Profile"
            />
          </div>
          <h2 className="text-md font-semibold sm:text-center mt-2">
            {userId?.name}
          </h2>
        </div>

        <div className="flex-1 space-y-2 overflow-hidden">
          <div className="space-y-1 grow">
            <p className="text-sm text-gray-600 line-clamp-1">
              <span className="font-medium">Bio:</span> {bio}
            </p>
            <p className="text-sm text-gray-600 line-clamp-1">
              <span className="font-medium">Skills:</span> {category?.name}
            </p>
            <p className="text-sm text-gray-600 line-clamp-1">
              <span className="font-medium">Experience:</span> {experience_level}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-2 justify-end">
            <button
              onClick={() => enableChat(userId?._id, userId?.name, userId?.credits)}
              className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-[#394EE1] border border-[#394EE1] rounded-lg hover:bg-[#394EE1] hover:text-white transition-colors"
            >
              Chat Now
            </button>
            <button
              onClick={() => navigate(`/user/${userId?._id}`)}
              className="flex-1 sm:flex-none px-4 py-2 text-sm font-medium text-white bg-[#394EE1] rounded-lg hover:bg-[#394EE1]/90 transition-colors"
            >
              See Details
            </button>
          </div>
        </div>
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
