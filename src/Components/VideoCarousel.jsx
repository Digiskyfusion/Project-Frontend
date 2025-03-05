import React, { useState } from "react";

const mediaItems = [
  { type: "video", src: "https://www.youtube.com/embed/evI0TjpAyHI" }, 
  { type: "video", src: "https://www.youtube.com/embed/Yj1N7oz8pE8" },        
  { type: "video", src: "https://www.youtube.com/embed/Cp1aFQMYTAY" }        
];

function VideoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
          className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-[#004930] bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
        >
          ❮
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-[#004930] bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-80 transition"
        >
          ❯
        </button>
      </div>

      {/* Card Content */}
      <div className="p-4">
        {/* Title */}
        <p className="text-lg font-semibold">Video Ad</p>
        
        {/* Description */}
        <p className="text-sm text-gray-600 mt-2">
          Video ads are telecasted during ad breaks. The minimum duration for a video ad is 10 seconds. 
          <button className="text-blue-600 underline ml-1">View more</button>
        </p>

        {/* Pricing Section */}
        <div className="mt-4 flex justify-between items-center border-t pt-3">
          <div>
            <p className="text-sm font-medium text-gray-500">Base Rate</p>
            <p className="text-lg font-semibold text-gray-800">₹20,328 Per Second</p>
          </div>

          {/* Add to Bag Button */}
          <button className="bg-[#004930] cursor-pointer text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#003220] transition">
            Add to Bag <br/> <span className="text-xs">For Discounted Rate</span>
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default VideoCarousel;
