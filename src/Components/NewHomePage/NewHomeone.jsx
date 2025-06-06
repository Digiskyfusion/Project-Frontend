import React, { useEffect, useRef } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter';

import imagefour from '../../assets/Images/a-3d-icon-of-a-person-climbing-stairs-or-holding-a 4.png';
import imageone from '../../assets/Images/bar-graph.png';
import imagethree from '../../assets/Images/handshake.png';
import imagetwo from '../../assets/Images/dm.png';

const initialCards = [
  {
    title: 'Reach Your Dream Career',
    desc: 'Explore top job opportunities and join hands with trusted companies across the globe.',
    icon: imageone,
  },
  {
    title: 'Drop a Message',
    desc: 'Have questions or ideas? Reach out anytime — we’re here to listen and help you grow.',
    icon: imagetwo,
  },
  {
    title: 'Let’s Work Together',
    desc: 'Partner with us to bring your vision to life — collaboration starts with a conversation.',
    icon: imagethree,
  },
  {
    title: 'Join a Thriving Network',
    desc: 'Connect with passionate professionals and unlock endless opportunities for growth and success.',
    icon: imagefour,
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function NewHomeone() {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.3 });

  useEffect(() => {
    if (isInView) {
      controls.start('show');
    } else {
      controls.start('hidden');
    }
  }, [isInView, controls]);

  return (
    <div className="flex items-center justify-center px-6 py-12 bg-white overflow-hidden eb-garamond">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-7xl">

        {/* ✅ Left Section (Cards) */}
        <motion.div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {initialCards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              className="group rounded-2xl p-5 bg-white cursor-pointer flex gap-4 items-center w-full
                border border-gray-200 shadow-[0_5px_0_#4caf50] 
                transition-all duration-300 ease-in-out transform
                hover:-translate-y-1 hover:shadow-[0_8px_0_#388e3c]
                active:translate-y-0 active:shadow-[0_4px_0_#2e7d32]
                hover:ring-2 hover:ring-green-300"
            >
              <img
                src={card.icon}
                alt={card.title}
                className="w-[75px] h-[75px] object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div>
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-700">
                  {card.title}
                </h3>
                <p className="text-sm mt-2 font-medium text-gray-600 group-hover:text-green-600">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* ✅ Right Section */}
        <motion.div
          className="flex flex-col justify-center px-4 mt-8 lg:mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h1 className="text-2xl sm:text-4xl font-bold leading-snug mb-4 text-gray-800">
            <Typewriter
              words={[
                'Take your work to the next level, it’s simple',
                'Turn your ideas into success',
                'Connect. Collaborate. Grow.'
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </h1>

          <p className="text-gray-600 mb-6 sm:text-xl text-base">
            <Typewriter
              words={[
                'Empower your ideas with the right platform and support.',
                'Collaborate, create, and grow without limitations.',
                'Success starts with just one step forward.'
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={40}
              deleteSpeed={30}
              delaySpeed={1800}
            />
          </p>

          <div className="sm:flex gap-4">
            <Link to="/registration">
              <button className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow-[0_4px_0_#2f855a] transform transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_6px_0_#064e3b] active:translate-y-0 active:shadow-[0_2px_0_#064e3b] cursor-pointer w-full">
                Create an account
              </button>
            </Link>

            <Link to="/discover">
              <button className="bg-white text-gray-800 px-6 py-2 rounded-lg font-semibold border border-gray-300 shadow-[0_4px_0_#a0aec0] transform transition-all duration-200 ease-in-out hover:-translate-y-1 hover:shadow-[0_6px_0_#a0aec0] active:translate-y-0 active:shadow-[0_2px_0_#a0aec0] cursor-pointer w-full mt-4 sm:mt-0">
                Discover how to Hire
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
