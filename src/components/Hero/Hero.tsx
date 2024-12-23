"use client";

import React from "react";
import hero from "../../assets/hero4.jpg";
import Image from "next/image";
import "./Hero.css";
import { Button } from "../ui/button";
import anatomy from "../../assets/anatomy.jpg";
import young from "../../assets/student.jpg";
import han from "../../assets/han.jpg";
import live from "../../assets/live.jpg";
import one from "../../assets/oneonone.jpg";
import guides from "../../assets/guides.jpg";
import performance from "../../assets/performance.jpg";
import community from "../../assets/community.jpg";
import exam from "../../assets/examday.jpg";
import { useEffect, useRef, useState } from "react";
import styles from './ScrollAnimation.module.css';
import Link from "next/link"

const Hero = () => {

  return (
    <section className="relative h-[600px] w-[95%] overflow-hidden mb-16 mx-auto bg-center bg-cover rounded-3xl text-white flex items-center justify-center">
    {/* Video Background */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
    >
       <source src="/nurse.mp4" type="video/mp4" />
    </video>
    
    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/60" />
    
    {/* Content */}
    <div className="relative z-10 flex h-full w-full items-center justify-center">
      <div className="container mx-auto px-4 text-center flex flex-col items-center justify-center gap-8 mt-12">
        <h1 className="font-bold text-4xl tracking-tight text-white sm:text-5xl md:text-[4rem]">
          Ace your nursing school <br /> entrance exams. <br /> Guaranteed.
        </h1>
        <p className="mx-auto max-w-2xl font-light text-gray-200">
          Pass your entrance tests with our accurate practice questions and detailed answer explanations.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button
            asChild
            size="lg"
            className="min-w-[200px] bg-primary font-semibold hover:bg-primary/90 hover:tracking-wide"
          >
            <Link href="/get-started">
              GET STARTED NOW
            </Link>
          </Button>


          <Button
            asChild
            size="lg"
            variant="outline"
            className="min-w-[200px] border-white font-semibold text-black hover:bg-white hover:text-black hover:tracking-wide"
          >
            <Link href="/free-tests">
              BROWSE FREE TESTS
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Hero;
