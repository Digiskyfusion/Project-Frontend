import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaGoogle,
} from "react-icons/fa";
// import newonw from "./../../assets/Images/newonw.jpg";
import Logo from "../../assets/Images/digilogo12.png";
import newonw from "../../assets/Images/loginnew.png";

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

    if (!loginForm.email || !loginForm.password) {
      toast.error("Email and Password are required!");
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/user/login`, loginForm);
      console.log("API Response:", response.data);

      const { token, message, user } = response.data;

      if (token && user) {
        const { _id, roleType, email, mobileNumber, name, state } = user;

        localStorage.setItem(
          "user",
          JSON.stringify({ _id, roleType, email, mobileNumber, name, state })
        );
        localStorage.setItem("token", token);

        toast.success(message || "Login successful!");

        setTimeout(() => {
          const redirectPath = localStorage.getItem("redirectAfterLogin");

          // ✅ If freelancer and redirect path exists, go there
          if (roleType === "freelancer" && redirectPath) {
            localStorage.removeItem("redirectAfterLogin");
            navigate(redirectPath, { replace: true });
            return;
          }

          // ✅ Normal role-based redirection
          if (roleType === "freelancer") {
            navigate("/freelancerSkill", { replace: true });
          } else if (roleType === "client") {
            navigate("/UserSkills", { replace: true });
          } else {
            navigate("/", { replace: true });
          }
        }, 1000);
      } else {
        toast.error("Invalid response from server!");
      }
    } catch (error) {
      console.error("Login Error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Something went wrong!");
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-center p-6 bg-gray-100 md:pt-15">
        <Toaster />
        <div className="p-8 bg-white shadow-lg rounded-lg w-full md:w-1/2 flex flex-col items-center">
          <Link to="/" className="text-2xl font-bold">
            <img
              src={Logo}
              alt="Logo"
              className="bg-black h-12  md:h-16 rounded-md"
            />
          </Link>

          <p className="text-gray-600 mb-6">Please login to continue</p>

          <form
            className="w-full flex flex-col space-y-4"
            onSubmit={handleSubmit}
          >
            <label className="relative w-full">
              <input
                type="email"
                name="email"
                placeholder="Enter email"
                value={loginForm.email}
                onChange={handleChange}
                className="w-full p-2 pl-10 border rounded-lg"
              />
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
            </label>

            <label className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter password"
                value={loginForm.password}
                onChange={handleChange}
                className="w-full p-2 pl-10 border rounded-lg"
              />
              <FaLock className="absolute left-3 top-3 text-gray-400" />
              <button
                type="button"
                className="absolute right-3 cursor-pointer top-3 text-gray-400"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </label>

            <button className="bg-green-700 cursor-pointer text-white py-3 rounded-lg w-full hover:bg-green-800 transition">
              Login
            </button>
            <a href="/forget">Forget Password? </a>
          </form>

          <p className="text-gray-600 text-sm text-center mt-2">
            Don't have an account?{" "}
            <Link to="/registration" className="text-green-700 font-medium">
              Sign up
            </Link>
          </p>

          {/* <div className="flex flex-col items-center gap-4 mt-6 w-full">
          <button className="flex items-center gap-2 border border-gray-300 text-gray-700 py-2 px-6 rounded-lg w-full text-center">
            <FaGoogle className="text-xl" /> Continue with Google
          </button>
        </div> */}
        </div>
        <div className="hidden md:flex justify-center w-1/2">
          <img
            loading="lazy"
            src={newonw}
            alt="Login"
            className="w-full max-w-lg shadow-lg rounded-lg"
          />
        </div>
      </div>

      <div className="bg-gray-100 py-8 px-4">
        <h1 className="text-center text-xl md:text-3xl font-bold italic text-gray-800 mb-8 underline decoration-green-700 decoration-2">
          Explore Ours
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {/* Client Demo */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg p-3 transition-shadow duration-300">
            <p className="text-center text-lg font-medium italic text-green-700 mb-3">
              Client Demo
            </p>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl border border-gray-200">
              <iframe
                src="https://www.youtube.com/embed/cGP8DunjPys"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="absolute top-0 left-0 w-full h-full object-cover"
              ></iframe>
            </div>
          </div>

          {/* Freelancer Demo */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-lg p-3 transition-shadow duration-300">
            <p className="text-center text-lg font-medium italic text-green-700 mb-3">
              Freelancer Demo
            </p>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl border border-gray-200">
              <iframe
                className="absolute top-0 left-0 w-full h-full object-cover"
                src="https://www.youtube.com/embed/41FH3-GKPcI"
                title="YouTube video player"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
