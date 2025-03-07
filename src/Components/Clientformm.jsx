
import  { useEffect, useState } from "react";
import {  useNavigate } from "react-router-dom";


function Clientformm() {
  const [activeForm, setActiveForm] = useState("client"); // Managing form toggle

  const navigate= useNavigate()
  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <h1 className="text-center text-xl text-black font-bold md:text-2xl">
        Digisky
      </h1>
      <p className="text-center">Please sign up to continue</p>

      {/* {/ Toggle buttons /}
      {/ {/ Toggle buttons /} /} */}
      <div className="flex justify-center space-x-4">
        <button
          className={`py-2 px-4 font-semibold rounded-md cursor-pointer ${
            activeForm === "freelancer" ? "text-black underline" : "text-gray-700"
          }`}
          onClick={() => navigate("/FreelancreClientPage")}
        >
          Freelancer
        </button>
        <button
          className={`py-2 px-4 font-semibold rounded-md cursor-pointer ${
            activeForm === "client" ? "text-black underline" : "text-gray-700"
          }`}
        >
          Client
        </button>
      </div>
{/* 
      {/ Render ClientForm if 'client' is selected /}
      {/ {/ Render ClientForm if 'client' is selected /} /} */}
      {activeForm === "client" && <ClientForm />}
    </div>
  );
}

// Separate ClientForm component
function ClientForm() {
 

const navigate= useNavigate()
  const [clientData, setClientData] = useState({
    client_id: "",  // Auto-filled later
    image: "",
    mobileNumber: "",
    govt_id_proof: "",
    govt_id_number: "",
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [previewGovtId, setPreviewGovtId] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch logged-in user and set clientId
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser._id) {
        setClientData((prev) => ({ ...prev, client_id: parsedUser._id }));
      }
    }
  }, []);

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      setClientData((prev) => ({ ...prev, [name]: files[0] }));
  
      // Update preview
      if (name === "image") {
        setPreviewImage(URL.createObjectURL(files[0]));
      } else if (name === "govt_id_proof") {
        setPreviewGovtId(URL.createObjectURL(files[0]));
      }
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user")); // Ensure user data is stored
    const clientId = user ? user._id : null;
  
    if (!clientId) {
      alert("User ID is missing. Please log in again.");
      return;
    }
  
    console.log("Client ID:", clientId);
    console.log("Client Data before sending:", clientData);
  
    const formData = new FormData();
    formData.append("client_id", clientId);
    formData.append("image", clientData.image);
    formData.append("mobileNumber", clientData.mobileNumber);
    formData.append("govt_id_proof", clientData.govt_id_proof);
    formData.append("govt_id_number", clientData.govt_id_number);
  
    console.log("FormData before sending:", [...formData.entries()]);
  
    try {
      const response = await fetch("http://localhost:3000/api/client/createclient", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });
  
      const result = await response.json();
  
      if (response.ok) {
        alert("Client added successfully!");
      } else {
        alert(`Error: ${result.message || "Unknown error"}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4 text-center">Client Details</h2>

      <div>
        <label className="block font-medium">Client ID</label>
        <input
          type="text"
          name="client_id"
          value={clientData.client_id}
          readOnly
          className="w-full p-2 border rounded-md"
          placeholder="Enter Client ID"
        />
      </div>

      <div>
        <label className="block font-medium">Image</label>
        <input
          type="file"
          name="image" 
          onChange={handleFileChange} 
          className="w-full p-2 border rounded-md"
        />
         {previewImage && <img src={previewImage} alt="Preview" className="w-32 h-32 mt-2" />}
      </div>

      <div>
        <label className="block font-medium">Mobile Number</label>
        <input
          type="tel"
          name="mobileNumber"
          value={clientData.mobileNumber}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          placeholder="Enter Mobile Number"
        />
      </div>

      <div>
        <label className="block font-medium">Govt-Id-Proof</label>
        <input
          type="file"
          name="govt_id_proof"
          onChange={handleFileChange} 
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div>
        <label className="block font-medium">Govt-Id-Number</label>
        <input
          type="text"
          name="govt_id_number"
          value={clientData.govt_id_number}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          placeholder="Enter Govt ID Number"
        />
      </div>

        <button
          type="submit"
          className="bg-[#004930] text-white py-2 px-5 rounded-full font-semibold"
        >
          Submit Client Details
          </button>
    </form>
  );
}

export default Clientformm;
