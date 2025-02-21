import React, { useState } from 'react';
import joboffer from './../assets/Images/joboffer.png';
import workdone from './../assets/Images/workdone.jpg';
import jobpost from './../assets/Images/jobpost.jpg';
import first from './../assets/Images/first.png';

function Work() {
  const [view, setView] = useState('client');
  const [hoverIndex, setHoverIndex] = useState(null);

  const content = {
    client: [
      { img: joboffer, title: 'Connect with Freelancers', text: 'Find skilled freelancers for your projects and collaborate seamlessly.' },
      { img: jobpost, title: 'Post a Job', text: 'Easily post job listings and attract the best talent for your needs.' },
      { img: workdone, title: 'Collaborate Easily', text: 'Seamlessly work with freelancers and manage your projects.' }
    ],
    freelancer: [
      { img: first, title: 'Find Clients', text: 'Discover exciting projects and start working with clients worldwide.' },
      { img: workdone, title: 'Deliver Quality Work', text: 'Complete high-quality tasks and build your freelance reputation.' },
      { img: joboffer, title: 'Grow Your Career', text: 'Scale your freelance business and achieve financial independence.' }
    ]
  };

  return (
    <div className="bg-gray-100 py-7 px-3">
      <h1 className="text-3xl font-bold mt-3 md:px-5 text-gray-800">How It Works</h1>
      <div className="mb-6 flex md:mt-2 border-b-4 border-gray-300">
        <button 
          className={`px-3 py-2 mx-2 text-2xl text-black relative ${view === 'client' ? 'border-b-4 border-green-500' : ''}`} 
          onClick={() => setView('client')}
        >
          Client
        </button>
        <button 
          className={`px-6 py-2 mx-2 text-2xl text-black relative ${view === 'freelancer' ? 'border-b-4 border-green-500' : ''}`} 
          onClick={() => setView('freelancer')}
        >
          Freelancer  
        </button>
      </div>

      <div className="max-w-6xl mx-auto grid gap-12 relative">
        <div className="hidden md:block border-r-4 border-gray-300 h-full absolute left-1/2 transform -translate-x-1/2"></div>

        {content[view].map((item, index) => (
          <div
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 items-center relative text-center md:text-left"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
          >
            {hoverIndex === index && (
              <div className="hidden md:block border-r-4 border-green-500 h-full absolute left-1/2 transform -translate-x-1/2"></div>
            )}
            {index % 2 === 0 ? (
              <div className="flex justify-center mb-4 md:mb-0">
                <img src={item.img} alt={item.title} className="w-32 md:w-40 h-32 md:h-40 rounded-full object-cover" />
              </div>
            ) : null}
            <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all md:ml-6 md:mr-6 relative">
              <h1 className="text-xl md:text-2xl font-bold text-gray-800">{item.title}</h1>
              <p className="text-gray-600 mt-2">{item.text}</p>
            </div>
            {index % 2 !== 0 ? (
              <div className="flex justify-center mb-4 md:mb-0">
                <img src={item.img} alt={item.title} className="w-32 md:w-40 h-32 md:h-40 rounded-full object-cover" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
