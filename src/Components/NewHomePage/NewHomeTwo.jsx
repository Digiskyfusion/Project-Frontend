import React from 'react';
import curve from '../../assets/Images/Group 378.png';

function NewHomeTwo() {
  return (
    <div className="bg-white text-center py-12 px-4 sm:px-8 lg:px-24">
      {/* Section Header */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold mb-4">How It Works</h1>
        <div className="flex justify-center gap-4">
          <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition">Client</button>
          <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full hover:bg-gray-300 transition">Freelancer</button>
        </div>
      </div>

      {/* Steps (Moved Up) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Search Freelancer</h2>
          <p className="text-gray-600">
            Search freelancers by category, describe your project, set your budget, and hire the best talent.
          </p>
        </div>
        <div className="p-6 border rounded-xl shadow-md hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-2">Post a Job</h2>
          <p className="text-gray-600">
            Post your job requirement, receive bids, and connect directly with suitable freelancers.
          </p>
        </div>
        <div className="p-6 border rounded-xl shadow-md hover:shadow-lg  transition">
          <h2 className="text-xl font-semibold mb-2">Collaborate & Pay</h2>
          <p className="text-gray-600">
            Work together seamlessly and pay only when you're satisfied with the result.
          </p>
        </div>
      </div>

      {/* Curve Image (Now Below Boxes) */}
      <div>
        <img src={curve} alt="curve" className="mx-auto w-full max-w-4xl" />
      </div>
    </div>
  );
}

export default NewHomeTwo;
