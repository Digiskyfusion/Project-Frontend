import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBriefcase, FaDollarSign, FaFileUpload, FaEye, FaMapMarkerAlt } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom";

const PostJob = () => {
  const URL= import.meta.env.REACT_APP_API_URL

  const navigate = useNavigate();
  const location = useLocation();
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const [jobData, setJobData] = useState({
    title: "",
    skills: "",
    scope: "",
    budget: "",
    currency: "INR",
    description: "",
    file: null,
    filePreview: null,
    location: "", // Added location field
  });

  useEffect(() => {
    if (location.state && location.state.job) {
      setJobData(location.state.job);
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setJobData((prev) => ({
        ...prev,
        file: file,
       filePreview: window.URL.createObjectURL(file), // ✅ Ensure using `window.URL`
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    if (!token) {
      toast.error("Please login first!");
      return;
    }

    const formData = new FormData();
    formData.append("title", jobData.title);
    formData.append("skills", jobData.skills);
    formData.append("scope", jobData.scope);
    formData.append("budget", jobData.budget);
    formData.append("currency", jobData.currency);
    formData.append("description", jobData.description);
    formData.append("location", jobData.location); // Send location data
    if (jobData.file) {
      formData.append("file", jobData.file);
    }

    try {
      const res = await fetch(`http://localhost:3000/api/jobs`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      console.log(formData);
      

      const data = await res.json();
      if (res.ok) {
        toast.success("Job posted successfully!");
        navigate("/all-jobs");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl border border-gray-200">
      <Toaster />
      <form onSubmit={handleSubmit} className="space-y-5">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <FaBriefcase className="text-green-600" /> Post a Job
        </h2>

        <input
          type="text"
          name="title"
          placeholder="Job title"
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
          value={jobData.title}
          onChange={handleChange}
        />

        <select
          name="skills"
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
          value={jobData.skills}
          onChange={handleChange}
        >
          <option value="">Select required skills</option>
          <option value="Graphics Design">Graphics Design</option>
          <option value="Web Development">Web Development</option>
          <option value="Other">Other</option>
        </select>

        <select
          name="scope"
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
          value={jobData.scope}
          onChange={handleChange}
        >
          <option value="">Select job scope</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>

        <div className="flex gap-3">
          <select
            name="currency"
            className="p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
            value={jobData.currency}
            onChange={handleChange}
          >
            <option value="USD">USD ($)</option>
            <option value="INR">INR (₹)</option>
            <option value="EUR">EUR (€)</option>
          </select>
          <input
            type="number"
            name="budget"
            placeholder="Budget"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
            value={jobData.budget}
            onChange={handleChange}
          />
        </div>

        <input
          type="text"
          name="location"
          placeholder="Job Location"
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
          value={jobData.location}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Describe the job details"
          required
          className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
          value={jobData.description}
          onChange={handleChange}
        />

        <label className="flex items-center gap-2 cursor-pointer bg-gray-100 p-3 border rounded-lg">
          <FaFileUpload className="text-blue-500" />
          <span>{jobData.file ? jobData.file.name : "Upload File"}</span>
          <input
            type="file"
            name="file"
            className="hidden"
            onChange={handleFileChange}
          />
        </label>

        {jobData.filePreview && (
          <div className="mt-2">
            <p className="text-sm text-gray-500">File Preview:</p>
            <img loading="lazy"
              src={jobData.filePreview}
              alt="Preview"
              className="w-full h-40 object-cover mt-2 rounded-lg"
            />
          </div>
        )}

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setIsPreviewOpen(true)}
            className="w-full bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg flex items-center justify-center gap-2"
          >
            <FaEye /> Preview
          </button>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all"
          >
            Post Job
          </button>
        </div>
      </form>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-lg w-96 shadow-lg">
            <h2 className="text-xl font-bold mb-3">Job Preview</h2>
            <p><strong>Title:</strong> {jobData.title}</p>
            <p><strong>Skills:</strong> {jobData.skills}</p>
            <p><strong>Scope:</strong> {jobData.scope}</p>
            <p><strong>Budget:</strong> {jobData.currency} {jobData.budget}</p>
            <p><strong>Location:</strong> {jobData.location}</p>
            <p><strong>Description:</strong> {jobData.description}</p>
            {jobData.filePreview && <img src={jobData.filePreview} alt="File Preview" className="w-full h-32 object-cover mt-3 rounded-lg" />}
            <button onClick={() => setIsPreviewOpen(false)} className="w-full mt-4 bg-red-500 hover:bg-red-600 text-white py-2 rounded-lg">Close Preview</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostJob;
