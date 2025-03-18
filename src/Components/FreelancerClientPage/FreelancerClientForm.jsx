import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function FreelancerClientForm() {
  const [activeForm, setActiveForm] = useState("freelancer");
  const [roleType, setRoleType] = useState(""); // State to store roleType
  const navigate = useNavigate();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData?.roleType) {
      setRoleType(userData.roleType);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <h1 className="text-center text-xl text-black font-bold md:text-2xl">
        Digisky
      </h1>
      {/* <p className="text-center">Please sign up to continue</p> */}

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
          } ${roleType === "freelancer" ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => roleType !== "freelancer" && navigate("/client")}
          disabled={roleType === "freelancer"}
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
        "http://localhost:3000/api/freelancer/createfreelancer",
        {
          method: "POST",
          headers:{
            "Content-Type": "multipart/form-data",
          },
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

  
  const categories = {
    "Web development": ["Frontend Development", "Backend Development ", "Full-Stack Development", "E-commerce Development","Web Application Development","CMS & Website Builders"],
    "Digital marketing": ["Search Engine Optimization (SEO)", "Content Marketings", "Social Media Marketing (SMM)", "Pay-Per-Click Advertising (PPC)", "Email Marketing","Affiliate & Influencer Marketing"],
    "Video graphics": ["Motion Graphics", "3D Animation & VFX", "Video Editing", "Visual Effects (VFX) & Compositing", "Typography & Kinetic Text Animation","Cinematography & Color Grading"],
    "UI Design (User Interface Design)": ["User Research & Analysis", "Wireframing & Prototyping", "Visual & Interface Design (UI Design)", "Interaction Design (IxD)", "Usability Testing & UX Auditing","Design Systems & Branding"],
    "Content Writing": ["SEO Content Writing", "Copywriting", "Technical Writing", "Creative Writing", "Social Media Content Writing","Email & Newsletter Writing"],
  };

   // Category Change Handler
  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      category: selectedCategory,
      subcategories: [], // Reset subcategories when category changes
    }));
  };

  // Subcategory Selection Handler (max 3 allowed)
  const handleSubcategoryChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      let updatedSubcategories = [...prevData.subcategories];

      if (checked) {
        if (updatedSubcategories.length < 3) {
          updatedSubcategories.push(value);
        }
      } else {
        updatedSubcategories = updatedSubcategories.filter((sub) => sub !== value);
      }

      return { ...prevData, subcategories: updatedSubcategories };
    });
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
           <select className="w-full p-2 border rounded-md" name="category" onChange={handleCategoryChange} value={formData.category}>
          <option value="">Choose a Category</option>
          {Object.keys(categories).map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>




          {/* <input
            type="text"
            className="w-full p-2 border rounded-md"
            name="category_id"
            placeholder="Enter Category ID"
            onChange={handleChange}
          />*/}
        </div> 
      </div>


       <div className="grid grid-cols-1 gap-4">
            <div>
             {formData.category && (
        <div>
          <label className="block font-medium">Select Up to 3 Subcategories</label>
          <div className="grid grid-cols-2 gap-2">
            {categories[formData.category].map((sub) => (
              <label key={sub} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={sub}
                  checked={formData.subcategories.includes(sub)}
                  onChange={handleSubcategoryChange}
                  disabled={!formData.subcategories.includes(sub) && formData.subcategories.length >= 3}
                />
                <span>{sub}</span>
              </label>
            ))}
          </div>
        </div>
      )}
                {/* <label className="block font-medium">Subcategory</label>
                <input type="text" className="w-full p-2 border rounded-md" name="subcategory" placeholder="Enter Subcategory"  /> */}
            </div>
           
      </div>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
        <label className="block font-medium">Profile Image</label>
        <input
          type="file"
          className="w-full p-2 border rounded-md"
          name="profile_image"
          onChange={handleFileChange}
        />
      </div>
      <div>
            <label className="block font-medium">Date of Birth</label>
            <input type="date" className="w-full p-2 border rounded-md" name="date_of_birth"  />
      </div>
      
        </div>

      {/* Profile Image */}

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
            <select className="w-full p-2 border rounded-md" name="country" onChange={handleChange} >
                <option>Select Country</option>
                <option>USA</option>
                <option>India</option>
                <option>UK</option>
                <option>Canada</option>
                <option>Australia</option>
                <option>Italy</option>
                <option>Kenya</option>
                <option>Japan</option>
                <option>Iran</option>
                <option>Brazil</option>
                <option>Egypt</option>
                <option>France</option>
                <option>Korea</option>
                <option>Libya</option>
                <option>Germany</option>
                <option>Zambia</option>
                <option>Vietnam</option>
                <option>Turkey</option>

            </select>
        </div>
    
    
            <div>
                <label className="block font-medium">Verification Status</label>
                <select className="w-full p-2 border rounded-md" name="verified_status" onChange={handleChange} >
                    <option>Pending</option>
                    {/* <option>Verified</option>
                    <option>Rejected</option> */}
                </select>
            </div>
           
        </div>

         <div>
                <label className="block font-medium">Verification Date</label>
                <input type="date" className="w-full p-2 border rounded-md" name="verification_date"  />
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
