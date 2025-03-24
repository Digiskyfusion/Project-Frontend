import React, { useState } from 'react';
import image1 from './../../assets/Images/tvadd1.png';
import image2 from './../../assets/Images/tvadd2.png';
import { Link } from 'react-router-dom';


const images = [image1, image2];

function Ads() {
  const [currentImage, setCurrentImage] = useState(0);  

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    
    <div className='px-5 mt-5 mb-6'>
    <h1 className='text-sm md:text-xl lg:text-3xl font-bold'>Other Ad Options</h1>
    <div className="max-w-md mt-4  bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 flex justify-center items-center ">
      
      {/* Image Carousel */}
      <div className="relative">
        <img loading="lazy" src={images[currentImage]} alt="Advertisement" className="w-full h-auto" />

        {/* Navigation Buttons Over Image */}
        <button 
          onClick={prevImage} 
          className="absolute left-2 top-1/2 cursor-pointer transform -translate-y-1/2 bg-black  bg-opacity-50 text-white px-3 py-1 rounded"
        >
          ‹
        </button>

        <button 
          onClick={nextImage} 
          className="absolute right-2 top-1/2 cursor-pointer transform -translate-y-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded"
        >
          ›
        </button>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <div className="pb-4 border-b">
          <h1 className="text-lg font-semibold">Aston Band</h1>
        </div>

        <div className="mt-2">
          <i className="text-gray-600">Base Rate</i>
          <p className="text-lg font-medium">20,328 Per Second</p>
        </div>
        
        <div className="flex flex-col gap-3 mt-4">
          <button className="hover:bg-[#004930] cursor-pointer hover:text-white px-3 py-2 border-2 rounded-md border-[#004930]">
           <Link to="/ADCDPAGE">Execution Detail</Link> 
          </button>
        </div>
      </div>

    </div>
    </div>
  );
}

export default Ads;
