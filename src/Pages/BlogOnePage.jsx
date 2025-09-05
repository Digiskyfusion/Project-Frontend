import React from 'react'
import NavbarAlt from '../Components/Header'
import Footer from '../Components/Footer/Footer'
import BlogsPage from '../Components/BlogPage/BlogsPage'

function BlogOnePage() {
  return (
    <>
     <NavbarAlt />
       <BlogsPage title="Find the best online jobs for 12th pass students in 2025. Work from home, earn money, and build your career with freelancing platforms like DigiSky.ai" Heading=" Can You Get Online Jobs After 12th? Yes – Here's How" bottom={
  <>
    Online jobs are a real opportunity for 12th pass students to earn and gain experience. Use trusted platforms like{" "}
    <a
      href="https://digisky.ai"
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 underline font-semibold"
    >
      DigiSky.ai
    </a>{" "}
    to find work and start your online journey.
  </>
} bottomText=" You Don't Need a Degree to Start Earning"  para="Gone are the days when you needed a college degree to start working. In 2025, even 12th pass students can earn a good income from home through online jobs. In this article, we’ll list the top online job options available for you right now."
  jobSections={[
    {
      title: "1.Data Entry Jobs – Simple & Flexible Work",
      content:
        "Data entry jobs require basic typing skills and attention to detail. They're perfect for beginners and available on platforms like DigiSky.ai.",
    },
    {
      title: "2.Online Customer Support – Help People from Home",
      content:
        "Customer support roles are in demand. All you need is good communication skills and a stable internet connection.",
    },
    {
      title: "3. Social Media Posting Jobs",
      content:
        "If you’re active on Instagram or Facebook, you can earn by managing social media pages for small businesses.",
    },
    {
      title: "4.Virtual Assistant for Startups",
      content:
        "Many startups need virtual assistants for simple tasks like replying to emails, managing files, or scheduling posts.",
    },
    {
      title: "5.Freelancing – Explore Your Talent",
      content:
        "From designing to writing or editing videos, if you have a skill, you can earn as a freelancer. DigiSky.ai is a trusted platform for 12th pass freelancers.",
    },
    {
      title: "6. Online Survey & Review Jobs",
      content:
        "Many websites pay users for giving product reviews or filling surveys. It’s not high income but easy for students.",
    },
  ]}
/>
    
        <Footer />
      
    </>
  )
}

export default BlogOnePage
