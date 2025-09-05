import React from "react";
import pencil from './../../assets/Images/a-modern--minimalistic--and-stylish-ui-illustratio (1) 1.png';

function SquareCards() {
  const steps = [
    { id: 1, title: "Sign Up", desc: " Create your profile and become part of our thriving community", img: pencil },
    { id: 2, title: "Browse Projects", desc: " Find the best fit for your skills or business needs.", img: pencil },
    { id: 3, title: " Connect & Collaborate ", desc: " Communicate, set expectations, and start working.", img: pencil },
    // { id: 4, title: "Get Paid", desc: "Secure payments for your work", img: pencil },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-7">
      {steps.map((step) => (
        <div
          key={step.id}
          className="relative flex flex-col items-center text-center shadow-2xl rounded-xl px-6 py-8 w-72 md:w-80 bg-white"
        >
          {/* {/ Step Number /} */}
          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-[#004930] text-white px-4 py-2 rounded-full text-lg font-semibold shadow-md">
            {step.id}
          </div>

          {/* {/ Image /} */}
          <img loading="lazy" src={step.img} alt={step.title} className="w-16 md:w-20 mb-4" />

          {/* {/ Title /} */}
          <p className="text-lg md:text-2xl font-semibold">{step.title}</p>

          {/* {/ Description /} */}
          <p className="text-sm md:text-lg text-gray-600">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default SquareCards;
