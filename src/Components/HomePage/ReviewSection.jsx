import React from "react";
import { motion } from "framer-motion";
import { CiStar } from "react-icons/ci";
import userImage from './../../assets/Images/Ellipse 79.png';

function ReviewSection() {
  const reviews = [
    {
      name: "Rahul D.",
      text: "Game-changer for my career! I landed my dream clients faster than ever. Truly amazing!.",
      rating: 5,
      image: userImage,
    },
    {
      name: "Neha k.",
      text: "User-friendly and reliable! The swipe-and-connect feature makes job hunting effortless.",
      rating: 4,
      image: userImage,
    },
    {
      name: "Vikram R.",
      text: "On-time payments, zero worries! I love how transparent and hassle-free the process is.",
      rating: 5,
      image: userImage,
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-12 px-6 md:flex md:justify-between md:items-center md:gap-4 sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }} // Triggers when section enters viewport
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Customers Say
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-6 ">
        Your success is our priority! See what our users love about working with us:Seamless and efficient! Finding the right projects has never been this easy. Highly recommended!.
        </p>
        {/* <button className="py-2 px-5 bg-[#004930] text-white rounded-full hover:bg-teal-700 transition duration-300">
          View All
        </button> */}
      </motion.div>

      {/* Review Cards */}
      <div className="mt-10 gap-6">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            className="bg-white p-6 rounded-xl md:flex gap-4 text-center md:text-start shadow-md cursor-pointer border-l-4 border-[#004930] hover:bg-[#004930] hover:text-white transition-all duration-300 mt-3"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }} // Sequential animation
            viewport={{ once: false, amount: 0.2 }} // Re-animates on scroll
            whileHover={{ x: -10 }}
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-16 h-16 mx-auto rounded-full mb-4"
            />
            <div>
              <h2 className="text-xl font-semibold">{review.name}</h2>
              <p className="text-sm mt-2">{review.text}</p>
            </div>
            {/* Star Rating */}
            <div className="flex justify-center mt-3 text-yellow-500 text-xl">
              {Array.from({ length: review.rating }).map((_, i) => (
                <CiStar key={i} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default ReviewSection;
