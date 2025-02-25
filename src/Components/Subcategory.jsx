import React from 'react';
import image3 from './../assets/Images/Ellipse 151.png';

const obj = [
  { Tv: "Streaming Service Ad", images: [ image3,  image3,  image3,  image3] },
  { Tv: "Gaming Platform Promotion", images: [ image3,  image3,  image3,  image3] },
  { Tv: "Social Media Marketing", images:[ image3,  image3,  image3,  image3]},
  { Tv: "Online Course Advertisement", images: [ image3,  image3,  image3,  image3] },
  { Tv: "E-commerce Product Display", images: [ image3,  image3,  image3,  image3]},
  { Tv: "Health & Fitness Campaign", images:[ image3,  image3,  image3,  image3] },
  { Tv: "Food & Beverage Commercial", images: [ image3,  image3,  image3,  image3] },
  { Tv: "Fashion Brand Showcase", images: [ image3,  image3,  image3,  image3] },
  { Tv: "Tech Product Launch", images: [ image3,  image3,  image3,  image3] },
  { Tv: "Travel & Tourism Ad", images: [ image3,  image3,  image3,  image3] },
  { Tv: "Automobile Promotion", images: [ image3,  image3,  image3,  image3] },
  { Tv: "Music & Entertainment", images: [ image3,  image3,  image3,  image3] },
  { Tv: "Education & Learning", images: [ image3,  image3,  image3,  image3] },
  { Tv: "Real Estate Showcase", images: [ image3,  image3,  image3,  image3] },
  { Tv: "Home & Lifestyle Ad", images:[ image3,  image3,  image3,  image3] }
];

function Subcategory() {
  return (
    <div className="p-5">
      <div className="mb-5 text-center">
        <h1 className="text-3xl font-bold text-gray-800">Subcategory Page</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">  
        {obj.map((item, index) => (
          <div key={index} className="p-4 rounded-lg shadow-lg bg-white text-center">
            <p className="text-lg font-semibold mb-3">{item.Tv}</p>
            <div className="flex justify-center gap-2">
              {item.images.map((image, imgIndex) => (
                <img key={imgIndex} src={image} alt="Ad" className="w-16 h-16 object-cover rounded-md" />
              ))}
            </div>
            <button className="bg-[#004930] text-white px-5 py-2 rounded-full mt-3 transition-transform transform hover:scale-105">
              See Details
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Subcategory;
