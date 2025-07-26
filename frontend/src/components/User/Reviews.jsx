import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, ArrowLeft, Upload, Send } from 'lucide-react';

const ReviewsComponent = () => {
  const { bookingId } = useParams();
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [review, setReview] = useState('');
  const [photos, setPhotos] = useState([]);

  // Mock booking data
  const booking = {
    id: 'BK002',
    hotel: {
      name: 'Himalayan Grand Hotel',
      location: 'Kathmandu, Nepal',
      image:
        'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=2',
    },
    checkIn: '2024-01-10',
    checkOut: '2024-01-12',
    roomType: 'Deluxe Room',
  };

  const handlePhotoUpload = (e) => {
    const files = e.target.files;
    if (files) {
      Array.from(files).forEach((file) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          setPhotos((prev) => [...prev, e.target.result]);
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const removePhoto = (index) => {
    setPhotos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert('Please select a rating');
      return;
    }
    if (review.trim() === '') {
      alert('Please write a review');
      return;
    }

    // In a real app, this would submit to an API
    alert('Review submitted successfully!');
    navigate('/mybookings');
  };

  const reviewAspects = [
    { label: 'Cleanliness', rating: 0 },
    { label: 'Service', rating: 0 },
    { label: 'Location', rating: 0 },
    { label: 'Value for Money', rating: 0 },
  ];

  const [aspectRatings, setAspectRatings] = useState(reviewAspects);

  const updateAspectRating = (index, rating) => {
    setAspectRatings((prev) =>
      prev.map((aspect, i) => (i === index ? { ...aspect, rating } : aspect))
    );
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-[#437057] hover:text-[#2F5249] transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Bookings</span>
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Write a Review</h1>

        {/* Hotel Info */}
        <div className="bg-gray-50 rounded-lg p-4 mb-8">
          <div className="flex items-center space-x-4">
            <img
              src={booking.hotel.image}
              alt={booking.hotel.name}
              className="w-16 h-16 rounded-lg object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900">{booking.hotel.name}</h3>
              <p className="text-gray-600">{booking.hotel.location}</p>
              <p className="text-sm text-gray-500">
                {booking.checkIn} - {booking.checkOut} • {booking.roomType}
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Overall Rating */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Overall Rating</h2>
            <div className="flex items-center space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setRating(star)}
                  onMouseEnter={() => setHoverRating(star)}
                  onMouseLeave={() => setHoverRating(0)}
                  className="focus:outline-none"
                >
                  <Star
                    size={40}
                    className={`transition-colors ${
                      star <= (hoverRating || rating)
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                </button>
              ))}
              <span className="ml-4 text-lg font-medium">
                {rating === 0 ? 'Select rating' : `${rating} star${rating > 1 ? 's' : ''}`}
              </span>
            </div>
          </div>

          {/* Aspect Ratings */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Rate Different Aspects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aspectRatings.map((aspect, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-medium text-gray-900 mb-2">{aspect.label}</h3>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => updateAspectRating(index, star)}
                        className="focus:outline-none"
                      >
                        <Star
                          size={20}
                          className={`transition-colors ${
                            star <= aspect.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Written Review */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Review</h2>
            <textarea
              value={review}
              onChange={(e) => setReview(e.target.value)}
              placeholder="Share your experience with other travelers. What did you like about your stay? What could be improved?"
              rows={6}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#437057] focus:border-transparent"
              required
            />
            <div className="mt-2 text-sm text-gray-500">{review.length}/500 characters</div>
          </div>

          {/* Photo Upload */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Add Photos (Optional)</h2>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handlePhotoUpload}
                className="hidden"
                id="photo-upload"
              />
              <label htmlFor="photo-upload" className="cursor-pointer flex flex-col items-center space-y-2">
                <Upload className="h-12 w-12 text-gray-400" />
                <span className="text-lg font-medium text-gray-600">Upload Photos</span>
                <span className="text-sm text-gray-500">PNG, JPG up to 10MB each</span>
              </label>
            </div>

            {/* Photo Preview */}
            {photos.length > 0 && (
              <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                {photos.map((photo, index) => (
                  <div key={index} className="relative">
                    <img
                      src={photo}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-24 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => removePhoto(index)}
                      className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm hover:bg-red-600 transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => navigate('/mybookings')}
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Skip for Now
            </button>
            <button
              type="submit"
              className="bg-[#2F5249] text-white px-6 py-3 rounded-lg hover:bg-[#437057] transition-colors flex items-center space-x-2"
            >
              <Send size={16} />
              <span>Submit Review</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewsComponent;
