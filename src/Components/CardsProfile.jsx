import React from 'react';
import first from './../assets/Images/first.png';
import secondimage from './../assets/Images/a-modern-and-elegant-portfolio-website-homepage-fo 2.png';
import thiredimage from './../assets/Images/a-modern-and-stylish-e-commerce-fashion-website-ho 1.png';
import fourthimage from './../assets/Images/a-modern-and-luxurious-cosmetics-brand-website-hom 2.png';
import Years from 'react-calendar/dist/esm/DecadeView/Years.js';
import { AlignLeft } from 'lucide-react';
import { GiConfirmed } from 'react-icons/gi';

function CardsProfile() {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      
      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start pb-4 gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img src={first} alt="firstimage" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-[#004930]" />
          <div className="text-center sm:text-left">
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Manisha Thakur</h1>
            <p className="text-sm text-gray-600">Address</p>
            <p className="text-sm text-gray-600">Email</p>
          </div>
        </div>
        <button className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-[#004930] to-[#006f4a] text-white font-semibold rounded-md shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:ring-2 focus:ring-[#004930]">
          Chat Now
        </button>
      </div>

      {/* Bio Section */}
      <h1 className="text-lg font-semibold text-gray-900 mt-4">Bio</h1>
      <p className="text-sm text-gray-700 mt-2 leading-relaxed">
        I help home maintenance businesses, like renovation and handyman services, roofers, 
        plumbers, electricians, landscapers, and real estate agents, promote their products and services on 
        Facebook, Instagram, LinkedIn, and Google.
        My goal is to get you more leads, increase website traffic, reach more potential customers, 
        and boost sales quickly. With over 12 years of experience working with small and medium businesses, 
        I offer services through my agency, Going Social.
        <br /><br />
        These services include managing social media accounts, one-on-one consulting, Facebook and Instagram 
        advertising, Google Ads, SEO, and Local SEO. Do you need help with Facebook and Instagram ads or SEO? 
        I can help you reach the right audience, attract qualified leads, and increase sales while reducing ad costs.
        <br /><br />
        What I specialize in: Social Media Marketing, Strategy, Account Management, Facebook and Instagram Advertising, 
        Google Ads, Website Landing Pages, SEO, and Local SEO.
      </p>

      {/* Client's Past Projects */}
      <div className="mt-6 py-5">
        <h1 className="text-lg font-semibold text-gray-900">Client’s Past Projects</h1>
      </div>

      {/* Image Section with Preview Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
  {[secondimage, thiredimage, fourthimage].map((img, index) => (
    <div key={index} className=" rounded-lg ">
      <img src={img} alt={`project-${index + 1}`} className="w-full h-auto object-cover" />
      <div className="flex justify-center py-3 bg-[#004930] rounded-b-xl">
        <button className="px-5 py-2 bg-gradient-to-r from-[#004930] to-[#006f4a] text-white font-medium rounded-lg shadow-md hover:bg-[#006f4a] transition-all duration-300 hover:scale-105 hover:shadow-lg">
          Preview
        </button>
      </div>
    </div>
  ))}
</div>
    </div>
  );
}

export default CardsProfile;
    



