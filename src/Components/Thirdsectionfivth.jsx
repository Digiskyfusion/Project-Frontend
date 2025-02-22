import React from 'react';
import digisky from './../assets/Images/digisky.png';

function Thirdsectionfivth() {
  return (
    <div className='flex flex-col lg:flex-row items-stretch justify-center p-8 md:p-5 w-full gap-5 md:gap-0'>

      {/* Image Section */}
      <div className='w-full lg:w-1/2 flex justify-center items-center   '>
        <img src={digisky} alt='digisky' className='w-full h-full object-cover rounded-sm lg:rounded-r-none ' />
      </div>

      {/* Content Section */}
      <div className='w-full lg:w-1/2 bg-[#004930] p-5 md:p-12 shadow-lg rounded-lg lg:rounded-l-none flex flex-col justify-center'>
        <div className='space-y-6'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-white'>Your Security is Our Priority</h1>
          <p className='text-white text-lg md:text-xl leading-relaxed'>
            You receive the quality you invest in. And we can demonstrate it.
          </p>
          <p className='text-white text-lg md:text-xl leading-relaxed'>
            For hourly contracts, we track keystrokes and capture random screenshots of your freelancer's screen to ensure they're dedicating the time.
            With fixed-price contracts, you set milestones and pay only when those milestones are completed.
          </p>
        </div>

        <div className='space-y-6 mt-8'>
          <h1 className='text-3xl md:text-4xl font-extrabold text-white'>Everything in One Spot</h1>
          <p className='text-white text-lg md:text-xl leading-relaxed'>
            After signing in, you'll have your own online workspace to oversee your project.
          </p>
          <p className='text-white text-lg md:text-xl leading-relaxed'>
            Utilize it to safely send and receive files, provide instant feedback, and make payments.
            And if you're frequently on the go, be sure to download the app as well.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Thirdsectionfivth;
