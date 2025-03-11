import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

function Category() {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(`${API_URL}api/category/getallCategory`);
        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }
        const data = await response.json();
        console.log("data");
        console.log(data);
        setCategories(data || []);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  if (loading) return <p className="text-center text-white">Loading categories...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="relative px-6 md:px-10 lg:px-20 py-10">
      <button
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 z-10 bg-[#004930] p-3 rounded-full hover:bg-opacity-80 hidden md:flex"
        aria-label="Previous Slide"
        onClick={() => swiperInstance?.slidePrev()}
      >
        <ChevronLeft size={24} color="white" />
      </button>

      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          540: { slidesPerView: 1.2 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        }}
        onSwiper={setSwiperInstance}
        className="w-full"
      >
        {categories.map((category, index) => (
          <SwiperSlide key={index} className="flex flex-col items-center bg-[#004930] shadow-lg p-6 rounded-3xl">
            <div className="flex">
              <div className="border-2 p-2 rounded-full border-white flex items-center justify-center w-16 h-16 overflow-hidden bg-white">
                {/* <img
                  loading="lazy"
                  src={category.img || "https://via.placeholder.com/50"}
                  alt={category.title}
                  className="w-10 h-10 object-contain rounded-full flex-shrink-0"
                /> */}
              </div>
            </div>
            <h1 className="text-xl text-white font-bold mt-4">{category.name}</h1>
            {/* <h2 className="text-white mt-0.5">{category.jobs}</h2>
            <p className="text-white mt-4">{category.desc}</p> */}
          </SwiperSlide>
        ))}
      </Swiper>

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
