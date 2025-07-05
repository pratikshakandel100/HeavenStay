import React, { useState } from 'react';
import { 
  Bell,
  Shield,
  Globe,
  Moon,
  Sun,
  Smartphone,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Download,
  Trash2,
  AlertTriangle,
  Check,
  X
} from 'lucide-react';
import '../style/Setting.css';

function Settings() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
    marketing: true,
    bookingUpdates: true,
    tripReminders: true
  });

  const [privacy, setPrivacy] = useState({
    profileVisibility: 'public',
    showTripHistory: true,
    showReviews: true,
    dataSharing: false
  });

  const [preferences, setPreferences] = useState({
    language: 'en',
    currency: 'USD',
    timezone: 'UTC-5',
    theme: 'light',
    dateFormat: 'MM/DD/YYYY'
  });

  const [security, setSecurity] = useState({
    twoFactor: false,
    loginAlerts: true,
    sessionTimeout: '30'
  });

  const [showPasswordForm, setShowPasswordForm] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleNotificationChange = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const handlePrivacyChange = (key, value) => {
    setPrivacy(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handlePreferenceChange = (key, value) => {
    setPreferences(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleSecurityChange = (key, value) => {
    setSecurity(prev => ({
      ...prev,
      [key]: value
    }));
  };

  return (
    <div className="settings-container">
      {/* Header */}
      <div className="settings-header">
        <h2>Settings</h2>
        <p>Manage your account preferences and privacy settings</p>
      </div>

      <div className="settings-content">
        {/* Notifications Section */}
        <div className="settings-section">
          <div className="section-header">
            <div className="section-title">
              <Bell size={24} />
              <h3>Notifications</h3>
            </div>
            <p>Choose how you want to be notified about updates and activities</p>
          </div>

          <div className="settings-list">
            <div className="setting-item">
              <div className="setting-info">
                <h4>Email Notifications</h4>
                <p>Receive booking confirmations and important updates via email</p>
              </div>
              <label className="toggle">
                <input 
                  type="checkbox" 
                  checked={notifications.email}
                  onChange={() => handleNotificationChange('email')}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>SMS Notifications</h4>
                <p>Get text messages for urgent trip updates and reminders</p>
              </div>
              <label className="toggle">
                <input 
                  type="checkbox" 
                  checked={notifications.sms}
                  onChange={() => handleNotificationChange('sms')}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Push Notifications</h4>
                <p>Receive notifications on your mobile device</p>
              </div>
              <label className="toggle">
                <input 
                  type="checkbox" 
                  checked={notifications.push}
                  onChange={() => handleNotificationChange('push')}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Marketing Emails</h4>
                <p>Receive promotional offers and travel inspiration</p>
              </div>
              <label className="toggle">
                <input 
                  type="checkbox" 
                  checked={notifications.marketing}
                  onChange={() => handleNotificationChange('marketing')}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Booking Updates</h4>
                <p>Get notified about changes to your bookings</p>
              </div>
              <label className="toggle">
                <input 
                  type="checkbox" 
                  checked={notifications.bookingUpdates}
                  onChange={() => handleNotificationChange('bookingUpdates')}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Trip Reminders</h4>
                <p>Receive reminders before your upcoming trips</p>
              </div>
              <label className="toggle">
                <input 
                  type="checkbox" 
                  checked={notifications.tripReminders}
                  onChange={() => handleNotificationChange('tripReminders')}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>

        {/* Privacy & Security Section */}
        <div className="settings-section">
          <div className="section-header">
            <div className="section-title">
              <Shield size={24} />
              <h3>Privacy & Security</h3>
            </div>
            <p>Control your privacy settings and account security</p>
          </div>

          <div className="settings-list">
            <div className="setting-item">
              <div className="setting-info">
                <h4>Profile Visibility</h4>
                <p>Choose who can see your profile information</p>
              </div>
              <select 
                className="setting-select"
                value={privacy.profileVisibility}
                onChange={(e) => handlePrivacyChange('profileVisibility', e.target.value)}
              >
                <option value="public">Public</option>
                <option value="friends">Friends Only</option>
                <option value="private">Private</option>
              </select>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Show Trip History</h4>
                <p>Allow others to see your completed trips</p>
              </div>
              <label className="toggle">
                <input 
                  type="checkbox" 
                  checked={privacy.showTripHistory}
                  onChange={() => handlePrivacyChange('showTripHistory', !privacy.showTripHistory)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Show Reviews</h4>
                <p>Display your reviews and ratings publicly</p>
              </div>
              <label className="toggle">
                <input 
                  type="checkbox" 
                  checked={privacy.showReviews}
                  onChange={() => handlePrivacyChange('showReviews', !privacy.showReviews)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Two-Factor Authentication</h4>
                <p>Add an extra layer of security to your account</p>
              </div>
              <button 
                className={`security-btn ${security.twoFactor ? 'enabled' : 'disabled'}`}
                onClick={() => handleSecurityChange('twoFactor', !security.twoFactor)}
              >
                {security.twoFactor ? 'Enabled' : 'Enable'}
              </button>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Login Alerts</h4>
                <p>Get notified when someone logs into your account</p>
              </div>
              <label className="toggle">
                <input 
                  type="checkbox" 
                  checked={security.loginAlerts}
                  onChange={() => handleSecurityChange('loginAlerts', !security.loginAlerts)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Change Password</h4>
                <p>Update your account password</p>
              </div>
              <button 
                className="action-btn"
                onClick={() => setShowPasswordForm(!showPasswordForm)}
              >
                <Lock size={16} />
                Change Password
              </button>
            </div>

            {showPasswordForm && (
              <div className="password-form">
                <div className="form-group">
                  <label>Current Password</label>
                  <input type="password" placeholder="Enter current password" />
                </div>
                <div className="form-group">
                  <label>New Password</label>
                  <input type="password" placeholder="Enter new password" />
                </div>
                <div className="form-group">
                  <label>Confirm New Password</label>
                  <input type="password" placeholder="Confirm new password" />
                </div>
                <div className="form-actions">
                  <button className="btn-primary">Update Password</button>
                  <button 
                    className="btn-secondary"
                    onClick={() => setShowPasswordForm(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Preferences Section */}
        <div className="settings-section">
          <div className="section-header">
            <div className="section-title">
              <Globe size={24} />
              <h3>Preferences</h3>
            </div>
            <p>Customize your experience with language, currency, and display options</p>
          </div>

          <div className="settings-list">
            <div className="setting-item">
              <div className="setting-info">
                <h4>Language</h4>
                <p>Choose your preferred language</p>
              </div>
              <select 
                className="setting-select"
                value={preferences.language}
                onChange={(e) => handlePreferenceChange('language', e.target.value)}
              >
                <option value="en">English</option>
                <option value="ne">Nepali</option>
                <option value="hi">Hindi</option>
                <option value="zh">Chinese</option>
              </select>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Currency</h4>
                <p>Select your preferred currency for pricing</p>
              </div>
              <select 
                className="setting-select"
                value={preferences.currency}
                onChange={(e) => handlePreferenceChange('currency', e.target.value)}
              >
                <option value="USD">USD ($)</option>
                <option value="NPR">NPR (₨)</option>
                <option value="EUR">EUR (€)</option>
                <option value="GBP">GBP (£)</option>
              </select>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Theme</h4>
                <p>Choose between light and dark mode</p>
              </div>
              <div className="theme-selector">
                <button 
                  className={`theme-btn ${preferences.theme === 'light' ? 'active' : ''}`}
                  onClick={() => handlePreferenceChange('theme', 'light')}
                >
                  <Sun size={16} />
                  Light
                </button>
                <button 
                  className={`theme-btn ${preferences.theme === 'dark' ? 'active' : ''}`}
                  onClick={() => handlePreferenceChange('theme', 'dark')}
                >
                  <Moon size={16} />
                  Dark
                </button>
              </div>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Date Format</h4>
                <p>Choose how dates are displayed</p>
              </div>
              <select 
                className="setting-select"
                value={preferences.dateFormat}
                onChange={(e) => handlePreferenceChange('dateFormat', e.target.value)}
              >
                <option value="MM/DD/YYYY">MM/DD/YYYY</option>
                <option value="DD/MM/YYYY">DD/MM/YYYY</option>
                <option value="YYYY-MM-DD">YYYY-MM-DD</option>
              </select>
            </div>
          </div>
        </div>

        {/* Data Management Section */}
        <div className="settings-section">
          <div className="section-header">
            <div className="section-title">
              <Download size={24} />
              <h3>Data Management</h3>
            </div>
            <p>Manage your personal data and account information</p>
          </div>

          <div className="settings-list">
            <div className="setting-item">
              <div className="setting-info">
                <h4>Download Your Data</h4>
                <p>Get a copy of all your account data and trip history</p>
              </div>
              <button className="action-btn">
                <Download size={16} />
                Download Data
              </button>
            </div>

            <div className="setting-item">
              <div className="setting-info">
                <h4>Data Sharing</h4>
                <p>Allow anonymous data sharing to improve our services</p>
              </div>
              <label className="toggle">
                <input 
                  type="checkbox" 
                  checked={privacy.dataSharing}
                  onChange={() => handlePrivacyChange('dataSharing', !privacy.dataSharing)}
                />
                <span className="slider"></span>
              </label>
            </div>

            <div className="setting-item danger">
              <div className="setting-info">
                <h4>Delete Account</h4>
                <p>Permanently delete your account and all associated data</p>
              </div>
              <button 
                className="danger-btn"
                onClick={() => setShowDeleteConfirm(true)}
              >
                <Trash2 size={16} />
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <AlertTriangle size={24} className="warning-icon" />
              <h3>Delete Account</h3>
            </div>
            <div className="modal-content">
              <p>Are you sure you want to delete your account? This action cannot be undone and will permanently remove all your data, including:</p>
              <ul>
                <li>Profile information</li>
                <li>Trip history and bookings</li>
                <li>Reviews and ratings</li>
                <li>Saved preferences</li>
              </ul>
              <p><strong>This action is irreversible.</strong></p>
            </div>
            <div className="modal-actions">
              <button 
                className="btn-danger"
                onClick={() => {
                  // Handle account deletion
                  setShowDeleteConfirm(false);
                }}
              >
                <Trash2 size={16} />
                Delete Account
              </button>
              <button 
                className="btn-secondary"
                onClick={() => setShowDeleteConfirm(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Settings;