import { useState } from 'react'
import Homepage from './pages/Homepage.jsx';
import Register from './pages/Register.jsx';
import Login from './pages/Login.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AdminDashboard from './pages/AdminDashboard.jsx';


function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/register' element={<Register />} />
        <Route path='/dashboard' element={<AdminDashboard />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </BrowserRouter>
  </div>;
}
export default App;
