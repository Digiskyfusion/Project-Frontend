import React from 'react';
import { FaPencilAlt, FaShieldVirus } from 'react-icons/fa';
import professionalteam from './../../assets/Images/professionalteam.png';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function Secondsection() {
  return (
    <section className="container mx-auto px-6 py-12 bg-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* Left Section */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Take your work to the next level, it’s simple
          </h1>

          {/* Features List */}
          <div className="space-y-6">
            {[
              { icon: <FaPencilAlt />, title: 'Drop us a message', text: 'We’d love to hear from you!' },
              { icon: <FaPencilAlt />, title: 'Let’s work together', text: 'Whether you’re hiring or freelancing, we’ve got your back.' },
              { icon: <FaShieldVirus />, title: 'Join a thriving network', text: 'Connect with top talent and game-changing projects' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-6 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300"
              >
                <div className="text-4xl p-4 bg-[#004930] text-white rounded-full shadow-lg">
                  {item.icon}
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-700">{item.title}</h2>
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
            className="flex flex-col md:flex-row gap-4 mt-6"
          >
            <Link to="/registration" className="px-6 py-3 rounded-full bg-[#004930] text-white font-medium shadow-lg hover:opacity-90 transition duration-300 transform hover:scale-105">
              Create an account at no cost
            </Link>
            <Link to="/discover" className="px-6 py-3 rounded-full border-2 border-[#004930] text-[#004930] font-medium shadow-lg hover:bg-[#004930] hover:text-white transition duration-300 transform hover:scale-105">
              Discover how to hire
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img
            loading="lazy"
            src={professionalteam}
            alt="Professional Team"
            className="max-w-full h-auto rounded-lg shadow-lg transform hover:scale-110 transition duration-300"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Secondsection;
