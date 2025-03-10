import React from 'react';
import mailimage from './../../assets/Images/mailimage.png';
import phone from './../../assets/Images/phone.png';
import building from './../../assets/Images/building.png';
import location from './../../assets/Images/location.png';

function Mapcomponent() {
  return (
    <div className='flex flex-col items-center p-10  rounded-l-xl shadow-xl'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 w-full max-w-4xl'>
        <div className='flex flex-col items-center bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300'>
          <img src={mailimage} alt='Email' className='w-14 h-14 mb-4' />
          <h1 className='text-2xl font-bold text-gray-800'>Email</h1>
          <p className='text-gray-600'>support@digisky.com</p>
        </div>
        
        <div className='flex flex-col items-center bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300'>
          <img src={phone} alt='Phone' className='w-14 h-14 mb-4' />
          <h1 className='text-2xl font-bold text-gray-800'>Phone</h1>
          <p className='text-gray-600'>+1 234 567 890</p>
        </div>
      </div>
      
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl'>
        <div className='flex flex-col items-center bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300'>
          <img src={building} alt='Building' className='w-14 h-14 mb-4' />
          <h1 className='text-2xl font-bold text-gray-800'>Our Building</h1>
          <p className='text-gray-600'>Office location</p>
        </div>
        
        <div className='flex flex-col items-center bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-2xl transition-shadow duration-300'>
          <img src={location} alt='Location' className='w-14 h-14 mb-4' />
          <h1 className='text-2xl font-bold text-gray-800'>Address</h1>
          <p className='text-gray-600'>Office location</p>
        </div>
      </div>
    </div>
  );
}

export default Mapcomponent;
