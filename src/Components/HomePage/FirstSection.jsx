import { motion } from "framer-motion"; // Import framer-motion
import { FaReact } from "react-icons/fa";
import female from "./../../assets/Images/femalefirst.png";
import value from "./../../assets/Images/15k.png";
import male from "./../../assets/Images/malefirst.png";
import FirstSectionCarousel from "./FirstSectionCarousel";

function FirstSection() {
  return (
    <motion.div 
      className="bg-[#004930] flex flex-col items-center"
      initial={{ opacity: 0, y: 50 }} // Start hidden and lower on the Y-axis
      whileInView={{ opacity: 1, y: 0 }} // Fade in and move up when in view
      transition={{ duration: 1 }} // Duration of animation
    >
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end w-full relative">
        {/* Left Image */}
        <motion.div
          className="w-full sm:w-1/4 flex justify-center relative h-60 sm:h-full"
          initial={{ opacity: 0, y: 50 }} // Start lower on Y-axis
          whileInView={{ opacity: 1, y: 0 }} // Move up and fade in when in view
          transition={{ duration: 1 }}
        >
          <img 
            src={male} 
            alt="Male" 
            className="w-full h-full object-cover" 
          />
          {/* Value Image in the Top Right Corner of Male Image */}
          <img
            src={value}
            alt="Value"
            className="absolute top-20 right-20 md:right-8 md:top-13   lg:top-20 lg:right-20    w-16 lg:w-24 h-16 lg:h-24 object-contain"
          />
        </motion.div>

        {/* Center Carousel */}
        <motion.div
          className="w-full sm:w-1/2 px-5 lg:mb-20"
          initial={{ opacity: 0, y: 50 }} // Start lower on Y-axis
          whileInView={{ opacity: 1, y: 0 }} // Move up and fade in when in view
          transition={{ duration: 1 }}
        >
          <FirstSectionCarousel />
          <div className="flex justify-center items-center pb-3 mt-6 sm:mt-0">
            <div className="border-2 rounded-full border-white px-5 py-3 flex items-center text-white w-full sm:w-auto">
              <input 
                type="text" 
                placeholder="Ask anything, AI is here to help..." 
                className="outline-0 px-5 w-full sm:w-72"
              />
              <FaReact className="text-2xl" />
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full sm:w-1/4 flex justify-center relative h-60 sm:h-full"
          initial={{ opacity: 0, y: 50 }} // Start lower on Y-axis
          whileInView={{ opacity: 1, y: 0 }} // Move up and fade in when in view
          transition={{ duration: 1 }}
        >
          <img 
            src={female} 
            alt="Female" 
            className="w-full h-full object-cover" 
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default FirstSection;
