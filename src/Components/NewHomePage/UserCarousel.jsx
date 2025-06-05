import React, { useRef } from 'react';
import gggg from '../../assets/Images/gggg 1.png';
import jashanImg from '../../assets/Images/user1.png'; // replace with actual image path

const users = [
  { name: 'Jashan', role: 'Freelancer', image: jashanImg },
  { name: 'Manisha', role: 'Client' },
  { name: 'Manesh', role: 'Freelancer' },
  { name: 'Simriti', role: 'Client' },
  { name: 'Aarav', role: 'Client' },
  { name: 'Diya', role: 'Freelancer' },
  { name: 'Rohan', role: 'Client' },
];

function UserCarousel() {
  const scrollRef = useRef(null);

  return (
    <div className="bg-gradient-to-b from-green-950 to-black py-16 px-4 sm:px-8 md:px-16 lg:px-24 text-white">
      <h2 className="text-3xl font-bold text-center mb-10 tracking-wide">
        🌟 Meet Our Talent 🌟
      </h2>

      <div ref={scrollRef} className="overflow-x-auto scroll-smooth no-scrollbar">
        <div className="flex gap-8 min-w-max snap-x snap-mandatory px-2">
          {users.map((user, index) => (
            <div
              key={index}
              className="relative snap-start shrink-0 w-56 text-center p-6 rounded-3xl border border-green-700 shadow-2xl transition-transform hover:scale-105 overflow-hidden bg-green-900 flex flex-col items-center"
            >
              {/* Removed the big glasscircle image */}

              {/* Circular image area */}
              <div className="w-24 h-24 rounded-full border-2 border-green-700 flex items-center justify-center overflow-hidden bg-green-800 mb-4">
                <img
                  src={gggg}
                  alt="placeholder"
                  className="w-16 h-16 object-contain opacity-80"
                />
              </div>

              <h3 className="font-semibold text-lg">{user.name}</h3>
              <p className="text-green-300 mb-6 text-sm italic">{user.role}</p>

              {/* Centered button */}
              <button className="px-6 py-2 text-sm bg-gradient-to-r from-green-600 to-green-800 text-white rounded-full hover:from-green-500 hover:to-green-700 transition-all mx-auto">
                See Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default UserCarousel;
