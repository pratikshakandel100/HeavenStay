import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css'


//importing pages
import HomeP from './pages/User/Homep.jsx';
import Login from './components/HomepageCompoent/Login.jsx';
import Signup from './components/HomepageCompoent/Sigin.jsx';



//UserSide
import Header from './components/User/Header.jsx';
import Dashboard from './pages/User/UserSide/Dashboard.jsx';
import HotelDetails from './pages/User/UserSide/HotelDetails.jsx';
import BookingForm from './pages/User/UserSide/BookingForm.jsx';
import MyBookings from './pages/User/UserSide/MyBooking.jsx';
import Profile from './pages/User/UserSide/Profile.jsx';
import Payment from './pages/User/UserSide/Payment.jsx';
import Reviews from './pages/User/UserSide/Reviews.jsx';
import Rooms from './pages/Hotelerpages/Rooms.jsx';
import UserLayout from './components/User/userlayout.jsx';
// import HotelDetails from './pages/User/UserSide/HotelDetails.jsx';





//Hoteler
import MainLayout from './components/Hoteler/layout/MainLayout.jsx';
import HotelerDashboard from './pages/Hotelerpages/HotelerDashboard.jsx';
import Hotels from './pages/Hotelerpages/Hotels.jsx';
import Bookings from './pages/Hotelerpages/Bookings.jsx';
import Messages from './pages/Hotelerpages/Messages.jsx';
import HotelerReviews from './pages/Hotelerpages/HotelerReviews.jsx';
import Analytics from './pages/Hotelerpages/Analytics.jsx';
import HotelProfile from './pages/Hotelerpages/HotelerProfile.jsx';
import HotelerPayments from './pages/Hotelerpages/HotelerPayments.jsx';





//Admin
import AdminLayout from './components/Admin/Adminlayout/AdminLayout.jsx';
import AdminDashboard from './pages/Admin/AdminDashboard.jsx';
import UserManagement from './pages/Admin/UserManagement.jsx';
import HotelierManagement from './pages/Admin/HotelierManagement.jsx';
import HotelListings from './pages/Admin/HotelListings.jsx';
import Notifications from './pages/Admin/Notification.jsx';
import AdminAnalytics from './pages/Admin/AdminAnalytics.jsx';
import Settings from './pages/Admin/Settings.jsx';
import AdminProfile from './pages/Admin/AdminProfile.jsx';


function App() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+977-9841234567',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
  });

  return (

    <BrowserRouter>

      <Routes>
        {/* Homepage Route */}
        <Route path="/" element={<HomeP />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />


        <Route path="/users" element={<UserLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="hotel/:id" element={<HotelDetails />} />
          <Route path="book/:id" element={<BookingForm />} />
          <Route path="mybookings" element={<MyBookings />} />
          <Route path="hotels" element={<HotelDetails />} />
          <Route path="profile" element={<Profile user={user} setUser={setUser} />} />
          <Route path="payment/:bookingId" element={<Payment />} />
          <Route path="reviews/:bookingId" element={<Reviews />} />
        </Route>

        {/* Hoteler Routes */}
        <Route path="/hoteler" element={<MainLayout />}>
          <Route index element={<HotelerDashboard />} />
          <Route path="dashboard" element={<HotelerDashboard />} />
          <Route path="rooms" element={<Rooms />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="messages" element={<Messages />} />
          <Route path="reviews" element={<Reviews />} />
          <Route path="analytics" element={<Analytics />} />
        
          <Route path="hotel-profile" element={<HotelProfile />} />
          <Route path="hoteler-payments" element={<HotelerPayments />} />
        </Route>




        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="hoteliers" element={<HotelierManagement />} />
          <Route path="hotels" element={<HotelListings />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="analytics" element={<AdminAnalytics />} />
          <Route path="settings" element={<Settings />} />
          <Route path="adminprofile" element={<AdminProfile />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );


}

export default App;