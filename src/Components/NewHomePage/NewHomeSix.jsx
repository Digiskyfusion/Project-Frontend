import React from 'react';
import { motion } from 'framer-motion';
import bigc from '../../assets/Images/C.png';

function NewHomeSix() {
  return (
    <div className="bg-green-950 py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-white">
      {/* Flex container: column on mobile, row on large screens */}
      <div className="flex flex-col lg:flex-row items-center gap-10">

        {/* Left section: Image with animated words */}
        <div className="relative w-full lg:w-1/2 h-[350px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <img
            src={bigc}
            alt="Big C"
            className="w-[180px] sm:w-[250px] md:w-[320px] lg:w-[380px] object-contain opacity-90 mx-auto lg:mx-0"
          />

          {/* Animated Text Overlay */}
          <div
            className="
              absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
              lg:top-1/2 lg:left-[230px] lg:transform-none
              flex flex-col items-center lg:items-start
              text-center lg:text-left
              space-y-4 sm:space-y-6 md:space-y-8
              px-2 sm:px-4
            "
          >
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

        {/* Right section: Title, Paragraph, Button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6">
            Build Your Dream Team
          </h2>
          <p className="text-base md:text-lg max-w-lg leading-relaxed text-green-100 mb-6 tracking-wide">
            Your dream team is just a click away! Build your Virtual Talent Bench™ with top-tier freelancers who bring skill, speed, and creativity to your projects.
          </p>
          <button className="px-8 py-3 bg-green-200 text-green-950 text-lg font-bold rounded-xl hover:bg-green-300 hover:shadow-xl hover:scale-105 transition-all duration-300">
            Explore Details
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default NewHomeSix;
