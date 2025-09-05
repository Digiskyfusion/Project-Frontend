import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Digitalmarketing from "../../assets/Images/digital-marketing.avif";
import Graphicdesigning from "../../assets/Images/graphic-designing.avif";
import Videoeditor from "../../assets/Images/video-editor.avif";
import Development from "../../assets/Images/development.jpg";
import Contentwriter from "../../assets/Images/content-writing.avif";
import InfulancerMarketing from "../../assets/Images/infulancer-marketing.avif";
import { Link } from "react-router-dom";

const skills = [
  { name: "Digital Marketing", image: Digitalmarketing },
  { name: "Graphic Designing", image: Graphicdesigning },
  { name: "Video Editing", image: Videoeditor },
  { name: "Development", image: Development },
  { name: "Content Writing", image: Contentwriter },
  { name: "Influencer Marketing", image: InfulancerMarketing },
];

function SkillCarousel() {
  return (
    <div className="relative px-4 sm:px-6 md:px-10 lg:px-28 bg-white overflow-hidden mt-4 lg:mt-10">
      {/* Swiper Component with Pagination Dots */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        breakpoints={{
          360: { slidesPerView: 1.2, spaceBetween: 10 },
          480: { slidesPerView: 1, spaceBetween: 15 },
          640: { slidesPerView: 2, spaceBetween: 15 },
          768: { slidesPerView: 2, spaceBetween: 20 },
          1024: { slidesPerView: 3, spaceBetween: 30 }, 
          1280: { slidesPerView: 3, spaceBetween: 40 }, 
        }}
        className="w-full mb-10" // Added padding-bottom for space
      >
        {skills.map((skill, index) => (
          <SwiperSlide
            key={index}
            className="mb-4 md:mb-15 flex flex-col items-center bg-white shadow-lg p-6 rounded-3xl border border-gray-200 hover:scale-105 transition-transform duration-300 "
          >
          <Link to={`/skills/${encodeURIComponent(skill.name)}`}>
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg aspect-[16/9] overflow-hidden rounded-xl shadow-md" >
              <img
                loading="lazy"
                src={skill.image}
                alt={skill.name}
                className="object-cover w-full h-full"
              />
            </div>
            </Link>
            <h1 className="text-lg lg:text-xl text-gray-900 font-semibold mt-3 text-center">
              {skill.name}
            </h1>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SkillCarousel;
