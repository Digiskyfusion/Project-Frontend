import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaBriefcase, FaDollarSign, FaFileUpload, FaClipboardList } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";
import { useLocation } from "react-router-dom"; // ✅ useLocation Import
const PostJob = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [jobData, setJobData] = useState({
    title: "",
    skills: "",
    scope: "",
    budget: "",
    currency: "INR",
    description: "",
    location:"",
    file: null,
    filePreview: null,
  });

  useEffect(() => {
    if (location.state && location.state.job) {
      setJobData(location.state.job);
    }
  }, [location.state]);
  const [preview, setPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        setJobData((prev) => ({
          ...prev,
          file: file,
          filePreview: reader.result,
        }));
      };
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    // const userEmail = localStorage.getItem("user");
    // const user = JSON.parse(userEmail); 

    if (!token) {
      alert("Please login first!");
      return;
    }

    // Extract only essential job details for localStorage (excluding file)
    const jobDetails = {
      title: jobData.title,
      skills: jobData.skills,
      scope: jobData.scope,
      budget: jobData.budget,
      currency: jobData.currency,
      location:jobData.location,
      description: jobData.description,
    };

    // Store only job details in localStorage (avoiding QuotaExceededError)
    const jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    localStorage.setItem("jobs", JSON.stringify([...jobs, jobDetails]));

    // Prepare FormData for backend submission
    const formData = new FormData();
    Object.keys(jobData).forEach((key) => {
      if (key !== "filePreview") {
        formData.append(key, jobData[key]);
      }
    });

    try {
      const res = await fetch("http://localhost:3000/api/jobs", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Job Post successful!");
        navigate("/all-jobs");
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-xl rounded-xl border border-gray-200">
     <Toaster />
      {!preview ? (
        <form onSubmit={handleSubmit} className="space-y-5">
          <h2 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
            <FaBriefcase className="text-green-600" /> Post a Job
          </h2>

          {/* Job Title */}
          <input
            type="text"
            name="title"
            placeholder="Job title"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
            value={jobData.title}
            onChange={handleChange}
          />

          {/* Skills */}
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

          {/* Job Scope */}
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

          {/* Budget & Currency */}
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
              required
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
              value={jobData.budget}
              onChange={handleChange}
            />
          </div>

          {/* Description */}
          <textarea
            name="description"
            placeholder="Describe the job details"
            required
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-green-400"
            value={jobData.description}
            onChange={handleChange}
          />

          {/* File Upload */}
          <label className="flex items-center gap-2 cursor-pointer bg-gray-100 p-3 border rounded-lg">
  <FaFileUpload className="text-blue-500" />
  <span>{jobData.file ? jobData.file.name : "Upload File"}</span>
  <input type="file" name="file" className="hidden" onChange={handleFileChange} required />
</label>

          {/* Buttons */}
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setPreview(true)}
              className="w-1/2 bg-green-600 hover:bg-green-700 text-white py-2 rounded-lg transition-all"
            >
              Preview
            </button>
            <button
              type="submit"
              className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition-all"
            >
              Post Job
            </button>
          </div>
        </form>
      ) : (
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Preview Job</h2>
          <p><strong>Title:</strong> {jobData.title}</p>
          <p><strong>Skills:</strong> {jobData.skills}</p>
          <p><strong>Scope:</strong> {jobData.scope}</p>
          <p><strong>Budget:</strong> {jobData.currency} {jobData.budget}</p>
          <p><strong>Description:</strong> {jobData.description}</p>
          {jobData.filePreview && <img src={jobData.filePreview} alt="Preview" className="mt-4 rounded-lg" />}
          <div className="mt-6 flex gap-4">
            <button onClick={() => setPreview(false)} className="w-1/2 bg-gray-500 hover:bg-gray-600 text-white py-2 rounded-lg">
              Edit
            </button>
            <button onClick={handleSubmit} className="w-1/2 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg">
              Post Job
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostJob;
