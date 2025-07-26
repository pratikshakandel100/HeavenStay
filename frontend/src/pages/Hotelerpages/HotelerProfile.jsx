import React, { useState } from 'react';
import { Upload, MapPin, Phone, Mail, Save, Edit, Camera, X } from 'lucide-react';
import Button from '../../components/Hoteler/common/Button';

const HotelProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [hotelData, setHotelData] = useState({
    name: 'Grand Paradise Resort',
    description: 'Experience luxury and comfort at Grand Paradise Resort, where exceptional service meets breathtaking ocean views. Our resort offers world-class amenities and unforgettable experiences for every guest.',
    location: 'Pokhara, Nepal',
    address: 'Lakeside, Pokhara-6, Kaski, Nepal',
    phone: '+977-61-123456',
    email: 'info@grandparadiseresort.com',
    website: 'www.grandparadiseresort.com',
    checkInTime: '2:00 PM',
    checkOutTime: '12:00 PM',
    cancellationPolicy: 'Free cancellation up to 24 hours before check-in. Cancellations made within 24 hours will be charged one night stay.',
    childPolicy: 'Children under 12 stay free when using existing bedding. Extra bed charges apply for children above 12.',
    petPolicy: 'Pets are not allowed in the hotel premises.',
    smokingPolicy: 'This is a non-smoking hotel. Smoking is only permitted in designated outdoor areas.',
    amenities: [
      'Free WiFi',
      'Swimming Pool',
      'Spa & Wellness Center',
      'Fitness Center',
      'Restaurant',
      'Bar/Lounge',
      'Room Service',
      'Concierge Service',
      'Airport Shuttle',
      'Parking',
      'Business Center',
      'Meeting Rooms'
    ],
    images: [
      'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=800'
    ]
  });

  const [newAmenity, setNewAmenity] = useState('');

  const handleSave = () => {
    setIsEditing(false);
    alert('Hotel profile updated successfully!');
  };

  const handleInputChange = (field, value) => {
    setHotelData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const addAmenity = () => {
    if (newAmenity.trim() && !hotelData.amenities.includes(newAmenity.trim())) {
      setHotelData(prev => ({
        ...prev,
        amenities: [...prev.amenities, newAmenity.trim()]
      }));
      setNewAmenity('');
    }
  };

  const removeAmenity = (amenity) => {
    setHotelData(prev => ({
      ...prev,
      amenities: prev.amenities.filter(a => a !== amenity)
    }));
  };

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      // In a real app, you would upload this to a server
      const imageUrl = URL.createObjectURL(file);
      const newImages = [...hotelData.images];
      newImages[index] = imageUrl;
      setHotelData(prev => ({
        ...prev,
        images: newImages
      }));
    }
  };

  const addNewImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setHotelData(prev => ({
        ...prev,
        images: [...prev.images, imageUrl]
      }));
    }
  };

  const removeImage = (index) => {
    setHotelData(prev => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index)
    }));
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Hotel Profile</h2>
          <p className="text-gray-600 mt-1">Manage your hotel information and settings</p>
        </div>
        <Button
          onClick={() => isEditing ? handleSave() : setIsEditing(true)}
          style={{ backgroundColor: '#437057' }}
          className="hover:opacity-90"
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

      {/* Hotel Images */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Hotel Images</h3>
          {isEditing && (
            <label className="cursor-pointer">
              <Button
                type="button"
                variant="outline"
                size="sm"
                className="pointer-events-none"
              >
                <Camera className="h-4 w-4 mr-2" />
                Add Image
              </Button>
              <input
                type="file"
                className="hidden"
                accept="image/*"
                onChange={addNewImage}
              />
            </label>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {hotelData.images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image}
                alt={`Hotel image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
              {isEditing && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded-lg">
                  <div className="flex space-x-2">
                    <label className="cursor-pointer">
                      <Button
                        size="sm"
                        variant="outline"
                        className="text-white border-white hover:bg-white hover:text-gray-900 pointer-events-none"
                      >
                        <Upload className="h-4 w-4 mr-1" />
                        Replace
                      </Button>
                      <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={(e) => handleImageUpload(e, index)}
                      />
                    </label>
                    <Button
                      size="sm"
                      onClick={() => removeImage(index)}
                      className="bg-red-500 hover:bg-red-600 text-white"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Basic Information */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Basic Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Hotel Name</label>
            {isEditing ? (
              <input
                type="text"
                value={hotelData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900 py-2">{hotelData.name}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 text-gray-400 mr-2" />
              {isEditing ? (
                <input
                  type="text"
                  value={hotelData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span className="text-gray-900 py-2">{hotelData.location}</span>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
          {isEditing ? (
            <textarea
              value={hotelData.description}
              onChange={(e) => handleInputChange('description', e.target.value)}
              rows="4"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-900 py-2 leading-relaxed">{hotelData.description}</p>
          )}
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
            <div className="flex items-center">
              <Phone className="h-5 w-5 text-gray-400 mr-2" />
              {isEditing ? (
                <input
                  type="tel"
                  value={hotelData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span className="text-gray-900 py-2">{hotelData.phone}</span>
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
                  value={hotelData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <span className="text-gray-900 py-2">{hotelData.email}</span>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Full Address</label>
          {isEditing ? (
            <textarea
              value={hotelData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              rows="2"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          ) : (
            <p className="text-gray-900 py-2">{hotelData.address}</p>
          )}
        </div>
      </div>

      {/* Hotel Policies */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Hotel Policies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-in Time</label>
            {isEditing ? (
              <input
                type="text"
                value={hotelData.checkInTime}
                onChange={(e) => handleInputChange('checkInTime', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900 py-2">{hotelData.checkInTime}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Check-out Time</label>
            {isEditing ? (
              <input
                type="text"
                value={hotelData.checkOutTime}
                onChange={(e) => handleInputChange('checkOutTime', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900 py-2">{hotelData.checkOutTime}</p>
            )}
          </div>
        </div>
        
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Cancellation Policy</label>
            {isEditing ? (
              <textarea
                value={hotelData.cancellationPolicy}
                onChange={(e) => handleInputChange('cancellationPolicy', e.target.value)}
                rows="3"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900 py-2 leading-relaxed">{hotelData.cancellationPolicy}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Child Policy</label>
            {isEditing ? (
              <textarea
                value={hotelData.childPolicy}
                onChange={(e) => handleInputChange('childPolicy', e.target.value)}
                rows="2"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900 py-2 leading-relaxed">{hotelData.childPolicy}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Pet Policy</label>
            {isEditing ? (
              <input
                type="text"
                value={hotelData.petPolicy}
                onChange={(e) => handleInputChange('petPolicy', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900 py-2">{hotelData.petPolicy}</p>
            )}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Smoking Policy</label>
            {isEditing ? (
              <input
                type="text"
                value={hotelData.smokingPolicy}
                onChange={(e) => handleInputChange('smokingPolicy', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            ) : (
              <p className="text-gray-900 py-2">{hotelData.smokingPolicy}</p>
            )}
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Hotel Amenities</h3>
        
        {isEditing && (
          <div className="mb-4 flex space-x-2">
            <input
              type="text"
              value={newAmenity}
              onChange={(e) => setNewAmenity(e.target.value)}
              placeholder="Add new amenity"
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              onKeyPress={(e) => e.key === 'Enter' && addAmenity()}
            />
            <Button
              onClick={addAmenity}
              style={{ backgroundColor: '#437057' }}
              className="hover:opacity-90"
            >
              Add
            </Button>
          </div>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {hotelData.amenities.map((amenity, index) => (
            <div
              key={index}
              className={`flex items-center justify-between px-3 py-2 rounded-lg ${
                isEditing ? 'bg-gray-100 border border-gray-200' : 'bg-green-50 border border-green-200'
              }`}
            >
              <span className="text-sm text-gray-700">{amenity}</span>
              {isEditing && (
                <button
                  onClick={() => removeAmenity(amenity)}
                  className="text-red-500 hover:text-red-700 ml-2"
                >
                  ×
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelProfile;