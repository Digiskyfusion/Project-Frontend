import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import joboffer from '../../assets/Images/joboffer.png';
import workdone from '../../assets/Images/workdone.jpg';
import jobpost from '../../assets/Images/jobpost.jpg';
import first from '../../assets/Images/first.png';

function Work() {
  const [view, setView] = useState("client");
  const [hoverIndex, setHoverIndex] = useState(null);
  const [roleType, setRoleType] = useState(null); // State to hold role type  
  const navigate = useNavigate();
// Fetch the role from localStorage when the component mounts
useEffect(() => {
  const storedRole = JSON.parse(localStorage.getItem('user'));
  console.log("roleType", storedRole?.roleType);

  if (storedRole && storedRole.roleType === "client") {
    setView("freelancer");
    setRoleType("freelancer")
  } else if (storedRole && storedRole.roleType === "freelancer") {
    setView("client");
    setRoleType("client")
  } else {
    console.log("No roleType found in stored data");
    setView("client");
  }
}, []);


  // Generic function for navigation
  const handleNavigation = (route) => {
    const isAuthenticated = localStorage.getItem('token'); // Checking auth
    navigate(isAuthenticated ? route : '/login');
  };

  const content = {
    client: [
      { img: joboffer, title: 'Search Freelancer', text: 'Search freelancers by category, describe your project, set your budget, and hire the best talent.', route: '/freelancerlist' },
      { img: jobpost, title: 'Connect with Experts', text: 'Browse top-rated freelancers, check their work, and hire with confidence.', route: '/freelancerlist' },
      { img: workdone, title: 'Get Work Done', text: 'Track progress, communicate easily, and receive high-quality results.', route: '/freelancerlist' }
    ],
    freelancer: [
      { img: first, title: 'Create a Winning Profile', text: 'Highlight your skills, experience, and portfolio.', route: "/clientlist" },
      { img: workdone, title: 'Stay Active on the Platform', text: 'Be online frequently to increase visibility and get more job invitations.', route: "/clientlist" },
      { img: joboffer, title: 'Build Your Reputation', text: 'Deliver great work, get positive reviews, and attract more clients.', route: "/clientlist" }
    ]
  };

  return (
    <div className="bg-gray-100 py-7 px-3">
      <h1 className="text-3xl font-bold mt-3 md:px-5 text-gray-800">How It Works</h1>

        {/* Toggle Buttons */}
      <div className="mb-6 flex md:mt-2 border-b-4 border-gray-300">
        <button
          className={`px-3 py-2 mx-2 text-2xl cursor-pointer text-black ${view === 'client' ? 'border-b-4 border-green-500' : ''}`}
          onClick={() => setView('client')}
          disabled={roleType === 'freelancer'} // Disable if roleType is freelancer
        >
          Client
        </button>
        <button
          className={`px-6 py-2 mx-2 text-2xl cursor-pointer text-black ${view === 'freelancer' ? 'border-b-4 border-green-500' : ''}`}
          onClick={() => setView('freelancer')}
          disabled={roleType === 'client'} // Disable if roleType is client
        >
          Freelancer
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid gap-12 relative">
        {/* Vertical Center Line */}
        <div className="hidden md:block border-r-4 border-gray-300 h-full absolute left-1/2 transform -translate-x-1/2"></div>

        {content[view]?.map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 items-center relative text-center md:text-left"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {hoverIndex === index && (
              <div className="hidden md:block border-r-4 border-green-500 h-full absolute left-1/2 transform -translate-x-1/2"></div>
            )}

            {/* Image for Mobile View - 2nd Card Moves Above Content */}
            {index === 1 ? (
              <div className="md:hidden flex justify-center mb-4">
                <img src={item.img} alt={item.title} className="w-32 md:w-40 h-32 md:h-40 rounded-full object-cover" />
              </div>
            ) : null}

            {/* Image for Desktop View - Keeps Original Position */}
            {index % 2 === 0 && index !== 1 && (
              <div className="flex justify-center mb-4 md:mb-0">
                <img src={item.img} alt={item.title} className="w-32 md:w-40 h-32 md:h-40 rounded-full object-cover" />
              </div>
            )}

            {/* Card Content */}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all md:ml-6 md:mr-6 relative">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">{item.title}</h1>
              <p className="text-gray-600 mt-2">{item.text}</p>

              {/* Button only for client actions */}
              {item.route && (
                <button
                  className="mt-3 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
                  onClick={() => handleNavigation(item.route)}
                >
                  {item.title}
                </button>
              )}
            </div>

            {/* Image on Right for Odd Index (except 2nd card on mobile) */}
            {index % 2 !== 0 && (
              <div className={`hidden md:flex justify-center mb-4 md:mb-0 ${index === 1 ? "md:block" : ""}`}>
                <img src={item.img} alt={item.title} className="w-32 md:w-40 h-32 md:h-40 rounded-full object-cover" />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
