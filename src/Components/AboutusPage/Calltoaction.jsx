import React from 'react';

function Calltoaction() {
  return (
    <section className="flex flex-col items-center text-black py-10 px-4 rounded-2xl shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-7xl md:gap-4">
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-4">Our Mission: Empower. Connect. Succeed.</h1>
          <p className="text-lg">We believe in a world where talent meets opportunity effortlessly. Our platform 
simplifies freelancing, ensuring seamless collaboration, fair pay, and limitless 
growth.</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8 md:mt-0  " >
          <div className="bg-white text-gray-900  border line-clamp-1-[#004930] p-6 rounded-xl shadow-lg w-72 hover:scale-105 hover:bg-[#004930] hover:text-white transition-transform text-center">
            <h2 className="text-2xl font-semibold mb-2"> For Freelancers:</h2>
            <p className="text-sm mb-4"> A space where your skills shine, your work is valued, and your 
            growth never stops.</p>
            {/* <p className="font-semibold">Get Started</p> */}
          </div>
          
          <div className="bg-white text-gray-900 p-6 border line-clamp-1-[#004930] rounded-xl shadow-lg w-72 hover:scale-105 hover:bg-[#004930] hover:text-white transition-transform text-center">
            <h2 className="text-2xl font-semibold mb-2"> For Businesses</h2>
            <p className="text-sm mb-4"> A hassle-free way to find top-tier talent, collaborate efficiently, 
            and bring ideas to life.</p>
            {/* <p className="font-semibold">Post a Job</p> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calltoaction;
