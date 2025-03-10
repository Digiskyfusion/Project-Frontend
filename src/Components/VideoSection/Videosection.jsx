import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

function Videosection() {
  const videoSrc = "https://www.youtube.com/embed/s9xk77X4m5c";
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { triggerOnce: false, margin: "-100px" });

  return (
    <motion.section 
      ref={sectionRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="container px-6 py-12 md:px-10"
    >
      <motion.h1
        initial={{ opacity: 0, x: -50 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-2xl md:text-3xl md:w-[50%] font-bold text-gray-800 mb-6"
      >
        Observe this video to grasp client-freelancer collaboration on this platform.
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="flex justify-center"
      >
        <iframe
          className="w-full lg:w-3/4 h-64 md:h-[33rem] rounded-lg shadow-lg transform transition duration-500 ease-in-out md:hover:scale-105"
          src={videoSrc}
          title="Client-Freelancer Collaboration"
          allowFullScreen
          loading="lazy"
          aria-label="Client-Freelancer Collaboration Video"
        ></iframe>
      </motion.div>
    </motion.section>
  );
}

export default Videosection;
