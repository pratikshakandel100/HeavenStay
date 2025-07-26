import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Star, MapPin, Wifi, Car, Coffee, Users,
  Phone, Mail, ArrowLeft, Heart
} from 'lucide-react';

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
      'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2',
      'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=2'
    ],
    price: 8500,
    rating: 4.8,
    reviews: 234,
    amenities: ['WiFi', 'Parking', 'Restaurant', 'Gym', 'Spa', 'Pool', 'Bar', 'Room Service'],
    description: 'Experience luxury in the heart of Kathmandu at the Himalayan Grand Hotel. Our elegantly appointed rooms offer stunning views of the surrounding mountains and city skyline. Each room is equipped with modern amenities including high-speed WiFi, air conditioning, and premium bedding.',
    roomTypes: [
      { name: 'Standard Room', price: 6500, capacity: 2, size: '25 sqm' },
      { name: 'Deluxe Room', price: 8500, capacity: 2, size: '35 sqm' },
      { name: 'Suite', price: 12500, capacity: 4, size: '50 sqm' },
      { name: 'Presidential Suite', price: 18500, capacity: 6, size: '75 sqm' }
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

  const reviews = [
    {
      id: 1,
      user: 'Sarah Johnson',
      rating: 5,
      date: '2024-01-15',
      comment: 'Absolutely amazing stay! The staff was incredibly helpful and the room was spacious and clean. The mountain views from the suite were breathtaking.',
      avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    },
    {
      id: 2,
      user: 'Mike Chen',
      rating: 4,
      date: '2024-01-10',
      comment: 'Great location and excellent service. The restaurant food was delicious. Only minor issue was the WiFi speed could be better.',
      avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    },
    {
      id: 3,
      user: 'Priya Sharma',
      rating: 5,
      date: '2024-01-05',
      comment: 'Perfect for our honeymoon! The spa services were exceptional and the staff went above and beyond to make our stay special.',
      avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2'
    }
  ];

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
      {/* Back Button + Favorite */}
      <div className="flex items-center justify-between mb-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center space-x-2 text-[#437057] hover:text-[#2F5249]"
        >
          <ArrowLeft size={20} />
          <span>Back to Hotels</span>
        </button>
        <button
          onClick={() => setIsFavorited(!isFavorited)}
          className={`p-2 rounded-full ${isFavorited ? 'bg-red-100 text-red-600' : 'bg-gray-100 text-gray-600'}`}
        >
          <Heart size={20} fill={isFavorited ? 'currentColor' : 'none'} />
        </button>
      </div>

      {/* Header Section */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
        <div className="p-6 border-b border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{hotel.name}</h1>
              <div className="flex items-center space-x-4 text-gray-600">
                <div className="flex items-center">
                  <MapPin size={16} className="mr-1" />
                  <span>{hotel.location}</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                  <span className="font-medium">{hotel.rating}</span>
                  <span className="ml-1">({hotel.reviews} reviews)</span>
                </div>
              </div>
            </div>
            <div className="mt-4 md:mt-0 text-right">
              <div className="text-3xl font-bold text-[#2F5249]">
                NPR {hotel.price.toLocaleString()}
              </div>
              <div className="text-gray-600">per night</div>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="relative">
          <div className="aspect-w-16 aspect-h-9 bg-gray-200">
            <img
              src={hotel.images[selectedImageIndex]}
              alt={hotel.name}
              className="w-full h-80 md:h-96 object-cover"
            />
          </div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex space-x-2 overflow-x-auto pb-2">
              {hotel.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === selectedImageIndex ? 'border-white' : 'border-transparent opacity-70'
                  }`}
                >
                  <img src={image} alt={`View ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Panel */}
        <div className="lg:col-span-2 space-y-8">
          {/* About */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">About This Hotel</h2>
            <p className="text-gray-700 leading-relaxed">{hotel.description}</p>
          </div>

          {/* Amenities */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Amenities</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {hotel.amenities.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className="text-[#437057]">{getAmenityIcon(amenity)}</div>
                  <span className="text-gray-700">{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Room Types */}
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
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>Up to {room.capacity} guests</span>
                    <span>•</span>
                    <span>{room.size}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Policies */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Hotel Policies</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Check-in</h3>
                  <p className="text-gray-700">{hotel.policies.checkIn}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Check-out</h3>
                  <p className="text-gray-700">{hotel.policies.checkOut}</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Cancellation Policy</h3>
                <p className="text-gray-700">{hotel.policies.cancellation}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Pet Policy</h3>
                <p className="text-gray-700">{hotel.policies.pets}</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Smoking Policy</h3>
                <p className="text-gray-700">{hotel.policies.smoking}</p>
              </div>
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Guest Reviews</h2>
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6 last:border-b-0">
                  <div className="flex items-start space-x-4">
                    <img src={review.avatar} alt={review.user} className="w-12 h-12 rounded-full object-cover" />
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{review.user}</h3>
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                size={16}
                                className={i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                              />
                            ))}
                          </div>
                          <span className="text-sm text-gray-600">{review.date}</span>
                        </div>
                      </div>
                      <p className="text-gray-700">{review.comment}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
            <div className="text-center mb-6">
              <div className="text-3xl font-bold text-[#2F5249] mb-2">
                NPR {hotel.price.toLocaleString()}
              </div>
              <div className="text-gray-600">per night</div>
            </div>
            <button
              onClick={handleBookNow}
              className="w-full bg-[#2F5249] text-white py-3 px-6 rounded-lg hover:bg-[#437057] transition-colors font-medium text-lg"
            >
              Book Now
            </button>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-[#437057]" />
                <span className="text-gray-700">{hotel.contact.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-[#437057]" />
                <span className="text-gray-700">{hotel.contact.email}</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-[#437057] mt-1" />
                <span className="text-gray-700">{hotel.contact.address}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelDetailsComponent;
