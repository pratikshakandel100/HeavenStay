import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import './index.css'


//importing pages
import HomeP from './pages/User/Homep.jsx';
import Login from './components/Login.jsx';
import Signup from './components/Sigin.jsx';

//UserSide
import Header from './components/User/Header.jsx';
import Dashboard from './pages/User/UserSide/Dashboard.jsx';
import HotelDetails from './pages/User/UserSide/HotelDetails.jsx';
import BookingForm from './pages/User/UserSide/BookingForm.jsx';
import MyBookings from './pages/User/UserSide/MyBooking.jsx';
import Profile from './pages/User/UserSide/Profile.jsx';
import Payment from './pages/User/UserSide/Payment.jsx';
import Reviews from './pages/User/UserSide/Reviews.jsx';

function App() {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+977-9841234567',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2'
  });

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        <Header user={user} />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/users" element={<Dashboard />} />
            <Route path="/hotel/:id" element={<HotelDetails />} />
            <Route path="/book/:id" element={<BookingForm />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/profile" element={<Profile user={user} setUser={setUser} />} />
            <Route path="/payment/:bookingId" element={<Payment />} />
            <Route path="/reviews/:bookingId" element={<Reviews />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;