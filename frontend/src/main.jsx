import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import MainDashboard from './pages/MainDashboard.jsx'

// checking design
import AdminDashboard from './pages/AdminDashboard.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainDashboard />
  </StrictMode>,
)
