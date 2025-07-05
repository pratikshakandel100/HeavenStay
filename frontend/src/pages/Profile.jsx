import React, { useState } from 'react';
import { 
  Camera,
  Edit,
  Save,
  X,
  MapPin,
  Calendar,
  Star,
  Award,
  Heart,
  Users,
  Clock,
  Mountain,
  Compass,
  Globe
} from 'lucide-react';
import '../style/Profile.css'

function Profile() {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    phone: '+1 (555) 123-4567',
    location: 'New York, USA',
    bio: 'Adventure enthusiast and mountain lover. Always seeking new heights and cultural experiences in the beautiful landscapes of Nepal.',
    joinDate: 'January 2022',
    preferences: {
      activities: ['Trekking', 'Cultural Tours', 'Adventure Sports', 'Photography'],
      budget: '$1,000 - $2,000',
      travelStyle: 'Adventure',
      groupSize: 'Small Groups (4-8 people)'
    }
  });

  const stats = [
    { label: 'Trips Completed', value: '12', icon: Mountain },
    { label: 'Countries Visited', value: '3', icon: Globe },
    { label: 'Average Rating', value: '4.8', icon: Star },
    { label: 'Years Traveling', value: '3', icon: Calendar }
  ];

  const recentTrips = [
    {
      id: 1,
      title: 'Everest Base Camp Trek',
      image: 'https://images.pexels.com/photos/2259917/pexels-photo-2259917.jpeg?auto=compress&cs=tinysrgb&w=200',
      date: 'March 2024',
      rating: 5,
      status: 'completed'
    },
    {
      id: 2,
      title: 'Annapurna Circuit',
      image: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=200',
      date: 'January 2024',
      rating: 5,
      status: 'completed'
    },
    {
      id: 3,
      title: 'Kathmandu Cultural Tour',
      image: 'https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=200',
      date: 'December 2023',
      rating: 4,
      status: 'completed'
    }
  ];

  const achievements = [
    { title: 'High Altitude Trekker', description: 'Completed trek above 5000m', icon: Mountain },
    { title: 'Cultural Explorer', description: 'Visited 5+ cultural sites', icon: Compass },
    { title: 'Adventure Seeker', description: 'Tried 3+ adventure activities', icon: Heart },
    { title: 'Group Leader', description: 'Led a group expedition', icon: Users }
  ];

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset form data if needed
  };

  return (
    <div className="profile-container">
      {/* Profile Header */}
      <div className="profile-header">
        <div className="profile-banner">
          <img src="https://images.pexels.com/photos/2259917/pexels-photo-2259917.jpeg?auto=compress&cs=tinysrgb&w=1200&h=300" alt="Profile Banner" />
        </div>
        
        <div className="profile-info">
          <div className="avatar-section">
            <div className="profile-avatar">
              <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200&h=200" alt="Profile" />
              <button className="avatar-edit">
                <Camera size={20} />
              </button>
            </div>
          </div>
          
          <div className="profile-details">
            <div className="profile-main">
              <h1>{profileData.name}</h1>
              <p className="profile-title">Adventure Enthusiast</p>
              <div className="profile-meta">
                <div className="meta-item">
                  <MapPin size={16} />
                  <span>{profileData.location}</span>
                </div>
                <div className="meta-item">
                  <Calendar size={16} />
                  <span>Member since {profileData.joinDate}</span>
                </div>
              </div>
            </div>
            
            <div className="profile-actions">
              {!isEditing ? (
                <button className="edit-btn" onClick={() => setIsEditing(true)}>
                  <Edit size={20} />
                  Edit Profile
                </button>
              ) : (
                <div className="edit-actions">
                  <button className="save-btn" onClick={handleSave}>
                    <Save size={20} />
                    Save
                  </button>
                  <button className="cancel-btn" onClick={handleCancel}>
                    <X size={20} />
                    Cancel
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="stats-section">
        <h3>Travel Statistics</h3>
        <div className="stats-grid">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="stat-card">
                <div className="stat-icon">
                  <IconComponent size={24} />
                </div>
                <div className="stat-content">
                  <span className="stat-value">{stat.value}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Main Content */}
      <div className="profile-content">
        {/* Personal Information */}
        <div className="content-section">
          <h3>Personal Information</h3>
          <div className="info-form">
            <div className="form-row">
              <div className="form-group">
                <label>Full Name</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={profileData.name}
                    onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                  />
                ) : (
                  <span className="form-value">{profileData.name}</span>
                )}
              </div>
              <div className="form-group">
                <label>Email</label>
                {isEditing ? (
                  <input 
                    type="email" 
                    value={profileData.email}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                  />
                ) : (
                  <span className="form-value">{profileData.email}</span>
                )}
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                {isEditing ? (
                  <input 
                    type="tel" 
                    value={profileData.phone}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                  />
                ) : (
                  <span className="form-value">{profileData.phone}</span>
                )}
              </div>
              <div className="form-group">
                <label>Location</label>
                {isEditing ? (
                  <input 
                    type="text" 
                    value={profileData.location}
                    onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                  />
                ) : (
                  <span className="form-value">{profileData.location}</span>
                )}
              </div>
            </div>
            
            <div className="form-group full-width">
              <label>Bio</label>
              {isEditing ? (
                <textarea 
                  value={profileData.bio}
                  onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                  rows="3"
                />
              ) : (
                <span className="form-value">{profileData.bio}</span>
              )}
            </div>
          </div>
        </div>

        {/* Travel Preferences */}
        <div className="content-section">
          <h3>Travel Preferences</h3>
          <div className="preferences-grid">
            <div className="preference-item">
              <h4>Preferred Activities</h4>
              <div className="tags">
                {profileData.preferences.activities.map((activity, index) => (
                  <span key={index} className="tag">{activity}</span>
                ))}
              </div>
            </div>
            
            <div className="preference-item">
              <h4>Budget Range</h4>
              <span className="preference-value">{profileData.preferences.budget}</span>
            </div>
            
            <div className="preference-item">
              <h4>Travel Style</h4>
              <span className="preference-value">{profileData.preferences.travelStyle}</span>
            </div>
            
            <div className="preference-item">
              <h4>Group Size</h4>
              <span className="preference-value">{profileData.preferences.groupSize}</span>
            </div>
          </div>
        </div>

        {/* Recent Trips */}
        <div className="content-section">
          <h3>Recent Trips</h3>
          <div className="trips-grid">
            {recentTrips.map(trip => (
              <div key={trip.id} className="trip-card">
                <img src={trip.image} alt={trip.title} />
                <div className="trip-info">
                  <h4>{trip.title}</h4>
                  <p className="trip-date">{trip.date}</p>
                  <div className="trip-rating">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        className={i < trip.rating ? 'star-filled' : 'star-empty'} 
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="content-section">
          <h3>Achievements</h3>
          <div className="achievements-grid">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <div key={index} className="achievement-card">
                  <div className="achievement-icon">
                    <IconComponent size={24} />
                  </div>
                  <div className="achievement-content">
                    <h4>{achievement.title}</h4>
                    <p>{achievement.description}</p>
                  </div>
                  <div className="achievement-badge">
                    <Award size={16} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;