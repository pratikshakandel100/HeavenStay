import React, { useState } from 'react';
import { Search, MapPin, Calendar, Users } from 'lucide-react';

const HeroSection = () => {
  const [searchData, setSearchData] = useState({
    destination: '',
    checkIn: '',
    checkOut: '',
    guests: 1
  });

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Search data:', searchData);
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-br from-[#2F5249]/80 to-[#437057]/70 z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=1600&h=900&dpr=1')"
        }}
      ></div>
      
      <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Discover Paradise in 
          <span className="text-[#E3DE61] block">Nepal</span>
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Experience the majesty of the Himalayas with luxury accommodations
        </p>
        
        {/* Search Form */}
        <form onSubmit={handleSearch} className="bg-white rounded-2xl p-6 shadow-2xl max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative">
              <MapPin className="absolute left-3 top-3 h-5 w-5 text-[#437057]" />
              <input
                type="text"
                placeholder="Where to?"
                value={searchData.destination}
                onChange={(e) => setSearchData({...searchData, destination: e.target.value})}
                className="w-full pl-10 pr-4 py-3 text-[#2F5249] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#437057]"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-[#437057]" />
              <input
                type="date"
                value={searchData.checkIn}
                onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
                className="w-full pl-10 pr-4 py-3 text-[#2F5249] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#437057]"
              />
            </div>
            <div className="relative">
              <Calendar className="absolute left-3 top-3 h-5 w-5 text-[#437057]" />
              <input
                type="date"
                value={searchData.checkOut}
                onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
                className="w-full pl-10 pr-4 py-3 text-[#2F5249] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#437057]"
              />
            </div>
            <div className="relative">
              <Users className="absolute left-3 top-3 h-5 w-5 text-[#437057]" />
              <select
                value={searchData.guests}
                onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
                className="w-full pl-10 pr-4 py-3 text-[#2F5249] border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#437057]"
              >
                {[...Array(8)].map((_, i) => (
                  <option key={i} value={i + 1}>{i + 1} Guest{i > 0 ? 's' : ''}</option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="w-full mt-6 bg-[#437057] text-white py-4 px-8 rounded-lg hover:bg-[#2F5249] transition-colors flex items-center justify-center space-x-2 font-semibold text-lg"
          >
            <Search className="h-5 w-5" />
            <span>Search Hotels</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default HeroSection;