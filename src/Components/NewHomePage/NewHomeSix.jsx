import React from 'react';
import { motion } from 'framer-motion';
import bigc from '../../assets/Images/C.png';
import { Link } from 'react-router-dom';

function NewHomeSix() {
  return (
    <div className="bg-green-950 py-7 px-4 sm:px-8 md:px-16 lg:py-20 lg:px-30 text-white eb-garamond">
      <div className="flex flex-col md:flex-row gap-10">

        {/* Left: Image + animated words */}
        <div className="flex flex-col items-center w-full md:w-1/2 h-auto">
          <div className="relative w-full h-[200px] sm:h-[400px] md:h-[300px] lg:h-[350px] flex items-start justify-center sm:justify-start">
            <img
              src={bigc}
              alt="Big C"
              className="w-[180px] sm:w-[250px] md:w-[320px] lg:w-[280px] object-contain opacity-90"
            />
            <div className="absolute top-12 left-[150px] sm:left-[150px] md:left-[50px] lg:top-20 lg:left-[50px] flex flex-col items-start text-left space-y-1 sm:space-y-6 md:space-y-1 px-2 sm:px-4 lg:pl-16">
              <motion.h2
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: false }}
                className="text-3xl sm:text-2xl md:text-3xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-white drop-shadow-md"
              >
                onnect.
              </motion.h2>
              <motion.h3
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: false }}
                className="text-2xl sm:text-3xl md:text-2xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-white drop-shadow-md"
              >
                ollaborate.
              </motion.h3>
              <motion.h4
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.4 }}
                viewport={{ once: false }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white drop-shadow-md"
              >
                reate.
              </motion.h4>
            </div>
          </div>
        </div>

        {/* Right: Text + Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          viewport={{ once: false }}
          className="w-full lg:w-1/2 flex flex-col justify-center  text-center lg:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Build Your Dream Team
          </h2>
          <p className="text-base md:text-lg max-w-lg leading-relaxed text-green-100 mb-6 tracking-wide">
            Your dream team is just a click away! Build your Virtual Talent Bench™ with top-tier freelancers who bring skill, speed, and creativity to your projects.
          </p>
          <Link to="/registration">
            <button className="bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold border border-gray-300 shadow-[0_4px_0_#a0aec0] transform transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_6px_0_#a0aec0] active:translate-y-0 active:shadow-[0_2px_0_#a0aec0] cursor-pointer w-full mt-4 sm:mt-0">
              Create Account
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}

export default NewHomeSix;
