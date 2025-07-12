import React, { useState } from 'react';
import { TrendingUp, Users, DollarSign, Calendar } from 'lucide-react';
import StatCard from '../../components/Hoteler/common/StatCard';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30days');

  const stats = [
    {
      title: 'Total Revenue',
      value: '$124,500',
      change: '+18.2%',
      icon: DollarSign,
      color: '#97B067'
    },
    {
      title: 'Total Bookings',
      value: '342',
      change: '+12.5%',
      icon: Calendar,
      color: '#437057'
    },
    {
      title: 'Average Occupancy',
      value: '76%',
      change: '+8.1%',
      icon: Users,
      color: '#2F5249'
    },
    {
      title: 'Average Daily Rate',
      value: '$185',
      change: '+5.3%',
      icon: TrendingUp,
      color: '#97B067'
    }
  ];

  const monthlyData = [
    { month: 'Jan', revenue: 85000, bookings: 245, occupancy: 72 },
    { month: 'Feb', revenue: 92000, bookings: 268, occupancy: 75 },
    { month: 'Mar', revenue: 98000, bookings: 289, occupancy: 78 },
    { month: 'Apr', revenue: 105000, bookings: 312, occupancy: 82 },
    { month: 'May', revenue: 118000, bookings: 335, occupancy: 85 },
    { month: 'Jun', revenue: 124500, bookings: 342, occupancy: 88 },
  ];

  const hotelPerformance = [
    { name: 'Grand Paradise Resort', revenue: 75000, bookings: 180, occupancy: 85 },
    { name: 'Ocean View Hotel', revenue: 32000, bookings: 95, occupancy: 78 },
    { name: 'Mountain Lodge', revenue: 17500, bookings: 67, occupancy: 65 },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
          <p className="text-gray-600">Track performance and revenue insights</p>
        </div>
        
        {/* Time Range Filter */}
        <div className="flex space-x-2">
          {[
            { value: '7days', label: '7 Days' },
            { value: '30days', label: '30 Days' },
            { value: '90days', label: '90 Days' },
            { value: '1year', label: '1 Year' }
          ].map((range) => (
            <button
              key={range.value}
              onClick={() => setTimeRange(range.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                timeRange === range.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
          <div className="h-64 flex items-end space-x-2">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"
                  style={{ height: `${(data.revenue / 124500) * 100}%` }}
                />
                <span className="text-xs text-gray-600 mt-2">{data.month}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <span>$0</span>
            <span>$124.5K</span>
          </div>
        </div>

        {/* Occupancy Chart */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Occupancy Rate</h3>
          <div className="h-64 flex items-end space-x-2">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-t from-green-600 to-green-400 rounded-t"
                  style={{ height: `${data.occupancy}%` }}
                />
                <span className="text-xs text-gray-600 mt-2">{data.month}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <span>0%</span>
            <span>100%</span>
          </div>
        </div>
      </div>

      {/* Hotel Performance */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Hotel Performance</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Hotel</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Revenue</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Bookings</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Occupancy</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Performance</th>
              </tr>
            </thead>
            <tbody>
              {hotelPerformance.map((hotel, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-900">{hotel.name}</td>
                  <td className="py-3 px-4 text-gray-700">${hotel.revenue.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-700">{hotel.bookings}</td>
                  <td className="py-3 px-4 text-gray-700">{hotel.occupancy}%</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                          style={{ width: `${hotel.occupancy}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{hotel.occupancy}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Key Insights */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Key Insights</h3>
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-green-500 rounded-full mt-2" />
            <div>
              <p className="text-sm font-medium text-gray-900">Peak Season Performance</p>
              <p className="text-sm text-gray-600">
                June showed the highest occupancy rate at 88%, indicating strong summer demand.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2" />
            <div>
              <p className="text-sm font-medium text-gray-900">Revenue Growth</p>
              <p className="text-sm text-gray-600">
                Consistent revenue growth of 18.2% compared to the previous period.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2" />
            <div>
              <p className="text-sm font-medium text-gray-900">Opportunity</p>
              <p className="text-sm text-gray-600">
                Mountain Lodge has potential for improvement with 65% occupancy rate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;