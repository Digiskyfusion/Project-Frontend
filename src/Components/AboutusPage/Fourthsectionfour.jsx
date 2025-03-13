import React from 'react';
import { Pencil, Info } from 'lucide-react'; // Importing a pencil and info icon
import { IoIosArrowDown } from "react-icons/io";
import image from './../../assets/Images/-a-sleek-and-modern-corporate-office-with-a-premiu (7).png';


function Fourthsectionfour() {
  return (
    <div className="p-8">
      <div className="flex flex-col lg:flex-row items-center justify-between   rounded-xl  ">
        
        {/* Left Side - Text & Icons */}
        <div className="flex flex-col gap-6 lg:w-1/2 bg-gradient-to-br from-[#004930] to-[#006F4A] text-white px-8 py-10 h-full rounded-l-xl">
          <h1 className="text-3xl font-bold relative tracking-wide">
          Where Talent Meets Opportunity
          </h1>
          
          {/* Features List - Details & Summary */}
          {[ 
            { title: 'Swipe. Click. Connect.', summary: ' A seamless interface designed for productivity.' },
            { title: 'Talk. Collaborate. Deliver.', summary: ' Instant messaging for smooth communication.' },
            { title: ' Shine Brighter, Get Noticed.', summary: 'Boost your profile and attract dream clients.' },
            { title: 'Earn Securely. Get Paid On Time.', summary: 'Transparent transactions, zero stress.' },
            { title: 'Skill Up. Level Up. Succeed.', summary: 'Exclusive resources to help you grow and stay ahead.' }
          ].map((item, index) => (
            <details key={index} className="p-4 transition duration-300 bg-white/10 backdrop-blur-lg rounded-lg hover:bg-white/20 cursor-pointer">
              <summary className="text-xl font-semibold flex items-center gap-2 cursor-pointer">
                <Pencil className="w-6 h-6 text-white transition-transform duration-300 hover:scale-110" />
                {item.title}
                <IoIosArrowDown className="w-4 h-4 text-white absolute right-2 top-2 cursor-pointer hover:text-gray-300" />
              </summary>
              <p className="text-gray-200 mt-2 italic leading-relaxed">{item.summary}</p>
            </details>
          ))}
        </div>

        {/* Right Side - Image */}
        <div className=" w-full lg:w-[53.8%] h-full  flex items-center justify-center  ">
          <img src={image} alt="Office" className="w-full h-full  object-cover   " />
        </div>
        
      </div>
    </div>
  );
}

export default Fourthsectionfour;
