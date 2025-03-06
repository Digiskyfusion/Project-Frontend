import React from "react";
import star from "./../assets/Images/starplus.png";
import { LuPhoneCall } from "react-icons/lu";

function Advertising({image,first,firstone,second,secondone,about,para}) {
  return (
    <>
    <div className="p-3">
    <h1 className="text-sm md:text-xl lg:text-3xl font-bold text-center">Advertising in STAR Plus</h1>
    <div className="mt-4">
      <div className="p-4 bg-[#004930] rounded-t-2xl flex flex-col lg:flex-row gap-5 text-white items-center ">
        
        {/* Image */}
        <div className="flex-shrink-0  mx-auto lg:mx-0">
          <img src={image} alt="Star Plus Logo" className="w-full h-full object-contain" />
        </div>

        {/* First Content Section */}
        <div className="border-r-4 border-white pr-6 flex flex-col justify-center items-center gap-4 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <LuPhoneCall className="text-xl" />
            <div>
              <h1 className="text-xl font-bold">{first}</h1>
              <p className="text-sm">{firstone}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <LuPhoneCall className="text-xl" />
            <div>
              <h1 className="text-xl font-bold">{second}</h1>
              <p className="text-sm">{secondone}</p>
            </div>
          </div>
        </div>

        {/* Second Content Section */}
        <div className="px-5 py-2 w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-lg font-semibold mb-2">{about}</h1>
          <p className="text-sm leading-relaxed">
            {para}
          </p>
        </div>
        
      </div>
    </div>



    <div className="w-full  mx-auto border-2 rounded-b-2xl py-4 px-6 text-center border-[#004930]">
  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
    
    <p className="border-r border-[#004930] pr-5 font-semibold text-sm md:text-base">Key Insights</p>

    <div className="border-r border-[#004930] pr-5 last:border-r-0">
      <p className="font-semibold text-sm md:text-base">PRIME TIME</p>
      <p className="text-xs md:text-sm ">18:00 - 24:00</p>
    </div>

    <div className="border-r border-[#004930] pr-5 last:border-r-0">
      <p className="font-semibold text-sm md:text-base">Viewership Peak</p>
      <p className="text-xs md:text-sm">20:00 - 22:00</p>
    </div>

    <div className="border-r border-[#004930] pr-5 last:border-r-0">
      <p className="font-semibold text-sm md:text-base">Avg. Ad Cost</p>
      <p className="text-xs md:text-sm">$5000 per slot</p>
    </div>

    <div className="pr-5 last:border-r-0">
      <p className="font-semibold text-sm md:text-base">Top Shows</p>
      <p className="text-xs md:text-sm">Anupamaa, Yeh Rishta...</p>
    </div>
    
  </div>
</div>


</div>
    </>
  );
}

export default Advertising;
