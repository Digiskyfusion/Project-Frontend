import { useState, useEffect } from "react";
import { MdOutlineHorizontalRule } from "react-icons/md";

const slides = [
  {
    title: "Bridging people to turn dreams into achievements",
    text: "Use AI to find skilled professionals or list jobs while staying in control.",
  },
  {
    title: "Empowering businesses with talent discovery",
    text: "Leverage smart hiring solutions to build your dream team efficiently.",
  },
  {
    title: "Connecting talents to opportunities",
    text: "Find jobs that match your skills and grow in your career seamlessly.",
  },
  {
    title: "AI-driven recruitment at your fingertips",
    text: "Streamline your hiring process with automated and intelligent solutions.",
  },
  {
    title: "Unlock new career possibilities",
    text: "Explore new job opportunities and stay ahead in the competitive market.",
  },
];

function FirstSectionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically scroll every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <div id="indicators-carousel" className="relative w-full">
      {/* {/ Carousel Wrapper /} */}
      <div className="relative h-56 overflow-hidden rounded-lg  flex justify-center items-center text-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-700 ease-in-out flex flex-col items-center justify-center ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="relative z-10 bottom-6  bg-opacity-50 p-4 rounded-lg">
              <h1 className="text-white text-lg md:text-4xl font-bold">{slide.title}</h1>
              <p className="text-white text-sm md:text-2xl mt-5">{slide.text}</p>
            </div>
          </div>
        ))}
      </div>

      {/* {/ Navigation Icons /} */}
      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
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
  );
}

export default FirstSectionCarousel;
