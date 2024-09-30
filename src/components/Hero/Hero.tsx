"use client";

import React from "react";
import { useQueryClient } from '@tanstack/react-query';
import ContentService from "@/services/CMS/cms";
import { Page,Section } from "@/services/CMS/contentModel";
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

const Hero = () => {
  const queryClient = useQueryClient();
  const queryKey = ['homePageData'];

  const cachedData = queryClient.getQueryData<Page>(queryKey);

  const heroSection = cachedData?.sections.find(
    (section) => section.name === 'Hero'
  );

  const boxRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const boxElement = boxRef.current;

    const handleScroll = () => {
      if (boxElement) {
        const rect = boxElement.getBoundingClientRect();
        const isInViewport = rect.top <= window.innerHeight && rect.bottom >= 0;
        setIsVisible(isInViewport);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Initial check in case the element is already visible on load
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
      <section className="hero-container grid items-center justify-center w-full relative">
        <div className="hero-text sm:pt-32 text-white p sm:px-16 h-full w-full flex flex-col gap-10 items-center justify-center">
          <h1 className="hero-header relative text-center sm:text-6xl text-5xl">
            {heroSection?.title}
          </h1>
          <p className="hero-paragraph text-center">
            {heroSection?.section_text}
          </p>

          {/* HERO BUTTONS */}
          <div className="action-btn flex gap-4">
            <Button className="p-5">GET STARTED NOW</Button>
            <Button className="p-5">BROWSE FREE TESTS</Button>
          </div>
        </div>

        <div className="image-container h-full w-full">
          <video className="video h-full w-full object-cover" autoPlay muted loop>
            <source src="/nurse.mp4" type="video/mp4" />
          </video>
        </div>
      </section>
  );
};

export default Hero;
