import React from "react";

function SelectTv() {
  return (
    <div className="p-4 md:px-16 mt-3">
      <div className="md:flex md:justify-between items-center">
        <h1 className="text-xl font-semibold">Television Advertising</h1>

        <div className="flex flex-wrap gap-5 mt-3 md:mt-0">
          {/* Sort By Dropdown */}
          <div className="flex items-center space-x-2 border-2 border-black rounded-md px-3 py-1">
            <p className="text-gray-600 livvic-medium-f">Sort by:</p>
            <select className="rounded-md p-2 outline-none bg-transparent livvic-medium-b">
              <option>Top Searched</option>
              <option>Cartoon</option>
              <option>Movies</option>
            </select>
          </div>

          {/* Target Audience Dropdown with "New" Badge */}
          <div className="relative flex items-center space-x-2 border-2 border-black rounded-full px-3 py-1">
            <select className="rounded-full p-2 outline-none bg-transparent ">
              <option>TARGET AUDIENCE</option>
              <option>Cartoon</option>
              <option>Movies</option>
            </select>
            <p className="px-4 py-1 bg-[#004930] text-white rounded-full text-sm absolute top-0 right-0 transform -translate-y-1/2 translate-x-1/9">
              New
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SelectTv;
