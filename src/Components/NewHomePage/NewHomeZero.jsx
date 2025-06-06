import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

const carouselData = [
 
  
  {
    heading: 'Grow Your Career with Our Platform',
    paragraph: 'Find exciting opportunities that match your skills and passion.',
    buttonText: 'Join Now',
  },
   {
    heading: 'Bridging people To turn dreams into achievements',
    paragraph: 'Use AI to find skilled professionals or list jobs while staying in control.',
    buttonText: 'Join Now',
  },
  {
    heading: 'Discover the Best Freelancers Instantly',
    paragraph: 'Hire professionals from around the world at your fingertips.',
    buttonText: 'Join Now',
  },
];

const videos = [
  //  "https://firebasestorage.googleapis.com/v0/b/digisky-25d9e.firebasestorage.app/o/video-1749102334380.mp4?alt=media&token=a0c3d45a-8032-47ab-9f12-2cd7fd18ad7c",
  //  "https://firebasestorage.googleapis.com/v0/b/digisky-25d9e.firebasestorage.app/o/video-1749102789504.mp4?alt=media&token=aac76658-533b-4976-b135-9dd0f2ecd51f",
  //  "https://firebasestorage.googleapis.com/v0/b/digisky-25d9e.firebasestorage.app/o/homepagevideo1.mp4?alt=media&token=dcdcdbd4-16b9-4d7b-aabc-0b066e2ef8d3",
  "https://firebasestorage.googleapis.com/v0/b/digisky-25d9e.firebasestorage.app/o/5223113-hd_3840_2160_30fps.mp4?alt=media&token=24c71ab2-3c9b-47f5-b807-f2484ef8e25b",
  "https://firebasestorage.googleapis.com/v0/b/digisky-25d9e.firebasestorage.app/o/3129957-uhd_3840_2160_25fps.mp4?alt=media&token=3f521ea1-59b2-403e-9b10-f5c33f392985",
  //  "https://firebasestorage.googleapis.com/v0/b/digisky-25d9e.firebasestorage.app/o/video4.mp4?alt=media&token=d326bb66-986d-478a-ab53-7ada55312b88",
  // "https://firebasestorage.googleapis.com/v0/b/digisky-25d9e.firebasestorage.app/o/homepagevideo2.mp4?alt=media&token=12b09ca3-a1f5-471a-9db1-4eddc042da97",
];

function NewHomeZero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeProp, setFadeProp] = useState('fade-in');
  const [typeKey, setTypeKey] = useState(0);

  const videoRefs = useRef([]);

  const handleVideoEnd = () => {
    setFadeProp('fade-out');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % videos.length);
      setFadeProp('fade-in');
      setTypeKey((k) => k + 1);
    }, 400);
  };

  useEffect(() => {
    // Pause all videos
    videoRefs.current.forEach((vid) => {
      if (vid) vid.pause();
    });

    // Play current video
    const currentVid = videoRefs.current[currentIndex];
    if (currentVid) {
      currentVid.currentTime = 0;
      currentVid.play();
    }
  }, [currentIndex]);

  return (
    <div className="relative h-[50rem] sm:h-[50rem] lg:min-h-screen flex items-center justify-start text-white overflow-hidden">
      {/* All background videos mounted */}
      {videos.map((src, idx) => (
        <video
          key={idx}
          ref={(el) => (videoRefs.current[idx] = el)}
          src={src}
          className={`absolute top-0 left-0 w-full h-full  object-cover transition-opacity duration-500 ${
            currentIndex === idx ? 'opacity-100' : 'opacity-0'
          }`}
          muted
          playsInline
          preload="auto"
          onEnded={idx === currentIndex ? handleVideoEnd : null}
        />
      ))}

      {/* Content */}
      <div className={`relative p-8 rounded-xl text-center sm:text-start max-w-5xl z-10`}>
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

        <Link to="/registration">
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
        </Link>

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

export default NewHomeZero;