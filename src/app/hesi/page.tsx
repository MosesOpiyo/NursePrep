import React from "react";
import Link from "next/link";
import "../../styles/globals.css";
import Navbar from "@/components/Navbar/navbar";
import "./page.css";
import { hesiData } from "@/assets/servicesData/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData } from "../../assets/servicesData/services";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";

const Hesi = () => {
  return (
    <>
      <section className="hesi-container">
        {/* NAVBAR */}
        <section className="navbar-container">
          <Navbar></Navbar>
        </section>

        {/* HESI SUBJECT LIST */}
        <section className="hesi-list mt-16 mb-32 flex flex-col gap-4">
          <div className="hesi-header flex flex-col text-center p-4 gap-4 items-center">
            <h2 className="font-bold text-4xl sm:text-5xl">
              HESI A2 Free Practice Tests
            </h2>
            <p>Choose a HESI A2 subject area below to begin practicing.</p>
          </div>

          <ul className="w-4/5 mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {hesiData.map((item) => (
              <li
                key={item.id}
                className="h-52 border-solid border flex items-center justify-center relative"
              >
                <Link
                  href={`/hesi/${item.id}`}
                  className="text-white text-2xl h-full w-full flex items-center justify-center"
                >
                  {item.name}
                </Link>

                <div className="subject-image absolute -z-10 w-full top-0 left-0 h-full after:content-[''] after:top-0 after:left-0 after:w-full after:h-full after:absolute after:bg-black after:opacity-50 after:z-10">
                  <Image
                    className="h-full w-full object-center object-cover"
                    src={item.imageUrl}
                    alt="a smiling nurse"
                    fill={true}
                    sizes="100%"
                  />
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* WALKTHROUGH VIDEO */}
        <section className="walkthrough-container mb-32 flex flex-col gap-16">
          <div className="walkthrough-header flex text-center p-4 flex-col gap-4 items-center">
            <h2 className="font-bold text-4xl sm:text-5xl">
              Wondering where to start?
            </h2>
            <p>Follow the step-by-step guide video below: </p>
          </div>

          <div className="walkthrough-video w-4/5 mx-auto">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/bKEGd72Lwf4"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="faq-container mx-auto flex flex-col gap-8 mb-32 p-4">
          <div className="faq-header text-center">
            <h2 className="font-bold text-5xl">
              Have Questions? <br /> We&apos;re here
            </h2>
          </div>

          <div className="faq-content p-8">
            <Accordion type="single" collapsible>
              {faqData.map((item) => (
                <AccordionItem value={item.value} key={item.id}>
                  <AccordionTrigger className="text-xl">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-slate-600">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </section>

      {/* FOOTER */}
      <Footer />
    </>
  );
};

export default Hesi;
