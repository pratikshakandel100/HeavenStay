// src/components/User/UserLayout.jsx
import React from 'react';
import Header from './Header';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
  return (
    <>
      <Header user />
      <main className="pt-4">
        <Outlet />
      </main>
    </>
  );
};

export default UserLayout;
