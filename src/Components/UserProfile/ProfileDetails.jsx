import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../../assets/Images/userimage.png";
import { motion } from "framer-motion";

function ProfileDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    fetch(`${API_URL}/users/user/${id}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("API Response:", data);
        setUser(data);
      })
      .catch((error) => console.error("Error fetching user details:", error));
  }, [id]);

  if (!user) {
    return <div className="text-center py-10 text-[#004930] font-semibold text-lg">Loading...</div>;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#004930] to-[#00795F] p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }} 
        transition={{ duration: 0.5 }} 
        className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-6"
      >
        {/* Profile Image */}
        <div className="flex flex-col items-center">
          <motion.img
            src={user.user_image || image}
            alt={user.name || "User"}
            className="w-28 h-28 rounded-full border-4 border-[#004930] shadow-md"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <h1 className="mt-4 text-2xl font-bold text-[#004930]">{user.name || "No Name Available"}</h1>
          <p className="text-gray-500 text-lg">{user.roleType || "No Role"}</p>
        </div>

        {/* Profile Details */}
        <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-inner">
          <p className="text-[#004930] text-lg font-semibold mb-2">Contact Info:</p>
          <div className="text-gray-700 space-y-2">
            <p><strong>Email:</strong> {user.email || "N/A"}</p>
            <p><strong>Location:</strong> {user.location || "N/A"}</p>
            <p><strong>Role Type:</strong> {user.roleType || "N/A"}</p>
            <p><strong>Mobile Number:</strong> {user.mobileNumber || "N/A"}</p>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-6 flex justify-center">
          <motion.button
            onClick={() => window.history.back()}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="px-5 py-2 text-white bg-[#004930] rounded-full shadow-lg hover:bg-[#00795F] transition duration-300"
          >
            Go Back
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}

export default ProfileDetails;
