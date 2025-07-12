import React, { useState } from 'react';
import { Star, Reply, Flag, User, ThumbsUp } from 'lucide-react';
import Button from '../../components/Hoteler/common/Button';

const HotelerReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      guestName: 'Sarah Johnson',
      hotel: 'Grand Paradise Resort',
      rating: 5,
      comment: 'Absolutely amazing stay! The staff was incredibly helpful and the ocean view was breathtaking. Will definitely come back!',
      date: '2024-01-10',
      replied: false,
      reply: '',
      helpful: 12
    },
    {
      id: 2,
      guestName: 'Michael Chen',
      hotel: 'Ocean View Hotel',
      rating: 4,
      comment: 'Great location and clean rooms. The breakfast could be improved, but overall a pleasant experience.',
      date: '2024-01-08',
      replied: true,
      reply: 'Thank you for your feedback, Michael! We\'re glad you enjoyed your stay. We\'ve shared your breakfast feedback with our kitchen team.',
      helpful: 8
    },
    {
      id: 3,
      guestName: 'Emma Wilson',
      hotel: 'Mountain Lodge',
      rating: 5,
      comment: 'Perfect mountain getaway! The lodge has such a cozy atmosphere and the hiking trails nearby are fantastic.',
      date: '2024-01-05',
      replied: false,
      reply: '',
      helpful: 15
    },
    {
      id: 4,
      guestName: 'David Rodriguez',
      hotel: 'Grand Paradise Resort',
      rating: 3,
      comment: 'The hotel is nice but the wifi was spotty in our room. The pool area was crowded most of the time.',
      date: '2024-01-03',
      replied: false,
      reply: '',
      helpful: 5
    }
  ]);

  const [replyText, setReplyText] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const handleReply = (reviewId) => {
    if (replyText.trim()) {
      setReviews(reviews.map(review =>
        review.id === reviewId
          ? { ...review, replied: true, reply: replyText }
          : review
      ));
      setReplyText('');
      setReplyingTo(null);
    }
  };

  const handleFlag = (reviewId) => {
    if (window.confirm('Are you sure you want to flag this review as inappropriate?')) {
      alert('Review has been flagged for moderation.');
    }
  };

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Reviews Management</h2>
          <p className="text-gray-600">Manage and respond to guest reviews</p>
        </div>
      </div>

      {/* Reviews Overview */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">{averageRating.toFixed(1)}</div>
            <div className="flex justify-center mt-1">
              {renderStars(Math.round(averageRating))}
            </div>
            <div className="text-sm text-gray-600 mt-1">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">{reviews.length}</div>
            <div className="text-sm text-gray-600 mt-1">Total Reviews</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">
              {reviews.filter(r => r.replied).length}
            </div>
            <div className="text-sm text-gray-600 mt-1">Replied</div>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                  <User className="h-5 w-5 text-gray-600" />
                </div>
                <div className="ml-3">
                  <h4 className="text-sm font-medium text-gray-900">{review.guestName}</h4>
                  <p className="text-xs text-gray-500">{review.hotel}</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-gray-500">
                  {new Date(review.date).toLocaleDateString()}
                </span>
              </div>
            </div>

            <p className="text-gray-700 mb-4">{review.comment}</p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="flex items-center text-gray-500">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  <span className="text-sm">{review.helpful} helpful</span>
                </div>
              </div>
              <div className="flex space-x-2">
                <Button
                  onClick={() => setReplyingTo(review.id)}
                  variant="outline"
                  size="sm"
                  disabled={review.replied}
                >
                  <Reply className="h-4 w-4 mr-1" />
                  {review.replied ? 'Replied' : 'Reply'}
                </Button>
                <Button
                  onClick={() => handleFlag(review.id)}
                  variant="outline"
                  size="sm"
                  className="text-red-600 hover:text-red-700"
                >
                  <Flag className="h-4 w-4 mr-1" />
                  Flag
                </Button>
              </div>
            </div>

            {/* Reply */}
            {review.replied && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-900">Hotel Manager</span>
                </div>
                <p className="text-sm text-gray-700">{review.reply}</p>
              </div>
            )}

            {/* Reply Form */}
            {replyingTo === review.id && (
              <div className="mt-4 p-4 border border-gray-200 rounded-lg">
                <textarea
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  placeholder="Write your reply..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="3"
                />
                <div className="flex justify-end space-x-2 mt-3">
                  <Button
                    onClick={() => setReplyingTo(null)}
                    variant="outline"
                    size="sm"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={() => handleReply(review.id)}
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    Reply
                  </Button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelerReviews;