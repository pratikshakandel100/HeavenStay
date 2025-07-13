import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Hotel, MapPin, Star, DollarSign, Eye, Edit, Trash2, CheckCircle, XCircle, X } from 'lucide-react';
import AdminButton from '../../components/Admin/AdminCommon/AdminButton';
import AdminModal from '../../components/Admin/AdminCommon/AdminModal';

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
      submissionDate: '2024-01-15',
      description: 'Luxury resort with stunning mountain views and world-class amenities.',
      amenities: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Gym', 'Room Service'],
      contact: {
        phone: '+977-61-123456',
        email: 'info@grandparadise.com'
      },
      policies: {
        checkIn: '2:00 PM',
        checkOut: '12:00 PM',
        cancellation: 'Free cancellation up to 24 hours before check-in'
      }
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
      submissionDate: '2024-01-20',
      description: 'Cozy lodge nestled in the heart of the Himalayas.',
      amenities: ['WiFi', 'Restaurant', 'Parking', 'Heating'],
      contact: {
        phone: '+977-1-234567',
        email: 'info@mountainview.com'
      },
      policies: {
        checkIn: '3:00 PM',
        checkOut: '11:00 AM',
        cancellation: 'Free cancellation up to 48 hours before check-in'
      }
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
      submissionDate: '2024-01-10',
      description: 'Modern hotel in the bustling city center with easy access to attractions.',
      amenities: ['WiFi', 'Business Center', 'Restaurant', 'Laundry', 'Concierge'],
      contact: {
        phone: '+977-1-345678',
        email: 'info@citycenter.com'
      },
      policies: {
        checkIn: '2:00 PM',
        checkOut: '12:00 PM',
        cancellation: 'Free cancellation up to 24 hours before check-in'
      }
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
      submissionDate: '2023-12-20',
      description: 'Peaceful lakeside resort perfect for relaxation and water activities.',
      amenities: ['WiFi', 'Lake Access', 'Boat Rental', 'Restaurant', 'Spa'],
      contact: {
        phone: '+977-61-456789',
        email: 'info@lakeside.com'
      },
      policies: {
        checkIn: '2:00 PM',
        checkOut: '11:00 AM',
        cancellation: 'Free cancellation up to 72 hours before check-in'
      }
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showActionMenu, setShowActionMenu] = useState(null);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleViewDetails = (hotel) => {
    setSelectedHotel(hotel);
    setShowDetailsModal(true);
    setShowActionMenu(null);
  };

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
                          onClick={() => handleViewDetails(hotel)}
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

      {/* Hotel Details Modal */}
      {showDetailsModal && selectedHotel && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-screen items-center justify-center p-4">
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setShowDetailsModal(false)} />
            
            <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between p-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-900">Hotel Details</h3>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>
              
              <div className="p-6">
                {/* Hotel Image */}
                <div className="mb-6">
                  <img 
                    src={selectedHotel.image} 
                    alt={selectedHotel.name}
                    className="w-full h-64 object-cover rounded-lg"
                  />
                </div>

                {/* Basic Info */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-500">Hotel Name:</span>
                        <p className="text-gray-900">{selectedHotel.name}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Location:</span>
                        <p className="text-gray-900">{selectedHotel.location}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Hotelier:</span>
                        <p className="text-gray-900">{selectedHotel.hotelier}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Rating:</span>
                        <div className="flex items-center">
                          <Star className="h-4 w-4 text-yellow-400 mr-1" />
                          <span className="text-gray-900">{selectedHotel.rating}</span>
                        </div>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Status:</span>
                        <span className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ml-2 ${getStatusColor(selectedHotel.status)}`}>
                          {selectedHotel.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Business Details</h4>
                    <div className="space-y-3">
                      <div>
                        <span className="text-sm font-medium text-gray-500">Total Rooms:</span>
                        <p className="text-gray-900">{selectedHotel.rooms}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Price per Night:</span>
                        <p className="text-gray-900">Rs. {selectedHotel.price}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Total Bookings:</span>
                        <p className="text-gray-900">{selectedHotel.bookings}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Total Revenue:</span>
                        <p className="text-gray-900">Rs. {selectedHotel.revenue.toLocaleString()}</p>
                      </div>
                      <div>
                        <span className="text-sm font-medium text-gray-500">Submission Date:</span>
                        <p className="text-gray-900">{new Date(selectedHotel.submissionDate).toLocaleDateString()}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Description</h4>
                  <p className="text-gray-700">{selectedHotel.description}</p>
                </div>

                {/* Amenities */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">Amenities</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedHotel.amenities.map((amenity, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full"
                      >
                        {amenity}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Contact & Policies */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Contact Information</h4>
                    <div className="space-y-2">
                      <p className="text-sm"><span className="font-medium">Phone:</span> {selectedHotel.contact.phone}</p>
                      <p className="text-sm"><span className="font-medium">Email:</span> {selectedHotel.contact.email}</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">Policies</h4>
                    <div className="space-y-2">
                      <p className="text-sm"><span className="font-medium">Check-in:</span> {selectedHotel.policies.checkIn}</p>
                      <p className="text-sm"><span className="font-medium">Check-out:</span> {selectedHotel.policies.checkOut}</p>
                      <p className="text-sm"><span className="font-medium">Cancellation:</span> {selectedHotel.policies.cancellation}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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