import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function Thirdsection() {
  return (
    <>
      <div className='flex flex-col sm:flex-row justify-between items-center p-8 bg-gradient-to-r from-green-100 to-blue-100 rounded-lg shadow-xl'>
        <div className='sm:w-1/2'>
          <h1 className='text-3xl font-extrabold text-gray-900'>The Mark of Approval</h1>
          <p className='text-gray-700 mt-4 md:text-2xl font-bold md:mr-2'>
            You'll receive ample assistance in selecting the right candidate for the position.
            Regardless of who you hire, you'll have support throughout the process.
          </p>
        </div>

        <div className='sm:w-1/2 mt-6 sm:mt-0 bg-white p-6 rounded-lg shadow-lg'>
          <div className='space-y-4'>
            <p className='flex items-center text-gray-800 text-lg'><FaCheckCircle className='text-green-600 mr-2' /> Explore similar projects </p>
            <p className='flex items-center text-gray-800 text-lg'><FaCheckCircle className='text-green-600 mr-2' /> Directly access proven </p>
            <p className='flex items-center text-gray-800 text-lg'><FaCheckCircle className='text-green-600 mr-2' /> Check their portfolio</p>
            <p className='flex items-center text-gray-800 text-lg'><FaCheckCircle className='text-green-600 mr-2' /> Check qualifications</p>
            <p className='flex items-center text-gray-800 text-lg'><FaCheckCircle className='text-green-600 mr-2' /> Run a chat or video </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Thirdsection;
