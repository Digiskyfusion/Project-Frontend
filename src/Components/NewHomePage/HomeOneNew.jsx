import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';
// import one from '../../assets/Images/one.png';
import two from '../../assets/Images/two.png';
import three from '../../assets/Images/three.png';
// import one from '../../assets/Images/newone.jpg';
import one from '../../assets/Images/newone1.jpg';

const carouselData = [
  {
    heading: 'Grow Your Career with Our Platform',
    paragraph: 'Find exciting opportunities that match your skills and passion.',
    buttonText: 'Join Now',
    image: one,
  },
  {
    heading: 'Bridging people To turn dreams into achievements',
    paragraph: 'Use AI to find skilled professionals or list jobs while staying in control.',
    buttonText: 'Join Now',
    image: two,
  },
  {
    heading: 'Discover the Best Freelancers Instantly',
    paragraph: 'Hire professionals from around the world at your fingertips.',
    buttonText: 'Join Now',
    image: three,
  },
];

function HomeOneNew() {
  const [textIndex, setTextIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState('fade-in');
  const [typeKey, setTypeKey] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeProp('fade-out');
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % carouselData.length);
        setTypeKey((k) => k + 1);
        setFadeProp('fade-in');
      }, 400);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[25rem] sm:h-[50rem] lg:h-[40rem] flex items-center justify-start text-white overflow-hidden eb-garamond">
      {/* Background Image */}
     {/* Background Images with fade transition */}
{carouselData.map((item, idx) => (
  <img
    key={idx}
    src={item.image}
    alt={`Slide ${idx}`}
    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out
      ${idx === textIndex ? 'opacity-100' : 'opacity-0'}
      object-fill sm:object-cover
    `}
  />
))}


      {/* Overlay to darken the background for better readability */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* Text Content */}
      <div className="relative p-8 rounded-xl text-center sm:text-start max-w-5xl z-10">
       <h1
  key={`heading-${typeKey}`}
  className={`text-2xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 transform transition duration-500 ease-in-out ${fadeProp}`}
>
  <Typewriter
    words={[carouselData[textIndex].heading]}
    loop={1}
    cursor
    cursorStyle="|"
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1000}
  />
</h1>

        <p
          key={`paragraph-${typeKey}`}
          className={`text-lg md:text-xl lg:text-xl xl:text-2xl  mb-6 transition-opacity duration-500 ${fadeProp}`}
        >
          <Typewriter
            words={[carouselData[textIndex].paragraph]}
            loop={1}
            cursor={false}
            typeSpeed={50}
            delaySpeed={1800}
          />
        </p>

        <Link to="/registration">
          <button
            type="button"
            className={`text-white w-[250px] sm:w-[400px] px-2 py-2 rounded-lg border border-gray-300
            shadow-[0_4px_0_#a0aec0] transform transition-all duration-200 ease-in-out
            hover:-translate-y-1 hover:shadow-[0_6px_0_#a0aec0]
            active:translate-y-0 active:shadow-[0_2px_0_#a0aec0] cursor-pointer
            ${fadeProp}`}
          >
            {carouselData[textIndex].buttonText}
          </button>
        </Link>

        <div className="flex justify-center sm:justify-start mt-8 space-x-2">
          {carouselData.map((_, idx) => (
            <span
              key={idx}
              className={`block w-10 h-1 rounded-full transition-all duration-500 ${
                idx === textIndex ? 'bg-white scale-x-100' : 'bg-white/50 scale-x-50'
              }`}
              style={{ transformOrigin: 'left' }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeOneNew;
