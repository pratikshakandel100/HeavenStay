import React from 'react';
import { User, Building, Hotel, AlertTriangle, CheckCircle } from 'lucide-react';

const AdminRecentActivity = () => {
  const activities = [
    {
      id: 1,
      type: 'user_registration',
      message: 'New user registered: Sarah Johnson',
      time: '5 minutes ago',
      icon: User,
      color: 'text-blue-600'
    },
    {
      id: 2,
      type: 'hotelier_approval',
      message: 'Hotelier approved: Mountain View Resort',
      time: '15 minutes ago',
      icon: CheckCircle,
      color: 'text-green-600'
    },
    {
      id: 3,
      type: 'hotel_listing',
      message: 'New hotel listing submitted for review',
      time: '1 hour ago',
      icon: Hotel,
      color: 'text-purple-600'
    },
    {
      id: 4,
      type: 'policy_violation',
      message: 'Hotel listing flagged for policy violation',
      time: '2 hours ago',
      icon: AlertTriangle,
      color: 'text-red-600'
    },
    {
      id: 5,
      type: 'hotelier_registration',
      message: 'New hotelier registration: City Center Hotel',
      time: '3 hours ago',
      icon: Building,
      color: 'text-orange-600'
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
      <div className="space-y-4">
        {activities.map((activity) => {
          const Icon = activity.icon;
          return (
            <div key={activity.id} className="flex items-start space-x-3">
              <div className={`p-2 rounded-full bg-gray-100`}>
                <Icon className={`h-4 w-4 ${activity.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-gray-900">{activity.message}</p>
                <p className="text-xs text-gray-500">{activity.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AdminRecentActivity;