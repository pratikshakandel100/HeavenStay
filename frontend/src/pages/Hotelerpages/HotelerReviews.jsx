import React, { useState } from 'react';
import { Star, Reply, Flag, User, ThumbsUp, Filter } from 'lucide-react';
import Button from '../../components/Hoteler/common/Button';

const Reviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      guestName: 'Sarah Johnson',
      guestEmail: 'sarah.johnson@email.com',
      roomType: 'Deluxe Room',
      rating: 5,
      comment: 'Absolutely amazing stay! The staff was incredibly helpful and the ocean view was breathtaking. The room was spotless and the amenities exceeded my expectations. Will definitely come back!',
      date: '2024-01-10',
      replied: false,
      reply: '',
      helpful: 12,
      verified: true
    },
    {
      id: 2,
      guestName: 'Michael Chen',
      guestEmail: 'michael.chen@email.com',
      roomType: 'Standard Room',
      rating: 4,
      comment: 'Great location and clean rooms. The breakfast could be improved, but overall a pleasant experience. Staff was friendly and check-in was smooth.',
      date: '2024-01-08',
      replied: true,
      reply: 'Thank you for your feedback, Michael! We\'re glad you enjoyed your stay. We\'ve shared your breakfast feedback with our kitchen team and are working on improvements.',
      helpful: 8,
      verified: true
    },
    {
      id: 3,
      guestName: 'Emma Wilson',
      guestEmail: 'emma.wilson@email.com',
      roomType: 'Suite',
      rating: 5,
      comment: 'Perfect mountain getaway! The lodge has such a cozy atmosphere and the hiking trails nearby are fantastic. The suite was luxurious and the service was top-notch.',
      date: '2024-01-05',
      replied: false,
      reply: '',
      helpful: 15,
      verified: true
    },
    {
      id: 4,
      guestName: 'David Rodriguez',
      guestEmail: 'david.rodriguez@email.com',
      roomType: 'Standard Room',
      rating: 3,
      comment: 'The hotel is nice but the wifi was spotty in our room. The pool area was crowded most of the time. Room service was slow but the food was good.',
      date: '2024-01-03',
      replied: false,
      reply: '',
      helpful: 5,
      verified: true
    },
    {
      id: 5,
      guestName: 'Lisa Thompson',
      guestEmail: 'lisa.thompson@email.com',
      roomType: 'Presidential Suite',
      rating: 5,
      comment: 'Exceptional experience! The presidential suite was beyond our expectations. Butler service was outstanding and the panoramic views were incredible. Worth every penny!',
      date: '2024-01-01',
      replied: true,
      reply: 'Thank you so much for choosing our Presidential Suite, Lisa! We\'re thrilled that you had such a wonderful experience. We look forward to welcoming you back soon.',
      helpful: 20,
      verified: true
    }
  ]);

  const [replyText, setReplyText] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const [ratingFilter, setRatingFilter] = useState('all');

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
  
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length,
    percentage: (reviews.filter(r => r.rating === rating).length / reviews.length) * 100
  }));

  const filteredReviews = ratingFilter === 'all' 
    ? reviews 
    : reviews.filter(review => review.rating === parseInt(ratingFilter));

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Guest Reviews</h2>
          <p className="text-gray-600">Manage and respond to guest reviews</p>
        </div>
        
        {/* Rating Filter */}
        <div className="flex items-center space-x-2">
          <Filter className="h-4 w-4 text-gray-500" />
          <select
            value={ratingFilter}
            onChange={(e) => setRatingFilter(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Ratings</option>
            <option value="5">5 Stars</option>
            <option value="4">4 Stars</option>
            <option value="3">3 Stars</option>
            <option value="2">2 Stars</option>
            <option value="1">1 Star</option>
          </select>
        </div>
      </div>

      {/* Reviews Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Overall Rating */}
        <div className="bg-white p-6 rounded-lg shadow-sm text-center">
          <div className="text-4xl font-bold text-gray-900 mb-2">{averageRating.toFixed(1)}</div>
          <div className="flex justify-center mb-2">
            {renderStars(Math.round(averageRating))}
          </div>
          <div className="text-sm text-gray-600">Based on {reviews.length} reviews</div>
        </div>

        {/* Rating Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Rating Distribution</h3>
          <div className="space-y-2">
            {ratingDistribution.map((item) => (
              <div key={item.rating} className="flex items-center space-x-2">
                <span className="text-sm font-medium w-6">{item.rating}</span>
                <Star className="h-4 w-4 text-yellow-400 fill-current" />
                <div className="flex-1 bg-gray-200 rounded-full h-2">
                  <div
                    className="h-2 rounded-full"
                    style={{ 
                      width: `${item.percentage}%`,
                      backgroundColor: '#97B067'
                    }}
                  />
                </div>
                <span className="text-sm text-gray-600 w-8">{item.count}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Total Reviews</span>
              <span className="font-medium">{reviews.length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Replied</span>
              <span className="font-medium">{reviews.filter(r => r.replied).length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Pending Reply</span>
              <span className="font-medium text-orange-600">{reviews.filter(r => !r.replied).length}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">5-Star Reviews</span>
              <span className="font-medium text-green-600">{reviews.filter(r => r.rating === 5).length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews List */}
      <div className="space-y-4">
        {filteredReviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
                  <User className="h-6 w-6 text-gray-600" />
                </div>
                <div className="ml-4">
                  <div className="flex items-center space-x-2">
                    <h4 className="text-sm font-medium text-gray-900">{review.guestName}</h4>
                    {review.verified && (
                      <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Verified
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-500">{review.roomType}</p>
                  <p className="text-xs text-gray-400">{review.guestEmail}</p>
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

            <p className="text-gray-700 mb-4 leading-relaxed">{review.comment}</p>

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
                  style={review.replied ? {} : { borderColor: '#437057', color: '#437057' }}
                  className={review.replied ? '' : 'hover:bg-green-50'}
                >
                  <Reply className="h-4 w-4 mr-1" />
                  {review.replied ? 'Replied' : 'Reply'}
                </Button>
                <Button
                  onClick={() => handleFlag(review.id)}
                  variant="outline"
                  size="sm"
                  className="text-red-600 hover:text-red-700 border-red-300 hover:border-red-400"
                >
                  <Flag className="h-4 w-4 mr-1" />
                  Flag
                </Button>
              </div>
            </div>

            {/* Reply */}
            {review.replied && (
              <div className="mt-4 p-4 bg-gray-50 rounded-lg border-l-4" style={{ borderLeftColor: '#437057' }}>
                <div className="flex items-center mb-2">
                  <div className="h-8 w-8 rounded-full flex items-center justify-center" style={{ backgroundColor: '#437057' }}>
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="ml-2 text-sm font-medium text-gray-900">Hotel Manager</span>
                  <span className="ml-2 text-xs text-gray-500">Official Response</span>
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
                  placeholder="Write your professional response to this review..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="4"
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
                    style={{ backgroundColor: '#437057' }}
                    className="hover:opacity-90"
                  >
                    Post Reply
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

export default Reviews;