import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Ellipse from './../../assets/Images/145856997_296fe121-5dfa-43f4-98b5-db50019738a7.jpg';

// Supabase Storage URL
const SUPABASE_URL = "https://mwjexidlverimqrovedx.supabase.co/storage/v1/object/public/images/";

function ClientProfile() {
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await fetch("http://localhost:3000/getclientprofile");

        if (!response.ok) {
          throw new Error("Failed to fetch client data");
        }

        const data = await response.json();

        if (!Array.isArray(data)) {
          throw new Error("API did not return an array");
        }

        console.log("Fetched Clients:", data); // Debugging API response
        setClients([...data]); // Ensuring state updates properly
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClients();
  }, []);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-lg text-red-500">{error}</p>;

  return (
    <div>
      <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
        {clients.length === 0 ? (
          <p className="text-lg text-gray-600">No profiles</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {clients.map((client) => (
              <div key={client._id} className="bg-white p-6 rounded-2xl shadow-xl text-center">
                {/* Profile Image */}
                <img
                  loading="lazy"
                  src={client.profileImage ? `${SUPABASE_URL}${client.profileImage}` : Ellipse}
                  alt="Profile"
                  className="w-24 h-24 mx-auto rounded-full border-4 border-gray-300"
                />

                {/* Client Name */}
                <h1 className="text-xl font-semibold mt-4">{client.fullName || "Unnamed Client"}</h1>

                {/* Address */}
                <p className="text-gray-600 text-sm mt-1">
                  {client.address ? `📍 ${client.address}` : "📍 Address not provided"}
                </p>

                <hr className="border-gray-300 my-3" />

                {/* Additional Client Details */}
                <div className="text-left text-sm">
                  <p className="text-gray-700"><strong>Email:</strong> <span className="blur-sm">{client.email || "Not provided"}</span></p>
                  <p className="text-gray-700"><strong>Experience:</strong> {client.experience || 0} years</p>
                  <p className="text-gray-700">
                    <strong>Skills:</strong>{" "}
                    {client.skills && client.skills.length > 0 ? client.skills.slice(0, 2).join(", ") : "Not specified"}
                  </p>
                  <p className="text-gray-700">
                    <strong>Bio:</strong>{" "}
                    {client.bio ? (client.bio.length > 50 ? `${client.bio.substring(0, 50)}...` : client.bio) : "No bio available."}
                  </p>

                  {/* Portfolio Links */}
                  {client.portfolioLinks && client.portfolioLinks.length > 0 && (
                    <p className="text-gray-700">
                      <strong>Portfolio:</strong>{" "}
                      {client.portfolioLinks.map((link, index) => (
                        <a key={index} href={link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                          {link}
                        </a>
                      ))}
                    </p>
                  )}
                </div>

                <hr className="border-gray-300 my-3" />

                {/* Action Buttons */}
                <div className="mt-6 flex justify-center gap-4">
                  <button className="bg-[#004930] text-white px-4 py-2 rounded-2xl border-2 border-white shadow-md hover:bg-opacity-80 transition">
                    <Link to={`/livechat?clientId=${client._id}`}>Chat Now</Link>
                  </button>
                  <button className="bg-[#004930] text-white px-4 py-2 rounded-2xl border-2 border-white shadow-md hover:bg-opacity-80 transition">
                    <Link to={`/clientDetails/${client._id}`}>Detail</Link>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default ClientProfile;
