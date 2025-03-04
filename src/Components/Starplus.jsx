import React from "react";
import tvadd1 from "./../assets/Images/tvadd1.png";
import tvadd2 from "./../assets/Images/tvadd2.png";
import pixelcut from "./../assets/Images/pixelcut-export (2) 1.png";

function Starplus() {
  return (
    <div className="max-w-6xl mx-auto p-8 bg-gradient-to-r from-gray-100 to-white shadow-xl rounded-lg">
      {/* Main Flex Container */}
      <div className="flex">
        
        {/* Left Side - Two Images */}
        <div className="w-1/4 flex flex-col space-y-6 justify-start">
          {[tvadd1, tvadd2].map((image, index) => (
            <div key={index} className="relative">
              <img
                src={image}
                alt={`TV Ad ${index + 1}`}
                className="rounded-lg shadow-lg border-2 border-gray-200"
              />
            </div>
          ))}
        </div>

        {/* Center - Main Image with Next Channel Hint */}
        <div className="w-1/2 flex flex-col items-center">
          <img
            src={tvadd1}
            alt="TV Ad Center"
            className="rounded-lg shadow-md w-2/3"
          />
          {/* Hint for Next Channel */}
          <div className="mt-6 p-3 bg-gray-200 rounded-md text-center w-2/3 shadow-sm">
            <p className="text-sm text-gray-700">
              Looking for another channel? <br />
              <span className="font-semibold text-blue-600 cursor-pointer">
                Switch to the next channel →
              </span>
            </p>
          </div>
        </div>

        {/* Right Side - Text Content */}
        <div className="w-1/4 relative pl-6">
          {/* Vertical Line */}
          <div className="absolute left-0 top-0 h-full w-[2px] bg-gray-300"></div>

          {/* Ad Details */}
          <div className="space-y-3 border-b border-gray-300 pb-4 mb-4">
            <h2 className="text-lg font-semibold text-gray-800">
              User for: <span className="font-normal text-gray-600">Impact</span>
            </h2>
            <h2 className="text-lg font-semibold text-gray-800">
              Ad Type: <span className="font-normal text-gray-600">Image</span>
            </h2>
            <h2 className="text-lg font-semibold text-gray-800">
              Lead More: <span className="font-normal text-gray-600">3</span>
            </h2>
            <h2 className="text-lg font-semibold text-gray-800">
              Span: <span className="font-normal text-gray-600">1 day</span>
            </h2>
          </div>

          {/* Description */}
          <p className="text-gray-700 text-sm mt-4 leading-relaxed">
            Aston Bands are thin horizontal strips that appear during a program at the bottom of the screen. The Aston Band duration per exposure is 10 seconds.
            For more details on placing your advertisement on this platform, kindly contact us at
            <a href="mailto:help@TheMediaAnt.com" className="text-blue-500"> help@TheMediaAnt.com</a> or call us at <span className="font-semibold text-gray-900">080-67415510</span>.
          </p>

          {/* Rack Rate - Box without Animations */}
          <div className="mt-6 p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-md text-center">
            <h2 className="text-lg font-bold text-gray-900">Rack Rate</h2>
            <h3 className="text-lg font-semibold text-green-600">₹23,805 / per</h3>
            <p className="text-md font-medium text-gray-700">Aston Band</p>
          </div>

          {/* Pixelcut Image - Separate */}
          <div className="mt-4 flex justify-center">
            <img
              src={pixelcut}
              alt="Pixelcut Example"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Buttons - No Animation */}
          <div className="flex justify-end space-x-4 mt-6">
            <button className="bg-blue-600 text-white py-2 px-5 rounded-md font-semibold shadow-md">
              Login to View
            </button>
            <button className="bg-gray-800 text-white py-2 px-5 rounded-md font-semibold shadow-md">
              Min Billing: ₹23,805
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Starplus;
      