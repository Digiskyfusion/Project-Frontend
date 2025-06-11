import React, { useEffect, useState } from "react";
import axios from "axios";
import Header2 from "../../Components/Client/Header";
import { useNavigate } from "react-router-dom";

const UsersWithWork = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const API_URL = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await axios.get(`${API_URL}/user/users-with-work`);
        setUsers(res.data);
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        // Delay hiding the spinner by 3 seconds
        setTimeout(() => setLoading(false), 1000);
      }
    };
    fetchUsers();
  }, []);

  const getFileType = (url) => {
    const ext = url.split(".").pop().toLowerCase();
    if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) return "image";
    if (["mp4", "webm", "ogg"].includes(ext)) return "video";
    return "other"; // Ignore PDFs or unsupported files
  };

  return (
    <>
      <Header2 />
      <div className="p-6 bg-gradient-to-br from-gray-100 to-gray-300 min-h-screen">
        <h1 className="text-4xl font-extrabold mb-8 text-center text-gray-800">
          🌟 Browse Works
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
          </div>
        ) : users.length === 0 ? (
          <p className="text-center text-gray-600">No users found.</p>
        ) : (
          <div className="grid gap-8">
            {users.map((user) => (
              <div
                key={user._id}
                className="bg-white/40 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {user.work
                    .filter((fileUrl) => {
                      const type = getFileType(fileUrl);
                      return type === "image" || type === "video";
                    })
                    .map((fileUrl, index) => {
                      const type = getFileType(fileUrl);
                      return (
                        <div
                          key={index}
                          className="relative group rounded-md overflow-hidden shadow-lg cursor-pointer transform transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl"
                          onClick={() => navigate(`/user/${user._id}`)}
                        >
                          {/* Overlay */}
                          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all z-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <p className="text-white font-medium">View Work</p>
                          </div>

                          {type === "image" ? (
                            <img
                              src={fileUrl}
                              alt={`work-${index}`}
                              className="w-full h-48 object-cover rounded-md"
                            />
                          ) : (
                            <video
                              className="w-full h-48 object-cover rounded-md"
                              muted
                              loop
                              preload="metadata"
                            >
                              <source src={fileUrl} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default UsersWithWork;
