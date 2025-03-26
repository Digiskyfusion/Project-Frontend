import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import noimage from "../../assets/Images/userimage.png";
import Header1 from "../Freelancer/Header";
import Header2 from "../Client/Header";

const FreelancersProfile = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [freelancers, setFreelancers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [roleType, setRoleType] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        if (parsedData?.roleType) {
          setRoleType(parsedData.roleType);
        }
      } catch (error) {
        console.error("Error parsing userInfo:", error);
      }
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [freelancersResponse, categoriesResponse] = await Promise.all([
          axios.get(`${API_URL}/users/user`),
          axios.get(`${API_URL}/category/categories`),
        ]);
        setFreelancers(freelancersResponse.data.users || []);
        setCategories(categoriesResponse.data || []);
      } catch {
        setError("Failed to load data.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const enableChat = async (freelancerId, freelancerName, freelancerCredits) => {
    try {
      const token = localStorage.getItem("token");
      if (!roleType || !token) {
        navigate("/login");
        return;
      }
      if (!freelancerCredits) {
        setError(`${freelancerName} does not have enough credits to start a chat.`);
        return;
      }
      const response = await axios.post(
        `${API_URL}/user/chat/`,
        { userId: freelancerId },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const chatId = response.data?._id;
      if (chatId) {
        navigate("/chat", { state: { chatId, freelancerName } });
      } else {
        setError("Unable to start chat. Please try again.");
      }
    } catch {
      setError("An error occurred. Please try again.");
    }
  };

  if (loading)
    return <div className="flex justify-center items-center h-screen text-[#004930] font-bold text-2xl">Loading...</div>;

  if (error)
    return <div className="flex justify-center items-center h-screen text-red-600 text-lg">{error}</div>;

  return (
    <>
          
      <div className="mx-auto mt-8 w-11/12">
        <div className="flex items-center space-x-4">
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="p-3 border border-gray-300 rounded-lg w-1/3 text-[#004930] font-semibold shadow-md hover:border-[#003420] transition duration-300"
          >
            <option value="">Select Category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>{category.name}</option>
            ))}
          </select>
        </div>
        <motion.div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mx-auto mt-10 w-11/12">
          {freelancers.map((freelancer) => (
            <motion.div
              key={freelancer._id}
              className="bg-white shadow-xl border border-[#004930] rounded-xl overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105"
            >
              <div className="p-6 text-center">
                <img
                  className="mx-auto mb-4 rounded-full w-24 h-24 border-4 border-[#004930] shadow-lg"
                  src={freelancer?.profileData?.user_image || noimage}
                  alt={freelancer.name || "N/A"}
                />
                <h2 className="font-bold text-xl text-[#004930]">{freelancer.name || "N/A"}</h2>
                <p className="text-gray-500 text-sm">{freelancer?.location || "Location not provided"}</p>
              </div>
              <div className="px-6 py-4 bg-gray-50">
                <p className="text-gray-700 text-sm">
                  <span className="font-bold text-[#004930]">Bio: </span>
                  {freelancer?.profileData?.bio?.split(" ").slice(0, 20).join(" ") || "Bio Not Added"}...
                </p>
                <p className="text-gray-700 text-sm">
                  <span className="font-bold text-[#004930]">Skillset: </span>
                  {freelancer?.categoryData[0]?.name || "Skillset not added"}
                </p>
              </div>
              <div className="flex justify-between p-4 border-t bg-white">
                <button
                  onClick={() => enableChat(freelancer._id, freelancer.name, freelancer.credits)}
                  className="bg-[#004930] hover:bg-green-800 px-5 py-2 rounded-lg text-white font-semibold shadow-md transition duration-300"
                >
                  Chat Now
                </button>
                <button
                  onClick={() => navigate(`/user/${freelancer._id}`)}
                  className="bg-gray-200 hover:bg-gray-300 px-5 py-2 rounded-lg text-gray-700 font-semibold shadow-md transition duration-300"
                >
                  See Details
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default FreelancersProfile;
