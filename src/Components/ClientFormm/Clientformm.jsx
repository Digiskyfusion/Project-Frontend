import { useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../../supabaseClient";
import toast, { Toaster } from "react-hot-toast";

function ClientForm() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [clientData, setClientData] = useState({
    category: "",
    image: "",
    govt_id_number: "",
    portfolio: "",
    country: "",
    language: "",
  });

  const [previewImage, setPreviewImage] = useState(null);

  // Upload image to Supabase
  const uploadToSupabase = async (file) => {
    const fileName = `images/${Date.now()}-${file.name}`;
    const { data, error } = await supabase.storage.from("images").upload(fileName, file);

    if (error) {
      toast.error("Image upload failed!");
      return null;
    }

    // Get the public URL
    const { data: publicUrlData } = supabase.storage.from("images").getPublicUrl(fileName);

    if (!publicUrlData.publicUrl) {
      toast.error("Failed to retrieve image URL.");
      return null;
    }

    return publicUrlData.publicUrl;
  };

  // Handle file change
  const handleFileChange = async (e) => {
    const { name, files } = e.target;
    if (!files[0]) return;

    // Validate file type
    if (!files[0].type.startsWith("image/")) {
      toast.error("Please upload a valid image file.");
      return;
    }

    const fileUrl = await uploadToSupabase(files[0]);
    if (fileUrl) {
      setClientData((prev) => ({ ...prev, [name]: fileUrl }));
      if (name === "image") setPreviewImage(fileUrl);
      toast.success("Image uploaded successfully!");
    }
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setClientData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const token = localStorage.getItem("token");

    try {
      const response = await fetch("http://localhost:3000/api/client/createclient", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(clientData),
      });

      const result = await response.json();

      if (response.ok) {
        toast.success("Client added successfully!");
        navigate("/dashboard");
      } else {
        toast.error(result.message || "Error submitting form");
      }
    } catch (error) {
      toast.error("An unexpected error occurred!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-4 md:px-20  bg-white p-6 rounded-lg shadow-lg" onSubmit={handleSubmit}>
      <Toaster />
      <h2 className="text-2xl font-bold text-center">Client Details</h2>

      {/* Category Selection */}
      <div>
        <label className="block font-medium">Category</label>
        <select
          name="category"
          value={clientData.category}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select Category</option>
          <option value="Design">Design</option>
          <option value="Development">Development</option>
          <option value="Marketing">Marketing</option>
        </select>
      </div>

      {/* Profile Image Upload */}
      <div>
        <label className="block font-medium">Profile Image</label>
        <input
          type="file"
          name="image"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full p-2 border rounded-md"
        />
        {previewImage && (
          <img src={previewImage} alt="Preview" className="w-32 h-32 mt-2 rounded-md shadow" />
        )}
      </div>

      {/* Govt ID Number */}
      <div>
        <label className="block font-medium">Govt ID Number</label>
        <input
          type="text"
          name="govt_id_number"
          value={clientData.govt_id_number}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          placeholder="Enter Govt ID Number"
        />
      </div>

      {/* Portfolio URL */}
      <div>
        <label className="block font-medium">Portfolio (URL)</label>
        <input
          type="url"
          name="portfolio"
          value={clientData.portfolio}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          placeholder="https://yourportfolio.com"
        />
      </div>

      {/* Country Selection */}
      <div>
        <label className="block font-medium">Country</label>
        <select
          name="country"
          value={clientData.country}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        >
          <option value="">Select Country</option>
          <option value="">Select Country</option>
<option value="Afghanistan">Afghanistan</option>
<option value="Albania">Albania</option>
<option value="Algeria">Algeria</option>
<option value="Andorra">Andorra</option>
<option value="Angola">Angola</option>
<option value="Antigua and Barbuda">Antigua and Barbuda</option>
<option value="Argentina">Argentina</option>
<option value="Armenia">Armenia</option>
<option value="Australia">Australia</option>
<option value="Austria">Austria</option>
<option value="Azerbaijan">Azerbaijan</option>
<option value="Bahamas">Bahamas</option>
<option value="Bahrain">Bahrain</option>
<option value="Bangladesh">Bangladesh</option>
<option value="Barbados">Barbados</option>
<option value="Belarus">Belarus</option>
<option value="Belgium">Belgium</option>
<option value="Belize">Belize</option>
<option value="Benin">Benin</option>
<option value="Bhutan">Bhutan</option>
<option value="Bolivia">Bolivia</option>
<option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
<option value="Botswana">Botswana</option>
<option value="Brazil">Brazil</option>
<option value="Brunei">Brunei</option>
<option value="Bulgaria">Bulgaria</option>
<option value="Burkina Faso">Burkina Faso</option>
<option value="Burundi">Burundi</option>
<option value="Cabo Verde">Cabo Verde</option>
<option value="Cambodia">Cambodia</option>
<option value="Cameroon">Cameroon</option>
<option value="Canada">Canada</option>
<option value="Central African Republic">Central African Republic</option>
<option value="Chad">Chad</option>
<option value="Chile">Chile</option>
<option value="China">China</option>
<option value="Colombia">Colombia</option>
<option value="Comoros">Comoros</option>
<option value="Congo (Congo-Brazzaville)">Congo (Congo-Brazzaville)</option>
<option value="Costa Rica">Costa Rica</option>
<option value="Croatia">Croatia</option>
<option value="Cuba">Cuba</option>
<option value="Cyprus">Cyprus</option>
<option value="Czechia">Czechia</option>
<option value="Denmark">Denmark</option>
<option value="Djibouti">Djibouti</option>
<option value="Dominica">Dominica</option>
<option value="Dominican Republic">Dominican Republic</option>
<option value="Ecuador">Ecuador</option>
<option value="Egypt">Egypt</option>
<option value="El Salvador">El Salvador</option>
<option value="Equatorial Guinea">Equatorial Guinea</option>
<option value="Eritrea">Eritrea</option>
<option value="Estonia">Estonia</option>
<option value="Eswatini">Eswatini</option>
<option value="Ethiopia">Ethiopia</option>
<option value="Fiji">Fiji</option>
<option value="Finland">Finland</option>
<option value="France">France</option>
<option value="Gabon">Gabon</option>
<option value="Gambia">Gambia</option>
<option value="Georgia">Georgia</option>
<option value="Germany">Germany</option>
<option value="Ghana">Ghana</option>
<option value="Greece">Greece</option>
<option value="Grenada">Grenada</option>
<option value="Guatemala">Guatemala</option>
<option value="Guinea">Guinea</option>
<option value="Guyana">Guyana</option>
<option value="Haiti">Haiti</option>
<option value="Honduras">Honduras</option>
<option value="Hungary">Hungary</option>
<option value="Iceland">Iceland</option>
<option value="India">India</option>
<option value="Indonesia">Indonesia</option>
<option value="Iran">Iran</option>
<option value="Iraq">Iraq</option>
<option value="Ireland">Ireland</option>
<option value="Israel">Israel</option>
<option value="Italy">Italy</option>
<option value="Jamaica">Jamaica</option>
<option value="Japan">Japan</option>
<option value="Jordan">Jordan</option>
<option value="Kazakhstan">Kazakhstan</option>
<option value="Kenya">Kenya</option>
<option value="Kiribati">Kiribati</option>
<option value="Kuwait">Kuwait</option>
<option value="Kyrgyzstan">Kyrgyzstan</option>
<option value="Laos">Laos</option>

        </select>
      </div>

      {/* Language Input */}
      <div>
        <label className="block font-medium">Language</label>
        <input
          type="text"
          name="language"
          value={clientData.language}
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
          placeholder="Enter Language"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-[#004930] text-white py-2 px-5 rounded-md font-semibold transition hover:bg-[#00381F] disabled:opacity-50"
      >
        {loading ? "Submitting..." : "Submit Client Details"}
      </button>
    </form>
  );
}

export default ClientForm;
