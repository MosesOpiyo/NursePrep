import React from 'react';
import Link from 'next/link';
import '../../styles/globals.css';
import Navbar from '@/components/Navbar/navbar';
import './page.css';
import { teasData } from '@/assets/servicesData/services';

const Teas = () => {
  return (
    <div>
        <div className='navbar-container'>
          <Navbar></Navbar>
        </div>
      <h1>TEAS PAGE</h1>
      <Link href="/">Home page</Link>

      <ul>

      {teasData.map((item) => (
        <li key={item.id}>
          <Link href={`/teas/${item.id}`}>
            {item.name}
          </Link>
        </li>
      ))}

      </ul>
    </div>
  )
}

export default Teas
