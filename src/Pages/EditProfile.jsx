import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast"; 
import states from "../../States.js";
import Header1 from '../Components/Client/Header.jsx';
import Header2 from "../Components/Freelancer/Header.jsx";
import Footer from "../Components/Footer/Footer.jsx";

const UserEdit = () => {
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;
  const parsed = JSON.parse(localStorage.getItem("user")) || {};

  const [name, setName] = useState(parsed?.name || "");
  const [email, setEmail] = useState(parsed?.email || "");
  const [location, setLocation] = useState(parsed?.location || "");
  const [roleCheck, setRoleCheck] = useState(parsed?.roleType || "");
  const [mobileNumber, setMobileNumber] = useState(parsed?.mobileNumber || "");
  const [loading, setLoading] = useState(false);

  const rolesval = ["client", "freelancer"];
  const [roleType, setRoleType] = useState(null);

  useEffect(() => {
    const storedRoleType = localStorage.getItem("roleType");
    if (storedRoleType) {
      setRoleType(storedRoleType);
    }
  }, []);

  useEffect(() => {
    setName(parsed?.name || "");
    setEmail(parsed?.email || "");
    setLocation(parsed?.location || ""); // Ensure location is a valid string
    setRoleCheck(parsed?.roleType || "");
    setMobileNumber(parsed?.mobileNumber || "");
  }, []);

  const handleSave = async () => {
    const mobileRegex = /^[0-9]{10}$/;
    if (!mobileRegex.test(mobileNumber)) {
      toast.error("Please enter a valid 10-digit mobile number.");
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        toast.error("Authentication token not found. Please log in again.");
        navigate("/login"); // Redirect user to login page
        return;
      }

      const response = await axios.put(
        `${API_URL}/userInfo/edit`,
        { name, email, location, roleType: roleCheck, mobileNumber },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.status === 200) {
        toast.success(response.data.message);
        setTimeout(() => {
          navigate("/");
          window.location.reload();
        }, 500);
      } else {
        toast.error(response?.data?.message || "Failed to update profile.");
      }
    } catch (error) {
      if (error.response?.status === 401) {
        toast.error("Session expired. Please log in again.");
        localStorage.removeItem("token");
        navigate("/login"); // Redirect to login
      } else {
        toast.error("Error updating profile: " + (error.response?.data?.message || error.message));
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Toaster />
      {roleType !== "freelancer" ? <Header2 /> : <Header1 />}
      <div className="w-[100%] flex flex-col items-center px-4 py-8 bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-6 w-full mx-auto">
          <h1 className="text-2xl font-bold text-center text-blue-600 mb-6">Edit Profile</h1>

          <div className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">Mobile Number</label>
              <input
                type="text"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter your mobile number"
              />
            </div>

            {/* Location Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Location</label>
              <select
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="">Select your location</option>
                {states && states.length > 0 ? (
                  states.map((state, index) => (
                    <option key={index} value={state}>
                      {state}
                    </option>
                  ))
                ) : (
                  <option disabled>No states available</option>
                )}
              </select>
            </div>

            {/* Role Dropdown */}
            <div>
              <label className="block text-gray-700 font-medium mb-2">Account Type</label>
              <select
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={roleCheck}
                onChange={(e) => setRoleCheck(e.target.value)}
              >
                {rolesval.map((role, index) => (
                  <option key={index} value={role}>
                    {role}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex justify-between mt-6">
            <button
              onClick={() => navigate(-1)}
              className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-100"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
              disabled={loading}
            >
              {loading ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default UserEdit;
