import React from 'react';
import confused from './../assets/Images/confused.png';

function Confused() {
  return (
    <div className="px-3 py-5 lg:px-10 lg:py-10">
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#004930] px-6 py-8 sm:px-12 md:px-16 md:py-16 rounded-2xl shadow-lg min-h-[450px]">
        
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left text-white flex flex-col justify-between h-full">
          <div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Confused? <br />
              <span className="text-green-300">We Can Help</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mt-4 sm:mt-6">
              Hire our expert media planners to find, plan, and place your next promotion.
            </p>
          </div>
          
          {/* Button at the bottom with spacing */}
          <div className="mt-6 md:mt-10 mb-8 sm:mb-0 self-center md:self-start">
            <button className="px-8 py-3 sm:py-4 text-black bg-white font-semibold text-base sm:text-lg rounded-full shadow-md cursor-pointer w-auto mx-auto md:mx-0 hover:bg-green-400 hover:text-white transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>

        {/* Image Section - Touching the bottom */}
        <div className="md:w-1/2 flex justify-end self-end h-full ">
          <img 
            src={confused} 
            alt="Confused" 
            className="h-full max-h-[400px] w-auto object-cover rounded-xl"
          />
        </div>

      </div>
    </div>
  );
}

export default Confused;
