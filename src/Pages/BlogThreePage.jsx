import React from 'react'
import NavbarAlt from '../Components/Header'
import Footer from '../Components/Footer/Footer'
import BlogsPage from '../Components/BlogPage/BlogsPage'
function BlogThreePage() {
  return (
    <>
     <NavbarAlt />
  <BlogsPage Heading=" Can 10th Pass Students Work Online? Yes – Here's How
" bottom="Don’t wait for the “perfect job.” Start with small online jobs, build your skills, and gradually move to better-paying work. Platforms like *DigiSky.ai* give 10th pass students a chance to earn and grow from home.
" bottomText="Start Small, Grow Big – Your Online Career Begins Now"  para="Yes, even if you’ve completed only your 10th standard, there are many real online jobs you can start from home. Thanks to freelancing platforms like DigiSky.ai, students, job seekers, and homemakers can earn a stable income without needing a higher degree.

"
    jobSections={[
      {
  title: "1.  Data Entry Jobs",
  content: "Simple typing work, form filling, and document formatting. All you need is basic computer knowledge and typing speed."
},

    {
  title: "2. YouTube Thumbnail or Poster Designer",
  content:"Using free tools like Canva, you can create thumbnails, posters, and social media posts for clients."
},

 {
  title: "3. Online Product Listing Jobs",
  content: "Many small sellers on Flipkart, Meesho, and Amazon hire freelancers to upload product details and images."
},

      {
  title: "4. WhatsApp/Telegram Handling Jobs",
  content: "Manage group messages, respond to customer queries, and help with basic support tasks for online businesses."
  
},

      {
  title: "5.  Short Video Editing (Reels/YouTube Shorts)",
  content: "Use free editing apps to cut and create short videos. Many influencers and businesses need editors for daily content."
},

     {
  title: "6. Online Survey or Review Jobs",
  content:"Participate in surveys or give product reviews for websites. These are beginner-friendly jobs with small payouts but zero investment."
},

    {
  title: "7. Freelancing on DigiSky.ai",
  content: (
    <p className="text-gray-700">
      If you’re good at anything—typing, social media, photo editing—you can find small projects on{" "}
      <a
        href="https://digisky.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline font-semibold"
      >
        DigiSky.ai
      </a>
      . It's beginner-friendly and perfect for 10th pass users.
    </p>
  )
},


    ]}
  />

    <Footer />
      
    </>
  )
}

export default BlogThreePage
