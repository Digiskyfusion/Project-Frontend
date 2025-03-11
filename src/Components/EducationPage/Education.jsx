import React from 'react';
import { Link } from 'react-router-dom';
import first from './../../assets/Images/first.png';
import Footer from '../Footer/Footer';

function Education() {
  // Dummy user data (replace with API data)
  const user = {
    name: 'Manisha Thakur',
    address: '123 Street, City, Country',
    email: 'manisha@example.com',
    bio: `I help home maintenance businesses, like renovation and handyman services, roofers, 
          plumbers, electricians, landscapers, and real estate agents, promote their products and services 
          on Facebook, Instagram, LinkedIn, and Google.
          
          My goal is to get you more leads, increase website traffic, reach more potential customers, 
          and boost sales quickly. With over 12 years of experience working with small and medium businesses, 
          I offer services through my agency, Going Social.
          
          These services include managing social media accounts, one-on-one consulting, Facebook and Instagram 
          advertising, Google Ads, SEO, and Local SEO.`,
    education: '', // If empty, "No education details provided" will be shown
    skills: ['Social Media Marketing', 'SEO', 'Google Ads', 'Facebook Ads', 'Consulting'],
    portfolio: [] // If empty, "No portfolio projects added" will be shown
  };

  return (
    <>
    <div className='mt-3 py-10'>
      <div className="max-w-4xl mx-auto p-6  bg-white shadow-lg rounded-lg border border-gray-200">
        
        {/* Profile Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start pb-4 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <img loading="lazy" src={first} alt="Profile" className="w-20 h-20 sm:w-24 sm:h-24 rounded-full" />
            <div className="text-center sm:text-left">
              <h1 className="text-lg sm:text-xl font-semibold text-gray-900">{user.name}</h1>
              <p className="text-sm text-gray-600">{user.address || 'No address provided'}</p>
              <p className="text-sm text-gray-600">{user.email || 'No email provided'}</p>
            </div>
          </div>
          <Link to="/livechat">
            <button className="w-full sm:w-auto px-4 py-2 bg-[#004930] text-white rounded-md hover:bg-[#003620] transition">
              Chat Now
            </button>
          </Link>
        </div>

        {/* Bio Section */}
        <h1 className="text-lg font-semibold text-gray-900 mt-4">Bio</h1>
        <p className="text-sm text-gray-700 mt-2">
          {user.bio}
        </p>

        {/* Education Section */}
        {user.education ? (
          <div className="mt-4">
            <h1 className="text-lg font-semibold text-gray-900">Education</h1>
            <p className="text-sm text-gray-700 mt-2">{user.education}</p>
          </div>
        ) : (
          <div className="mt-4">
            <h1 className="text-lg font-semibold text-gray-900">Education</h1>
            <p className="text-sm text-gray-500">No education details provided.</p>
          </div>
        )}

        {/* Skills Section */}
        {user.skills.length > 0 && (
          <div className="mt-4">
            <h1 className="text-lg font-semibold text-gray-900">Skills</h1>
            <div className="mt-3 flex flex-wrap gap-2">
              {user.skills.map((skill, index) => (
                <button key={index} className="px-4 py-2 bg-[#004930] text-white rounded-md">
                  {skill}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Portfolio Section */}
        {user.portfolio.length > 0 ? (
          <div className="mt-4">
            <h1 className="text-lg font-semibold text-gray-900">Portfolio Projects</h1>
            {user.portfolio.map((project, index) => (
              <p key={index} className="text-sm text-gray-700 mt-2">{project}</p>
            ))}
          </div>
        ) : (
          <div className="mt-4">
            <h1 className="text-lg font-semibold text-gray-900">Portfolio Projects</h1>
            <p className="text-sm text-gray-500">No portfolio projects added.</p>
          </div>
        )}
      </div>
      
     
      </div>
      <Footer />
    </>
  );
}

export default Education;
