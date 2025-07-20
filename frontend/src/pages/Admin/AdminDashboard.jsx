import React from 'react';
import { Users, Building, Hotel, Calendar, DollarSign, TrendingUp, AlertTriangle, CheckCircle } from 'lucide-react';
import AdminStatCard from '../../components/Admin/AdminCommon/AdminStatCard';
import AdminRecentActivity from '../../components/Admin/AdminCommon/AdminRecentActivity';
import QuickActions from '../../components/Admin/AdminCommon/AdminQuickActions';
import AdminQuickActions from '../../components/Admin/AdminCommon/AdminQuickActions';

const AdminDashboard = () => {
  const stats = [
    {
      title: 'Total Users',
      value: '12,847',
      change: '+8.2%',
      icon: Users,
      color: '#97B067'
    },
    {
      title: 'Active Hoteliers',
      value: '1,234',
      change: '+12.5%',
      icon: Building,
      color: '#437057'
    },
    {
      title: 'Hotel Listings',
      value: '2,567',
      change: '+5.1%',
      icon: Hotel,
      color: '#2F5249'
    },
    {
      title: 'Total Bookings',
      value: '45,892',
      change: '+18.7%',
      icon: Calendar,
      color: '#97B067'
    },
    {
      title: 'Platform Revenue',
      value: 'Rs. 2.4M',
      change: '+22.3%',
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

  const pendingActions = [
    {
      title: 'Pending Hotelier Approvals',
      count: 23,
      icon: AlertTriangle,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      title: 'Flagged Hotel Listings',
      count: 8,
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      title: 'User Reports',
      count: 15,
      icon: AlertTriangle,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      title: 'Completed Reviews',
      count: 156,
      icon: CheckCircle,
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ];

  return (
    <div className="space-y-6 w-full border">
      {/* Welcome Section */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome to Admin Dashboard</h2>
        <p className="text-gray-600">Monitor and manage the HevenStay platform efficiently.</p>
      </div>

      {/* Stats Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {stats.map((stat, index) => (
    <AdminStatCard key={index} {...stat} />
  ))}
</div>


      {/* Pending Actions */}
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Pending Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {pendingActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <div key={index} className="p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{action.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{action.count}</p>
                  </div>
                  <div className={`p-3 rounded-full ${action.bgColor}`}>
                    <Icon className={`h-6 w-6 ${action.color}`} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Activity and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AdminRecentActivity />
        <AdminQuickActions />
      </div>
    </div>
  );
};

export default AdminDashboard;