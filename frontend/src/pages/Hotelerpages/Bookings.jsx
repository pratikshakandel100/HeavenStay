import React, { useState } from 'react';
import { Calendar, User, DollarSign, Clock, CheckCircle, XCircle, Phone, Mail, MapPin } from 'lucide-react';

const Button = ({ children, onClick, size = 'md', variant = 'primary', className = '', ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-6 py-3 text-base'
  };
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    outline: 'border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500'
  };
  
  return (
    <button
      className={`${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};

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
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Booking Management</h2>
            <p className="text-gray-600 mt-1">View and manage all your hotel bookings</p>
          </div>
          
          {/* Status Filter */}
          <div className="flex flex-wrap gap-2">
            {['All', 'Confirmed', 'Checked-in', 'Completed', 'Cancelled'].map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
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

        {/* Desktop Table View */}
        <div className="hidden lg:block bg-white rounded-lg shadow-sm overflow-hidden">
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

        {/* Mobile Card View */}
        <div className="lg:hidden space-y-4">
          {filteredBookings.map((booking) => (
            <div key={booking.id} className="bg-white rounded-lg shadow-sm p-4 border border-gray-200">
              {/* Guest Info Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-600" />
                  </div>
                  <div className="ml-3">
                    <h3 className="text-lg font-medium text-gray-900">{booking.guestName}</h3>
                    <p className="text-sm text-gray-500 flex items-center">
                      <Mail className="h-4 w-4 mr-1" />
                      {booking.guestEmail}
                    </p>
                  </div>
                </div>
                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(booking.status)}`}>
                  {getStatusIcon(booking.status)}
                  <span className="ml-1">{booking.status}</span>
                </span>
              </div>

              {/* Hotel Info */}
              <div className="mb-4">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span className="font-medium">{booking.hotel}</span>
                </div>
              </div>

              {/* Booking Details Grid */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Check-in</p>
                  <p className="text-sm font-medium text-gray-900">
                    {new Date(booking.checkIn).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Check-out</p>
                  <p className="text-sm font-medium text-gray-900">
                    {new Date(booking.checkOut).toLocaleDateString()}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Guests</p>
                  <p className="text-sm font-medium text-gray-900">{booking.guests}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Amount</p>
                  <p className="text-sm font-medium text-gray-900">{booking.amount}</p>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-2 pt-4 border-t border-gray-200">
                {booking.status === 'Confirmed' && (
                  <Button
                    onClick={() => updateBookingStatus(booking.id, 'Checked-in')}
                    size="sm"
                    className="bg-green-600 hover:bg-green-700 flex-1"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Check In
                  </Button>
                )}
                {booking.status === 'Checked-in' && (
                  <Button
                    onClick={() => updateBookingStatus(booking.id, 'Completed')}
                    size="sm"
                    className="bg-blue-600 hover:bg-blue-700 flex-1"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Complete
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => alert(`Calling ${booking.phone}`)}
                  className="flex-1"
                >
                  <Phone className="h-4 w-4 mr-2" />
                  Contact
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredBookings.length === 0 && (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No bookings found</h3>
            <p className="text-gray-500">
              {statusFilter === 'All' 
                ? 'No bookings available at the moment.' 
                : `No bookings with status "${statusFilter}" found.`}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bookings;