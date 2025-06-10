import React from 'react';
import NavbarAlt from '../Components/Header';
import Footer from '../Components/Footer/Footer';
import BlogsPage from '../Components/BlogPage/BlogsPage'; // ✅ Make sure this is present

function BlogSevenPage() {
  return (
    <>
      <NavbarAlt />
      <BlogsPage    
        title="Earn Money Online in India Without Investment | 10 Genuine Ways for 2025"
        Heading="Earn Money Online in India Without Investment – 10 Trusted Methods That Work"
        bottom="You don’t need to invest money to start earning online. All you need is a skill, some time, and a trusted platform like DigiSky.ai. Begin with simple freelance tasks, grow your reputation, and enjoy real income from the comfort of your home."
        bottomText="Start Earning from Home Today"
        para="Looking to earn money online in India without any investment? Discover 10 genuine ways to start earning from home as a student or beginner with DigiSky.ai."
        jobSections={[
          {
            title: '1. Freelancing on DigiSky.ai (No Fees to Join)',
            content: `DigiSky.ai is a trusted freelancing platform for beginners in India. You can register for free and start applying for jobs like:

• Content Writing
• Graphic Design
• Video Editing
• Voice Overs
• Data Entry

✔ No bidding wars
✔ No registration fee
✔ Real clients and projects`
          },
          {
            title: '2. Online Typing & Data Entry Jobs',
            content: `If you can type quickly and accurately, you can start earning by:

• Filling forms
• Capturing data from PDFs
• Typing scanned documents

Great for students and homemakers.`
          },
          {
            title: '3. Start a YouTube Channel',
            content: `No money required—just your phone camera. You can create content about:

• Study tips
• Daily life vlogs
• Finance, gaming, or education

Once you hit 1,000 subscribers and 4,000 watch hours, you can apply for YouTube AdSense.`
          },
          {
            title: '4. Content Writing on Freelance',
            content: `If you enjoy writing, you can earn by:

• Blogging
• Writing product reviews
• Website content
• Social media posts

Many clients on DigiSky.ai hire beginner writers with good grammar and research skills.`
          },
          {
            title: '5. Social Media Management',
            content: `Brands and small businesses need help with:

• Posting content
• Reels & captions
• Replying to DMs

If you're active on Instagram, this is a good skill to monetize.`
          },
          {
            title: '6. Online Tutoring for School Students',
            content: `Use platforms or offer private tuitions via Zoom or Google Meet. Subjects in demand:

• Math
• English
• Science
• Coding (for kids)

Start with your friends or relatives, then grow.`
          },
          {
            title: '7. Affiliate Marketing (No Product Needed)',
            content: `Promote other companies’ products and earn a commission when someone buys through your link. No money needed to start.

Popular affiliate programs:

• Amazon Associates
• Flipkart Affiliate
• Hosting & tech tools`
          },
          {
            title: '8. Sell Notes, Templates & Designs',
            content: `Design in Canva or PowerPoint and sell:

• Resume templates
• Instagram posts
• Study notes

Platforms like Gumroad, Payhip, or even WhatsApp groups work well for this.`
          },
          {
            title: '9. Participate in Online Surveys or Reviews',
            content: `Websites pay ₹10–₹200 for:

• Reviewing products
• Answering surveys
• Watching ads (low income but easy)

Reliable sites: Swagbucks, Ysense, etc.`
          },
          {
            title: '10. Become a Voice-Over Artist',
            content: `With a good voice and phone mic, you can:

• Narrate videos
• Record podcasts
• Do Hindi/English dubbing

Freelancers earn ₹500–₹5,000 per project.`
          }
        ]}
      />
      <Footer />
    </>
  );
}

export default BlogSevenPage;
