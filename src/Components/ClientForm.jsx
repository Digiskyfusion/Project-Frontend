import React from 'react'
import pic from './../assets/Images/Ellipse 70.png';
import Dashboard from './Dashboard';
import DashboardSecond from './DashboardSecond';

function ClientForm() {
  return (
    <>

    <div className='flex'>

        <div>
            <Dashboard />
        </div>

        <div className='flex-1'>

            <DashboardSecond />


             {/* {/ Content Section /} */}
                        <div className='flex flex-wrap gap-6 bg-[#EBEEF2] px-6 md:px-10 py-6'>
            
                        {/* {/ Freelancer Details Form /} */}
                        <div className='bg-[#FFFFFF] px-6 py-6 rounded-xl md:px-10 w-full md:w-3/5'>
                            <h1 className='text-lg md:text-2xl font-semibold'>Client Details</h1>
                            <form className='mt-4'>
            
                            {/* {/ Account Type /} */}
                            <div className='mb-4'>
                                <label className='font-medium'>Account Type</label>
                                <input type='text' placeholder='Client' className='w-full border-2 border-black outline-0 px-5 py-2 rounded-xl' />
                            </div>
            
                            {/* {/ Name and Email /} */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                <div>
                                <label className='font-medium'>Full Name</label>
                                <input type='text' placeholder='John Doe' className='w-full border-2 border-black outline-0 px-5 py-2 rounded-xl' />
                                </div>
                                <div>
                                <label className='font-medium'>Email</label>
                                <input type='email' mailto:placeholder='johndoe@example.com' className='w-full border-2 border-black outline-0 px-5 py-2 rounded-xl' />
                                </div>
                            </div>
            
                            {/* {/ Phone and Address /} */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                                <div>
                                <label className='font-medium'>Phone Number</label>
                                <input type='text' placeholder='+1234567890' className='w-full border-2 border-black outline-0 px-5 py-2 rounded-xl' />
                                </div>
                                <div>
                                <label className='font-medium'>Address</label>
                                <input type='text' placeholder='123 Street, City' className='w-full border-2 border-black outline-0 px-5 py-2 rounded-xl' />
                                </div>
                            </div>
            
                            {/* {/ Skills and Experience /} */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                                <div>
                                <label className='font-medium'>Skills</label>
                                <input type='text' placeholder='Web Development' className='w-full border-2 border-black outline-0 px-5 py-2 rounded-xl' />
                                </div>
                                <div>
                                <label className='font-medium'>Experience</label>
                                <input type='text' placeholder='5 Years' className='w-full border-2 border-black outline-0 px-5 py-2 rounded-xl' />
                                </div>
                            </div>
            
                            {/* {/ portfolio and Experience /} */}
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-4'>
                                <div>
                                <label className='font-medium'>Skills</label>
                                <input type='text' placeholder='Web Development' className='w-full border-2 border-black outline-0 px-5 py-2 rounded-xl' />
                                </div>
                                <div>
                                <label className='font-medium'>Experience</label>
                                <input type='text' placeholder='5 Years' className='w-full border-2 border-black outline-0 px-5 py-2 rounded-xl' />
                                </div>
                            </div>
            
                            {/* {/ Upload Button /} */}
                            <div className='mt-6'>
                                <button className='bg-[#004930] text-white px-6 py-2 rounded-full md:px-8 hover:bg-[#003720] transition-all'>
                                Upload
                                </button>
                            </div>
            
                            </form>
                        </div>
            
                        {/* {/ Freelancer Profile Section /} */}
                        <div className='bg-[#FFFFFF] px-6 py-6 md:py-20 rounded-xl w-full md:w-1/3 text-center shadow-lg'>
                            <div className='border-b-2 border-gray-300 pb-6 md:pb-15'>
                            <img src={pic} alt='Profile' className='w-24 h-24 mx-auto rounded-full object-cover' />
                            <a href='#' className='mt-3 inline-block' >Chnage Profile Image</a>
                            </div>
            
                            <div className='mt-4 md:mt-10'>
                            <h1 className='text-lg font-semibold'>Bio</h1>
                            <p className='text-gray-600 mt-2 text-sm'>
                                Lorem Ipsum is not simply random text. It has roots in classical Latin literature from 45 BC, making it over 2000 years old.
                            </p>
                            </div>
                        </div>
            
                        </div>
        </div>
    </div>      
    </>
  )
}

export default ClientForm
