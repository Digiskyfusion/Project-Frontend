import React from 'react'
import pic from './../assets/Images/a-creative-e-commerce-concept-featuring-a-miniatur(1) 1.png';

function ProjectSection() {
  return (
    <div className='px-5 py-5 md:px-10'>
    <div className='md:flex md:justify-between'>

    {/* {/ content section /} */}
    <div className='px-2 md:px-0'>
        <h1 className='font-bold text-2xl md:text-4xl lg:text-7xl'>Explore and purchase projects</h1>
        <p className='mt-8 lg:text-2xl'>Kickstart essential tasks instantly with Project Catalog</p>
        <p className='mt-8 text-xl lg:w-[80%]'>Want to skip the guesswork? Browse pre-planned projects crafted by experts who know them best.</p>
        <p className='mt-8 text-xl lg:w-[80%]'>Skip the job posting and shortlisting—simply browse, purchase, and start immediately with clear expectations from the get-go.</p>
        <button className='md:px-9 px-7 py-1 md:py-2 border-2 border-[#004930] rounded-full mt-5 cursor-pointer 
  transition duration-300 ease-out 
  hover:bg-[#004930] hover:text-white hover:scale-90 hover:shadow-lg'>
  Explore projects
</button>
    </div>
      


      {/* {/ image section /} */}
      <div className='relative flex justify-center items-center mt-7 md:mt-0'>
        <img src={pic} alt=' ' className=' absolute' />
        <img src={pic} alt=' ' className=' absolute w-[90%]' />
        <img src={pic} alt=' ' className='absolute w-[80%]' />
        <img src={pic} alt=' ' className='absolute w-[70%]' />
        <img src={pic} alt=' ' className='' />
      </div>
    </div>

    </div>
  )
}

export default ProjectSection
