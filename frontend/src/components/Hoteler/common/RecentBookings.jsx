import React from 'react';
import { Calendar, User } from 'lucide-react';

const RecentBookings = () => {
  const bookings = [
    {
      id: 1,
      guest: 'Sarah Johnson',
      hotel: 'Grand Paradise Resort',
      date: '2024-01-15',
      status: 'Confirmed'
    },
    {
      id: 2,
      guest: 'Michael Chen',
      hotel: 'Ocean View Hotel',
      date: '2024-01-20',
      status: 'Checked-in'
    },
    {
      id: 3,
      guest: 'Emma Wilson',
      hotel: 'Mountain Lodge',
      date: '2024-01-10',
      status: 'Completed'
    }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'Checked-in':
        return 'bg-green-100 text-green-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-4">
      {bookings.map((booking) => (
        <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div className="flex items-center">
            <div className="h-10 w-10 bg-gray-300 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-gray-600" />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{booking.guest}</p>
              <p className="text-xs text-gray-500">{booking.hotel}</p>
            </div>
          </div>
          <div className="text-right">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-1" />
              {new Date(booking.date).toLocaleDateString()}
            </div>
            <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full mt-1 ${getStatusColor(booking.status)}`}>
              {booking.status}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentBookings;