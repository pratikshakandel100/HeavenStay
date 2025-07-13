import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Star, MapPin, Wifi, Car, Coffee, Users, Phone, Mail, ArrowLeft, Heart } from 'lucide-react';

const HotelDetailsComponent = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  const hotel = {
    id: '1',
    name: 'Himalayan Grand Hotel',
    location: 'Kathmandu, Nepal',
    images: [
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg',
      'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg',
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg'
    ],
    price: 8500,
    rating: 4.8,
    reviews: 234,
    amenities: ['WiFi', 'Parking', 'Restaurant', 'Gym', 'Spa', 'Pool', 'Bar', 'Room Service'],
    description: 'Experience luxury in the heart of Kathmandu at the Himalayan Grand Hotel...',
    roomTypes: [
      {
        name: 'Standard Room',
        price: 6500,
        capacity: 2,
        size: '25 sqm',
        image: 'https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg'
      },
      {
        name: 'Deluxe Room',
        price: 8500,
        capacity: 2,
        size: '35 sqm',
        image: 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg'
      },
      {
        name: 'Suite',
        price: 12500,
        capacity: 4,
        size: '50 sqm',
        image: 'https://images.pexels.com/photos/271639/pexels-photo-271639.jpeg'
      },
      {
        name: 'Presidential Suite',
        price: 18500,
        capacity: 6,
        size: '75 sqm',
        image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
      }
    ],
    policies: {
      checkIn: '2:00 PM',
      checkOut: '11:00 AM',
      cancellation: 'Free cancellation up to 24 hours before check-in',
      pets: 'Pets allowed with additional fee',
      smoking: 'Non-smoking property'
    },
    contact: {
      phone: '+977-1-4123456',
      email: 'info@himalayangrand.com',
      address: 'Durbar Marg, Kathmandu 44600, Nepal'
    }
  };

  const handleBookNow = () => {
    navigate(`/book/${id}`);
  };

  const getAmenityIcon = (amenity) => {
    switch (amenity.toLowerCase()) {
      case 'wifi': return <Wifi size={20} />;
      case 'parking': return <Car size={20} />;
      case 'restaurant': return <Coffee size={20} />;
      case 'gym': return <Users size={20} />;
      default: return <div className="w-5 h-5 bg-[#97B067] rounded-full"></div>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Room Types Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Room Types</h2>
        <div className="space-y-4">
          {hotel.roomTypes.map((room, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-[#437057] transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-gray-900">{room.name}</h3>
                <div className="text-right">
                  <div className="text-xl font-bold text-[#2F5249]">NPR {room.price.toLocaleString()}</div>
                  <div className="text-sm text-gray-600">per night</div>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
                <span>Up to {room.capacity} guests</span>
                <span>•</span>
                <span>{room.size}</span>
              </div>
              <img
                src={room.image}
                alt={room.name}
                className="w-full h-48 object-cover rounded-md mt-2"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsComponent;
