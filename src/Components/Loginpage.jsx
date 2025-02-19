import React, { useState } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FaRegEyeSlash, FaChrome, FaApple, FaRegUser } from "react-icons/fa";
import loginimage from "./../assets/Images/loginimage.png";
import signup from "./../assets/Images/signup.png";

function Loginpage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
    <div className="flex flex-col md:flex-row items-center justify-center p-10 bg-gray-100">
      {/* Left Side (Form Section) */}
      <div className="w-full md:w-1/2 flex flex-col items-center space-y-6 bg-white p-8 rounded-3xl shadow-lg">
        <h1 className="text-4xl font-extrabold text-black">Digisky</h1>
        <p className="text-black text-lg">
          {isLogin ? "Please Login to Continue" : "Create an Account"}
        </p>

        {/* Login & Sign Up Buttons */}
        <div className="flex space-x-4 bg-gray-200 p-1 rounded-full">
          <button
            className={`px-8 py-2 rounded-full transition-all duration-300 ${
              isLogin ? "bg-[#004930] text-white shadow-md" : "text-gray-600"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-8 py-2 rounded-full transition-all duration-300 ${
              !isLogin ? "bg-[#004930] text-white shadow-md" : "text-gray-600"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center w-full justify-center space-x-2">
          <hr className="w-24 border-gray-300" />
          <p className="text-gray-500">or</p>
          <hr className="w-24 border-gray-300" />
        </div>

        {/* Form */}
        <form className="flex flex-col space-y-4 w-full max-w-sm">
          {!isLogin && (
            <div className="relative">
              <input
                type="text"
                placeholder="Username"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004930]"
              />
              <FaRegUser className="absolute top-3 right-4 text-[#004930]" />
            </div>
          )}

          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004930]"
            />
            <MdOutlineEmail className="absolute top-3 right-4 text-[#004930]" />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004930]"
            />
            <FaRegEyeSlash className="absolute top-3 right-4 text-[#004930] cursor-pointer" />
          </div>

          {/* Confirm Password field only appears in Sign Up */}
          {!isLogin && (
            <div className="relative">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004930]"
              />
              <FaRegEyeSlash className="absolute top-3 right-4 text-[#004930] cursor-pointer" />
            </div>
          )}

          {isLogin && (
            <a href="#" className="text-[#004930] text-sm">
              Forgot Password?
            </a>
          )}

          <button className="px-4 py-3 bg-[#004930] text-white rounded-xl w-full font-semibold shadow-md hover:bg-[#00301f] transition-all duration-300">
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>

        {/* Social Login Buttons */}
        <div className="flex flex-col space-y-3 w-full max-w-sm">
          <button className="flex items-center justify-center space-x-2 px-4 py-3 border rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300">
            <FaChrome className="text-[#004930]" />
            <span className="text-gray-700">Continue with Google</span>
          </button>

          <button className="flex items-center justify-center space-x-2 px-4 py-3 border rounded-xl bg-white shadow-md hover:shadow-lg transition-all duration-300">
            <FaApple className="text-black" />
            <span className="text-[#004930]">Continue with Apple</span>
          </button>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden md:block md:w-[43%] ml-10">
        <img
          src={isLogin ? loginimage : signup}
          alt={isLogin ? "Login" : "Sign Up"}
          className="w-full object-cover rounded-3xl shadow-lg"
        />
      </div>
    </div>



<div className="p-6 bg-[#004930]">
    <h1 className="text-center text-white">This is a sample website – cmsmasters ©2024 – All Rights Reserved</h1>
</div>


    </div>
  );
}

export default Loginpage;
