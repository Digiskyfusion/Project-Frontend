import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaStar, FaRegStar } from "react-icons/fa"; 
import { useNavigate } from "react-router-dom";
import axios from "axios";

function ReviewSection() {
  const navigate = useNavigate();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/review/allreview")
      .then((response) => {
        const latestReviews = response.data.reverse().slice(0, 3); // Reverse first, then slice latest 3
        setReviews(latestReviews);
      })
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  return (
    <div className="w-full bg-gray-50 py-12 px-6 md:flex md:justify-between md:items-center md:gap-4 sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Customers Say
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-6">
          Your success is our priority! See what our users love about working with us:
          Seamless and efficient! Finding the right projects has never been this easy. Highly recommended!
        </p>
      </motion.div>

      {/* Review Cards */}
      <div className="mt-10 gap-6 md:w-1/2">
        {reviews.map((review, index) => (
          <motion.div
            key={review._id} 
            className="bg-white p-6 rounded-xl md:flex gap-4 text-center md:text-start shadow-md cursor-pointer border-l-4 border-[#004930] hover:bg-[#004930] hover:text-white transition-all duration-300 mt-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            whileHover={{ x: -10 }}
          >
            {/* User Initial Avatar */}
            <div className="w-16 h-16 mx-auto md:mx-0 flex items-center justify-center rounded-full bg-gray-300 text-gray-800 font-bold text-xl">
              {review.name.charAt(0).toUpperCase()}
            </div>

            <div>
              <h2 className="text-xl font-semibold">{review.name}</h2>
              <p className="text-sm mt-2">{review.comment}</p>

              {/* Star Rating */}
              <div className="flex justify-center md:justify-start mt-3 text-yellow-500 text-xl">
                {Array.from({ length: 5 }).map((_, i) =>
                  i < review.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
              </div>
            </div>
          </motion.div>
        ))}

        {/* Buttons Section */}
        <div className="mt-6 text-center flex gap-4 justify-center">
          {/* See More Reviews Button */}
          <button
            onClick={() => navigate("/reviewslist")}
            className="py-2 px-6 bg-[#004930] text-white rounded-full cursor-pointer hover:bg-teal-700 transition duration-300"
          >
            See More
          </button>

          {/* Write a Review Button */}
          <button
            onClick={() => navigate("/createreview")}
            className="py-2 px-6 bg-teal-600 text-white rounded-full cursor-pointer hover:bg-teal-800 transition duration-300"
          >
            Write a Review
          </button>
        </div>
      </div>
    </div>
  );
}

export default ReviewSection;
