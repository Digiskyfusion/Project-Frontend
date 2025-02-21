import React, { useState } from 'react';
import { IoMdDownload, IoMdShare } from "react-icons/io";
import { CiStar } from "react-icons/ci";
import twomale from './../assets/Images/a-high-quality--creative-digital-illustration-feat (1) 1.png';





function SecondReviews() {
  const [selectedReview, setSelectedReview] = useState({
    name: "Amandeep Kaur",
    image: twomale,
    text: "Is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
  });

  // Reviews Data
  const reviews = {
    female: {
      name: "Simran Kaur",
      image: twomale,
      text: "Simran’s review: Lorem Ipsum is simply dummy text of the printing industry. It has survived not only five centuries but also the leap into electronic typesetting."
    },
    male: {
      name: "Rajesh Kumar",
      image: twomale,
      text: "Rajesh’s review: Lorem Ipsum is the industry's standard dummy text. It has been used since the 1500s to make a type specimen book."
    },
    female2: {
      name: "Simran Kaur",
      image:twomale,
      text: "Simran’s review: Lorem Ipsum is simply dummy text of the printing industry. It has survived not only five centuries but also the leap into electronic typesetting."
    },
    male2: {
      name: "Rajesh Kumar",
      image: twomale,
      text: "Rajesh’s review: Lorem Ipsum is the industry's standard dummy text. It has been used since the 1500s to make a type specimen book."
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
                <img src={twomale} alt='' className="w-12 h-12 mx-1 rounded-full object-cover absolute left-14 lg:left-12 cursor-pointer z-20" onClick={() => setSelectedReview(reviews.male)} />
                <img src={twomale} alt='' className="w-12 h-12 mx-1 rounded-full object-cover absolute left-20 lg:left-18 cursor-pointer z-30" onClick={() => setSelectedReview(reviews.female2)} />
                <img src={twomale} alt='' className="w-12 h-12 mx-1 rounded-full object-cover relative left-26 lg:left-24 cursor-pointer z-40" onClick={() => setSelectedReview(reviews.male2)} />
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