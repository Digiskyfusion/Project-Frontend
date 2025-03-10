import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import tvadd1 from './../assets/Images/tvadd1.png';
import tvadd2 from './../assets/Images/tvadd2.png';
import { FaRupeeSign } from "react-icons/fa";
import SelectSection from './SelectSection';

function Starplus() {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(tvadd1);

  const obj = [
    { name: 'User for', nickname: "Impact" },
    { name: 'Ad Type', nickname: "Image" },
    { name: 'Lead more', nickname: "3" },
    { name: 'Span', nickname: "1 day" }
  ];

  const handleAddToCart = () => {
    const productDetails = {
      image: selectedImage,
      name: "Aston Band Advertisement",
      price: 23005,
      description: "Aston Bands are thin horizontal strips that appear during a program at the bottom of the screen.",
      details: obj
    };
    navigate('/cart', { state: { product: productDetails } });
  };

  return (
    <div className='px-4 py-5'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-8'>
        <div className='flex flex-col-reverse md:flex-row justify-center items-center gap-5'>
          <div className='flex md:flex-col gap-2'>
            <img 
              src={tvadd1} 
              alt='Ad 1' 
              className={`cursor-pointer w-30 h-30 md:w-50 md:h-50 rounded-md p-2 ${selectedImage === tvadd1 ? 'border-2' : ''}`} 
              onMouseOver={() => setSelectedImage(tvadd1)}
            />
            <img 
              src={tvadd2} 
              alt='Ad 2' 
              className={`cursor-pointer w-30 h-30 md:w-50 md:h-50 rounded-md p-2 ${selectedImage === tvadd2 ? 'border-2' : ''}`} 
              onMouseOver={() => setSelectedImage(tvadd2)}
            />
          </div>
          <div className='border-2 rounded-md p-2'>
            <img src={selectedImage} alt='Ad Large' className='h-64 md:h-96 w-auto rounded-md' />
          </div>
        </div>

        <div className='w-full lg:w-1/2 space-y-5'>
          <div className='flex flex-wrap gap-3'>
            {obj.map((curr, i) => (
              <div key={i} className='p-3 border-l-4 rounded-md border-[#004930] '>
                <h2 className='text-lg font-semibold'>{curr.name} <p className='text-primary text-sm'>{curr.nickname}</p></h2>
              </div>
            ))}
          </div>

          <p className='text-gray-700 text-sm md:text-base'>
            Aston Bands are thin horizontal strips that appear during a program at the bottom of the screen.
            The Aston Band duration per exposure is 10 seconds. For more details to place your advertisement on this platform,
            kindly contact us at <a href='' className='text-blue-500'>help@TheMediaAnt.com</a> or call us at
            <span className='font-bold'> 080-67415510</span>.
          </p>

          <div className='flex items-center gap-5'>
            <div className='border-2 rounded-md p-4'>
              <h1 className='text-lg font-bold'>Rack Rate</h1>
              <del className='text-gray-500 flex items-center'><FaRupeeSign />23,005/Per <span>Aston Band</span></del>
            </div>
            <button 
              className='cursor-pointer border-2 rounded-md py-7 px-5 bg-[#004930] text-white border-[#004930]'
              onClick={handleAddToCart}
            >
              Add To Bag
            </button>
          </div>
        </div>
      </div>

      <div className='mt-7'>
        <h1 className='text-center text-sm md:text-2xl font-bold'>Execution Details</h1>
        <SelectSection />
        
      </div>
    </div>
  );
}

export default Starplus;
