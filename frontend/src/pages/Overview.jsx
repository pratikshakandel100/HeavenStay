import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Star,
  CheckCircle,
  Clock,
  TrendingUp,
  Users,
  Activity
} from 'lucide-react';
import '../style/Overview.css';

function Overview() {
  return (
    <div className="overview-container">
      {/* Welcome Section */}
      <div className="welcome-section">
        <div className="welcome-content">
          <h2>Welcome back, John!</h2>
          <p>Ready for your next adventure in Nepal?</p>
        </div>
        <div className="welcome-image">
          <img src="https://images.pexels.com/photos/2259917/pexels-photo-2259917.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Nepal Mountains" />
        </div>
      </div>

      {/* Stats Cards */}
      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <Calendar className="icon" />
          </div>
          <div className="stat-content">
            <h3>5</h3>
            <p>Active Bookings</p>
            <span className="stat-change positive">+2 this month</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <MapPin className="icon" />
          </div>
          <div className="stat-content">
            <h3>12</h3>
            <p>Destinations Visited</p>
            <span className="stat-change positive">+3 this year</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <Star className="icon" />
          </div>
          <div className="stat-content">
            <h3>4.8</h3>
            <p>Average Rating</p>
            <span className="stat-change neutral">Same as last month</span>
          </div>
        </div>
        <div className="stat-card">
          <div className="stat-icon">
            <TrendingUp className="icon" />
          </div>
          <div className="stat-content">
            <h3>89%</h3>
            <p>Trip Completion</p>
            <span className="stat-change positive">+5% improvement</span>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="main-grid">
        {/* Recent Activity */}
        <div className="activity-section">
          <div className="section-header">
            <h3>Recent Activity</h3>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="activity-list">
            <div className="activity-item">
              <div className="activity-icon">
                <CheckCircle className="icon success" />
              </div>
              <div className="activity-content">
                <h4>Everest Base Camp Trek Confirmed</h4>
                <p>Your booking for March 15-25 has been confirmed</p>
                <span className="activity-time">2 hours ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">
                <Star className="icon warning" />
              </div>
              <div className="activity-content">
                <h4>Review Submitted</h4>
                <p>You rated Annapurna Circuit Trek 5 stars</p>
                <span className="activity-time">1 day ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">
                <Users className="icon info" />
              </div>
              <div className="activity-content">
                <h4>Group Joined</h4>
                <p>You joined the Kathmandu Cultural Tour group</p>
                <span className="activity-time">3 days ago</span>
              </div>
            </div>
            <div className="activity-item">
              <div className="activity-icon">
                <Activity className="icon success" />
              </div>
              <div className="activity-content">
                <h4>Profile Updated</h4>
                <p>Your travel preferences have been updated</p>
                <span className="activity-time">1 week ago</span>
              </div>
            </div>
          </div>
        </div>

        {/* Upcoming Trips */}
        <div className="trips-section">
          <div className="section-header">
            <h3>Upcoming Trips</h3>
            <button className="view-all-btn">View All</button>
          </div>
          <div className="trips-list">
            <div className="trip-card">
              <img src="https://images.pexels.com/photos/2259917/pexels-photo-2259917.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Everest" />
              <div className="trip-content">
                <h4>Everest Base Camp Trek</h4>
                <p className="trip-date">March 15 - March 25, 2024</p>
                <div className="trip-details">
                  <span className="trip-duration">10 days</span>
                  <span className="trip-status confirmed">Confirmed</span>
                </div>
                <div className="trip-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '75%'}}></div>
                  </div>
                  <span className="progress-text">75% prepared</span>
                </div>
              </div>
            </div>
            <div className="trip-card">
              <img src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Pokhara" />
              <div className="trip-content">
                <h4>Pokhara Lake Adventure</h4>
                <p className="trip-date">April 10 - April 15, 2024</p>
                <div className="trip-details">
                  <span className="trip-duration">5 days</span>
                  <span className="trip-status pending">Pending</span>
                </div>
                <div className="trip-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '30%'}}></div>
                  </div>
                  <span className="progress-text">30% prepared</span>
                </div>
              </div>
            </div>
            <div className="trip-card">
              <img src="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=300" alt="Kathmandu" />
              <div className="trip-content">
                <h4>Kathmandu Heritage Walk</h4>
                <p className="trip-date">May 5 - May 8, 2024</p>
                <div className="trip-details">
                  <span className="trip-duration">3 days</span>
                  <span className="trip-status planning">Planning</span>
                </div>
                <div className="trip-progress">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{width: '10%'}}></div>
                  </div>
                  <span className="progress-text">10% prepared</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h3>Quick Actions</h3>
        <div className="actions-grid">
          <button className="action-card">
            <Calendar size={24} />
            <span>Book New Trip</span>
          </button>
          <button className="action-card">
            <MapPin size={24} />
            <span>Explore Destinations</span>
          </button>
          <button className="action-card">
            <Star size={24} />
            <span>Leave Review</span>
          </button>
          <button className="action-card">
            <Users size={24} />
            <span>Join Group</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Overview;