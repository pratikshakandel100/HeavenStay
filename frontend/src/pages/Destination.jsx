import React, { useState } from 'react';
import { 
  Search,
  Filter,
  MapPin,
  Star,
  Heart,
  Share2,
  Calendar,
  Users,
  Clock,
  Mountain,
  Camera,
  Compass
} from 'lucide-react';
import '../style/Destination.css';

function Destinations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [favorites, setFavorites] = useState([3, 7]);

  const destinations = [
    {
      id: 1,
      title: "Everest Base Camp",
      location: "Khumbu Region, Nepal",
      image: "https://images.pexels.com/photos/2259917/pexels-photo-2259917.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 234,
      duration: "14-16 days",
      difficulty: "Challenging",
      category: "trekking",
      price: "From $1,250",
      description: "Experience the ultimate trekking adventure to the base of the world's highest mountain.",
      highlights: ["Sherpa Culture", "Mountain Views", "High Altitude"]
    },
    {
      id: 2,
      title: "Pokhara Lakes",
      location: "Pokhara, Nepal",
      image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 189,
      duration: "3-5 days",
      difficulty: "Easy",
      category: "adventure",
      price: "From $650",
      description: "Discover the serene beauty of Pokhara's pristine lakes and surrounding mountains.",
      highlights: ["Lake Activities", "Paragliding", "Mountain Views"]
    },
    {
      id: 3,
      title: "Kathmandu Valley",
      location: "Kathmandu, Nepal",
      image: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 156,
      duration: "2-4 days",
      difficulty: "Easy",
      category: "cultural",
      price: "From $450",
      description: "Explore ancient temples, palaces, and UNESCO World Heritage sites.",
      highlights: ["UNESCO Sites", "Ancient Temples", "Local Culture"]
    },
    {
      id: 4,
      title: "Annapurna Circuit",
      location: "Annapurna Region, Nepal",
      image: "https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 312,
      duration: "15-20 days",
      difficulty: "Challenging",
      category: "trekking",
      price: "From $1,450",
      description: "One of the world's most diverse trekking routes with stunning mountain panoramas.",
      highlights: ["Diverse Landscapes", "High Passes", "Mountain Views"]
    },
    {
      id: 5,
      title: "Chitwan National Park",
      location: "Chitwan, Nepal",
      image: "https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.6,
      reviews: 98,
      duration: "2-3 days",
      difficulty: "Easy",
      category: "wildlife",
      price: "From $380",
      description: "Experience Nepal's wildlife including rhinos, tigers, and exotic birds.",
      highlights: ["Wildlife Safari", "Jungle Activities", "Bird Watching"]
    },
    {
      id: 6,
      title: "Langtang Valley",
      location: "Langtang Region, Nepal",
      image: "https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.7,
      reviews: 145,
      duration: "7-10 days",
      difficulty: "Moderate",
      category: "trekking",
      price: "From $850",
      description: "Trek through beautiful valleys with stunning Himalayan views and Tamang culture.",
      highlights: ["Valley Views", "Tamang Culture", "Alpine Lakes"]
    },
    {
      id: 7,
      title: "Bhaktapur Heritage",
      location: "Bhaktapur, Nepal",
      image: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.8,
      reviews: 87,
      duration: "1-2 days",
      difficulty: "Easy",
      category: "cultural",
      price: "From $180",
      description: "Step back in time in this medieval city with preserved architecture and traditions.",
      highlights: ["Medieval Architecture", "Pottery Making", "Local Crafts"]
    },
    {
      id: 8,
      title: "Gokyo Lakes",
      location: "Khumbu Region, Nepal",
      image: "https://images.pexels.com/photos/2259917/pexels-photo-2259917.jpeg?auto=compress&cs=tinysrgb&w=400",
      rating: 4.9,
      reviews: 167,
      duration: "12-14 days",
      difficulty: "Challenging",
      category: "trekking",
      price: "From $1,150",
      description: "Trek to the stunning turquoise lakes with breathtaking Everest views.",
      highlights: ["Turquoise Lakes", "Everest Views", "Gokyo Ri Summit"]
    }
  ];

  const categories = [
    { id: 'all', name: 'All Destinations', icon: Compass },
    { id: 'trekking', name: 'Trekking', icon: Mountain },
    { id: 'cultural', name: 'Cultural', icon: Camera },
    { id: 'adventure', name: 'Adventure', icon: Users },
    { id: 'wildlife', name: 'Wildlife', icon: Heart }
  ];

  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         destination.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || destination.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFavorite = (id) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(fav => fav !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="destinations-container">
      {/* Header Section */}
      <div className="destinations-header">
        <div className="header-content">
          <h2>Explore Nepal</h2>
          <p>Discover breathtaking destinations and plan your next adventure</p>
        </div>
        <div className="header-stats">
          <div className="stat-item">
            <span className="stat-number">{destinations.length}</span>
            <span className="stat-label">Destinations</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">4.8</span>
            <span className="stat-label">Avg Rating</span>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="search-filters">
        <div className="search-section">
          <div className="search-container">
            <Search size={20} />
            <input 
              type="text" 
              placeholder="Search destinations, locations..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="filter-btn">
            <Filter size={20} />
            Advanced Filters
          </button>
        </div>

        <div className="category-tabs">
          {categories.map(category => {
            const IconComponent = category.icon;
            return (
              <button 
                key={category.id}
                className={`category-tab ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                <IconComponent size={18} />
                <span>{category.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="destinations-grid">
        {filteredDestinations.map(destination => (
          <div key={destination.id} className="destination-card">
            <div className="card-image-container">
              <img src={destination.image} alt={destination.title} />
              <button 
                className={`favorite-btn ${favorites.includes(destination.id) ? 'active' : ''}`}
                onClick={() => toggleFavorite(destination.id)}
              >
                <Heart size={20} />
              </button>
              <div className="card-overlay">
                <button className="share-btn">
                  <Share2 size={16} />
                </button>
              </div>
            </div>

            <div className="card-content">
              <div className="card-header">
                <h3>{destination.title}</h3>
                <div className="rating">
                  <Star size={16} className="star-filled" />
                  <span>{destination.rating}</span>
                  <span className="reviews">({destination.reviews})</span>
                </div>
              </div>

              <div className="location">
                <MapPin size={16} />
                <span>{destination.location}</span>
              </div>

              <p className="description">{destination.description}</p>

              <div className="highlights">
                {destination.highlights.map((highlight, index) => (
                  <span key={index} className="highlight-tag">{highlight}</span>
                ))}
              </div>

              <div className="card-details">
                <div className="detail-item">
                  <Clock size={16} />
                  <span>{destination.duration}</span>
                </div>
                <div className="detail-item">
                  <Mountain size={16} />
                  <span>{destination.difficulty}</span>
                </div>
              </div>

              <div className="card-footer">
                <div className="price">
                  <span className="price-text">{destination.price}</span>
                </div>
                <div className="card-actions">
                  <button className="btn-secondary">
                    <Calendar size={16} />
                    Quick Book
                  </button>
                  <button className="btn-primary">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredDestinations.length === 0 && (
        <div className="empty-state">
          <Compass size={48} />
          <h3>No destinations found</h3>
          <p>Try adjusting your search criteria or explore different categories</p>
          <button className="btn-primary" onClick={() => {setSearchTerm(''); setSelectedCategory('all');}}>
            Show All Destinations
          </button>
        </div>
      )}
    </div>
  );
}

export default Destinations;