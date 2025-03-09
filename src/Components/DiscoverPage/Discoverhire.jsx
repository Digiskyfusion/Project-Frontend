import React from "react";

function DiscoverHire() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-500 to-teal-600 p-6">
      <div className="bg-white max-w-3xl p-8 rounded-3xl shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">
          Discover & Hire Top Talent
        </h2>
        <p className="text-gray-700 leading-relaxed text-lg">
          Hiring the right talent is more than just filling a vacancy; it’s about finding the perfect fit who can drive your business forward.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mt-4">
          Effective sourcing is key—use job portals, referrals, and social media platforms like LinkedIn to find potential hires. Go beyond resumes and assess problem-solving skills, adaptability, and cultural fit.
        </p>
        <p className="text-gray-700 leading-relaxed text-lg mt-4">
          Take time to compare candidates and ensure alignment with company values. A bad hire can be costly, so prioritize attitude and willingness to learn alongside technical expertise.
        </p>
        <p className="text-gray-900 font-semibold text-lg mt-6 text-center">
          Hiring strategically helps build a strong team that propels your business to new heights.
        </p>
        <div className="flex justify-center mt-6">
          <button className="bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:bg-green-700 hover:scale-110">
            Start Hiring
          </button>
        </div>
      </div>
    </div>
  );
}

export default DiscoverHire;
