import React, { useState } from 'react';
import { Search, Filter, MoreVertical, Building, Mail, Phone, Calendar, CheckCircle, XCircle, Clock, Ban, Shield } from 'lucide-react';
import Button from '../../components/Hoteler/common/Button';

const HotelierManagement = () => {
  const [hoteliers, setHoteliers] = useState([
    {
      id: 1,
      name: 'Grand Paradise Resort',
      ownerName: 'John Smith',
      email: 'john@grandparadise.com',
      phone: '+977-61-123456',
      location: 'Pokhara, Nepal',
      registrationDate: '2024-01-15',
      status: 'Pending',
      hotels: 0,
      documents: ['Business License', 'Tax Certificate'],
      revenue: 0
    },
    {
      id: 2,
      name: 'Mountain View Lodge',
      ownerName: 'Sarah Johnson',
      email: 'sarah@mountainview.com',
      phone: '+977-61-234567',
      location: 'Kathmandu, Nepal',
      registrationDate: '2024-01-10',
      status: 'Approved',
      hotels: 3,
      documents: ['Business License', 'Tax Certificate', 'Tourism License'],
      revenue: 125000
    },
    {
      id: 3,
      name: 'City Center Hotel',
      ownerName: 'Michael Chen',
      email: 'michael@citycenter.com',
      phone: '+977-1-345678',
      location: 'Kathmandu, Nepal',
      registrationDate: '2024-01-05',
      status: 'Approved',
      hotels: 1,
      documents: ['Business License', 'Tax Certificate'],
      revenue: 85000
    },
    {
      id: 4,
      name: 'Lakeside Resort',
      ownerName: 'Emma Wilson',
      email: 'emma@lakeside.com',
      phone: '+977-61-456789',
      location: 'Pokhara, Nepal',
      registrationDate: '2023-12-20',
      status: 'Suspended',
      hotels: 2,
      documents: ['Business License'],
      revenue: 45000
    }
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [showActionMenu, setShowActionMenu] = useState(null);

  const handleApprove = (hotelierId) => {
    setHoteliers(hoteliers.map(hotelier => 
      hotelier.id === hotelierId ? { ...hotelier, status: 'Approved' } : hotelier
    ));
    setShowActionMenu(null);
    alert('Hotelier approved successfully!');
  };

  const handleReject = (hotelierId) => {
    if (window.confirm('Are you sure you want to reject this hotelier application?')) {
      setHoteliers(hoteliers.map(hotelier => 
        hotelier.id === hotelierId ? { ...hotelier, status: 'Rejected' } : hotelier
      ));
      setShowActionMenu(null);
    }
  };

  const handleSuspend = (hotelierId) => {
    if (window.confirm('Are you sure you want to suspend this hotelier?')) {
      setHoteliers(hoteliers.map(hotelier => 
        hotelier.id === hotelierId ? { ...hotelier, status: 'Suspended' } : hotelier
      ));
      setShowActionMenu(null);
    }
  };

  const handleReactivate = (hotelierId) => {
    setHoteliers(hoteliers.map(hotelier => 
      hotelier.id === hotelierId ? { ...hotelier, status: 'Approved' } : hotelier
    ));
    setShowActionMenu(null);
    alert('Hotelier reactivated successfully!');
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Approved':
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

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle className="h-4 w-4" />;
      case 'Pending':
        return <Clock className="h-4 w-4" />;
      case 'Rejected':
        return <XCircle className="h-4 w-4" />;
      case 'Suspended':
        return <Ban className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const filteredHoteliers = hoteliers.filter(hotelier => {
    const matchesSearch = hotelier.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hotelier.ownerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         hotelier.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All' || hotelier.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Hotelier Management</h2>
          <p className="text-gray-600">Manage hotelier registrations and accounts</p>
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
                placeholder="Search hoteliers by name, owner, or email..."
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
              <option value="Pending">Pending</option>
              <option value="Approved">Approved</option>
              <option value="Rejected">Rejected</option>
              <option value="Suspended">Suspended</option>
            </select>
          </div>
        </div>
      </div>

      {/* Hoteliers Table */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hotelier
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Location
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hotels
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Revenue
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
              {filteredHoteliers.map((hotelier) => (
                <tr key={hotelier.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center">
                        <Building className="h-5 w-5 text-gray-600" />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{hotelier.name}</div>
                        <div className="text-sm text-gray-500">{hotelier.ownerName}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900 flex items-center">
                      <Mail className="h-4 w-4 mr-1 text-gray-400" />
                      {hotelier.email}
                    </div>
                    <div className="text-sm text-gray-500 flex items-center mt-1">
                      <Phone className="h-4 w-4 mr-1 text-gray-400" />
                      {hotelier.phone}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{hotelier.location}</div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Calendar className="h-4 w-4 mr-1 text-gray-400" />
                      {new Date(hotelier.registrationDate).toLocaleDateString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{hotelier.hotels}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      Rs. {hotelier.revenue.toLocaleString()}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(hotelier.status)}`}>
                      {getStatusIcon(hotelier.status)}
                      <span className="ml-1">{hotelier.status}</span>
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="relative">
                      <button
                        onClick={() => setShowActionMenu(showActionMenu === hotelier.id ? null : hotelier.id)}
                        className="p-2 hover:bg-gray-100 rounded-lg"
                      >
                        <MoreVertical className="h-4 w-4 text-gray-500" />
                      </button>
                      
                      {showActionMenu === hotelier.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-10">
                          <div className="p-2">
                            {hotelier.status === 'Pending' && (
                              <>
                                <button
                                  onClick={() => handleApprove(hotelier.id)}
                                  className="w-full text-left px-3 py-2 text-sm text-green-600 hover:bg-green-50 rounded-lg flex items-center"
                                >
                                  <CheckCircle className="h-4 w-4 mr-2" />
                                  Approve
                                </button>
                                <button
                                  onClick={() => handleReject(hotelier.id)}
                                  className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg flex items-center"
                                >
                                  <XCircle className="h-4 w-4 mr-2" />
                                  Reject
                                </button>
                              </>
                            )}
                            {hotelier.status === 'Approved' && (
                              <button
                                onClick={() => handleSuspend(hotelier.id)}
                                className="w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg flex items-center"
                              >
                                <Ban className="h-4 w-4 mr-2" />
                                Suspend
                              </button>
                            )}
                            {hotelier.status === 'Suspended' && (
                              <button
                                onClick={() => handleReactivate(hotelier.id)}
                                className="w-full text-left px-3 py-2 text-sm text-green-600 hover:bg-green-50 rounded-lg flex items-center"
                              >
                                <Shield className="h-4 w-4 mr-2" />
                                Reactivate
                              </button>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-yellow-600">{hoteliers.filter(h => h.status === 'Pending').length}</div>
          <div className="text-sm text-gray-600">Pending Approval</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-green-600">{hoteliers.filter(h => h.status === 'Approved').length}</div>
          <div className="text-sm text-gray-600">Approved</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-red-600">{hoteliers.filter(h => h.status === 'Suspended').length}</div>
          <div className="text-sm text-gray-600">Suspended</div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow-sm">
          <div className="text-2xl font-bold text-gray-600">{hoteliers.reduce((sum, h) => sum + h.revenue, 0).toLocaleString()}</div>
          <div className="text-sm text-gray-600">Total Revenue (Rs.)</div>
        </div>
      </div>
    </div>
  );
};

export default HotelierManagement;