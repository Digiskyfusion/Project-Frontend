import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaUser, FaBriefcase, FaPen } from "react-icons/fa";


const UserSkillsEdit = () => {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const [userId, setUserId] = useState(null);
  const [roleType, setRoleType] = useState("");
  const [user, setUser] = useState({ skills: "", bio: "", experience: "" });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      try {
        const parsedData = JSON.parse(userData);
        setUserId(parsedData?._id || null);
        setRoleType(parsedData?.roleType || "");
      } catch (error) {
        console.error("Error parsing user data:", error);
      }
    }
  }, []);

  useEffect(() => {
    if (!userId) return;
    const fetchUserData = async () => {
      try {
        const response = await axios.get(`${API_URL}/user/${userId}`);
        setUser(response.data);
      } catch (error) {
        toast.error("Failed to fetch user data");
      }
    };
    fetchUserData();
  }, [API_URL, userId]);

  const handleSave = async () => {
    setLoading(true);
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Authentication token not found. Please log in again.");
        navigate("/login");
        return;
      }

      const response = await axios.put(`${API_URL}/user/${userId}`, user, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.status === 200) {
        toast.success("Profile updated successfully!");
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 500);
      } else {
        toast.error(response?.data?.message || "Failed to update profile.");
      }
    } catch (error) {
      toast.error("Error updating profile: " + (error.response?.data?.message || error.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col bg-green-100 p-4 md:p-8">
      <Toaster />
      <div className="flex flex-grow justify-center items-center">
        <div className="bg-white shadow-2xl rounded-2xl p-10 w-full max-w-6xl transform hover:scale-[1.02] transition-all duration-300">
          <h1 className="text-4xl font-bold text-center text-[#004930] mb-6 animate-fade-in">
            Edit Your Skills
          </h1>

          <div className="grid grid-cols-1 gap-6">
            {[
              { label: "Skills", value: "skills", placeholder: "Enter your skills", icon: <FaUser /> },
              { label: "Bio", value: "bio", placeholder: "Write a short bio", textarea: true, icon: <FaPen /> },
              { label: "Experience", value: "experience", placeholder: "Years of experience", icon: <FaBriefcase /> },
            ].map((field, index) => (
              <div key={index} className="relative animate-fade-in delay-100">
                <label className="block text-[#004930] font-medium mb-2">{field.label}</label>
                <div className="flex items-center border border-[#004930] rounded-lg shadow-sm focus-within:ring-2 focus-within:ring-[#004930] bg-gray-50">
                  <span className="px-3 text-[#004930]">{field.icon}</span>
                  {field.textarea ? (
                    <textarea
                      className="w-full p-3 h-32 border-none focus:ring-0 bg-transparent text-gray-700 outline-0 resize-none overflow-auto"
                      value={user[field.value] || ""}
                      onChange={(e) => setUser({ ...user, [field.value]: e.target.value })}
                      placeholder={field.placeholder}
                    ></textarea>
                  ) : (
                    <input
                      type="text"
                      className="w-full p-3 border-none focus:ring-0 bg-transparent text-gray-700 outline-0"
                      value={user[field.value] || ""}
                      onChange={(e) => setUser({ ...user, [field.value]: e.target.value })}
                      placeholder={field.placeholder}
                    />
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className=" w-full md:flex gap-3 justify-between mt-8">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 w-full text-[#004930] border border-[#004930] rounded-lg hover:bg-[#b2e7d5] hover:text-black transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className={`px-6 py-2 w-full mt-3 md:mt-0 bg-[#004930] text-white rounded-lg ${
                loading ? "opacity-75" : "hover:bg-[#00371f]"
              } transition-all`}
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSkillsEdit;
