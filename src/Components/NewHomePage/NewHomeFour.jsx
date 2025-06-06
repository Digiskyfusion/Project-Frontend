import React from 'react';
import vector3 from '../../assets/Images/3d-vector-illustration-of-a-happy-freelancer-worki (1) 3 (1).png';
import vector4 from '../../assets/Images/3d-vector-illustration-of-a-happy-freelancer-worki (1) 4.png';
import { Link } from 'react-router-dom';

function NewHomeFour() {
  return (
    <div className="py-7 sm:py-20 px-4 sm:px-8 md:px-7 lg:px-5  bg-[#fefce8] space-y-32 relative overflow-visible">
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-15px); }
            100% { transform: translateY(0px); }
          }

          .float-animation {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>

      {/* First Block */}
      <div className="relative flex flex-col md:flex-row  items-start md:items-center justify-between">
        {/* Image for mobile view */}
        <div className="block md:hidden mb-6 self-center">
          <img
            src={vector3}
            alt="vector3"
            className="w-48 sm:w-64 max-w-full float-animation"
          />
        </div>

        {/* Floating image for md+ */}
        <div className="hidden md:block absolute -top-16 right-[-10px] z-10">
          <img
            src={vector3}
            alt="vector3"
            className="w-64 md:w-80 max-w-full float-animation"
          />
        </div>

        {/* Card Content */}
        <div className="w-full md:w-[55%] lg:w-[65%] bg-[#064e3b] text-white p-6 md:p-8 rounded-2xl shadow-lg space-y-4 z-20">
          <h1 className="text-2xl md:text-3xl font-semibold">
            🚀 Ditch the 9-to-5. Own Your Time. Do What You Love!
          </h1>
          <p className="text-sm md:text-base text-gray-100">
            Freelancing isn’t just work—it’s freedom. Work with dream clients, set your own schedule, and earn on your terms.
            No office politics, no limits—just you, your skills, and endless opportunities. Whether you’re a designer,
            writer, coder, or marketer, your next big project is waiting.
          </p>
          <h3 className="text-green-300 italic font-medium">
            Why wait? The future of work is here, and it’s calling your name.
          </h3>
        <Link to="/registration">
            <button
            className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold border border-gray-300
                       shadow-[0_4px_0_#a0aec0] transform transition-all duration-200 ease-in-out
                       hover:-translate-y-1 hover:shadow-[0_6px_0_#a0aec0]
                       active:translate-y-0 active:shadow-[0_2px_0_#a0aec0] cursor-pointer mt-4 w-full sm:w-auto"
          >
            Get Started
          </button>
        </Link>
        </div>
      </div>

      {/* Second Block */}
      <div className="relative flex flex-col md:flex-row-reverse    items-start md:items-center justify-between">
        {/* Image for mobile view */}
        <div className="block md:hidden mb-6 self-center">
          <img
            src={vector4}
            alt="vector4"
            className="w-48 sm:w-64 max-w-full float-animation"
          />
        </div>

        {/* Floating image for md+ */}
        <div className="hidden md:block absolute -top-16 left-[-10px] z-10">
          <img
            src={vector4}
            alt="vector4"
            className="w-64 md:w-80 max-w-full float-animation"
          />
        </div>

        {/* Card Content */}
        <div className="w-full md:w-[55%] lg:w-[65%] bg-[#064e3b] text-white p-6 md:p-8 rounded-2xl shadow-lg space-y-4 z-20">
          <h1 className="text-2xl md:text-3xl font-semibold">
            🚀 Hire Smarter. Scale Faster. Succeed Effortlessly!
          </h1>
          <p className="text-sm md:text-base text-gray-100">
          Great businesses are built with great talent. Why struggle with hiring when you can access top-tier freelancers in just a few clicks? Get experts who deliver quality, speed, and innovation—without the overhead. Whether you need a designer, developer, marketer, or strategist, your perfect match is just a tap away.
          </p>
          <h3 className="text-green-300 italic font-medium">
            Build your dream team today!
          </h3>
          <Link to="/registration">
            <button
            className="bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold border border-gray-300
                       shadow-[0_4px_0_#a0aec0] transform transition-all duration-200 ease-in-out
                       hover:-translate-y-1 hover:shadow-[0_6px_0_#a0aec0]
                       active:translate-y-0 active:shadow-[0_2px_0_#a0aec0] cursor-pointer mt-4 w-full sm:w-auto"
          >
            Get Started
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NewHomeFour;
