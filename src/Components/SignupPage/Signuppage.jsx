import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaUser, FaGlobe, FaEnvelope, FaPhone, FaLock, FaUsers, FaEye, FaEyeSlash, FaGoogle, FaApple } from "react-icons/fa";
import newpic from "./../../assets/Images/new pic.png";

function Signuppage() {
  const API_URL = import.meta.env.VITE_API_URL;
  console.log("API_URL");
  console.log(API_URL);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    roleType: "",
    country: "",
    mobileNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };
   
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://loacalhost:3000/api/auth/signup`, formData);
      console.log("response");
      console.log(response);
      toast.success("Signup successful!");
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("token", response.data.token);
      navigate(formData.roleType === "freelancer" ? "/FreelancerClientPage" : "/client");
      setFormData({ name: "", email: "", password: "", roleType: "", country: "", mobileNumber: "" });
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-3">
      <Toaster />
      <div className="p-5 w-full flex flex-col items-center md:w-1/2 md:py-5">
        <h1 className="text-3xl font-bold text-center text-black mb-2">DIGISKY</h1>
        <p className="text-center text-gray-700 mb-6">Please Sign Up to continue</p>
        <div className="flex justify-center gap-4 mb-4">
          <button className="px-6 py-1 rounded-full border-2 text-green-700 border-green-700" onClick={() => navigate("/login")}>
            Login
          </button>
          <button className="px-6 py-1 rounded-full bg-green-700 text-white border-2 border-green-700">Sign Up</button>
        </div>
        <form className="w-full flex flex-col" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <label className="relative">
              <input type="text" name="name" placeholder="Username" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-lg" />
              <FaUser className="absolute right-3 top-3 text-gray-400" />
            </label>
            <label className="relative">
              <select name="country" value={formData.country} onChange={handleChange} className="w-full p-2 border rounded-lg">
                <option value="" disabled>Select Country</option>
                {["USA", "Canada", "UK", "Australia", "India", "Germany", "France", "Japan", "China", "Brazil"].map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
              <FaGlobe className="absolute right-3 top-3 text-gray-400" />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <label className="relative">
              <input type="email" name="email" placeholder="Enter email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded-lg" />
              <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
            </label>
            <label className="relative">
              <input type="text" name="mobileNumber" placeholder="Enter phone number" value={formData.mobileNumber} onChange={handleChange} className="w-full p-2 border rounded-lg" />
              <FaPhone className="absolute right-3 top-3 text-gray-400" />
            </label>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <label className="relative">
              <select name="roleType" value={formData.roleType} onChange={handleChange} className="w-full p-2 border rounded-lg">
                <option value="" disabled>Select Role Type</option>
                <option value="freelancer">Freelancer</option>
                <option value="client">Client</option>
              </select>
              <FaUsers className="absolute right-3 top-3 text-gray-400" />
            </label>
            <label className="relative">
              <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded-lg" />
              <button type="button" className="absolute right-3 top-3 text-gray-400" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </label>
          </div>
          <button className="bg-green-700 text-white py-2 px-6 rounded-full w-full">Sign Up</button>
        </form>
        <div className="flex flex-col items-center gap-4 mt-6">
          <button className="flex items-center gap-2 bg-green-700 text-white py-2 px-6 rounded-full w-full max-w-sm">
            <FaGoogle className="text-xl" /> Continue with Google
          </button>
          <button className="flex items-center gap-2 border-2 border-green-700 text-green-700 py-2 px-6 rounded-full w-full max-w-sm">
            <FaApple className="text-xl" /> Continue with Apple
          </button>
        </div>
      </div>
      <div className="md:flex justify-center">
        <img loading="lazy" src={newpic} alt="Signup" className="w-full max-w-xl shadow-lg" />
      </div>
    </div>
  );
}

export default Signuppage;
