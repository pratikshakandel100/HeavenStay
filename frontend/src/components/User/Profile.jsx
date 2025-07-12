import React, { useState } from 'react';
import {
  User,
  Mail,
  Phone,
  Camera,
  Save,
  Eye,
  EyeOff,
  MapPin,
  Calendar,
  Globe,
  CreditCard
} from 'lucide-react';

const ProfileComponent = ({ user, setUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: user.name,
    email: user.email,
    phone: user.phone,
    nationality: 'United States',
    dateOfBirth: '1990-05-15',
    address: '123 Main Street, New York, NY 10001',
    passportNumber: 'US123456789',
    emergencyContact: '+1-555-0123',
    emergencyContactName: 'Jane Doe',
    preferredLanguage: 'English',
    currency: 'USD',
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
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

    if (formData.newPassword) {
      if (formData.newPassword !== formData.confirmPassword) {
        alert('New passwords do not match');
        return;
      }
      if (formData.newPassword.length < 8) {
        alert('Password must be at least 8 characters long');
        return;
      }
    }

    setUser((prev) => ({
      ...prev,
      name: formData.name,
      email: formData.email,
      phone: formData.phone
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

  const bookingStats = [
    { label: 'Total Bookings', value: '12', color: 'text-blue-600' },
    { label: 'Completed Stays', value: '8', color: 'text-green-600' },
    { label: 'Upcoming Trips', value: '2', color: 'text-orange-600' },
    { label: 'Countries Visited', value: '5', color: 'text-purple-600' }
  ];

  const countries = [
    'United States', 'Canada', 'United Kingdom', 'Australia', 'Germany',
    'France', 'Japan', 'India', 'China', 'Nepal'
  ];

  const languages = [
    'English', 'Spanish', 'French', 'German',
    'Chinese', 'Japanese', 'Hindi', 'Nepali'
  ];

  const currencies = ['USD', 'EUR', 'GBP', 'CAD', 'AUD', 'JPY', 'CNY', 'INR', 'NPR'];

  return (
    <>
      
      
      annotations which are already removed above */}
    </>
  );
};

export default ProfileComponent;
