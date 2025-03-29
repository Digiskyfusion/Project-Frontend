import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Digitalmarketing from "../../assets/Images/digital-marketing.avif";
import Graphicdesigning from "../../assets/Images/graphic-designing.avif";
import Videoeditor from "../../assets/Images/video-editor.avif";
import Development from "../../assets/Images/development.jpg";
import Contentwriter from "../../assets/Images/content-writing.avif";
import InfulancerMarketing from "../../assets/Images/infulancer-marketing.avif";

const skills = [
  { name: "Digital Marketing", image: Digitalmarketing },
  { name: "Graphic Designing", image: Graphicdesigning },
  { name: "Video Editing", image: Videoeditor },
  { name: "Development", image: Development },
  { name: "Content Writing", image: Contentwriter },
  { name: "Influencer Marketing", image: InfulancerMarketing },
];

function skill() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  return (
    <div className="relative px-6 md:px-10 lg:px-20 py-10 bg-white">
      <button
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-3 rounded-full hover:bg-gray-300 shadow-md hidden md:flex"
        aria-label="Previous Slide"
        onClick={() => swiperInstance?.slidePrev()}
      >
        <ChevronLeft size={24} color="black" />
      </button>

      {/* Swiper Component */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          360: { slidesPerView: 1.1 },
          540: { slidesPerView: 1.3 },
          640: { slidesPerView: 1.5 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
        onSwiper={setSwiperInstance}
        className="w-full"
      >
        {skills.map((skill, index) => (
          <SwiperSlide key={index} className="mb-6 flex flex-col items-center bg-white shadow-lg p-6 rounded-3xl border border-gray-200">
            <div className="w-70 h-40 overflow-hidden rounded-xl shadow-md">
              <img
                loading="lazy"
                src={skill.image}
                alt={skill.name}
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-xl text-gray-900 font-bold mt-4 text-center">{skill.name}</h1>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Arrow Button */}
      <button
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-gray-200 p-3 rounded-full hover:bg-gray-300 shadow-md hidden md:flex"
        aria-label="Next Slide"
        onClick={() => swiperInstance?.slideNext()}
      >
        <ChevronRight size={24} color="black" />
      </button>
    </div>
  );
}

export default skill;
