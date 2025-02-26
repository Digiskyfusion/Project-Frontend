import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import { CiSearch, CiLocationOn } from "react-icons/ci";
import pic from './../assets/Images/a-modern-and-engaging-digital-illustration-of-a-sm (2) (1) 1.png';
import vector4 from './../assets/Images/Vector 4.png';

function Platform() {
  return (
    <>
    <div className="bg-[#004930] text-white px-6 lg:flex flex-wrap lg:flex-nowrap items-center justify-between gap-8 py-5 lg:px-10 lg:py-0">
      
      {/* {/ Left Section with Y-axis Animation /} */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        className="md:flex items-center gap-6 w-full"
      >
        <img src={pic} alt="DigiSky" className="relative top-[6.6px] lg:w-[60%]" />
        <div className="text-lg relative flex flex-col items-center md:items-start md:right-32 lg:right-26 mt-3 lg:mt-0">
          <p className="text-gray-300 md:text-5xl font-bold">Take job in</p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex"
          >
            <h2 className="text-xl lg:text-4xl  font-semibold bg-[#F66623] px-5 lg:px-5 mt-3 text-center rounded-full">
              DIGISKY
            </h2>
          </motion.div>
          <p className="text-gray-300 md:text-6xl font-bold lg:text-center mt-2">Platform</p>
          <span className="block mt-2 text-sm text-gray-400 relative lg:left-26">
            <strong className="text-[#F66623] md:text-3xl  flex lg:items-center gap-1">
              5K+ <p className="md:text-xl">Candidates</p>
            </strong> 
            <br />
            <span className="text-white font-bold text-xl relative bottom-5">GET JOBS</span>
          </span>
        </div>
        <img src={vector4} alt="Vector" className="absolute left-[23rem] lg:left-80 xl:left-96 lg:w-[24%] xl:full hidden md:block" />
      </motion.div>

      {/* {/ Right Section with Y-axis Animation /} */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full lg:w-2/3 text-center lg:text-left"
      >
        <h1 className="text-2xl font-bold mb-4 sm:text-3xl xl:text-5xl">
          Discover top freelance opportunities
        </h1>

        {/* {/ Search Bar Section with Y-axis Animation /} */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.7, delay: 0.4 }}
          className="bg-white rounded-md lg:rounded-full p-2 flex flex-col sm:flex-row items-center shadow-md gap-4 mt-7"
        >
          {/* {/ Search Input /} */}
          <div className="flex items-center gap-2 px-4 py-2 border-b sm:border-b-0 sm:border-r border-gray-300 w-full sm:w-auto">
            <CiSearch className="text-gray-600 text-xl" />
            <input
              type="text"
              placeholder="Job Title or Keywords"
              className="w-full bg-transparent outline-none text-gray-800 placeholder-gray-500"
            />
          </div>

          {/* {/ Location & Button Container /} */}
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4">
            {/* {/ Location /} */}
            <div className="flex items-center gap-2 py-2 w-full sm:w-auto">
              <CiLocationOn className="text-gray-600 text-xl" />
              <p className="text-gray-700 text-[10px] xl:text-[15px]">All Locations</p>
            </div>

            {/* {/ Animated Button /} */}
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }} 
              className="bg-[#004930] text-white font-semibold px-6 py-2 w-full sm:w-auto rounded-full hover:bg-[#e6c200] transition"
            >
              Find Work
            </motion.button>
          </div>
        </motion.div>

        {/* {/ Description /} */}
        <p className="text-sm text-[#FFFFFF] mt-3 sm:text-base md:text-xl">
          Explore jobs posted on DigiSky or create a free profile to find work you love.
        </p>
      </motion.div>
    </div>
    </>
  );
}

export default Platform;
