import React, { useState, useEffect, useRef } from 'react';
import { Typewriter } from 'react-simple-typewriter';

const carouselData = [
  {
    heading: 'Discover the Best Freelancers Instantly',
    paragraph: 'Hire professionals from around the world at your fingertips.',
    buttonText: 'Exciting Features Coming Soon!',
  },
  {
    heading: 'Grow Your Career with Our Platform',
    paragraph: 'Find exciting opportunities that match your skills and passion.',
    buttonText: 'Exciting Features Coming Soon!',
  },
  {
    heading: 'Bridging people To turn dreams into achievements',
    paragraph: 'Use AI to find skilled professionals or list jobs while staying in control.',
    buttonText: 'Exciting Features Coming Soon!',
  },
];

const videoURL =
  'https://firebasestorage.googleapis.com/v0/b/digisky-25d9e.firebasestorage.app/o/5223113-hd_3840_2160_30fps.mp4?alt=media&token=24c71ab2-3c9b-47f5-b807-f2484ef8e25b';

function NewHomeZero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState('fade-in');
  const [typeKey, setTypeKey] = useState(0);
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    setFadeProp('fade-out');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % carouselData.length);
      setFadeProp('fade-in');
      setTypeKey((k) => k + 1);
    }, 400);
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  }, [currentIndex]);

  return (
    <div className="relative h-[45rem] lg:min-h-screen flex items-center justify-start  text-white overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        src={videoURL}
        className="absolute top-0 left-0 w-full h-full object-fill sm:object-cover"
        muted
        playsInline
        preload="auto"
        onEnded={handleVideoEnd}
      />

      {/* Glass Content */}
      <div className="relative p-8 rounded-xl text-center sm:text-start max-w-5xl z-10  ">
        <h1
          key={`heading-${typeKey}`}
          className={`text-2xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold mb-4 transition-opacity duration-500 ${fadeProp}`}
        >
          <Typewriter
            words={[carouselData[currentIndex].heading]}
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
          className={`text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl mb-6 transition-opacity duration-500 ${fadeProp}`}
        >
          <Typewriter
            words={[carouselData[currentIndex].paragraph]}
            loop={1}
            cursor={false}
            typeSpeed={50}
            delaySpeed={1800}
          />
        </p>

        <button
          type="button"
          className={`text-white w-[250px] sm:w-[400px] px-2 py-2 rounded-lg border border-gray-300
          shadow-[0_4px_0_#a0aec0] transform transition-all duration-200 ease-in-out
          hover:-translate-y-1 hover:shadow-[0_6px_0_#a0aec0]
          active:translate-y-0 active:shadow-[0_2px_0_#a0aec0] cursor-pointer
          ${fadeProp}`}
        >
          {carouselData[currentIndex].buttonText}
        </button>

        <div className="flex justify-center sm:justify-start mt-8 space-x-2">
          {carouselData.map((_, idx) => (
            <span
              key={idx}
              className={`block w-10 h-1 rounded-full transition-all duration-500 ${
                idx === currentIndex ? 'bg-white scale-x-100' : 'bg-white/50 scale-x-50'
              }`}
              style={{ transformOrigin: 'left' }}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewHomeZero;
