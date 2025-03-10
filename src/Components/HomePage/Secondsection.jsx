import React, { useState, useEffect } from 'react';
import { FaPencilAlt, FaShieldVirus } from 'react-icons/fa';
import professionalteam from './../../assets/Images/professionalteam.png';
import { Link } from 'react-router-dom';

function Secondsection() {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Intersection Observer to detect when the section comes into view
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting); // Set inView to true when the section is in view
      },
      { threshold: 0.3 } // Trigger animation when 30% of the section is visible
    );

    const section = document.getElementById('second-section');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section
      id="second-section"
      className={`container mx-auto px-6 py-12 bg-gray-100 transition-all duration-1000 ease-in-out ${
        inView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 space-y-6">
          <h1
            className={`text-3xl md:text-5xl font-bold text-gray-800 leading-tight ${
              inView ? 'animate-slideInLeft' : ''
            }`}
          >
            Take your work to the next level, it’s simple
          </h1>

          {/* Features List */}
          <div className="space-y-6">
            {[ 
              { icon: <FaPencilAlt className="text-6xl bg-[#004930] p-4 text-white rounded-full shadow-lg" />, title: "Drop us a message", text: "We’d love to hear from you!" },
              { icon: <FaPencilAlt className="text-6xl bg-[#004930] p-4 text-white rounded-full shadow-lg" />, title: "Let’s work together", text: "Whether you’re hiring or freelancing, we’ve got your back." },
              { icon: <FaShieldVirus className="text-6xl bg-[#004930] p-4 text-white rounded-full shadow-lg" />, title: "Join a thriving network ", text: "Connect with top talent and game-changing projects" },
            ].map((item, index) => (
              <div
                key={index}
                className={`flex items-start gap-6 p-4 bg-white rounded-lg shadow-md transform hover:scale-105 transition duration-300 ${
                  inView ? '' : ''
                }`}
              >
                {item.icon}
                <div>
                  <h2 className="text-xl font-semibold text-gray-700">{item.title}</h2>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex flex-col md:flex-row gap-4 mt-6">
            <button
              className={`px-6 py-3 rounded-full hover:bg-[#004930] border-2 border-[#004930] text-[#004930] hover:text-white font-medium shadow-lg hover:opacity-90 transition duration-300 transform hover:scale-105 ${
                inView ? 'animate-fadeInUp' : ''
              }`}
            > <Link to="/registration"> Create an account at no cost</Link>
             
            </button>
            <button
              className={`px-6 py-3 rounded-full hover:bg-[#004930] border-2 border-[#004930] text-[#004930] hover:text-white font-medium shadow-lg hover:opacity-90 transition duration-300 transform hover:scale-105 ${
                inView ? 'animate-fadeInUp' : ''
              }`}
            >
             <Link to="/discover">Discover how to hire</Link> 
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className={`w-full md:w-1/2 flex justify-center ${inView ? 'animate-slideInRight' : ''}`}>
          <img
            src={professionalteam}
            alt="Professional Team"
            className="max-w-full h-auto rounded-lg shadow-lg transform hover:scale-110 transition duration-300"
          />
        </div>
      </div>
    </section>
  );
}

export default Secondsection;
