"use client"

import Link from 'next/link'
import "./page.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/Navbar/navbar";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Book, Calculator, FlaskRoundIcon as Flask, BookOpen } from 'lucide-react'
import { faqData } from "../../assets/servicesData/services";
import Footer from "@/components/Footer/Footer";
import Image from "next/image";
import CTA from '@/components/CTA/cta';
import { motion } from "framer-motion"
import TestimonialSection from '@/components/Testimonial-carousel/testimonialcarousel';
import React, { useState, useRef } from 'react'
import VideoSection from '@/components/Videosection/VideoSection';

const subjects = [
  { name: 'English', slug: 'english', imageUrl: '/english.jpg', icon:'Book' },
  { name: 'Math', slug: 'math', imageUrl: '/math.jpg', icon:'Calculator' },
  { name: 'Science', slug: 'science', imageUrl: '/science.jpg', icon:'Flask' },
  { name: 'Reading', slug: 'reading', imageUrl: '/reading.jpg', icon:'BookOpen' },
]

export default function TeasPage() {

  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <>
      <section className="teas-container">
        {/* NAVBAR */}
        <section className="navbar-container">
          <Navbar></Navbar>
        </section>

        {/* ati HERO SECTION */}
        <section className="ati-hero mt-8 mb-16 relative mx-auto bg-center bg-cover rounded-3xl text-white flex items-center justify-center">
          <div className="atihero-header z-10 flex flex-col items-center justify-center gap-8">
            <h2 className="font-extralight text-4xl sm:text-5xl">
              ATI TEAS 7 Lessons and Practice Tests
            </h2>
          </div>
        </section>

        {/* TEAS SUBJECT LIST */}
        <section className="teas-list w-[95%] mx-auto mb-16 flex flex-col gap-4">

          <div className="teas-header flex flex-col text-center p-4 gap-2 items-center">
          <p className="text-sm font-medium uppercase text-indigo-600">
              Access in-depth resources and practice tests
            </p>

            <h2 className="basis-full text-3xl md:text-4xl font-bold tracking-tight">
                Choose a <span className="text-indigo-600">subject area</span> below to begin practicing:
            </h2>
          </div>

          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {subjects.map((subject) => (
                <Link href={`/teas-test/${subject.slug}`} key={subject.slug}>
                  <Card
                    className={`h-80 text-white flex flex-col justify-center hover:shadow-lg hover:scale-110 transition-shadow relative overflow-hidden ${subject.slug}`}
                  >
                    {/* <span className="ml-6 w-1/5 border-t-2 border-t-white"></span> */}

                    <CardHeader>
                      <CardTitle className="text-4xl">{subject.name}</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <p>Explore {subject.name} topics for TEAS</p>
                    </CardContent>

                    <div className="icon absolute right-0 top-0 opacity-10 translate-x-1/4 -translate-y-1/4">
                      {subject.name === "English" ? (
                        <Book className="w-32 h-32" />
                      ) : subject.name === "Math" ? (
                        <Calculator className="w-32 h-32" />
                      ) : subject.name === "Science" ? (
                        <Flask className="w-32 h-32" />
                      ) : (
                        <BookOpen className="w-32 h-32" />
                      )}
                    </div>

                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* WALKTHROUGH VIDEO */}
        <section className="pb-16 video-container relative z-20 after:absolute after:content-[''] after:top-[60%] after:left-0 after:bg-[#b8c9db] after:h-[40%] after:w-full after:-z-10 flex flex-col gap-2">
          <VideoSection />
        </section>

        {/* TESTIMONIAL */}
       <section className='mb-16'>
       <TestimonialSection />
       </section>

        {/* CTA */}
        <section className="w-[95%] mx-auto mb-16">
          <CTA />
        </section>

        {/* FAQ SECTION */}
        <section className="faq-container mx-auto flex flex-col gap-8 mb-8 p-4 w-[95%]">
          <div className="faq-header text-start">
            <h2 className="font-extralight text-[#000000a8] text-4xl sm:text-5xl">
              Got any questions?
            </h2>
            <p className="font-extralight text-4xl sm:text-5xl text-black">
              We&apos;ve got answers
            </p>
          </div>

          <div className="faq-content p-6">
            <Accordion
              type="single"
              collapsible
              className="md:grid md:grid-cols-2 flex flex-col gap-2"
            >
              {faqData.map((item) => (
                <AccordionItem
                  className="bg-[#efefef] p-2 rounded-xl"
                  value={item.value}
                  key={item.id}
                >
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
}