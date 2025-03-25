import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import Footer from "../Footer/Footer";
import first from './../../assets/Images/145856997_296fe121-5dfa-43f4-98b5-db50019738a7.jpg';
import secondimage from './../../assets/Images/a-modern-and-elegant-portfolio-website-homepage-fo 2.png';

const SUPABASE_URL = "https://mwjexidlverimqrovedx.supabase.co/storage/v1/object/public/images/";

function CardsProfile() {
  const API_URL = import.meta.env.VITE_API_URL;
  const { id } = useParams();  // Get client ID from URL
  const navigate = useNavigate();
  const [client, setClient] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Authentication Check
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("token");
    if (!isAuthenticated) {
      navigate("/login");
    }
  }, [navigate]);

  // Fetch Client Data
  useEffect(() => {
    const fetchClientDetails = async () => {
      try {
        console.log(`Fetching client data for ID: ${id}`);
        const response = await fetch(`${API_URL}/getclientprofile/${id}`);
        const data = await response.json();
        console.log("Fetched Data:", data); // Debugging Output

        if (!response.ok) {
          throw new Error("Failed to fetch client details");
        }

        if (Array.isArray(data) && data.length > 0) {
          const selectedClient = data.find(client => client._id === id);
          if (selectedClient) {
            setClient(selectedClient);
          } else {
            setClient(null);
          }
        } 
      } catch (err) {
        console.error("Error fetching client details:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClientDetails();
  }, [id]);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

  return (
    <>
      <div className="mt-4 mb-4">
        <Link to="/ClientProfile" className="flex justify-center items-center mb-3">
          <button className="px-6 py-3 bg-gradient-to-r from-[#004930] to-[#006f4a] text-white font-semibold rounded-lg shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg focus:ring-2 focus:ring-[#004930]">
            Back to All Client Profiles
          </button>
        </Link>

        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
          
          {/* Profile Section */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start pb-4 gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <img loading="lazy" 
                src={client?.profileImage ? `${SUPABASE_URL}${client.profileImage}` : first} 
                alt="Profile" 
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[#004930]" 
              />
              <div className="text-center sm:text-left">
                <h1 className="text-lg sm:text-xl font-semibold text-gray-900">{client?.fullName || "No Name Available"}</h1>
                <p className="text-sm text-gray-600">{client?.address || "Address not provided"}</p>
               <div className="">
               <p className="flex gap-1 items-center">Email:- <p className="text-sm text-gray-600 blur-xs ">{client?.email || "Email not provided"}</p></p>
               </div>
               </div>
            </div>
            <Link to="/livechat">
              <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#004930] to-[#006f4a] text-white font-semibold rounded-md shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-[#004930] cursor-pointer">
                Chat Now
              </button>
            </Link>
          </div>

          {/* Bio Section */}
          <h1 className="text-lg font-semibold text-gray-900 mt-4">Bio</h1>
          <p className="text-sm text-gray-700 mt-2 leading-relaxed">
            {client?.bio || "No bio available."}
          </p>

          {/* Skills Section */}
          <div className="mt-6">
            <h1 className="text-lg font-semibold text-gray-900">Skills</h1>
            {client?.skills?.length > 0 ? (
              <ul className="flex flex-wrap gap-2 mt-2">
                {client.skills.map((skill, index) => (
                  <li key={index} className="px-3 py-1 bg-green-100 text-green-700 rounded-lg text-sm font-medium">
                    {skill}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-600 mt-2">No skills available.</p>
            )}
          </div>

          {/* Client's Past Projects */}
          <div className="mt-6 py-5">
            <h1 className="text-lg font-semibold text-gray-900">Client’s Past Projects</h1>
          </div>

          {/* Project Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
            {client?.portfolioLinks?.length > 0 ? (
              client.portfolioLinks.map((link, index) => (
                <div key={index} className="rounded-lg">
                  <img loading="lazy" src={secondimage} alt={`Project ${index + 1}`} className="w-full h-auto object-cover rounded-t-lg" />
                  <div className="flex justify-center py-3 bg-[#004930] rounded-b-xl">
                    <a href={link} target="_blank" rel="noopener noreferrer">
                      <button className="px-5 py-2 bg-gradient-to-r from-[#004930] to-[#006f4a] text-white font-medium rounded-lg shadow-md hover:bg-[#006f4a] transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer">
                        Preview
                      </button>
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600">No projects available.</p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default CardsProfile;
