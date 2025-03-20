import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import pic from './../../assets/Images/145856997_296fe121-5dfa-43f4-98b5-db50019738a7.jpg';

const Freelancerid = () => {
  const { userId } = useParams(); // Extract userId from URL
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        if (!userId) {
          setError("Invalid User ID");
          setLoading(false);
          return;
        }

        console.log("Fetching profile for user_id:", userId);
        const response = await axios.get(
          `http://localhost:3000/api/freelancersP/getfreelancerprofile/${userId}`
        );

        console.log("API Response:", response.data);
        if (response.data) {
          setProfile(response.data);
          setUpdatedProfile(response.data); // Initialize update form
        } else {
          setError("Freelancer profile not found");
        }
      } catch (err) {
        console.error("Error fetching profile:", err);
        setError(err.response?.data?.message || "Error fetching profile");
      } finally {
        setLoading(false);
      }
    };

    fetchProfile();
  }, [userId]);

  // Handle form input changes
  const handleChange = (e) => {
    setUpdatedProfile({ ...updatedProfile, [e.target.name]: e.target.value });
  };

  // Handle profile update
  const handleUpdate = async () => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/freelancersP/updatefreelancerprofile/${userId}`,
        updatedProfile
      );
  
      console.log("Update Response:", response.data);
  
      if (response.data.freelancer) {
        setProfile(response.data.freelancer); // ✅ Correctly update the profile state
        setUpdatedProfile(response.data.freelancer); // ✅ Ensure form fields show updated data
      }
  
      setEditMode(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile.");
    }
  };
  

  if (loading) return <h2 className="text-center mt-10">Loading...</h2>;
  if (error) return <h2 className="text-center mt-10 text-red-500">{error}</h2>;

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10 border border-gray-200">
      {/* Profile Header */}
      <div className="flex flex-col items-center text-center">
        <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-gray-300">
        <img
            src={profile?.profileImage ? `http://localhost:3000${profile.profileImage}` : pic}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mt-4">{profile?.fullName || "N/A"}</h1>
      </div>

      {/* Profile Details */}
      {editMode ? (
  <div className="mt-6">
    <label className="text-gray-700 font-semibold">Full Name</label>
    <input
      type="text"
      name="fullName"
      value={updatedProfile.fullName}
      onChange={handleChange}
      className="w-full border p-2 rounded mb-2"
    />

    <label className="text-gray-700 font-semibold">Email</label>
    <input
      type="email"
      name="email"
      value={updatedProfile.email}
      onChange={handleChange}
      className="w-full border p-2 rounded mb-2"
    />

    <label className="text-gray-700 font-semibold">Phone</label>
    <input
      type="text"
      name="phone"
      value={updatedProfile.phone}
      onChange={handleChange}
      className="w-full border p-2 rounded mb-2"
    />

    <label className="text-gray-700 font-semibold">Address</label>
    <input
      type="text"
      name="address"
      value={updatedProfile.address}
      onChange={handleChange}
      className="w-full border p-2 rounded mb-2"
    />

    <label className="text-gray-700 font-semibold">Bio</label>
    <textarea
      name="bio"
      value={updatedProfile.bio}
      onChange={handleChange}
      className="w-full border p-2 rounded mb-2"
    ></textarea>

    <button
      onClick={handleUpdate}
      className="w-full bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-all"
    >
      Save Changes
    </button>
  </div>
) : (
  <div className=" gap-6 mt-6 text-gray-700">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6 text-gray-700">
    <p><strong className="text-gray-900">Full Name:</strong> {profile?.fullName || "N/A"}</p>
    <p><strong className="text-gray-900">Email:</strong> {profile?.email || "N/A"}</p>
    <p><strong className="text-gray-900">Phone:</strong> {profile?.phone || "N/A"}</p>
    <p><strong className="text-gray-900">Address:</strong> {profile?.address || "N/A"}</p>
    </div>
   
    <p className="mt-5"><strong className="text-gray-900">Bio:</strong> {profile?.bio || "N/A"}</p>
  </div>
)}

      {/* Update Button */}
      <div className="mt-6 flex justify-center">
        {!editMode && (
          <button onClick={() => setEditMode(true)} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-all">
            Update Profile
          </button>
        )}
      </div>
    </div>
  );
};

export default Freelancerid;
