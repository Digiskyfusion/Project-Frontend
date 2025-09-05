import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
// import defaultProfilePic from "./../../assets/Images/default-profile.png"; // Placeholder image
import defaultProfilePic from './../../assets/Images/145856997_296fe121-5dfa-43f4-98b5-db50019738a7.jpg';
function AllFreelancers() {
  const [freelancers, setFreelancers] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => { 
    const fetchFreelancers = async () => {
      try {
        const response = await fetch.get(`${API_URL}/`);
        setFreelancers(response.data);
      } catch (error) {
        console.error("Error fetching freelancer profiles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFreelancers();
  }, []);

  if (loading) {
    return <div className="text-center py-10 text-lg font-semibold">Loading freelancers...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      <h1 className="text-sm md:text-2xl font-bold mb-8 text-center">All Freelancers</h1>
      
      {freelancers.length === 0 ? (
        <p className="text-center text-gray-600">No freelancers found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {freelancers.map((freelancer) => (
            <div
              key={freelancer._id}
              className="flex flex-col p-6 bg-gray-100 shadow-md rounded-lg border border-gray-300 hover:shadow-lg transition"
            >
              {/* Profile Info */}
              <div className="flex items-center">
                <img
                  src={freelancer.profileImage || defaultProfilePic}
                  alt={freelancer.fullName}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h1 className="text-lg font-semibold text-gray-900">{freelancer.fullName}</h1>
                  <p className="text-sm text-gray-500">{freelancer.skills || "Skills not added"}</p>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-3 text-sm text-gray-700">
              <p>
  Bio: {freelancer.bio 
    ? freelancer.bio.split(" ").slice(0, 10).join(" ") + (freelancer.bio.split(" ").length > 10 ? "..." : "") 
    : "Not added"}
</p>
                <p>Experience: {freelancer.experience || "N/A"} years</p>
              </div>

              {/* Actions */}
              <div className="mt-3 flex gap-4">
                <Link to="/livechat">
                  <button className="px-4 py-2 bg-[#004930] text-white rounded-md">Chat Now</button>
                </Link>
                <Link to={`/freelancerDetails/${freelancer._id}`}>
                  <button className="px-4 py-2 bg-[#004930] text-white rounded-md">Details</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AllFreelancers;
