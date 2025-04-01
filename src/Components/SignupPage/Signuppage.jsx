import { useState } from "react";
import { useNavigate , Link } from "react-router-dom";
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
  const [showconfirm_password, setShowconfirm_password] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    roleType: "",
    state: "",
    mobileNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value); // Debugging
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleRoleChange = (role) => {
    // console.log(role);
    
    setFormData((prevData) => ({ ...prevData, roleType: role }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData); // Check if state is included pr
    if (formData.password !== formData.confirm_password) {
      return toast.error("Passwords do not match!");
    }

    try {
      const response = await axios.post(`${API_URL}/user/register`, formData);
      console.log("Response:", response);

      if (response.status === 200) {
        toast.success("user register successfully");
        localStorage.setItem("user", JSON.stringify(response.data.user));
        localStorage.setItem("token", response.data.token);
        navigate("/login");

        setFormData({
          name: "",
          state: "",
          email: "",
          password: "",
          confirm_password: "",
          roleType: "",
          mobileNumber: "",
        });
      } else {
        toast.success("user register successfully");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 min-h-screen">
      <Toaster />
      <div className="p-8 bg-white shadow-lg rounded-lg w-full md:w-1/2 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">DIGISKY</h1>
        <p className="text-gray-600 mb-6">Create an account to continue</p>

        <div className="w-full mb-4">
          <span className="font-medium text-gray-700">Select Role:</span>
          <div className="flex justify-between gap-4 mt-2">
            <button className={`px-4 py-2 w-1/2 border rounded-lg ${formData.roleType === "freelancer" ? "bg-green-700 text-white" : "border-gray-300"}`} onClick={() => handleRoleChange("freelancer")}>
              Freelancer
            </button>
            <button className={`px-4 py-2 w-1/2 border rounded-lg ${formData.roleType === "client" ? "bg-green-700 text-white" : "border-gray-300"}`} onClick={() => handleRoleChange("client")}>
              Client
            </button>
          </div>
        </div>

        <form className="w-full flex flex-col space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <label className="relative">
              <input type="text" name="name" placeholder="Enter name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded-lg" />
              <FaUser className="absolute right-3 top-3 text-gray-400" />
            </label>
            <label className="relative w-full">
  <select
    name="state"
    value={formData.state}
    onChange={handleChange}
    className="w-full p-2 border rounded-lg appearance-none bg-white"
  >
    <option value="">Select a state</option>
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>
    <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
    <option value="Chandigarh">Chandigarh</option>
    <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
    <option value="Lakshadweep">Lakshadweep</option>
    <option value="Delhi">Delhi</option>
    <option value="Puducherry">Puducherry</option>
    <option value="Ladakh">Ladakh</option>
    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
  </select>
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
              <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded-lg" />
              <button type="button" className="absolute right-3 top-3 text-gray-400" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </label>
            <label className="relative">
            <input type={showconfirm_password ? "text" : "password"} name="confirm_password" placeholder="Confirm password" value={formData.confirm_password} onChange={handleChange} className="w-full p-2 border rounded-lg" />
            <button type="button" className="absolute right-3 top-3 text-gray-400" onClick={() => setShowconfirm_password(!showconfirm_password)}>
              {showconfirm_password ? <FaEyeSlash /> : <FaEye />}
            </button>
          </label>
          </div>
          <p className="text-sm text-gray-700 font-medium bg-gray-100 p-3 rounded-md border-l-4 border-blue-500">
      You have to use{" "}
      <span className="font-bold text-blue-600">Alphabet</span>,{" "}
      <span className="font-bold text-green-600">Numeric</span>,{" "}
      <span className="font-bold text-red-600">Symbol</span>,{" "}
      <span className="font-bold text-purple-600">Uppercase</span>, and{" "}
      <span className="font-bold text-orange-600">Lowercase</span> in your password.
    </p>
           <button className="bg-green-700 text-white py-3 rounded-lg w-full">Sign Up</button>

          <p className="text-gray-600 text-sm text-center mt-2">
            Already have an account?{" "}
            <Link to="/login" className="text-green-700 font-medium">Login</Link>
          </p>
        </form>

        {/* <div className="flex flex-col items-center gap-4 mt-6 w-full">
          <button className="flex items-center gap-2 border border-gray-300 text-gray-700 py-2 px-6 rounded-lg w-full text-center">
            <FaGoogle className="text-xl" /> Continue with Google
          </button>
        </div> */}
      </div>
      <div className="hidden md:flex justify-center w-1/2">
        <img loading="lazy" src={newpic} alt="Signup" className="w-full max-w-lg shadow-lg rounded-lg" />
      </div>
    </div>
  );
}

export default Signuppage;
