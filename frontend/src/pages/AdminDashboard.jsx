import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  User, 
  Calendar, 
  DollarSign, 
  Users, 
  TrendingUp, 
  MapPin, 
  Star, 
  Filter,
  MoreVertical,
  Eye,
  Edit,
  Trash2,
  Plus,
  Download,
  Settings,
  LogOut,
  Home,
  BookOpen,
  BarChart3,
  MessageSquare,
  CreditCard,
  Shield
} from 'lucide-react';
import '../style/AdminDashboard.css'

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');

  // Mock data
  const stats = [
    { title: 'Total Revenue', value: 'NPR 2,45,000', change: '+12%', icon: DollarSign, trend: 'up' },
    { title: 'Active Bookings', value: '156', change: '+8%', icon: BookOpen, trend: 'up' },
    { title: 'Total Guests', value: '1,247', change: '+15%', icon: Users, trend: 'up' },
    { title: 'Occupancy Rate', value: '78%', change: '+5%', icon: TrendingUp, trend: 'up' }
  ];

  const recentBookings = [
    {
      id: 'BK001',
      guest: 'Rajesh Sharma',
      property: 'Himalayan Heritage Hotel',
      checkIn: '2025-01-15',
      checkOut: '2025-01-18',
      amount: 'NPR 15,600',
      status: 'confirmed',
      nights: 3
    },
    {
      id: 'BK002',
      guest: 'Sarah Johnson',
      property: 'Lakeside Paradise Resort',
      checkIn: '2025-01-16',
      checkOut: '2025-01-20',
      amount: 'NPR 28,800',
      status: 'pending',
      nights: 4
    },
    {
      id: 'BK003',
      guest: 'Michael Chen',
      property: 'Mountain View Lodge',
      checkIn: '2025-01-14',
      checkOut: '2025-01-17',
      amount: 'NPR 19,200',
      status: 'confirmed',
      nights: 3
    },
    {
      id: 'BK004',
      guest: 'Priya Patel',
      property: 'Ancient City Guesthouse',
      checkIn: '2025-01-17',
      checkOut: '2025-01-19',
      amount: 'NPR 8,400',
      status: 'cancelled',
      nights: 2
    }
  ];

  const properties = [
    {
      id: 1,
      name: 'Himalayan Heritage Hotel',
      location: 'Kathmandu',
      rating: 4.8,
      occupancy: 85,
      revenue: 'NPR 45,000',
      status: 'active'
    },
    {
      id: 2,
      name: 'Lakeside Paradise Resort',
      location: 'Pokhara',
      rating: 4.9,
      occupancy: 92,
      revenue: 'NPR 67,200',
      status: 'active'
    },
    {
      id: 3,
      name: 'Mountain View Lodge',
      location: 'Nagarkot',
      rating: 4.7,
      occupancy: 78,
      revenue: 'NPR 32,800',
      status: 'active'
    }
  ];

  const sidebarItems = [
    { id: 'overview', label: 'Overview', icon: Home },
    { id: 'bookings', label: 'Bookings', icon: BookOpen },
    { id: 'properties', label: 'Properties', icon: MapPin },
    { id: 'guests', label: 'Guests', icon: Users },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'messages', label: 'Messages', icon: MessageSquare },
    { id: 'payments', label: 'Payments', icon: CreditCard },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  const getStatusClass = (status) => {
    switch (status) {
      case 'confirmed': return 'status-confirmed';
      case 'pending': return 'status-pending';
      case 'cancelled': return 'status-cancelled';
      default: return '';
    }
  };

  const filteredBookings = recentBookings.filter(booking => {
    const matchesSearch = booking.guest.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.property.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'all' || booking.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo">
            <Home className="logo-icon" />
            <span className="logo-text">HeavenStay</span>
          </div>
        </div>

        <nav className="sidebar-nav">
          {sidebarItems.map(item => (
            <button
              key={item.id}
              className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
              onClick={() => setActiveTab(item.id)}
            >
              <item.icon className="nav-icon" />
              <span className="nav-label">{item.label}</span>
            </button>
          ))}
        </nav>

        <div className="sidebar-footer">
          <button className="nav-item">
            <Shield className="nav-icon" />
            <span className="nav-label">Help & Support</span>
          </button>
          <button className="nav-item">
            <LogOut className="nav-icon" />
            <span className="nav-label">Logout</span>
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Header */}
        <header className="header">
          <div className="header-left">
            <h1 className="page-title">Dashboard Overview</h1>
            <p className="page-subtitle">Welcome back! Here's what's happening with your properties.</p>
          </div>

          <div className="header-right">
            <div className="search-container">
              <Search className="search-icon" />
              <input
                type="text"
                placeholder="Search bookings, guests..."
                className="search-input"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <button className="notification-btn">
              <Bell className="notification-icon" />
              <span className="notification-badge">3</span>
            </button>

            <div className="user-menu">
              <div className="user-avatar">
                <User className="user-icon" />
              </div>
              <div className="user-info">
                <span className="user-name">Admin User</span>
                <span className="user-role">Property Manager</span>
              </div>
            </div>
          </div>
        </header>

        {/* Stats Cards */}
        <section className="stats-section">
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card">
                <div className="stat-header">
                  <div className="stat-icon-container">
                    <stat.icon className="stat-icon" />
                  </div>
                  <span className={`stat-change ${stat.trend}`}>{stat.change}</span>
                </div>
                <div className="stat-content">
                  <h3 className="stat-value">{stat.value}</h3>
                  <p className="stat-title">{stat.title}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Content Sections */}
        <div className="content-grid">
          {/* Recent Bookings */}
          <section className="content-card bookings-card">
            <div className="card-header">
              <div className="card-title-section">
                <h2 className="card-title">Recent Bookings</h2>
                <p className="card-subtitle">Latest reservation activity</p>
              </div>
              <div className="card-actions">
                <select 
                  className="filter-select"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">All Status</option>
                  <option value="confirmed">Confirmed</option>
                  <option value="pending">Pending</option>
                  <option value="cancelled">Cancelled</option>
                </select>
                <button className="action-btn primary">
                  <Plus className="btn-icon" />
                  New Booking
                </button>
              </div>
            </div>

            <div className="table-container">
              <table className="bookings-table">
                <thead>
                  <tr>
                    <th>Booking ID</th>
                    <th>Guest</th>
                    <th>Property</th>
                    <th>Check-in</th>
                    <th>Nights</th>
                    <th>Amount</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredBookings.map(booking => (
                    <tr key={booking.id}>
                      <td className="booking-id">{booking.id}</td>
                      <td className="guest-name">{booking.guest}</td>
                      <td className="property-name">{booking.property}</td>
                      <td className="check-in-date">{booking.checkIn}</td>
                      <td className="nights-count">{booking.nights}</td>
                      <td className="booking-amount">{booking.amount}</td>
                      <td>
                        <span className={`status-badge ${getStatusClass(booking.status)}`}>
                          {booking.status}
                        </span>
                      </td>
                      <td>
                        <div className="action-buttons">
                          <button className="action-btn-small">
                            <Eye className="action-icon" />
                          </button>
                          <button className="action-btn-small">
                            <Edit className="action-icon" />
                          </button>
                          <button className="action-btn-small danger">
                            <Trash2 className="action-icon" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Properties Overview */}
          <section className="content-card properties-card">
            <div className="card-header">
              <div className="card-title-section">
                <h2 className="card-title">Properties Performance</h2>
                <p className="card-subtitle">Your property portfolio overview</p>
              </div>
              <button className="action-btn secondary">
                <Download className="btn-icon" />
                Export Report
              </button>
            </div>

            <div className="properties-list">
              {properties.map(property => (
                <div key={property.id} className="property-item">
                  <div className="property-info">
                    <h3 className="property-name">{property.name}</h3>
                    <div className="property-details">
                      <span className="property-location">
                        <MapPin className="location-icon" />
                        {property.location}
                      </span>
                      <span className="property-rating">
                        <Star className="star-icon" />
                        {property.rating}
                      </span>
                    </div>
                  </div>
                  
                  <div className="property-metrics">
                    <div className="metric">
                      <span className="metric-label">Occupancy</span>
                      <div className="occupancy-bar">
                        <div 
                          className="occupancy-fill" 
                          style={{ width: `${property.occupancy}%` }}
                        ></div>
                      </div>
                      <span className="metric-value">{property.occupancy}%</span>
                    </div>
                    
                    <div className="metric">
                      <span className="metric-label">Revenue</span>
                      <span className="metric-value revenue">{property.revenue}</span>
                    </div>
                  </div>

                  <button className="property-menu">
                    <MoreVertical className="menu-icon" />
                  </button>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Quick Actions */}
        <section className="quick-actions">
          <h2 className="section-title">Quick Actions</h2>
          <div className="actions-grid">
            <button className="quick-action-card">
              <Plus className="action-card-icon" />
              <span className="action-card-label">Add New Property</span>
            </button>
            <button className="quick-action-card">
              <Calendar className="action-card-icon" />
              <span className="action-card-label">Manage Calendar</span>
            </button>
            <button className="quick-action-card">
              <MessageSquare className="action-card-icon" />
              <span className="action-card-label">Guest Messages</span>
            </button>
            <button className="quick-action-card">
              <BarChart3 className="action-card-icon" />
              <span className="action-card-label">View Analytics</span>
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminDashboard;