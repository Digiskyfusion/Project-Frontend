import React from 'react'
import NavbarAlt from '../Components/Header'
import Footer from '../Components/Footer/Footer'
import BlogsPage from '../Components/BlogPage/BlogsPage'
function BlogSixPage() {
  return (
    <>
     <NavbarAlt />
       <BlogsPage
      jobSections={[
        {
          title: "1.Freelance Writing – Start with Words",
          content:
            "Companies are always searching for talented writers to create blogs, ads, and product descriptions. At DigiSky.ai, clients post writing projects daily—perfect for beginners looking to build a portfolio.",
        },
        {
          title: "2. Graphic Designing – Creativity Meets Opportunity",
          content:
            "Freelance designers are in high demand as brands shift to digital. From logo design to social media graphics, DigiSky.ai connects creative minds with real clients.",
        },
        {
          title: "3. Digital Marketing – Promote & Profit",
          content:
            "Know how to grow Instagram pages or run Facebook ads? With DigiSky.ai, you can offer your marketing skills to businesses and get paid for driving results.",
        },
        {
          title: "4. Web Development – Code from Home",
          content:
            "Whether you know HTML, WordPress, or React, companies need developers for websites and apps. Start small on DigiSky.ai and grow your freelancing income over time.",
        },
        {
          title: "5. Virtual Assistant – Help Remotely",
          content:
            "From managing emails to scheduling meetings, virtual assistant jobs are ideal for 10th or 12th pass candidates looking for stable online work.",
        },
        {
          title: "6. Online Tutoring – Teach and Earn",
          content:
            "If you're good at academics, languages, or even hobbies like photography or design, online tutoring is a great option. DigiSky.ai offers flexible tutoring gigs you can do from home.",
        },
      ]}
    />
    
        <Footer />
          
      
    </>
  )
}

export default BlogSixPage
