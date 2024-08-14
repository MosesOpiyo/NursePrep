"use client";

import React, { useState } from 'react';
import './Navbar.css';
import { Button } from '../ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Navbar: React.FC = () => {
  const currentPath = usePathname();

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <nav className="navbar relative z-10 flex justify-between items-center">
      <div className="navbar-logo text-2xl">NursePrep</div>

      <ul className="navbar-link text-white flex gap-4 list-none">
        <li>
          <Link href="/" className={currentPath === "/" ? "active p-2" : "p-2"}>Home</Link>
        </li>
        
        <li>
          <Link href="/about" className={currentPath === "/about" ? "active p-2" : "p-2"}>About</Link>
        </li>

        <li className="dropdown">
          <Link href="/teas" className={currentPath === "/teas" ? "active p-2" : "p-2"}>ATI LEAS 7</Link>
        </li>

        <li>
          <Link href="/hesi" className={currentPath === "/hesi" ? "active p-2" : "p-2"}>HESI A2</Link>
        </li>

        <li>
          <Link href="/nursing_school" className={currentPath === "/nursing_school" ? "active p-2" : "p-2"}>Nursing School</Link>
        </li>

        <li>
          <Link href="/nurseevent" className={currentPath === "/events" ? "active p-2" : "p-2"}>Events</Link>
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
