import React from 'react'
import NavbarAlt from '../Components/Header'
import Footer from '../Components/Footer/Footer'
import BlogsPage from '../Components/BlogPage/BlogsPage'
function BlogTwoPage() {
  return (
    <>
     <NavbarAlt />
  <BlogsPage Heading=" Freelancing in 2025 – A Booming Online Career Option
" bottom={ 
  <>
    Whether you're just starting out or an experienced professional, there’s a freelance platform for you. For Indian freelancers,{" "}
    <a 
      href="https://digisky.ai" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="text-blue-600 underline font-semibold"
    >
      DigiSky.ai
    </a>{" "}
    is an ideal place to grow your portfolio and find genuine clients. Explore, register, and start earning online today.
  </>
}
 bottomText=" Choose the Right Freelance Platform for Your Skills"  para="Freelancing is no longer a side hustle—it's a full-time career for millions. Whether you're a 12th pass student, college graduate, or professional, freelancing platforms offer you the chance to work with clients across the world. Here are the best platforms to start with in 2025.
"
    jobSections={[
      {
  title: "1. DigiSky.ai (India's Growing Talent Marketplace)",
  content: (
    <div className="space-y-1">
      <ul className="list-disc pl-5 text-gray-700">
        <li>Great for beginners & students</li>
        <li>Easy project bidding system</li>
        <li>Blogging and client interaction features</li>
        <li>Secure payments</li>
      </ul>
      <p className="font-semibold mt-2">
        <span className="text-black">Best For:</span> Indian freelancers, digital marketers, designers, developers, writers.
      </p>
    </div>
  )
},

    {
  title: "2. Fiverr",
  content: (
    <div className="space-y-1">
      <ul className="list-disc pl-5 text-gray-700">
        <li>Create service "gigs" starting at $5</li>
        <li>Quick tasks, short projects</li>
        <li>Global buyer reach</li>
      </ul>
      <p className="font-semibold mt-2">
        <span className="text-black">Best For:</span> Designers, voice artists, editors, writers.
      </p>
    </div>
  )
},

 {
  title: "3. Upwork",
  content: (
    <div className="space-y-1">
      <ul className="list-disc pl-5 text-gray-700">
        <li>Suitable for professionals</li>
        <li>Long-term projects and hourly jobs</li>
        <li>Skill certification options</li>
      </ul>
      <p className="font-semibold mt-2">
        <span className="text-black">Best For:</span> Developers, marketers, and experienced freelancers.
      </p>
    </div>
  )
},

      {
  title: "4. Freelancer.com",
  content: (
    <div className="space-y-1">
      <ul className="list-disc pl-5 text-gray-700">
        <li>Project-based and contest jobs</li>
        <li>Global clients</li>
        <li>Has a milestone payment system</li>
      </ul>
      <p className="font-semibold mt-2">
        <span className="text-black">Best For:</span> Writers, developers, logo designers.
      </p>
    </div>
  )
},

      {
  title: "5. Toptal",
  content: (
    <div className="space-y-1">
      <ul className="list-disc pl-5 text-gray-700">
        <li>Premium platform for top talent</li>
        <li>High-paying projects</li>
        <li>Strict screening process</li>
      </ul>
      <p className="font-semibold mt-2">
        <span className="text-black">Best For:</span> Experienced developers, designers, and finance experts.
      </p>
    </div>
  )
},

     {
  title: "6. Guru",
  content: (
    <div className="space-y-1">
      <ul className="list-disc pl-5 text-gray-700">
        <li>Flexible pricing models</li>
        <li>Workroom for client communication</li>
        <li>Portfolio showcase</li>
      </ul>
      <p className="font-semibold mt-2">
        <span className="text-black">Best For:</span> Tech professionals, writers, consultants.
      </p>
    </div>
  )
},

      {
  title: "7. PeoplePerHour",
  content: (
    <div className="space-y-1">
      <ul className="list-disc pl-5 text-gray-700">
        <li>Hourly jobs and fixed-price projects</li>
        <li>Popular in UK & Europe</li>
      </ul>
      <p className="font-semibold mt-2">
        <span className="text-black">Best For:</span> Web developers, SEO experts, marketers.
      </p>
    </div>
  )
},

    ]}
  />

    <Footer />
      
    </>
  )
}

export default BlogTwoPage
