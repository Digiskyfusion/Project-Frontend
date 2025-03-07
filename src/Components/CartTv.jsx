import React from 'react';
import { useLocation } from 'react-router-dom';
import Footer from './Footer';
import { FaRupeeSign } from "react-icons/fa";
function CartTv() {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) return <h1>No product in cart</h1>;

  return (
    <>
    <div className='p-5'>
      <h1 className='text-2xl font-bold'>Cart</h1>
      <div className='flex gap-5 mt-5'>
        <img src={product.image} alt={product.name} className='h-32 w-32 rounded-md' />
        <div>
          <h2 className='text-lg font-semibold'>{product.name}</h2>
          <p className='text-gray-600'>{product.description}</p>
          <p className='font-bold text-lg flex items-center'><FaRupeeSign /> {product.price}</p>
        </div>
      </div>
    </div>
    <Footer />
    </>

  );
}

export default CartTv;
