// src/components/SingleUserProfile.jsx
import React from "react";

const SingleUserProfile = ({ user }) => {
  if (!user) return null;

  const getFileType = (url) => {
    const ext = url.split(".").pop().toLowerCase();
    if (["jpg", "jpeg", "png", "gif", "webp"].includes(ext)) return "image";
    if (["mp4", "webm", "ogg"].includes(ext)) return "video";
    if (["pdf"].includes(ext)) return "pdf";
    return "other";
  };

  return (
    <div className="mt-8 text-left">
      {/* Work Section */}
      {user?.work?.length > 0 && (
        <div className="mb-6">
          <h3 className="text-2xl font-bold text-[#004930] mb-4">Work Samples</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {user.work.map((fileUrl, index) => {
              const type = getFileType(fileUrl);
              return (
                <div key={index} className="bg-white rounded shadow-md p-3">
                  {type === "image" && (
                    <img
                      src={fileUrl}
                      alt={`work-${index}`}
                      className="w-full h-40 object-cover rounded"
                    />
                  )}
                  {type === "video" && (
                    <video controls className="w-full h-40 rounded">
                      <source src={fileUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  {type === "pdf" && (
  <div className="flex flex-col items-center justify-center h-40">
    <img
      src="https://cdn-icons-png.flaticon.com/512/337/337946.png"
      alt="PDF Icon"
      className="w-12 h-12 mb-2"
    />
    <a
      href={fileUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline cursor-pointer font-medium hover:text-blue-800"
    >
      View PDF
    </a>
  </div>
)}

                </div>
              );
            })}
          </div>
        </div>
      )}

      {Array.isArray(user?.showcaseLinks) && user.showcaseLinks.length > 0 && (
  <div className="mt-6">
    <h3 className="text-2xl font-bold text-[#004930] mb-4">Showcase Links</h3>
    <ul className="list-disc list-inside text-blue-700 space-y-2 underline">
      {user.showcaseLinks.map((link, index) => (
        <li key={index}>
          <a
            href={
              link.startsWith("http")
                ? link
                : `https://${link}`
            }
            target="_blank"
            rel="noopener noreferrer"
          >
            {link}
          </a>
        </li>
      ))}
    </ul>
  </div>
)}


      {/* Past Experience Section */}
     {user?.pastExperience?.length > 0 && (
  <div className="mt-6">
    <h3 className="text-2xl font-bold text-[#004930] mb-4">Past Experience</h3>
    <p>{user.pastExperience}</p>
  </div>
)}

    </div>
  );
};

export default SingleUserProfile;
