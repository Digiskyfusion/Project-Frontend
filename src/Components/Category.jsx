import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Icons for navigation
import Vector from "./../assets/Images/Vector.png";

function Category() {
  const [swiperInstance, setSwiperInstance] = useState(null);

  const categories = [
    { title: " Development & IT", jobs: " 180 Jobs", desc: "Frontend, Backend, Web and App Developer Jobs", img: Vector },
    { title: " Graphic Design & UI/UX", jobs: "120 jobs", desc: "Logos, Branding, Website & App Design", img: Vector },
    { title: " Digital Marketing", jobs: "150 jobs", desc: " SEO, Social Media, Performance Marketing", img: Vector },
    { title: "Writing & Translation", jobs: "130 jobs", desc: "Content Writing, Copywriting, Blogging, Translations.", img: Vector }
  ];

  return (
    <div className="relative px-6 md:px-10 lg:px-20 py-10">
      {/* Left Navigation Button */}
      <button
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#004930] p-3 rounded-full hover:bg-opacity-80 hidden md:flex"
        aria-label="Previous Slide"
        onClick={() => swiperInstance?.slidePrev()}
      >
        <ChevronLeft size={24} color="white" />
      </button>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          540: { slidesPerView: 1.2 }, // Small phones
          640: { slidesPerView: 2 },   // Tablets
          1024: { slidesPerView: 3 },  // Laptops
          1280: { slidesPerView: 4 },  // Larger screens
        }}
        onSwiper={setSwiperInstance}
        className="w-full"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center bg-[#004930] shadow-lg p-6 rounded-3xl">
            <div className="flex">
              <div className="border-2 p-2 rounded-full border-white flex items-center justify-center w-16 h-16 overflow-hidden bg-white">
                <img
                  src={category.img}
                  alt={category.title}
                  className="w-10 h-10 object-contain rounded-full flex-shrink-0"
                  loading="lazy"
                />
              </div>
            </div>
            <h1 className="text-xl text-white font-bold mt-4">{category.title}</h1>
            <h2 className="text-white mt-0.5">{category.jobs}</h2>
            <p className="text-white mt-4 text-center">{category.desc}</p>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Right Navigation Button */}
      <button
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#004930] p-3 rounded-full hover:bg-opacity-80 hidden md:flex"
        aria-label="Next Slide"
        onClick={() => swiperInstance?.slideNext()}
      >
        <ChevronRight size={24} color="white" />
      </button>
    </div>
  );
}

export default Category;
