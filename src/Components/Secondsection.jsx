import React, { useRef } from 'react';
import { FaPencilAlt, FaShieldVirus } from 'react-icons/fa';
import { motion, useInView } from 'framer-motion';
import professionalteam from './../assets/Images/professionalteam.png';

function Secondsection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, margin: "-100px" });

  return (
    <section ref={sectionRef} className="container mx-auto px-6 py-12 bg-gray-100">
      <motion.div 
        initial={{ opacity: 0, y: 50 }} 
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row items-center justify-between gap-8"
      >
        {/* Left Section */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }} 
          animate={isInView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 space-y-6"
        >
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
            Take your work to the next level, it’s simple
          </h1>

          {/* Features List */}
          <div className="space-y-6">
            {[
              { icon: <FaPencilAlt className="text-6xl bg-[#004930] p-4 text-white rounded-full shadow-lg" />, title: "Joining is completely free", text: "Sign up to view talent profiles, discover projects, or schedule a consultation." },
              { icon: <FaPencilAlt className="text-6xl bg-[#004930] p-4 text-white rounded-full shadow-lg" />, title: "Create a job listing and hire the best talent", text: "Sign up to view talent profiles, discover projects, or schedule a consultation." },
              { icon: <FaShieldVirus className="text-6xl bg-[#004930] p-4 text-white rounded-full shadow-lg" />, title: "Collaborate with top talent—at an affordable price", text: "Sign up to view talent profiles, discover projects, or schedule a consultation." },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-6 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300"
              >
                {item.icon}
                <div>
                  <h2 className="text-xl font-semibold text-gray-700">{item.title}</h2>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Section - Image */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }} 
          animate={isInView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 flex justify-center"
        >
          <img src={professionalteam} alt="Professional Team" className="max-w-full h-auto rounded-lg shadow-lg transform hover:scale-110 transition duration-300" />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Secondsection;
