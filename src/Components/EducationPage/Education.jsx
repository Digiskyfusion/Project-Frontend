import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom"; // Get ID from URL
import axios from "axios";
// import first from "./../../assets/Images/first.png";
import Footer from "../Footer/Footer";
import first from './../../assets/Images/145856997_296fe121-5dfa-43f4-98b5-db50019738a7.jpg';

function Education() {
  const { id } = useParams(); // Get freelancer ID from URL
  const [user, setUser] = useState(null); // Store user data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/freelancersP/getfreelancerprofile/${id}`)
      .then((response) => {
        setUser(response.data); // Store user data
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching freelancer profile:", err);
        setError("Failed to load profile.");
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="text-center py-5">Loading...</p>;
  if (error) return <p className="text-center py-5 text-red-500">{error}</p>;

  return (
    <>
     <div className="mt-6 flex justify-center">
            <Link to="/allfreelancer">
              <button className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-800 transition">
                Back to All Freelancer
              </button>
            </Link>
          </div>
      <div className="mt-3 py-10">
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
          
          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start pb-4 gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img
                loading="lazy"
                src={user.profileImage || first} // Use default image if null
                alt="Profile"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full"
              />
              <div className="text-center sm:text-left">
                <h1 className="text-lg sm:text-xl font-semibold text-gray-900">
                  {user.fullName || "No name provided"}
                </h1>
                <p className="text-sm text-gray-600">
                  <strong>Email: </strong>
                  <span className="blur-sm">{user.email || "No email provided"}</span>
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Phone: </strong>
                  <span className="blur-sm">{user.phone || "No phone number provided"}</span>
                </p>
                <p className="text-sm text-gray-600">
                  <strong>Address: </strong>
                  <span className="blur-sm">{user.address || "No address provided"}</span>
                </p>
              </div>
            </div>

            {/* Chat Button */}
            <Link to="/livechat">
              <button className="px-4 py-2 bg-[#004930] text-white rounded-md hover:bg-[#003620] transition">
                Chat Now
              </button>
            </Link>
          </div>

          {/* Bio Section */}
          <h1 className="text-lg font-semibold text-gray-900 mt-4">Bio</h1>
          <p className="text-sm text-gray-700 mt-2">{user.bio || "No bio provided."}</p>

          {/* Experience Section */}
          <h1 className="text-lg font-semibold text-gray-900 mt-4">Experience</h1>
          <p className="text-sm text-gray-700 mt-2">
            {user.experience ? `${user.experience} years` : "No experience details provided."}
          </p>

          {/* Skills Section */}
          <div className="mt-4">
            <h1 className="text-lg font-semibold text-gray-900">Skills</h1>
            {user.skills ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {user.skills.split(",").map((skill, index) => (
                  <span key={index} className="px-4 py-2 bg-[#004930] text-white rounded-md">
                    {skill.trim()}
                  </span>
                ))}
              </div>
            ) : (
              <p className="text-sm text-gray-500">No skills added.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Education;
