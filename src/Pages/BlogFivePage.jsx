import React from 'react';
import NavbarAlt from '../Components/Header';
import Footer from '../Components/Footer/Footer';
import BlogsPage from '../Components/BlogPage/BlogsPage';

function BlogFivePage() {
  return (
    <>
      <NavbarAlt />
      <BlogsPage  title={
    <p>
      Trusted Freelancing Platform for Beginners in India | Start with{' '}
      <a
        href="https://digisky.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline font-semibold"
      >
        DigiSky.ai
      </a>
    </p>
  }
      
        Heading="Why Beginners Are Choosing Freelancing in 2025"
        bottom={
          <>
            Freelancing doesn't need to be complicated or risky. With{' '}
            <a
              href="https://digisky.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-semibold"
            >
              DigiSky.ai
            </a>
            , India's most trusted freelancing platform for beginners, you can start your online career with guidance, safety, and success. Whether you’re looking to earn a side income or build a full-time freelancing business, this is your chance.
          </>
        }
        bottomText="Your Freelancing Journey Starts Now"
        para={
          <>
            Freelancing is no longer just a side hustle – it's a full-time career opportunity, especially in India. With increasing demand for digital services and flexible work, millions of beginners are turning to freelancing to start earning from home. The best part? You don’t need years of experience to get started – just the right platform like{' '}
            <a
              href="https://digisky.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-semibold"
            >
              DigiSky.ai
            </a>
            .
          </>
        }
        jobSections={[
          {
            title: '1. What Makes DigiSky.ai the Most Trusted Freelancing Platform for Beginners',
            content: (
              <>
                At{' '}
                <a
                  href="https://digisky.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline font-semibold"
                >
                  DigiSky.ai
                </a>
                , we’ve created an environment specifically for new freelancers to feel safe, supported, and successful. Here's why{' '}
                <a
                  href="https://digisky.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline font-semibold"
                >
                  DigiSky.ai
                </a>{' '}
                stands out:
              </>
            )
          },
          {
            title: '2. Beginner-Friendly Interface',
            content: `No complicated bidding wars or confusing dashboards. Everything is designed for ease.`
          },
          {
            title: '3. Verified Clients & Real Projects',
            content: `We manually verify projects to ensure authentic job postings and timely payments.`
          },
          {
            title: '4. Zero Commission for First Projects',
            content: (
              <>
                Unlike big platforms that cut 20–30%,{' '}
                <a
                  href="https://digisky.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline font-semibold"
                >
                  DigiSky.ai
                </a>{' '}
                allows zero commission on your first few jobs.
              </>
            )
          },
          {
            title: '5. Indian Platform, Indian Support',
            content: `Built in India, for Indian freelancers. Get support in Hindi & English when needed.`
          },
          {
            title: '6. How to Get Your First Freelance Job as a Beginner',
            content: (
              <>
                Here’s a step-by-step guide to getting started:
                <br />
                <br />- Create your free profile on{' '}
                <a
                  href="https://digisky.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline font-semibold"
                >
                  DigiSky.ai
                </a>
                <br />- Add your skills (like graphic design, content writing, data entry, etc.)
                <br />- Browse beginner-friendly projects
                <br />- Apply with a simple, honest proposal
                <br />- Deliver quality work & get rated
                <br />- Withdraw earnings easily to your bank account
                <br />
                <br />
                Even if you’ve never worked online before, our help center and video tutorials guide you through each step.
              </>
            )
          },
          {
            title: '7. Skills That Are in High Demand for New Freelancers',
            content: (
              <>
                - Content Writing & Blogging <br />
                - Graphic Design <br />
                - Social Media Management <br />
                - Video Editing <br />
                - WordPress & Web Development <br />
                - Data Entry <br />
                - Voice-Over (Hindi/English) <br />
                <br />
                <a
                  href="https://digisky.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline font-semibold"
                >
                  DigiSky.ai
                </a>{' '}
                also offers free tips and learning resources to help you grow your skills.
              </>
            )
          }
        ]}
      />
      <Footer />
    </>
  );
}

export default BlogFivePage;
