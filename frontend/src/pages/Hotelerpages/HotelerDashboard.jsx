import React from 'react';
import { TrendingUp, Users, DollarSign, Calendar, Building, MessageSquare, Star, BarChart3 } from 'lucide-react';
import StatCard from '../../components/Hoteler/common/StatCard';
import QuickActions from '../../components/Hoteler/common/QuickActions';
import RecentBookings from '../../components/Hoteler/common/RecentBookings';
import OccupancyChart from '../../components/Hoteler/common/OccupancyChart';

const HotelerDashboard = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$24,500',
      change: '+12.5%',
      icon: DollarSign,
      color: '#97B067'
    },
    {
      title: 'Active Bookings',
      value: '45',
      change: '+8.2%',
      icon: Calendar,
      color: '#437057'
    },
    {
      title: 'Occupancy Rate',
      value: '78%',
      change: '+5.1%',
      icon: Users,
      color: '#2F5249'
    },
    {
      title: 'Average Rating',
      value: '4.8',
      change: '+0.2',
      icon: Star,
      color: '#97B067'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, John!</h2>
        <p className="text-gray-600">Here's what's happening with your hotels today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Occupancy Overview</h3>
          <OccupancyChart />
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Bookings</h3>
          <RecentBookings />
        </div>
      </div>

      {/* Quick Actions */}
      {/* <QuickActions /> */}
    </div>
  );
};

export default HotelerDashboard;