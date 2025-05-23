import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Carousel from "./Carousel";

function Component() {
  const navigate = useNavigate();
  const handleDetailsClick = () => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user"); // Retrieve user object
  
    if (!token) {
      navigate("/login"); // Redirect to login if no token
      return;
    }
  
    if (user) {
      try {
        const parsedUser = JSON.parse(user); // Parse stored user object
        const roleType = parsedUser?.roleType; // Get role safely
  
        // console.log("User Role:", roleType); // Debugging
        
        if (roleType === "client") {
          navigate("/freelancerlist"); // Navigate to client list
        } else if (roleType === "freelancer") {
          navigate("/clientlist"); // Navigate to freelancer list
        } else {
          navigate("/login"); // Default fallback
        }
      } catch (error) {
        console.error("Error parsing user data:", error);
        navigate("/login"); // Fallback navigation
      }
    } else {
      navigate("/login"); // If no user is found
    }
  };
  

  return (
    <motion.div
      className="w-full bg-gray-50 py-10 px-6 sm:px-12"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: false, amount: 0.2 }}
    >
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between">
        {/* Text Section */}
        <motion.div
          className="md:w-2/3 space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Connect. Collaborate. Create.
          </h1>
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
            Your dream team is just a click away! Build your Virtual Talent Bench™ with
            top-tier freelancers who bring skill, speed, and creativity to your projects.
          </p>
        </motion.div>

        {/* Button Section */}
        <motion.div
          className="mt-6 md:mt-0 md:w-1/3 flex md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.button
            onClick={handleDetailsClick} // Click event added here
            className="px-8 py-3 bg-[#004930] text-white text-lg font-semibold rounded-full shadow-md hover:bg-teal-700 transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05, rotate: 3 }} // Rotation effect
            whileTap={{ scale: 0.95 }}
          >
            Details
          </motion.button>
        </motion.div>
      </div>

      {/* Carousel Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Carousel />
      </motion.div>
    </motion.div>
  );
}

export default Component;
