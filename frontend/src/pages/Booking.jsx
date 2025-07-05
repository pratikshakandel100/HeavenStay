import React, { useState } from 'react';
import { 
  Plus,
  Filter,
  Search,
  Calendar,
  MapPin,
  Clock,
  CheckCircle,
  XCircle,
  Eye,
  Edit,
  Star,
  Download,
  Users
} from 'lucide-react';
import '../style/Booking.css';

function Bookings() {
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const bookings = [
    {
      id: 1,
      title: "Everest Base Camp Trek",
      image: "https://images.pexels.com/photos/2259917/pexels-photo-2259917.jpeg?auto=compress&cs=tinysrgb&w=300",
      date: "March 15 - March 25, 2024",
      duration: "10 days",
      status: "confirmed",
      participants: 8,
      guide: "Pemba Sherpa",
      difficulty: "Challenging"
    },
    {
      id: 2,
      title: "Pokhara Lake Adventure",
      image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=300",
      date: "April 10 - April 15, 2024",
      duration: "5 days",
      status: "pending",
      participants: 12,
      guide: "Raj Kumar",
      difficulty: "Moderate"
    },
    {
      id: 3,
      title: "Kathmandu Cultural Tour",
      image: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=300",
      date: "February 20 - February 25, 2024",
      duration: "5 days",
      status: "completed",
      participants: 15,
      guide: "Maya Tamang",
      difficulty: "Easy"
    },
    {
      id: 4,
      title: "Annapurna Circuit Trek",
      image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=300",
      date: "May 20 - June 5, 2024",
      duration: "16 days",
      status: "planning",
      participants: 6,
      guide: "Tenzin Norbu",
      difficulty: "Challenging"
    },
    {
      id: 5,
      title: "Chitwan Safari Experience",
      image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=300",
      date: "June 15 - June 18, 2024",
      duration: "3 days",
      status: "confirmed",
      participants: 10,
      guide: "Bikash Tharu",
      difficulty: "Easy"
    }
  ];

  const filteredBookings = bookings.filter(booking => {
    const matchesStatus = filterStatus === 'all' || booking.status === filterStatus;
    const matchesSearch = booking.title.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesStatus && matchesSearch;
  });

  return (
    <div className="bookings-container">
      {/* Header Section */}
      <div className="bookings-header">
        <div className="header-content">
          <h2>My Bookings</h2>
          <p>Manage your travel adventures and upcoming trips</p>
        </div>
        <button className="new-booking-btn">
          <Plus size={20} />
          New Booking
        </button>
      </div>

      {/* Filters and Search */}
      <div className="filters-section">
        <div className="search-container">
          <Search size={20} />
          <input 
            type="text" 
            placeholder="Search bookings..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="filter-tabs">
          <button 
            className={`filter-tab ${filterStatus === 'all' ? 'active' : ''}`}
            onClick={() => setFilterStatus('all')}
          >
            All Bookings
          </button>
          <button 
            className={`filter-tab ${filterStatus === 'confirmed' ? 'active' : ''}`}
            onClick={() => setFilterStatus('confirmed')}
          >
            Confirmed
          </button>
          <button 
            className={`filter-tab ${filterStatus === 'pending' ? 'active' : ''}`}
            onClick={() => setFilterStatus('pending')}
          >
            Pending
          </button>
          <button 
            className={`filter-tab ${filterStatus === 'completed' ? 'active' : ''}`}
            onClick={() => setFilterStatus('completed')}
          >
            Completed
          </button>
          <button 
            className={`filter-tab ${filterStatus === 'planning' ? 'active' : ''}`}
            onClick={() => setFilterStatus('planning')}
          >
            Planning
          </button>
        </div>

        <button className="filter-btn">
          <Filter size={20} />
          More Filters
        </button>
      </div>

      {/* Bookings List */}
      <div className="bookings-list">
        {filteredBookings.map(booking => (
          <div key={booking.id} className="booking-card">
            <div className="booking-image">
              <img src={booking.image} alt={booking.title} />
              <div className="booking-status-overlay">
                <span className={`status-badge ${booking.status}`}>
                  {booking.status === 'confirmed' && <CheckCircle size={14} />}
                  {booking.status === 'pending' && <Clock size={14} />}
                  {booking.status === 'completed' && <Star size={14} />}
                  {booking.status === 'planning' && <Edit size={14} />}
                  {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                </span>
              </div>
            </div>

            <div className="booking-details">
              <div className="booking-main">
                <h3>{booking.title}</h3>
                <div className="booking-meta">
                  <div className="meta-item">
                    <Calendar size={16} />
                    <span>{booking.date}</span>
                  </div>
                  <div className="meta-item">
                    <Clock size={16} />
                    <span>{booking.duration}</span>
                  </div>
                  <div className="meta-item">
                    <Users size={16} />
                    <span>{booking.participants} participants</span>
                  </div>
                </div>
                
                <div className="booking-info">
                  <div className="info-item">
                    <span className="info-label">Guide:</span>
                    <span className="info-value">{booking.guide}</span>
                  </div>
                  <div className="info-item">
                    <span className="info-label">Difficulty:</span>
                    <span className={`difficulty-badge ${booking.difficulty.toLowerCase()}`}>
                      {booking.difficulty}
                    </span>
                  </div>
                </div>
              </div>

              <div className="booking-actions">
                <button className="action-btn primary">
                  <Eye size={16} />
                  View Details
                </button>
                {booking.status === 'planning' && (
                  <button className="action-btn secondary">
                    <Edit size={16} />
                    Edit
                  </button>
                )}
                {booking.status === 'completed' && (
                  <button className="action-btn secondary">
                    <Star size={16} />
                    Review
                  </button>
                )}
                {booking.status === 'confirmed' && (
                  <button className="action-btn secondary">
                    <Download size={16} />
                    Download
                  </button>
                )}
                <button className="action-btn danger">
                  <XCircle size={16} />
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredBookings.length === 0 && (
        <div className="empty-state">
          <Calendar size={48} />
          <h3>No bookings found</h3>
          <p>Try adjusting your search or filter criteria</p>
          <button className="new-booking-btn">
            <Plus size={20} />
            Create New Booking
          </button>
        </div>
      )}
    </div>
  );
}

export default Bookings;