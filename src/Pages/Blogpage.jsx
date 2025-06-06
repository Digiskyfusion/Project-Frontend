import React from 'react'
import NavbarAlt from '../Components/Header'
import BlogPage from '../Components/BlogPage/Blog'
import Footer from '../Components/Footer/Footer'
// import BlogsPage from '../Components/BlogPage/BlogsPage'

function Blogpage() {
  return (
    <>
    <NavbarAlt />
   <div className='mt-20'>
     <BlogPage />
   </div>
    {/* <BlogsPage/> */}
    <Footer />
      
    </>
  )
}

export default Blogpage
