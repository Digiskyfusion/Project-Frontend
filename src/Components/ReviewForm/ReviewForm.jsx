import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Star } from "lucide-react";

const ReviewForm = () => {
  const [name, setName] = useState("");
  const [rating, setRating] = useState(1);
  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3000/api/review/createreview", {
        name,
        rating,
        comment,
      });
      setName("");
      setRating(1);
      setComment("");
      navigate("/reviewslist");
    } catch (error) {
      console.error("Error submitting review", error);
    }
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-lg ">
      <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Leave a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Rating Input */}
        <div className="flex items-center space-x-2">
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              type="button"
              className={`transition duration-200 ${
                num <= rating ? "text-yellow-500" : "text-gray-300"
              }`}
              onClick={() => setRating(num)}
            >
              <Star size={24} fill={num <= rating ? "yellow" : "none"} />
            </button>
          ))}
        </div>

        {/* Comment Input */}
        <textarea
          placeholder="Your Review"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows="4"
        />

        {/* Submit Button */}
        <button className="w-full bg-[#004930] text-white font-semibold py-2 rounded-lg hover:scale-105 transition duration-200">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
