import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEnvelope, FaUserFriends, FaTools, FaArrowLeft } from "react-icons/fa";
import defaultImage from "./../../assets/Images/userimage.png";

const UserDetail = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get(`${API_URL}/user/${id}`);
        setUser(response.data|| {}); // ✅ Ensure user is at least an empty object
        console.log(response.data.data);
        
      } catch (err) {
        setError("Failed to fetch user details");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [id]);

  if (loading)
    return <p className="text-center text-lg font-semibold animate-pulse text-[#004930]">Loading...</p>;

  if (error)
    return <p className="text-center text-red-500 text-lg">{error}</p>;

  // ✅ Ensure user is defined before rendering its properties
  return (
    <div className="flex flex-col items-center justify-center px-6 py-5 bg-gradient-to-br from-[#cde7d8] to-[#a0dacb]">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center cursor-pointer gap-2 mb-6 px-6 py-3 bg-[#004930] text-white font-semibold rounded-lg shadow-lg hover:bg-[#003822] hover:scale-105 transition-all duration-300"
      >
        <FaArrowLeft className="text-lg" /> Back
      </button>

      {/* User Card */}
      <div className="bg-white/30 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-6xl text-center border border-white/40 transition-all hover:scale-[1.02] hover:shadow-xl duration-300">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img
            src={user?.image || defaultImage} // ✅ Safe access with optional chaining
            alt={user?.name || "User"}
            className="w-40 h-40 rounded-full border-4 border-[#004930] shadow-md object-cover transform hover:scale-110 transition-all duration-300"
          />
        </div>

        {/* User Details */}
        <h2 className="text-4xl font-extrabold text-[#004930] tracking-wide">
          {user?.name || "No Name Available"}
        </h2>
        <p className="text-gray-600 mt-2 flex items-center justify-center gap-2 text-lg font-medium">
          <FaUserFriends className="text-[#00ff9f]" /> {user?.roleType || "No Role"}
        </p>

        {/* Email */}
        {/* <p className="mt-4 text-gray-800 flex items-center justify-center gap-2 text-lg">
          <FaEnvelope className="text-[#004930]" /> {user?.email || "No Email Provided"}
        </p> */}

        {/* Skills */}
        <p className="mt-4 text-gray-700 flex items-center justify-center gap-2 text-lg">
          <FaTools className="text-[#00ff9f]" />
          <span className="font-semibold">
            {user?.skills?.length ? user.skills.join(", ") : "No skills listed"}
          </span>
        </p>

        {/* Bio */}
        {user?.bio && (
          <div className="mt-6 bg-gray-50 p-5 rounded-lg shadow-md border-l-4 border-[#004930]">
            <p className="text-gray-700 italic font-medium">"{user.bio}"</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserDetail;
