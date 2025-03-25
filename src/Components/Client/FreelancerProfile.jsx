import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import axios from "axios";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import noimage from "../../assets/Images/userimage.png";

const FreelancersProfile = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [freelancers, setFreelancers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [roleType, setRoleType] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        console.log("parsedData", parsedData);
        if (parsedData && parsedData.roleType) {
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

  useEffect(() => {
    const fetchSubcategories = async () => {
      if (!selectedCategory) {
        setSubcategories([]);
        return;
      }
      try {
        const response = await axios.get(
          `${API_URL}/subcategory/subcategories/category/${selectedCategory}`
        );
        setSubcategories(response.data || []);
      } catch {
        setError("Failed to load subcategories.");
      }
    };
    fetchSubcategories();
  }, [selectedCategory]);

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
    return <div className="flex justify-center items-center h-screen">Loading...</div>;

  if (error)
    return <div className="flex justify-center items-center h-screen text-red-600">{error}</div>;

  return (
    <div className="mx-auto mt-8 w-11/12">
      <div className="flex items-center space-x-4">
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-3 border border-gray-300 rounded-lg w-1/3"
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
            className="bg-white shadow-lg border border-gray-200 rounded-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
          >
            <div className="p-6 text-center">
              <img
                className="mx-auto mb-4 rounded-full w-20 h-20"
                src={freelancer?.profileData?.user_image || noimage}
                alt={freelancer.name || "N/A"}
              />
              <h2 className="font-bold text-lg">{freelancer.name || "N/A"}</h2>
              <p className="text-gray-500 text-sm">{freelancer?.location || "Location not provided"}</p>
            </div>
            <div className="px-6 py-4">
              <p className="text-gray-700 text-sm truncate-text">
                <span className="font-bold">Bio: </span>
                {freelancer?.profileData?.bio?.split(" ").slice(0, 20).join(" ") || "Bio Not Added"}...
              </p>
              <p className="text-gray-700 text-sm">
                <span className="font-bold">Skillset: </span>
                {freelancer?.categoryData[0]?.name || "Skillset not added"}
              </p>
            </div>
            <div className="flex justify-between p-4 border-t">
              <button
                onClick={() => enableChat(freelancer._id, freelancer.name, freelancer.credits)}
                className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-white"
              >
                Chat Now
              </button>
              <button
                onClick={() => navigate(`/user/${freelancer._id}`)}
                className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg text-gray-700"
              >
                See Details
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default FreelancersProfile;
