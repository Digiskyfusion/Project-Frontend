import { motion } from "framer-motion";
import "leaflet/dist/leaflet.css";

const Mapsection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full max-w-full overflow-hidden"
    >
      <div className="relative pb-[56.25%] h-0 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54883.169102203836!2d76.65036355154808!3d30.71283169572842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fef59e5c02d15%3A0xdfb3cbb724b16346!2sDigi%20Sky%20Fusion!5e0!3m2!1sen!2sin!4v1739445276937!5m2!1sen!2sin"
          className="absolute top-0 left-0 w-full h-full border-none"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </motion.div>
  );
};

export default Mapsection ;
