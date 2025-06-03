import React from 'react'
import NavbarAlt from '../Components/Header'
import Footer from '../Components/Footer/Footer'
import BlogsPage from '../Components/BlogPage/BlogsPage'

function BlogZeroPage() {

  
  return (
    <>
    <NavbarAlt />
   <BlogsPage title="Discover the best online jobs in 2025. Work from home, earn real income, and find freelancing opportunities with platforms like DigiSky.ai." Heading="Why Online Jobs Are Booming in 2025" bottom="The future of work is online—and it's here to stay. Whether you're a student, beginner, or small business owner, DigiSky.ai helps you find legit work-from-home jobs and freelance projects easily. Sign up today, create your profile, and take your first step toward a flexible, fulfilling career." bottomText="Launch Your Online Career with DigiSky.ai" para={
    <>
      Online jobs have become the go-to career path for students, freshers, and professionals seeking flexibility and real income. Whether you’re a 10th or 12th pass student, in college, or simply looking for remote work, freelancing is now a trusted way to earn. Platforms like{" "}
      <a 
        href="https://www.digisky.ai" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-blue-600 font-semibold underline"
      >
        DigiSky.ai
      </a>{" "}
      make it easy to get started—even with zero experience.
    </>
  }
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

export default BlogZeroPage
