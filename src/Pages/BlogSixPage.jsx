import React from 'react';
import NavbarAlt from '../Components/Header';
import Footer from '../Components/Footer/Footer';
import BlogsPage from '../Components/BlogPage/BlogsPage';

function BlogSixPage() {
  return (
    <>
      <NavbarAlt />
      <BlogsPage title="How to Earn Online After 12th in India | Top 7 Genuine Ways"
        Heading="Why 12th Pass Students Are Looking for Online Income"
        bottom={
          <>
            Don’t wait for a degree to earn. With the right skills and guidance, you can start earning online after 12th today. Explore freelancing, try online jobs, and grow your income from the comfort of your home with{' '}
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
        bottomText="Start Your Earning Journey Today"
        para={
          <>
            Gone are the days when you had to wait for a degree to start earning. Today, the internet offers thousands of legit opportunities to earn online after 12th, even without experience or investment. If you're wondering how to make money online as a 12th pass student, you're in the right place.
            <br /><br />
            Whether you're waiting for college admission, saving for your goals, or just want financial freedom, online work gives you flexibility and real income from day one. Platforms like{' '}
            <a
              href="https://digisky.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline font-semibold"
            >
              DigiSky.ai
            </a>{' '}
            make it easy to get started.
          </>
        }
        jobSections={[
          {
            title: '1. Freelancing on Trusted Platforms like DigiSky.ai',
            content: (
              <>
                Freelancing is the best and safest way to earn online. You can start offering services like:
                <br />- Graphic Design
                <br />- Content Writing
                <br />- Video Editing
                <br />- Voice Over
                <br />- Data Entry
                <br /><br />
                <a
                  href="https://digisky.ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 underline font-semibold"
                >
                  DigiSky.ai
                </a>{' '}
                is a trusted Indian freelancing platform for beginners, where 12th pass students can easily register and start working on real projects.
              </>
            )
          },
          {
            title: '2. Start a YouTube Channel',
            content: `If you're good at speaking or explaining topics, try making videos on:
- Study tips
- Exam prep
- Gaming
- Reviews

With regular uploads and good SEO, YouTube monetization can be a great income stream.`
          },
          {
            title: '3. Become a Content Writer or Blogger',
            content: (
              <>
                If you love writing, you can write:
                <br />- Blog posts
                <br />- Product descriptions
                <br />- Social media captions
                <br /><br />
                Websites, agencies, and small businesses often hire beginner writers on platforms like{' '}
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
            )
          },
          {
            title: '4. Work from Home as a Social Media Manager',
            content: `Many small businesses look for young people to manage:
- Instagram pages
- Facebook groups
- Basic posting and replying

It’s an easy entry job with training available online.`
          },
          {
            title: '5. Online Tutoring or Homework Help',
            content: `If you're strong in subjects like Math, Science, or English, join platforms where you can teach school kids online. You’ll be surprised how much you can earn per hour.`
          },
          {
            title: '6. Affiliate Marketing',
            content: `Recommend products through your blog or social media and earn a commission when someone buys. Amazon, Flipkart, and other brands have affiliate programs that are free to join.`
          },
          {
            title: '7. Sell Digital Products or Templates',
            content: `If you know Canva or PowerPoint, create:
- Instagram post templates
- Resume templates
- Study notes or planners

Sell them on Gumroad or your own landing page.`
          },
          {
            title: '8. Freelancing on DigiSky.ai',
            content: (
              <p className="text-gray-700">
                If you’re good at anything—typing, social media, photo editing—you can find small projects on{' '}
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
          }
        ]}
      />
      <Footer />
    </>
  );
}

export default BlogSixPage;
