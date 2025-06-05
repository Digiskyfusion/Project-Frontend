import React from 'react';
import Slider from 'react-slick';
import { FaStar } from 'react-icons/fa';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const testimonials = [
  {
    name: 'Manisha',
    rating: 5,
    feedback:
      'Clients and freelancers from all over the world can collaborate. Clients and freelancers from all over the world can collaborate.',
  },
  {
    name: 'Sonia',
    rating: 4,
    feedback:
      'The platform makes collaboration so easy and efficient. I found the perfect freelancer within hours!',
  },
  {
    name: 'Amit',
    rating: 5,
    feedback:
      'This is the best freelance platform I’ve ever worked on. Seamless process and quality clients!',
  },
  {
    name: 'Priya',
    rating: 5,
    feedback:
      'Amazing support and wonderful UI. I really enjoyed using this platform. Highly recommended!',
  },
  {
    name: 'Ravi',
    rating: 4,
    feedback:
      'Got connected with top clients from across the globe. Great experience overall.',
  },
];

function NewHomeFive() {
  const settings = {
    dots: true,
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024, // Tablets
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768, // Mobiles
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-[#003B2F] text-white py-16 px-4 sm:px-6 md:px-10 lg:px-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold mb-4">How It Works?</h1>
        <p className="max-w-2xl mx-auto text-sm md:text-base text-gray-200">
          Your success is our priority! See what our users love about working with us: Seamless and efficient! 
          Finding the right projects has never been this easy. Highly recommended!
        </p>
      </div>

      {/* Carousel */}
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div key={index} className="px-2 sm:px-4 md:px-6">
            <div className="bg-[#084737] rounded-2xl p-6 border border-[#1c5d4b] text-center card-item transition-all duration-300 ease-in-out h-full">
              <h2 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">{item.name}</h2>
              <div className="flex justify-center mb-2">
                {Array.from({ length: item.rating }, (_, i) => (
                  <FaStar key={i} className="text-yellow-400" />
                ))}
              </div>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed text-gray-100">
                “{item.feedback}”
              </p>
            </div>
          </div>
        ))}
      </Slider>

      {/* Custom Styles */}
      <style jsx>{`
        .card-item {
          opacity: 0.6;
          transform: scale(0.9);
          transition: all 0.4s ease-in-out;
        }
        .slick-center .card-item {
          transform: scale(1.15);
          z-index: 10;
          opacity: 1;
          background-color: #0a5646;
          box-shadow: 0 15px 50px rgba(0, 0, 0, 0.4);
        }
      `}</style>
    </div>
  );
}

export default NewHomeFive;
