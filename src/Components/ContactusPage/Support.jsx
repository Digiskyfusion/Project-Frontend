import React from 'react';
import pic from './../../assets/Images/Group 23.png';

function Support() {
  return (
    <section className="flex flex-col items-center justify-center  p-6">
      <div className="bg-white  rounded-3xl p-10 text-center  w-full ">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Support & Help Center</h1>
        <img  loading="lazy"
          src={pic} 
          alt="Support Illustration" 
          className="mb-6 drop-shadow-2xl rounded-lg w-full transform transition-all duration-300 hover:scale-90"
        />
      </div>
    </section>
  );
}

export default Support;