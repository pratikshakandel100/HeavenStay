import React from "react";

// Custom theme color
const themeColor = "#2f5249";

// Dummy reviews data
const reviews = [
  {
    id: 1,
    name: "John Doe",
    rating: 5,
    comment: "Outstanding service and beautiful rooms!",
    date: "2025-07-25",
  },
  {
    id: 2,
    name: "Mary Jane",
    rating: 4,
    comment: "Great experience, but breakfast could be better.",
    date: "2025-07-22",
  },
  {
    id: 3,
    name: "Alex Smith",
    rating: 3,
    comment: "Room was clean but staff was a bit slow.",
    date: "2025-07-18",
  },
];

// Star Rating component
const StarRating = ({ rating }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "fill-current text-yellow-400" : "text-gray-300"
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.97a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.455a1 1 0 00-.364 1.118l1.287 3.97c.3.92-.755 1.688-1.54 1.118L10 13.347l-3.386 2.455c-.784.57-1.838-.197-1.539-1.118l1.287-3.97a1 1 0 00-.364-1.118L3.612 9.397c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.287-3.97z" />
        </svg>
      ))}
    </div>
  );
};

// Review Card
const ReviewCard = ({ name, rating, comment, date }) => (
  <div className="bg-white shadow border border-gray-200 rounded-lg p-6 hover:shadow-md transition">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-lg font-semibold text-[#2f5249]">{name}</h3>
      <StarRating rating={rating} />
    </div>
    <p className="text-gray-700 mb-3">{comment}</p>
    <p className="text-sm text-gray-400">
      {new Date(date).toLocaleDateString()}
    </p>
  </div>
);

// Hotel Review Page
const HotelReviewPage = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-10 py-14">
      <div className="max-w-5xl mx-auto">
        <h1
          className="text-4xl font-bold mb-10"
          style={{ color: themeColor }}
        >
          Hotel Reviews
        </h1>

        {reviews.length === 0 ? (
          <p className="text-gray-500 text-lg">No reviews available yet.</p>
        ) : (
          <div className="grid grid-cols-2 gap-6">
            {reviews.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HotelReviewPage;
