import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import AdminSidebar from './AdminSidebar';
import AdminHeader from './AdminHeader';

const AdminLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="h-screen overflow-hidden bg-gray-50">
      {/* Fixed Sidebar */}
      <div className="fixed top-0 left-0 h-full w-64 bg-white border-r z-20">
        <AdminSidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />
      </div>

      {/* Main content wrapper with margin-left for fixed sidebar */}
      <div className="ml-64 flex flex-col h-full">
        {/* Header (sticky if needed) */}
        <div className="sticky top-0 z-10">
          <AdminHeader
            setSidebarOpen={setSidebarOpen}
            sidebarOpen={sidebarOpen}
          />
        </div>

        {/* Scrollable content */}
        <main className="flex-1 overflow-y-auto p-4 mt-10 lg:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
