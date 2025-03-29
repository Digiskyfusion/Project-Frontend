import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaEnvelope, FaUser, FaTools } from "react-icons/fa";
import defaultImage from "../assets/Images/userimage.png";

const SkillPage = () => {
  const { skillName } = useParams();
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;

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

  return (
    <div className="container mx-auto py-10 px-6">
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
          {users.map((user) => (
            <div
              key={user._id}
              className="relative bg-[#004930] shadow-lg rounded-xl overflow-hidden border border-gray-200 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:border-[#00ff9f] group"
            >
              {/* Profile Image */}
              <div className="flex justify-center pt-6">
                <div className="w-24 h-24 rounded-full border-4 border-[#ffffff] overflow-hidden shadow-md transition-all duration-300 group-hover:border-[#00ff9f] group-hover:scale-110">
                  <img
                    src={user.profileImage || defaultImage}
                    alt={user.name}
                    className="w-full h-full object-cover object-center aspect-square rounded-full"
                  />
                </div>
              </div>

              {/* User Details */}
              <div className="p-5 text-center text-white">
                <h2 className="text-xl font-bold flex items-center justify-center transition-all duration-300 group-hover:text-[#00ff9f] opacity-90 group-hover:opacity-100">
                  <FaUser className="mr-2 text-[#00ff9f]" /> {user.name}
                </h2>
                <p className="flex items-center justify-center mt-2 text-sm transition-all duration-300 group-hover:text-[#00ff9f] opacity-90 group-hover:opacity-100">
                  <FaEnvelope className="mr-2 text-[#00ff9f]" /> {user.email}
                </p>
                <p className="text-sm mt-3 flex items-center justify-center transition-all duration-300 group-hover:text-[#00ff9f] opacity-90 group-hover:opacity-100">
                  <FaTools className="mr-2 text-[#00ff9f]" />
                  {user.skills?.length ? user.skills.join(", ") : "N/A"}
                </p>
              </div>

              {/* Subtle Bottom Glow */}
              <div className="h-1 bg-[#00ff9f] opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillPage;
