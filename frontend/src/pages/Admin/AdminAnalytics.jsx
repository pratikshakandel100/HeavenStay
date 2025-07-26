import React, { useState } from 'react';
import { Download, TrendingUp, Users, Building, Hotel, Calendar, DollarSign, BarChart3 } from 'lucide-react';
import AdminButton from '../../components/Admin/AdminCommon/AdminButton';
import AdminStatCard from '../../components/Admin/AdminCommon/AdminStatCard';

const AdminAnalytics = () => {
  const [timeRange, setTimeRange] = useState('30days');
  const [exportFormat, setExportFormat] = useState('CSV');

  const stats = [
    {
      title: 'Total Users',
      value: '14,081',
      change: '+12.5%',
      icon: Users,
      color: '#97B067'
    },
    {
      title: 'Active Hoteliers',
      value: '1,234',
      change: '+8.2%',
      icon: Building,
      color: '#437057'
    },
    {
      title: 'Hotel Listings',
      value: '2,567',
      change: '+15.1%',
      icon: Hotel,
      color: '#2F5249'
    },
    {
      title: 'Total Bookings',
      value: '45,892',
      change: '+22.3%',
      icon: Calendar,
      color: '#97B067'
    },
    {
      title: 'Platform Revenue',
      value: 'Rs. 2.4M',
      change: '+18.7%',
      icon: DollarSign,
      color: '#437057'
    },
    {
      title: 'Growth Rate',
      value: '15.8%',
      change: '+3.2%',
      icon: TrendingUp,
      color: '#2F5249'
    }
  ];

  const monthlyData = [
    { month: 'Jul', users: 1200, hoteliers: 89, bookings: 3400, revenue: 185000 },
    { month: 'Aug', users: 1350, hoteliers: 95, bookings: 3800, revenue: 210000 },
    { month: 'Sep', users: 1480, hoteliers: 102, bookings: 4200, revenue: 235000 },
    { month: 'Oct', users: 1620, hoteliers: 108, bookings: 4600, revenue: 265000 },
    { month: 'Nov', users: 1780, hoteliers: 115, bookings: 5100, revenue: 295000 },
    { month: 'Dec', users: 1950, hoteliers: 123, bookings: 5600, revenue: 325000 },
  ];

  const topPerformingHotels = [
    { name: 'Grand Paradise Resort', bookings: 456, revenue: 125000, rating: 4.8 },
    { name: 'Mountain View Lodge', bookings: 389, revenue: 98000, rating: 4.7 },
    { name: 'City Center Hotel', bookings: 342, revenue: 85000, rating: 4.6 },
    { name: 'Lakeside Resort', bookings: 298, revenue: 72000, rating: 4.5 },
    { name: 'Heritage Palace', bookings: 267, revenue: 68000, rating: 4.4 },
  ];

  const userGrowthData = [
    { month: 'Jul', newUsers: 890, activeUsers: 8500 },
    { month: 'Aug', newUsers: 1120, activeUsers: 9200 },
    { month: 'Sep', newUsers: 1350, activeUsers: 9800 },
    { month: 'Oct', newUsers: 1480, activeUsers: 10500 },
    { month: 'Nov', newUsers: 1620, activeUsers: 11200 },
    { month: 'Dec', newUsers: 1780, activeUsers: 12000 },
  ];

  const handleExportData = () => {
    const data = {
      stats,
      monthlyData,
      topPerformingHotels,
      userGrowthData,
      exportDate: new Date().toISOString(),
      timeRange
    };
    
    if (exportFormat === 'CSV') {
      // Convert to CSV format
      const csvContent = "data:text/csv;charset=utf-8," 
        + "Metric,Value,Change\n"
        + stats.map(stat => `${stat.title},${stat.value},${stat.change}`).join("\n");
      
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", `hevenstay_analytics_${timeRange}.csv`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      // For PDF, we'll simulate the download
      alert(`Exporting analytics data as ${exportFormat}. This would typically generate a comprehensive PDF report.`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Analytics & Reports</h2>
          <p className="text-gray-600">Monitor platform performance and generate reports</p>
        </div>
        
        <div className="flex items-center space-x-3">
          {/* Time Range Filter */}
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="7days">Last 7 Days</option>
            <option value="30days">Last 30 Days</option>
            <option value="90days">Last 90 Days</option>
            <option value="1year">Last Year</option>
          </select>
          
          {/* Export Options */}
          <select
            value={exportFormat}
            onChange={(e) => setExportFormat(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="CSV">CSV</option>
            <option value="PDF">PDF</option>
          </select>
          
          <AdminButton
            onClick={handleExportData}
            style={{ backgroundColor: '#437057' }}
            className="hover:opacity-90"
          >
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </AdminButton>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map((stat, index) => (
          <AdminStatCard key={index} {...stat} />
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue Trend */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Revenue Trend</h3>
          <div className="h-64 flex items-end space-x-2">
            {monthlyData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-t from-green-600 to-green-400 rounded-t"
                  style={{ height: `${(data.revenue / 325000) * 100}%` }}
                />
                <span className="text-xs text-gray-600 mt-2">{data.month}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <span>Rs. 0</span>
            <span>Rs. 325K</span>
          </div>
        </div>

        {/* User Growth */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h3>
          <div className="h-64 flex items-end space-x-2">
            {userGrowthData.map((data, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div className="w-full flex flex-col">
                  <div
                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t"
                    style={{ height: `${(data.newUsers / 1780) * 120}px` }}
                  />
                </div>
                <span className="text-xs text-gray-600 mt-2">{data.month}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex justify-between text-sm text-gray-600">
            <span>0 New Users</span>
            <span>1.8K New Users</span>
          </div>
        </div>
      </div>

      {/* Top Performing Hotels */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Hotels</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-medium text-gray-900">Hotel Name</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Bookings</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Revenue</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Rating</th>
                <th className="text-left py-3 px-4 font-medium text-gray-900">Performance</th>
              </tr>
            </thead>
            <tbody>
              {topPerformingHotels.map((hotel, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-3 px-4 font-medium text-gray-900">{hotel.name}</td>
                  <td className="py-3 px-4 text-gray-700">{hotel.bookings}</td>
                  <td className="py-3 px-4 text-gray-700">Rs. {hotel.revenue.toLocaleString()}</td>
                  <td className="py-3 px-4 text-gray-700">{hotel.rating}</td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-2 mr-2">
                        <div
                          className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                          style={{ width: `${(hotel.bookings / 456) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{Math.round((hotel.bookings / 456) * 100)}%</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Platform Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Booking Trends */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Trends</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Peak Season (Dec-Feb)</span>
              <span className="text-sm font-medium text-gray-900">65% of total bookings</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Average Booking Value</span>
              <span className="text-sm font-medium text-gray-900">Rs. 4,250</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Repeat Customers</span>
              <span className="text-sm font-medium text-gray-900">32%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Mobile Bookings</span>
              <span className="text-sm font-medium text-gray-900">68%</span>
            </div>
          </div>
        </div>

        {/* Platform Health */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Platform Health</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">System Uptime</span>
              <span className="text-sm font-medium text-green-600">99.9%</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Average Response Time</span>
              <span className="text-sm font-medium text-gray-900">1.2s</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">User Satisfaction</span>
              <span className="text-sm font-medium text-green-600">4.6/5</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Support Tickets</span>
              <span className="text-sm font-medium text-yellow-600">23 pending</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAnalytics;