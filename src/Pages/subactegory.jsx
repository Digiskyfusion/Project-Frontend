import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import axios from 'axios';
// import Header from "../../components/Global/Layouts/Header.jsx";
import user1 from "../assets/Images/user1.png";
import user2 from "../assets/Images/user2.png";
import user3 from "../assets/Images/user3.svg";


const FreelancerCard = ({ freelancer }) => {
  const navigate = useNavigate();

  const handleSeeAllUsers = () => {
    const subcategoryId = freelancer._id;
    const subcategoryName = freelancer.name;
    if (subcategoryId) {
      navigate(`/userProfile/${subcategoryId}`, { state: { subcategoryName } });
    } else {
      console.error("Subcategory _id not found!");
    }
  };

  return (
    <motion.div
      onClick={handleSeeAllUsers}
      className="bg-white shadow-md rounded-lg p-6 m-4 w-72 cursor-pointer transition-transform transform hover:scale-105 hover:shadow-xl hover:bg-blue-700 hover:text-white"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      <h2 className="text-xl font-semibold mb-3">{freelancer.name}</h2>

      <div className="flex items-center mb-4">
        <span className="text-yellow-400 text-2xl">★</span>
        <span className="ml-2 text-black group-hover:text-white">4.8 average rating</span>
      </div>

      <div className="flex items-center space-x-2 mb-4">
        <motion.img
          src={user1}
          alt="user1"
          className="w-10 h-10 rounded-full border-2 border-white"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src={user2}
          alt="user2"
          className="w-10 h-10 rounded-full border-2 border-white"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        />
        <motion.img
          src={user3}
          alt="user3"
          className="w-10 h-10 rounded-full border-2 border-white"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <motion.button
        className="py-2 px-4 text-lg bg-blue-700 hover:bg-white hover:text-blue-700 text-white rounded-full shadow-lg transform transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        See Details →
      </motion.button>
    </motion.div>
  );
};

FreelancerCard.propTypes = {
  freelancer: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired,
};

const FreelancerPage = () => {
  const [freelancers, setFreelancers] = useState([]);
  const [categoryName, setCategoryName] = useState('');
  const { categoryId } = useParams();

  useEffect(() => {
    const fetchFreelancersAndCategoryName = async () => {
      try {
        const freelancersResponse = await axios.get(`${API_URL}/subcategory/subcategories/category/${categoryId}`);
        console.log("freelancersResponse");
        console.log(freelancersResponse);
        setFreelancers(freelancersResponse.data);

        const categoryResponse = await axiosInstance.get(`/category/categories/${categoryId}`);
        setCategoryName(categoryResponse.data.name);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchFreelancersAndCategoryName();
  }, [categoryId]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      {/* <Header /> */}
      <div className="w-[88%] mx-auto flex flex-row">
        <motion.h1
          className="text-left text-[24px] font-bold font-[poppins] text-blue-700 mt-8 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <span className="text-gray-800">Category</span> - {categoryName}
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
