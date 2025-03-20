import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    
    try {
      const response = await axios.post("http://localhost:3000/contact/conatctus", formData);
      if (response.status === 201) {
        setSubmitted(true);
        toast.success("send successful!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        })
      }
    } catch (err) {
      toast.error("message not send");
      setError("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-8 border-gray-200">
      <h2 className="text-3xl font-extrabold text-center text-[#004930] mb-6">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
        <Toaster />
          {error && <p className="text-red-600 text-center">{error}</p>}
          
          <div>
            <label className="block text-gray-800 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004930] bg-gray-50"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004930] bg-gray-50"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold">Phone Number</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004930] bg-gray-50"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#004930] bg-gray-50"
              required
            />
          </div>

          <div>
            <label className="block text-gray-800 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#004930] bg-gray-50"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#004930] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#00331f] transition"
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
    </div>
  );
}
