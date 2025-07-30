import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  Save,
  Camera,
  MapPin,
  Flag
} from 'lucide-react';

const ProfileComponent = ({ user, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    address: user.address || '',
    nationality: user.nationality || 'Nepal',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser((prev) => ({
      ...prev,
      ...formData
    }));

    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUser((prev) => ({
          ...prev,
          avatar: e.target?.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-[#2f5249]">My Profile</h2>

      <div className="flex items-center space-x-4 mb-6">
        <div className="relative w-24 h-24">
          <img
            src={user.avatar}
            alt="Avatar"
            className="rounded-full w-24 h-24 object-cover border-4 border-[#2f5249]"
          />
          {isEditing && (
            <label className="absolute bottom-0 right-0 bg-[#2f5249] p-1 rounded-full cursor-pointer">
              <Camera className="w-5 h-5 text-white" />
              <input type="file" className="hidden" onChange={handleAvatarChange} />
            </label>
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold">{user.name}</h3>
          <p className="text-sm text-gray-500">{user.email}</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Name */}
        <div>
          <label className="block text-[#2f5249] font-semibold">Name</label>
          <div className="flex items-center border rounded px-3">
            <User className="w-5 h-5 text-[#2f5249]" />
            <input
              type="text"
              name="name"
              className="w-full px-2 py-2 outline-none"
              value={formData.name}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-[#2f5249] font-semibold">Email</label>
          <div className="flex items-center border rounded px-3">
            <Mail className="w-5 h-5 text-[#2f5249]" />
            <input
              type="email"
              name="email"
              className="w-full px-2 py-2 outline-none"
              value={formData.email}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="block text-[#2f5249] font-semibold">Phone</label>
          <div className="flex items-center border rounded px-3">
            <Phone className="w-5 h-5 text-[#2f5249]" />
            <input
              type="tel"
              name="phone"
              className="w-full px-2 py-2 outline-none"
              value={formData.phone}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label className="block text-[#2f5249] font-semibold">Address</label>
          <div className="flex items-center border rounded px-3">
            <MapPin className="w-5 h-5 text-[#2f5249]" />
            <input
              type="text"
              name="address"
              className="w-full px-2 py-2 outline-none"
              value={formData.address}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Nationality */}
        <div>
          <label className="block text-[#2f5249] font-semibold">Nationality</label>
          <div className="flex items-center border rounded px-3">
            <Flag className="w-5 h-5 text-[#2f5249]" />
            <input
              type="text"
              name="nationality"
              className="w-full px-2 py-2 outline-none"
              value={formData.nationality}
              onChange={handleInputChange}
              disabled={!isEditing}
            />
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-between items-center pt-4">
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className="px-5 py-2 border border-[#2f5249] text-[#2f5249] rounded hover:bg-[#2f5249] hover:text-white transition"
          >
            {isEditing ? 'Cancel' : 'Edit Profile'}
          </button>

          {isEditing && (
            <button
              type="submit"
              className="flex items-center gap-2 bg-[#2f5249] text-white px-5 py-2 rounded hover:bg-[#1e392f] transition"
            >
              <Save className="w-4 h-4" />
              Save
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default ProfileComponent;
