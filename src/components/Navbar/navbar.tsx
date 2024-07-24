"use client";

import React, { useState } from 'react';
import './Navbar.css';
import { Button } from '../ui/button';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar relative z-10 text-white flex justify-between items-center">
      <div className="navbar-logo text-2xl">NursePrep</div>

      <ul className="navbar-links flex gap-2.5 list-none">
        <li>
          <Link href="/">About</Link>
        </li>

        <li className="dropdown">
          <Link href="/about">ATI LEAS 7</Link>
        </li>

        <li>
          <Link href="/contact">HESI A2</Link>
        </li>

        <li>
          <Link href="/contact">Nursing School</Link>
        </li>

        <li>
          <Link href="/contact">Events</Link>
        </li>
      </ul>

      <div className="navbar-auth flex items-center">
        {isLoggedIn ? (
          <>
            <span>Welcome, User!</span>
            <button type='button' onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button type='button' className='login-button' onClick={handleLogin}>Sign in</button>
          
        )}

        <button type='button' className='sign-up-button'>Sign up</button>
      </div>
    </nav>
  );
};

export default Navbar;
