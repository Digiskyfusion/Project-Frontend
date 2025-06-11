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
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const getFileType = (url) => {
    const ext = url.split(".").pop().toLowerCase();
    if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) return "image";
    if (["mp4", "webm", "ogg"].includes(ext)) return "video";
    if (["pdf"].includes(ext)) return "pdf";
    return "other";
  };

  return (
    <>
      <Header2 />
      <div className="p-6 bg-gray-100 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Users With Uploaded Work
        </h1>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-10 w-10 border-t-4 border-blue-500 border-solid"></div>
          </div>
        ) : users.length === 0 ? (
          <p className="text-center text-gray-600">No users found.</p>
        ) : (
          <div className="grid gap-6">
            {users.map((user) => (
              <div
                key={user._id}
                className="bg-white rounded-xl shadow-lg p-5 hover:shadow-2xl transition"
              >
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-xl font-semibold text-gray-800">
                   Name:  {user.name}
                  </h2>
                   
                 <button
  className="px-4 py-2 bg-[#004930] text-white rounded-lg cursor-pointer transition transform shadow-md hover:shadow-lg hover:translate-y-[-2px] active:translate-y-1 active:shadow-sm"
  onClick={() => navigate(`/user/${user._id}`)}
>
  View Profile
</button>

                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {user.work.map((fileUrl, index) => {
                    const type = getFileType(fileUrl);
                    return (
                      <div
                        key={index}
                        className="border rounded-lg overflow-hidden bg-gray-50"
                      >
                        {type === "image" ? (
                          <a
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              src={fileUrl}
                              alt={`work-${index}`}
                              className="w-full h-48 object-cover cursor-pointer hover:opacity-90 transition"
                            />
                          </a>
                        ) : type === "video" ? (
                          <a
                            href={fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <video
                              className="w-full h-48 object-cover cursor-pointer"
                              muted
                              loop
                              preload="metadata"
                            >
                              <source src={fileUrl} type="video/mp4" />
                              Your browser does not support the video tag.
                            </video>
                          </a>
                        ) : type === "pdf" ? (
                          <div className="flex items-center justify-center h-48">
                            <a
                              href={fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 underline text-center"
                            >
                              View PDF
                            </a>
                          </div>
                        ) : (
                          <div className="flex items-center justify-center h-48">
                            <a
                              href={fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-600 underline text-center"
                            >
                              View File
                            </a>
                          </div>
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
