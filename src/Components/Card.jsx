import React from "react";
import { motion } from "framer-motion";

function Cart () {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };

  return (
    <div className="flex flex-col items-center p-8 bg-gradient-to-r from-gray-100 via-gray-300 to-gray-100">
      <motion.h1
        className="text-4xl font-bold mb-8  text-gray-900"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        Pricing Plans For Everyone
        <h1 className="text-xl mt-4 text-gray-600">No surprise fees. Cancel anytime.</h1>
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {/* Standard Plan */}
        <motion.div
          className="bg-white px-8 py-12 sm:px-12 lg:px-20 sm:py-16 lg:py-20 rounded-2xl shadow-lg text-center border group hover:bg-[#004930] hover:text-white flex flex-col items-center relative transition duration-300 border-t-8 border-t-[#004930] group-hover:shadow-xl transform hover:scale-105"
          style={{ boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)' }}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          whileHover="hover"
        >
          <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white">Standard Plan</h2>
          <h3 className="text-3xl font-bold mt-4 text-gray-900">$40/month</h3>
          <p className="group-hover:text-white text-sm mt-2 text-gray-600 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <motion.button
            className="mt-4 py-2 px-5 bg-[#004930] hover:bg-white text-white rounded-full cursor-pointer transition duration-300 group-hover:bg-white group-hover:text-[#094051]"
            whileHover={{ scale: 1.1 }}
          >
            Buy Now
          </motion.button>
        </motion.div>

        {/* Premium Plan */}
        <motion.div
          className="bg-white px-8 py-12 sm:px-12 lg:px-20 sm:py-16 lg:py-20 rounded-2xl shadow-lg text-center border group hover:bg-[#004930] hover:text-white flex flex-col items-center relative transition duration-300 border-t-8 border-t-[#004930] group-hover:shadow-xl transform hover:scale-105"
          style={{ boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)' }}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          whileHover="hover"
        >
          <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white">Premium Plan</h2>
          <h3 className="text-3xl font-bold mt-4 text-gray-900">$60/month</h3>
          <p className="group-hover:text-white text-sm mt-2 text-gray-600 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <motion.button
            className="mt-4 py-2 px-5 bg-[#004930] hover:bg-white text-white rounded-full cursor-pointer transition duration-300 group-hover:bg-white group-hover:text-[#094051]"
            whileHover={{ scale: 1.1 }}
          >
            Buy Now
          </motion.button>
        </motion.div>

        {/* Enterprise Plan */}
        <motion.div
          className="bg-white px-8 py-12 sm:px-12 lg:px-20 sm:py-16 lg:py-20 rounded-2xl shadow-lg text-center border group hover:bg-[#004930] hover:text-white flex flex-col items-center relative transition duration-300 border-t-8 border-t-[#004930] group-hover:shadow-xl transform hover:scale-105"
          style={{ boxShadow: '0 -4px 10px rgba(0, 0, 0, 0.1)' }}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          whileHover="hover"
        >
          <h2 className="text-xl font-semibold mb-2 text-gray-800 group-hover:text-white">Enterprise Plan</h2>
          <h3 className="text-3xl font-bold mt-4 text-gray-900">$100/month</h3>
          <p className="group-hover:text-white text-sm mt-2 text-gray-600 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
          </p>
          <motion.button
            className="mt-4 py-2 px-5 bg-[#004930] hover:bg-white text-white rounded-full cursor-pointer transition duration-300 group-hover:bg-white group-hover:text-[#094051]"
            whileHover={{ scale: 1.1 }}
          >
            Buy Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}

export default Cart;
