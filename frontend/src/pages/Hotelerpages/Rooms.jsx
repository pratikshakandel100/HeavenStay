import React, { useState } from 'react';
import { Plus, Edit, Trash2, Bed, Users, DollarSign, Upload } from 'lucide-react';
import Button from '../../components/Hoteler/common/Button';
import Modal from '../../components/Hoteler/common/Modal';
import RoomForm from './RoomForms';

const Rooms = () => {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      type: 'Standard Room',
      price: 3500,
      capacity: 2,
      amenities: ['WiFi', 'AC', 'TV', 'Private Bathroom'],
      available: 15,
      total: 20,
      description: 'Comfortable standard room with essential amenities',
      images: ['https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=400']
    },
    {
      id: 2,
      type: 'Deluxe Room',
      price: 5500,
      capacity: 3,
      amenities: ['WiFi', 'AC', 'TV', 'Mini Bar', 'Balcony', 'Room Service'],
      available: 8,
      total: 15,
      description: 'Spacious deluxe room with premium amenities and city view',
      images: ['https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=400']
    },
    {
      id: 3,
      type: 'Suite',
      price: 12000,
      capacity: 4,
      amenities: ['WiFi', 'AC', 'TV', 'Mini Bar', 'Balcony', 'Room Service', 'Living Area', 'Kitchenette'],
      available: 3,
      total: 8,
      description: 'Luxurious suite with separate living area and premium facilities',
      images: ['https://images.pexels.com/photos/1743229/pexels-photo-1743229.jpeg?auto=compress&cs=tinysrgb&w=400']
    },
    {
      id: 4,
      type: 'Presidential Suite',
      price: 25000,
      capacity: 6,
      amenities: ['WiFi', 'AC', 'TV', 'Mini Bar', 'Balcony', 'Room Service', 'Living Area', 'Kitchenette', 'Jacuzzi', 'Butler Service'],
      available: 1,
      total: 2,
      description: 'Ultimate luxury suite with exclusive amenities and panoramic views',
      images: ['https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=400']
    }
  ]);

  const [showModal, setShowModal] = useState(false);
  const [editingRoom, setEditingRoom] = useState(null);

  const handleAddRoom = () => {
    setEditingRoom(null);
    setShowModal(true);
  };

  const handleEditRoom = (room) => {
    setEditingRoom(room);
    setShowModal(true);
  };

  const handleDeleteRoom = (id) => {
    if (window.confirm('Are you sure you want to delete this room type?')) {
      setRooms(rooms.filter(room => room.id !== id));
    }
  };

  const handleSaveRoom = (roomData) => {
    if (editingRoom) {
      setRooms(rooms.map(room => 
        room.id === editingRoom.id ? { ...room, ...roomData } : room
      ));
    } else {
      const newRoom = {
        ...roomData,
        id: Date.now(),
        available: roomData.total
      };
      setRooms([...rooms, newRoom]);
    }
    setShowModal(false);
  };

  const getAvailabilityColor = (available, total) => {
    const percentage = (available / total) * 100;
    if (percentage > 50) return 'text-green-600';
    if (percentage > 20) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Room Management</h2>
          <p className="text-gray-600 mt-1">Manage your room types and availability</p>
        </div>
        <Button
          onClick={handleAddRoom}
          style={{ backgroundColor: '#437057' }}
          className="hover:opacity-90 flex items-center"
        >
          <Plus className="h-4 w-4 mr-2" />
          Add New Room
        </Button>
      </div>

      {/* Room Types Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {rooms.map((room) => (
          <div key={room.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="relative">
              <img 
                src={room.images[0]} 
                alt={room.type}
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-3 right-3">
                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(room.available, room.total)} bg-white`}>
                  {room.available}/{room.total} available
                </span>
              </div>
            </div>
            
            <div className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-semibold text-gray-900">{room.type}</h3>
                <div className="flex items-center text-gray-600">
                  <DollarSign className="h-4 w-4 mr-1" />
                  <span className="font-medium">Rs. {room.price.toLocaleString()}/night</span>
                </div>
              </div>
              
              <p className="text-gray-600 text-sm mb-4">{room.description}</p>
              
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-gray-600">
                  <Users className="h-4 w-4 mr-1" />
                  <span className="text-sm">Up to {room.capacity} guests</span>
                </div>
                <div className="flex items-center">
                  <Bed className="h-4 w-4 mr-1 text-gray-400" />
                  <span className="text-sm text-gray-600">{room.total} rooms</span>
                </div>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Amenities:</h4>
                <div className="flex flex-wrap gap-1">
                  {room.amenities.slice(0, 4).map((amenity, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded"
                    >
                      {amenity}
                    </span>
                  ))}
                  {room.amenities.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                      +{room.amenities.length - 4} more
                    </span>
                  )}
                </div>
              </div>
              
              <div className="flex space-x-2">
                <Button
                  onClick={() => handleEditRoom(room)}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  <Edit className="h-4 w-4 mr-1" />
                  Edit
                </Button>
                <Button
                  onClick={() => handleDeleteRoom(room.id)}
                  variant="outline"
                  size="sm"
                  className="flex-1 text-red-600 hover:text-red-700 border-red-300 hover:border-red-400"
                >
                  <Trash2 className="h-4 w-4 mr-1" />
                  Delete
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Room Modal */}
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title={editingRoom ? 'Edit Room Type' : 'Add New Room Type'}
      >
        <RoomForm
          room={editingRoom}
          onSave={handleSaveRoom}
          onCancel={() => setShowModal(false)}
        />
      </Modal>
    </div>
  );
};

export default Rooms;