import { useState } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
import Dashboard from "../DashboardPage/Dashboard";
// import DashboardSecond from "../DashboardPage/DashboardSecond";
import supabase from "../../supabaseClient";
import pic from "./../../assets/Images/Ellipse 70.png";
import toast, { Toaster } from "react-hot-toast";
function ClientForm() {
  const [formData, setFormData] = useState({
    // accountType: "Client",
    fullName: "",
    email: "",
    phoneNumber: "",
    // address: "",
    experience: "",
    skills: [""],
    portfolioLinks: [""],
    education: "",
    bio: "Lorem Ipsum is not simply random text.",
  });

  const [profileImage, setProfileImage] = useState(pic);
  const [selectedImage, setSelectedImage] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle image change
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setProfileImage(URL.createObjectURL(file));
    }
  };

  // Upload image to Supabase
    const uploadImageToSupabase = async (file) => {
      if (!file) return null;

      const fileExt = file.name.split(".").pop();
      const fileName = `clientProfile-${Date.now()}.${fileExt}`;

      const { data, error } = await supabase.storage
        .from("images") // Supabase bucket name
        .upload(`images/${fileName}`, file);

      if (error) {
        console.error("Error uploading image:", error.message);
        alert("Failed to upload image");
        return null;
      }

      return supabase.storage.from("images").getPublicUrl(`clients/${fileName}`).data.publicUrl;
    };

 // Handle portfolio links
 const handlePortfolioChange = (index, value) => {
  const updatedLinks = [...formData.portfolioLinks];
  updatedLinks[index] = value;
  setFormData({ ...formData, portfolioLinks: updatedLinks });
};

const addPortfolioField = () => {
  setFormData({ ...formData, portfolioLinks: [...formData.portfolioLinks, ""] });
};

const removePortfolioField = (index) => {
  const updatedLinks = formData.portfolioLinks.filter((_, i) => i !== index);
  setFormData({ ...formData, portfolioLinks: updatedLinks });
};



  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    let imageUrl = profileImage;
    if (selectedImage) {
      imageUrl = await uploadImageToSupabase(selectedImage);
      if (!imageUrl) return;
    }

    const formDataWithImage = { ...formData, profileImage: imageUrl };

    try {
      const response = await axios.post("http://localhost:3000/createProfile", formDataWithImage);
      console.log(response);
      
      toast.success("client form successful!");
      console.log(formDataWithImage);
    } catch (error) {
      console.error(error);
      toast.success("client form submit already");
    }
  };

  return (
    <div className="flex">
      {/* <Dashboard /> */}
      <div className="flex-1">
        {/* <DashboardSecond /> */}
        <div className="flex flex-wrap gap-6 bg-[#EBEEF2] px-6 md:px-10 py-6">
          <div className="bg-[#FFFFFF] px-6 py-6 rounded-xl md:px-10 w-full md:w-3/5">
            <h1 className="text-lg md:text-2xl font-semibold">Client Details</h1>
            <form className="mt-4" onSubmit={handleSubmit}>
              <Toaster />
              <div className="mb-4">
                <label className="font-medium">Full Name</label>
                <input type="text" name="fullName" placeholder="John Doe" className="w-full border-2 border-black outline-0 px-5 py-2 rounded-xl" onChange={handleChange} required />
              </div>

              <div className="mb-4">
                <label className="font-medium">Email</label>
                <input type="email" name="email" placeholder="johndoe@example.com" className="w-full border-2 border-black outline-0 px-5 py-2 rounded-xl" onChange={handleChange} required />
              </div>

              <div className="mb-4">
                <label className="font-medium">Phone Number</label>
                <input type="text" name="phoneNumber" placeholder="+1234567890" className="w-full border-2 border-black outline-0 px-5 py-2 rounded-xl" onChange={handleChange} required />
              </div>

              <div className="mb-4">
                <label className="font-medium">Experience</label>
                <input type="number" name="experience" placeholder="Enter experience" className="w-full border-2 border-black outline-0 px-5 py-2 rounded-xl" onChange={handleChange} />
              </div>

              <div className="mb-4">
                <label className="font-medium">Skills</label>
                {formData.skills.map((skill, index) => (
                  <div key={index} className="flex gap-2 mt-2">
                    <input type="text" placeholder="Enter Skill" value={skill} onChange={(e) => {
                      const updatedSkills = [...formData.skills];
                      updatedSkills[index] = e.target.value;
                      setFormData({ ...formData, skills: updatedSkills });
                    }} className="w-full border-2 border-black outline-0 px-5 py-2 rounded-xl" />
                  </div>
                ))}
                <button type="button" onClick={() => setFormData({ ...formData, skills: [...formData.skills, ""] })} className="mt-2 text-blue-500">+ Add Skill</button>
              </div>


              <div className="mb-4">
                <label className="font-medium">Portfolio Links</label>
                {formData.portfolioLinks.map((link, index) => (
                  <div key={index} className="flex gap-2 mt-2">
                    <input type="text" placeholder="Enter Portfolio URL" value={link} onChange={(e) => handlePortfolioChange(index, e.target.value)} className="w-full border-2 border-black outline-0 px-5 py-2 rounded-xl" />
                    {formData.portfolioLinks.length > 1 && (
                      <button type="button" onClick={() => removePortfolioField(index)} className="bg-red-500 text-white px-3 py-1 rounded">❌</button>
                    )}
                  </div>
                ))}
                <button type="button" onClick={addPortfolioField} className="mt-2 text-blue-500">+ Add Link</button>
              </div>

              <div className="mt-6">
                <button type="submit" className="bg-[#004930] text-white px-6 py-2 rounded-full md:px-8 hover:bg-[#003720] transition-all">
                  Upload
                </button>
              </div>
            </form>
          </div>

          <div className="bg-[#FFFFFF] px-6 py-6 md:py-20 rounded-xl w-full md:w-1/3 text-center shadow-lg">
            <div className="flex flex-col justify-center items-center">
              <img src={profileImage} alt="Profile" className="w-24 h-24 mx-auto rounded-full object-cover" />
              <div className="mb-4">
                <input type="file" onChange={handleImageChange} className="mt-2" />
              </div>
            </div>
            <h1 className="text-lg font-semibold mt-4">Bio</h1>
            <textarea className="w-full border-2 border-black outline-0 px-5 py-2 rounded-xl mt-2" name="bio" value={formData.bio} onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientForm;
