import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import axios from 'axios';
import Header from "../../Components/Client/Header";
import user1 from "../../assets/Images/user1.png";
import user2 from "../../assets/Images/user2.png";
import user3 from "../../assets/Images/user3.svg";

// Freelancer Card Component
const FreelancerCard = ({ freelancer }) => {
  const navigate = useNavigate();

  const handleSeeAllUsers = () => {
    navigate(`/userProfile/${freelancer._id}`, { state: { subcategoryName: freelancer.name } });
  };

  return (
    <motion.div
      onClick={handleSeeAllUsers}
      className="relative bg-gradient-to-b from-[#004930] to-[#002f20] text-white shadow-lg rounded-xl p-6 m-4 w-80 cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    >
      {/* Profile Image */}
      <div className="flex justify-center">
        <motion.img
          src={user1}
          alt="Freelancer"
          className="w-24 h-24 rounded-full border-4 border-[#22c55e] shadow-lg transform transition-transform hover:scale-110"
        />
      </div>

      {/* Freelancer Name & Rating */}
      <div className="text-center mt-4">
        <h2 className="text-lg font-semibold">{freelancer.name}</h2>
        <div className="flex justify-center mt-1 space-x-1">
          {Array(5).fill().map((_, i) => (
            <span key={i} className="text-yellow-400 text-lg">★</span>
          ))}
        </div>
        <p className="text-sm text-gray-300 mt-1">4.8 average rating (120 reviews)</p>
      </div>

      {/* Collaborator Profile Images */}
      <div className="flex justify-center space-x-2 mt-4">
        {[user1, user2, user3].map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`user-${index}`}
            className="w-10 h-10 rounded-full border-2 border-[#22c55e] transition-transform hover:scale-110"
          />
        ))}
      </div>

      {/* Button */}
      <motion.button
        className="w-full py-2 mt-5 text-lg bg-[#22c55e] hover:bg-[#1a7d4e] text-white rounded-full shadow-md transition-transform transform hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        See Details →
      </motion.button>
    </motion.div>
  );
};

// PropTypes Validation
FreelancerCard.propTypes = {
  freelancer: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

// Freelancer Page Component
const FreelancerPage = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [freelancers, setFreelancers] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchFreelancersAndCategoryName = async () => {
      try {
        const freelancersResponse = await axios.get(`${API_URL}/subcategory/subcategories/category/${categoryId}`);
        setFreelancers(freelancersResponse.data);

        const categoryResponse = await axios.get(`${API_URL}/category/categories/${categoryId}`);
        setCategoryName(categoryResponse.data.name);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFreelancersAndCategoryName();
  }, [categoryId]);

  return (
    <div className="min-h-screen bg-[#1d4035]">
      <Header />
      <div className="w-[88%] mx-auto flex flex-row">
        <motion.h1
          className="text-left text-[24px] font-bold font-[poppins] text-[#22c55e] mt-8 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-gray-300">Category</span> - {categoryName}
        </motion.h1>
      </div>

      <div className="flex flex-wrap justify-center">
        {freelancers.map((freelancer, index) => (
          <FreelancerCard key={index} freelancer={freelancer} />
        ))}
      </div>
    </div>
  );
};

export default FreelancerPage;
