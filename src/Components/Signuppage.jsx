import React, { useState, useEffect } from 'react';
import { FaUser, FaGlobe, FaEnvelope, FaPhone, FaLock, FaUsers, FaWallet, FaGoogle, FaApple } from 'react-icons/fa';
import signup from './../assets/Images/signup.png';
import loginImage from './../assets/Images/loginimage.png';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
function Signuppage() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    roleType: "",
    country: "",
    mobileNumber: "",
    credits: "",
  });

  const handleChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginForm((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleChangeSignup = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Signup API Call
  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://192.168.29.50:3000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("Signup successful!");
        setFormData({
          name: "",
          email: "",
          password: "",
          roleType: "",
          country: "",
          mobileNumber: "",
          credits: "",
        });
        localStorage.setItem("token", data.token);
        setIsLogin(true);
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  // Login API Call
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://192.168.29.50:3000/api/auth/login", {
        method: "POST",
        
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(loginForm),  
      });

      const data = await response.json();
      console.log(data);
      
      if (response.ok) {
        toast.success("Login successful!");
        localStorage.setItem("token", data.user.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        console.log(localStorage.getItem("token"));
        navigate("/dashboard"); // Redirect after login
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };



  const handleGoogleLogin = () => {
    window.location.href = "http://192.168.29.50:3000/auth/google";
  };









  return (
    <div>
      <div className='flex flex-col md:flex-row items-center justify-center p-3'>
        {/* Form Section */}
        <div className='p-5 w-full md:w-1/2 flex flex-col items-center md:py-5'>
          <h1 className='text-3xl font-bold text-center text-[#000000] mb-2'>DIGISKY</h1>
          <p className='text-center text-[#333333] mb-6'>
            {isLogin ? 'Please Login to continue' : 'Please Sign Up to continue'}
          </p>

          {/* Toggle Buttons */}
          <div className='flex justify-center gap-4 mb-4'>
            <button
              className={`px-6 py-1 md:px-10 rounded-full cursor-pointer border-2 ${
                isLogin ? 'bg-[#004930] text-white border-[#004930]' : 'text-[#004930] border-[#004930]'
              }`}
              onClick={() => setIsLogin(true)}
            >
              Login
            </button>
            <button
              className={`px-6 py-1 md:px-10 rounded-full cursor-pointer border-2 ${
                !isLogin ? 'bg-[#004930] text-white border-[#004930]' : 'text-[#004930] border-[#004930]'
              }`}
              onClick={() => setIsLogin(false)}
            >
              Sign Up
            </button>
          </div>

          <div className='flex items-center my-4 w-full'>
            <hr className='flex-grow border-gray-300' />
            <p className='mx-3 text-gray-500'>or</p>
            <hr className='flex-grow border-gray-300' />
          </div>

          {isLogin ? (
            // Login Form
            <div className='flex flex-col w-full'>
            <Toaster />
            <form className='flex flex-col w-full' onSubmit={handleLoginSubmit}>
              <div className='flex flex-col gap-4 mb-4'>
                <label className='flex-1 relative'>
                <input type="email" name="email" value={loginForm.email} onChange={handleChangeLogin} placeholder="Enter email" className="w-full p-2 border rounded-lg" required />
                <FaEnvelope className="absolute right-3 top-3 text-gray-400" />
                </label>
                <label className='flex-1 relative'>
                <input type="password" name="password" value={loginForm.password} onChange={handleChangeLogin} placeholder="Enter password" className="w-full p-2 border rounded-lg" required />
                <FaLock className="absolute right-3 top-3 text-gray-400" />
                </label>
              </div>

              <div className='mb-4'>
                <a href='#' className='text-[#333333] hover:underline'>Forgot Password?</a>
              </div>

              <div className='flex'>
                <button className='bg-[#004930] text-white py-2 px-6 md:px-10 rounded-full'>Login</button>
              </div>
            </form>
            </div>
          ) : (
            // Signup Form
            <div className='flex flex-col w-full' >
            <Toaster />
            <form className='flex flex-col w-full' onSubmit={handleSubmitSignup}>
              <div className='flex flex-col md:flex-row gap-4 mb-4'>
                <label className='flex-1 relative'>
                  <input type='text' placeholder='Username' value={formData.name} name='name' onChange={handleChangeSignup} className='w-full p-2 border rounded-lg pr-10' />
                  <FaUser className='absolute right-3 top-3 text-gray-400' />
                </label>
                <label className='flex-1 relative'>
                  <select className='w-full p-2 border rounded-lg pr-10 appearance-none' name='country' value={formData.country} onChange={handleChangeSignup}>
                    <option value='' disabled selected>Select Country</option>
                    <option value='USA'>United States</option>
                    <option value='Canada'>Canada</option>
                    <option value='UK'>United Kingdom</option>
                    <option value='Australia'>Australia</option>
                    <option value='India'>India</option>
                    <option value='Germany'>Germany</option>
                    <option value='France'>France</option>
                    <option value='Japan'>Japan</option>
                    <option value='China'>China</option>
                    <option value='Brazil'>Brazil</option>
                  </select>
                  <FaGlobe className='absolute right-3 top-3 text-gray-400' />
                </label>
              </div>

              <div className='flex flex-col md:flex-row gap-4 mb-4'>
                <label className='flex-1 relative'>
                  <input type='email' placeholder='Enter email' name='email' value={formData.email} onChange={handleChangeSignup} className='w-full p-2 border rounded-lg pr-10' />
                  <FaEnvelope className='absolute right-3 top-3 text-gray-400' />
                </label>
                <label className='flex-1 relative'>
                  <input type='text' placeholder='Enter phone number' name='mobileNumber' value={formData.mobileNumber} onChange={handleChangeSignup} className='w-full p-2 border rounded-lg pr-10' />
                  <FaPhone className='absolute right-3 top-3 text-gray-400' />
                </label>
              </div>

              <div className='flex flex-col md:flex-row gap-4 mb-4'>
                <label className='flex-1 relative'>
                  <select className='w-full p-2 border rounded-lg pr-10 appearance-none' name='roleType' onChange={handleChangeSignup} value={formData.roleType}>
                    <option value='' disabled>Select Role Type</option>
                    <option value='freelancer'>Freelancer</option>
                    <option value='client'>Client</option>
                  </select>
                  <FaUsers className='absolute right-3 top-3 text-gray-400' />
                </label>
                <label className='flex-1 relative'>
                  <input type='text' placeholder='Credit' name='credits' value={formData.credits} onChange={handleChangeSignup} className='w-full p-2 border rounded-lg pr-10' />
                  <FaWallet className='absolute right-3 top-3 text-gray-400' />
                </label>
              </div>

              <div className='mb-4 relative'>
                <input type='password' placeholder='Enter password' name='password' value={formData.password} onChange={handleChangeSignup} className='w-full p-2 border rounded-lg pr-10' />
                <FaLock className='absolute right-3 top-3 text-gray-400' />
              </div>

              <div className='mb-4'>
                <a href='#' className='text-[#333333] hover:underline'>Already have an account? Login</a>
              </div>

              <div className='flex'>
                <button className='bg-[#004930] text-white py-2 px-6 md:px-10 rounded-full cursor-pointer'>Sign Up</button>
              </div>
            </form>
            </div>
          )}

          {/* Social Login Buttons */}
          <div className='flex flex-col justify-center gap-4 mt-6'>
            <button className='flex items-center justify-center gap-2 bg-[#004930] text-white md:px-20 py-2 px-8 rounded-full' onClick={handleGoogleLogin}>
              <FaGoogle className='text-xl' />
              Continue with Google
            </button>
            <button className='flex items-center justify-center gap-2 text-[#004930] border-2 border-[#004930] px-4 py-2 rounded-full'>
              <FaApple className='text-xl' />
              Continue with Apple
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className='md:flex justify-center'>
          <img src={isLogin ? loginImage : signup} alt={isLogin ? 'Login' : 'Signup'} className='w-full max-w-xl shadow-lg' />
        </div>
      </div>

      {/* Footer */}
      <div className='p-8 text-center bg-[#004930] text-white'>
        <h1>This is a sample website – cmsmasters ©2024 – All Rights Reserved</h1>
      </div>
    </div>
  );
}

export default Signuppage;
