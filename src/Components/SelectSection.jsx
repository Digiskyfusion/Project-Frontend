import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const SelectCard = ({ title, options, isOpen, toggleOpen }) => {
  return (
    <>
   
    <div className="bg-white pb-1 shadow-lg hover:shadow-2xl transition-all w-full sm:w-1/4">
      <div
        className="flex justify-between items-center bg-[#004930] text-white p-3 rounded-lg cursor-pointer"
        onClick={toggleOpen}
      >
        <h2 className="text-xl font-bold">{title}</h2>
        <IoIosArrowDown className={`transform transition-transform ${isOpen ? "rotate-180" : "rotate-0"}`} />
      </div>
      {isOpen && (
        <ul className="mt-3 ">
          {options.map((option, index) => (
            <li key={index} className="p-2 hover:bg-gray-100  border-b-2 ">
              {option.value}
              <p>{option.label}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
    </>
  );
};

function SelectSection() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleOpen = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const sections = [
    {
      title: "Creative Specifications",
      options: [
        { value: "width", label: " 365px" },
        { value: "height", label: "365px" },
        { value: "unit", label: " px" },
        { value: "dimension", label: "px" },
      ],
    },
    {
      title: "CREATIVE SPECIFICATIONS:",
      options: [
        { value: "red", label: "Red" },
        { value: "blue", label: "Blue" },
        { value: "green", label: "Green" },
        { value: "yellow", label: "Yellow" },
      ],
    },
    {
      title: "SOP",
      options: [
        { value: "arial", label: "Arial" },
        { value: "times", label: "Times New Roman" },
        { value: "courier", label: "Courier New" },
        { value: "verdana", label: "Verdana" },
      ],
    },
  ];

  return (
    <div className="flex flex-wrap gap-6 justify-center p-6">
      {sections.map((section, index) => (
        <SelectCard
          key={index}
          title={section.title}
          options={section.options}
          isOpen={openIndex === index}
          toggleOpen={() => toggleOpen(index)}
        />
      ))}
    </div>
  );
}

export default SelectSection;
