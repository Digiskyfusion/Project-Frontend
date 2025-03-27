import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { FaArrowLeft, FaMapMarkerAlt, FaUserTie, FaBriefcase, FaCode } from "react-icons/fa";

function FullDetails() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [userDetails, setUserDetails] = useState(null);
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}/user/profile/users/${userId}`);
        setUserDetails(response.data);
      } catch (err) {
        setError("Failed to fetch user details.");
      }
    };

    fetchUserDetails();
  }, [userId]);

  if (error) return <p className="text-red-500 text-center">{error}</p>;
  if (!userDetails) return <p className="text-center text-gray-500">Loading user details...</p>;

  const profile = userDetails.profiles?.[0] || {};
  const user = profile.userId || {};

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      className="mx-auto bg-white/60 backdrop-blur-lg p-8 shadow-2xl rounded-2xl border border-gray-300"
    >
      {/* {/ Back Button /} */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center text-[#004940] hover:text-[#004940] transition duration-300 mb-4"
      >
        <FaArrowLeft className="mr-2" /> Back
      </button>

      {/* {/ Profile Section /} */}
      <div className="text-center">
        <motion.img
          src={profile.user_image || "https://via.placeholder.com/150"}
          alt="User"
          className="w-36 h-36 object-cover rounded-full mx-auto border-4 border-blue-500 shadow-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        <h2 className="text-3xl font-extrabold text-gray-900 mt-4">{user.name || "N/A"}</h2>
        <p className="flex items-center justify-center text-[#126359] text-lg">
          <FaUserTie className="mr-2" /> {user.roleType || "Freelancer"}
        </p>
        <p className="flex items-center justify-center text-gray-500">
          <FaMapMarkerAlt className="mr-2" /> {user.location || "Location not available"}
        </p>
      </div>

      {/* {/ Info Sections /} */}
      <div className="mt-6 space-y-6">
        {/* {/ Bio Section /} */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-600 flex items-center">
            <FaBriefcase className="mr-2 text-[#004940]" /> Bio
          </h3>
          <p className="text-gray-600 mt-2">{profile.bio || "No bio available"}</p>
        </motion.div>

        {/* {/ Skills Section /} */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-600 flex items-center">
            <FaCode className="mr-2 text-[#004940]" /> Skills
          </h3>
          <ul className="flex flex-wrap gap-3 mt-3">
            {profile.subcategory && profile.subcategory.length > 0 ? (
              profile.subcategory.map((skill) => (
                <li
                  key={skill._id}
                  className="bg-[#004940] text-white px-4 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  {skill.name}
                </li>
              ))
            ) : (
              <li className="text-gray-500">No skills listed</li>
            )}
          </ul>
        </motion.div>

        {/* {/ Experience Section /} */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-all duration-300"
        >
          <h3 className="text-xl font-semibold text-gray-600 flex items-center">
            <FaBriefcase className="mr-2 text-[#004940]" /> Experience
          </h3>
          <p className="text-gray-600 mt-2">{profile.experience_level || "No experience details provided"}</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default FullDetails;
