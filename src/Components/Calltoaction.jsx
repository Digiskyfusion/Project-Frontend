import React from 'react';

function Calltoaction() {
  return (
    <section className="flex flex-col items-center text-black py-10 px-4 rounded-2xl shadow-lg">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-5xl">
        <div className="text-left">
          <h1 className="text-4xl font-bold mb-4">Call to Action</h1>
          <p className="text-lg">Join our community today and experience the future of freelancing!</p>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center gap-8 mt-8 md:mt-0  " >
          <div className="bg-white text-gray-900  border line-clamp-1-[#004930] p-6 rounded-xl shadow-lg w-72 hover:scale-105 hover:bg-[#004930] hover:text-white transition-transform text-center">
            <h2 className="text-2xl font-semibold mb-2">Join as a Freelancer</h2>
            <p className="text-sm mb-4">Sign up and start exploring projects</p>
            <p className="font-semibold">Get Started</p>
          </div>
          
          <div className="bg-white text-gray-900 p-6 border line-clamp-1-[#004930] rounded-xl shadow-lg w-72 hover:scale-105 hover:bg-[#004930] hover:text-white transition-transform text-center">
            <h2 className="text-2xl font-semibold mb-2">Find a Freelancer</h2>
            <p className="text-sm mb-4">Post a project and find the right talent</p>
            <p className="font-semibold">Post a Job</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calltoaction;
