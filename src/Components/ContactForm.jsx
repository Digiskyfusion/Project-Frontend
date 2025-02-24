import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Handle form submission (e.g., send data to API)
  };

  return (
    <div className="max-w-lg mx-auto p-8 bg-white shadow-2xl rounded-2xl border border-gray-200">
      <h2 className="text-3xl font-extrabold text-center text-[#004930] mb-6">Contact Us</h2>
      {submitted ? (
        <p className="text-green-600 text-center text-lg font-semibold">Thank you for your message!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
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
              className="w-full px-4 py-3 border rounded-lg  resize-none focus:outline-none focus:ring-2 focus:ring-[#004930] bg-gray-50"
              rows="4"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-[#004930] text-white py-3 rounded-lg font-bold text-lg hover:bg-[#00331f] transition"
          >
            Send Message
          </button>
        </form>
      )}
    </div>
  );
}
