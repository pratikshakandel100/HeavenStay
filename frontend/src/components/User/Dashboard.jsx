import React, { useState, useMemo } from 'react';
import { Search, Filter, MapPin } from 'lucide-react';
import HotelCard from './HotelCard';
import FilterSidebar from './FilterSidebar';

const DashboardComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    priceRange: [0, 50000],
    location: '',
    amenities: [],
    rating: 0
  });

  const hotels = [
    {
      id: '1',
      name: 'Himalayan Grand Hotel',
      location: 'Kathmandu, Nepal',
      image: 'https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
      price: 8500,
      rating: 4.8,
      reviews: 234,
      amenities: ['WiFi', 'Parking', 'Restaurant', 'Gym', 'Spa'],
      description: 'Luxury hotel in the heart of Kathmandu with stunning mountain views.',
      featured: true
    },
    {
      id: '2',
      name: 'Pokhara Lake Resort',
      location: 'Pokhara, Nepal',
      image: 'https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
      price: 6500,
      rating: 4.6,
      reviews: 189,
      amenities: ['WiFi', 'Restaurant', 'Pool', 'Bar'],
      description: 'Beautiful lakeside resort with panoramic views of the Annapurna range.',
      featured: false
    },
    {
      id: '3',
      name: 'Chitwan Safari Lodge',
      location: 'Chitwan, Nepal',
      image: 'https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
      price: 4500,
      rating: 4.4,
      reviews: 156,
      amenities: ['WiFi', 'Restaurant', 'Safari', 'Pool'],
      description: 'Eco-friendly lodge in the heart of Chitwan National Park.',
      featured: true
    },
    {
      id: '4',
      name: 'Lumbini Garden Hotel',
      location: 'Lumbini, Nepal',
      image: 'https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
      price: 3500,
      rating: 4.2,
      reviews: 98,
      amenities: ['WiFi', 'Restaurant', 'Garden', 'Spa'],
      description: 'Peaceful retreat near the birthplace of Lord Buddha.',
      featured: false
    },
    {
      id: '5',
      name: 'Bhaktapur Heritage Hotel',
      location: 'Bhaktapur, Nepal',
      image: 'https://images.pexels.com/photos/1458457/pexels-photo-1458457.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
      price: 5500,
      rating: 4.5,
      reviews: 145,
      amenities: ['WiFi', 'Restaurant', 'Cultural Tours', 'Rooftop'],
      description: 'Traditional Newari architecture hotel in the ancient city.',
      featured: false
    },
    {
      id: '6',
      name: 'Everest View Lodge',
      location: 'Namche Bazaar, Nepal',
      image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&dpr=2',
      price: 7500,
      rating: 4.7,
      reviews: 201,
      amenities: ['WiFi', 'Restaurant', 'Mountain View', 'Trekking'],
      description: 'High-altitude lodge with breathtaking Everest views.',
      featured: true
    }
  ];

  const filteredAndSortedHotels = useMemo(() => {
    let filtered = hotels.filter(hotel => {
      const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            hotel.location.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesPrice = hotel.price <= filters.priceRange[1];
      const matchesLocation = !filters.location || hotel.location.includes(filters.location);
      const matchesRating = hotel.rating >= filters.rating;
      const matchesAmenities = filters.amenities.length === 0 ||
                               filters.amenities.every(amenity => hotel.amenities.includes(amenity));

      return matchesSearch && matchesPrice && matchesLocation && matchesRating && matchesAmenities;
    });

    switch (sortBy) {
      case 'price-low':
        return filtered.sort((a, b) => a.price - b.price);
      case 'price-high':
        return filtered.sort((a, b) => b.price - a.price);
      case 'rating':
        return filtered.sort((a, b) => b.rating - a.rating);
      case 'featured':
      default:
        return filtered.sort((a, b) => {
          if (a.featured && !b.featured) return -1;
          if (!a.featured && b.featured) return 1;
          return b.rating - a.rating;
        });
    }
  }, [searchTerm, filters, sortBy]);

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#2F5249] to-[#437057] text-white rounded-2xl p-8 mb-8">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Discover Nepal's Finest Hotels
          </h1>
          <p className="text-lg opacity-90 mb-6">
            From the bustling streets of Kathmandu to the serene lakes of Pokhara, 
            find your perfect stay in the heart of the Himalayas.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Search hotels, locations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-lg text-gray-900 border-0 focus:ring-2 focus:ring-[#97B067] focus:outline-none"
            />
          </div>
        </div>
      </div>

      <div className="flex gap-8">
        {/* Filter Sidebar */}
        <FilterSidebar
          isOpen={isFilterOpen}
          onClose={() => setIsFilterOpen(false)}
          filters={filters}
          onFilterChange={setFilters}
        />

        {/* Main Content */}
        <div className="flex-1">
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-6">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="flex items-center space-x-2 bg-[#2F5249] text-white px-4 py-2 rounded-lg hover:bg-[#437057] transition-colors"
            >
              <Filter size={20} />
              <span>Filters</span>
            </button>
          </div>

          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredAndSortedHotels.length} Hotels Found
            </h2>
            <select 
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#437057] focus:border-transparent"
            >
              <option value="featured">Sort by: Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Rating: High to Low</option>
            </select>
          </div>

          {/* Hotels Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredAndSortedHotels.map(hotel => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>

          {/* No Results */}
          {filteredAndSortedHotels.length === 0 && (
            <div className="text-center py-12">
              <MapPin className="mx-auto h-16 w-16 text-gray-400 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No hotels found</h3>
              <p className="text-gray-600">Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardComponent;
