import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import pic from './../../assets/Images/145856997_296fe121-5dfa-43f4-98b5-db50019738a7.jpg';
import toast, { Toaster } from "react-hot-toast";
import Dashboard from "../DashboardPage/Dashboard";
import Footer from "../Footer/Footer";
import SectionImage from "../SectionImage/SectionImage";
import supabase from "../../supabaseClient";
function FreelancerDetails() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  // const [userId, setUserId] = useState(null); // New state for user ID
  const [formData, setFormData] = useState({
    accountType: "Freelancer",
    fullName: "",
    email: "",
    phone: "",
    address: "",
    skills: "",
    experience: "",
    bio: "",
    profileImage: null,
  });

  const [errors, setErrors] = useState({});
  const [imagePreview, setImagePreview] = useState(pic);

  const user = JSON.parse(localStorage.getItem("user")); // Convert string to object
  // console.log(user?._id); // Output: 67dba534cad6ddb11e7ed5d2
  

  // Redirect if not authenticated
  useEffect(() => {
    const token = localStorage.getItem("token");
   

    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  // Handle text input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image upload
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const fileExt = file.name.split(".").pop();
    const fileName = `FreelancerProfile-${Date.now()}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from("images") // Supabase bucket name
      .upload(`images/${fileName}`, file);

    if (error) {
      console.error("Error uploading image:", error.message);
      alert("Failed to upload image");
      return;
    }

    const publicUrl = supabase.storage
      .from("images")
      .getPublicUrl(`images/${fileName}`).data.publicUrl;

    setFormData({ ...formData, profileImage: publicUrl });
    setImagePreview(publicUrl);
  };

  // Validate form before submission
  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.skills.trim()) newErrors.skills = "Skills are required";
    if (!formData.experience.trim()) newErrors.experience = "Experience is required";
    if (!formData.bio.trim()) newErrors.bio = "Bio cannot be empty";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    const token = localStorage.getItem("token");

    // Prepare FormData for backend
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    try {
      const response = await axios.post(
        "http://localhost:3000/api/freelancersP/createfreelancerprofile",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      toast.success("freelancer form successful!");
      // console.log(response.data.freelancer.user_id);
      const userId = response.data.freelancer.user_id; // Assuming this is the correct field
      navigate(`/freelancerid/${userId}`, { state: { freelancer: response.data.freelancer } });

      setFormData({
        accountType: "Freelancer",
        fullName: "",
        email: "",
        phone: "",
        address: "",
        skills: "",
        experience: "",
        bio: "",
        profileImage: null,
      });
      setImagePreview(pic);
    } catch (error) {
      console.error("Error submitting:", error);
      toast.success("you are already successful!");
    } finally {
      setLoading(false); 
    }
  };

  return (
    <>
      <div className="flex">
        {/* Sidebar Section */}
        <div className="min-h-screen h-screen">
          <Dashboard />
        </div>

        {/* Main Section */}
        <div className="flex-1">
          <div className="flex flex-wrap gap-6 bg-[#EBEEF2] px-6 md:px-10 py-6">
            {/* Freelancer Details Form */}
            
            <div className="bg-[#FFFFFF] px-6 py-6 rounded-xl md:px-10 w-full md:w-3/5">
              <h1 className="text-lg md:text-2xl font-semibold">Freelancer Details</h1>
              <form className="mt-4" onSubmit={handleSubmit}>
              <Toaster />
                {/* Account Type (Disabled) */}
                <div className="mb-4">
                  <label className="font-medium" htmlFor="accountType">Account Type</label>
                  <input
                    type="text"
                    id="accountType"
                    name="accountType"
                    value={formData.accountType}
                    className="w-full border-2 border-black outline-0 px-5 py-2 rounded-xl bg-gray-200"
                    disabled
                  />
                </div>

                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="font-medium" htmlFor="fullName">Full Name</label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="w-full border-2 border-black outline-0 px-5 py-2 rounded-xl"
                    />
                    {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                  </div>
                  <div>
                    <label className="font-medium" htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full border-2 border-black outline-0 px-5 py-2 rounded-xl"
                    />
                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                  </div>
                </div>

                {/* address and phone number */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="font-medium">Phone Number</label>
                    <input type="text" name="phone" value={formData.phone} onChange={handleChange} className="w-full border px-5 py-2 rounded-xl" />
                  </div>
                  <div>
                    <label className="font-medium">Address</label>
                    <input type="text" name="address" value={formData.address} onChange={handleChange} className="w-full border px-5 py-2 rounded-xl" />
                  </div>
                </div>

                {/* Skills and Experience */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <label className="font-medium" htmlFor="skills">Skills</label>
                    <input
                      type="text"
                      id="skills"
                      name="skills"
                      value={formData.skills}
                      onChange={handleChange}
                      className="w-full border-2 border-black outline-0 px-5 py-2 rounded-xl"
                    />
                  </div>
                  <div>
                    <label className="font-medium" htmlFor="experience">Experience</label>
                    <input
                      type="text"
                      id="experience"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      className="w-full border-2 border-black outline-0 px-5 py-2 rounded-xl"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-6 flex flex-col md:flex-row items-center gap-4">
  <button 
    type="submit" 
    className="w-full md:w-auto bg-[#004930] text-white px-6 py-2 rounded-full hover:bg-[#003720] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
    disabled={loading}
  >
    {loading ? "Submitting..." : "Submit"}
  </button>

  <button 
    className="w-full md:w-auto px-6 py-2 rounded-full bg-[#004930] text-white hover:bg-[#003720] transition-all"
    onClick={() => navigate(`/freelancerid/${user._id}`)}
  >
    View Profile
  </button>
</div>

              </form>
              
            </div>

            {/* Freelancer Profile Section */}
            <div className="bg-[#FFFFFF] px-6 py-6 rounded-xl w-full md:w-1/3 text-center shadow-lg">
  {/* Profile Image */}
  <img src={imagePreview} alt="Profile" className="w-24 h-24 mx-auto rounded-full object-cover" />
              
  
  {/* File Upload */}
  <input 
    type="file" 
    onChange={handleImageChange} 
    className="hidden" 
    id="upload-profile" 
  />
  <label 
    htmlFor="upload-profile" 
    className="bg-[#004930] text-white px-6 py-2 rounded-full cursor-pointer hover:bg-[#003720] transition-all mt-4 inline-block"
  >
    Upload
  </label>

  {/* Bio Section */}
  <div className="mt-6 border-t-2 border-gray-300 pt-4 text-left">
    <label htmlFor="bio" className="font-medium block mb-1 text-center">Bio</label>
    <textarea 
      id="bio"
      name="bio"
      value={formData.bio} 
      onChange={handleChange} 
      className="w-full border px-5 py-2 rounded-xl resize-none"
      rows="3"
    />
  </div>
</div>
           
          </div>
          <SectionImage />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FreelancerDetails;
