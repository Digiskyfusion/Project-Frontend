import React,  { useState } from "react";

function FreelancerClientForm() {
  const [activeForm, setActiveForm] = useState("freelancer");

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      {/* {/ Toggle Buttons /} */}
      <h1 className="text-center text-xl text-black font-bold md:text-2xl">Digisky</h1>
<p className="text-center">Please sign up to Continue</p>
      <div className="flex justify-center space-x-4">
      
        <button
          className={`py-2 px-4 font-semibold rounded-md cursor-pointer ${
            activeForm === "freelancer" ? " text-[#000000] underline" : " text-gray-700"
          }`}
          onClick={() => setActiveForm("freelancer")}
        >
          Freelancer
        </button>
        <button
          className={`py-2 px-4 font-semibold rounded-md cursor-pointer ${
            activeForm === "client" ? "btext-[#000000] underline" : " text-gray-700"
          }`}
          onClick={() => setActiveForm("client")}
        >
          Client
        </button>
      </div>

      {/* {/ Render Freelancer or Client Form /} */}
      {activeForm === "freelancer" ? <FreelancerForm /> : <ClientForm />}
    </div>
  );
}

function FreelancerForm() {
  return (
   <div>

<div>

        <form className=" bg-white p-6 rounded-lg shadow-md space-y-4">
    <h2 className="text-2xl font-bold mb-4 text-center">Freelancer Details</h2>

    {/* {/ {/ <!-- Freelancer Details --> /} /} */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label className="block font-medium">Freelancer id</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Freelancer id" />
        </div>
        <div>
            <label className="block font-medium">Category ID</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Category ID" />
        </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div>
            <label className="block font-medium">Subcategory</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Subcategory" />
        </div>
        <div>
        <label className="block font-medium">Profile Image</label>
        <input type="file" className="w-full p-2 border rounded-md" />
    </div>
    </div>

  

    <div>
        <label className="block font-medium">Date of Birth</label>
        <input type="date" className="w-full p-2 border rounded-md" />
    </div>

    {/* {/ {/ <!-- Verification Details --> /} /} */}
    <h3 className="text-xl font-semibold mt-4">Verification Details</h3>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label className="block font-medium">Aadhaar Number</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Aadhaar Number" />
        </div>
        <div>
            <label className="block font-medium">Govt. ID Number</label>
            <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Govt. ID Number" />
        </div>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
        <label className="block font-medium">Govt. ID Image</label>
        <input type="file" className="w-full p-2 border rounded-md" />
    </div>
    <div>
        <label className="block font-medium">Address</label>
        <textarea className="w-full p-2 border rounded-md resize-none" rows="1" placeholder="Enter Address"></textarea>
    </div>
    </div>

    

   

   

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

    <div>
        <label className="block font-medium">Country</label>
        <select className="w-full p-2 border rounded-md">
            <option>Select Country</option>
            <option>USA</option>
            <option>India</option>
            <option>UK</option>
            <option>Canada</option>
        </select>
    </div>


        <div>
            <label className="block font-medium">Verification Status</label>
            <select className="w-full p-2 border rounded-md">
                <option>Pending</option>
                <option>Verified</option>
                <option>Rejected</option>
            </select>
        </div>
       
    </div>
    <div>
            <label className="block font-medium">Verification Date</label>
            <input type="date" className="w-full p-2 border rounded-md" />
        </div>

    {/* {/ {/ <!-- Professional Details --> /} /} */}
    <h3 className="text-xl font-semibold mt-4">Professional Details</h3>



    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
        <label className="block font-medium">Experience (Years)</label>
        <input type="number" className="w-full p-2 border rounded-md" placeholder="Enter Experience" />
    </div>
    <div>
        <label className="block font-medium">Portfolio Link</label>
        <input type="url" className="w-full p-2 border rounded-md" placeholder="Enter Portfolio Link" />
    </div>
    </div>


    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    <div>
        <label className="block font-medium">Resume</label>
        <input type="file" className="w-full p-2 border rounded-md" />
    </div>
    <div>
        <label className="block font-medium">Certificate</label>
        <input type="file" className="w-full p-2 border rounded-md" />
    </div>
    </div>


    <div>
        <label className="block font-medium">Languages</label>
        <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Languages (comma separated)" />
    </div>

    {/* {/ {/ <!-- Verification Button --> /} /} */}
    <div className='flex'>
    <button type="submit" className=" bg-[#004930] text-white py-2 px-5 md:px-6 rounded-full font-semibold ">
        Verify Freelancer
    </button>
    </div>
   
</form>

        </div>





   </div>
  );
}

function ClientForm() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Client Details</h2>

    
        <div>
          <label className="block font-medium">Client ID</label>
          <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Client ID" />
        </div>
     

      <div>
        <label className="block font-medium">Image</label>
        <input type="text" className="w-full p-2 border rounded-md" placeholder="Enter Contact Person" />
      </div>

      <div>
        <label className="block font-medium">Mobile Number</label>
        <input type="email" className="w-full p-2 border rounded-md" placeholder="Enter Email" />
      </div>

      <div>
        <label className="block font-medium">Govt-Id-Proof</label>
        <input type="tel" className="w-full p-2 border rounded-md" placeholder="Enter Phone Number" />
      </div>

      <div>
        <label className="block font-medium">Govt-Id-Number</label>
        <textarea className="w-full p-2 border rounded-md resize-none" rows="2" placeholder="Enter Address"></textarea>
      </div>

      <div className="flex">
        <button type="submit" className="bg-[#004930] text-white py-2 px-5 rounded-full font-semibold">
          Submit Client Details
        </button>
      </div>
    </div>
  );
}

export default FreelancerClientForm;
