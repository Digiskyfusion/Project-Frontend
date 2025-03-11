import React from "react";
import first from "./../../assets/Images/first.png";
import { Link } from "react-router-dom";
const profiles = Array.from({ length: 16 }, (_, index) => ({
  id: index + 1,
  name: `User ${index + 1}`,
  position: [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
  ][index % 4],
  bio: "Bio not added",
  skillset: "Skills not added",
  experience: `${index % 5} years`,
  image: first,
}));

function ProfileCard() {
  return (
    <div className="max-w-6xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200 ">
    <h1 className="text-sm md:text-2xl font-bold mb-8 text-center">All Freelancer</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {profiles.map((profile) => (
          <div
            key={profile.id}
            className="flex flex-col p-6 bg-gray-100 shadow-md rounded-lg border border-gray-300 hover:shadow-lg transition"
          >
            <div className="flex items-center">
              <img loading="lazy"
                src={profile.image}
                alt={profile.name}
                className="w-16 h-16 rounded-full object-cover mr-4"
              />
              <div>
                <h1 className="text-lg font-semibold text-gray-900">
                  {profile.name}
                </h1>
                <p className="text-sm text-gray-500">{profile.position}</p>
              </div>
            </div>
            <div className="mt-3 text-sm text-gray-700">
              <p>Bio: {profile.bio}</p>
              <p>Skillset: {profile.skillset}</p>
              <p>Experience: {profile.experience}</p>
            </div>
            <div className="mt-3 flex gap-4">
              <button className="px-4 py-2 bg-[#004930] text-white rounded-md ">
                <Link to ="/livechat">Chat Now </Link> 
              </button>
              <button className="px-4 py-2 bg-[#004930] text-white rounded-md  ">
              <Link to="/freelancerDetails">Details</Link>  
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfileCard;
