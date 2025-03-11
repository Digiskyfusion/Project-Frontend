import React from 'react';
import { FaUser, FaRupeeSign } from 'react-icons/fa';
import starplus from './../../assets/Images/starplus.png';
import aajtak from './../../assets/Images/aajtak.png';
import colors from './../../assets/Images/colors.png';
import aasta from './../../assets/Images/aasta.png';
import { useNavigate } from 'react-router-dom';

function Channel() {
  const navigate= useNavigate()
  const channels = [
    { img: starplus, name: 'STAR Plus', category: 'Entertainment', viewers: '121.3M', spend: '5,00,000 Min Spend', path: '/starplus' },
    { img: aajtak, name: 'Aaj Tak', category: 'News', viewers: '186.1M', spend: '5,00,000 Min Spend', path: '/ajtak' },
    { img: colors, name: 'Colors', category: 'Entertainment', viewers: '138.7M', spend: '5,00,000 Min Spend', path: '/colors' },
    { img: aasta, name: 'Aastha', category: 'Spiritual', viewers: '52.7M', spend: '10,000 Min Spend', path: '/astha' }
  ];

  return (
    <div className='flex flex-col items-center p-6 md:p-10 bg-gray-100 min-h-screen'>
      {/* Responsive Channel List */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-full max-w-7xl'>
        {channels.map((channel, index) => (
          <div 
            key={index} onClick={() => navigate(channel.path)}
            className='flex flex-col items-center p-6 md:p-8 bg-white shadow-xl rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl w-full max-w-xs md:max-w-sm cursor-pointer'
          >
            <img loading="lazy" src={channel.img} alt={channel.name} className='w-full max-w-xs h-40 md:h-48 rounded-lg object-cover' />
            <h1 className='font-bold text-xl md:text-2xl lg:text-3xl mt-4 text-gray-900'>{channel.name}</h1>
            <h2 className='text-md md:text-lg text-gray-600 italic mt-1'>{channel.category}</h2>
            <div className='flex items-center mt-3'>
              <FaUser className='text-blue-600 mr-2 text-lg md:text-xl' />
              <p className='text-lg md:text-xl font-semibold text-black'>{channel.viewers}</p>
            </div>
            <div className='flex items-center gap-1 mt-3 px-4 py-2 rounded-lg'>
              <FaRupeeSign className='text-black' />
              <p className='text-md md:text-lg text-black'>{channel.spend}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
  );
}


export default Channel;
