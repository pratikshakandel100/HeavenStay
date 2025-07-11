import React, { useState } from 'react';

import Login from '../../components/Login';
import Signup from '../../components/Sigin';
import Homepage from '../../components/Homepage';
function HomeP() {
  const [currentPage, setCurrentPage] = useState('homepage');

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login onBack={() => setCurrentPage('homepage')} />;
      case 'signup':
        return <Signup onBack={() => setCurrentPage('homepage')} />;
      default:
        return (
          <Homepage 
            onLoginClick={() => setCurrentPage('login')}
            onSignupClick={() => setCurrentPage('signup')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen">
      {renderPage()}
    </div>
  );
}

export default HomeP;