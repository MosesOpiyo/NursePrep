import React from 'react';
import Link from 'next/link';
import '../../styles/globals.css';
import Navbar from '@/components/Navbar/navbar';
import './page.css';
import AboutPage from '@/components/AboutPage/About';

const About = () => {
  return (
    <>
        <div className='navbar-container'>
          <Navbar />
        </div>

        <AboutPage />
    </>
  )
}

export default About
