import React, { useState } from 'react';
import { Calendar, User, DollarSign, Clock, CheckCircle, XCircle } from 'lucide-react';
import Button from '../../components/Hoteler/common/Button';

const Bookings = () => {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      guestName: 'Sarah Johnson',
      guestEmail: 'sarah.johnson@email.com',
      hotel: 'Grand Paradise Resort',
      checkIn: '2024-01-15',
      checkOut: '2024-01-18',
      guests: 2,
      amount: '$360',
      status: 'Confirmed',
      phone: '+1 555-0123'
    },
    {
      id: 2,
      guestName: 'Michael Chen',
      guestEmail: 'michael.chen@email.com',
      hotel: 'Ocean View Hotel',
      checkIn: '2024-01-20',
      checkOut: '2024-01-25',
      guests: 4,
      amount: '$1,250',
      status: 'Checked-in',
      phone: '+1 555-0456'
    },
    {
      id: 3,
      guestName: 'Emma Wilson',
      guestEmail: 'emma.wilson@email.com',
      hotel: 'Mountain Lodge',
      checkIn: '2024-01-10',
      checkOut: '2024-01-12',
      guests: 2,
      amount: '$360',
      status: 'Completed',
      phone: '+1 555-0789'
    },
    {
      id: 4,
      guestName: 'David Rodriguez',
      guestEmail: 'david.rodriguez@email.com',
      hotel: 'Grand Paradise Resort',
      checkIn: '2024-01-25',
      checkOut: '2024-01-28',
      guests: 3,
      amount: '$450',
      status: 'Cancelled',
      phone: '+1 555-0321'
    }
  ]);

  const [statusFilter, setStatusFilter] = useState('All');

  const updateBookingStatus = (id, newStatus) => {
    setBookings(bookings.map(booking =>
      booking.id === id ? { ...booking, status: newStatus } : booking
    ));
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'Checked-in':
        return 'bg-green-100 text-green-800';
      case 'Completed':
        return 'bg-gray-100 text-gray-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Confirmed':
        return <Clock className="h-4 w-4" />;
      case 'Checked-in':
        return <CheckCircle className="h-4 w-4" />;
      case 'Completed':
        return <CheckCircle className="h-4 w-4" />;
      case 'Cancelled':
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const filteredBookings = statusFilter === 'All' 
    ? bookings 
    : bookings.filter(booking => booking.status === statusFilter);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Booking Management</h2>
          <p className="text-gray-600">View and manage all your hotel bookings</p>
        </div>
        
        {/* Status Filter */}
        <div className="flex space-x-2">
          {['All', 'Confirmed', 'Checked-in', 'Completed', 'Cancelled'].map((status) => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                statusFilter === status
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Bookings List */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guest Information
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hotel
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Dates
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Guests
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <User className="h-5 w-5 text-gray-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">
                          {booking.guestName}
                        </div>
                        <div className="text-sm text-gray-500">
                          {booking.guestEmail}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.hotel}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {new Date(booking.checkIn).toLocaleDateString()} - 
                      {new Date(booking.checkOut).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{booking.guests}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{booking.amount}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                      {getStatusIcon(booking.status)}
                      <span className="ml-1">{booking.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      {booking.status === 'Confirmed' && (
                        <Button
                          onClick={() => updateBookingStatus(booking.id, 'Checked-in')}
                          size="sm"
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Check In
                        </Button>
                      )}
                      {booking.status === 'Checked-in' && (
                        <Button
                          onClick={() => updateBookingStatus(booking.id, 'Completed')}
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Complete
                        </Button>
                      )}
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => alert(`Calling ${booking.phone}`)}
                      >
                        Contact
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Bookings;