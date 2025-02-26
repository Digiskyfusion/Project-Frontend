import React from 'react';
import CountUp from 'react-countup';
import opo from './../assets/Images/opo 1.png';

function About() {
  return (
    <div className='bg-[#004930] text-white px-5 py-5 lg:px-20'>
      <div className='md:flex md:items-center md:justify-between'>

        {/* {/ Left Content /} */}
        <div className='md:w-1/2 md:mt-8'>
          <h3 className='text-lg uppercase font-semibold text-gray-300  text-center md:text-start'>About Us</h3>
          <h1 className='text-3xl md:text-5xl font-bold mt-2 md:mt-5 text-center md:text-start'>What do we do?</h1>
          <p className='mt-4 text-md md:text-xl text-gray-300 leading-relaxed md:mt-10 text-center md:text-start'>
            It is a long-established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum English.
          </p>

          {/* {/ Stats Section /} */}
          <div className=' flex justify-between mt-8  space-y-4'>
            {[
              { end: 5000, label: 'projects completed ' },
              { end: 200, label: 'years of excellence' },
              { end: 10, label: 'Client' },
            ].map((item, index) => (
              <p key={index} className='text-center md:text-start'>
                 <span className="text-white ">
                  <CountUp start={0} end={item.end} duration={3} separator="," className='font-bold  md:text-3xl hover:scale-110 transition-transform' />+
                  <p className='text-md md:text-xl '>{item.label}</p>
                </span> 
              </p>
            ))}
          </div>
        </div>

        {/* {/ Right Image /} */}
        <div className=' flex justify-center mt-10 md:mt-0'>
          <img src={opo} alt='About Us' className='max-w-xs md:max-w-md lg:max-w-lg rounded-lg ' />
        </div>

      </div>
    </div>
  );
}

export default About;
