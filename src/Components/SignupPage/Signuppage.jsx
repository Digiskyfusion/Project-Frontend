import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import {
  FaUser,
  FaGlobe,
  FaEnvelope,
  FaPhone,
  FaLock,
  FaUsers,
  FaEye,
  FaEyeSlash,
  FaGoogle,
  FaApple,
} from "react-icons/fa";
// import newpic from "./../../assets/Images/new pic.png";
import Logo from "../../assets/Images/digilogo12.png";
import newpic from "../../assets/Images/signupnew.png";
import Select from 'react-select';
import { getNames, getCode } from 'country-list';
import { getCountryCallingCode } from 'libphonenumber-js';



function Signuppage() {
  const countryOptions = getNames().map(name => ({ value: name, label: name }));
  const API_URL = import.meta.env.VITE_API_URL;
  console.log("API_URL");
  console.log(API_URL);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showconfirm_password, setShowconfirm_password] = useState(false);
  const [countries, setCountries] = useState([]);
  const [phonePrefix, setPhonePrefix] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    roleType: "",
    mobileNumber: "",
    city: "",
    country: "",
  });

  useEffect(() => {
    const countryNames = getNames();
    setCountries(countryNames);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
     // If user selected country, update country and phone prefix
    if (name === "country") {
      const isoCode = getCode(value); // e.g. "India" → "IN"
      const callingCode = getCountryCallingCode(isoCode); // e.g. "IN" → "91"
      setPhonePrefix(`+${callingCode}`);
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
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
          country: "",
          email: "",
          password: "",
          confirm_password: "",
          roleType: "",
          mobileNumber: "",
        });
      } else {
        toast.success("user register successfully");
        navigate("/login");
      }
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error(error.response?.data?.message || "Signup failed");
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center p-6 bg-gray-100 md:flex-row ">
        <Toaster />
        <div className="flex flex-col items-center w-full p-8 bg-white rounded-lg shadow-lg md:w-1/2">
          <Link to="/" className="text-2xl font-bold">
            <img
              src={Logo}
              alt="Logo"
              className="h-12 bg-black rounded-md md:h-16 "
            />
          </Link>

          <p className="mb-6 text-gray-600">Create an account to continue</p>

          <div className="w-full mb-4">
            <span className="font-medium text-gray-700">Select Role:</span>
            <div className="flex justify-between gap-4 mt-2">
              <button
                className={`px-4 py-2 w-1/2 border cursor-pointer rounded-lg ${
                  formData.roleType === "freelancer"
                    ? "bg-green-700 text-white"
                    : "border-gray-300"
                }`}
                onClick={() => handleRoleChange("freelancer")}
              >
                Freelancer
              </button>
              <button
                className={`px-4 py-2 w-1/2 border cursor-pointer rounded-lg ${
                  formData.roleType === "client"
                    ? "bg-green-700 text-white"
                    : "border-gray-300"
                }`}
                onClick={() => handleRoleChange("client")}
              >
                Client
              </button>
            </div>
          </div>

          <form
            className="flex flex-col w-full space-y-4"
            onSubmit={handleSubmit}
          >
            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
              <label className="relative">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
                <FaUser className="absolute text-gray-400 right-3 top-3" />
              </label>
             {/* COUNTRY DROPDOWN */}
     <label className="relative w-full">
 <Select
  options={countryOptions}
  placeholder="Select a country" // <-- This line
  value={countryOptions.find(opt => opt.value === formData.country)}
  onChange={(selectedOption) => {
    const name = selectedOption?.value || "";
    const iso = getCode(name);
    const code = getCountryCallingCode(iso);
    setFormData(prev => ({ ...prev, country: name }));
    setPhonePrefix(`+${code}`);
  }}
  className="w-full"
  classNamePrefix="react-select"
/>

</label>

            </div>

            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
              <label className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
                <FaEnvelope className="absolute text-gray-400 right-3 top-3" />
              </label>
               <label className="relative w-full">
        <input
          type="text"
          name="mobileNumber"
          value={phonePrefix + formData.mobileNumber}
          onChange={(e) => {
            const input = e.target.value.replace(phonePrefix, '');
            setFormData((prev) => ({ ...prev, mobileNumber: input }));
          }}
          placeholder="Enter phone number"
          className="w-full p-2 border rounded-lg"
        />
      </label>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
              <label className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
                <button
                  type="button"
                  className="absolute text-gray-400 right-3 top-3"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </label>
              <label className="relative">
                <input
                  type={showconfirm_password ? "text" : "password"}
                  name="confirm_password"
                  placeholder="Confirm password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                />
                <button
                  type="button"
                  className="absolute text-gray-400 right-3 top-3"
                  onClick={() => setShowconfirm_password(!showconfirm_password)}
                >
                  {showconfirm_password ? <FaEyeSlash /> : <FaEye />}
                </button>
              </label>
            </div>
            <p className="p-3 text-sm font-medium text-gray-700 bg-gray-100 border-l-4 border-blue-500 rounded-md">
              You have to use{" "}
              <span className="font-bold text-blue-600">Alphabet</span>,{" "}
              <span className="font-bold text-green-600">Numeric</span>,{" "}
              <span className="font-bold text-red-600">Symbol</span>,{" "}
              <span className="font-bold text-purple-600">Uppercase</span>, and{" "}
              <span className="font-bold text-orange-600">Lowercase</span> in
              your password.
            </p>
            <button className="w-full py-3 text-white bg-green-700 rounded-lg cursor-pointer">
              Sign Up
            </button>

            <p className="mt-2 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-green-700">
                Login
              </Link>
            </p>
          </form>

          {/* <div className="flex flex-col items-center w-full gap-4 mt-6">
          <button className="flex items-center w-full gap-2 px-6 py-2 text-center text-gray-700 border border-gray-300 rounded-lg">
            <FaGoogle className="text-xl" /> Continue with Google
          </button>
        </div> */}
        </div>
        <div className="justify-center hidden w-1/2 md:flex">
          <img
            loading="lazy"
            src={newpic}
            alt="Signup"
            className="w-full max-w-lg rounded-lg shadow-lg"
          />
        </div>
      </div>

      <div className="px-4 py-8 bg-gray-100">
        <h1 className="mb-8 text-xl italic font-bold text-center text-gray-800 underline md:text-3xl decoration-green-700 decoration-2">
          Explore Ours
        </h1>

        <div className="grid max-w-6xl grid-cols-1 gap-8 px-4 mx-auto md:grid-cols-2">
          {/* Client Demo */}
          <div className="p-3 transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
            <p className="mb-3 text-lg italic font-medium text-center text-green-700">
              Client Demo
            </p>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl border border-gray-200">
              <iframe
                src="https://www.youtube.com/embed/cGP8DunjPys"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                className="absolute top-0 left-0 object-cover w-full h-full"
              ></iframe>
            </div>
          </div>

          {/* Freelancer Demo */}
          <div className="p-3 transition-shadow duration-300 bg-white shadow-md rounded-xl hover:shadow-lg">
            <p className="mb-3 text-lg italic font-medium text-center text-green-700">
              Freelancer Demo
            </p>
            <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl border border-gray-200">
              <iframe
                className="absolute top-0 left-0 object-cover w-full h-full"
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

export default Signuppage;
