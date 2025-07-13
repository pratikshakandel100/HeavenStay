import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Hotel, MapPin, Star, DollarSign, Eye, Edit, Trash2, CheckCircle, XCircle } from 'lucide-react';
import AdminButton from '../../components/Admin/AdminCommon/AdminButton';

const HotelListings = () => {
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: 'Grand Paradise Resort',
      location: 'Pokhara, Nepal',
      hotelier: 'John Smith',
      rating: 4.8,
      rooms: 45,
      price: 3500,
      status: 'Active',
      image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=400',
      bookings: 156,
      revenue: 125000,
      submissionDate: '2024-01-15'
    },
    {
      id: 2,
      name: 'Mountain View Lodge',
      location: 'Kathmandu, Nepal',
      hotelier: 'Sarah Johnson',
      rating: 4.6,
      rooms: 32,
      price: 2800,
      status: 'Pending',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400',
      bookings: 0,
      revenue: 0,
      submissionDate: '2024-01-20'
    },
    {
      id: 3,
      name: 'City Center Hotel',
      location: 'Kathmandu, Nepal',
      hotelier: 'Michael Chen',
      rating: 4.4,
      rooms: 28,
      price: 4200,
      status: 'Active',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=400',
      bookings: 89,
      revenue: 85000,
      submissionDate: '2024-01-10'
    },
    {
      id: 4,
      name: 'Lakeside Resort',
      location: 'Pokhara, Nepal',
      hotelier: 'Emma Wilson',
      rating: 4.2,
      rooms: 38,
      price: 3200,
      status: 'Suspended',
      image: 'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400',
      bookings: 67,
      revenue: 45000,
      submissionDate: '2023-12-20'
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showActionMenu, setShowActionMenu] = useState(null);

  const handleApprove = (hotelId) => {
    setHotels(hotels.map(hotel => 
      hotel.id === hotelId ? { ...hotel, status: 'Active' } : hotel
    ));
    setShowActionMenu(null);
    alert('Hotel listing approved successfully!');
  };

  const handleReject = (hotelId) => {
    if (window.confirm('Are you sure you want to reject this hotel listing?')) {
      setHotels(hotels.map(hotel => 
        hotel.id === hotelId ? { ...hotel, status: 'Rejected' } : hotel
      ));
      setShowActionMenu(null);
    }
  };

  const handleSuspend = (hotelId) => {
    if (window.confirm('Are you sure you want to suspend this hotel listing?')) {
      setHotels(hotels.map(hotel => 
        hotel.id === hotelId ? { ...hotel, status: 'Suspended' } : hotel
      ));
      setShowActionMenu(null);
    }
  };

  const handleDelete = (hotelId) => {
    if (window.confirm('Are you sure you want to delete this hotel listing? This action cannot be undone.')) {
      setHotels(hotels.filter(hotel => hotel.id !== hotelId));
      setShowActionMenu(null);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Active':
        return 'bg-green-100 text-green-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      case 'Suspended':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredHotels = hotels.filter(hotel => {
    const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hotel.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hotel.hotelier.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || hotel.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Hotel Listings Management</h2>
          <p className="text-gray-600">Review and manage all hotel listings on the platform</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search hotels by name, location, or hotelier..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="All">All Status</option>
              <option value="Active">Active</option>
              <option value="Pending">Pending</option>
              <option value="Rejected">Rejected</option>
              <option value="Suspended">Suspended</option>
            </select>
          </div>
        </div>
      </div>

      {/* Hotels Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHotels.map((hotel) => (
          <div key={hotel.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="relative">
              <img 
                src={hotel.image} 
                alt={hotel.name}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(hotel.status)}`}>
                  {hotel.status}
                </span>
              </div>
              <div className="absolute top-3 left-3">
                <div className="flex items-center bg-white bg-opacity-90 px-2 py-1 rounded">
                  <Star className="h-3 w-3 text-yellow-400 mr-1" />
                  <span className="text-xs font-medium">{hotel.rating}</span>
                </div>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{hotel.name}</h3>
                <div className="relative">
                  <button
                    onClick={() => setShowActionMenu(showActionMenu === hotel.id ? null : hotel.id)}
                    className="p-1 hover:bg-gray-100 rounded"
                  >
                    <MoreVertical className="h-4 w-4 text-gray-500" />
                  </button>
                  
                  {showActionMenu === hotel.id && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                      <div className="p-2">
                        <button
                          onClick={() => alert('View hotel details')}
                          className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg flex items-center"
                        >
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </button>
                        {hotel.status === 'Pending' && (
                          <>
                            <button
                              onClick={() => handleApprove(hotel.id)}
                              className="w-full text-left px-3 py-2 text-sm text-green-600 hover:bg-green-50 rounded-lg flex items-center"
                            >
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Approve
                            </button>
                            <button
                              onClick={() => handleReject(hotel.id)}
                              className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg flex items-center"
                            >
                              <XCircle className="h-4 w-4 mr-2" />
                              Reject
                            </button>
                          </>
                        )}
                        {hotel.status === 'Active' && (
                          <button
                            onClick={() => handleSuspend(hotel.id)}
                            className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg flex items-center"
                          >
                            <XCircle className="h-4 w-4 mr-2" />
                            Suspend
                          </button>
                        )}
                        <button
                          onClick={() => alert('Edit hotel details')}
                          className="w-full text-left px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg flex items-center"
                        >
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(hotel.id)}
                          className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg flex items-center"
                        >
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              <div className="flex items-center text-gray-600 mb-2">
                <MapPin className="h-4 w-4 mr-1" />
                <span className="text-sm">{hotel.location}</span>
              </div>
              
              <div className="text-sm text-gray-600 mb-3">
                Managed by: {hotel.hotelier}
              </div>
              
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center">
                  <Hotel className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-sm">{hotel.rooms} rooms</span>
                </div>
                <div className="flex items-center">
                  <DollarSign className="h-4 w-4 text-gray-400 mr-1" />
                  <span className="text-sm font-medium">Rs. {hotel.price}/night</span>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-500">Bookings:</span>
                  <span className="font-medium ml-1">{hotel.bookings}</span>
                </div>
                <div>
                  <span className="text-gray-500">Revenue:</span>
                  <span className="font-medium ml-1">Rs. {hotel.revenue.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-gray-900">{hotels.length}</div>
          <div className="text-sm text-gray-600">Total Hotels</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-green-600">{hotels.filter(h => h.status === 'Active').length}</div>
          <div className="text-sm text-gray-600">Active Hotels</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-yellow-600">{hotels.filter(h => h.status === 'Pending').length}</div>
          <div className="text-sm text-gray-600">Pending Approval</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-gray-600">{hotels.reduce((sum, h) => sum + h.revenue, 0).toLocaleString()}</div>
          <div className="text-sm text-gray-600">Total Revenue (Rs.)</div>
        </div>
      </div>
    </div>
  );
};

export default HotelListings;