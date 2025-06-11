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

  if (!user) return <div className="h-screen flex items-center justify-center text-xl">Loading...</div>;

  const formatDate = (isoDate) => new Date(isoDate).toLocaleDateString("en-IN", {
    year: "numeric", month: "long", day: "numeric"
  });

  const getFileType = (url) => {
    const ext = url.split('.').pop().toLowerCase();
    if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) return "image";
    if (["mp4", "webm"].includes(ext)) return "video";
    if (["pdf"].includes(ext)) return "pdf";
    return "other";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-8">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-6 space-y-6">

        {/* Header */}
        <div className="flex items-center gap-6">
          <img
            src={user.image || "/default-avatar.png"}
            alt={user.name}
            className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">{user.bio || "No bio added yet."}</p>
          </div>
        </div>

        {/* Details */}
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Mobile:</strong> {user.mobileNumber}</p>
          <p><strong>Experience:</strong> {user.experience || "Not provided"}</p>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {user.skills?.map((skill, index) => (
              <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Showcase Links */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Showcase Links</h2>
          <ul className="list-disc ml-5 text-blue-600">
            {user.showcaseLinks?.map((link, idx) => (
              <li key={idx}>
                <a href={`https://${link}`} target="_blank" rel="noopener noreferrer">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Past Experience */}
        {user.pastExperience && (
          <div>
            <h2 className="text-xl font-semibold mb-2">Past Experience</h2>
            <p className="text-gray-700">{user.pastExperience}</p>
          </div>
        )}

        {/* Work Files */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Work Showcase</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {user.work?.map((fileUrl, idx) => {
              const fileType = getFileType(fileUrl);
              return (
                <div key={idx} className="border rounded-lg p-2 shadow bg-gray-50">
                  {fileType === "image" && (
                    <img src={fileUrl} alt={`Work ${idx}`} className="w-full h-40 object-cover rounded" />
                  )}
                  {fileType === "video" && (
                    <video controls className="w-full h-40 rounded">
                      <source src={fileUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {fileType === "pdf" && (
                    <a
                      href={fileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 underline block text-center py-6"
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
