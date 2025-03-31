import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa"; 
import axios from "axios";
import Footer from "../Footer/Footer";

const ReviewList = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [reviews, setReviews] = useState([]);
  const navigate = useNavigate(); // Initialize navigate

  useEffect(() => {
    axios.get(`${API_URL}/review/allreview`).then((response) => {
      setReviews(response.data);
    });
  }, []);

  return (
    <>
    <div className="w-full bg-gray-50 py-10 px-6 sm:px-12">
      <h1 className="text-center text-sm md:text-xl lg:text-3xl font-bold">
        All Reviews
      </h1>

      {/* Back Button */}
      <div className="mt-4">
        <button
          onClick={() => navigate("/")} // Navigate to home
          className="py-2 px-6 bg-[#004930] text-white rounded-full hover:bg-teal-700 transition duration-300"
        >
          Back
        </button>
      </div>

      <div className="mt-4 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        {reviews.map((review, index) => (
          <motion.div
            key={review._id}
            className="bg-white cursor-pointer p-6 rounded-xl flex flex-col gap-4 text-center md:text-start shadow-md border-l-4 border-[#004930] hover:bg-[#004930] hover:text-white transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ x: -10 }}
          >
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-gray-300 text-gray-800 flex items-center justify-center text-xl font-bold">
                {review.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className="text-xl font-semibold">{review.name}</h2>
                <div className="flex text-yellow-500 text-xl">
                  {Array.from({ length: 5 }).map((_, i) =>
                    i < review.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                  )}
                </div>
              </div>
            </div>
            <p className="text-sm">{review.comment}</p>
          </motion.div>
        ))}
      </div>
    </div>
<Footer />
    </>
  );
};

export default ReviewList;
