import React from "react";
import message from './../../assets/Images/illustration-credit-card-icon 1.png';
import feature from './../../assets/Images/feature.png';
import feature2 from './../../assets/Images/feature2.png';
import feature3 from './../../assets/Images/feature3.png';





function Feature() {
  const steps = [

    { id: 1, title: "Payment status", desc: "Ensure fair payments and transparent transactions", img: message },
    { id: 2, title: "Seamless Chat", desc: "Communicate easily with clients and freelancers", img: feature },
    { id: 3, title: "Affordable Subscription Plans", desc: "Communicate easily with clients and freelancers", img: feature2 },
    // { id: 4, title: "Profile Visibility Enhancement", desc: " Increase your visibility and attract more clients", img: feature3 },

    // { id: 1, title: " Swipe. Click. Connect.", desc: " A seamless interface designed for productivity.", img: message },
    // { id: 2, title: "Earn Securely. Get Paid On Time.", desc: "Transparent transactions, zero stress.", img: message },
    // { id: 3, title: "Talk. Collaborate. Deliver. ", desc: " Instant messaging for smooth communication.", img: message },
    // { id: 4, title: "Profile Visibility Enhancement", desc: " Increase your visibility and attract more clients", img: message },

  ];

  return (
    <div className="flex flex-wrap justify-center gap-6 p-7">
      {steps.map((step) => (
        <div
          key={step.id}
          className="relative flex flex-col items-center text-center shadow-2xl rounded-xl px-6 py-8 w-72 md:w-80 bg-white"
        >

          {/* {/ Image /} */}
          <img src={step.img} alt={step.title} className="w-16 md:w-20 mb-4" />

          {/* {/ Title /} */}
          <p className="text-lg md:text-2xl font-semibold">{step.title}</p>

          {/* {/ Description /} */}
          <p className="text-sm md:text-lg text-gray-600">{step.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default Feature;
