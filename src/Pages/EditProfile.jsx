  import { useState, useEffect } from "react";
  import { useNavigate } from "react-router-dom";
  import axios from "axios";
  import toast, { Toaster } from "react-hot-toast";
  import states from "../../States.js";
  import Header1 from "../Components/Freelancer/Header";
  import Header2 from "../Components/Client/Header";
  import HeaderGlobal from "../Components/Header";
  import Footer from "../Components/Footer/Footer.jsx";

  const UserEdit = () => {
    const navigate = useNavigate();
    const API_URL = import.meta.env.VITE_API_URL;

    // State variables
    const [userId, setUserId] = useState(null);
    const [roleType, setRoleType] = useState("");
    const [user, setUser] = useState({});
    const [loading, setLoading] = useState(false);

    // Fetch userId and roleType from localStorage
    useEffect(() => {
      const userData = localStorage.getItem("user");
      if (userData) {
        try {
          const parsedData = JSON.parse(userData);
          // console.log(parsedData);

          if (parsedData?._id) {
            setUserId(parsedData._id);
          }
          if (parsedData?.roleType) {
            setRoleType(parsedData.roleType);
            console.log(parsedData.roleType);
            
          }
        } catch (error) {
          console.error("Error parsing user data:", error);
        }
      }
    }, []);

    // Fetch user details from API
    useEffect(() => {
      const fetchUserData = async () => {
        if (!userId) return;

        try {
          const response = await axios.get(`${API_URL}/user/${userId}`);
          console.log(response.data);
          setUser(response.data);
        } catch (error) {
          toast.error("Failed to fetch user data");
        }
      };

      fetchUserData();
    }, [API_URL, userId]);

    // Handle form submission
    const handleSave = async () => {
      const mobileRegex = /^[0-9]{10}$/;
      if (!mobileRegex.test(user.mobileNumber)) {
        toast.error("Please enter a valid 10-digit mobile number.");
        return;
      }

      setLoading(true);
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          toast.error("Authentication token not found. Please log in again.");
          navigate("/login");
          return;
        }

        const response = await axios.put(
          `${API_URL}/user/${userId}`,
          { ...user, roleType },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        if (response.status === 200) {
          toast.success(response.data.message);
          setTimeout(() => {
            navigate("/EditProfile");
            window.location.reload();
          }, 1000);
        } else {
          toast.error(response?.data?.message || "Failed to update profile.");
        }
      } catch (error) {
        if (error.response?.status === 401) {
          toast.error("Session expired. Please log in again.");
          localStorage.removeItem("token");
          navigate("/login");
        } else {
          toast.error("Error updating profile: " + (error.response?.data?.message || error.message));
        }
      } finally {
        setLoading(false);
      }
    };

    return (
      <div className="min-h-screen flex flex-col bg-green-100">
        <Toaster />
        {roleType === "freelancer" ? <Header1 /> : roleType === "client" ? <Header2 /> : <HeaderGlobal />}

        <div className="flex flex-grow justify-center items-center px-6 py-10">
          <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-4xl">
            <h1 className="text-3xl font-semibold text-center text-green-600 mb-8">Edit Profile</h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" 
                  value={user.name || ""} 
                  onChange={(e) => setUser({...user, name: e.target.value})} 
                  placeholder="Enter your name" 
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" 
                  value={user.email || ""} 
                  onChange={(e) => setUser({...user, email: e.target.value})} 
                  placeholder="Enter your email" 
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Mobile Number</label>
                <input 
                  type="text" 
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" 
                  value={user.mobileNumber || ""} 
                  onChange={(e) => setUser({...user, mobileNumber: e.target.value})} 
                  placeholder="Enter your mobile number" 
                />
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">State</label>
                <select 
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500" 
                  value={user.state || ""} 
                  onChange={(e) => setUser({...user, state: e.target.value})}
                >
                  <option value="">Select your state</option>
                  {states.map((state, index) => (
                    <option key={index} value={state}>{state}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-700 font-medium mb-2">Account Type</label>
                {/* <select 
                  className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-green-500 bg-gray-200" 
                  value={roleType  || ""} 
                  onChange={(e) => setRoleType(e.target.value)}
                disabled>
                  <option value="client">client</option>
                  <option value="freelancer">freelancer</option>
                </select> */}
                <p className="text-lg font-semibold text-gray-800 bg-gray-200 px-4 py-2 rounded-md">
  {user.roleType}
</p>

              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={() => navigate(-1)} 
                className="px-6 py-2 text-green-600 border border-green-600 rounded-md hover:bg-green-100"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave} 
                className="px-6 py-2 bg-green-600 text-white rounded-md hover:bg-green-700" 
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
