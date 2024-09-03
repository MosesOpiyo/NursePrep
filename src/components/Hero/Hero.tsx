"use client";

import React from "react";
import { useQuery } from '@tanstack/react-query';
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

const Hero = () => {
  const { data: pageData } = useQuery<Page>({queryKey:['homePageData']});

  const bannerSection = pageData?.sections.find(
    (section) => section.title === 'Banner'
  );
  const contentText = bannerSection?.content_blocks.find(
    (text) => text.type === 'Title-Text'
  );

  return (
      <section className="hero-container grid items-center justify-center w-full relative">
        <div className="hero-text pt-32 text-white px-16 h-full w-full flex flex-col gap-10 items-center justify-center">
          <h1 className="hero-header relative text-center">
            {bannerSection?.title}
            Ace your nursing school entrance exams. <span>Guaranteed.</span>
          </h1>
          <p className="hero-paragraph">
            {contentText?.content}
            Pass your entrance tests with our accurate practice questions and
            detailed answer explanations.
          </p>

          <div className="action-btn flex gap-4">
            <Button>GET STARTED NOW</Button>
            <Button>BROWSE FREE TESTS</Button>
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
