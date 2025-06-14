import { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { FaEnvelope, FaUser, FaTools, FaArrowLeft } from "react-icons/fa";
import defaultImage from "./../../assets/Images/userimage.png";
import { motion } from "framer-motion";

const ClientDetail = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const { id } = useParams();
  const navigate = useNavigate();
  const [userId, setUserId] = useState(null);
  const [client, setClient] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [credits, setCredits] = useState(0);
  const [showEmail, setShowEmail] = useState(false);
  
  useEffect(() => {
    // Get user ID from localStorage
    const c = JSON.parse(localStorage.getItem("user"));
    if (c) {
      setUserId(c._id);
    }
  }, []);
  
  useEffect(() => {
    const fetchClientDetails = async () => {
      try {
        const response = await axios.get(`${API_URL}/client/${id}`);
        setClient(response.data.data);
      } catch (err) {
        setError("Failed to fetch client details");
      } finally {
        setLoading(false);
      }
    };
  
    const fetchUserDetails = async () => {
      if (userId) {
        try {
          const response = await axios.get(`${API_URL}/user/${userId}`);
          let getCredits= response.data.credits
          setCredits(getCredits);
          console.log("tis ",credits);
          
        } catch (err) {
          console.error("Failed to fetch user details", err);
        }
      }
    };
  
    fetchUserDetails();  // Call to fetch user details
    fetchClientDetails();  // Call to fetch client details
  
  }, [API_URL, id, userId,credits]); // Only run this effect when API_URL, id, or userId changes
  


  const handleRevealEmail = () => {
    if (credits > 0) {
      setShowEmail(true);
    } else {
      navigate("/MembershipPlans");
    }
  };
  if (loading)
    return <p className="text-center text-lg font-semibold animate-pulse text-[#004930]">Loading...</p>;
  if (error)
    return <p className="text-center text-red-500 text-lg">{error}</p>;

  return (
    <div className="flex flex-col items-center justify-center px-6 py-5 bg-gradient-to-br from-[#cde7d8] to-[#a0dacb]">
      {/* Back Button */}
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 mb-6 px-6 py-3 bg-[#004930] cursor-pointer text-white font-semibold rounded-lg shadow-lg hover:bg-[#003822] hover:scale-105 transition-all duration-300"
      >
        <FaArrowLeft className="text-lg" /> Back
      </button>

      {/* Client Card */}
      <div className="bg-white/30 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-6xl text-center border border-white/40 transition-all hover:scale-[1.02] hover:shadow-xl duration-300">
        {/* Profile Image */}
        <div className="flex justify-center mb-6">
          <img 
            src={client?.image || defaultImage}
            alt={client?.name}
            className="w-40 h-40 rounded-full border-4 border-[#004930] shadow-md object-cover transform hover:scale-110 transition-all duration-300"
          />
        </div>

        {/* Client Details */}
        <h2 className="text-4xl font-extrabold text-[#004930] tracking-wide">{client?.name}</h2>
        <p className="text-gray-600 mt-2 flex items-center justify-center gap-2 text-lg font-medium">
          <FaUser className="text-[#00ff9f]" /> {client?.roleType}
        </p>

        {/* Skills */}
        <p className="mt-4 text-gray-700 flex items-center justify-center gap-2 text-lg">
          <FaTools className="text-[#00ff9f]" />
          <span className="font-semibold">
            {client?.skills?.length ? client.skills.join(", ") : "No skills listed"}
          </span>
        </p>

        {/* Bio */}
        {client?.bio && (
          <div className="mt-6 bg-gray-50 p-5 rounded-lg shadow-md border-l-4 border-[#004930]">
            <p className="text-gray-700 italic font-medium">"{client?.bio}"</p>
          </div>
        )}
      </div>
      {/* <div className="mt-6">
          <button
            onClick={handleRevealEmail}
            className="bg-[#004930] text-white cursor-pointer font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-[#003822] hover:scale-105 transition-all duration-300"
          >
            Reveal Email
          </button>

          {showEmail && (
  <p className="mt-4 text-lg text-[#004930] font-semibold flex items-center justify-center gap-2">
    <FaEnvelope />
    <a
      href={`mailto:${client?.email}`}
      className="underline hover:text-[#002d1e] transition"
    >
      {client?.email}
    </a>
  </p>
)}
        </div> */}
         <div className="mt-6">
        <Link to={`/livechat/${client._id}`}>
          <button className="bg-[#004930] text-white cursor-pointer font-semibold py-2 px-6 rounded-lg shadow-lg hover:bg-[#003822] hover:scale-105 transition-all duration-300">
            Chat Now
          </button>
          </Link>
        </div>
    </div>
  );
};

export default ClientDetail;
