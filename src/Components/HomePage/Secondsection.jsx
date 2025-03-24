import React from "react";
import { FaPencilAlt, FaShieldVirus } from "react-icons/fa";
import professionalteam from "./../../assets/Images/professionalteam.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Secondsection() {
  return (
    <section className="container mx-auto px-6 py-12 bg-gradient-to-b from-gray-50 to-gray-200">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
      >
        {/* Left Section - Text */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center lg:text-left space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
            Elevate Your Work to <span className="text-[#004930]">New Heights</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl">
          Discover seamless collaboration and unlock new opportunities with our powerful network.
          </p>

          {/* Features List */}
          <div className="space-y-6">
            {[
              { icon: <FaPencilAlt />, title: "Drop Us a Message", text: "We’d love to hear from you!Connect with top talent." },
              { icon: <FaPencilAlt />, title: "Let’s Work Together", text: "Whether you’re hiring or freelancing, we’ve got your back" },
              { icon: <FaShieldVirus />, title: "Join a Thriving Network", text: "Connect with top talent and game-changing projects" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-center gap-6 p-5 bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-3xl sm:text-4xl p-4 bg-[#004930] text-white rounded-full shadow-lg">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-lg sm:text-xl font-semibold text-gray-700">
                    {item.title}
                  </h2>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mt-6"
          >
            <Link
              to="/registration"
              className="px-6 py-3 rounded-full bg-[#004930] text-white font-medium shadow-lg hover:bg-[#036347] transition-all duration-300 transform hover:scale-105"
            >
              Create an Account
            </Link>
            <Link
              to="/discover"
              className="px-6 py-3 rounded-full border-2 border-[#004930] text-[#004930] font-medium shadow-lg hover:bg-[#004930] hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Discover How to Hire
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Section - Full Width Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <motion.img
            loading="lazy"
            src={professionalteam}
            alt="Professional Team"
            className="w-full h-auto rounded-lg shadow-lg transform hover:scale-105 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Secondsection;
