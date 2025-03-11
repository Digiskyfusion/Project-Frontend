import React from 'react';
import { useLocation } from 'react-router-dom';
import { FaRupeeSign } from "react-icons/fa";

function CartTv() {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) 
    return (
      <div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-300'>
        <h1 className='text-2xl font-bold text-gray-700 bg-white px-6 py-3 rounded-lg shadow-md'>
          No product in cart
        </h1>
      </div>
    );

  return (
    <>
              <h1 className='md:text-4xl md:font-extrabold text-gray-900 text-center mb-8 mt-6'>🛒 Shopping Cart</h1>
 
    <div className='min-h-screen flex  bg-gradient-to-br from-gray-100 to-gray-300 p-5'>
    
      <div className='bg-white/80 backdrop-blur-md shadow-2xl max-h-max rounded-2xl border border-gray-200 p-8 max-w-lg transform transition-all duration-300 hover:scale-[1.02]'>


        <div className='flex gap-6 items-center'>
          <img  loading="lazy"
            src={product.image} 
            alt={product.name} 
            className='h-40 w-40 object-cover rounded-xl shadow-lg border border-gray-200'
          />
          <div>
            <h2 className='text-2xl font-bold text-gray-900'> {product.name}</h2>
            <p className='text-gray-600 text-sm mt-2 leading-relaxed'>{product.description}</p>
            <p className='font-extrabold text-2xl text-gray-900 flex items-center mt-4'>
              <FaRupeeSign className="mr-2 text-blue-600" /> {product.price}
            </p>
          </div>
        </div>

        <button className='mt-8 w-full bg-[#004930] text-white text-lg font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-[1.05] transition-all duration-300'>
          🛍️ Checkout Now
        </button>
      </div>
    </div>
    </>
  );
}

export default CartTv;
