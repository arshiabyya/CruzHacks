import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header className="main-header">
      <h1>SlugClub</h1>
      
      <div className="nav-buttons">
        <Link to="/" className={`nav-btn ${location.pathname === '/' ? 'active' : ''}`}>
          View Clubs
        </Link>
        <Link to="/" className="nav-btn">
          Search
        </Link>
        <Link to="/add-event" className={`nav-btn ${location.pathname === '/add-event' ? 'active' : ''}`}>
          Add An Event
        </Link>
      </div>
    </header>
  );
};

export default Header;