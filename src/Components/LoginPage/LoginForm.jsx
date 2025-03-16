import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGoogle, FaApple } from "react-icons/fa";
import newonw from "./../../assets/Images/newonw.jpg";

function LoginForm() {
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(`http://localhost:3000/api/auth/login`, loginForm);
      console.log("response");
      // console.log(response);
      localStorage.setItem("token", response.data.user.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));
      localStorage.setItem("roleType", response.data.user.roleType);
      toast.success("Login successful!");
      setTimeout(() => navigate("/dashboard", { replace: true }), 100);
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full py-5 flex items-center justify-center bg-gray-100 px-4 md:px-20">
      <Toaster />
      <div className="w-full bg-white rounded-lg shadow-lg px-4 py-5 md:py-10 md:px-10 flex gap-4 flex-col md:flex-row items-center">
        <div className="w-full flex flex-col items-center">
          <h1 className="text-3xl font-bold text-center text-black mb-2">DIGISKY</h1>
          <p className="text-center text-gray-700 mb-6">Please Login to continue</p>
          <div className="flex justify-center gap-4 mb-2">
            <button className="px-6 py-1 rounded-full border-2 bg-[#004930] text-white border-[#004930]" onClick={() => navigate("/login")}>
              Login
            </button>
            <button className="px-6 py-1 rounded-full border-2 border-[#004930]" onClick={() => navigate("/registration")}>
              Sign Up
            </button>
          </div>
          <div className="flex items-center my-4 w-full">
            <hr className="flex-grow border-gray-300" />
            <p className="mx-3 text-gray-500">or</p>
            <hr className="flex-grow border-gray-300" />
          </div>
          <form className="w-full flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="relative w-full">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input type="email" name="email" value={loginForm.email} onChange={handleChange} placeholder="Enter email" className="w-full p-3 border rounded-lg pl-10" required />
            </div>
            <div className="relative w-full">
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <input type={showPassword ? "text" : "password"} name="password" value={loginForm.password} onChange={handleChange} placeholder="Enter password" className="w-full p-3 border rounded-lg pl-10 pr-10" required />
              <button type="button" className="absolute right-3 top-3 text-gray-400 focus:outline-none" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            <div>
              <a href="#" className="text-gray-700 hover:underline">Forgot Password?</a>
            </div>
            <button type="submit" className="bg-[#004930] max-w-30 text-white py-2 rounded-full" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
          <div className="flex flex-col justify-center gap-4 mt-6">
            <button className="flex items-center justify-center gap-2 bg-[#004930] text-white px-8 py-2 rounded-full">
              <FaGoogle className="text-xl" />
              Continue with Google
            </button>
            <button className="flex items-center justify-center gap-2 text-[#004930] border-2 border-[#004930] px-4 py-2 rounded-full">
              <FaApple className="text-xl" />
              Continue with Apple
            </button>
          </div>
        </div>
        <div className="w-full md:flex justify-center">
          <img loading="lazy" src={newonw} alt="Login" />
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
