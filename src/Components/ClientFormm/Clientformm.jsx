import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import  supabase  from "../../supabaseClient"; // Import Supabase client
import toast, { Toaster } from "react-hot-toast";
function Clientformm() {
  const [activeForm, setActiveForm] = useState("client");
  const [userRole, setUserRole] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setUserRole(parsedUser.roleType);
    }
  }, []);

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-4">
      <h1 className="text-center text-xl text-black font-bold md:text-2xl">Digisky</h1>
      <p className="text-center">Please sign up to continue</p>

      <div className="flex justify-center space-x-4">
        <button
          className={`py-2 px-4 font-semibold rounded-md ${
            userRole === "client" ? "opacity-50 cursor-not-allowed text-gray-400" : "cursor-pointer"
          } ${activeForm === "freelancer" ? "text-black underline" : "text-gray-700"}`}
          onClick={() => {
            if (userRole !== "client") {
              navigate("/FreelancerClientPage");
            }
          }}
          disabled={userRole === "client"}
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

      {activeForm === "client" && <ClientForm />}
    </div>
  );
}

// Client Form Component
function ClientForm() {
  const navigate = useNavigate();

  const [clientData, setClientData] = useState({
    // client_id: "",
    image: "",
    mobileNumber: "",
    govt_id_proof: "",
    govt_id_number: "",
  });

  const [previewImage, setPreviewImage] = useState(null);
  const [previewGovtId, setPreviewGovtId] = useState(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      if (parsedUser._id) {
        setClientData((prev) => ({ ...prev, client_id: parsedUser._id }));
      }
    }
  }, []);

  // Upload image to Supabase
  const uploadToSupabase = async (file) => {
    const fileName = `images/${Date.now()}-${file.name}`;
    
    const { data, error } = await supabase.storage.from("images").upload(fileName, file);

    if (error) {
      console.error("Upload Error:", error);
      toast.error("Image upload failed!");
      return null;
    }

    const { data: publicUrlData } = supabase.storage.from("images").getPublicUrl(fileName);
    return publicUrlData.publicUrl;
  };

  // Handle file change
  const handleFileChange = async (e) => {
    const { name, files } = e.target;
    if (files.length > 0) {
      const fileUrl = await uploadToSupabase(files[0]);

      if (fileUrl) {
        setClientData((prev) => ({ ...prev, [name]: fileUrl }));

        if (name === "image") {
          setPreviewImage(fileUrl);
        } else if (name === "govt_id_proof") {
          setPreviewGovtId(fileUrl);
        }

        toast.success("Image uploaded successfully!");
      }
    }
  };

  // Handle text inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    const formData = {
      client_id: clientData.client_id,
      image: clientData.image,
      mobileNumber: clientData.mobileNumber,
      govt_id_proof: clientData.govt_id_proof,
      govt_id_number: clientData.govt_id_number,
    };

    try {
      const response = await fetch(`http://localhost:3000/api/client/createclient`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
console.log(result);

      if (response.ok) {
        toast.success("Client added successfully!");
        navigate("/dashboard");
      } else {
        toast.error("Error submitting form");
      }
    } catch (error) {
      toast.error("Error submitting form");
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <Toaster />
      <h2 className="text-2xl font-bold mb-4 text-center">Client Details</h2>

      {/* <div>
        <label className="block font-medium">Client ID</label>
        <input type="text" name="client_id" value={clientData.client_id} readOnly className="w-full p-2 border rounded-md" />
      </div> */}

      <div>
        <label className="block font-medium">Image</label>
        <input type="file" name="image" accept="image/*" onChange={handleFileChange} className="w-full p-2 border rounded-md" />
        {previewImage && <img src={previewImage} alt="Preview" className="w-32 h-32 mt-2" />}
      </div>

      <div>
        <label className="block font-medium">Mobile Number</label>
        <input type="tel" name="mobileNumber" value={clientData.mobileNumber} onChange={handleChange} className="w-full p-2 border rounded-md" />
      </div>

      <div>
        <label className="block font-medium">Govt ID Proof</label>
        <input type="file" name="govt_id_proof" accept="image/*,application/pdf" onChange={handleFileChange} className="w-full p-2 border rounded-md" />
        {previewGovtId && <img src={previewGovtId} alt="Preview" className="w-32 h-32 mt-2" />}
      </div>

      <div>
        <label className="block font-medium">Govt ID Number</label>
        <input type="text" name="govt_id_number" value={clientData.govt_id_number} onChange={handleChange} className="w-full p-2 border rounded-md" />
      </div>

      <button type="submit" className="bg-[#004930] text-white py-2 px-5 rounded-full font-semibold">
        Submit Client Details
      </button>
    </form>
  );
}

export default Clientformm;
