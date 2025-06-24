// Updated Signuppage Component with Enhancements
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { FaUser, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import Logo from "../../assets/Images/digilogo12.png";
import newpic from "../../assets/Images/signupnew.png";
import Select from "react-select";
import { getNames, getCode } from "country-list";
import { getCountryCallingCode } from "libphonenumber-js";

function Signuppage() {
  const countryOptions = getNames().map((name) => ({
    value: name,
    label: name,
  }));
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showconfirm_password, setShowconfirm_password] = useState(false);
  const [phonePrefix, setPhonePrefix] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    roleType: "",
    mobileNumber: "",
    city: "",
    country: "",
    state: "",
  });

  useEffect(() => {
    // no-op, previously used for setting countries
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRoleChange = (role) => {
    setFormData((prevData) => ({ ...prevData, roleType: role }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const missingFields = [];
    const trimmedData = {
      ...formData,
      name: formData.name.trim(),
      email: formData.email.trim(),
      mobileNumber: formData.mobileNumber.trim(),
    };
    
    if(!trimmedData.roleType?.length > 0){
      setLoading(false);
      return toast.error('Please select a role.')
    }

    if (!trimmedData.name) missingFields.push("Name");
    if (!trimmedData.email) missingFields.push("Email");
    if (!trimmedData.password) missingFields.push("Password");
    if (!trimmedData.confirm_password) missingFields.push("Confirm Password");
    if (!trimmedData.country) missingFields.push("Country");
    if (!trimmedData.mobileNumber) missingFields.push("Mobile Number");

    

    if (missingFields.length > 0) {
      setLoading(false);
      return toast.error(`Please fill: ${missingFields.join(", ")}`);
    }

    if (trimmedData.password !== trimmedData.confirm_password) {
      setLoading(false);
      return toast.error("Passwords do not match!");
    }

    try {
      const response = await axios.post(
        `${API_URL}/user/register`,
        trimmedData
      );

      if (response.status === 200) {
        toast.success("User registered successfully");
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
          city: "",
          state: "",
        });
      }
    } catch (error) {
      console.error("Signup Error:", error);
      toast.error(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
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
                  autoFocus
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Enter name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
                <FaUser className="absolute text-gray-400 right-3 top-3" />
              </label>
              <label className="relative w-full">
                <Select
                  options={countryOptions}
                  placeholder="Select a country"
                  value={countryOptions.find(
                    (opt) => opt.value === formData.country
                  )}
                  onChange={(selectedOption) => {
                    const name = selectedOption?.value || "";
                    const iso = getCode(name);
                    if (iso) {
                      const code = getCountryCallingCode(iso);
                      setPhonePrefix(`+${code}`);
                    }
                    setFormData((prev) => ({ ...prev, country: name }));
                  }}
                  className="w-full"
                  classNamePrefix="react-select"
                  required
                />
              </label>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
              <label className="relative">
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                  required
                />
                <FaEnvelope className="absolute text-gray-400 right-3 top-3" />
              </label>
              <label className="relative w-full">
                <input
                  type="tel"
                  name="mobileNumber"
                  autoComplete="tel"
                  value={phonePrefix + formData.mobileNumber}
                  onChange={(e) => {
                    const input = e.target.value.replace(phonePrefix, "");
                    const numericInput = input.replace(/\D/g, "").slice(0, 10);
                    setFormData((prev) => ({
                      ...prev,
                      mobileNumber: numericInput,
                    }));
                  }}
                  placeholder="Enter phone number"
                  className="w-full p-2 border rounded-lg"
                  required
                />
              </label>
            </div>

            <div className="grid grid-cols-1 gap-4 mb-4 md:grid-cols-2">
              <label className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-lg"
                  required
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
                  required
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

            {/* <p className="p-3 text-sm font-medium text-gray-700 bg-gray-100 border-l-4 border-blue-500 rounded-md">
              You have to use{" "}
              <span className="font-bold text-blue-600">Alphabet</span>,{" "}
              <span className="font-bold text-green-600">Numeric</span>,{" "}
              <span className="font-bold text-red-600">Symbol</span>,{" "}
              <span className="font-bold text-purple-600">Uppercase</span>, and{" "}
              <span className="font-bold text-orange-600">Lowercase</span> in
              your password.
            </p> */}
            <p className="p-3 text-sm font-medium text-gray-700 bg-gray-100 border-l-4 border-blue-500 rounded-md">
              All fields are 
              <span className="font-bold text-red-600"> required</span>.{" "}
            </p>

            <button
              className="w-full py-3 text-white bg-green-700 rounded-lg cursor-pointer disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Registering..." : "Sign Up"}
            </button>

            <p className="mt-2 text-sm text-center text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="font-medium text-green-700">
                Login
              </Link>
            </p>
          </form>
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
    </>
  );
}

export default Signuppage;
