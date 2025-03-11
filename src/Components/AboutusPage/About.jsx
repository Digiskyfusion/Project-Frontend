import React from 'react';
import CountUp from 'react-countup';
import opo from './../../assets/Images/opo 1.png';

function About() {
  return (
    <div className='bg-[#004930] text-white px-5 py-5 lg:px-20'>
      <div className='md:flex md:items-center md:justify-between'>

        {/* {/ Left Content /} */}
        <div className='md:w-1/2 md:mt-8'>
          <h3 className='text-lg uppercase font-semibold text-gray-300  text-center md:text-start'>About Us</h3>
          <h1 className='text-3xl md:text-5xl font-bold mt-2 md:mt-5 text-center md:text-start'>What do we do?</h1>
          <p className='mt-4 text-md md:text-xl text-gray-300 leading-relaxed md:mt-10 text-center md:text-start'>
          We bridge the gap between businesses and top freelancers, making hiring and working effortless. Our platform ensures seamless collaboration, secure payments, and high-quality results
          </p>

          {/* {/ Stats Section /} */}
          <div className=' flex justify-between mt-8  space-y-4'>
            {[
              { end: 700, label: 'projects completed ' },
              { end: 1, label: 'years of excellence' },
              { end: 100, label: 'Satisfied Clients' },
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
          <img loading="lazy" src={opo} alt='About Us' className='max-w-xs md:max-w-md lg:max-w-lg rounded-lg ' />
        </div>

      </div>
    </div>
  );
}

export default About;
