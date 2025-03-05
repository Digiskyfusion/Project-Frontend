
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

import axios from "axios";
import  { useEffect, useState } from "react";
import {  Link, useNavigate } from "react-router-dom";


function FreelancerClientForm() {
  const [activeForm, setActiveForm] = useState("freelancer");
  const navigate= useNavigate()
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <h1 className="text-center text-xl text-black font-bold md:text-2xl">Digisky</h1>
      <p className="text-center">Please sign up to continue</p>
      
      <div className="flex justify-center space-x-4">
        <button
          className={`py-2 px-4 font-semibold rounded-md cursor-pointer ${
            activeForm === "freelancer" ? "text-black underline" : "text-gray-700"
          }`}

        >
          Freelancer
        </button>
        <button
          className={`py-2 px-4 font-semibold rounded-md cursor-pointer ${
            activeForm === "client" ? "text-black underline" : "text-gray-700"
          }`}
          onClick={() => navigate("/client")}
        >
          Client
        </button>
      </div>

      {activeForm ===  "freelancer" && <FreelancerForm /> }
    </div>
  );
}

function FreelancerForm() {
  const [formData, setFormData] = useState({
    freelancerId: "",
    categoryId: "",
    subcategory: "",
    profileImage: "",
    date_of_birth: "",
    govt_id_type: "",
    govt_id_number: "",
    govt_id_image: "",
    address: "",
    country: "",
    verified_status: "",
    verification_date: "",
    experience_years: "",
    portfolio_link: "",
    resume: "",
    certifications: "",
    languages: "",
  });






  return (
    <div>

    <div>
    
            <form className=" bg-white p-6 rounded-lg shadow-md space-y-4">
        <h2 className="text-2xl font-bold mb-4 text-center">Freelancer Details</h2>
    
        {/* {/ {/ {/ {/ <!-- Freelancer Details --> /} /} /} /} */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block font-medium">Freelancer id</label>

                <input type="text" className="w-full p-2 border rounded-md"  name="freelancerId" placeholder="Enter Freelancer id"  />

                <input type="text" className="w-full p-2 border rounded-md"   name="freelancerId" placeholder="Enter Freelancer id"  />

            </div>
            <div>
                <label className="block font-medium">Category ID</label>
                <input type="text" className="w-full p-2 border rounded-md" name="categoryId" placeholder="Enter Category ID" />
            </div>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div>
                <label className="block font-medium">Subcategory</label>
                <input type="text" className="w-full p-2 border rounded-md" name="subcategory" placeholder="Enter Subcategory"  />
            </div>
            <div>
            <label className="block font-medium">Profile Image</label>
            <input type="file" className="w-full p-2 border rounded-md" name="profile_Image"  />
        </div>
        </div>
    
      
    
        <div>
            <label className="block font-medium">Date of Birth</label>
            <input type="date" className="w-full p-2 border rounded-md" name="date_of_birth"  />
        </div>
    
        {/* {/ {/ {/ {/ <!-- Verification Details --> /} /} /} /} */}
        <h3 className="text-xl font-semibold mt-4">Verification Details</h3>
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block font-medium">Govt Id Type</label>
                <input type="text" className="w-full p-2 border rounded-md" name="govt_id_type" placeholder="Enter Aadhaar Number"  />
            </div>
            <div>
                <label className="block font-medium">Govt. ID Number</label>
                <input type="text" className="w-full p-2 border rounded-md" name="govt_id_number" placeholder="Enter Govt. ID Number"  />
            </div>
        </div>
    
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label className="block font-medium">Govt. ID Image </label>
            <input type="file" name="govt_id_image" className="w-full p-2 border rounded-md"  />
        </div>
        <div>
            <label className="block font-medium">Address</label>
            <textarea className="w-full p-2 border rounded-md resize-none" name="address" rows="1" placeholder="Enter Address" ></textarea>
        </div>
        </div>
    
        
    
       
    
       
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
        <div>
            <label className="block font-medium">Country</label>
            <select className="w-full p-2 border rounded-md" name="country" >
                <option>Select Country</option>
                <option>USA</option>
                <option>India</option>
                <option>UK</option>
                <option>Canada</option>
            </select>
        </div>
    
    
            <div>
                <label className="block font-medium">Verification Status</label>
                <select className="w-full p-2 border rounded-md" name="verified_status" >
                    <option>Pending</option>
                    <option>Verified</option>
                    <option>Rejected</option>
                </select>
            </div>
           
        </div>
        <div>
                <label className="block font-medium">Verification Date</label>
                <input type="date" className="w-full p-2 border rounded-md" name="verification_date"  />
            </div>
    
        {/* {/ {/ {/ {/ <!-- Professional Details --> /} /} /} /} */}
        <h3 className="text-xl font-semibold mt-4">Professional Details</h3>
    
    
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label className="block font-medium">Experience (Years)</label>
            <input type="number" name="experience_years" className="w-full p-2 border rounded-md" placeholder="Enter Experience" />
        </div>
        <div>
            <label className="block font-medium">Portfolio Link</label>
            <input type="url" name="portfolio_link" className="w-full p-2 border rounded-md" placeholder="Enter Portfolio Link" />
        </div>
        </div>
    
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label className="block font-medium">Resume</label>
            <input type="file" name="resume" className="w-full p-2 border rounded-md"  />
        </div>
        <div>
            <label className="block font-medium">Certificate</label>
            <input type="file" name="certifications" className="w-full p-2 border rounded-md"  />
        </div>
        </div>
    
    
        <div>
            <label className="block font-medium">Languages</label>
            <input type="text" name="languages" className="w-full p-2 border rounded-md" placeholder="Enter Languages (comma separated)"  />
        </div>
    
        {/* {/ {/ {/ {/ <!-- Verification Button --> /} /} /} /} */}
        <div className='flex'>
        <button type="submit" className=" bg-[#004930] text-white py-2 px-5 md:px-6 rounded-full font-semibold ">
          <Link to="/freelancerDetails">Verify Freelancer</Link>  
        </button>
        </div>
       
    </form>
    
            </div>
    
    
    
    
    
       </div>
  );
}

export default FreelancerClientForm;
