import { useEffect, useState } from "react";
import axios from "axios";
import { getSubdomain } from "../utils/getSubdomain";

function PortfolioPage() {
  const [user, setUser] = useState(null);
  const subdomain = getSubdomain();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!subdomain) return;
    axios
      .get(`${API_URL}/user/portfolio/${subdomain}`)
      .then((res) => setUser(res.data))
      .catch((err) => console.error("User not found", err));
  }, [subdomain]);

  if (!user)
    return (
      <div className="h-screen flex items-center justify-center text-xl text-indigo-600 font-semibold animate-pulse">
        Loading...
      </div>
    );

  const formatDate = (isoDate) =>
    new Date(isoDate).toLocaleDateString("en-IN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

  const getFileType = (url) => {
    const ext = url.split(".").pop().toLowerCase();
    if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) return "image";
    if (["mp4", "webm"].includes(ext)) return "video";
    if (["pdf"].includes(ext)) return "pdf";
    return "other";
  };

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-purple-100 via-white to-purple-300 p-8 sm:p-12 overflow-hidden animated-blobs">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-3xl p-8 space-y-10 transition-all duration-300 border border-gray-200 relative z-10">

        {/* Header */}
        <div className="flex items-center gap-6">
          <img
            src={user.image || "/default-avatar.png"}
            alt={user.name}
            className="w-32 h-32 rounded-full border-4 border-purple-500 object-cover shadow-lg"
          />
          <div>
            <h1 className="text-4xl font-extrabold text-gray-800">{user.name}</h1>
            <p className="text-gray-600 mt-1 text-sm italic">
              {user.bio || "No bio added yet."}
            </p>
          </div>
        </div>

        {/* Details */}
        <div className="grid sm:grid-cols-2 gap-4 text-base text-gray-700 bg-gray-50 rounded-lg p-4 shadow-md">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Mobile:</strong> {user.mobileNumber}</p>
          <p><strong>Experience:</strong> {user.experience || "Not provided"}</p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-purple-700">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {user.skills?.map((skill, index) => (
              <span key={index} className="bg-purple-100 hover:bg-purple-200 text-purple-900 text-sm font-medium px-3 py-1 rounded-full transition-all">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Showcase Links */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-purple-700">Showcase Links</h2>
          <ul className="list-disc ml-5 text-purple-700 space-y-1">
            {user.showcaseLinks?.map((link, idx) => (
              <li key={idx}>
                <a
                  href={`https://${link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-purple-900 transition"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Past Experience */}
        {user.pastExperience && (
          <div>
            <h2 className="text-2xl font-semibold mb-3 text-purple-700">Past Experience</h2>
            <p className="text-gray-700 bg-gray-50 p-4 rounded-lg shadow-inner">
              {user.pastExperience}
            </p>
          </div>
        )}

        {/* Work Files */}
        <div>
          <h2 className="text-2xl font-semibold mb-3 text-purple-700">Work Showcase</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {user.work?.map((fileUrl, idx) => {
              const fileType = getFileType(fileUrl);
              return (
                <div
                  key={idx}
                  className="border rounded-xl p-3 shadow-lg bg-white hover:shadow-xl transition transform hover:scale-105"
                >
                  {fileType === "image" && (
                    <img
                      src={fileUrl}
                      alt={`Work ${idx}`}
                      className="w-full h-44 object-cover rounded-md transition-transform duration-300 hover:scale-105"
                    />
                  )}
                  {fileType === "video" && (
                    <video controls className="w-full h-44 rounded-md">
                      <source src={fileUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {fileType === "pdf" && (
                    <a
                      href={fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 underline block text-center py-6 hover:text-purple-800 transition"
                    >
                      View PDF
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
