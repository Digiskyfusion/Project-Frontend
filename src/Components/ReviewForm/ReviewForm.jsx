import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { Star } from "lucide-react";

const ReviewForm = () => {
  const API_URL = import.meta.env.VITE_API_URL;
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await axios.post(`${API_URL}/review/createreview`, {
        name,
        rating,
        comment,
      });
      setSubmitted(true);
      setTimeout(() => {
        navigate("/reviewslist");
      }, 1500);
    } catch (error) {
      console.error("Error submitting review", error);
    } finally {
      setLoading(false);
      setName("");
      setRating(1);
      setComment("");
    }
  };

  return (
    <div className="bg-gray-100 pb-5 pt-5">
  <div className="flex justify-center mb-3">
  <Link
  to="/"
  className="inline-block bg-[#004930] text-white px-3 py-2 rounded-md text-center font-semibold hover:underline  transition duration-200"
>
  ← Back to Home
</Link>
  </div>
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-xl  transition-all duration-300">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Leave a Review</h2>

      {submitted ? (
        <p className="text-green-600 text-center text-lg font-semibold">✅ Review Submitted Successfully!</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
            required
          />

          {/* Rating Input */}
          <div className="flex items-center justify-center space-x-2">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                type="button"
                className={`transition-transform transform hover:scale-125 ${
                  num <= rating ? "text-yellow-500" : "text-gray-300"
                }`}
                onClick={() => setRating(num)}
              >
                <Star size={28} fill={num <= rating ? "yellow" : "none"} />
              </button>
            ))}
          </div>

          {/* Comment Input */}
          <textarea
            placeholder="Write your review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
            rows="4"
            required
          />

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-[#004930] text-white font-semibold py-2 rounded-lg transition-all duration-200 transform ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:scale-105"
            }`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      )}
    </div>
    </div>
  );
};

export default ReviewForm;
