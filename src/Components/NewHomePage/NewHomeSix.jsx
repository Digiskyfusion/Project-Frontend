import React from 'react';
import UserCarousel from './UserCarousel'; // Uncomment when using

function NewHomeSix() {
  return (
    <div className="bg-green-950 py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-white">
      {/* Top Section */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-10">
        
        {/* Left: Big C with Words */}
        <div className="relative w-full lg:w-1/2 h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px] flex items-center justify-center">
          {/* Big C */}
          <h1 className="text-[120px] sm:text-[180px] md:text-[240px] lg:text-[300px] font-medium text-green-100 leading-none">
            C
          </h1>

          {/* Words inside C */}
          <div className="absolute flex flex-col items-center justify-center text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white">onnect.</h2>
            <h3 className="text-lg sm:text-xl md:text-2xl text-white">ollaborate.</h3>
            <h4 className="text-base sm:text-lg md:text-xl text-white">reate.</h4>
          </div>
        </div>

        {/* Right: Paragraph and Button */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <p className="text-sm md:text-base max-w-md mx-auto lg:mx-0">
            Your dream team is just a click away! Build your Virtual Talent Bench™ with top-tier freelancers who bring skill, speed, and creativity to your projects.
          </p>
          <button className="mt-4 px-6 py-2 bg-green-200 text-green-950 font-semibold rounded-lg hover:bg-green-300 transition duration-300">
            Details
          </button>
        </div>
      </div>

      {/* Carousel Section */}
      {/* Uncomment below when using carousel */}
      {/* <UserCarousel /> */}
    </div>
  );
}

export default NewHomeSix;
