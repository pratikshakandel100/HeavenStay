import React, { useState } from 'react';
import { User, Mail, Phone, MapPin, Save, Edit } from 'lucide-react';
import Button from '../../components/Hoteler/common/Button';

const HotelerProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: 'John Doe',
    email: 'john.doe@hevenstay.com',
    phone: '+1 (555) 123-4567',
    address: '123 Business St, City, State 12345',
    businessHours: '9:00 AM - 6:00 PM',
    description: 'Experienced hotel manager with over 10 years in the hospitality industry.',
    cancellationPolicy: 'Free cancellation up to 24 hours before check-in.',
    refundPolicy: 'Full refund for cancellations made 24 hours in advance.',
    policies: {
      checkIn: '3:00 PM',
      checkOut: '11:00 AM',
      smoking: 'No smoking allowed',
      pets: 'Pets allowed with prior approval',
      additionalGuests: 'Maximum 2 additional guests per room'
    }
  });

  const handleSave = () => {
    setIsEditing(false);
    // Here you would typically save to backend
    alert('Profile updated successfully!');
  };

  const handleInputChange = (field, value) => {
    setProfile(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handlePolicyChange = (policy, value) => {
    setProfile(prev => ({
      ...prev,
      policies: {
        ...prev.policies,
        [policy]: value
      }
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Profile & Settings</h2>
          <p className="text-gray-600">Manage your profile and hotel policies</p>
        </div>
        <Button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          className="bg-blue-600 hover:bg-blue-700"
        >
          {isEditing ? (
            <>
              <Save className="h-4 w-4 mr-2" />
              Save Changes
            </>
          ) : (
            <>
              <Edit className="h-4 w-4 mr-2" />
              Edit Profile
            </>
          )}
        </Button>
      </div>

      {/* Profile Information */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <div className="flex items-center">
              <User className="h-5 w-5 text-gray-400 mr-2" />
              {isEditing ? (
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span className="text-gray-900">{profile.name}</span>
              )}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-gray-400 mr-2" />
              {isEditing ? (
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span className="text-gray-900">{profile.email}</span>
              )}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-400 mr-2" />
              {isEditing ? (
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span className="text-gray-900">{profile.phone}</span>
              )}
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Business Hours</label>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              {isEditing ? (
                <input
                  type="text"
                  value={profile.businessHours}
                  onChange={(e) => handleInputChange('businessHours', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span className="text-gray-900">{profile.businessHours}</span>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Address</label>
          {isEditing ? (
            <textarea
              value={profile.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              rows="2"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-900">{profile.address}</p>
          )}
        </div>
        
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          {isEditing ? (
            <textarea
              value={profile.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows="3"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-900">{profile.description}</p>
          )}
        </div>
      </div>

      {/* Hotel Policies */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Hotel Policies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Time</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.policies.checkIn}
                onChange={(e) => handlePolicyChange('checkIn', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900">{profile.policies.checkIn}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Time</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.policies.checkOut}
                onChange={(e) => handlePolicyChange('checkOut', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900">{profile.policies.checkOut}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Smoking Policy</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.policies.smoking}
                onChange={(e) => handlePolicyChange('smoking', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900">{profile.policies.smoking}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Pet Policy</label>
            {isEditing ? (
              <input
                type="text"
                value={profile.policies.pets}
                onChange={(e) => handlePolicyChange('pets', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900">{profile.policies.pets}</p>
            )}
          </div>
        </div>
        
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Additional Guests Policy</label>
          {isEditing ? (
            <input
              type="text"
              value={profile.policies.additionalGuests}
              onChange={(e) => handlePolicyChange('additionalGuests', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-900">{profile.policies.additionalGuests}</p>
          )}
        </div>
      </div>

      {/* Cancellation & Refund Policies */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Cancellation & Refund Policies</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cancellation Policy</label>
            {isEditing ? (
              <textarea
                value={profile.cancellationPolicy}
                onChange={(e) => handleInputChange('cancellationPolicy', e.target.value)}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900">{profile.cancellationPolicy}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Refund Policy</label>
            {isEditing ? (
              <textarea
                value={profile.refundPolicy}
                onChange={(e) => handleInputChange('refundPolicy', e.target.value)}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900">{profile.refundPolicy}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelerProfile;