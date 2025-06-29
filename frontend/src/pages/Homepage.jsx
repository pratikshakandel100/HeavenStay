import React, { useState } from 'react'; // ✅ import useState
import { Star, Mountain, Heart, Globe, MapPin } from 'lucide-react';
import '../style/Homepage.css';
import Login from "./Login.jsx" // ✅ corrected import
import Register from './Register.jsx'; // ✅ corrected import

const Homepage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);

  const handleSwitchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleSwitchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  const popularDestinations = [
    {
      id: 1,
      name: 'Pashupatinath Temple',
      image: 'https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=800',
      properties: 156,
      description: 'Sacred Hindu temple complex',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Boudhanath Stupa',
      image: 'https://images.pexels.com/photos/11016002/pexels-photo-11016002.jpeg?auto=compress&cs=tinysrgb&w=800',
      properties: 98,
      description: 'Ancient Buddhist monument',
      rating: 4.9
    },
    {
      id: 3,
      name: 'Swayambhunath Temple',
      image: 'https://images.pexels.com/photos/7974/pexels-photo-7974.jpeg?auto=compress&cs=tinysrgb&w=800',
      properties: 45,
      description: 'Monkey Temple with city views',
      rating: 4.7
    },
    {
      id: 4,
      name: 'Durbar Square Kathmandu',
      image: 'https://images.pexels.com/photos/4963101/pexels-photo-4963101.jpeg?auto=compress&cs=tinysrgb&w=800',
      properties: 32,
      description: 'Royal palace and temples',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Changu Narayan Temple',
      image: 'https://images.pexels.com/photos/7974962/pexels-photo-7974962.jpeg?auto=compress&cs=tinysrgb&w=800',
      properties: 28,
      description: 'Ancient Vishnu temple',
      rating: 4.5
    },
    {
      id: 6,
      name: 'Lumbini Sacred Garden',
      image: 'https://images.pexels.com/photos/631317/pexels-photo-631317.jpeg?auto=compress&cs=tinysrgb&w=800',
      properties: 67,
      description: 'Birthplace of Lord Buddha',
      rating: 4.8
    }
  ];

  const features = [
    {
      icon: <Mountain className="feature-icon" />,
      title: 'Authentic Experiences',
      description: 'Stay in traditional Nepali homes and experience local culture firsthand'
    },
    {
      icon: <Heart className="feature-icon" />,
      title: 'Local Hospitality',
      description: 'Experience the warmth of Nepali hospitality in every stay'
    },
    {
      icon: <Globe className="feature-icon" />,
      title: 'All of Nepal',
      description: 'From mountain peaks to jungle lodges, discover every corner of Nepal'
    }
  ];

  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">
              <div className="logo-icon">
                <Mountain className="mountain-icon" />
              </div>
              <div className="logo-text">
                <h1>HeavenStay</h1>
                <p>Nepal</p>
              </div>
            </div>
            <nav className="navigation">
              <a href="#" className="nav-link">Stays</a>
              <a href="#" className="nav-link">Experiences</a>
              <a href="#" className="nav-link">About Nepal</a>
              <a href="#" className="nav-link">Host</a>
            </nav>
            <div className="auth-buttons">
              <button className="Login" onClick={() => setShowLogin(true)}>Login</button>
              {/* <button className='Register' onClick={() => setShowRegister(true)}>Register</button> */}
              <button className="Login" onClick={() => setShowRegister(true)}>Register</button>
            </div>
          </div>
        </div>
      </header>

      {/* === POPUP MODALS === */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          switchToRegister={handleSwitchToRegister}
        />
      )}
      {showRegister && (
        <Register
          onClose={() => setShowRegister(false)}
          switchToLogin={handleSwitchToLogin}
        />
      )}

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <img
            src="https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Nepal Himalayas"
            className="hero-image"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <div className="hero-text">
            <h2 className="hero-title">
              Discover <span className="hero-title-accent">Nepal</span>
            </h2>
            <p className="hero-description">
              Experience authentic Nepali hospitality in the heart of the Himalayas. 
              From ancient temples to mountain peaks, your perfect stay awaits.
            </p>
            <button className="cta-button">Explore Destinations</button>
          </div>
        </div>
      </section>

      {/* Popular Destinations */}
      <section className="destinations">
        <div className="container">
          <div className="section-header">
            <h3 className="section-title">Sacred Places & Heritage Sites</h3>
            <p className="section-description">
              Explore Nepal's most sacred temples and heritage sites, where spirituality 
              meets ancient architecture in the heart of the Himalayas
            </p>
          </div>

          <div className="destinations-grid">
            {popularDestinations.map((destination) => (
              <div key={destination.id} className="destination-card">
                <div className="card-image-container">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="card-image"
                  />
                  <div className="rating-badge">
                    <Star className="star-icon" />
                    <span>{destination.rating}</span>
                  </div>
                </div>

                <div className="card-content">
                  <h4 className="card-title">{destination.name}</h4>
                  <p className="card-description">{destination.description}</p>
                  <div className="card-footer">
                    <span className="properties-count">
                      {destination.properties} properties
                    </span>
                    <button className="explore-btn">Explore →</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h3 className="section-title">Why Choose HeavenStay Nepal?</h3>
            <p className="section-description">
              Experience Nepal like never before with authentic stays and genuine local connections
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon-container">{feature.icon}</div>
                <h4 className="feature-title">{feature.title}</h4>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Banner */}
      <section className="cultural-banner">
        <div className="cultural-pattern"></div>
        <div className="container">
          <div className="banner-content">
            <h3 className="banner-title">Experience the Heart of Nepal</h3>
            <p className="banner-description">
              From ancient temples to towering peaks, every stay tells a story. 
              Join thousands of travelers who have discovered Nepal's magic through HeavenStay.
            </p>
            <button className="banner-cta">Start Your Journey</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">
                <div className="logo-icon">
                  <Mountain className="mountain-icon" />
                </div>
                <div className="logo-text">
                  <h4>HeavenStay</h4>
                  <p>Nepal</p>
                </div>
              </div>
              <p className="footer-description">
                Connecting travelers with authentic Nepali experiences in the heart of the Himalayas.
              </p>
            </div>

            <div className="footer-column">
              <h5 className="footer-heading">Company</h5>
              <ul className="footer-links">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h5 className="footer-heading">Support</h5>
              <ul className="footer-links">
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Safety</a></li>
                <li><a href="#">Cancellation</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h5 className="footer-heading">Community</h5>
              <ul className="footer-links">
                <li><a href="#">Host</a></li>
                <li><a href="#">Experiences</a></li>
                <li><a href="#">Referrals</a></li>
                <li><a href="#">Gift Cards</a></li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2025 HeavenStay Nepal. All rights reserved. Made with ❤️ for Nepal.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;
