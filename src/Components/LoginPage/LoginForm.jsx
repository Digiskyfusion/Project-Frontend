import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import newonw from "./../../assets/Images/newonw.jpg";

function LoginForm() {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${API_URL}/auth/login`, loginForm);
      console.log("response");
      console.log(response);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data));
      toast.success(response.data.message);
      setTimeout(() => navigate("/dashboard", { replace: true }), 100);
    } catch (error) {
      toast.error("Login failed");
    }
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 min-h-screen">
      <Toaster />
      <div className="p-8 bg-white shadow-lg rounded-lg w-full md:w-1/2 flex flex-col items-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">DIGISKY</h1>
        <p className="text-gray-600 mb-6">Please login to continue</p>
        
        <form className="w-full flex flex-col space-y-4" onSubmit={handleSubmit}>
          <label className="relative">
            <input type="email" name="email" placeholder="Enter email" value={loginForm.email} onChange={handleChange} className="w-full p-2 border rounded-lg" />
            <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
          </label>

          <label className="relative">
            <input type={showPassword ? "text" : "password"} name="password" placeholder="Enter password" value={loginForm.password} onChange={handleChange} className="w-full p-2 border rounded-lg" />
            <button type="button" className="absolute right-3 top-3 text-gray-400" onClick={() => setShowPassword(!showPassword)}>
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </label>

          <button className="bg-green-700 text-white py-3 rounded-lg w-full">Login</button>
        </form>

        <p className="text-gray-600 text-sm text-center mt-2">
          Don't have an account? {" "}
          <a href="/signup" className="text-green-700 font-medium">Sign up</a>
        </p>

        <div className="flex flex-col items-center gap-4 mt-6 w-full">
          <button className="flex items-center gap-2 border border-gray-300 text-gray-700 py-2 px-6 rounded-lg w-full text-center">
            <FaGoogle className="text-xl" /> Continue with Google
          </button>
        </div>
      </div>
      <div className="hidden md:flex justify-center w-1/2">
        <img loading="lazy" src={newonw} alt="Login" className="w-full max-w-lg shadow-lg rounded-lg" />
      </div>
    </div>
  );
}

export default LoginForm;
