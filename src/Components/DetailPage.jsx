import React from "react";
import { useLocation } from "react-router-dom";

import image3 from "./../assets/Images/Ellipse 151.png";
import imagesss from "./../assets/Images/Ellipse 70.png";
import women1 from "./../assets/Images/Ellipse 72.png";
import image0 from "./../assets/Images/Ellipse 161.png";
import image1 from "./../assets/Images/Ellipse 164.png";
import image2 from "./../assets/Images/Ellipse 167.png";
import image5 from "./../assets/Images/Ellipse 173.png";
import image6 from "./../assets/Images/Ellipse 193.png";
import image7 from "./../assets/Images/Ellipse 194.png";
import image8 from "./../assets/Images/Ellipse 190.png";
import image9 from "./../assets/Images/Ellipse 185.png";
import image10 from "./../assets/Images/Ellipse 184.png";
import image11 from "./../assets/Images/Ellipse 181.png";
import image12 from "./../assets/Images/Ellipse 176.png";

const detailCards = {
  "TV Channel Ad": [
    { name: "Alice Johnson", role: "TV Ad Manager", image: image3, description: "Expert in TV ad placements and strategy." },
    { name: "Robert Brown", role: "Media Buyer", image: image8, description: "Negotiates and purchases ad slots for clients." },
    { name: "Sophia Martinez", role: "Ad Producer", image: image10, description: "Creates compelling TV advertisements." }
  ],
  "Content Marketing": [
    { name: "Ethan Williams", role: "Content Strategist", image: image0, description: "Specialist in long-form content & blogging." },
    { name: "Mia Davis", role: "Copywriter", image: image1, description: "Expert in engaging and SEO-optimized content." },
    { name: "Noah Wilson", role: "Marketing Analyst", image: image2, description: "Analyzes content effectiveness and audience." }
  ],
  "Email Marketing": [
    { name: "Olivia Taylor", role: "Email Campaign Manager", image: image5, description: "Runs high-converting email campaigns." },
    { name: "James Anderson", role: "Automation Specialist", image: imagesss, description: "Expert in email sequences & automation." },
    { name: "Emma White", role: "Lead Nurturing Expert", image: image6, description: "Focuses on customer retention & conversion." }
  ],
  "Pay-per-click (PPC)": [
    { name: "Liam Green", role: "PPC Specialist", image: image7, description: "Manages Google Ads and Bing Ads campaigns." },
    { name: "Emily Clark", role: "Ad Optimization Expert", image: image8, description: "Improves ad performance & lowers costs." },
    { name: "Daniel Scott", role: "Keyword Researcher", image: image9, description: "Finds high-converting PPC keywords." }
  ],
  "Influencer Marketing": [
    { name: "Ava Adams", role: "Influencer Coordinator", image: image3, description: "Connects brands with the right influencers." },
    { name: "Benjamin Lee", role: "Social Media Strategist", image: image12, description: "Builds influencer-driven marketing plans." },
    { name: "Isabella Brown", role: "Brand Partnership Manager", image: image11, description: "Develops collaborations with creators." }
  ],

    "Affiliate Marketing": [
      { name: "Ava Adams", role: "Influencer Coordinator", image: image10, description: "Connects brands with the right influencers." },
      { name: "Benjamin Lee", role: "Social Media Strategist", image: image5, description: "Builds influencer-driven marketing plans." },
      { name: "Isabella Brown", role: "Brand Partnership Manager", image: image1, description: "Develops collaborations with creators." }
    ],
    "Video Marketing": [
      { name: "Ava Adams", role: "Influencer Coordinator", image: image2, description: "Connects brands with the right influencers." },
      { name: "Benjamin Lee", role: "Social Media Strategist", image: image3, description: "Builds influencer-driven marketing plans." },
      { name: "Isabella Brown", role: "Brand Partnership Manager", image: image9, description: "Develops collaborations with creators." }
    ],
    "Marketing Analytics": [
      { name: "Ava Adams", role: "Influencer Coordinator", image: imagesss, description: "Connects brands with the right influencers." },
      { name: "Benjamin Lee", role: "Social Media Strategist", image: image12, description: "Builds influencer-driven marketing plans." },
      { name: "Isabella Brown", role: "Brand Partnership Manager", image: image1, description: "Develops collaborations with creators." }
    ],
    "Marketing Automation": [
      { name: "Ava Adams", role: "Influencer Coordinator", image: image10, description: "Connects brands with the right influencers." },
      { name: "Benjamin Lee", role: "Social Media Strategist", image: image8, description: "Builds influencer-driven marketing plans." },
      { name: "Isabella Brown", role: "Brand Partnership Manager", image: image5, description: "Develops collaborations with creators." }
    ],
    "Performance Marketer": [
      { name: "Ava Adams", role: "Influencer Coordinator", image: image11, description: "Connects brands with the right influencers." },
      { name: "Benjamin Lee", role: "Social Media Strategist", image: image0, description: "Builds influencer-driven marketing plans." },
      { name: "Isabella Brown", role: "Brand Partnership Manager", image: image1, description: "Develops collaborations with creators." }
    ],
    "Fackbook Ads": [
      { name: "Ava Adams", role: "Influencer Coordinator", image:image6, description: "Connects brands with the right influencers." },
      { name: "Benjamin Lee", role: "Social Media Strategist", image: imagesss, description: "Builds influencer-driven marketing plans." },
      { name: "Isabella Brown", role: "Brand Partnership Manager", image: image9, description: "Develops collaborations with creators." }
    ],
    "Linkdin Ads": [
      { name: "Ava Adams", role: "Influencer Coordinator", image: image8, description: "Connects brands with the right influencers." },
      { name: "Benjamin Lee", role: "Social Media Strategist", image: image7, description: "Builds influencer-driven marketing plans." },
      { name: "Isabella Brown", role: "Brand Partnership Manager", image: image5, description: "Develops collaborations with creators." }
    ],
    "Social Media Marketing": [
      { name: "Ava Adams", role: "Influencer Coordinator", image: image2, description: "Connects brands with the right influencers." },
      { name: "Benjamin Lee", role: "Social Media Strategist", image: image12, description: "Builds influencer-driven marketing plans." },
      { name: "Isabella Brown", role: "Brand Partnership Manager", image: image3, description: "Develops collaborations with creators." }
    ],
    "Search Engine Optimization": [
      { name: "Ava Adams", role: "Influencer Coordinator", image: image11, description: "Connects brands with the right influencers." },
      { name: "Benjamin Lee", role: "Social Media Strategist", image: image0, description: "Builds influencer-driven marketing plans." },
      { name: "Isabella Brown", role: "Brand Partnership Manager", image: image1, description: "Develops collaborations with creators." }
    ]
  
  
};

function DetailPage() {
  const location = useLocation();
  const category = location.state?.category;

  if (!category) {
    return <h1 className="text-center text-xl font-bold mt-5">No Details Available</h1>;
  }

  return (
    <div className="p-5">
      <h1 className="text-3xl font-bold text-center mb-5">{category} Details</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {detailCards[category]?.map((profile, index) => (
          <div key={index} className="p-4 bg-white shadow-lg rounded-lg text-center">
            <img src={profile.image} alt={profile.name} className="w-24 h-24 mx-auto rounded-full mb-3" />
            <h3 className="text-lg font-semibold">{profile.name}</h3>
            <p className="text-sm text-gray-600">{profile.role}</p>
            <p className="text-gray-700 mt-2">{profile.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DetailPage;
