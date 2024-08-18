import React from 'react';
import Link from 'next/link';
import '../../styles/globals.css';
import Navbar from '@/components/Navbar/navbar';
import './page.css';
import { Input } from "@/components/ui/input"
import { eventsData } from '@/assets/servicesData/services';
import Footer from '@/components/Footer/Footer';

const Events = () => {

  return (
    <div>
      {/* NAVBAR */}
        <div className='eventsnavbar-container'>
          <Navbar></Navbar>
        </div>

      {/* EVENTS SEARCH BAR */}
      <div className="searhcbar w-4/5 mx-auto my-16 -4">
      <Input type="search" className='h-14' placeholder="Search for an event..." />
      </div>

      {/* EVENTS-LIST */}
      <div className="events-list flex flex-col gap-4 w-4/5 mx-auto mb-16 p-4">


      {eventsData.map(event => (
        <Link href={`/nurseevent/${event.id}`} key={event.id} className="event-card flex gap-16 rounded-xl border-2 border-solid border-blue-100 p-4">

        <div className="event-date flex-col flex gap-1 items-center justify-center">
          <p>{event.day}</p>
          <span>{event.date}</span>
        </div>

        <div className="event-info flex flex-col gap-4">
          <div className="event-date">
            <p className='text-fuchsia-500'>{event.month} {event.date} @ {event.time}</p>
          </div>

          <div className="event-title">
            <p className='font-bold text-xl'>{event.title}</p>
          </div>

          <div className="event-about">
            <p className='ps-4'>{event.about}</p>
          </div>

        </div>
      </Link>
      )
      )}

      </div>

      {/* FOOTER */}
      <div className="events-footer">
        <Footer />
      </div>
    </div>
  )
}

export default Events
