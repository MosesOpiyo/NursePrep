import React from 'react';
import Link from 'next/link';
import '../../styles/globals.css';
import Navbar from '@/components/Navbar/navbar';
import './page.css'

const Hesi = () => {
  return (
    <div>
        <div className='navbar-container'>
          <Navbar></Navbar>
        </div>
      <h1>HESI PAGE</h1>
      <Link href="/">Home page</Link>
    </div>
  )
}

export default Hesi
