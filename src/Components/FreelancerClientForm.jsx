import React, { useState } from "react";

function FreelancerClientForm() {
  const [activeForm, setActiveForm] = useState("freelancer");

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <h1 className="text-center text-xl text-black font-bold md:text-2xl">Digisky</h1>
      <p className="text-center">Please sign up to continue</p>
      
      <div className="flex justify-center space-x-4">
        <button
          className={`py-2 px-4 font-semibold rounded-md cursor-pointer ${
            activeForm === "freelancer" ? "text-black underline" : "text-gray-700"
          }`}
          onClick={() => setActiveForm("freelancer")}
        >
          Freelancer
        </button>
        <button
          className={`py-2 px-4 font-semibold rounded-md cursor-pointer ${
            activeForm === "client" ? "text-black underline" : "text-gray-700"
          }`}
          onClick={() => setActiveForm("client")}
        >
          Client
        </button>
      </div>

      {activeForm === "freelancer" ? <FreelancerForm /> : <ClientForm />}
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

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    console.log("Sending Token:", token); // Check if token is present
  
    if (!token) {
      alert("No token found! Please log in again.");
      return;
    }
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    try {
     
      const response = await fetch("http://192.168.29.50:3000/api/freelancer/createfreelancer", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`, // Send the token in the headers
        },
        body: data,
      });
      const result = await response.json();
      console.log("Freelancer registered:", result);
      alert("Freelancer registered successfully!");
    } catch (error) {
      console.error("Error registering freelancer:", error);
      alert("Failed to register freelancer.");
    }
  };

  return (
    <div>

    <div>
    
            <form className=" bg-white p-6 rounded-lg shadow-md space-y-4" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4 text-center">Freelancer Details</h2>
    
        {/* {/ {/ {/ <!-- Freelancer Details --> /} /} /} */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block font-medium">Freelancer id</label>
                <input type="text" className="w-full p-2 border rounded-md"  name="freelancerId" placeholder="Enter Freelancer id" onChange={handleChange} />
            </div>
            <div>
                <label className="block font-medium">Category ID</label>
                <input type="text" className="w-full p-2 border rounded-md" name="categoryId" placeholder="Enter Category ID" onChange={handleChange} />
            </div>
        </div>
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            <div>
                <label className="block font-medium">Subcategory</label>
                <input type="text" className="w-full p-2 border rounded-md" name="subcategory" placeholder="Enter Subcategory" onChange={handleChange} />
            </div>
            <div>
            <label className="block font-medium">Profile Image</label>
            <input type="file" className="w-full p-2 border rounded-md" name="profile_Image" onChange={handleChange} />
        </div>
        </div>
    
      
    
        <div>
            <label className="block font-medium">Date of Birth</label>
            <input type="date" className="w-full p-2 border rounded-md" name="date_of_birth" onChange={handleChange} />
        </div>
    
        {/* {/ {/ {/ <!-- Verification Details --> /} /} /} */}
        <h3 className="text-xl font-semibold mt-4">Verification Details</h3>
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
                <label className="block font-medium">Govt Id Type</label>
                <input type="text" className="w-full p-2 border rounded-md" name="govt_id_type" placeholder="Enter Aadhaar Number" onChange={handleChange} />
            </div>
            <div>
                <label className="block font-medium">Govt. ID Number</label>
                <input type="text" className="w-full p-2 border rounded-md" name="govt_id_number" placeholder="Enter Govt. ID Number" onChange={handleChange} />
            </div>
        </div>
    
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label className="block font-medium">Govt. ID Image</label>
            <input type="file" name="govt_id_image" className="w-full p-2 border rounded-md" onChange={handleChange} />
        </div>
        <div>
            <label className="block font-medium">Address</label>
            <textarea className="w-full p-2 border rounded-md resize-none" name="address" rows="1" placeholder="Enter Address" onChange={handleChange}></textarea>
        </div>
        </div>
    
        
    
       
    
       
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    
        <div>
            <label className="block font-medium">Country</label>
            <select className="w-full p-2 border rounded-md" name="country" onChange={handleChange}>
                <option>Select Country</option>
                <option>USA</option>
                <option>India</option>
                <option>UK</option>
                <option>Canada</option>
            </select>
        </div>
    
    
            <div>
                <label className="block font-medium">Verification Status</label>
                <select className="w-full p-2 border rounded-md" name="verified_status" onChange={handleChange}>
                    <option>Pending</option>
                    <option>Verified</option>
                    <option>Rejected</option>
                </select>
            </div>
           
        </div>
        <div>
                <label className="block font-medium">Verification Date</label>
                <input type="date" className="w-full p-2 border rounded-md" name="verification_date" onChange={handleChange} />
            </div>
    
        {/* {/ {/ {/ <!-- Professional Details --> /} /} /} */}
        <h3 className="text-xl font-semibold mt-4">Professional Details</h3>
    
    
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label className="block font-medium">Experience (Years)</label>
            <input type="number" name="experience_years" className="w-full p-2 border rounded-md" placeholder="Enter Experience" onChange={handleChange} />
        </div>
        <div>
            <label className="block font-medium">Portfolio Link</label>
            <input type="url" name="portfolio_link" className="w-full p-2 border rounded-md" placeholder="Enter Portfolio Link" onChange={handleChange} />
        </div>
        </div>
    
    
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
            <label className="block font-medium">Resume</label>
            <input type="file" name="resume" className="w-full p-2 border rounded-md" onChange={handleChange} />
        </div>
        <div>
            <label className="block font-medium">Certificate</label>
            <input type="file" name="certifications" className="w-full p-2 border rounded-md" onChange={handleChange} />
        </div>
        </div>
    
    
        <div>
            <label className="block font-medium">Languages</label>
            <input type="text" name="languages" className="w-full p-2 border rounded-md" placeholder="Enter Languages (comma separated)" onChange={handleChange} />
        </div>
    
        {/* {/ {/ {/ <!-- Verification Button --> /} /} /} */}
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
  const [clientData, setClientData] = useState({
    clientId: "",
    image: null,
    mobileNumber: "",
    govtIdProof: null,
    govtIdNumber: "",
  });

  const handleClientChange = (e) => {
    const { name, value, type, files } = e.target;
    setClientData({
      ...clientData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleClientSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(clientData).forEach((key) => {
      data.append(key, clientData[key]);
    });

    try {
      const response = await fetch("/api/client/signup", {
        method: "POST",
        body: data,
      });
      const result = await response.json();
      console.log("Client registered:", result);
      alert("Client registered successfully!");
    } catch (error) {
      console.error("Error registering client:", error);
      alert("Failed to register client.");
    }
  };

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
