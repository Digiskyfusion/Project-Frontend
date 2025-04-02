import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaUser, FaBriefcase, FaPen, FaImage } from "react-icons/fa";
import supabase from "../../supabaseClient";
const skillsOptions = [
  "Digital Marketing",
  "Graphic Designing",
  "Video Editing",
  "Development",
  "Content Writing",
  "Influencer Marketing",
];

const FreelancerSkills = () => {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const [userId, setUserId] = useState(null);
  const [roleType, setRoleType] = useState("");
  const [user, setUser] = useState({ skills: "", bio: "", experience: "", image: "" });
  const [loading, setLoading] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

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
        setUser({ ...response.data, skills: response.data.skills || "", image: response.data.image || "" });
        setImagePreview(response.data.image || null);
      } catch (error) {
        toast.error("Failed to fetch user data");
      }
    };
    fetchUserData();
  }, [API_URL, userId]);

  
  const handleImageChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;
  
    // Show a temporary local preview
    const fileReader = new FileReader();
    fileReader.onload = () => setImagePreview(fileReader.result);
    fileReader.readAsDataURL(file);
  
    setLoading(true);
    const fileExt = file.name.split(".").pop();
    const fileName = `${userId}-${Date.now()}.${fileExt}`;
    const filePath = `images/${fileName}`;
  
    try {
      // Upload the file to Supabase storage
      const { data, error } = await supabase.storage.from("images").upload(filePath, file);
      if (error) throw error;
  
      // Get the public URL correctly
      const publicUrl = supabase.storage.from("images").getPublicUrl(filePath).data.publicUrl;
      
      console.log("Public URL:", publicUrl);
  
      setUser((prevUser) => ({ ...prevUser, image: publicUrl }));
      setImagePreview(publicUrl);
      toast.success("Image uploaded successfully!");
    } catch (error) {
      toast.error("Failed to upload image: " + error.message);
    } finally {
      setLoading(false);
    }
  };
  
  
  

  const handleSave = async () => {
    setLoading(true);
    try {
  
      const response = await axios.put(`${API_URL}/user/${userId}`, user, {
      });
  
      if (response.status === 200) {
        toast.success("Profile updated successfully!");
  
        // Update the user state with the latest saved data to persist it in inputs
        setUser({
          ...user,
          bio: response.data.bio || user.bio,
          experience: response.data.experience || user.experience,
          skills: response.data.skills || user.skills,
          image: response.data.image || user.image,
        });
  
        setTimeout(() => {
          navigate("/UserSkills");
          window.location.reload(); // Reload to reflect updated data
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
       Add Skills
          </h1>

          <div className="grid grid-cols-1 gap-6">
            {/* Skills Dropdown */}
            {/* Skills Selection */}
<div className="relative animate-fade-in delay-100">
  <label className="block text-[#004930] font-medium mb-2">Skills (Max 3)</label>
  <div className="border border-[#004930] rounded-lg shadow-sm bg-gray-50 p-3">
    {skillsOptions.map((skill, index) => (
      <label key={index} className="flex items-center gap-2 mb-2">
        <input
          type="checkbox"
          value={skill}
          checked={user.skills.includes(skill)}
          onChange={(e) => {
            const selectedSkill = e.target.value;
            if (user.skills.includes(selectedSkill)) {
              // Remove skill if already selected
              setUser({
                ...user,
                skills: user.skills.filter((s) => s !== selectedSkill),
              });
            } else if (user.skills.length < 3) {
              // Add skill if less than 3 are selected
              setUser({
                ...user,
                skills: [...user.skills, selectedSkill],
              });
            } else {
              toast.error("You can select up to 3 skills only.");
            }
          }}
        />
        {skill}
      </label>
    ))}
  </div>
</div>


            {/* Bio */}
            <div className="relative animate-fade-in delay-100">
              <label className="block text-[#004930] font-medium mb-2">Bio</label>
              <div className="flex items-center border border-[#004930] rounded-lg shadow-sm bg-gray-50">
                <span className="px-3 text-[#004930]"><FaPen /></span>
                <textarea
                  className="w-full p-3 h-32 border-none focus:ring-0 bg-transparent text-gray-700 outline-0 resize-none"
                  value={user.bio}
                  onChange={(e) => setUser({ ...user, bio: e.target.value })}
                  placeholder="Write a short bio"
                />
              </div>
            </div>

            {/* Experience */}
            <div className="relative animate-fade-in delay-100">
              <label className="block text-[#004930] font-medium mb-2">Experience</label>
              <div className="flex items-center border border-[#004930] rounded-lg shadow-sm bg-gray-50">
                <span className="px-3 text-[#004930]"><FaBriefcase /></span>
                <input
                  type="text"
                  className="w-full p-3 border-none focus:ring-0 bg-transparent text-gray-700 outline-0"
                  value={user.experience}
                  onChange={(e) => setUser({ ...user, experience: e.target.value })}
                  placeholder="Years of experience"
                />
              </div>
            </div>

            {/* Image Upload */}
            <div className="relative animate-fade-in delay-100">
              <label className="block text-[#004930] font-medium mb-2">Upload Image</label>
              <div className="flex items-center border border-[#004930] rounded-lg shadow-sm bg-gray-50 p-3">
                <span className="px-3 text-[#004930]"><FaImage /></span>
                <input
                  type="file"
                  className="w-full border-none focus:ring-0 bg-transparent text-gray-700 outline-0"
                  accept="image/*"
                  onChange={handleImageChange}
                />
              </div>
              {imagePreview && (
                <div className="mt-4 flex justify-center">
                  <img src={imagePreview} alt="Preview" className="w-32 h-32 rounded-lg shadow-md" />
                </div>
              )}
            </div>
          </div>

          <div className="w-full md:flex gap-3 justify-between mt-8">
            <button
              onClick={() => navigate(-1)}
              className="px-6 py-2 w-full text-[#004930] border border-[#004930] rounded-lg hover:bg-[#b2e7d5] hover:text-black transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className={`px-6 py-2 w-full mt-3 md:mt-0 bg-[#004930] text-white rounded-lg ${loading ? "opacity-75" : "hover:bg-[#00371f]"} transition-all`}
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

export default FreelancerSkills;
