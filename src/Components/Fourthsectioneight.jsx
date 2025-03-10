import React from 'react';
import rectangle1 from './../assets/Images/rectangle1.png';

function Fourthsectioneight() {
  return (
    <div className='flex justify-center items-center p-8'>
      <div className='relative text-center shadow-2xl group'>
        <img
          src={rectangle1}
          alt='rectangle'
          className='w-full h-auto rounded-lg transition-opacity duration-300 group-hover:opacity-70'
        />
        <div className='absolute inset-0 flex flex-col justify-center items-center p-4 rounded-lg'>
          <h1 className='text-black text-3xl font-bold mb-4'>Our Mission</h1>
          <p className='text-black max-w-lg'>
            At (link unavailable), our mission is to create a seamless and efficient platform 
            for freelancers and clients to connect and collaborate. Our vision is to revolutionize 
            the freelancing industry by providing a simple, affordable, and user-friendly experience.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Fourthsectioneight;
