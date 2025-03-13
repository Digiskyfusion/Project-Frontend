import React, { useState } from 'react';
import { IoMdDownload, IoMdShare } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import twomale from './../../assets/Images/a-high-quality--creative-digital-illustration-feat (1) 1.png';
import male from './../../assets/Images/Ellipse 75.png';
import girl from './../../assets/Images/Ellipse 72.png';
import women from './../../assets/Images/Ellipse 73.png';

function SecondReviews() {
  const [selectedReview, setSelectedReview] = useState({
    name: " Emily R., Startup Founder",
    image: twomale,
    text: "Hiring through this platform was a game-changer! Found a top-notch designer in no time!"
  });

  // Reviews Data
  const reviews = {
    female: {
      name: " Emily R., Startup Founder",
      image: twomale,
      text: "The entire process was smooth and stress-free. I got my project done faster than expected!"
    },
    male: {
      name: "Mark T., Entrepreneur",
      image:  male,
      text: "Quality work at an affordable price! The freelancer I hired exceeded my expectations."
    },
    female2: {
      name: "David S., Small Business Owner",
      image:girl,
      text: "This is my go-to platform for hiring experts. Reliable, easy, and efficient!"
    },
    male2: {
      name: "Amandeep Kaur",
      image: women,
      text: "This platform has completely transformed my freelancing journey!"
    },
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([selectedReview.text], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "review.txt";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: selectedReview.name,
        text: selectedReview.text,
      });
    } else {
      alert("Sharing not supported on this browser.");
    }
  };

  return (
    <div className='px-5 mt-20'>
      <h1 className="text-2xl font-semibold mb-4">Review</h1>
      <div className='p-2'>
        <div className='bg-[#004930] rounded-md px-4 lg:py-5 flex flex-col justify-center lg:flex-row lg:justify-between items-center pt-4'>

          {/* {/ Review Card /} */}
          <div className='max-w-xl bg-white p-4 rounded-md mb-6 lg:mb-0 lg:py-10'>
            <div className='flex justify-end gap-5'>
              <IoMdDownload onClick={handleDownload} className='cursor-pointer' />
              <IoMdShare onClick={handleShare} className='cursor-pointer' />
            </div>
            <div className='flex justify-center'>
              <img src={selectedReview.image} alt="Reviewer" className="rounded-full w-24 h-24 object-cover mt-4" />
            </div>
            <h2 className="text-xl text-center mt-3">{selectedReview.name}</h2>
            <p className="mt-2 text-center px-10 min-h-[80px]">{selectedReview.text}</p>
            <button className='bg-[#004930] rounded-full text-white px-5 py-2 mt-4 block mx-auto'>
              Read Review
            </button>

            {/* {/ Reviewers' Images /} */}
            <div className='md:flex md:items-center'>
              <div className='flex mt-4 relative'>
                <img src={twomale} alt='' className="w-12 h-12 mx-1 rounded-full object-cover absolute left-6 lg:left-4 cursor-pointer z-10" onClick={() => setSelectedReview(reviews.female)} />
                <img src={male} alt='' className="w-12 h-12 mx-1 rounded-full object-cover absolute left-14 lg:left-12 cursor-pointer z-20" onClick={() => setSelectedReview(reviews.male)} />
                <img src={girl} alt='' className="w-12 h-12 mx-1 rounded-full object-cover absolute left-20 lg:left-18 cursor-pointer z-30" onClick={() => setSelectedReview(reviews.female2)} />
                <img src={women } alt='' className="w-12 h-12 mx-1 rounded-full object-cover relative left-26 lg:left-24 cursor-pointer z-40" onClick={() => setSelectedReview(reviews.male2)} />
                
              </div>

              {/* {/ Star Ratings /} */}
              <div className="flex justify-center items-center mt-4 md:justify-start md:relative md:left-32 gap-2">
                <div className="flex space-x-1">
                  <CiStar className="text-yellow-500 text-xl" />
                  <CiStar className="text-yellow-500 text-xl" />
                  <CiStar className="text-yellow-500 text-xl" />
                  <CiStar className="text-yellow-500 text-xl" />
                  <CiStar className="text-yellow-500 text-xl" />
                </div>
                <div className="md:text-lg text-[10px] font-medium">1000+ Reviews</div>
              </div>

            </div>
          </div>

          {/* {/ Two Male Image /} */}
          <div className="relative flex justify-center md:justify-end lg:w-[80%] mt-4 lg:mt-0">
            <img src={twomale} alt='' className='w-full lg:w-[80%] object-contain lg:absolute lg:bottom-[-15.5rem]' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SecondReviews;