import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import image from "../../assets/Images/userimage.png";
import { motion } from "framer-motion";

function ProfileDetails() {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`${API_URL}/user/${id}`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        console.log("API Response:", data);
        setUser(data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUserDetails();
  }, [id, API_URL]);

  if (!user) {
    return (
      <div className="text-center py-10 text-[#004930] font-semibold text-lg">
        Loading...
      </div>
    );
  }

  return (
    <>
      {/* Back Button */}
      <div className="p-4 bg-gray-50 flex justify-center">
        <motion.button
          onClick={() => window.history.back()}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="px-5 py-2 text-white bg-[#004930] rounded-lg shadow-md hover:bg-[#00795F] transition duration-300"
        >
          Go Back
        </motion.button>
      </div>

      <div className="flex items-center justify-center bg-gray-100 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-6xl bg-white rounded-xl shadow-lg overflow-hidden"
        >
          {/* Header Section */}
          <div className="bg-gradient-to-r from-[#004930] to-[#00795F] p-6 text-center text-white">
            <motion.div whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <img
                src={user.user_image || image}
                alt={user.name || "User"}
                className="w-24 h-24 mx-auto rounded-full border-4 border-white shadow-md"
              />
            </motion.div>
            <h1 className="mt-4 text-2xl font-bold">{user.name || "No Name Available"}</h1>
            <p className="text-gray-200">{user.roleType || "No Role"}</p>
          </div>

          {/* Profile Details */}
          <div className="p-6 space-y-3">

        <div className="flex justify-between ">
          <div className="flex items-center gap-3">
            <span className="text-gray-600 font-semibold">Role:</span>
            <span className="text-gray-800">{user.roleType || "N/A"}</span>
          </div>

          <div className="flex items-center gap-3 ">
            <span className="text-gray-600font-semibold">Location:</span>
            <span className="text-gray-800">{user.state || "N/A"}</span>
          </div>
        </div>


            {/* Bio Section */}
            {user.bio && (
              <div>
                <h2 className="text-lg font-semibold text-[#004930]">Bio</h2>
                <p className="text-gray-700">{user.bio}</p>
              </div>
            )}

            {/* Experience Section */}
            {user.experience && (
              <div>
                <h2 className="text-lg font-semibold text-[#004930]">Experience</h2>
                <p className="text-gray-700">{user.experience}</p>
              </div>
            )}

            {/* Skills Section */}
            {user.skills && user.skills.length > 0 && (
              <div>
                <h2 className="text-lg font-semibold text-[#004930]">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  {user.skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-[#004930] text-white  rounded-md   text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
}

export default ProfileDetails;
