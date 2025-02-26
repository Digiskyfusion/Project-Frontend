import React, { useState, useEffect } from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";
import thirspic from './../assets/Images/a-young-woman-with-black-hair-and-glasses--sitting 1 (1).png';

const slides = [
  {
    title: "Bridging people to turn dreams into achievements into achievements",
    text: "Use AI to find skilled professionals or list jobs while staying in control.",
  },
  {
    title: "Empowering businesses with talent discovery",
    text: "Leverage smart hiring solutions to build your dream team efficiently team efficiently.",
  },
  {
    title: "Empowering businesses with talent discovery",
    text: "Find jobs that match your skills and grow in your career seamlessly team efficiently.",
  },
  {
    title: "AI-driven recruitment at your fingertips your fingertips",
    text: "Streamline your hiring process with automated and intelligent solutions team efficiently.",
  },
  {
    title: "Unlock new career possibilities as the value",
    text: "Explore new job opportunities and stay ahead in the competitive team efficiently.",
  },
];

function ThirdSectionFirst() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="bg-[#004930] flex flex-col md:flex-row items-center px-5 py-6 space-y-6 md:space-y-0">
      {/* {/ Carousel Section /} */}
      <div className="relative w-full md:w-[50%] flex flex-col items-center justify-center py-6">
        <div className="relative w-full overflow-hidden text-center px-4">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`transition-opacity duration-700 ${
                index === currentIndex ? "opacity-100 block" : "opacity-0 hidden"
              }`}
            >
              <h1 className="text-white text-lg sm:text-xl md:text-3xl lg:text-4xl font-bold">{slide.title}</h1>
              <p className="text-white text-sm sm:text-base md:text-xl lg:text-2xl mt-5">{slide.text}</p>
              <div className="flex justify-center md:justify-self-start  px-10">
              <button className="px-9 py-2 mt-3 rounded-full border-2 border-white text-white">Freelancer</button>
              </div>
            </div>
          ))}
        </div>

        {/* {/ Navigation Dots (Moved to Left Corner) /} */}
        <div className="absolute top-[14rem]  md:top-[19rem] lg:top-[16rem] left-4 md:left-10 flex gap-2 mt-">
          {slides.map((_, index) => (
            <button
              key={index}
              role="button"
              aria-label={`Go to slide ${index + 1}`}
              className="text-white text-2xl"
              onClick={() => setCurrentIndex(index)}
            >
              <MdOutlineHorizontalRule
                className={index === currentIndex ? "text-white" : "text-gray-400"}
              />
            </button>
          ))}
        </div>
      </div>

      {/* {/ Image Section /} */}
      <div className="w-full md:w-1/2 flex justify-center">
        <img
          src={thirspic}
          alt="Visual representation"
          className="w-full max-w-[80%] sm:max-w-[60%] md:max-w-[50%] object-contain"
        />
      </div>
    </div>
  );
}

export default ThirdSectionFirst;
