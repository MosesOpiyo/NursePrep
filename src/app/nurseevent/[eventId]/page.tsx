import React from "react";
import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";
import "./page.css";
import "../../../styles/globals.css";
import { eventsData } from "@/assets/servicesData/services";
import { notFound } from "next/navigation";

export const getSingleEvent = (eventId: any) => {
    const data = eventsData[eventId];
  
    if (!data) {
      notFound();
    }
  
    return data;
};


export default function Event({
  params,
}: {
  params: {
    eventId: string;
  };
}) {

    const event = getSingleEvent(params.eventId);

  return (
    <>
      {/* NAVBAR */}
      <div className="individual-eventnavbar">
        <Navbar />
      </div>

      {/* INDIVIDUAL EVENT CONTENT */}
      <div className="individual-event my-16 w-4/5 mx-auto">
        <div className="event-card flex gap-16 rounded-xl h-80 border-2 border-solid border-blue-100 p-4 items-center justify-center">
          <div className="event-date flex-col flex gap-1 items-center justify-center">
            <p>{event.day}</p>
            <span>{event.date}</span>
          </div>

          <div className="event-info flex flex-col gap-4">
            <div className="event-date">
              <p className="text-fuchsia-500">
                {event.month} {event.date} @ {event.time}
              </p>
            </div>

            <div className="event-title">
              <p className="font-bold text-xl">{event.title}</p>
            </div>

            <div className="event-about">
              <p className="ps-4">{event.about}</p>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="event-footer">
        <Footer />
      </div>
    </>
  );
}
