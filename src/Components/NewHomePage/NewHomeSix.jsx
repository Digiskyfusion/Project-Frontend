import React from 'react';
import { motion } from 'framer-motion';
import bigc from '../../assets/Images/C.png';

function NewHomeSix() {
  return (
    <div className="bg-green-950 py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-white min-h-screen">
      {/* Container flex: column on small, row on large */}
      <div className="flex flex-col lg:flex-row gap-10">
        
        {/* Left: Big C image + animated words */}
        <div className="flex flex-col items-start w-full lg:w-1/2 h-auto">
          <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] flex items-start justify-start">
            <img
              src={bigc}
              alt="Big C"
              className="w-[180px] sm:w-[250px] md:w-[320px] lg:w-[380px] object-contain opacity-90"
            />
            <div className="absolute top-10 left-[110px] sm:left-[150px] md:left-[190px] lg:left-[230px] flex flex-col items-start text-left space-y-4 sm:space-y-6 md:space-y-8 px-2 sm:px-4 lg:pl-16">
              <motion.h2
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-white drop-shadow-md"
              >
                onnect.
              </motion.h2>
              <motion.h3
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-100 to-white drop-shadow-md"
              >
                ollaborate.
              </motion.h3>
              <motion.h4
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1.4 }}
                className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white drop-shadow-md"
              >
                reate.
              </motion.h4>
            </div>
          </div>
        </div>

        {/* Right: Text + Button, vertically centered */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
            Build Your Dream Team
          </h2>
          <p className="text-base md:text-lg max-w-lg mx-auto lg:mx-0 leading-relaxed text-green-100 mb-6 tracking-wide">
            Your dream team is just a click away! Build your Virtual Talent Bench™ with top-tier freelancers who bring skill, speed, and creativity to your projects.
          </p>
          <button className="mt-4 px-8 py-3 bg-green-200 text-green-950 text-lg font-bold rounded-xl hover:bg-green-300 hover:shadow-xl hover:scale-105 transition-all duration-300">
            Explore Details
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default NewHomeSix;
