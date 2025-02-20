import React from 'react';
import Jobsection from './Jobsection';

function FullJobCard() {
  return (
    <div className='p-5'>

      {/* Header Section */}
      <div className='flex flex-col md:flex-row md:justify-between items-start md:items-center gap-3'>

        <div>
          <h1 className='text-lg sm:text-xl font-semibold'>Latest Jobs</h1>
          <p className='text-sm sm:text-base text-gray-600'>2025 jobs live - 200+ added today</p>
        </div>
                <div>
                <button className='bg-[#004930] rounded-full text-white py-2 px-6 md:px-10 w-full sm:w-auto text-sm sm:text-base'>
                View all jobs
                </button>
            </div>
      </div>

      {/* Job Listings */}
      <Jobsection />
      
    </div>
  );
}

export default FullJobCard;
