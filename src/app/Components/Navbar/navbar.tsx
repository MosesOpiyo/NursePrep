"use client";

import React, { useState } from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">NursePrep</div>
      <ul className="navbar-links">
        <li><a href="/">About</a></li>
        <li className="dropdown"><a href="/about">ATI LEAS 7</a></li>
        <li><a href="/contact">HESI A2</a></li>
        <li><a href="/contact">Nursing School</a></li>
        <li><a href="/contact">Events</a></li>
      </ul>
      <div className="navbar-auth">
        {isLoggedIn ? (
          <>
            <span>Welcome, User!</span>
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button className='login-button' onClick={handleLogin}>Sign in</button>
          
        )}
        <button className='sign-up-button'>Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
