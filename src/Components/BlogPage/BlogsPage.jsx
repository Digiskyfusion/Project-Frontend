import React from "react";
import { Link } from "react-router-dom";
import {
  FaPenNib,
  FaPaintBrush,
  FaBullhorn,
  FaCode,
  FaUserTie,
  FaChalkboardTeacher,
} from "react-icons/fa";

const jobIcons = [
  <FaPenNib className="text-[#10B981] text-xl mr-3" />,
  <FaPaintBrush className="text-[#10B981] text-xl mr-3" />,
  <FaBullhorn className="text-[#10B981] text-xl mr-3" />,
  <FaCode className="text-[#10B981] text-xl mr-3" />,
  <FaUserTie className="text-[#10B981] text-xl mr-3" />,
  <FaChalkboardTeacher className="text-[#10B981] text-xl mr-3" />,
];


const BlogsPage = ({jobSections, Heading,para, bottomText,bottom,title}) => {
  return (
    <div className="bg-gradient-to-br from-[#ecfdf5] via-[#f0fdfa] to-[#fefce8] min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Top Left Back Button */}
        <div className="mb-6">
          <Link to="/blog">
            <button className="bg-[#065f46] cursor-pointer text-white px-6 py-2 rounded-full font-medium hover:bg-[#047857] transition">
              ← Back
            </button>
          </Link>
        </div>

        {/* Header */}
        <header className="text-center mb-14">
          <h1 className="text-xl lg:text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-[#065f46] via-[#059669] to-[#10b981] bg-clip-text text-transparent leading-tight mb-5">
            📝{title}
          </h1>
        </header>

        {/* Intro Section */}
        <section className="mb-12 px-4">
          <h2 className="text-2xl font-bold text-[#065f46] mb-4">
            🚀 {Heading}
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
            {para}
          </p>
        </section>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-2">
          {jobSections.map(({ title, content }, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-70 backdrop-blur-sm border border-gray-200 rounded-2xl shadow-md hover:shadow-lg p-6 transition-all duration-300"
            >
              <div className="flex items-center text-lg font-semibold text-[#065f46] mb-2">
                {jobIcons[index]}
                {title}
              </div>
              <p className="text-gray-700">{content}</p>
            </div>
          ))}
        </div>

        {/* Call To Action */}
        <section className="mt-16 px-4">
          <h2 className="text-2xl font-bold text-[#047857] mb-3">
            🌟 Start Your Online Career with DigiSky.ai
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed max-w-3xl">
            Online jobs offer flexibility, freedom, and real income. Platforms like{" "}
            <a
              href="https://digisky.ai"
              className="text-blue-600 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              DigiSky.ai
            </a>{" "}
            make it easy to find genuine work-from-home opportunities. Register today and kickstart your digital journey in just a few clicks.
          </p>
        </section>

        {/* Tips Section */}
        <section className="mt-14 bg-white rounded-2xl shadow-inner p-8 border border-dashed border-green-200">
          <h2 className="text-xl font-semibold text-[#065f46] mb-4">
            💡{bottomText}
          </h2>
          <p>
            {bottom}
          </p>
        </section>
      </div>
    </div>
  );
};

export default BlogsPage;
