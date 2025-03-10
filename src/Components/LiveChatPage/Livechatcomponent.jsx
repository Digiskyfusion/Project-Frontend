import React from "react";
import first from "./../../assets/Images/first.png";

const profileList = [
  { name: "Manish", image: first },
  { name: "Amit", image: first },
  { name: "Priya", image: first },
  { name: "Rahul", image: first },
  { name: "Sneha", image: first },
  { name: "Ankit", image: first },
  { name: "Megha", image: first },
  { name: "Suresh", image: first },
];

function Livechatcomponent() {
  return (
    <div className="bg-gray-100 p-4  min-h-screen shadow-md rounded-l-lg">
      
      {/* Header - Your Profile */}
      <div className="flex items-center gap-3 border-b pb-3 mb-3 border-gray-400">
        <img src={first} alt="Profile" className="w-10 h-10 rounded-full border" />
        <h1 className="text-md font-semibold text-gray-800">Dhruvish</h1>
      </div>

      {/* Chat List (Scrollable) */}
      <div className="space-y-3 ">
        {profileList.map((profile, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-2 bg-white rounded-lg shadow cursor-pointer hover:bg-green-100 transition"
          >
            <img src={profile.image} alt="Profile" className="w-10 h-10 rounded-full border" />
            <h2 className="text-md font-semibold text-gray-800">{profile.name}</h2>
          </div>
        ))}
      </div>

    </div>
  );
}

export default Livechatcomponent;
