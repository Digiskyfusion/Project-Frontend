import { useEffect, useState } from "react"; 
import axios from "axios";

function FreelancerForm() {
  const API_URL = import.meta.env.VITE_API_URL;
  const storedUser = localStorage.getItem("user");
  const user = storedUser ? JSON.parse(storedUser) : null;
  const userId = user?.userId || ""; // Extract userId safely
  
  const [categories, setCategories] = useState([]);
  const [subcategories, setSubcategories] = useState([]);
  const [formData, setFormData] = useState({
    
    
    userId: userId, 
    category_id: "",
    subcategory: [],  // ✅ Use lowercase 'subcategories'
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
    languages: [],
  });
 
  useEffect(() => {
    axios.get(`${API_URL}/category/categories`)
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching categories:", error));

    const userData = JSON.parse(localStorage.getItem("user"));
    if (userData?._id) {
      setFormData((prevData) => ({ ...prevData, freelancer_id: userData._id }));
    }
  }, []);

  const handleCategoryChange = async (e) => {
    const categoryId = e.target.value;
    setFormData((prevData) => ({ ...prevData, category_id: categoryId, subcategories: [] }));
    try {
      const response = await axios.get(`${API_URL}/subcategory/subcategories/category/${categoryId}`);
      setSubcategories(response.data);
      console.log("Fetched Subcategories:", response.data);

    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  const handleSubcategoryChange = (e) => {
    const { value, checked } = e.target;
    setFormData((prevData) => {
      const updatedSubcategories = checked
          ? [...prevData.subcategories, value].slice(0, 3)
          : prevData.subcategories.filter((sub) => sub !== value);
      return { ...prevData, subcategories: updatedSubcategories };
  });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: files[0] }));
  };

  const handleMultiSelect = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (option) => option.value);
    setFormData((prevData) => ({ ...prevData, languages: selectedOptions }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value) {
        if (Array.isArray(value)) {
          value.forEach((item) => formDataToSend.append(key, item));
        } else {
          formDataToSend.append(key, value);
        }
      }
    });
  
    try {
      const response = await axios.post(`${API_URL}/user/profile`, formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("Response:", response);
      
      alert(response.status === 200 ? "Freelancer profile created successfully!" : response.data.message || "Error creating profile");
    } catch (error) {
      console.error("Error:", error);
      console.error("Error Response:", error.response); // Log full error details
      alert(error.response?.data?.message || "Something went wrong, please try again.");
    }
  };
  

  return (
    <form className="bg-white p-6 rounded-lg shadow-md space-y-4" onSubmit={handleSubmit}>
      <h2 className="text-2xl font-bold mb-4 text-center">Freelancer Details</h2>

      {/* Category Selection */}
      <div>
        <label className="block font-medium">Category</label>
        <select className="w-full p-2 border rounded-md" name="category_id" onChange={handleCategoryChange} value={formData.category_id}>
          <option value="">Choose a Category</option>
          {categories.map((cat) => (
            <option key={cat._id} value={cat._id}>{cat.name}</option>
          ))}
        </select>
      </div>

      {/* Subcategory Selection */}
      {formData.category_id && subcategories.length > 0 && (
        <div>
          <label className="block font-medium">Select Up to 3 Subcategories</label>
          <div className="grid grid-cols-2 gap-2">
            {subcategories.map((sub) => (
              <label key={sub._id} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  value={sub._id}
                  checked={formData.subcategories.includes(sub._id)} // ✅ Correct
                  onChange={handleSubcategoryChange}
                  disabled={!formData.subcategory.includes(sub._id) && formData.subcategory.length >= 3}  
                  // disabled={!formData.subcategory.includes(sub._id) && formData.subcategory.length >= 3}

                />
                <span>{sub.name}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Profile Image */}
      <div>
        <label className="block mt-4">Profile Image</label>
        <input type="file" name="profile_image" accept="image/*" onChange={handleFileChange} className="w-full p-2 border rounded" />
      </div>

      {/* Date of Birth */}
      <div>
        <label className="block mt-4">Date of Birth</label>
        <input type="date" name="date_of_birth" value={formData.date_of_birth} onChange={handleChange} className="w-full p-2 border rounded" />
      </div>

      {/* Other Form Fields */}
      {["govt_id_type", "govt_id_number", "address", "country", "experience_years", "portfolio_link", "certifications"].map((field) => (
        <div key={field}>
          <label className="block mt-4 capitalize">{field.replace(/_/g, " ")}</label>
          <input type="text" name={field} value={formData[field]} onChange={handleChange} className="w-full p-2 border rounded" />
        </div>
      ))}

      {/* Govt ID Image */}
      <div>
        <label className="block mt-4">Government ID Image</label>
        <input type="file" name="govt_id_image" accept="image/*" onChange={handleFileChange} className="w-full p-2 border rounded" />
      </div>

      {/* Resume */}
      <div>
        <label className="block mt-4">Resume</label>
        <input type="file" name="resume" accept=".pdf,.doc,.docx" onChange={handleFileChange} className="w-full p-2 border rounded" />
      </div>

      {/* Languages */}
      <div>
        <label className="block mt-4">Languages:</label>
        <select name="languages" multiple onChange={handleMultiSelect} className="w-full p-2 border rounded">
          <option value="English">English</option>
          <option value="Hindi">Hindi</option>
        </select>
      </div>

      {/* Submit Button */}
      <button type="submit" className="w-full bg-[#004930] text-white py-2 px-4 rounded-md font-semibold hover:bg-[#004930]">
        Submit
      </button>
    </form>
  );
}

export default FreelancerForm;
