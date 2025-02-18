import React from "react";
import { motion } from "framer-motion";
import { CiStar } from "react-icons/ci";
import userImage from './../assets/Images/Ellipse 79.png';

function ReviewSection() {
  const reviews = [
    {
      name: "Manish",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      rating: 5,
      image: userImage,
    },
    {
      name: "Manisha",
      text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      rating: 4,
      image: userImage,
    },
    {
      name: "Priya Soni",
      text: "An unknown printer took a galley of type and scrambled it to make a type specimen book.",
      rating: 5,
      image: userImage,
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-12 px-6 md:flex md:justify-between md:items-center sm:px-12">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.2 }} // Triggers when section enters viewport
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          What Our Customers Say
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mb-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
          when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
        <button className="py-2 px-5 bg-[#004930] text-white rounded-full hover:bg-teal-700 transition duration-300">
          View All
        </button>
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
