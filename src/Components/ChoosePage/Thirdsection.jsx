import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function Thirdsection() {
  return (
    <>
      <div className='flex flex-col sm:flex-row justify-between items-center p-8  rounded-lg '>
        <div className='sm:w-1/2'>
          <h1 className='text-3xl font-extrabold text-gray-900'> Find Talent You Can Trust</h1>
          <p className='text-gray-700 mt-4 md:text-2xl font-bold md:mr-2'>
          Youʼll get full support in finding and hiring the right talent for your needs. No 
          matter who you choose, we ensure a smooth, guided process from start to finish.
          </p>
        </div>

        <div className='sm:w-1/2 mt-6 sm:mt-0 bg-white p-6 rounded-lg shadow-md'>
          <div className='space-y-4'>
            <p className='flex items-center text-gray-800 text-lg'><FaCheckCircle className='text-green-600 mr-2' /> See their past work </p>
            <p className='flex items-center text-gray-800 text-lg'><FaCheckCircle className='text-green-600 mr-2' />  Directly connect with top talent </p>
            <p className='flex items-center text-gray-800 text-lg'><FaCheckCircle className='text-green-600 mr-2' /> Check their portfolio</p>
            <p className='flex items-center text-gray-800 text-lg'><FaCheckCircle className='text-green-600 mr-2' /> Verify their qualifications</p>
            <p className='flex items-center text-gray-800 text-lg'><FaCheckCircle className='text-green-600 mr-2' />  Chat or interview before hiring </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Thirdsection;
