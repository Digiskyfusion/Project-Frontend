import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { FaEnvelope, FaUser, FaTools } from "react-icons/fa";
import defaultImage from "../assets/Images/userimage.png";

const SkillPage = () => {
  const { skillName } = useParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;
  const controls = useAnimation();
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const decodedSkill = decodeURIComponent(skillName);
        const response = await fetch(
          `${API_URL}/user/skills?skill=${encodeURIComponent(decodedSkill)}`
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [skillName]);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-10 px-6"
    >
      <h1 className="text-4xl font-bold text-[#004930] text-center mb-8 tracking-wide uppercase">
        Skilled Professionals in {decodeURIComponent(skillName)}
      </h1>

      {loading ? (
        <p className="text-center text-lg text-[#004930] font-semibold animate-pulse">
          Loading...
        </p>
      ) : users.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">
          No users found with this skill.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {users.map((user, index) => (
            <motion.div
              key={user._id}
              initial={{ opacity: 0, y: scrollDirection === "down" ? 50 : -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: false, amount: 0.2 }}
              whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(0,255,159,0.4)" }}
              className="relative bg-[#004930] shadow-lg rounded-xl overflow-hidden border border-gray-200 transition-all hover:scale-105  transform hover:border-[#00ff9f] group"
            >
              {/* Profile Image */}
              <motion.div whileHover={{ scale: 1.1 }} className="flex justify-center pt-6">
                <div className="w-24 h-24 rounded-full border-4 border-[#ffffff] overflow-hidden shadow-md transition-all duration-300 group-hover:border-[#00ff9f]">
                  <img
                    src={user.profileImage || defaultImage}
                    alt={user.name}
                    className="w-full h-full object-cover object-center aspect-square rounded-full"
                  />
                </div>
              </motion.div>

              {/* User Details */}
              <div className="p-5 text-center text-white">
                <h2 className="text-xl font-bold flex items-center justify-center transition-all duration-300 group-hover:text-[#00ff9f]">
                  <FaUser className="mr-2 text-[#00ff9f]" /> {user.name}
                </h2>
                <p className="flex items-center justify-center mt-2 text-sm transition-all duration-300 group-hover:text-[#00ff9f]">
                  <FaEnvelope className="mr-2 text-[#00ff9f]" /> {user.email}
                </p>
                <p className="text-sm mt-3 flex items-center justify-center transition-all duration-300 group-hover:text-[#00ff9f]">
                  <FaTools className="mr-2 text-[#00ff9f]" />
                  {user.skills?.length ? user.skills.join(", ") : "N/A"}
                </p>
              </div>

              {/* Subtle Bottom Glow */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="h-1 bg-[#00ff9f] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              ></motion.div>
            </motion.div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default SkillPage;
