

function Polo() {
  return (
    <div className="mt-6 p-5">
      <div className="bg-[#004930] rounded-md px-10 py-6 md:py-10 text-white overflow-hidden md:flex md:items-center  md:justify-between">
        {/* {/ Left Section - Title /} */}
        <div className="mb-4 md:mb-0 text-center md:text-start">
          <b className="md:text-2xl ">Our Brands</b>
        </div>

        {/* {/ Right Section - Infinite Scrolling Text /} */}
        <div className="relative w-full md:w-[50%]  overflow-hidden">
          <div className="flex gap-5 animate-marquee whitespace-nowrap">
            {/* {/ Duplicate Elements for Smooth Looping /} */}
            {Array(20)
              .fill("POLO")
              .map((item, index) => (
                <h1 key={index} className="text-lg md:text-2xl font-serif">
                  {item}
                </h1>
              ))}
          </div>
        </div>
      </div>

      {/* {/ Custom Animation in Tailwind /} */}
      <style>
        {`
          @keyframes marquee {
            from { transform: translateX(0%); }
            to { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            
            animation: marquee 15s linear infinite;
          }
        `}
      </style>
    </div>
  );
}

export default Polo;