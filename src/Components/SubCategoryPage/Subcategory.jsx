import React from 'react';
import image3 from './../../assets/Images/Ellipse 151.png';
import imagesss from './../../assets/Images/Ellipse 70.png';
import women1 from './../../assets/Images/Ellipse 72.png';
import men2 from './../../assets/Images/Ellipse 73.png';
import men3 from './../../assets/Images/Ellipse 74.png';
import men4 from './../../assets/Images/Ellipse 76.png';
import image0 from './../../assets/Images/Ellipse 161.png';
import image1 from './../../assets/Images/Ellipse 164.png';
import image2 from './../../assets/Images/Ellipse 167.png';
import image4 from './../../assets/Images/Ellipse 170.png';
import image5 from './../../assets/Images/Ellipse 173.png';
import image6 from './../../assets/Images/Ellipse 193.png';
import image7 from './../../assets/Images/Ellipse 194.png';
import image8 from './../../assets/Images/Ellipse 190.png';
import image9 from './../../assets/Images/Ellipse 185.png';
import image10 from './../../assets/Images/Ellipse 184.png';
import image11 from './../../assets/Images/Ellipse 181.png';
import image12 from './../../assets/Images/Ellipse 176.png';
import image13 from './../../assets/Images/Ellipse 193.png';



const obj = [
  { Tv: "TV Chaneel Ad", images: [ image3,  imagesss,  women1,  men2] },
  { Tv: "Monetization", images: [ men3, imagesss, image3,  men2] },
  { Tv: "Content Marketing", images:[ image0,  image1,  image2,  image4]},
  { Tv: "Email Marketing", images: [ image5,  imagesss, image6,  image3] },
  { Tv: "Pay-per-click (PPC) ", images: [ image7,  image8, image9,  image10]},
  { Tv: "Influencer Marketing", images:[ image11,  image12,  image1,  image6] },
  { Tv: "Affiliate Marketing", images: [ image3,  image6,  image4,  image8] },
  { Tv: "Video Marketing", images: [ image1,  image2,  image10,  image12] },
  { Tv: "Marketing Analytics", images: [image3,  imagesss,  women1,  men2] },
  { Tv: "Marketing Automation", images: [  image0,  image1,  image2,  image4]},
  { Tv: "Email Marketing", images: [ image5,  image8,   image7,  image3] },
  { Tv: "Performance Marketer", images: [ image1,  image3,  image6,  image9] },
  { Tv: "Fackbook Ads", images: [image11,  image12,  image13,  image3] },
  { Tv: "Linkdin Ads", images: [ image7,  image9,  image3,  image1] },
  { Tv: "Social Media Marketing", images: [ image3,  imagesss,  women1,  men2] },
  { Tv: "Search Engine Optimization", images:[ image0,  image1,  image2,  image4] }
];

function Subcategory() {
  return (
    <>
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
    </>
  );
}

export default Subcategory;
