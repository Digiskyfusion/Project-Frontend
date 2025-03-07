import React, { useState } from "react";
import { Link } from "react-router-dom";



function VideoCarousel({video,contentone,contenttwo,rate,linkone,linktwo,linkthree}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFull, setShowFull] = useState(false);
  const mediaItems = [
    { type: "video", src: linkone }, 
    { type: "video", src: linktwo },        
    { type: "video", src: linkthree }        
  ];
  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % mediaItems.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + mediaItems.length) % mediaItems.length);
  };

  return (
    <div className="px-5 py-2">
     
    <div className="relative max-w-sm md:max-w-md lg:max-w-lg mt-7 bg-white rounded-xl shadow-lg overflow-hidden ">
      
      {/* Video Wrapper */}
      <div className="relative">
        <iframe
          key={mediaItems[currentIndex].src} // Ensures iframe reloads on slide change
          src={mediaItems[currentIndex].src}
          className="w-full h-72"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video"
        ></iframe>

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-[#004930] bg-opacity-50 text-white cursor-pointer h-8 w-8 rounded-full hover:bg-opacity-80 transition"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#004930] bg-opacity-50 text-white cursor-pointer h-8 w-8 rounded-full hover:bg-opacity-80 transition"
        >
          ❯
        </button>
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        <p className="text-lg font-semibold">{video}</p>
        
        {/* Description */}
        <p className="text-sm text-gray-600 mt-2">
      {contentone}
      {showFull && `${contenttwo}`}
      <button
        className="text-blue-600 underline ml-1 cursor-pointer"
        onClick={() => setShowFull(!showFull)}
      >
        {showFull ? "View less" : "View more"}
      </button>
    </p>

        {/* Pricing Section */}
        <div className="mt-4 flex justify-between items-center border-t py-3   rounded-md text-white">
          

          {/* Add to Bag Button */}
          <button className="  rounded-full cursor-pointer bg-[#004930]  px-4 py-2 text-sm font-medium hover:bg-[#003220] hover:text-white transition">
           <Link to="/ADCDPAGE">See More</Link> 
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default VideoCarousel;
