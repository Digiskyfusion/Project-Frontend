import React from 'react';
import { MdOutlineRemoveRedEye } from 'react-icons/md';
import { CiLocationOn } from 'react-icons/ci';
import king from './../assets/Images/king.png';
import Vector from './../assets/Images/Vector (1).png';

function Jobsection() {
  const jobs = [
    { title: 'UI/UX Designer', company: 'Digisky', category: 'Design & Creative', location: 'Mohali', salary: '$400-$500/month', remote: true, days: "10 days left to apply" },
    { title: 'Frontend Developer', company: 'TechCorp', category: 'Development', location: 'Bangalore', salary: '$600-$700/month', remote: true, days: "5 days left to apply" },
    { title: 'Marketing Specialist', company: 'Brandify', category: 'Marketing', location: 'New York', salary: '$500-$600/month', remote: true, days: "3 days left to apply" },
    { title: 'Project Manager', company: 'SkyHigh', category: 'Management', location: 'London', salary: '$700-$800/month', remote: true, days: "7 days left to apply" }
  ];

  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 px-4 py-6'>
      {jobs.map((job, index) => (
        <div 
          key={index} 
          className='bg-white shadow-md rounded-xl p-5 flex flex-col items-start border border-gray-200 relative 
                     transition duration-300 ease-in-out hover:bg-[#004930] hover:text-white group' 
        >

          {/* Company Logos - Turn White on Hover */}
          <div className='absolute top-2 right-2 flex gap-2 md:px-5 md:py-2'>
            <img src={king} alt='Company logo 1' className='w-4 h-4 sm:w-8 sm:h-8 transition duration-300 group-hover:invert ' />
            <img src={Vector} alt='Company logo 2' className='w-4 h-4 sm:w-8 sm:h-8  ' />
          </div>

          {/* Job Header */}
          <div className='flex items-center w-full justify-between'>
            <div className='flex gap-2 items-center'>
              <div className='border-2 rounded-full p-1 border-[#004930] group-hover:border-white'>
                <MdOutlineRemoveRedEye className='text-gray-500 text-lg group-hover:text-white' />
              </div>
              <h1 className='text-sm sm:text-lg font-semibold leading-tight group-hover:text-white'>
                {job.title} at {job.company}
              </h1>
            </div>
          </div>

          {/* Job Category - Centered */}
          <div className='w-full px-9 mt-1'>
            <p className='text-gray-600 text-xs sm:text-sm font-medium group-hover:text-white'>{job.category}</p>
          </div>

          {/* Job Tags */}
          <div className='flex flex-wrap gap-2 mt-2'>
            {job.remote && <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs sm:text-sm group-hover:bg-white group-hover:text-[#004930]'>Remote</span>}
            <span className='flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm group-hover:bg-white group-hover:text-[#004930]'>
              <CiLocationOn className='mr-1 group-hover:text-[#004930]' /> {job.location}
            </span>
            <span className='bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs sm:text-sm group-hover:bg-white group-hover:text-[#004930]'>{job.salary}</span>
          </div>

          {/* Application Deadline */}
          <p className='mt-3 text-gray-700 text-xs sm:text-sm group-hover:text-white'>{job.days}</p>
        </div>
      ))}
    </div>
  );
}

export default Jobsection;
