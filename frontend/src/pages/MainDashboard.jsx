import React, { useState } from 'react';
import { 
  Mountain, 
  Home, 
  MapPin, 
  Calendar, 
  User, 
  Settings, 
  Bell, 
  Search,
  LogOut
} from 'lucide-react';
import '../style/MainDashboard.css';
import Overview from '../pages/Overview.jsx';
import Bookings from './Booking';
import Destinations from './Destination.jsx';
import Profile from './profile.jsx';
import SettingsPage from './Setting.jsx';

function MainDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return <Overview />;
      case 'bookings':
        return <Bookings />;
      case 'destinations':
        return <Destinations />;
      case 'profile':
        return <Profile />;
      case 'settings':
        return <SettingsPage />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <aside className={`sidebar ${sidebarCollapsed ? 'collapsed' : ''}`}>
        <div className="sidebar-header">
          <div className="logo">
            <div className="logo-icon">
              <Mountain className="mountain-icon" />
            </div>
            {!sidebarCollapsed && (
              <div className="logo-text">
                <h3>HeavenStay</h3>
                <p>Dashboard</p>
              </div>
            )}
          </div>
          <button 
            className="sidebar-toggle"
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          >
            <Settings size={20} />
          </button>
        </div>

        <nav className="sidebar-nav">
          <ul className="nav-list">
            <li>
              <button 
                className={`nav-item ${activeTab === 'overview' ? 'active' : ''}`}
                onClick={() => setActiveTab('overview')}
              >
                <Home size={20} />
                {!sidebarCollapsed && <span>Overview</span>}
              </button>
            </li>
            <li>
              <button 
                className={`nav-item ${activeTab === 'bookings' ? 'active' : ''}`}
                onClick={() => setActiveTab('bookings')}
              >
                <Calendar size={20} />
                {!sidebarCollapsed && <span>My Bookings</span>}
              </button>
            </li>
            <li>
              <button 
                className={`nav-item ${activeTab === 'destinations' ? 'active' : ''}`}
                onClick={() => setActiveTab('destinations')}
              >
                <MapPin size={20} />
                {!sidebarCollapsed && <span>Destinations</span>}
              </button>
            </li>
            <li>
              <button 
                className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => setActiveTab('profile')}
              >
                <User size={20} />
                {!sidebarCollapsed && <span>Profile</span>}
              </button>
            </li>
            <li>
              <button 
                className={`nav-item ${activeTab === 'settings' ? 'active' : ''}`}
                onClick={() => setActiveTab('settings')}
              >
                <Settings size={20} />
                {!sidebarCollapsed && <span>Settings</span>}
              </button>
            </li>
          </ul>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn">
            <LogOut size={20} />
            {!sidebarCollapsed && <span>Logout</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        {/* Top Header */}
        <header className="dashboard-header">
          <div className="header-left">
            <h1 className="page-title">
              {activeTab === 'overview' && 'Dashboard Overview'}
              {activeTab === 'bookings' && 'My Bookings'}
              {activeTab === 'destinations' && 'Explore Destinations'}
              {activeTab === 'profile' && 'My Profile'}
              {activeTab === 'settings' && 'Settings'}
            </h1>
          </div>
          <div className="header-right">
            <div className="search-box">
              <Search size={20} />
              <input type="text" placeholder="Search..." />
            </div>
            <button className="notification-btn">
              <Bell size={20} />
              <span className="notification-badge">3</span>
            </button>
            <div className="user-avatar">
              <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100" alt="User" />
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="page-content">
          {renderContent()}
        </div>
      </main>
    </div>
  );
}

export default MainDashboard;