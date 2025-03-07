import React from 'react';
import first from './../assets/Images/first.png';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function Education() {
  return (
    <>
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg border border-gray-200">
      
      {/* Profile Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start pb-4 gap-4">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <img src={first} alt='firstimage' className="w-20 h-20 sm:w-24 sm:h-24 rounded-full" />
          <div className="text-center sm:text-left">
            <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Manisha Thakur</h1>
            <p className="text-sm text-gray-600">Address</p>
            <p className="text-sm text-gray-600">Email</p>
          </div>
        </div>
        <button className="w-full sm:w-auto px-4 py-2 bg-[#004930] text-white rounded-md hover:bg-[#003620] transition">
         <Link to="/livechat">Chat Now</Link> 
        </button>
      </div>

      {/* Bio Section */}
      <h1 className="text-lg font-semibold text-gray-900 mt-4">Bio</h1>
      <p className="text-sm text-gray-700 mt-2">
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

      {/* Education Section */}
      <div className="mt-4">
        <h1 className="text-lg font-semibold text-gray-900">Education</h1>
        <p className="text-sm text-gray-700 mt-2">No education details provided.</p>
      </div>

      {/* Skills Section */}
      <div className="mt-4">
        <h1 className="text-lg font-semibold text-gray-900">Skills</h1>
        <div className="mt-3 flex flex-wrap gap-2">
          <button className="px-4 py-2 bg-[#004930] text-white rounded-md">Skill 1</button>
          <button className="px-4 py-2 bg-[#004930] text-white rounded-md">Skill 2</button>
          <button className="px-4 py-2 bg-[#004930] text-white rounded-md">Skill 3</button>
          <button className="px-4 py-2 bg-[#004930] text-white rounded-md">Skill 4</button>
          <button className="px-4 py-2 bg-[#004930] text-white rounded-md">Skill 5</button>
        </div>
      </div>

      {/* Portfolio Section */}
      <div className="mt-4">
        <h1 className="text-lg font-semibold text-gray-900">Portfolio Projects</h1>
        <p className="text-sm text-gray-700 mt-2">No portfolio projects added.</p>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Education;
