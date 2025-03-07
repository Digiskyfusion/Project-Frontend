
import React, { useState } from 'react';
import { FaUser, FaGlobe, FaEnvelope, FaPhone, FaLock, FaUsers, FaWallet, FaGoogle, FaApple } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

import toast, { Toaster } from 'react-hot-toast';
import newpic from './../assets/Images/new pic.png';

function Signuppage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    roleType: "",
    country: "",
    mobileNumber: "",
    credits: "",
  });

  const handleChangeSignup = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json" 
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data.user);
      
      localStorage.setItem("user", JSON.stringify(data.user));
      if (response.ok) {
        toast.success("Signup successful!");
        if (formData.roleType === "freelancer") {
          navigate("/FreelancreClientPage");
        } else if (formData.roleType === "client") {
          navigate("/client");
        }
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
        navigate("/login")
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (error) {
      alert("An error occurred. Please try again.",error);
    }
  };


  const handleGoogleLogin = () => {
    window.location.href = "http://192.168.29.50:3000/auth/google";
  };


  // Login API Call
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
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
      alert("An error occurred. Please try again.", error);
    }
  };



  return (
    <div>
      <div className='flex flex-col md:flex-row items-center justify-center p-3'>
        <div className='p-5 w-full flex flex-col items-center md:w-1/2  md:py-5'>
          <h1 className='text-3xl font-bold text-center text-[#000000] mb-2'>DIGISKY</h1>
          <p className='text-center text-[#333333] mb-6'>Please Sign Up to continue</p>

          <div className='flex justify-center gap-4 mb-4'>
            <button

              className='px-6 py-1 md:px-10 rounded-full cursor-pointer border-2 text-[#004930] border-[#004930]'
              onClick={() => navigate("/login")}

            >
              Login
            </button>
            <button
              className='px-6 py-1 md:px-10 rounded-full cursor-pointer border-2 bg-[#004930] text-white border-[#004930]'
            >
              Sign Up
            </button>
          </div>

          <div className='flex items-center my-4 w-full'>
            <hr className='flex-grow border-gray-300' />
            <p className='mx-3 text-gray-500'>or</p>
            <hr className='flex-grow border-gray-300' />
          </div>


          <div className='flex flex-col w-full'>

      
            {/* {/ // Signup Form /} */}
            <div className='flex flex-col w-full ' >

            <Toaster />
            <form className='flex flex-col w-full' onSubmit={handleSubmitSignup}>
              <div className='flex flex-col md:flex-row gap-4 mb-4'>
                <label className='flex-1 relative'>
                  <input type='text' placeholder='Username' value={formData.name} name='name' onChange={handleChangeSignup} className='w-full p-2 border rounded-lg pr-10' />
                  <FaUser className='absolute right-3 top-3 text-gray-400' />
                </label>
                <label className='flex-1 relative'>
                  <select className='w-full p-2 border rounded-lg pr-10 appearance-none' name='country' value={formData.country} onChange={handleChangeSignup}>
                    <option value='' disabled>Select Country</option>
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
                  <select name='roleType' value={formData.roleType} onChange={handleChangeSignup} className='w-full p-2 border rounded-lg pr-10 appearance-none'>
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

              <div className='flex'>
                <button className='bg-[#004930] text-white py-2 px-6 md:px-10 rounded-full cursor-pointer'>Sign Up</button>
              </div>
            </form>
          </div>

          <div className='flex flex-col justify-center gap-4 mt-6'>
            <button className='flex items-center justify-center gap-2 bg-[#004930] text-white md:px-20 py-2 px-8 rounded-full'>
              <FaGoogle className='text-xl' />
              Continue with Google
            </button>
            <button className='flex items-center justify-center gap-2 text-[#004930] border-2 border-[#004930] px-4 py-2 rounded-full'>
              <FaApple className='text-xl' />
              Continue with Apple
            </button>
          </div>
        </div>

        <div className='md:flex justify-center'>
          <img src={newpic} alt='Signup' className='w-full max-w-xl shadow-lg' />
        </div>
      </div>
    </div>
    </div>
  );
}

export default Signuppage;




