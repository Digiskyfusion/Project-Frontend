import { FaReact } from "react-icons/fa";
import FirstSectionCarousel from "./FirstSectionCarousel";
import female from "../../assets/Images/femalefirst.png";
import value from "../../assets/Images/15k.png";
import male from "../../assets/Images/malefirst.png";

function FirstSection() {
  return (
    <div className="bg-[#004930] flex flex-col items-center py-10">
      <div className="flex flex-col sm:flex-row justify-between items-center sm:items-end w-full relative">
        {/* Left Image */}
        <div className="w-full sm:w-1/4 flex justify-center relative h-60 sm:h-full">
          <img src={male} alt="Male" className="w-full h-full object-cover" />
          <img
            src={value}
            alt="Value"
            className="absolute top-20 right-20 md:right-8 md:top-13 lg:top-20 lg:right-20 w-16 lg:w-24 h-16 lg:h-24 object-contain"
          />
        </div>

        {/* Center Carousel */}
        <div className="w-full sm:w-1/2 px-5 lg:mb-20 text-center">
          <FirstSectionCarousel />
          <div className="mt-6 sm:mt-0 text-white font-bold text-xl bg-white/20 px-6 py-3 rounded-full shadow-lg">
            Exciting Features Coming Soon!
          </div>
        </div> 

        {/* Right Image */}
        <div className="w-full sm:w-1/4 flex justify-center relative h-60 sm:h-full">
          <img src={female} alt="Female" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
}

export default FirstSection;
