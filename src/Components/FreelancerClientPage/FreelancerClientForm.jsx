import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function FreelancerClientForm() {
  const [activeForm, setActiveForm] = useState("freelancer");
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <h1 className="text-center text-xl text-black font-bold md:text-2xl">
        Digisky
      </h1>
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
          className={`py-2 px-4 font-semibold rounded-md ${
            activeForm === "client" ? "text-black underline" : "text-gray-700"
          }`}
          onClick={() => navigate("/client")}
        >
          Client
        </button>
      </div>

      {activeForm === "freelancer" && <FreelancerForm />}
    </div>
  );
}

function FreelancerForm() {
  const [formData, setFormData] = useState({
    freelancer_id: "",
    category_id: "",
    subcategory: "",
    profile_image: null,
    date_of_birth: "",
    govt_id_type: "",
    govt_id_number: "",
    govt_id_image: null,
    address: "",
    country: "",
    verified_status: "Pending",
    verification_date: "",
    experience_years: "",
    portfolio_link: "",
    resume: null,
    certifications: "",
    languages: "",
  });

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData && userData._id) {
      setFormData((prevData) => ({
        ...prevData,
        freelancer_id: userData._id,
      }));
    }
  }, []);

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle File Input Change
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        formDataToSend.append(key, value);
      }
    });

    try {
      const response = await fetch(
        "http://localhost:8000/api/freelancer/createfreelancer",
        {
          method: "POST",
          body: formDataToSend,
        }
      );

      const result = await response.json();

      if (response.ok) {
        alert("Freelancer profile created successfully!");
      } else {
        alert(result.message || "Error creating freelancer profile");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong, please try again.");
    }
  };

  return (
    <form className="bg-white p-6 rounded-lg shadow-md space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4 text-center">Freelancer Details</h2>

      {/* Freelancer ID & Category ID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Freelancer ID</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            name="freelancer_id"
            value={formData.freelancer_id}
            readOnly
          />
        </div>
        <div>
          <label className="block font-medium">Category ID</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            name="category_id"
            placeholder="Enter Category ID"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Profile Image */}
      <div>
        <label className="block font-medium">Profile Image</label>
        <input
          type="file"
          className="w-full p-2 border rounded-md"
          name="profile_image"
          onChange={handleFileChange}
        />
      </div>

      {/* Government ID Details */}
      <h3 className="text-xl font-semibold mt-4">Verification Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Govt ID Type</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            name="govt_id_type"
            placeholder="Enter Govt ID Type"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block font-medium">Govt. ID Number</label>
          <input
            type="text"
            className="w-full p-2 border rounded-md"
            name="govt_id_number"
            placeholder="Enter Govt. ID Number"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Verification Status */}
      <div>
        <label className="block font-medium">Verification Status</label>
        <select className="w-full p-2 border rounded-md" name="verified_status" onChange={handleChange}>
          <option>Pending</option>
          <option>Verified</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* Professional Details */}
      <h3 className="text-xl font-semibold mt-4">Professional Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium">Experience (Years)</label>
          <input
            type="number"
            name="experience_years"
            className="w-full p-2 border rounded-md"
            placeholder="Enter Experience"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block font-medium">Portfolio Link</label>
          <input
            type="url"
            name="portfolio_link"
            className="w-full p-2 border rounded-md"
            placeholder="Enter Portfolio Link"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Languages */}
      <div>
        <label className="block font-medium">Languages</label>
        <input
          type="text"
          name="languages"
          className="w-full p-2 border rounded-md"
          placeholder="Enter Languages (comma separated)"
          onChange={handleChange}
        />
      </div>

      {/* Submit Button */}
      <div className="flex">
        <button type="submit" className="bg-[#004930] text-white py-2 px-5 md:px-6 rounded-full font-semibold">
          Verify Freelancer
        </button>
      </div>
    </form>
  );
}

export default FreelancerClientForm;
