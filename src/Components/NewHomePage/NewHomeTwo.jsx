import React, { useState } from 'react';
import curveone from '../../assets/Images/curve-design 1.png';

function NewHomeTwo() {
  const [activeTab, setActiveTab] = useState('Client');

  const clientSteps = [
    {
      title: 'Search Freelancer',
      description: 'Search freelancers by category, describe your project, set your budget, and hire the best talent.',
      button: 'Search Freelancer',
    },
    {
      title: 'Connect with Experts',
      description: 'Browse top-rated freelancers, check their work, and hire with confidence.',
      button: 'Connect with Experts',
    },
    {
      title: 'Get Work Done',
      description: 'Track progress, communicate easily, and receive high-quality results.',
      button: 'Get Work Done',
    },
  ];

  const freelancerSteps = [
    {
      title: 'Create Profile',
      description: 'Highlight your skills, past work, and set your service offerings.',
      button: 'Build Profile',
    },
    {
      title: 'Get Hired',
      description: 'Receive client invites, send proposals, and start working on projects.',
      button: 'Start Working',
    },
    {
      title: 'Get Paid',
      description: 'Deliver work, receive reviews, and get paid securely.',
      button: 'Get Paid Now',
    },
  ];

  const steps = activeTab === 'Client' ? clientSteps : freelancerSteps;

  return (
    <>
      <style>
        {`
          @keyframes wave {
            0%, 100% {
              transform: rotate(0deg);
            }
            25% {
              transform: rotate(1.5deg);
            }
            50% {
              transform: rotate(0deg);
            }
            75% {
              transform: rotate(-1.5deg);
            }
          }
          .animate-wave {
            animation: wave 4s ease-in-out infinite;
            transform-origin: center;
            display: inline-block;
          }
        `}
      </style>

      <div className="bg-[#eef5dd] py-12 px-4 md:px-20">
        <h1 className="text-center text-4xl md:text-6xl font-semibold text-green-900 mb-6">
          How It Works?
        </h1>

        {/* Tabs */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10 items-center">
          <button
            onClick={() => setActiveTab('Client')}
            className={`px-6 py-2 rounded-full font-medium border ${
              activeTab === 'Client' ? 'bg-green-800 text-white' : 'bg-white text-green-800'
            }`}
          >
            Client
          </button>
          <button
            onClick={() => setActiveTab('Freelancer')}
            className={`px-6 py-2 rounded-full font-medium border ${
              activeTab === 'Freelancer' ? 'bg-green-800 text-white' : 'bg-white text-green-800'
            }`}
          >
            Freelancer
          </button>
        </div>

        {/* Layout */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          {/* Left Step */}
          <div className="flex flex-col items-center md:items-end text-right md:pr-8">
            <div className="bg-white border border-green-300 rounded-lg p-4 w-full max-w-xs shadow-md mt-0">
              <h2 className="font-semibold text-lg mb-2">{steps[0].title}</h2>
              <p className="text-sm text-gray-600 mb-4">{steps[0].description}</p>
              <button className="bg-white border border-green-700 text-green-700 px-4 py-1 rounded-full hover:bg-green-100 transition text-sm">
                {steps[0].button}
              </button>
            </div>
          </div>

          {/* Curve Image with Step Numbers */}
          <div className="relative flex justify-center items-center h-full">
            <img
              src={curveone}
              alt="curve"
              className="w-full max-w-xs sm:max-w-md md:max-w-[900px] mx-auto animate-wave"
            />

            {/* Position Step Numbers over the Curve */}
            <span className="hidden md:block absolute top-[33%] left-1/6 -translate-x-1/5 text-green-800 font-bold text-xl">01</span>
            <span className="hidden md:block absolute top-[45%] right-[22%] translate-x-1/12 text-green-800 font-bold text-xl">02</span>
            <span className="hidden md:block absolute bottom-[25%] left-1/6 -translate-x-1/2 text-green-800 font-bold text-xl">03</span>
          </div>

          {/* Right Steps */}
          <div className="flex flex-col items-center md:items-start gap-10 text-left md:pl-6">
            {/* Step 2 */}
            <div className="bg-white border border-green-300 rounded-lg p-4 w-full max-w-xs shadow-md">
              <h2 className="font-semibold text-lg mb-2">{steps[1].title}</h2>
              <p className="text-sm text-gray-600 mb-4">{steps[1].description}</p>
              <button className="bg-white border border-green-700 text-green-700 px-4 py-1 rounded-full hover:bg-green-100 transition text-sm">
                {steps[1].button}
              </button>
            </div>

            {/* Step 3 */}
            <div className="bg-white border border-green-300 rounded-lg p-4 w-full max-w-xs shadow-md">
              <h2 className="font-semibold text-lg mb-2">{steps[2].title}</h2>
              <p className="text-sm text-gray-600 mb-4">{steps[2].description}</p>
              <button className="bg-white border border-green-700 text-green-700 px-4 py-1 rounded-full hover:bg-green-100 transition text-sm">
                {steps[2].button}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewHomeTwo;
