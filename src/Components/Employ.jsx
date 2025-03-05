import React from 'react';
import flatstyle from './../assets/Images/flatstyle.png';

const Employ = () => {
  return (
    <div className=" flex items-center justify-center p-8 ">
      
      {/* Cards Container */}
      <div className="w-full  flex flex-col md:flex-row gap-4">

        {/* First Card */}
        <div className="flex flex-col md:flex-row items-center bg-[#004930] rounded-4xl p-6 shadow-lg">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl font-bold text-white mb-4"> For the Hustlers (Freelancers)</h1>
            <p className="text-white mb-6">Your skills. Your rates. Your schedule. 
            Digisky connects you with projects that 
            respect your talent. No office politics—just pure work and rewards.</p>
            <button className="bg-white text-black py-2 px-6 rounded-full transition duration-300 hover:bg-gray-300">
              Post jobs for free
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={flatstyle} alt="flatstyle" className="  w-48 md:w-60" />
          </div>
        </div>

        {/* Second Card */}
        <div className="flex flex-col md:flex-row items-center bg-[#004930] rounded-4xl p-6 shadow-lg">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-3xl font-bold text-white mb-4"> For the Visionaries (Employers)</h1>
            <p className="text-white mb-6"> Why settle for average when you can hire the best? 
            Post your job for free and get 
            matched with professionals who donʼt just work—but create magic.</p>
            <button className="bg-white text-black py-2 px-6 rounded-full transition duration-300 hover:bg-gray-300">
              Post jobs for free
            </button>
          </div>
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={flatstyle} alt="flatstyle" className=" w-48 md:w-60 " />
          </div>
        </div>

      </div>
      
    </div>
  );
};

export default Employ;
