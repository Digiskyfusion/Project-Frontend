import { useEffect, useState } from "react";
import axios from "axios";
import { getSubdomain } from "../utils/getSubdomain";

function PortfolioPage() {
  const [user, setUser] = useState(null);
  const subdomain = getSubdomain();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    if (!subdomain) return;
    axios.get(`${API_URL}/user/portfolio/${subdomain}`)
      .then(res => setUser(res.data))
      .catch(err => console.error("User not found", err));
  }, [subdomain]);

  if (!user) return <div className="h-screen flex items-center justify-center text-xl">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-6">
        <div className="flex items-center gap-6">
          <img
            src={user.image || "/default-avatar.png"}
            alt={user.name}
            className="w-28 h-28 rounded-full border-4 border-blue-500 object-cover"
          />
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
            <p className="text-gray-600">{user.bio || "No bio added yet."}</p>
            <p className="text-sm text-blue-600 mt-1">@{user.username}</p>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-2">
            {(user.skills || []).map((skill, index) => (
              <span
                key={index}
                className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Projects (optional) */}
        {user.projects?.length > 0 && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-2">Projects</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {user.projects.map((project, idx) => (
                <div key={idx} className="bg-gray-50 rounded-lg p-4 shadow-sm border">
                  <h3 className="text-lg font-semibold">{project.title}</h3>
                  <p className="text-sm text-gray-600">{project.description}</p>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-sm mt-1 inline-block">
                      Visit
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Contact (optional) */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-2">Contact</h2>
          <p className="text-gray-700">📧 {user.email}</p>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
