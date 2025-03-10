import { useState } from "react";
import { FaUser, FaGlobe, FaEnvelope, FaPhone, FaLock, FaUsers, FaEye, FaEyeSlash, FaGoogle, FaApple } from "react-icons/fa";import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import newpic from "./../../assets/Images/new pic.png";

function Signuppage() {

  const URL= import.meta.env.VITE_API_URL;
  console.log(URL);
  
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    roleType: "",
    country: "",
    mobileNumber: "",
    // credits: "",
  });

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleChangeSignup = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3000/api/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Signup successful!");
        localStorage.setItem("user", JSON.stringify(data.user));
        localStorage.setItem("token", data.token);

        // Navigate based on role type
        if (formData.roleType === "freelancer") {
          navigate("/FreelancreClientPage");
        } else if (formData.roleType === "client") {
          navigate("/client");
        }

        // Reset form
        setFormData({
          name: "",
          email: "",
          password: "",
          roleType: "",
          country: "",
          mobileNumber: "",
          // credits: "",
        });
      } else {
        toast.error("Invailed credentials");
      }
    } catch (error) {
      toast.error(`Error `);
    }
  };


 

  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center p-3">
        <div className="p-5 w-full flex flex-col items-center md:w-1/2 md:py-5">
          <h1 className="text-3xl font-bold text-center text-[#000000] mb-2">DIGISKY</h1>
          <p className="text-center text-[#333333] mb-6">Please Sign Up to continue</p>

          <div className="flex justify-center gap-4 mb-4">
            <button
              className="px-6 py-1 md:px-6 rounded-full cursor-pointer border-2 text-[#004930] border-[#004930]"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
            <button className="px-6 py-1 md:px-6 rounded-full cursor-pointer border-2 bg-[#004930] text-white border-[#004930]">
              Sign Up
            </button>
          </div>

          <div className="flex items-center my-4 w-full">
            <hr className="flex-grow border-gray-300" />
            <p className="mx-3 text-gray-500">or</p>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Signup Form */}
          <Toaster />
          <form className="flex flex-col w-full" onSubmit={handleSubmitSignup}>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <label className="flex-1 relative">
                <input type="text" placeholder="Username" value={formData.name} name="name" onChange={handleChangeSignup} className="w-full p-2 border rounded-lg pr-10" />
                <FaUser className="absolute right-3 top-3 text-gray-400" />
              </label>
              <label className="flex-1 relative">
                <select className="w-full p-2 border rounded-lg pr-10 appearance-none" name="country" value={formData.country} onChange={handleChangeSignup}>
                  <option value="" disabled>
                    Select Country
                  </option>
                  <option value="USA">United States</option>
                  <option value="Canada">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="Australia">Australia</option>
                  <option value="India">India</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="Japan">Japan</option>
                  <option value="China">China</option>
                  <option value="Brazil">Brazil</option>
                </select>
                <FaGlobe className="absolute right-3 top-3 text-gray-400" />
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <label className="flex-1 relative">
                <input type="email" placeholder="Enter email" name="email" value={formData.email} onChange={handleChangeSignup} className="w-full p-2 border rounded-lg pr-10" />
                <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
              </label>
              <label className="flex-1 relative">
                <input type="text" placeholder="Enter phone number" name="mobileNumber" value={formData.mobileNumber} onChange={handleChangeSignup} className="w-full p-2 border rounded-lg pr-10" />
                <FaPhone className="absolute right-3 top-3 text-gray-400" />
              </label>
            </div>

            <div className="flex flex-col md:flex-row gap-4 mb-4">
              <label className="flex-1 relative">
                <select name="roleType" value={formData.roleType} onChange={handleChangeSignup} className="w-full p-2 border rounded-lg pr-10 appearance-none">
                  <option value="" disabled>
                    Select Role Type
                  </option>
                  <option value="freelancer">Freelancer</option>
                  <option value="client">Client</option>
                </select>
                <FaUsers className="absolute right-3 top-3 text-gray-400" />
              </label>
               {/* Password Input with Show/Hide Feature */}
               <label className="flex-1 relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  name="password"
                  value={formData.password}
                  onChange={handleChangeSignup}
                  className="w-full p-2 border rounded-lg pr-10"
                />
                
                <button
                  type="button"
                  className="absolute right-3 top-3 text-gray-400"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </label>
            </div>
           
          <div className="flex">
          <button className="bg-[#004930] text-white py-2 px-6 md:px-10 rounded-full cursor-pointer"> Sign Up</button>
          </div>
            

            <div className="flex flex-col items-center justify-center gap-4 mt-6">
                <button 
                  className="flex items-center justify-center gap-2 w-full max-w-[400px] bg-[#004930] text-white md:px-9 py-2 px-8 rounded-full"
                >
                  <FaGoogle className="text-xl" />
                  Continue with Google
                </button>

                <button 
                  className="flex items-center justify-center gap-2 w-full max-w-[400px] text-[#004930] border-2 border-[#004930] px-4 py-2 rounded-full"
                >
                  <FaApple className="text-xl" />
                  Continue with Apple
                </button>
              </div>

          </form>
        </div>

        <div className="md:flex justify-center">
          <img src={newpic} alt="Signup" className="w-full max-w-xl shadow-lg" />
        </div>
      </div>
    </div>
  );
}

export default Signuppage;
