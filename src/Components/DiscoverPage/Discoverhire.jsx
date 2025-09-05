import React from "react";
import { Link } from "react-router-dom";

function DiscoverHire() {
  return (
    <div className="flex justify-center items-center min-h-screen  bg-gray-300 p-6 perspective-[1000px]">
      <div className="relative bg-white max-w-5xl p-10 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.25)] ">
        
        {/* Glowing border behind card */}
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-green-300 to-teal-400 blur-lg opacity-40 z-0"></div>

        {/* Main Content */}
        <div className="relative z-10">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-6 text-center drop-shadow-[2px_2px_2px_rgba(0,0,0,0.15)]">
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

          {/* 3D Button */}
          <div className="flex justify-center mt-10">
            <Link to="/">
              <button className="relative px-8 py-3 rounded-xl cursor-pointer bg-green-600 text-white text-lg font-bold transition-all duration-300 hover:scale-105 hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] active:translate-y-1 active:shadow-inner shadow-[0_8px_0_#065f46]">
                <span className="block transform-gpu transition-transform duration-300 hover:-translate-y-1">
                  Start Hiring
                </span>
                {/* 3D button base */}
                <div className="absolute inset-0 rounded-xl border border-white border-opacity-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DiscoverHire;
