import React from 'react';
import digisky from './../assets/Images/digisky.png';

function Thirdsectionfivth() {
  return (
    <div className='flex flex-col lg:flex-row items-stretch justify-center p-8 md:p-5 w-full gap-5 md:gap-0'>

      {/* Image Section */}
      <div className='w-full lg:w-1/2 flex justify-center items-center   '>
        <img loading="lazy" src={digisky} alt='digisky' className='w-full h-full object-cover rounded-sm lg:rounded-r-none ' />
      </div>

      {/* Content Section */}
      <div className='w-full lg:w-1/2 bg-[#004930] p-5 md:p-12 shadow-lg rounded-lg lg:rounded-l-none flex flex-col justify-center'>
        <div className='space-y-6'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-white'>Trust, Transparency, and Total Control</h1>
          <p className='text-white text-lg md:text-xl leading-relaxed'>
          Your projects deserve the highest standards—get quality work with complete visibility.

          </p>
          <p className='text-white text-lg md:text-xl leading-relaxed'>
          For hourly contracts – We track keystrokes and capture random screen activity, ensuring every second counts.
 For fixed-price contracts – Set clear milestones and pay only when the work meets your expectations.


          </p>
        </div>

        <div className='space-y-6 mt-8'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-white'>Your Project, Your Workspace</h1>
          <p className='text-white text-lg md:text-xl leading-relaxed'>
          Log in and manage everything in one place—files, feedback, and payments.
          </p>
          <p className='text-white text-lg md:text-xl leading-relaxed'>
          Stay in sync, stay productive, and for ultimate convenience, take it all on the go with our mobile app!
          </p>
        </div>
      </div>

    </div>
  );
}

export default Thirdsectionfivth;
