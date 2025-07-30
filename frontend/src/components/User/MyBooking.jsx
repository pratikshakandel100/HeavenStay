import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, MapPin, Users, Clock, Star, X, CheckCircle } from 'lucide-react';

const MyBookingsComponent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('upcoming');



  const [selectedBookingId, setSelectedBookingId] = useState(null);
const [reviewText, setReviewText] = useState('');
const [rating, setRating] = useState(0);


const [rescheduleBookingId, setRescheduleBookingId] = useState(null);
const [newCheckIn, setNewCheckIn] = useState('');
const [newCheckOut, setNewCheckOut] = useState('');



  const bookings = [
    {
      id: 'BK001',
      hotel: {
        name: 'Himalayan Grand Hotel',
        location: 'Kathmandu, Nepal',
        image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
      },
      checkIn: '2024-02-15',
      checkOut: '2024-02-18',
      guests: 2,
      roomType: 'Deluxe Room',
      status: 'upcoming',
      total: 28275,
      bookingDate: '2024-01-20',
      canCancel: true,
      canReschedule: true
    },
    {
      id: 'BK002',
      hotel: {
        name: 'Pokhara Lake Resort',
        location: 'Pokhara, Nepal',
        image: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
      },
      checkIn: '2024-01-10',
      checkOut: '2024-01-12',
      guests: 2,
      roomType: 'Lake View Suite',
      status: 'completed',
      total: 14670,
      bookingDate: '2024-01-05',
      canReview: true
    },
    {
      id: 'BK003',
      hotel: {
        name: 'Chitwan Safari Lodge',
        location: 'Chitwan, Nepal',
        image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2'
      },
      checkIn: '2024-03-01',
      checkOut: '2024-03-03',
      guests: 4,
      roomType: 'Family Room',
      status: 'cancelled',
      total: 10170,
      bookingDate: '2024-01-15',
      cancellationDate: '2024-01-25'
    }
  ];

  const filteredBookings = bookings.filter(booking => booking.status === activeTab);

  const handleCancelBooking = (bookingId) => {
    if (window.confirm('Are you sure you want to cancel this booking?')) {
      alert('Booking cancelled successfully');
    }
  };

  // const handleReschedule = (bookingId) => {
  //   alert('Reschedule functionality would be implemented here');
  // };

  const handleReschedule = (bookingId) => {
  setRescheduleBookingId(bookingId);
};

 const handleLeaveReview = (bookingId) => {
  setSelectedBookingId(bookingId);
};

  const getStatusIcon = (status) => {
    switch (status) {
      case 'upcoming':
        return <Clock className="w-5 h-5 text-blue-500" />;
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-500" />;
      case 'cancelled':
        return <X className="w-5 h-5 text-red-500" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Bookings</h1>
        <p className="text-gray-600">Manage your hotel reservations and past stays</p>
      </div>

      <div className="flex space-x-1 mb-8 bg-gray-100 p-1 rounded-lg">
        {[
          { key: 'upcoming', label: 'Upcoming', count: bookings.filter(b => b.status === 'upcoming').length },
          { key: 'completed', label: 'Completed', count: bookings.filter(b => b.status === 'completed').length },
          { key: 'cancelled', label: 'Cancelled', count: bookings.filter(b => b.status === 'cancelled').length }
        ].map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`flex-1 py-3 px-4 rounded-lg font-medium transition-colors ${
              activeTab === tab.key
                ? 'bg-white text-[#2F5249] shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      <div className="space-y-6">
        {filteredBookings.length === 0 ? (
          <div className="text-center py-12">
            <Calendar className="mx-auto h-16 w-16 text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No {activeTab} bookings
            </h3>
            <p className="text-gray-600 mb-6">
              {activeTab === 'upcoming' 
                ? "You don't have any upcoming bookings. Book your next stay!"
                : `You don't have any ${activeTab} bookings.`}
            </p>
            {activeTab === 'upcoming' && (
              <button
                onClick={() => navigate('/')}
                className="bg-[#2F5249] text-white px-6 py-3 rounded-lg hover:bg-[#437057] transition-colors font-medium"
              >
                Browse Hotels
              </button>
            )}
          </div>
        ) : (
          filteredBookings.map(booking => (
            <div key={booking.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                    <img
                      src={booking.hotel.image}
                      alt={booking.hotel.name}
                      className="w-20 h-20 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-bold text-gray-900">{booking.hotel.name}</h3>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                          {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600 mb-2">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{booking.hotel.location}</span>
                      </div>
                      <div className="text-sm text-gray-600">
                        Booking ID: {booking.id}
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600 mb-1">Check-in</div>
                      <div className="font-medium">{new Date(booking.checkIn).toLocaleDateString()}</div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Check-out</div>
                      <div className="font-medium">{new Date(booking.checkOut).toLocaleDateString()}</div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Guests</div>
                      <div className="font-medium flex items-center">
                        <Users size={16} className="mr-1" />
                        {booking.guests}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-600 mb-1">Room</div>
                      <div className="font-medium">{booking.roomType}</div>
                    </div>
                  </div>

                  <div className="text-right mt-4 lg:mt-0">
                    <div className="text-2xl font-bold text-[#2F5249]">
                      NPR {booking.total.toLocaleString()}
                    </div>
                    <div className="text-sm text-gray-600">Total paid</div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap gap-3">
                    {booking.status === 'upcoming' && (
                      <>
                        {booking.canCancel && (
                          <button
                            onClick={() => handleCancelBooking(booking.id)}
                            className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                          >
                            Cancel Booking
                          </button>
                        )}
                        {booking.canReschedule && (
                          <button
                            onClick={() => handleReschedule(booking.id)}
                            className="px-4 py-2 border border-[#437057] text-[#437057] rounded-lg hover:bg-[#437057] hover:text-white transition-colors"
                          >
                            Reschedule
                          </button>
                        )}
                      </>
                    )}
                    {booking.status === 'completed' && booking.canReview && (
                      <button
                        onClick={() => handleLeaveReview(booking.id)}
                        className="px-4 py-2 bg-[#2F5249] text-white rounded-lg hover:bg-[#437057] transition-colors flex items-center space-x-2"
                      >
                        <Star size={16} />
                        <span>Leave Review</span>
                      </button>
                    )}
                    <button
                      onClick={() => navigate(`/hotel/${booking.hotel.name.toLowerCase().replace(/\s+/g, '-')}`)}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      View Hotel
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
      {selectedBookingId && (
   <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">

    <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
      <button
        onClick={() => setSelectedBookingId(null)}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <X size={20} />
      </button>
      <h2 className="text-xl font-semibold mb-4">Leave a Review</h2>
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Rating:</label>
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={24}
              onClick={() => setRating(star)}
              className={`cursor-pointer ${
                rating >= star ? 'text-yellow-400' : 'text-gray-300'
              }`}
              fill={rating >= star ? '#facc15' : 'none'}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block mb-1 text-sm font-medium">Your Review:</label>
        <textarea
          className="w-full p-2 border rounded-md text-sm"
          rows={4}
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          alert(`Review submitted!\nRating: ${rating}\nMessage: ${reviewText}`);
          setSelectedBookingId(null);
          setRating(0);
          setReviewText('');
        }}
        className="w-full bg-[#2F5249] text-white py-2 rounded-md hover:bg-[#437057]"
      >
        Submit Review
      </button>
    </div>
  </div>
)}


{rescheduleBookingId && (
  <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
    <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-lg relative">
      <button
        onClick={() => {
          setRescheduleBookingId(null);
          setNewCheckIn('');
          setNewCheckOut('');
        }}
        className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
      >
        <X size={20} />
      </button>
      <h2 className="text-xl font-semibold mb-4">Reschedule Booking</h2>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">New Check-in Date</label>
        <input
          type="date"
          className="w-full border border-gray-300 rounded-md p-2 text-sm"
          value={newCheckIn}
          onChange={(e) => setNewCheckIn(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">New Check-out Date</label>
        <input
          type="date"
          className="w-full border border-gray-300 rounded-md p-2 text-sm"
          value={newCheckOut}
          onChange={(e) => setNewCheckOut(e.target.value)}
        />
      </div>
      <button
        onClick={() => {
          alert(`Booking rescheduled to:\nCheck-in: ${newCheckIn}\nCheck-out: ${newCheckOut}`);
          setRescheduleBookingId(null);
          setNewCheckIn('');
          setNewCheckOut('');
        }}
        className="w-full bg-[#2F5249] text-white py-2 rounded-md hover:bg-[#437057] transition-colors"
      >
        Confirm Reschedule
      </button>
    </div>
  </div>
)}

    </div>
  );
};

export default MyBookingsComponent;
